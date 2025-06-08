function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 5, 4, 2, 6, 4])); 
