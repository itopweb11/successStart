import '../src/scss/app.scss';
import RegistrationPage from "./containers/registrationPage/registrationPage";
import {useReducer, useState} from "react";
import ProfilePage from "./containers/profilePage/profilePage";
import {people, reducer} from "./containers/registrationPage/helper";

function App() {
    const [createAnAccount , setCreateAnAccount] = useState(false)
    const [state, dispatch] = useReducer(reducer, people);

  return (
    <div className="App">
        {
            createAnAccount
            ?<RegistrationPage
                    state={state}
                    dispatch={dispatch}
                    setCreateAnAccount={setCreateAnAccount}
                />
                :<ProfilePage
                    state={state}
                    dispatch={dispatch}
                />
        }
    </div>
  );
}

export default App;
