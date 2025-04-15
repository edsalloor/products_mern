import { Box, Container, Heading, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue, VStack } from "@chakra-ui/react";

const teamMembers = [
  {
    firstName: "Zhihao",
    lastName: "Liang",
    studentID: "300394148"
  },
  {
    firstName: "Eduardo",
    lastName: "Salazar",
    studentID: "300393475"
  },
  {
    firstName: "Maneesha",
    lastName: "Eeshwara",
    studentID: "300392759"
  }
];

const AboutPage = () => {
  return <Container maxW={"container.sm"} py={12}>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Team Members
      </Heading>
      <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
        <VStack spacing={4}>
          <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Student ID</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teamMembers.map(({firstName, lastName, studentID}) =>
              <Tr key={studentID}>
                <Td>{`${firstName} ${lastName}`}</Td>
                <Td>{`${studentID}`}</Td>
              </Tr>
            )}
          </Tbody>
          </Table>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default AboutPage;
