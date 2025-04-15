import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun, LuFileSpreadsheet  } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1440px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,rgb(238, 34, 34),rgb(209, 4, 220))"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/"}>
            <Button>
              <TiShoppingCart size={22} style={{"margin-right": "5px"}} /> Store
            </Button>
          </Link>
          <Link to={"/create"}>
            <Button>
              <MdOutlineAddBox size={22} style={{"margin-right": "5px"}} />
              Add Product
            </Button>
          </Link>
          <Link to={"/about"}>
            <Button>
              <LuFileSpreadsheet size={20} style={{"margin-right": "5px"}} />
              About
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar;
