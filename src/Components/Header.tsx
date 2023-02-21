import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import countries from "i18n-iso-countries";
import enlocale from "i18n-iso-countries/langs/en.json";
import Select, { StylesConfig } from "react-select";
import { currencies } from "../Utils/currencyMap";

const Header = () => {
  countries.registerLocale(enlocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => ({ label: value, value: key }));
  // React-select style
  const selectStyle: StylesConfig<{ label: string; value: string; }, false> = {
    control: (provided, state) => ({
      ...provided,
      color: "white",
      background: "white",
      border: "1px solid rgba(25, 126, 239, 0.4)",
      fontSize: "20px",
      padding: "10px",
      textAlign: "left",
      borderRadius: "12px",
      width: "282px"
    }),
    option: (provided, state) => ({
      ...provided,
      textAlign: "left",
      lineHeight: 1.2,
      color: "black",
      background: state.isSelected ? "rgba(25, 126, 239, 0.1)" : "white"
    })
  };
  return (
    <Box as="header" bg="gray.5" px={{ base: 8, md: 32 }} py={24} minH={{ md: "55vh" }}>
      <Flex direction="column" m="auto" align-items="center" justify="center" textAlign="center" maxW={{ base: "100%", md: "50%" }}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} lineHeight={{ base: "35px", md: "52px" }} fontWeight="medium">Pricing for every business</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={{ base: "24px", md: "28px" }} mt={{ base: 6, md: 8 }} mb={{ base: 0, md: 16 }}>No hidden fees or charges - simple & flexible pricing that fits with your business at any sage.</Text>
        <Flex mt={{ base: 8, md: 0 }} direction={{ base: "column", md: "row" }} gap={2} justify="center" alignItems="center">
          <Box w="282px" m="auto">
            <Select placeholder="Nigeria" options={countryArr} styles={selectStyle} />
          </Box>
          <Box w="282px" m="auto">
            <Select placeholder="NGN" options={currencies} styles={selectStyle} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;