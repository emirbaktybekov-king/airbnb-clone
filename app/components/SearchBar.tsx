import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = () => {
  return (
    <Flex
      flexDirection="row"
      w="850px"
      h="66px"
      borderRadius="33px"
      overflow="hidden"
      borderColor="#DDDDDD"
      borderWidth="1px"
    >
      <Button flex="1" h="100%" borderRadius="33px" variant="ghost">
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          px="32px"
          py="14px"
          textAlign="start"
          justify="center"
        >
          <Text fontSize="12px" fontWeight="500">
            Where
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Search destinations
          </Text>
        </Flex>
      </Button>
      <Button w="140.5" h="100%" borderRadius="33px" variant="ghost">
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          px="24px"
          py="14px"
          textAlign="start"
          justify="center"
        >
          <Text fontSize="12px" fontWeight="500">
            Check in
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Add dates
          </Text>
        </Flex>
      </Button>
      <Button w="140.5" h="100%" borderRadius="33px" variant="ghost">
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          px="24px"
          py="14px"
          textAlign="start"
          justify="center"
        >
          <Text fontSize="12px" fontWeight="500">
            Check out
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Add dates
          </Text>
        </Flex>
      </Button>
      <Button flex="1" h="100%" borderRadius="33px" variant="ghost">
        <Flex
          flexDirection="row"
          w="100%"
          h="100%"
          py="14px"
          align="center"
          justify="space-between"
        >
          <Flex flexDirection="column" textAlign="start" px="32px">
            <Text fontSize="12px" fontWeight="500">
              Who
            </Text>
            <Text fontSize="12px" fontWeight="500">
              Add guests
            </Text>
          </Flex>
          <Button variant="ghost" p="0">
            <Flex
              boxSize="48px"
              borderRadius="24px"
              justify="center"
              align="center"
              backgroundColor="#FF385C"
            >
              <GrSearch size="16px" color="white" />
            </Flex>
          </Button>
        </Flex>
      </Button>
    </Flex>
  );
};

export default SearchBar;
