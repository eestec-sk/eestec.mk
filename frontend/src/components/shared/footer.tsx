import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Footer = () => {
  const [buttonText, setButtonText] = useState("Copy");
  const handleOnClick = () => {
    navigator.clipboard.writeText("skopje.lc@gmail.com");
    setButtonText("Copied!");
    setTimeout(() => {
      setButtonText("Copy");
    }, 1000);
  };

  return (
    <Flex bgColor="primary" width="100%" padding={50} align="center">
      <HStack w="full" justifyContent="space-around">
        <Box>
          <Image
            padding={3}
            height="80px"
            width="80px"
            borderRadius={100}
            bgColor="white"
            src="/images/flag.svg"
            alt="flag"
          />
          </Box>
          <Box>
          <Heading variant="h3white"  marginLeft={"-12rem"}>EESTEC LC Skopje</Heading>
          <Text variant="white"  marginLeft={"-12rem"}>Rugjer Boshkovikj 1000 Skopje</Text>
          <Text variant="white"  marginLeft={"-12rem"}>skopje.lc@gmail.com</Text>
        </Box>

    <Flex>
        <Image 
        width={266}
        margin={"auto"} 
              height={188}
                src="/images/logo_white.svg"
                alt="eestec map"/>
        <Box >
          {/* <Text 
          variant="white" 
          paddingTop={"12.2rem"} 
          marginLeft={"auto"} 
          textAlign={"center"}
          fontSize={"1.6rem"}
          textShadow={"4px 4px black"}
          >
          <b>E</b>lectrical <b>E</b>ngineering <b>ST</b>udents’ <br/><b>E</b>uropean asso<b>C</b>iation
            </Text> */}
        </Box>
        </Flex>
        <Box>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.55183979883628!2d21.406651475247948!3d42.00520273125226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354144327581731%3A0x6c4349f5875b2625!2sEESTEC%20LC%20Skopje!5e0!3m2!1sen!2smk!4v1709081052322!5m2!1sen!2smk" 
        width="500" 
        height="350" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Footer;
