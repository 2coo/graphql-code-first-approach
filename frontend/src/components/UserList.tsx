import { FC, ReactNode } from "react";
import { P, match } from "ts-pattern";
import { FragmentType, getFragmentData, graphql } from "../gql";

const UserListFragment = graphql(`
  fragment UserListData on Query {
    users {
      id
      name
      type
      ... on Human {
        registrationNumber
      }
      ... on Robot {
        modelNumber
      }
    }
  }
`);

const UserList: FC<{
  data: FragmentType<typeof UserListFragment>;
}> = ({ ...props }) => {
  const data = getFragmentData(UserListFragment, props.data);
  return (
    <div>
      {match(data)
        .returnType<ReactNode>()
        .with(
          {
            users: P.nonNullable,
          },
          ({ users }) => (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {match(user)
                    .returnType<ReactNode>()
                    .with(
                      {
                        __typename: "Human",
                      },
                      (user) => (
                        <>
                          "👤"
                          {user.name} ({user.registrationNumber})
                        </>
                      )
                    )
                    .with(
                      {
                        __typename: "Robot",
                      },
                      (user) => (
                        <>
                          "🤖"
                          {user.name} ({user.modelNumber})
                        </>
                      )
                    )
                    .exhaustive()}
                </li>
              ))}
            </ul>
          )
        )
        .otherwise(() => (
          <div>Something went wrong!</div>
        ))}
    </div>
  );
};

export default UserList;
