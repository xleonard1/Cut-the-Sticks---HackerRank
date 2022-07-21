function cutTheSticks(arr) { 
    let sorted = arr.sort((a,b) => a - b) // sort the array from least to greatest in order to find the minimum, this returns a new array
    let min = sorted[0] // the minimum = the first index of the array
    let final = [] // set empty array to hold the values for the final
    final.push(sorted.length) // push the largest length of the array/ first new iteration into the final result, then loop through the sorted array
   
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] > min) {
            min = sorted[i]
            // find the new minimum
            // push the sorted array.length and subtract it from the indeces
            final.push(sorted.length - i)
        } 
    }
    
    return final
}
