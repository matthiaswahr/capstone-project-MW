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
body, h1, h2, h3, p {
  margin: 0;
}
body {
  line-height: 1.5;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
 `;
