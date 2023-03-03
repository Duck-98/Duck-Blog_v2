// global-styles.ts

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    	margin: 0;
        padding: 0;
        /* box-sizing: border-box; */
    }
    body {
        /* align-items: center; */
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
        /* height: 100vh; */
        /* margin: 0; */
        /* padding: 0; */
        /* transition: all 0.25s linear; */
        color: ${({ theme }: { theme: any }) => theme.textColor};
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        /* color: ${({ theme }: { theme: any }) => theme.bgColor}; */
        /* background-color: ${({ theme }: { theme: any }) => theme.textColor}; */
    }
    a{
         color: ${({ theme }: { theme: any }) => theme.textColor};
         text-decoration: none;
            text-decoration-line: none;
         &:visited{
            text-decoration: none;
            text-decoration-line: none;
         }
    }
   
`;
