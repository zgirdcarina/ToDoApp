import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Button, Flex, FormControl, Input} from "@chakra-ui/react";
import { addToDo } from '../redux/actions';

export const AddToDo = () => {
    // Create a local state variable 'value' using useState hook and initialize it to an empty string
    const [value, setValue] = useState('');
    // Get the 'dispatch' function from the 'useDispatch' hook
    const dispatch = useDispatch();

    // Function to handle the input change event and update the 'value' state
    const handleInput = e => {
        setValue(e.target.value);
    }

    // Function to handle the form submission event and add the todo item to the Redux store
    const handleSubmit = e => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Dispatch the 'addToDo' action with the value of 'value' as the payload
        dispatch(addToDo(value));
        // Reset the 'value' state to an empty string
        setValue('');
    }

    // Render the form with an input field and a button to add the todo item
    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                    <Input
                        type="text"
                        value={value}
                        onChange={handleInput}
                    />
                </FormControl>
                <Button
                    colorScheme="green"
                    type="submit"
                    disabled={!value}
                >
                    Add
                </Button>
            </Flex>
        </form>
    )
}
