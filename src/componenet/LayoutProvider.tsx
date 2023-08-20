import {
  Box,
  Container,
  Grid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { CgBookmark, CgChevronRight, CgHeart } from "react-icons/cg";

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
                <ListIcon as={CgBookmark} />
                Albums
                <List spacing={3} ml="2" mt="3">
                  <ListItem>
                    <ListIcon as={CgChevronRight} />
                    Albums
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CgChevronRight} />
                    Albums
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CgChevronRight} />
                    Albums
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListIcon as={CgHeart} />
                Favourite
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
