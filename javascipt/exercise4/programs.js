// // // displaying sum of  5 to 1 
// // let sum1 = 0;
// // for (let i  = 0 ; i  <=  5; i++)
// // {
// //    sum1 = sum1 + i
// // }
// // document.write(sum1+"<br>");


// // for (let i  = 5 ; i > 0; i--)
// // {
// //     document.write('<br/>'+i);
// // }



// // do{
// //     let input = prompt('Enter your age');
// // }while( typeof input === 'number');
// //pending

// //multiplication table 

// // let table = prompt("Which table you want to display")
// // let limit = prompt("Enter the limit for table")
// // for ( let i  = 1 ; i <= limit ; i++)
// // {
// //     let mul = table * i;
// //     console.log(mul);
// // }

// // print even numbers from 2 to 20
// //  for( let i = 2 ; i<=20;i+=2)
// //  {
// //     console.log(i)
// //  }

//  //reverse a string 
  
//  let str = 'this';
//  let rev='';
//  for (let i= str.length; i >= 0 ; i--)
// {
//      rev = str[i];
//      console.log(rev)
// }


// let fact=1;
// for(let i = 5 ;i>0;i--)
// {
//     fact = fact *i;
// }
// console.log(fact)

// let num_check= prompt("Enter the number")
// if(num_check > 1 && num_check % num_check === 0 )
// {
//     console.log("no is prime");
// }
// else{
//     console.log("")
// }// pending



// arrays

// let arr = [
//     [1,2,3,4],
//     [56,7,9]
// ];

// console.log(arr[1][0]);
// arr[arr.length - 1 ].push('30');
// console.log(arr);

// // push element to the array 

// // let fruits = ['apple','banana','orange'];
// //  fruits.push('grapes','apricot');
// //  console.log(fruits);

// //  let empty = [];
// //  for (let i = 0 ; i <= 15 ; i++){
// //    let input =  prompt('Enter the even numbers till 30');
// //    empty.push(input);

// //  }
// //  console.log(empty);

//  //Create an array with numbers [2, 4, 6]. Use push() to add 8 only if it's not already in the array.


// let num_arr = [2,4,6],found;
// for (let i = 0; i< num_arr.length; i++)
// {
//         if(num_arr[i]  !== 8){
//             num_arr.push(8);
//             found = true;
//             break;
            
//         }
// }
// if(found)
//     console.log( 8 + 'added  in the array');
// else
//     console.log( 8 + 'already exists  in the array');
// console.log(num_arr);

// using pop to reverse an array

// let originalArray = [1, 2, 3, 4, 5];
// let reversedArray = [];
// while (originalArray.length > 0) {
//     reversedArray.push(originalArray.pop());
// }
// console.log("Reversed Array:", reversedArray); // Output: [5, 4, 3, 2, 1]


//Use the pop() method to remove and display the last three elements from an array.

// let array = [1,2,3,4,5,6,7,8,9];
// let arr_print = [];
// for (let i = 0 ; i< 5;i++)
// {
//     arr_print.push(array.pop());
// }

// console.log(arr_print);


//Handle the case where pop() is called on an empty array.

let arr = ['sam','mm','sm'];
let flag = 0;
while(arr.length > 0)
{
    arr.pop();
    if(arr.length === 0)
    {
        flag=1;   
        break;
    }

}

if(flag= 1)
{
    console
}




