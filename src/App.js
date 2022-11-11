import Header from "./Header";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("todoList")),
	);
	const [search, setSearch] = useState("");
	const [newItem, setNewItem] = useState("");

	const setAndSaveItems = (newItems) => {
		setItems(newItems);
		localStorage.setItem("todoList", JSON.stringify(newItems));
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const newTask = { id, checked: false, item };
		const listItems = [...items, newTask];
		setAndSaveItems(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item,
		);
		setAndSaveItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		// set textbox empty
		setNewItem("");
		console.log(`Task "${newItem}" submitted successfully`);
	};

	return (
		<div className="App">
			<Header title="React Todo App" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<Content
				items={items.filter((item) =>
					item.item.toLowerCase().includes(search.toLowerCase()),
				)}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer total={items.length} />
		</div>
	);
}

export default App;
