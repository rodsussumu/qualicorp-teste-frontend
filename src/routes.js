import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterCustomers from "./pages/Customers/RegisterCustomers";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" component={RegisterCustomers} />
      </Switch>
    </BrowserRouter>
  );
}
