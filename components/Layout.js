import Nav from "./Nav";
import HeadInfo from "./HeadInfo";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo></HeadInfo>
      <Nav></Nav>
      <div>{children}</div>
    </>
  );
};
export default Layout;
