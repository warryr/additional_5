module.exports = function check(str, bracketsConfig) {
  var temp = [];
  
  for (var i = 0; i < str.length; i++){
    if (str[i] == '(' || str[i] == '[' || str[i] == '{'){
      temp.push(str[i]);
    } else if (str[i] == ')' || str[i] == ']' || str[i] == '}'){
      if (temp.length == 0){
            return false;
          } else{
            open = temp.pop();
            if (!(open == '(' && str[i] == ')') && !(open == '[' && str[i] == ']') && !(open == '{' & str[i] == '}')){
                return false;
            }
        }
    }
  }
  if (temp.length > 0){
    return false;
  }
  return true;
}
