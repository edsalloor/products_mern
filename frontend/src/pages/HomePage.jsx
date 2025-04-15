import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product.js";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,rgb(238, 34, 34),rgb(209, 4, 220))"}
          bgClip={"text"}
          textAlign={"center"}>
          Current Products 🚀
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          color={"gray.500"}>
          No products found. 😢
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>)}
      </VStack>
    </Container>
  )
}

export default HomePage;
