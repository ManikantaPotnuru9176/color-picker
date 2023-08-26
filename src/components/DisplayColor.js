import React, { useEffect, useState } from "react";
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

const DisplayColor = ({ hexColor, rgbColor }) => {
  const [showCopyText, setShowCopyText] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCopyText(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [hexColor, rgbColor]);

  const handleCopyClick = (color) => {
    navigator.clipboard.writeText(color);
    setShowCopyText(false);

    toast({
      title: "Copied!",
      description: `${color} has been copied to clipboard.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
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
          initial="rest"
          animate="rest"
        >
          <Box position="relative" height="100%" width="100%">
            <Stack
              pt="12px"
              width="100%"
              display="flex"
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
                  color={"black"}
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
                  color={"black"}
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
