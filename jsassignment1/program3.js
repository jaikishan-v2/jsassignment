n = 9;
num = 1;
String = "";
for (d = 1; d <= n; d++) {
  num = d;
  for (c = 1; c <= n-d; c++)
    String += " ";
  for (c = 1; c <= d; c++) {
    String += num;
    num++;
  }
  num--;
  num--;
  for (c = 1; c < d; c++) {
    String += num;
    num--;
  }
  console.log(String);
  String = "";
}



/*
n=1;
string="";
if(n==1){
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += k+0;
  }
  string += "\n";
}}
for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string += k+1;
    }
   string += "\n";}
console.log(string);*/