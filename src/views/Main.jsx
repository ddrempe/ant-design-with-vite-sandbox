import React, { Fragment, useState } from "react";

import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./Home";

const { Link, Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Main() {
  const [currentMenuItem, setCurrentMenuItem] = useState();
  const history = useHistory();

  const handleClick = (e) => {
    setCurrentMenuItem(e.key);
    history.push(e.key);
  };

  return (
    <Fragment>
      <Layout>
        <Header className="header">
          <Link href="/">Pokémon App</Link>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                onClick={handleClick}
                selectedKeys={[currentMenuItem]}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Fire">
                  <Menu.Item key="1">Charmander</Menu.Item>
                  <Menu.Item key="2">Vulpix</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Water">
                  <Menu.Item key="3">Blastoise</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="Electric"
                >
                  <Menu.Item key="4">Pikachu</Menu.Item>
                  <Menu.Item key="5">Jolteon</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Route path="/1">
                  <Title>Charmander</Title>
                </Route>
                <Route path="/2">
                  <Title>Vulpix</Title>
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design. React app created with Vite
        </Footer>
      </Layout>
    </Fragment>
  );
}
