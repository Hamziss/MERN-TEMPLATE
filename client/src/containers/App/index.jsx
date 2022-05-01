//------NPM-------/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//------imports-----/
import { Signin } from "../SigninPage";
import { Dashboard } from "../HomePage";
import { Errorpage } from "../ErrorPage";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Dashboard />
              </>
            }
          ></Route>
          <Route
            path='/signin'
            element={
              <>
                <Signin />
              </>
            }
          ></Route>

          <Route path='*' element={<Errorpage />}></Route>
        </Routes>
      </Router>
    </>
  );
};
