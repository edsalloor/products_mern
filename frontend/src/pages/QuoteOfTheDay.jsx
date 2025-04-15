import { Box, Container, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const NINJAS_API_KEY = import.meta.env.VITE_NINJAS_API_KEY;

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
            "X-Api-Key": NINJAS_API_KEY,
          },
      });
      const data = await response.json(); 
      setQuote(data[0]);
    };

    fetchQuote();
  }, []);

  return (<Container maxW={"container.sm"} py={12}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Quote of the Day
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          {quote?.quote
            ? (
              <>
                <Text fontSize="2xl" textAlign="justify">{quote.quote}</Text>
                <br />
                <Text fontSize="xl" textAlign="right">{`- ${quote.author}`}</Text>
              </>
            ) : (
              <Text fontSize="2xl" textAlign="center">{"Thinking..."}</Text>
            )
          }
        </Box>
      </VStack>
    </Container>);
}

export default QuoteOfTheDay;
