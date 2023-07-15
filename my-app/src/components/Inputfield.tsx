import React ,{useRef} from "react";
import "./style.css";
interface Props{
  todo : string;
  setTodo :  React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e : React.FormEvent) => void;
}
const Inputfield: React.FC<Props> = ({ todo, setTodo, handleAdd})  => {
  const inputref = useRef<HTMLInputElement>(null);  
  
  
  return (
    <form
    className="input"
    onSubmit={(e) => {
      handleAdd(e);
      inputref.current?.blur();
    }}
  >
    <input
      type="text"
      placeholder="Enter a Task"
      value={todo}
      ref={inputref}
      onChange={(e) => setTodo(e.target.value)}
      className="input__box"
    />
    <button type="submit" className="input_submit">
      GO
    </button>
  </form>
  )
   
}

export default Inputfield