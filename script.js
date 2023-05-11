// complete the given function

function palindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Check if the string is the same forwards and backwards
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome