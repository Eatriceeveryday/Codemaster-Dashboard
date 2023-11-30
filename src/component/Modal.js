import {
  Box,
  Modal as Cmodal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Button from './Button';

const Modal = ({
  children,
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmButtonText,
  withCloseIcon = false,
  isButtonLoading,
}) => {
  return (
    <Cmodal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {withCloseIcon && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>
        {!withCloseIcon && (
          <ModalFooter>
            <Button
              onClick={onClose}
              text="cancel"
              bgColor="white"
              textColor="grey.700"
              variant="outline"
            />
            <Box width="8px" />
            <Button
              onClick={onConfirm}
              text={confirmButtonText}
              isBggradient
              isLoading={isButtonLoading}
            />
          </ModalFooter>
        )}
      </ModalContent>
    </Cmodal>
  );
};

export default Modal;
