import { ReactNode } from "react";
import { P, match } from "ts-pattern";
import { useQuery } from "urql";
import UserList from "./components/UserList";
import { graphql } from "./gql";
import OrderList from "./components/OrderList";

// *NOTE*:
// eslint will complain if you violate the rules @graphql-eslint/recommended
const UsersDocument = graphql(`
  query HomePageData {
    ...OrderListData
    ...UserListData
  }
`);

function App() {
  const [result] = useQuery({ query: UsersDocument });
  return (
    <div>
      {match(result)
        .returnType<ReactNode>()
        .with(
          {
            fetching: true,
          },
          () => <div>Loading...</div>
        )
        .with(
          {
            error: P.nonNullable,
          },
          ({ error }) => <div>{error.message}</div>
        )
        .with(
          {
            data: P.nonNullable,
          },
          ({ data }) => (
            <>
              <UserList data={data} />
              <OrderList data={data} />
            </>
          )
        )
        .otherwise(() => (
          <div>Something went wrong!</div>
        ))}
    </div>
  );
}

export default App;
