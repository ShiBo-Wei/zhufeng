// let ary = [12,22,35,88,64]
// console.log(typeof ary)
// console.dir(ary)
/*
* 数字作为索引（key）
* ary[0]
* ary.length 获取数组的长度
* ary.length-1 最后一项的索引
* */




/*
* 向数组末尾增加内容
@params
  多个任意类型
@return
  新增后数组长度

*/
// let ary = [12,20]
// let res = ary.push(30,'SSS')
// //基于原神JS操作键值对的方法，向数组末尾追加新内容
// ary[ary.length] = 40
// console.log(ary)



// 向数组开始位置增加内容
// @params
// 多个任意类型
// @return
// 新增后数组长度
//
// let ary = [12,20]
// let res = ary.unshift(30,'SSS')
// console.log(ary)
// //基于原生ES6展开运算符，把原有的ARY克隆一份，在新的数组中创建第一项，其余的内容使用原始ARY中的信息即可
// ary = [100,...ary]


// /*
// 删除数组的第一项
// @params
// @return
// 删除的那一项
// */
// let ary = [10,20,30]
// let res =ary.shift()
//
// //基于原生JS中的DELETE，把数组当做普通对象，确实可以删掉某一项内容，但不会影响数组本身的结构特点（length长度不会改）真实项目中杜绝这样使用
// delete ary[0]
//



// /*
// 删除数组的最后一项
// @params
// @return
// 删除的那一项
// */
// let ary = [10,20,30]
// let res =ary.pop()
// //基于原生JS吧数组长度干掉一位，默认干掉的就是最后一项
// ary.length--



// /*
// 实现数组的增删改查
// @params
//     n,m 都是数字，从索引n 开始删除m个元素（m不写，就是删除到末尾）
// @return
//     把删除的部分用新数组存储起来返回
// */
// let ary = [10,20,30,23,232,4343,323]
// let res =ary.splice(2,4)
// /*
// console.log(ary,res)
// ary.splice(0)//清空数组，把原本来的数组以新数组存储起来（把原来的数组克隆一份一摸一样的的给新数组）
// */
//
// ary.splice(ary.length-1)//删除最后一项
// ary.splice(0,1)// 删除第一项


// /*
// 实现数组的增删改查
// @params
//     n,m，x 都是数字，从索引n 开始删除m个元素,用x占用删除的部分
//     n,0,x 从索引n开始，一个都不删，把x放在索引n的前面
// @return
//     把删除的部分用新数组存储起来返回
// */
// let ary = [10,20,30,23,232,4343,323]
// let res = ary.splice(1,2,'23213','AAA')
// console.log(res)
//
// //实现增加
// ary.splice(3,0,'ssss','qqqq')
//
// //向数组末尾追加
// ary.splice(ary.length,0,'aaaa')
//
// //向数组开始增加
// ary.splice(0,0,'ssss')


// /*
// 实现数组的查询
// @params
//     n,m， 都是数字，从索引n 开始 找到索引为m的地方
// @return
//     把找到的内容以一个新数组的形式返回
// */
// let ary = [10,20,30,23,232,4343,323]
// let res = ary.slice(1,3)
// console.log(ary,res)//ary  20,30
//
// //m不写就是找到末尾
// res = ary.slice(1)  //20,30,23,232,4343,323
//
// //数组的克隆
// res = ary.slice(0)


// /*
// concat ：实现数组的拼接
// @params
//     多个任意类型值
// @return
//     拼接后的新数组的形式返回
// */
// let ary1 = [10,20,30,23,232,4343,323]
// let ary2 = [165,4343,323,'sada']
//
// let res = ary1.concat(ary2,'sss')
// let clone = ary1.concat()
// console.log(res)



// /*
// toString:把数组转化为字符串
// @params
//
// @return
//     转换后的新数组（原数组不变,转换后的用逗号分隔
// */
// let ary = [10,20,30,23,232,4343,323]
//
// let res = ary.toString()
// console.log(toString([]))//''


// /*
// join:把数组转化为字符串
// @params
// 指定的分隔符（默认分割符 ，）
// @return
//     转换后的字符串（原数组不变,转换后的用指定的分隔符分隔
// */
// let ary = [10,20,30,23,232,4343,323]
//
// let res = ary.join('|')
// console.log(res)// '10|20|30|.....'
//
// let res1 = ary.join('+')
// console.log(res)// '10+20+30...'
// console.log(eval(res))// eval：把字符串变为JS表达式执行


// /*
// indexof/lastIndexof 检测出挡圈选个第一次或者最后一次出现位置的索引值（IE6-8中不兼容）
// @params
//     要检索的内容
// @return
//     这一项出现的位置索引值，如果数组没有这一项，返回的结果是-1   原来数组不变
// */
// let ary = [10,20,30,23,232,4343,323]
//
// console.log(ary.indexOf(23))
//
// //想验证ary中是否包含某一项
// if(ary.indexOf('aa') === -1){
//     //不包含
// }
//
// //也可以直接使用ES6中新提供的includes方法判断，如果存在 返回true
// console.log(ary.includes('aaa'))


// /*
// reverse 把数组倒过来排列
// @params
//
// @return
//     排列后的新数组，原来数组改变
// */
// let ary = [10,20,30,23,232,4343,323]
// ary.reverse()
// console.log(ary)//[323,4343,232...]


// /*
// sort 实现数组的排序
// @params
//     可以没有，也可以是个函数
// @return
//     排列后的新数组，原来数组改变
// */
// /*let ary = [10,20,30,23,232,4343,323]
// ary.sort()
//
// //SORT方法不传参数，无法处理10以上的数字排序，（他默认按照每一项第一个字符来排
// console.log(ary)//[10, 20, 23, 232, 30, 323, 4343]*/
// let ary = [10,20,30,23,232,4343,323]
// //想要实现多位数正常排序，需要给sort传递一个函数，函数返回a-b实现升序，b-a实现降序
// //a,b是相邻的两项
// ary.sort((a,b)=> a - b
// )
//
// //SORT方法不传参数，无法处理10以上的数字排序，（他默认按照每一项第一个字符来排
// console.log(ary)//[10, 20, 23, 232, 30, 323, 4343]


// /*
// forEach 遍历数组中的每一项内容
// @params
//     回调函数
// @return
//     原来数组不变
// */
// let ary = [10,20,30,23,232,4343,323]
// ary.forEach((item,index)=>{
//     //数组中有多少项，函数就会执行多少次
//     //每一次执行函数，item就是当前这一项，index就是当前项的索引
//     console.log('索引:'+index+'内容：'+item)
// })


//
// let ary = [10,20,30,23,232,4343,323,45,10,20]
// let newAry = []
// for(let i = 0;i<ary.length;i++){
//     let item = ary[i]
//     if(newAry.includes(item)){
//         continue
//     }
//     newAry.push(item)
// }

// for(let i =0;i<ary.length;i++){
//     for(let j =i+1;j<ary.length;j++) {
//         if (ary[i] === ary[j]) {
//             ary.splice([j])
//             j--
//         }
//     }
// }
//
// console.log(ary)

// //创建一个空对象
// let obj ={}
// //循环数组的每一项，把每一项向对象中存储 =>item:item
// for(let i=0;i<ary.length;i++){
//     let item = ary[i]
//     //每一次存储之前判断，验证obj中是否存在这一项
//     if(obj[item]!==undefined) {
//         ary.splice(i,1)
//         i--
//         continue
//     }
//     obj[item] = item
// }
// //基于splice实现删除性能不好，当前项被删后，后面所有项都要向前提一位，如果后面内容过多，一定影响性能


// //创建一个空对象
// let obj ={}
// //循环数组的每一项，把每一项向对象中存储 =>item:item
// for(let i=0;i<ary.length;i++){
//     let item = ary[i]
//     //每一次存储之前判断，验证obj中是否存在这一项
//     if(obj[item]!==undefined) {
//         ary[i]=ary[ary.length-1]
//         ary.length--
//         i--
//         continue
//     }
//     obj[item] = item
// }

/*
* unique:实现数组去重的方法
* @param
*   ary[Array]要去重的
* @return
*   ary[Array]去重后的
*
* */

// function unique(ary){
//     let obj = {}
//     for(let i=0;i<ary.length;i++){
//         let item = ary[i]
//         //每一次存储之前判断，验证obj中是否存在这一项
//         if(obj[item]!==undefined) {
//             ary[i]=ary[ary.length-1]
//             ary.length--
//             i--
//             continue
//         }
//         obj[item] = item
//     }
//     return ary
// }
//
// let aa = [12,212,211,11,10,11]
// console.log(unique(aa))

let ary = [10,20,30,23,232,4343,323,45,10,20]
ary = [...ary.set()]

