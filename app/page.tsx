import { Box } from "@chakra-ui/react";
import TopMenu from "../components/primeira-moda/TopMenu";
import Banner from "@/components/primeira-moda/Banner";
import BannerPagamentos from "@/components/primeira-moda/BannerPagamentos";
import BannerCategorias from "@/components/primeira-moda/BannerCategorias";
import Destaques from "@/components/primeira-moda/Destaques";
import Newsletter from "@/components/primeira-moda/Newsletter";
import RodapeCategorias from "@/components/primeira-moda/RodapeCategorias";

export default function Home() {
  return (
    <Box>
      <TopMenu/>
      <Banner/>
      <BannerPagamentos/>
      <BannerCategorias/>
      <Destaques/>
      <Newsletter/>
      <RodapeCategorias/>
    </Box>
  );
}
