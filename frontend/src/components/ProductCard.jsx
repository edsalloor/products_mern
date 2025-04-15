import { useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack
} from "@chakra-ui/react";

import { useProductStore } from "../store/product.js";
import { isValidProduct } from "../utils/productUtils.js";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const soldOutTextColor = useColorModeValue("red.600", "red.200");
  const bg = useColorModeValue("white", "gray.800");
  const toast = useToast();
  const { deleteProduct, updateProduct } = useProductStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      });
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      });
    }
  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { isValid, message: errorMessage } = isValidProduct(updatedProduct);
    if (!isValid) {
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        isClosable: true
      });
      return;
    }

    const { success, message } = await updateProduct(pid, updatedProduct);
    if (success) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      });
      onClose();
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      });
    }
  }

  return (
    <Box shadow="lg" rounded="lg" overflow="hidden" transition="all 0.3s" bg={bg} _hover={{ transform: "translateY(-5px)", shadow: "xl" }} >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
        <Text fontSize="l" color={textColor}>
          Price: ${product.price}
        </Text>
        { product.stock && product.stock > 0
          ? <Text fontSize="l" color={textColor}>Stock: {product.stock}</Text>
          : <Text fontWeight="bold" fontSize="l" color={soldOutTextColor}>Sold out</Text>
        }

        <HStack spacing={2} mt={4}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                required
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                 onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              />
              <Input
                placeholder="Stock"
                name="stock"
                type="number"
                value={updatedProduct.stock}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, stock: e.target.value })}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ProductCard;
