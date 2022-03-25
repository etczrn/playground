{
  type UseConfirmProps = {
    message: string;
    onConfirm: () => void;
    onCancel?: () => void;
  };

  const useConfirm = ({
    message = "",
    onConfirm,
    onCancel,
  }: UseConfirmProps) => {
    if (!onConfirm || typeof onConfirm !== "function") return;
    if (onCancel && typeof onCancel !== "function") return;

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
}
