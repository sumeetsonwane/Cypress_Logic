function duplicatechar(str) {

    let charfrquency={};

    // Iterate through each character in the string

    for (let char of str) {
        // If the character is already in the frequency map, it's a duplicate

        if (charfrquency[char]) {
            charfrquency[char]++;
        }else{
            charfrquency[char]=1;
        }
    }

    // Find and print duplicate characters
    for (let char in charfrquency){
        if (charfrquency[char] > 1){
     console.log(`dupicate character: ${char}`)

        }  
    }
}
let inputstring=" java programing";
 duplicatechar(inputstring) ;


 