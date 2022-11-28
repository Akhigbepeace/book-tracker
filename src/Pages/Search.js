import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/");
  };
  return (
    <Flex
      boxShadow="0 10px 20px rgb(0 0 0 / 19%), 0 0 6px rgb(0 0 0 / 23%)"
      position="fixed"
      alignItems="center"
      zIndex="9"
      w="100vw"
      h="50px"
    >
      <Box
        cursor="pointer"
        bg="rgb(240, 240, 240)"
        onClick={() => navigateTo()}
        p="11px"
      >
        <AiOutlineArrowLeft color="gray.300" fontSize="28px" />
      </Box>
      <Input
        placeholder="Search by title or author"
        fontSize="20px"
        fontFamily="Arial"
        p="6px"
        border="none"
        w="100%"
        outline="none"
        _focusVisible={{
          boxShadow: "none",
        }}
      />
    </Flex>
  );
};

export default Search;
