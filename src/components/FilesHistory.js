import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";

const FilesHistory = ({ imgHistory, setImg }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      pt={{ base: "2px", md: "40px" }}
    >
      {imgHistory.map(({ name, url }) => (
        <Image
          key={name}
          borderRadius="full"
          boxSize="100px"
          src={url}
          alt={name}
          m={5}
          _hover={{ md: { transform: "scale(2.4)" } }}
          transition={{ md: "transform 0.3s" }}
          onClick={() => setImg({ name: name, url: url })}
        />
      ))}
    </Flex>
  );
};

export default FilesHistory;
