import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<main>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: "2rem" }}>No tasks available</p>
			)}
		</main>
	);
};

export default Content;
