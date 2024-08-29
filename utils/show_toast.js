import { toast } from "react-toastify";

export const show_toast = (type = "", message = "") => {
    switch (type) {
        case "success":
            return toast.success(message, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                hideProgressBar: true,
                theme: "colored",
                closeButton: false,
            });
        case "error":
            return toast.error(message, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                hideProgressBar: true,
                theme: "colored",
                closeButton: false,
            });
        case "warning":
            return toast.warn(message, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                hideProgressBar: true,
                theme: "colored",
                closeButton: false,
            });
        case "info":
            return toast.info(message, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                hideProgressBar: true,
                theme: "colored",
                closeButton: false,
            });
        default:
            return toast(message);
    }
};
