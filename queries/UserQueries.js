import {gql} from '@apollo/client/core';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      nickName
    }
  }
`;
export {GET_USERS};
