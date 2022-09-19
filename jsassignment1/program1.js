// program to print 1 in the form of a pattern trinagle
var n = 6;
string = "";
for ( i = 1; i <= n; i++) {
  for ( j = 1; j <= n - i; j++) {
    string += " ";
  }
  for ( k = 0; k < 2 * i - 1; k++) {
    string += 1;
  }
  string += "\n";
}
console.log(string);