# util-array-tree
make data change more easy, for now, just provide method for data change from array to tree

## usage
```javascript
const util = require('util-array-tree');
let data = [{
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

const tree = util.Tree.treeByParentId(data, 'parentId', 'id');
console.log(tree);
```