import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  if (loading) {
    return "Loading...";
  }

  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }

  return <h1>Home</h1>;
};
