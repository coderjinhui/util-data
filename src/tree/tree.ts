/**
 * 一维数组转树状结构
 */


export class Tree {
  // 根据父子id转换
  static treeByParenfId(arr: any[], parentField: string, idField: string) {
    let tree = arr.filter(item => !item[parentField]);
    let data = arr.filter(item => item[parentField]);
    let obj: any = {};
    data.forEach((item, index) => {
      const pid = item[parentField];
      if(obj[pid]) {
        obj[pid].push(data[index])
      }else {
        obj[pid] = [data[index]];
      }
    })
    
    change(tree);
    return tree;
    
    function change(child: any[]) {
      child.forEach((item, index) => {
        if(obj[item[idField]]) {
          item.children = obj[item[idField]].slice(0);
          delete obj[item[idField]];
        }
        if (Object.keys(obj).length > 0) {
          change(item.children);
        }
      })
    }
  }
}