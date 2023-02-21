import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { productListAtom } from "../app/product.atom";
import SingleProduct from "./SingleProduct";

const Main = () => {
  const productList = useRecoilValue(productListAtom);
  return (
    <Box as="main">
      {/* Products */}
      <Box as="section" mx="auto" mt={{ base: 10, md: -16 }} mb={32} px={{ base: 8, md: 32 }}>
        <SimpleGrid minChildWidth="300px" spacing={8}>
          {productList.map(product => (
            <SingleProduct key={product.id} {...product} />
          ))}
        </SimpleGrid>
      </Box>
      <Box as="section" bg="gray.5" pt={{ base: 10, md: 32 }} pb={{ base: 20, md: 32 }} px={{ base: 8, md: 32 }}>
        <Flex w={{ md: "50%" }} m="auto" direction="column" justify="center" alignItems="center" textAlign="center">
          <Heading fontWeight="semibold" fontSize={{ base: "2xl", md: "3xl" }} my={6}>Sendchamp for Startups</Heading>
          <Text lineHeight={{ base: "24px", md: "28px" }} fontSize={{ base: "md", md: "lg" }} mb={12}>Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding.</Text>
          <Button colorScheme="messenger" size="lg" bg="brand.main" fontSize={{ base: "sm", md: "md" }}>Apply now</Button>
        </Flex>
      </Box>
      <Box as="section" pt={{ base: 10, md: 32 }} pb={{ base: 20, md: 32 }} px={{ base: 8, md: 32 }}>
        <Flex w={{ md: "50%" }} m="auto" direction="column" justify="center" alignItems="center" textAlign="center">
          <Heading fontWeight="semibold" fontSize={{ base: "2xl", md: "3xl" }} my={6}>Start building better communication experience with Sendchamp</Heading>
          <Text lineHeight={{ base: "24px", md: "28px" }} fontSize={{ base: "md", md: "lg" }} mb={12}>Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family.</Text>
          <Flex alignItems="center" gap={5}>
            <Button colorScheme="messenger" size="lg" bg="brand.main" fontSize={{ base: "sm", md: "md" }}>Start for free</Button>
            <Button colorScheme="gray" size="lg" variant="outline" fontSize={{ base: "sm", md: "md" }} color="black.600" borderColor="black.600">Talk to sales</Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Main;