import { gql } from "@apollo/client";

export const GET_USERS_LIST = gql`
  query getUsers {
    getUsers {
      id
      login
      avatar_url
    }
  }
`;
