import React from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const FileUpload = ({ setImg, setImgHistory, imgHistory }) => {
  const handleUpload = (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      const img = { name: file.name, url: URL.createObjectURL(file) };
      setImg(img);
      if (imgHistory.length === 9)
        setImgHistory((prevImgHistory) =>
          prevImgHistory.filter((ele, index) => index !== 0)
        );
      setImgHistory((prevImgHistory) => [...prevImgHistory, img]);
    }
  };

  return (
    <Container my="12">
      <AspectRatio width="64" ratio={1}>
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: "md",
          }}
          initial="rest"
          animate="rest"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Stack p="8" textAlign="center" spacing="1">
                  <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                    Drop images here
                  </Heading>
                  <Text fontWeight="light">or click to upload</Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />
          </Box>
        </Box>
      </AspectRatio>
    </Container>
  );
};

export default FileUpload;
