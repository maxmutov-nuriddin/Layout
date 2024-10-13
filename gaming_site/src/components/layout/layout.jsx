import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

import "./layout.css";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: <Link to="/">First</Link>,
  },
  {
    key: "2",
    label: <Link to="/Second">Second</Link>,
  },
  {
    key: "3",
    label: <Link to="/Third">Third</Link>,
  },
];

const LayoutPage = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content>
        <div>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <span className="layout-span__text">FWB</span> ©{new Date().getFullYear()} Created by <span className="layout-span__text">FWB</span>
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
