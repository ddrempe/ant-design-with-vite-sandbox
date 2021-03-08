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

const sideMenuOptions = [
  {
    id: "fire",
    title: "Fire",
    icon: <UserOutlined />,
    items: [
      { id: 1, title: "Charmander" },
      { id: 2, title: "Vulpix" },
    ],
  },
  {
    id: "water",
    title: "Water",
    icon: <LaptopOutlined />,
    items: [{ id: 3, title: "Blastoise" }],
  },
  {
    id: "electric",
    title: "Electric",
    icon: <NotificationOutlined />,
    items: [
      { id: 4, title: "Pikachu" },
      { id: 5, title: "Jolteon" },
    ],
  },
];

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
        <Header>
          <Link href="/">Pokémon App</Link>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0" }}>
            <Sider width={200}>
              <Menu
                mode="inline"
                defaultOpenKeys={["electric"]}
                style={{ height: "100%" }}
                onClick={handleClick}
                selectedKeys={[currentMenuItem]}
              >
                {sideMenuOptions.map((option) => (
                  <SubMenu
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                  >
                    {option.items.map((item) => (
                      <Menu.Item key={item.id}>{item.title}</Menu.Item>
                    ))}
                  </SubMenu>
                ))}
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                {sideMenuOptions.map((option) =>
                  option.items.map((item) => (
                    <Route path={`/${item.id}`}>
                      <Title>{item.title}</Title>
                    </Route>
                  ))
                )}
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
