import { FC, ReactNode } from "react";
import { P, match } from "ts-pattern";
import { FragmentType, getFragmentData, graphql } from "../gql";
import OrderItem from "./OrderItem";

const OrderListFragment = graphql(`
  fragment OrderListData on Query {
    orders {
      id
      total
      items {
        ...OrderItemData
      }
    }
  }
`);

const OrderList: FC<{
  data: FragmentType<typeof OrderListFragment>;
}> = ({ ...props }) => {
  const data = getFragmentData(OrderListFragment, props.data);
  return (
    <div>
      {match(data)
        .returnType<ReactNode>()
        .with(
          {
            orders: P.nonNullable,
          },
          ({ orders }) => (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  {order.id} - {order.total}
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        <OrderItem data={item} />
                      </li>
                    ))}
                  </ul>
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

export default OrderList;
