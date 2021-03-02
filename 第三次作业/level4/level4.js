//方法1：递归
function deepClone(data) {
    const targetObj = data.constructor === Array ? [] : {};
    for (let key in data)
    {
            if (Object.prototype.toString.call(data[key])==='Object')
            {
                
                targetObj[key] = deepClone(data[key]);
            } else {
                targetObj[key] = data[key];
                }     
    }
    return targetObj;
}
var data1 = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
          { name: "summer",  sex: "woman"},
          { name: "daWen",   sex: "woman"},
          { name: "yang",    sex: "man" }  ], 
    work: { 
            time: "2019", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}
var data2 = deepClone(data1);
console.log(data1 === data2);
for (k in data1) {
    console.log(data1[k]);
}
for (k in data2)
{
    console.log(data2[k]);
}
//方法2：