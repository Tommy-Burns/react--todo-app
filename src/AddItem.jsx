import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const inputRef = useRef();
	return (
		<form action="" className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem">Add Task</label>
			<input
				autoFocus
				ref={inputRef}
				id="addItem"
				placeholder="Add Task"
				type="text"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button
				type="submit"
				aria-label="Add Task"
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;
