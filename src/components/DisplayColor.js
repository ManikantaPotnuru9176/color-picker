import React from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const DisplayColor = ({ hexColor, rgbColor, setShowPhotoShopPicker }) => {
  const toast = useToast();

  const handleCopyClick = (color) => {
    navigator.clipboard.writeText(color);

    toast({
      title: "Copied!",
      description: `${color} has been copied to clipboard.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handlePickerToggle = (code) => {
    setShowPhotoShopPicker((prev) => ({
      status: !prev.status,
      code: prev.code === code ? null : code,
    }));
  };

  return (
    <Container my="12">
      <AspectRatio width="64" ratio={1}>
        <Box
          borderColor="gray.300"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
        >
          <Box position="relative" height="100%" width="100%">
            <Stack
              pt="12px"
              width="100%"
              alignItems="center"
              justify="center"
              spacing="4"
            >
              <Heading fontSize="lg" fontWeight="bold">
                Selected Color
              </Heading>
            </Stack>
            <Stack pl={5} pt={4}>
              <Text>Hex Code: {hexColor}</Text>
              <Stack direction={"row"}>
                <Box
                  borderColor="gray.300"
                  borderWidth="1px"
                  rounded="md"
                  bg={hexColor}
                  w="80%"
                  p={4}
                  color="black"
                  onClick={() => handlePickerToggle("hex")}
                />
                <IconButton
                  size="sm"
                  icon={<CopyIcon />}
                  onClick={() => handleCopyClick(hexColor)}
                />
              </Stack>
              <Text pt={5}>RGB Code: {rgbColor}</Text>
              <Stack direction={"row"}>
                <Box
                  borderColor="gray.300"
                  borderWidth="1px"
                  rounded="md"
                  bg={rgbColor}
                  w="80%"
                  p={4}
                  color="black"
                  onClick={() => handlePickerToggle("rgb")}
                />
                <IconButton
                  size="sm"
                  icon={<CopyIcon />}
                  onClick={() => handleCopyClick(rgbColor)}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </AspectRatio>
    </Container>
  );
};

export default DisplayColor;
