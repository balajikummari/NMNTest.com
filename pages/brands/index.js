import { useRouter } from 'next/router';
import Head from 'next/head';

import client from '../../src/apollo/client';


export default function BrandsPage(props) {

    return (
        <div>
            Brands Page
        </div>);
}


// export async function getStaticPaths() {
//     const { data } = await client.query({
//         query: GetCities,
//     });

//     const citypaths = data ? data?.cities?.edges?.map(({ node: city }) => {
//         return { params: { city: city.slug, } }
//     }) : [];

//     return { paths: citypaths, fallback: false }
// }

// export async function getStaticProps({ params }) {

//     const { city: city } = params
//     const count = 10


//     const { data: dataNLs, errors: errorsNLs } = await client.query({
//         query: GetNLsOfCity,
//         variables: { city, count }
//     });
//     dataNLs ? console.log(`${city}'s NLs fetched`) : console.log(`${city}'s NLs Failed :`, errorsNLs)

//     const { data: dataStories, errors: errorsStories } = await client.query({
//         query: GetStoriesOfCity,
//         variables: { city, count }
//     });

//     dataStories ? console.log(`${city}'s Stories fetched`) : console.log(`${city}'s NLs Failed :`, errorsStories)

//     const { data: dataCitySpeaks, errors: errorsCitySpeaks } = await client.query({
//         query: GetCitySpeaks,
//         variables: { city, count }
//     });

//     dataCitySpeaks ? console.log(`${city}'s citySpeaks fetched`) : console.log(`${city}'s citySpeaks Failed :`, errorsCitySpeaks)



//     const newsletters = dataNLs ? dataNLs?.newsletters?.edges?.map(({ node: newsletter }) => {
//         return {
//             title: newsletter.title || '',
//             slug: newsletter.slug || '',
//             date: newsletter.dateGmt || '',
//             imageUrl: newsletter?.featuredImage?.node?.mediaItemUrl || ''
//         }
//     }) : [];

//     const stories = dataStories ? dataStories?.stories?.edges?.map(({ node: story }) => {
//         return {
//             title: story.title || '',
//             slug: story.slug || '',
//             date: story.dateGmt || '',
//             imageUrl: story?.featuredImage?.node?.mediaItemUrl || '',
//             authorName: story?.author?.node?.name || '',
//             category: story.categories.edges ? story.categories.edges[0]?.node?.name : ''
//         }
//     }) : [];

//     const citySpeaks = dataCitySpeaks ? dataCitySpeaks?.cityspeaks?.edges?.map(({ node: cityspeak }) => {
//         return {
//             title: cityspeak.title || '',
//             slug: cityspeak.slug || '',
//             date: cityspeak.dateGmt || '',
//             imageUrl: cityspeak?.featuredImage?.node?.mediaItemUrl || '',
//             authorName: cityspeak?.author?.node?.name || '',
//         }
//     }) : [];


//     return { props: { city: params.city, newsletters: newsletters, stories: stories, citySpeaks: citySpeaks } }
// }