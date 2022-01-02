import '../src/scss/app.scss';
import RegistrationPage from "./containers/registrationPage/registrationPage";
import {useReducer, useState} from "react";
import ProfilePage from "./containers/profilePage/profilePage";
import {people, reducer} from "./containers/registrationPage/helper";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
    const [state, dispatch] = useReducer(reducer, people);

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<RegistrationPage state={state} dispatch={dispatch}/>} />
                  <Route exact path="/profilePage" element={ <ProfilePage state={state} dispatch={dispatch}/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
