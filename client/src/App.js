import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Home from './components/Home';
import Auth from './components/Auth';
import PrivateRoute from './components/routing/PrivateRoute';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Fragment>
        <Layout className="layout">
          <Header>
            <NavbarMenu />
          </Header>
          <Content style={{
            margin: '25px 15px',
            padding: 25,
            background: '#fff',
            minHeight: 300
          }}>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={Auth} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Contact Keeper ©2020 Created by Yuri Antishev
        </Footer>
        </Layout>
      </Fragment>
    </Router>
  );
}

export default App;
