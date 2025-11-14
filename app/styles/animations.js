import { keyframes } from "@emotion/react";

export const animationStyles = `

@keyframes float {
    0%,100% { transform: translateY(0);  }
    50% { transform: translateY(-10px); }
}
    @keyframes bounce {
    0%, 100% { transform: translateY(0);  }
    50% { transform: translateY(-10px); }
}`;