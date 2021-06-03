import "./styles.css";
import cat from './cat.svg'
const heading = document.createElement('h1');
heading.textContent = 'Webpack lecture!';

const root = document.querySelector('#root');
root.append(heading);

const catImg = document.createElement('img');
catImg.src = cat;
root.append(catImg);