import React, { useCallback, useImperativeHandle } from "react";
import { StyleSheet } from "react-native";
import { AlertDialog, Button } from "native-base";

const AlertModal = React.forwardRef((props, ref) => {
  const { title, message, onConfirm, onCancel, confirmLabel, cancelLabel } =
    props;
  const [isOpen, setIsOpen] = React.useState(false);

  const confirm = useCallback(() => {
    setIsOpen(false);
    onConfirm();
  }, [onConfirm]);

  const cancel = useCallback(() => {
    setIsOpen(false);
    onCancel();
  }, [onCancel]);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  useImperativeHandle(ref, () => ({
    show: () => {
      setIsOpen(true);
    },
  }));

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        {/* <AlertDialog.CloseButton /> */}
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <AlertDialog.Body>{message}</AlertDialog.Body>
        <AlertDialog.Footer alignItems={"center"} justifyContent={"center"}>
          <Button.Group>
            {cancelLabel && (
              <Button
                // variant="unstyled"
                colorScheme="coolGray"
                onPress={cancel}
                width="1/2"
                ref={cancelRef}
                // style={{marginHorizontal: 5}}
              >
                {cancelLabel}
              </Button>
            )}
            {confirmLabel && <Button width="1/2" colorScheme="blueGray" onPress={confirm}>{confirmLabel}</Button>}
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default AlertModal;
