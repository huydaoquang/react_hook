import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";
import YoutubeSearch from "./views/YoutubeSearch";
function App() {
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "hoi dan it", type: "huy" },
    { id: "todo2", title: "hoi dan it with eric", type: "huy" },
    { id: "todo3", title: "hoi dan it channel", type: "huy" },
  ]);
  useEffect(() => {
    // console.log("run use effect");
  }, [address]);
  useEffect(() => {
    // console.log("run use effect todos");
  }, [todos]);
  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 10000) + 1, title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnchangeInput = (event) => {
    console.log(address);
    setAddress(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };
  //re-render
  const onTimesup = () => {
    // alert("time sup");
  };
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact={true}>
              <Covid></Covid>
            </Route>
            <Route path="/Timer">
              <CountDown onTimesup={onTimesup}></CountDown>
              <span>-------------------------------</span>
              <NewCountDown onTimesup={onTimesup}></NewCountDown>
            </Route>
            <Route path="/Todo">
              <Todo
                todos={todos.filter((item) => item.type === "huy")}
                deleteDataTodo={deleteDataTodo}
              ></Todo>
              <input
                type="text"
                value={address}
                onChange={(event) => handleOnchangeInput(event)}
              ></input>
              <button
                type="button"
                onClick={(event) => {
                  handleEventClick(event);
                }}
              >
                Click me
              </button>{" "}
            </Route>
            <Route path="/Blogs" exact={true}>
              <Blog></Blog>
            </Route>
            <Route path="/Blogs/:id">
              <DetailBlog></DetailBlog>
            </Route>
            <Route path="/Add-new-blog">
              <AddNewBlog></AddNewBlog>
            </Route>
            <Route path="/Secret">
              <YoutubeSearch></YoutubeSearch>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
