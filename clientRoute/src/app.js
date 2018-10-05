import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const expense = () => <div>This is amazing</div>;
const AddExpense = () => <div>this is add expense</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={expense} exact={true} />
      <Route path="/create" component={AddExpense} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
