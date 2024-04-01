// a function that swaps the case of each character in a string
//toggle is same as swapping

function toggleCase(sentence){
 
    //accepting a string as an input
    let str = "";
                
        for (let i = 0; i < sentence.length; i++) {
            let char = sentence.charAt(i);
    
            if (char === char.toUpperCase()) {
                str += char.toLowerCase()}
            else {
                str += char.toUpperCase()}
            
        }
        return str;
    
    }
    //testing function
    console.log(toggleCase('mY pLaYlIst is fIREE'))
    
    
    
    