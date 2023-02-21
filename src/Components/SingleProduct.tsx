import { Box, Card, CardBody, CardFooter, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { SingleProductInterface } from '../Utils/interfaces';

const SingleProduct = ({ icon, title, sendDesc, recieveDesc, priceUnit, sendPrice, recievePrice, extraDetail }: SingleProductInterface) => {
  return (
    <Card as={Flex} direction="column" border="1px solid" borderColor="gray.10" color="gray.800">
      <CardBody px={5} py={10}>
        <Box as={Flex} w="max-content" bg="brand.main" p={5} alignItems="center" justify="center" borderRadius="0.75rem">
          <Icon as={icon} w="2rem" h="2rem" color="white" />
        </Box>
        <Heading mt={5} fontSize="lg" fontWeight="semibold">{title}</Heading>
        <Flex justify="space-between" mt={6} fontSize="sm">
          <Text>{sendDesc}</Text>
          {recieveDesc && <Text>{recieveDesc}</Text>}
        </Flex>
        <Flex justify="space-between" mt={2} fontSize="sm">
          <Text><Text as="span" fontWeight="bold">NGN {sendPrice.toFixed(4)}</Text>/{priceUnit}</Text>
          {recieveDesc && (recievePrice ? (
            <Text><Text as="span" fontWeight="bold">NGN {recievePrice.toFixed(4)}</Text>/{priceUnit}</Text>
          ) : (
            <Text as="span" verticalAlign="middle" px={3} py={1} textTransform="capitalize" background="gray.3" color="brand.main" fontSize="xs" borderRadius="full" fontWeight="normal" my="auto">Coming Soon</Text>
          ))}
        </Flex>
      </CardBody>
      {extraDetail && (
        <>
          <Divider borderColor="gray.10" borderWidth="1px" />
          <CardFooter as="h4" px="1.5rem" py={5} justify="center" color="primary.600" textAlign="center" textDecoration="underline">More details</CardFooter>
        </>
      )}
    </Card>
  );
};

export default SingleProduct;