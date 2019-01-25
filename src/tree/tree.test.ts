import { Tree } from './tree';
let arr = [{
  id: '111',
  parentId: '000',
  name: 'hahaha'
}, {
  id: '000',
  name: 'ppp'
}, {
  id: '222',
  parentId: '111',
  name: 'kkk'
},{
  id: '333',
  parentId: '000',
  name: 'ooo'
}]


const t = Tree.treeByParentId(arr, 'parentId', 'id');
console.log(JSON.stringify(t));