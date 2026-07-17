import toast from "react-hot-toast";

const successToast = (message) => {
  toast.success(message);
};

const errorToast = (message) => {
  toast.error(message);
};

const loadingToast = (message) => {
  return toast.loading(message);
};

const dismissToast = (id) => {
  toast.dismiss(id);
};

export { successToast, errorToast, loadingToast, dismissToast };
