import React from "react";
import { Row, Layout, Button, Dropdown, Menu } from "antd";
import Icon from '@ant-design/icons';
import routes from "../../routes";

const { Header, Content } = Layout;

class AuthLayout extends React.Component {
  

  onLogout = () => {
    // Remove token & other stored data
    localStorage.clear();
    this.props.history.push(routes.login);
  };

  render() {
    return (
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "#003f3a"
          }}
        >
          <Row
            type="flex"
            align="middle"
            justify="end"
            style={{ height: "100%" }}
          >
            {/* Dropdown with option to logout */}
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1" onClick={this.onLogout}>
                    <Icon type="logout" />
                    Logout
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Button ghost className="primary-btn">
                User@gmail.com <Icon type="down" />
              </Button>
            </Dropdown>
          </Row>
        </Header>

        <Content style={{ padding: "0 50px", marginTop: 64, height: "100vh" }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default AuthLayout;