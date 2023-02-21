import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { SubmenuInterface } from '../Utils/interfaces';

const Submenu = ({ title, items }: SubmenuInterface) => {
  return (
    <>
      <Heading as="h3" letterSpacing="0.08em" textTransform="uppercase" color="gray.8" mb={5} fontSize="md" fontWeight="inherit">{title}</Heading>
      {items.map((item, i) => (
        <Flex key={i} gap={3} mb={5} cursor="pointer" color="gray.800">
          {item.icon && <Icon as={item.icon} w="1.3rem" h="1.3rem" color="gray.700" />}
          <Box>
            <Flex alignItems="center" gap={3}>
              <Heading as="h4" letterSpacing="0.08em" fontSize="xs" fontWeight="semibold">{item.title}</Heading>
              {item.notAvailable && <Text as="span" verticalAlign="middle" px={3} py={1} textTransform="capitalize" background="gray.3" color="brand.main" fontSize="xs" borderRadius="full" fontWeight="normal" my="auto">Coming Soon</Text>}
            </Flex>
            {item.desc && <Text color="gray.8" fontSize="xs" fontWeight="normal" lineHeight="1.1" mt={1}>{item.desc}</Text>}
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Submenu;