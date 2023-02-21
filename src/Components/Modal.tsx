import { Button, Box, Icon, Text, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productListAtom } from '../app/product.atom';
import { productDetailsAtom } from '../app/stateToggles.atom';

const ModalBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalInfo, setModalInfo] = useRecoilState(productDetailsAtom);
  const productList = useRecoilValue(productListAtom);
  const product = productList.find(nav => nav.id === modalInfo.id);
  const close = () => {
    setModalInfo(({ show: prevShow, id }) => ({ show: !prevShow, id: null }));
    onClose();
  };

  useEffect(() => {
    if (modalInfo.show) onOpen();
  }, [modalInfo, onOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={4} px={6} fontSize="xl" fontWeight="semibold" borderBottom="2px solid" borderColor="gray.10">
            <Flex alignItems="center" justify="space-between" gap={5}>
              <Flex alignItems="center" gap={2}>
                <Box as={Flex} w="max-content" bg="brand.main" p={3} alignItems="center" justify="center" borderRadius="0.75rem">
                  <Icon as={product?.icon} w="1rem" h="1rem" color="white" />
                </Box>
                <Text as="span" fontSize="lg" fontWeight="medium">{product?.title}</Text>
              </Flex>
              <ModalCloseButton position="unset" fontSize="sm" />
            </Flex>
          </ModalHeader>
          <ModalBody px={6} pt={2} pb={8}>
            <Flex justify="space-between" mt={6} fontSize="sm">
              <Text my="auto">{product?.sendDesc}</Text>
              {product?.recieveDesc && <Text my="auto">{product.recieveDesc}</Text>}
            </Flex>
            <Flex justify="space-between" mt={2} p={4} fontSize="sm" bg="gray.5" borderRadius="md">
              <Text my="auto">
                <Text as="span" display="block">Starts at</Text>
                <Text as="span" fontWeight="bold">NGN {product?.sendPrice.toFixed(4)}</Text>
                /{product?.priceUnit}
              </Text>
              {product?.recieveDesc && product?.recievePrice ? (
                <Text my="auto">
                  <Text as="span" display="block">to</Text>
                  <Text as="span" fontWeight="bold">NGN {product?.recievePrice.toFixed(4)}</Text>
                  /{product?.priceUnit}
                </Text>
              ) : (
                <Text as="span" verticalAlign="middle" px={3} py={1} textTransform="capitalize" background="gray.3" color="brand.main" fontSize="xs" borderRadius="full" fontWeight="normal" my="auto">Coming Soon</Text>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBox;