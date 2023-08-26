import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PhotoshopPicker } from "react-color";

const PhotoShopPicker = ({
  hexColor,
  setHexColor,
  rgbColor,
  setRGBColor,
  showPhotoShopPicker,
  setShowPhotoShopPicker,
}) => {
  const [selectedHexColor, setSelectedHexColor] = useState("");
  const [selectedRGBColor, setSelectedRGBColor] = useState("");

  useEffect(() => {
    setSelectedHexColor(hexColor);
    const [r, g, b] = rgbColor
      .slice(rgbColor.indexOf("(") + 1, rgbColor.indexOf(")"))
      .split(",")
      .map(Number);
    setSelectedRGBColor({ r: r, g: g, b: b });
  }, []);

  const handleAcceptAndCancel = () => {
    setShowPhotoShopPicker({ status: false, code: null });
  };

  const handleChange = (color) => {
    const { r, g, b } = color.rgb;
    showPhotoShopPicker?.code === "hex"
      ? setHexColor(color.hex)
      : setRGBColor(`rgb(${r},${g},${b})`);
    showPhotoShopPicker?.code === "hex"
      ? setSelectedHexColor(color.hex)
      : setSelectedRGBColor({ r: r, g: g, b: b });
  };

  return (
    <Flex justify={"center"}>
      <PhotoshopPicker
        width={"full"}
        color={
          showPhotoShopPicker?.code === "hex"
            ? selectedHexColor
            : selectedRGBColor
        }
        onAccept={() => handleAcceptAndCancel()}
        onCancel={() => handleAcceptAndCancel()}
        onChange={(color) => handleChange(color)}
      />
    </Flex>
  );
};

export default PhotoShopPicker;
