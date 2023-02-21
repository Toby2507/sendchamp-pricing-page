import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from "@chakra-ui/react";
import { NavItemInterface } from '../Utils/interfaces';
import MobileSubMenu from './MobileSubMenu';

const MobilNavItem = ({ title, submenus }: NavItemInterface) => {
  return (
    <AccordionItem borderTop="1px" boxShadow="none" borderColor="inherit">
      <h2>
        <AccordionButton p={5}>
          <Box as="span" flex='1' textAlign='left' letterSpacing='0.08em' textTransform="uppercase">{title}</Box>
          {submenus && (<AccordionIcon w="2rem" h="2rem" />)}
        </AccordionButton>
      </h2>
      {submenus && (
        <AccordionPanel p={0}>
          <Box bg="gray.6" pt={8} pb={4} px={5}>
            <MobileSubMenu {...submenus[0]} isSingle={false} />
          </Box>
          {submenus.length > 1 && (
            <Flex alignItems="start" gap={2} bg="white" pt={8} pb={4} px={5}>
              <MobileSubMenu {...submenus[1]} isSingle={true} />
              <MobileSubMenu {...submenus[2]} isSingle={true} />
            </Flex>
          )}
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

export default MobilNavItem;