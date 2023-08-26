import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={() => toggleColorMode()}
      position={"absolute"}
      top={"0"}
      right={"0"}
      m={"1rem"}
    >
      {colorMode === "dark" ? (
        <SunIcon color={"orange.200"} />
      ) : (
        <MoonIcon color={"blue.700"} />
      )}
    </Button>
  );
};

export default ToggleColorMode;
