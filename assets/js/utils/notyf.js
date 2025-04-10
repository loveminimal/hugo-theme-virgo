import { Notyf } from "../libs/notyf.min";

const notyf = new Notyf({
    duration: 1500,
    position: {
        x: "right",
        y: "top",
    },
    types: [
        {
            type: "success",
            background: "#198754",
            icon: '👍',
        },
        {
            type: "warning",
            background: "#ffc107",
            icon: '🤖',
        },
        {
            type: "info",
            background: "#0dcaf0",
            icon: '🪧',
        },
        {
            type: "error",
            background: "#dc3545",
            icon: '🚫',
        },
    ],
});

export default notyf;
