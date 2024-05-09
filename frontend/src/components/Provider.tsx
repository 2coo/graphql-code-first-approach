import { FC, PropsWithChildren } from "react";
import { Provider as UrqlProvider } from "urql";
import { urqlClient } from "../lib/urql-client";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <UrqlProvider value={urqlClient}>{children}</UrqlProvider>;
};

export default Provider;
