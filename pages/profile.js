import { useUser } from "../lib/hooks";
import Layout from "../src/components/layout";
import { GetUsers, UpdateUser, CreateRecord, GetRecords } from "../graphql/api";
import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";

const Profile = () => {
  const SessionUser = useUser({ redirectTo: "/login" });

  const [presentUser, setPresentUser] = React.useState();

  const [records, setRecords] = React.useState([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await UpdateUser(
      presentUser.username,
      presentUser.password,
      data.preferredBrand,
      data.about,
      data.trueAge,
      data.biologicalAge,
      data.country,
      "",
      data.contactInfo,
      presentUser._id
    );
    let json = await response.json();
    if (json?.errors?.length > 0) {
      console.log(json);
      alert("failed ::", json);
    } else {
      alert("sucess");
    }
  };

  const OnRecordSubmit = async (data) => {
    let date = new Date().toDateString();

    records.push({
      username: presentUser.username,
      review: data.review,
      amountConsumed: data.amountConsumed,
      date: date,
      productConsumed: data.productConsumed,
    });

    const response = CreateRecord(
      presentUser.username,
      data.review,
      data.amountConsumed,
      date,
      data.productConsumed
    );
    setRecords(records);
  };
  React.useEffect(() => {
    try {
      loadUser();
      loadRecords();
    } catch (e) {}
  }, [SessionUser]);

  const loadUser = async () => {
    const response = await GetUsers();
    let json = await response.json();
    if (json?.errors?.length > 0) {
      throw { message: "Database error" };
    } else {
      const matchedUser = json.data.users.data.filter(
        (user) => user?.username === SessionUser?.username
      );

      if (matchedUser.length === 0) {
        throw { message: "User Dosenot Exisit" };
      } else {
        setPresentUser(matchedUser[0]);
      }
    }
  };

  const loadRecords = async () => {
    const response = await GetRecords();
    let json = await response.json();
    if (json?.errors?.length > 0) {
      throw { message: "Database error" };
    } else {
      const matchedRecords = json.data.dailyRecords.data.filter(
        (record) => record?.username === SessionUser?.username
      );

      if (matchedRecords.length > 0) {
        setRecords(matchedRecords);
      }
    }
  };

  return (
    <Layout>
      <style jsx>{`
        .form {
          max-width: 200px;
          margin: 0 auto;
        }

        input {
          display: block;
          box-sizing: border-box;
          width: 100%;
          border-radius: 4px;
          border: 1px solid white;
          padding: 10px 15px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        input[type="submit"],
        .button {
          background: #ec5990;
          color: white;
          text-transform: uppercase;
          border: none;
          margin-top: 10px;
          padding: 10px;
          font-size: 16px;
          font-weight: 100;
          letter-spacing: 10px;
          display: block;
          appearance: none;
          border-radius: 4px;
          width: 100%;
          font-weight: lighter;
        }
      `}</style>
      <Container maxWidth="md">
        <h1>Profile</h1>
        <Grid container spacing={5}>
          <Grid item md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography>Preferred Brand :</Typography>
              <input
                name="preferredBrand"
                defaultValue={presentUser?.preferredBrand}
                ref={register}
                placeholder="Preferred Brand"
              />

              <Typography>About :</Typography>
              <input
                name="about"
                defaultValue={presentUser?.about}
                ref={register}
                placeholder="let us know about you"
              />

              <Typography>True Age :</Typography>
              <input
                name="trueAge"
                defaultValue={presentUser?.trueAge}
                ref={register}
                placeholder="How old are you statiscally"
              />

              <Typography>Biological Age :</Typography>
              <input
                name="biologicalAge"
                defaultValue={presentUser?.biologicalAge}
                ref={register}
                placeholder="How old are you Biologically"
              />

              <Typography>Country :</Typography>
              <input
                name="country"
                defaultValue={presentUser?.country}
                ref={register}
                placeholder="You are from?"
              />

              <Typography>Contact Info :</Typography>
              <input
                name="contactInfo"
                defaultValue={presentUser?.contactInfo}
                ref={register}
                placeholder="How can we reach you"
              />

              <input type="submit" />
            </form>
          </Grid>
          <Grid item md={5}>
            <h2>Add Daily Log</h2>
            <form onSubmit={handleSubmit(OnRecordSubmit)}>
              <Typography>Product Consumed :</Typography>
              <input
                name="productConsumed"
                ref={register}
                placeholder="Name Product that you Consumed today"
              />

              <Typography>Amount Consumed :</Typography>
              <input
                name="amountConsumed"
                ref={register}
                placeholder="Quantity of Product Consumed"
              />

              <Typography>Review :</Typography>
              <input
                name="review"
                ref={register}
                placeholder="How are you feeling ?"
              />

              <input type="submit" />
            </form>
            <h2>Daily Logs</h2>
            <Box>
              {records?.map((record, i) => (
                <Paper style={{ margin: "1rem" }} key={i}>
                  <Box
                    px={2}
                    py={1}
                    display="flex"
                    justifyContent="space-around"
                  >
                    <Box>{`Product : ${record.productConsumed}`}</Box>
                    <Box>{`Quantity : ${record.amountConsumed}`}</Box>
                  </Box>
                  <Box px={2} py={1} ml={5}>{`${record.date}`}</Box>
                  <Box px={2} py={1} ml={5}>
                    {record.review}
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Profile;
