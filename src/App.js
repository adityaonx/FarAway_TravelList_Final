import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Summary from "./Summary";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleReset() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggleItem}
        onReset={handleReset}
      />
      <Summary items={items} />
    </div>
  );
}
export default App;
