import {useTodo} from "../contexts/index.js";
import {useState} from "react";


export default function TodoForm(){

    const [todo, setTodo] = useState("");

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo('')
    }

    return(
        <>
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Add task to spend your time effectively"
                    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150
                    bg-white/20 py-1.5'
                    value={todo}
                    onClick={(e) => setTodo(e.target.value)}
                />
                <button type="submit">
                    <svg viewBox="0 0 24 24" fill="none" className="w-12 shrink-0 bg-green-600 fill-white"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                            />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                            />
                    </svg>
                </button>
            </form>
        </>
    )
}