import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { GoGlobe } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Flex flexDirection="column" w="100%">
      <Flex px="30px" py="15px" justify="space-between" w="100%" align="center">
        <Flex w="300px">
          <Image src="./Airbnb-logo.png" w="150px" h="60px" />
        </Flex>
        <Flex>
          <Button variant="ghost" borderRadius="25px">
            Stays
          </Button>
          <Button variant="ghost" borderRadius="25px">
            Experiences
          </Button>
        </Flex>
        <Flex align="center" w="300px">
          <Button variant="ghost" borderRadius="25px">
            Airbnb your home
          </Button>
          <Button variant="ghost" h="46px" width="46px" borderRadius="23px">
            <GoGlobe size="35px" />
          </Button>
          <Button
            variant="ghost"
            borderRadius="30px"
            py="3px"
            h="48px"
            width="86px"
          >
            <Flex flexDirection="row" gap="5px" align="center">
              <IoMenu size="20px" /> <IoPersonCircle size="30.6px" />
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" justify="center">
        <SearchBar />
      </Flex>
    </Flex>
  );
};

export default Header;
