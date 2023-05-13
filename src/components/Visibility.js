import { Box, Flex, Text } from '@chakra-ui/react';
import { VISIBILITY } from '../constants';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

export const Visibility = () => {
    const dispatch = useDispatch();

    // get all the filter types from the constants
    const filters = Object.values(VISIBILITY);

    // set the visibility filter
    const handleFilterClick = (filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <Flex justify="center">
            {/* map through the filters and create a button for each */}
            {filters.map((filter) => (
                <Box
                    key={`visibility-${filter}`}
                    px={3}
                    py={2}
                    bg="gray.200"
                    borderRadius="md"
                    mr={2}
                    cursor="pointer"
                    onClick={() => handleFilterClick(filter)}
                >
                    <Text>{filter}</Text>
                </Box>
            ))}
        </Flex>
    );
};
