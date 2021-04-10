import Header from './components/header/Header';
import Main from './components/main/Main';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyFiles } from "./components/myfiles/MyFiles";
import { About } from "./components/About";
function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <Router>
        <Header
          toggle={menuToggle}
          toggleFunc={setMenuToggle}
        />
        <div className="container-main">
          <Switch>
            <Route path="/my" component={MyFiles} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Main} />
          </Switch>
        </div>

      </Router>
    </>
  );
}

export default App;
