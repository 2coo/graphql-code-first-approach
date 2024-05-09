import { FC } from "react";
import { FragmentType, getFragmentData, graphql } from "../gql";

const OrderItemData = graphql(`
  fragment OrderItemData on OrderItem {
    id
    name
    price
  }
`);

const OrderItem: FC<{
  data: FragmentType<typeof OrderItemData>;
}> = ({ ...props }) => {
  const data = getFragmentData(OrderItemData, props.data);
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.price}</div>
    </div>
  );
};

export default OrderItem;
