import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";

import { useProductStore } from "../store/product";
import { isValidProduct } from "../utils/productUtils";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    stock: ""
  })
  const toast = useToast()
  const { createProduct } = useProductStore()

  const handleAddProduct = async () => {
    const { isValid, message: errorMessage } = isValidProduct(newProduct);
    if (!isValid) {
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        isClosable: true
      })
      return;
    }

    const {success, message} = await createProduct(newProduct)
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      });
      setNewProduct({name: "", price: "", image: "", stock: ""});
    }
  }

  return <Container maxW={"container.sm"}>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>
      <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
        <VStack spacing={4}>
          <Input
            placeholder="Product Name"
            name="name" 
            value={newProduct.name} 
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
          />
          <Input
            placeholder="Price"
            name="price" 
            type="number"
            value={newProduct.price} 
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
          />
          <Input
            placeholder="Image URL"
            name="image" 
            value={newProduct.image} 
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
          />
          <Input
            placeholder="Stock"
            name="stock" 
            type="number"
            value={newProduct.stock} 
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} 
          />
          <Button colorScheme={"blue"} w={"full"} onClick={handleAddProduct}>
            Add Product
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage;
