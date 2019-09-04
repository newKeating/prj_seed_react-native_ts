import React from "react";
import styled from "styled-components";
// import { gql } from "apollo-boost";
// import { useQuery } from "react-apollo-hooks";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

// const FETCH_USERS = gql`
//   {
//     fetchUsers {
//       id
//       email
//       name
//     }
//   }
// `;

export default () => {
  // const { data, error, loading } = useQuery(FETCH_USERS);
  // if (loading) {
  //   console.log("loading");
  // } else if (data) {
  //   console.log("Home", JSON.stringify(data));
  // }

  // console.log("error", error);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
