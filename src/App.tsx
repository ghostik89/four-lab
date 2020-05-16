import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {MyPageHeader} from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {FirstExInput} from './containers/First/FistExInput'
import "./App.css"

function App() {
  return (
      <Layout className={"appLayout"}>
        <MyPageHeader/>
        <Router>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'}>
                    <FirstExInput/>
                </Route>
            </Switch>
        </Router>
      </Layout>
  );
}

export default App;
