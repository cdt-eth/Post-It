import { ReactElement } from "react";

type Children = {
  children: JSX.Element;
};

const Layout = ({ children }: Children): ReactElement => {
  return <div>{children}</div>;
};
export default Layout;
