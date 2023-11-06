import "./assets/css/todoItems.css";

const TodoItems = ({ no, display, text, setTodos }) => {
  const remove = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={() => { toggle(no) }}>
        {display === "" ? <span>💥</span> : <span>✔</span>}
        <div className="todoitems-text">{text}</div>
      </div>
      <span className="todoitems-cross-icon" onClick={() => { remove(no) }}>❌</span>
    </div>);
};

export default TodoItems;
