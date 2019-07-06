// 3. Дано дерево, надо найти сумму всех вершин
import {graph} from './tree.js'

const countValues = (data) => data.reduce((accumulator, nextValue) => accumulator + nextValue);

const countTreeTops = (graph) => {
    const treeTopsValues = [];
    const tree = [graph];
    const getTreeTops = function getValues(tree) {
        tree.map(item => item.children
                         ? getValues(item.children)
                         : treeTopsValues.push(item.value));
        return countValues(treeTopsValues);
    };
    return getTreeTops(tree);
};
console.log(countTreeTops(graph));