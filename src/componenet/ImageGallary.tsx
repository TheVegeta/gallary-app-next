import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

import { Box, Button, Image } from "@chakra-ui/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { FC } from "react";
import { CgHeart } from "react-icons/cg";
import { GetAllGalleryQuery } from "../generated/graphql";

const ImageGallary: FC<{ data: GetAllGalleryQuery["getAllGallery"] }> = ({
  data,
}) => {
  return (
    <>
      <Box
        mt="3"
        w="100%"
        maxW="900px"
        mx="auto"
        bg="gray.800"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {data.map((item) => (
            <Box as="a" href={item.image} position="relative">
              <Button position="absolute" left={0}>
                <CgHeart />
              </Button>
              <Image
                key={item._id}
                w="100%"
                borderRadius="xl"
                mb={2}
                display="inline-block"
                src={item.medium}
                alt="Alt"
              />
            </Box>
          ))}
        </LightGallery>
      </Box>
    </>
  );
};

export default ImageGallary;
