import React, { useEffect, useState } from "react";
import ToggleColorMode from "@/components/ToggleColorMode";
import {
  Container,
  Stack,
  Flex,
  Box,
  Button,
  Image,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import FileUpload from "./FileUpload";
import DisplayColor from "./DisplayColor";
import FilesHistory from "./FilesHistory";

const ColorPicker = () => {
  const [img, setImg] = useState({
    name: "test",
    url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  });
  const [imgHistory, setImgHistory] = useState([]);
  const [hexColor, setHexColor] = useState("#000");
  const [rgbColor, setRGBColor] = useState("rgb(0,0,0)");
  const [showInstruction, setShowInstruction] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstruction(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [img]);

  const openEyeDropper = async (e) => {
    let eyeDropper = new EyeDropper();
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          setHexColor(res.sRGBHex);
          setRGBColor(hex2rgb(res.sRGBHex));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fullHex = (hex) => {
    let r = hex.slice(1, 2);
    let g = hex.slice(2, 3);
    let b = hex.slice(3, 4);

    r = parseInt(r + r, 16);
    g = parseInt(g + g, 16);
    b = parseInt(b + b, 16);

    return `rgb(${r},${g},${b})`;
  };

  const hex2rgb = (hex) => {
    if (hex.length === 4) {
      return fullHex(hex);
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r},${g},${b})`;
  };

  return (
    <Flex
      direction={"column"}
      bg={useColorModeValue("gray.50", "gray.800")}
      justify={"center"}
      overflow={"hidden"}
    >
      <ToggleColorMode />
      <Container maxW={"7xl"}>
        <Heading size="lg" fontSize="50px" textAlign={"center"} pt={4}>
          Color Picker
        </Heading>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pt={"4"}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} direction={"row"} spacing={{ base: 5, md: 10 }}>
            <FileUpload
              setImg={setImg}
              setImgHistory={setImgHistory}
              imgHistory={imgHistory}
            />
            <DisplayColor hexColor={hexColor} rgbColor={rgbColor} />
            {/* <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                Get started
              </Button>
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                How It Works
              </Button>
            </Stack> */}
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={img.name}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={img.url}
                onClick={() => {
                  openEyeDropper();
                  setShowInstruction(false);
                }}
              />
              {showInstruction && (
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex={1}
                  textAlign="center"
                  fontSize="18px"
                  fontWeight="bold"
                  bg="rgba(0, 0, 0, 0.6)"
                  color="#fff"
                  padding="10px"
                  borderRadius="8px"
                  onClick={() => {
                    setShowInstruction(false);
                    openEyeDropper();
                  }}
                >
                  Click on the Image to Activate Eye Dropper
                </Box>
              )}
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Flex
        justify={"center"}
        alignItems={"center"}
        direction={"column"}
        pt={"20px"}
        pb={"80px"}
        m={0}
      >
        <Heading textAlign={"center"}>Uploaded Images</Heading>
        <FilesHistory imgHistory={imgHistory} setImg={setImg} />
      </Flex>
    </Flex>
  );
};

export default ColorPicker;
