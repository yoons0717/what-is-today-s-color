import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "pages/MainPage";
import ListPage from "../pages/ListPage";


const Root: React.FC = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/list" exact component={ListPage} />
      </Switch>
    </BrowserRouter>
);

export default Root;
