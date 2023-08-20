import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import SignUp from "./SignUp";

const AuthModal: FC<{ isOpen: boolean; toggle: VoidFunction }> = ({
  isOpen,
  toggle,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={toggle}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SignUp />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
