import useFetch from "../lib/useFetch";

function getData(data) {
  if (!data || data.errors) return null;
  return data.data;
}

function getErrorMessage(error, data) {
  if (error) return error.message;
  if (data && data.errors) {
    return data.errors[0].message;
  }
  return null;
}

/**
|--------------------------------------------------
| This GraphQL query returns an array of Guestbook
| entries complete with both the provided and implicit
| data attributes.
|
| Learn more about GraphQL: https://graphql.org/learn/
|--------------------------------------------------
*/
export const GetUsers = () => {
  const query = `query getUsers {
    users {
  data{
       _id
     username
     password
     preferredBrand
     about
     trueAge
     biologicalAge
     country
     sex
     contactInfo
 }
    }
 }`;
  const size = 1000;
  return fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization:
        "Basic Zm5BRDhVaEhhUUFDQWp2WWlybG1YbUZ4aWJROTVDbnYwSUREWXZ0NzpubW50ZXN0OnNlcnZlcg==",
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  });
};

export const CreateUser = (
  username,
  password,
  preferredBrand,
  about,
  trueAge,
  biologicalAge,
  country,
  sex,
  contactInfo
) => {
  const query = `mutation CreateUser(
    $username :String!,
    $password :String!,
    $preferredBrand :String!,
    $about :String!,
    $trueAge :String!,
    $biologicalAge :String!,
    $country :String!,
    $sex :String!,
     $contactInfo :String!,
  
  ) {
     createUser(data: {
     username:$username
     password:$password
      preferredBrand:$preferredBrand
      about:$about
      trueAge:$trueAge
      biologicalAge:$biologicalAge
      country:$country
      sex:$sex
      contactInfo:$contactInfo
     }) {
      _id
      username
      password
      preferredBrand
      about
      trueAge
      biologicalAge
      country
      sex
      contactInfo
     }
  }`;
  return fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization:
        "Basic Zm5BRDhVaEhhUUFDQWp2WWlybG1YbUZ4aWJROTVDbnYwSUREWXZ0NzpubW50ZXN0OnNlcnZlcg==",
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: username,
        password: password,
        preferredBrand: preferredBrand,
        about: about,
        trueAge: trueAge,
        biologicalAge: biologicalAge,
        country: country,
        sex: sex,
        contactInfo: contactInfo,
      },
    }),
  });
};

export const UpdateUser = (
  username,
  password,
  preferredBrand,
  about,
  trueAge,
  biologicalAge,
  country,
  sex = "",
  contactInfo,
  _id
) => {
  const query = `mutation UpdateUser(
    $_id:ID!,
      $preferredBrand :String!,
      $about :String!,
      $trueAge :String!,
      $biologicalAge :String!,
      $country :String!,
      $sex :String!,
       $contactInfo :String!,
    $username :String!,
      $password :String!,
    
    ) {
       updateUser(id : $_id,data:{
        username:$username
       password:$password
        preferredBrand:$preferredBrand
        about:$about
        trueAge:$trueAge
        biologicalAge:$biologicalAge
        country:$country
        sex:$sex
        contactInfo:$contactInfo
      }
      ) {
        _id
        username
        password
        preferredBrand
        about
        trueAge
        biologicalAge
        country
        sex
        contactInfo
       }
    }`;
  return fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization:
        "Basic Zm5BRDhVaEhhUUFDQWp2WWlybG1YbUZ4aWJROTVDbnYwSUREWXZ0NzpubW50ZXN0OnNlcnZlcg==",
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        _id: _id,
        username: username,
        password: password,
        preferredBrand: preferredBrand,
        about: about,
        trueAge: trueAge,
        biologicalAge: biologicalAge,
        country: country,
        sex: sex,
        contactInfo: contactInfo,
      },
    }),
  });
};

export const CreateRecord = (
  username,
  review,
  amountConsumed,
  date,
  productConsumed
) => {
  const query = `mutation CreateRecord(
    $review: String!
    $amountConsumed: String!
    $username: String!
    $date: String!
    $productConsumed: String!
    ) {
       createDailyRecord(data: {
        username: $username,
        review:$review,
        amountConsumed:$amountConsumed,
        date:$date,
        productConsumed:$productConsumed
       }) {
        _id
  
       }
    }`;
  return fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization:
        "Basic Zm5BRDhVaEhhUUFDQWp2WWlybG1YbUZ4aWJROTVDbnYwSUREWXZ0NzpubW50ZXN0OnNlcnZlcg==",
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: username,
        review: review,
        amountConsumed: amountConsumed,
        date: date,
        productConsumed: productConsumed,
      },
    }),
  });
};

export const GetRecords = () => {
  const query = `query getRecords {
    dailyRecords {
  data{
 username
  date
  productConsumed
  amountConsumed
  review
 }
    }
 }`;
  const size = 1000;
  return fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization:
        "Basic Zm5BRDhVaEhhUUFDQWp2WWlybG1YbUZ4aWJROTVDbnYwSUREWXZ0NzpubW50ZXN0OnNlcnZlcg==",
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  });
};
