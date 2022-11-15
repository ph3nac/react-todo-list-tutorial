import "./App.css";
import { DataList } from "./MyContext";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <DataList>
        <Form />
        <ToDoList />
      </DataList>
    </div>
  );
}

export default App;
