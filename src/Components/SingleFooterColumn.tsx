import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { footerColInterface } from '../Utils/interfaces';

const SingleFooterColumn = ({ title, items }: footerColInterface) => {
  return (
    <Box as="nav" fontSize={{ base: "sm", md: "md" }}>
      <Heading as="h3" color="gray.2" fontSize="inherit" fontWeight="inherit">{title}</Heading>
      <List mt={4}>
        {items.map((item, i) => (
          <ListItem key={i}>
            <Text color="white" _hover={{ color: "gray.2" }}>{item}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SingleFooterColumn;