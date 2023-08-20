import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Container,
  Grid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { CgBookmark, CgHeart } from "react-icons/cg";

const LayoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Container maxW="container.lg">
        <Grid gridTemplateColumns="repeat(4, 1fr)" width="100%">
          <Box
            gridColumn={{ base: "span 1" }}
            display={{ base: "none", md: "block" }}
          >
            <List spacing={3}>
              <ListItem>
                <Link href="/my-gallery">
                  <ListIcon as={CgBookmark} />
                  My Gallery
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/my-likes">
                  <ListIcon as={CgHeart} />
                  Favourite
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box gridColumn={{ base: "span 4", md: "span 3" }}>{children}</Box>
        </Grid>
      </Container>
    </>
  );
};

export default LayoutProvider;
