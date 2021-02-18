//1.
var nums = [9, 1, 5, 8, 7, 18, 19];
console.log('排序前：' + nums);
function mpsort(nums) {
    var temp;
    for (var i = 0; i < nums.length-1; i++)
    {
        for (var j = i + 1; j < nums.length; j++)
        {
            if (nums[i] > nums[j])
            {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                }
            }
        }
}
mpsort(nums);
console.log('排序后：' + nums);
//2.
var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10];
console.log(arr);
function even(arr) {
    return arr.toString().split(',').map(Number);
}
console.log(arr.toString());;
console.log(even(arr));
//3.
var arr0 = [{ id: 10, name: 'kc' }, { id: 8, name: 'hy' }, { id: 15, name: 'pipi' }, { id: 2, name: 'mama' }];
function cmp(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (value1 > value2) {
            return 1;
        } else {
            return -1;
        }
    }
}
for (var i = 0; i < arr0.length; i++)
{
    console.log(arr0[i]);
    }
arr0.sort(cmp('id'));
for (var i = 0; i < arr0.length; i++)
{
    console.log(arr0[i]);
    }
arr0.sort(cmp("name"));
for (var i = 0; i < arr0.length; i++)
{
    console.log(arr0[i]);
    }