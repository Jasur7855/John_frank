import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  user-select: none;
}
h2{
    font-size: calc(2.1vw + 19.7px);
    padding-bottom: calc(2vw + 12.3px);
    text-transform: uppercase;
    font-weight: 400;
    color:rgba(0, 0, 0, 1);
}
`