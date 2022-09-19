/*a = [10, 3, 5, 12, 5, 3, 9, 1];
x = a.length;
console.log('length of the array is' + x);
count = 1;
for (i = 0; i < x; i++) {
    for (j = 1; j<=x; j++){
        if(a[i]==a[j]) count +=1;
    }
    console.log(a[i]+" - "+ count);
    count=0;
}*/

a = [10, 3, 5, 12, 5, 3, 9, 1];
x = a.length;
console.log('length of the array is : ' + x);
b = a.sort();
for (i = 0; i < x; i = i + count) {
    count = 1;
    for (j = i + 1; j < x; j++) {
        if (b[i] == b[j]) {
            count++;
        }
    }
    console.log(b[i] + "-" + count);
}