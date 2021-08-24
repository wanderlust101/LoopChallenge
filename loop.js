// Print odds 1-20 //

var x = 1;
for(var i = 0; i <= 20; i++) {
    if(x % 2 != 0 && x < 20) {
        console.log(x);
        x += 2;
    }
}

// Decreasing Multiples of 3 //

for(var i = 100; i >= 0; i--) {
    if(i % 3 == 0 && i >= 0) {
        console.log(i);
        i -= 1;
    }
}

// Print the sequence //

for(var i = 4; i >= -3.5; i-=1.5) {
    console.log(i);
}

// Sigma //

var sum = 0;
for(var i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// Factorial //

var product = 1
for(i = 1; i <= 12; i++) {
    product = product * i;
}
console.log(product);