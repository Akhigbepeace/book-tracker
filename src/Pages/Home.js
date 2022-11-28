import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import ReadingStatus from "../Components/ReadingStatus";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/search");
  };
  return (
    <Flex flexDirection="column" position="relative">
      <Box>
        <Navbar />
        <ReadingStatus />
      </Box>

      <Flex
        position="fixed"
        bottom="0"
        alignSelf="flex-end"
        mb="20px"
        w="50px"
        h="50px"
        borderRadius="50%"
        bg="#2e7c31"
        transition="all ease-in-out 0.5s"
        border="2px solid black"
        mr="5px"
        cursor="pointer"
        textAlign="center"
        p="10px"
        onClick={() => navigateTo()}
        _hover={{
          bg: "#1b421c",
        }}
      >
        <HiPlus fontSize="28px" color="white" />
      </Flex>
    </Flex>
  );
};

export default Home;
