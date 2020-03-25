import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style/style.css'
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
//บท1
import Bisection from './Root of Equation/Bisection.js'
import FalsePosition from './Root of Equation/FalsePosition.js'
import Onepoint from './Root of Equation/Onepoint.js'
import TaylorSeries from './Root of Equation/NewtonsRaphson.js'
import Secant from './Root of Equation/Secant.js'
//บท2
import Cramer from './Linear Algreba/CramerRule.js'
//บท4
import LinearRegression from './LeastSquareError/LinearRegression.js'
//บท5
import TrapeZoidal from './Integration/TrapeZoidal.js'
import SimpsonRule from './Integration/SimpsonRule.js'
import CompositeTrapeZoidalRule from './Integration/CompositeTrapeZoidalRule.js'
import CompositeSimpsonRule from './Integration/CompositeSimpsonRule.js'
//บท6
import Forward from './Differentiation/forward.js'
import Backward from './Differentiation/backward.js'
import Central from './Differentiation/cental.js'
import Forwardh2 from './Differentiation/forwardh2.js'
import Backwardh2 from './Differentiation/backwardh2.js'
import Centralh2 from './Differentiation/centralh2.js'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <label>
              &nbsp;&nbsp;Numerical
          </label>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  style={{ height: '100%' }}
                >
                  <SubMenu
                    key="Root"
                    title={
                      <span>
                        Root of Equation
                </span>
                    }
                  >
                    <Menu.Item key="1">Bisection<Link to = "/Bisection" /></Menu.Item>
                    <Menu.Item key="2">FalsePosition<Link to = "/FalsePosition" /></Menu.Item>
                    <Menu.Item key="3">Onepoint<Link  to = "/Onepoint" /></Menu.Item>
                    <Menu.Item key="4">NewtonsRaphson<Link  to = "/NewtonsRapson" /></Menu.Item>
                    <Menu.Item key="6">Secant<Link to = "/Secant" /></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="Linear"
                    title={
                      <span>
                        Linear Algreba
                </span>
                    }
                  >
                    <Menu.Item key="7">Cramer<Link to = "CramerRule" /></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="LSE"
                    title={
                      <span>
                        Least Square Error
                </span>
                    }
                  >
                    <Menu.Item key="9">LinearRegression<Link to = "LinearRegression" /></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="Intergrate"
                    title={
                      <span>
                        Integration
                </span>
                    }
                  >
                    <Menu.Item key="12">TrapeZoidal<Link to = "TrapeZoidal" /></Menu.Item>
                    <Menu.Item key="13">SimpsonRule<Link to = "SimpsonRule" /></Menu.Item>
                    <Menu.Item key="14">CompositeTrapeZoidalRule<Link to = "CompositeTrapeZoidalRule" /></Menu.Item>
                    <Menu.Item key="15">CompositeSimpsonRule<Link to = "CompositeSimpsonRule" /></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="Diff"
                    title={
                      <span>
                        Differentiation
                </span>
                    }
                  >
                    <Menu.Item key="16">Forward Differencetiation<Link to = "forward" /></Menu.Item>
                    <Menu.Item key="17">Backward Differencetiation<Link to = "backward" /></Menu.Item>
                    <Menu.Item key="18">Central Differencetiation<Link to = "cental" /></Menu.Item>
                    <Menu.Item key="19">Forward Differencetiation O(h<sub>2</sub>)<Link to = "forwardh2" /></Menu.Item>
                    <Menu.Item key="20">Backward Differencetiation O(h<sub>2</sub>)<Link to = "backwardh2" /></Menu.Item>
                    <Menu.Item key="21">Central Differencetiation O(h<sub>2</sub>)<Link to = "centralh2" /></Menu.Item>
                    
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', height: 800 }}>
                <Route path="/bisection" component={Bisection} />
                <Route path="/FalsePosition" component={FalsePosition} />
                <Route path="/Onepoint" component={Onepoint} />
                <Route path="/NewtonsRapson" component={TaylorSeries} />
                <Route path="/Secant" component={Secant} />
                <Route path="/CramerRule" component={Cramer} />
                <Route path="/LinearRegression" component={LinearRegression} />
                <Route path="/TrapeZoidal" component={TrapeZoidal} />
                <Route path="/SimpsonRule" component={SimpsonRule} />
                <Route path="/CompositeTrapeZoidalRule" component={CompositeTrapeZoidalRule} />
                <Route path="/CompositeSimpsonRule" component={CompositeSimpsonRule} />
                <Route path="/forward" component={Forward} />
                <Route path="/backward" component={Backward} />
                <Route path="/cental" component={Central} />
                <Route path="/forwardh2" component={Forwardh2} />
                <Route path="/backwardh2" component={Backwardh2} />
                <Route path="/centralh2" component={Centralh2} />
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    )
  }
}

export default App;
