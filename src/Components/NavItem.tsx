import { Box, Flex, Menu, MenuButton, MenuList, useDisclosure } from "@chakra-ui/react";
import { NavItemInterface } from '../Utils/interfaces';
import Submenu from './Submenu';

const NavItem = ({ title, submenus }: NavItemInterface) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>{title}</MenuButton>
      {submenus && (
        <MenuList py={0} onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Flex color="gray.800">
            <Box pt={6} pb={10} px={8} w="300px">
              <Submenu {...submenus[0]} />
            </Box>
            {submenus.length > 1 && (
              <Box pt={6} pb={10} px={8} w="300px" bg="gray.5">
                <Submenu {...submenus[1]} />
                <Submenu {...submenus[2]} />
              </Box>
            )}
          </Flex>
        </MenuList>
      )}
    </Menu>
  );
};

export default NavItem;