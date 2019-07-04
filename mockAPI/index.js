import { getAPIData } from './module.js'

// import {moment} from './node_modules/moment/moment.js';
const wrapper = document.querySelector('.wrapper');

const buildLayout = () => {
    getAPIData().then(data => {
        return data.map(({name, avatar, createdAt}) => {
            let figure = document.createElement('figure'),
                img = document.createElement('img'),
                figcaption = document.createElement('figcaption'),
                dateSpan = document.createElement('span');
            dateSpan.innerText = `${new Date(createdAt).getFullYear()}`;
            figcaption.innerText = `${name}`;
            figcaption.appendChild(dateSpan);
            img.src = `${avatar}`;
            figure.appendChild(img);
            figure.appendChild(figcaption);
            wrapper.appendChild(figure);
        });
    });
};

buildLayout();