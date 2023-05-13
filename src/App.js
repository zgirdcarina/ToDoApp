import {Container, Heading} from '@chakra-ui/react'
import {AddToDo} from './components/AddToDo'
import {ToDoList} from './components/ToDoList'
import {Visibility} from './components/Visibility'

import './style.css';

function App() {
    return (
        // Wraps the entire application in a ChakraProvider for easy UI styling
        <Container>
            {/* Adds a title to the app */}
            <Heading className="title">MY TO DO LIST FOR TODAY</Heading>
            {/* Renders the AddToDo component */}
            <AddToDo/>
            {/* Renders the ToDoList component */}
            <ToDoList style={{border: "100px solid black"}} />
            {/* Renders the Visibility component */}
            <Visibility/>
        </Container>
    );
}

export default App;
