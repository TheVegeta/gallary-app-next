import { Box, Button, Image } from "@chakra-ui/react";
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
        {data.map((src) => (
          <Box position="relative">
            <Button position="absolute" left={0}>
              <CgHeart />
            </Button>
            <Image
              key={src._id}
              w="100%"
              borderRadius="xl"
              mb={2}
              display="inline-block"
              src={src.medium}
              alt="Alt"
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ImageGallary;
