// Two Sum Coding Challenge 

const toGet = ['bananas', 'apples', 'bread', 'milk', 'cheese']
const inCart = ['beer', 'chips', 'umbrella', 'cheese', 'vodka', 'milk']

//write a function returns a list of what is left to get from the toGet that isnt in Cart 

// function should passes through an array 

//different 
// 2 loops
// 1 loop + hasmap


function whatsLeft (arr1, arr2) {
    return arr1.filter (item => {
       return !arr2.includes(item)
    })
}

console.log(whatsLeft(toGet, inCart))
