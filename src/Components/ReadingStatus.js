import { Box, Flex, Heading, Image, Select, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const ReadingStatus = () => {
  const status = [
    {
      heading: "Currently Reading",
      books: [
        {
          image:
            "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          title: "The Linux Command Line",
          author: "William E. Shotts, Jr.",
        },
        {
          image:
            "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          title: "Lords of Finance",
          author: "Liaquat Ahamed",
        },
        {
          image:
            "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          title: "React",
          author: "Nils Hartmann, Oliver Zeigermann",
        },
      ],
    },
    {
      heading: "Want to Read",
      books: [
        {
          image:
            "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          title: "The Cuckoo's Calling",
          author: "Robert Galbraith",
        },
      ],
    },
    {
      heading: "Read",
      books: [
        {
          image:
            "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          title: "Needful Things",
          author: "Stephen King",
        },
        {
          image:
            "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          title: "Satire TV",
          author: "Jonathan Gray, Jeffrey P. Jones, Ethan Thompson",
        },
        {
          image:
            "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          title: "Learning Web Development with React and Bootstrap",
          author: "Harmeet Singh, Mehul Bhatt",
        },
      ],
    },
  ];

  const selectOptions = [
    { value: "currentlyReading", data: "Currently Reading" },
    { value: "wantToRead", data: "Want To Read" },
    { value: "read", data: "Read" },
    { value: "none", data: "None" },
  ];
  return (
    <Box p="0 20px 40px">
      {status.map((item, index) => {
        return (
          <Box key={index}>
            <Heading
              my="20px"
              borderBottom="1px solid #dedede"
              fontSize="24px"
              fontFamily="Roboto"
              fontWeight="700"
            >
              {item.heading}
            </Heading>

            <Flex alignItems="center" justifyContent="center">
              {item.books.map((book, index) => {
                return (
                  <Box key={index} p="10px 15px">
                    <Box position="relative">
                      <Image
                        src={book.image}
                        alt="book-image"
                        w="128px"
                        h="193px"
                      />

                      <Box
                        w="40px"
                        bg="rgb(96, 172, 93)"
                        color="#fff"
                        border="none"
                        outline="none"
                        right="-10px"
                        bottom="-20px"
                        position="absolute"
                        borderRadius="50%"
                      >
                        <Select
                          border="none"
                          cursor="pointer"
                          _focus={{
                            outline: "none",
                          }}
                        >
                          <VscTriangleDown />
                          <option
                            value="move"
                            disabled
                            style={{
                              fontFamily: "Arial",
                              fontSize: "13px",
                            }}
                          >
                            Move To...
                          </option>
                          {selectOptions.map((item, index) => {
                            return (
                              <Fragment>
                                <option
                                  key={index}
                                  value={item.value}
                                  style={{
                                    fontFamily: "Arial",
                                    fontSize: "13px",
                                    color: "black",
                                  }}
                                >
                                  {item.data}
                                </option>
                              </Fragment>
                            );
                          })}
                        </Select>
                      </Box>
                    </Box>

                    <Box w="128px">
                      <Text mt="10px" fontSize="12.8px" fontFamily="Roboto">
                        {book.title}
                      </Text>
                      <Text fontSize="12.8px" fontFamily="Roboto" color="#999">
                        {book.author}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default ReadingStatus;
