let box = document.getElementById('box')

// console.log(box.childNodes)
//标准浏览器（非IE68）中会把空格和换行当做文本节点处理（childNodes包含所有节点）
//只想要元素节点（IE6-8下，使用children会把注释也当做元素节点）
//console.log(box.children.length)

/*
* children：获取指定上下文中，所有的元素子节点
*   @params
*       context[element object ]指定的上下文元素信息
*  @return
*       [array]返回的所有元素的子节点集合
* */
// function  children(context){
//     let res = [],
//         nodeList = context.childNodes
//     //遍历所有的子节点，找出元素子节点，存储到res
//     for ( let i = 0;i<nodeList.length;i++){
//         let item = nodeList[i]
//         item.nodeType === 1 ? res.push(item):null
//     }
//     return res
// }

//===================================
// console.log(box.firstChild)
// console.log(box.firstElementChild)

let fangqi = document.getElementById('#fangqi')

console.log(fangqi.previousSibling)
console.log(fangqi.previousElementSibling)

//获取上一个哥哥元素节点
function presv(context){
    var pre = context.previousSibling
    //一直找到哥哥是元素节点为止
    while (pre.nodeType !=1){
        pre = pre.previousSibling
    }
    return pre
}
