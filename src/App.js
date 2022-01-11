import '../src/scss/app.scss';
import RegistrationPage from "./containers/registrationPage/registrationPage";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Entrance from "./shared/components/registration/entrance/entrance";
import ProfilePage from "./containers/profilePage/profilePage";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ProfilePage}/>
                    <Route exact path="/register" component={RegistrationPage}/>
                    <Route exact path="/login" component={Entrance}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
