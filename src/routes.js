import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterCustomers from "./pages/Customers/RegisterCustomers";
import ViewCustomers from "./pages/Customers/ViewCustomers";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" component={RegisterCustomers} />
        <Route path="/all/customers/:page" component={ViewCustomers} />
      </Switch>
    </BrowserRouter>
  );
}
