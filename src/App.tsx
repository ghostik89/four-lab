import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {MyPageHeader} from "./components/Header";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {FirstExInput} from './containers/First/FistExInput'
import "./App.css"
import {firstExCalcPath, firstExInputPath} from "./constants/paths";
import {FirstExResult} from "./containers/First/FirstExResult";

function App() {
  return (
      <Layout className={"appLayout"}>
        <MyPageHeader/>
        <Router>
            <Switch>
                <Route path={firstExCalcPath}>
                    <FirstExResult/>
                </Route>
                <Route path={firstExInputPath}>
                    <FirstExInput/>
                </Route>
            </Switch>
        </Router>
      </Layout>
  );
}

export default App;
