import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --primary: hsl(55, 100%, 53%);
  --primary-light: hsl(55, 100%, 80%);
  --secondary: hsl(235, 100%, 53%);
  --secondary-light: hsl(235, 100%, 80%);
  --gray: hsl(220, 20%, 80%);
  --gray-light:hsl(220, 20%, 90%);
  --ff-sans:'Roboto', sans-serif;
}

h1, h2, h3 {
  line-height: 1.2;
}


main,
body, h1, h2, h3, p {
  margin: 0;
}
body {
  line-height: 1.5;
  background-color: #85ffbd;
  background-image: linear-gradient(
    45deg,
    #85ffbd 0%,
    #fffb7d 50%,
    #ffffff 100%
  );
  background-position: center 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
  

img {
  max-width: 100%;
  height: auto;
  display: block;
}
 `;
