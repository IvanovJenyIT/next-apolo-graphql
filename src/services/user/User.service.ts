import gql from "graphql-tag";

// const { data, loading, error } = useQuery(UserService.getAllUsers());

export const UserService = {
  getAllUsers() {
    return gql`
      query getUsers {
        users {
          id
          email
        }
      }
    `;
  },
};
