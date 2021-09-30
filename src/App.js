import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Views/Home";
import Cart from "./Views/Cart";

function App() {
    return (
        <Router>
            <Route exact path='/'><Home/></Route>
            <Route path='/cart'><Cart/></Route>
        </Router>
    );
}

export default App;