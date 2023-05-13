import {useSelector} from "react-redux";
import {Box} from "@chakra-ui/react";
import {ToDo} from "./ToDo";
import {getTodosByVisibilityFilter} from "../redux/selector";

export const ToDoList=()=>{
    // Accessing the todos and visibility state from the store using useSelector hook
    const{todos,visibility}=useSelector(state=>state);

    // Filtering the todos based on the selected visibility filter
    const filterToDos = getTodosByVisibilityFilter(todos,visibility);

    return(
        <Box my={5}>
            {/* Rendering each ToDo component with a unique key */}
            {filterToDos.length ? filterToDos.map(todo=>(
                <ToDo key={`todo-${todo.id}`}  todo={todo}/>
            )):<Box textAlign="center">No tasks to do today</Box>}
        </Box>
    )
}





