var tabBox = document.getElementById('tabBox')
var tabList = document.getElementsByTagName('div')
var navBox =document.getElementById('navBox')
var navList = document.getElementsByTagName('li')


// for(var i =0;i<navList.length;i++){
//     //navList[i]:就是当前循环下我们要操作的Li
//     navList[i].myIndex = i
//     navList[i].onclick = function () {
//         changeTab(this.myIndex)
//     }
// }


for (let i =0;i<navList.length;i++){
    navList[i].onclick = function (){
        changeTab(i)
    }
}

function changeTab(clickIndex){
    for(var i=0;i<navList.length;i++){
        navList[i].className = ''
        tabList[i + 1].className = ''
    }
    navList[clickIndex].className='active'
    tabList[clickIndex + 1].className='active'
}

// for(var i =0;i<navList.length;i++){
//     //navList[i]:就是当前循环下我们要操作的Li
//     navList[i].onclick = (function (i){
//         return function (){
//             changeTab(i)
//         }
//     })(i)
// }
