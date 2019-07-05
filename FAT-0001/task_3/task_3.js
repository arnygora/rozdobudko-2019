import { graph } from './tree.js'

const countPicks = (graph) => {
    const arrayPicksValues = [];
    const tree = [graph];
    const get = function getTopValuesOnly(tree) {
        tree.map(item => {
            if (item.children) {
                return getTopValuesOnly(item.children)
            } else {
                return arrayPicksValues.push(item.value);
            }
        });
        return arrayPicksValues.reduce((accumulator, nextValue) => accumulator + nextValue);
    };
    return get(tree);
};
console.log(countPicks(graph));