import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        color: white;
    }
    body{
        font-family: "EB Garamond", serif;
        font-style: hidden;
        font-size: clamp(1rem, 1.5vw, 1.2rem)
        color: white;
        background: #262626;
    }
    h1, h2, h3, h4, h5, h6{
        color: white;
    }
    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframe shake{
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;
