import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todoData, setTodoData] = useState([]);
  console.log(newItem);

  const addItem = () => {
    const list = {
      id: uuidv4(),
      value: newItem,
    };

    todoData.push(list);

    setNewItem("");
  };
  console.log(todoData);

  const deleteItem = (id) => {
    const filteredItem = todoData.filter((newItem) => newItem.id !== id);
    setTodoData(filteredItem);
    console.log(filteredItem);
  };

  return (
    <div>
      <div className="App">
        <h1>My LIST</h1>

        <div className="container">
          <h3>Add an Item</h3>

          <br />

          <input
            type="text"
            placeholder="Enter the item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />

          <button onClick={addItem} className="add-btn">
            {" "}
            Add{" "}
          </button>
          <br />

          <ul>
            {todoData.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
