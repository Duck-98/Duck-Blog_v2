// global-styles.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    	margin: 0;
        padding: 0;
    }
    body {
        transition: background-color 0.3s ease, color 0.3s ease;
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
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
