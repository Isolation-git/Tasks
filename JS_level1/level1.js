var arr = prompt('请输入一个字符串：');
function recur(arr) {
    var str=[];
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] == arr[i + 1])
        {
            str[str.length] = arr[i] + arr[i + 1];
        }
    }  
    for (i = 0; i < str.length; i++)
    {
        console.log(str[i]);
        }
}
var arr1 = prompt('请输入需要判断字符重复出现的字符串：');
var n = prompt('请输入该字符：'),m;
function count(arr, n) {
    var str = [],num=0;
    for (i = 0; i < arr.length; i++ )
    {
        if (arr[i]===n)
        {
            num++;
        }
    }
    return num;
}
recur(arr);
m = count(arr1, n);
console.log('字符串'+ arr1 +'中'+n+'的重复次数为'+m);