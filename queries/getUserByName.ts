import { gql } from "@apollo/client";

export const GET_USER_BY_NAME = gql`
  query getUserByName($name: String!) {
    getUser(name: $name) {
      id
      login
      avatar_url
    }
  }
`;
