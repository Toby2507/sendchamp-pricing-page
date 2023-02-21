import { Avatar, Box, Flex, Grid, Image, Show, SimpleGrid, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { footerColAtom } from '../app/footerCol.atom';
import footerLogo from "../Images/logo_footer.svg";
import SingleFooterColumn from './SingleFooterColumn';
import NigerianFlag from '../Images/nigeria_avatar.svg';
import USAFlag from '../Images/usa_avatar.svg';

const Footer = () => {
  const footerCols = useRecoilValue(footerColAtom);
  return (
    <Box as="footer" bg="background.2" pt={20} px={{ base: 8, md: 32 }}>
      {/* Footer Columns */}
      <SimpleGrid minChildWidth={{ base: "100px", md: "150px" }} spacing={5}>
        {footerCols.map((col, i) => <SingleFooterColumn key={i} {...col} />)}
      </SimpleGrid>
      {/* Contact Information */}
      <Flex mt={16} py={12} borderTop="1px" borderBottom="1px" borderColor="gray.1" direction={{ base: "column", md: "row" }} justify={{ base: "center", md: "space-between" }} textAlign={{ base: "center", md: "left" }}>
        <Image src={footerLogo} alt="sendChamp Logo" w={{ base: "auto", md: "20%" }} maxW={{ base: "227px", md: "unset" }} mx="auto" mb={{ base: 3, md: 0 }} />
        <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} w={{ base: "100%", md: "70%" }} gap={5}>
          <Flex alignItems={{ base: "center", md: "flex-start" }} justify={{ base: "center", md: "flex-start" }} gap={4} textAlign={{ base: "center", md: "left" }}>
            <Show above='md'><Avatar name="Nigeria" src={NigerianFlag} size="sm" /></Show>
            <Text color="white" fontSize={{ base: "sm", md: "md" }}>142, Ahmadu Bello Way, Victoria Island, <br /> Lagos, Nigeria</Text>
          </Flex>
          <Flex alignItems={{ base: "center", md: "flex-start" }} justify={{ base: "center", md: "flex-start" }} gap={4} textAlign={{ base: "center", md: "left" }}>
            <Show above='md'><Avatar name="Nigeria" src={USAFlag} size="sm" /></Show>
            <Text color="white" fontSize={{ base: "sm", md: "md" }}>2055 Limestone Rd STE 200-C Wilmington, <br /> DE 19808</Text>
          </Flex>
        </Grid>
      </Flex>
      {/* Copy Right */}
      <Text fontSize={{ base: "sm", md: "md" }} textAlign="center" py={5} color="gray.2">Built with ❤️ at Sendchamp Inc. - &copy; {new Date().getFullYear()} | All rights reserved</Text>
    </Box>
  );
};

export default Footer;