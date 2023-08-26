import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";

const FileUpload = ({ setImg, setImgHistory, imgHistory }) => {
  const [imgUrl, setImgUrl] = useState("");

  const handleUpload = (e, type) => {
    console.log("type: ", type);
    const file = type == "file" ? e.target.files[0] : imgUrl;
    if (file) {
      const img =
        type === "file"
          ? { name: file.name, url: URL.createObjectURL(file) }
          : { name: "External Image", url: file };
      setImg(img);
      if (imgHistory.length === 9) {
        setImgHistory((prevImgHistory) => prevImgHistory.slice(1));
      }
      setImgHistory((prevImgHistory) => [...prevImgHistory, img]);
    }
  };

  return (
    <Container my="12">
      <AspectRatio width="64" ratio={1.6}>
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
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
              opacity="0"
              accept="image/*"
              onChange={(e) => handleUpload(e, "file")}
            />
          </Box>
        </Box>
      </AspectRatio>
      <Text textAlign={"center"} m={2}>
        OR
      </Text>
      <AspectRatio width="64" ratio={4} mt={2}>
        <InputGroup size="md">
          <Input
            placeholder="https://www.image.com/image.png"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <InputRightAddon
            children="Add"
            cursor={"pointer"}
            onClick={(e) => handleUpload(e, "url")}
          />
        </InputGroup>
      </AspectRatio>
    </Container>
  );
};

export default FileUpload;
