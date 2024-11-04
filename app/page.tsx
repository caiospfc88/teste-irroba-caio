import { Box } from "@chakra-ui/react";
import TopMenu from "../components/primeira-moda/TopMenu";
import Banner from "@/components/primeira-moda/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <TopMenu/>
      <Banner/>
      
    </Box>
  );
}
