var n = 6;
count = 1;
string = "";
for ( i = 1; i <= n; i++) {
  for ( j = 1; j <= n - i; j++) {
    string += " ";
  }
  for ( k = 0; k < 2 * i - 1; k++) {
    string += count;
    count++;
    if(count==10){
        count=0;}
  }
  string += "\n";
}
console.log(string);