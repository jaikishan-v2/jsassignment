n = 4;
s = "";
for (i = 0; i < n; i++) {
    for (j = 1; j < n - i; j++) {
        s += " ";
    }
    x = 1
    for (k = 0; k <= i; k++) {
        s += x + " ";
        x = x * (i - k) / (k + 1);
    }
    console.log(s);
    s = "";
}