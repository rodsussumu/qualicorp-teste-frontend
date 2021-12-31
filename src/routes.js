import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RegisterCustomers from "./pages/Customers/RegisterCustomers";
import ViewCustomers from "./pages/Customers/ViewCustomers";
import UpdateCustomers from "./pages/Customers/UpdateCustomers";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to='/all/customers'></Redirect>
        </Route>
        <Route path="/create/customers" component={RegisterCustomers} />
        <Route path="/all/customers" component={ViewCustomers} />
        <Route path="/update/customers/:id" component={UpdateCustomers} />
      </Switch>
    </BrowserRouter>
  );
}
