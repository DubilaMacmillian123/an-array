function twoSum(nums, target_num) {  
    var map = [];  
    var indexnum = [];  

    for (var x = 0; x < nums.length; x++)  
    {  
        if (map[nums[x]] != null)  
        // what they meant by map[nums[x]]
        {  
            index = map[nums[x]];  
            indexnum[0] = index+1;  
            indexnum[1] = x+1;  
            break;  
        }  
        else  
        {  
            map[target_num - nums[x]] = x;  
        }  
    }  
    return indexnum;  
    }  
console.log(twoSum([10,20,10,40,50,60,70],50));

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function compare_to_sort(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(compare_to_sort));

 function mergeArrays(arr1, arr2 ) {
    var obj = {};
    var totalArray = arr1.concat(arr2);
    totalArray.forEach(function(value) {
    obj[value] = "";
    })
    return Object.keys(obj);
    }
    var array1 = [1, 2, 3];
    var array2 = [2, 30, 1];
    console.log(mergeArrays(array1,array2 ));