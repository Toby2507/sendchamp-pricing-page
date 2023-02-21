import { SubmenuInterface } from '../Utils/interfaces';
import { Flex, Grid, Heading, Icon } from '@chakra-ui/react';

type mobileSubMenuType = SubmenuInterface & { isSingle: boolean; };
const MobileSubMenu = ({ title, items, isSingle }: mobileSubMenuType) => {
  return (
    <Grid templateColumns={`repeat(${isSingle ? "1" : "2"}, minmax(0, 1fr))`} gap={2} w={isSingle ? "50%" : "100%"}>
      {items.map((item, i) => (
        <Flex key={i} alignItems="center" gap={2} cursor="pointer" mb={5}>
          {item.icon && <Icon as={item.icon} w="1.3rem" h="1.3rem" color="gray.700" />}
          <Heading as="h4" letterSpacing="0.08em" fontSize="xs" fontWeight="semibold">{item.title}</Heading>
        </Flex>
      ))}
    </Grid>
  );
};

export default MobileSubMenu;