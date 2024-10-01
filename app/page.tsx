import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";

export default function Home() {
  return (
    <Flex flexDirection={"column"} width="100%" height="100vh">
      <Flex height="200px">
        <Header />
      </Flex>
      <Flex flex="1"></Flex>
    </Flex>
  );
}
