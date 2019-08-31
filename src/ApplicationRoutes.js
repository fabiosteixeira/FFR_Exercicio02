import React from "react";
import { Route } from "react-router-dom";
import { Index } from "./Components/Routes/Index";
import { Users } from "./Components/Routes/Users";
import { UserDetail } from "./Components/Routes/UserDetail";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Index} />
    <Route path="/users/" component={Users} />
    <Route path="/user/:name" component={UserDetail} />
  </>
);
