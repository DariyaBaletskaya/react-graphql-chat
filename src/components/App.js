import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MessageList from "./Product/MessageList";
import MessageForm from "./Product/MessageForm";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Link to="/">Chat</Link>
        <Link to="/add-message">Send message</Link>
      </div>
      <Switch>
        <Route exact path="/" component={MessageList} />
        <Route exact path="/add-message" component={MessageForm} />
      </Switch>
    </div>
  );
}

export default App;
