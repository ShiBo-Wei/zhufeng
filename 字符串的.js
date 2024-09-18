// /*
// * charAt:根据索引获取指定位置的字符
// * charCodeAt:获取指定字符的ASII码值
// *
// * @params
// *   n[number] 获取字符指定的索引
// * @return
// *   返回查找到的字符
// *   找不到返回的是空字符串不是undefined，或者对应的编码值
// * */
// let str = 'sadsaawdadsadasd'
// console.log(str.charAt(0))
// console.log(str[0])
// console.log(str.charAt(10000))//''
// console.log(str[10000])//undefined
// console.log(str.charCodeAt(0))
// console.log(String.fromCharCode(122))//'z'

// /*
// 都是为了实现字符串截取
// * substr(n,m):从索引n开始截取m个字符  m不写截取到末尾
// * 后面的方法也是
// * substring(n,m):从索引n开始找到索引m处
// * slice(n,m):和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的
// *
// * */
// let str='sadwrdgadewddada'
// console.log(str.substring(3,7))
// console.log(str.slice(3,7))
// console.log(str.slice(-3,-2))


// let str='sadwrdgadewddadfenga'
// console.log(str.indexOf('s')) //0
// console.log(str.lastIndexOf('s'))//0
//
// console.log(str.indexOf('@'))//-1 不存在
// if(str.indexOf('@')===-1){
//     //字符串不包含该字符
// }
//
// console.log(str.indexOf('feng'))//12  验证整体第一次出现的位置，返回的索引是第一个字符所在位置的索引
// console.log(str.indexOf('aui'))//-1
// console.log(str.indexOf('a',15))//19
//
// if(!str.includes('@')){
//     //不包含
// }


// /*
// * 字符串大小写转换
// * */
//
// let str = 'sadEWsdasdsada'
// str = str.toUpperCase()
// console.log(str)
// str = str.toLowerCase()
// console.log(str)


// /*
// * spilt (分隔符):把字符串按照制定的分隔符拆成数组（和数组中的join对应）
// * 支持传递正则表达式
// * */
// let str = 'music|movie|ear|sport'
// str = str.split('|')
// console.log(str)
// str = str.join(',')
// console.log(str)


// /*
// * repalce:实现字符串的替换
// * 支持传递正则表达式
// * */
// let str = '珠峰@培训@杨帆@启航'
// // str = str.replace('@','-') //
// // console.log(str)//'珠峰-培训@杨帆@启航'  在不使用正则的情况下，一次只能替换一个字符
// str = str.replace(/@/g,'-')
// console.log(str)//珠峰-培训-杨帆-启航


let time = '2019-7-24 12:6:23'
let arr = time.split(' ')
console.log(arr)
let day = arr[0].split('-')
let day1 = day[0] + '年' + day[1] + '月' + day[2] + '日'
let time1 = arr[1].split(':')
console.log(time1)
let time2 = time1[0] + '时' + time1[1] + '分' + time1[2] + '秒'
let daytime = day1 + time2
console.log(daytime)

//基于repalace
//基于indexof
//基于split
//基于正则
