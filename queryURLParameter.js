let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box'

let askIndex = url.indexOf('?')
let wellIndex = url.indexOf('#')

let askText = url.substring(askIndex+1,wellIndex)
let wellText = url.substring(wellIndex+1)

let askArr = askText.split('&')
let obj = {}
console.log(askArr)
askArr.forEach(item=>{
    let itemArr = item.split('=')
    // obj.itemArr[0] = itemArr[1]   报错  点符号不能动态赋值
    obj[itemArr[0]] = itemArr[1]
})
console.log(obj)


let url1 = 'http://www.zhufengpeixun.cn/index.html#box'

/*
* queryURLParams
* @params
*   url[string]要解析的字符串
* @return
*   [object]包含参数和哈希值信息的对象
* */
function queryURLParams(url){
    let askIn = url.indexOf('?'),
     wellIn = url.indexOf('#') ,
    askText = '',
        wellText = ''
    wellIn === -1 ? wellIn = url.length : null

     askIn>0?   askText = url.substring(askIn + 1,wellIn):null
    wellText = url.substring(wellIn+1)
    let result = {}
    if(askText !== ''){
        let ary= askText.split('&')
        ary.forEach(item=>{
            let itemAry = item.split('=')
            result[itemAry[0]] = itemAry[1]
        })
    }
    return result

}
