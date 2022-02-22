import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // 할일 목록 추가할 때
    // 일반적인 자바스크립트에서는 push를 사용할 것이지만,
    // State는 직접적으로 바꿀 수 없기 때문에 그렇게 사용하지 못한다.
    setToDos((currentArray) => [...currentArray, { title: toDo, isDone: false }]);
    // setToDos([...toDos, toDo]);

    setToDo("");
  };

  const onChecked = (event) => {
    // event.preventDefault();

    console.log(event.target.checked);

    toDos.map((item) => {
      if (item.title === event.target.value) {
        item.isDone = event.target.checked;
      }
      return item;
    });

    setToDos((currentArray) => [...currentArray]);

    console.log("toDas : ", toDos);
  };

  console.log(toDos);
  // return (
  //   <div>
  //     <h1>My To Dos({toDos.length})</h1>
  //     <form onSubmit={onSubmit}>
  //       <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
  //       <button>Add To Do</button>
  //     </form>
  //     <hr />
  //     <ul>
  //       {toDos.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={onChecked}
              checked={item.isDone}
              value={item.title}
            ></input>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
