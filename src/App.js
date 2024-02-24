import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

function App() {

  

  const handleNameChange = () => {
    const names = ["bhanu", "sumanth", "vijaya", "srinivas"];
    const ind = Math.floor(Math.random() * 4);
    return names[ind];
  };

  const getLocalItems = () => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) return JSON.parse(tasks);
    else return [];
  };

  // const name = "bhanu";
  // list of task state
  const [items, setItems] = useState(getLocalItems);
  // create item state
  const [newItem, setNewItem] = useState("");
  // search state
  const [search, setSearch] = useState("");
  // temp state :
  const [counter,setCounter]  =useState(0);
  
  // setting up local storage :
  useEffect(() => {
    console.log("state updated and re-render took place");
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };

    setItems((prevItemsList) => {
      return [...prevItemsList, myNewItem];
    });
  };

  const handleCheck = (id) => {
    // console.log(id);
    let temp = [...items];
    temp = temp.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(temp);
    // localStorage.setItem('grocerylist', JSON.stringify(temp));
  };

  const handleDelete = (id) => {
    let temp = [...items];
    temp = temp.filter((item) => {
      return item.id !== id;
    });
    setItems(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Shopping" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => {
          if (item.item.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer itemLen={items.length} />
      <button onClick={()=>{
        setCounter((prev)=>{
            return prev+1;
        })
      }} >{counter}</button>
    </div>
  );
}

export default App;
