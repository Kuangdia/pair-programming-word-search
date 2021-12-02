const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let ls of horizontalJoin) {
        if (ls.includes(word)) {
            return true;
        }
    } 
    return false;   
}
  


module.exports = wordSearch

//map -> creates a new array -> performs ls on every letter within the array