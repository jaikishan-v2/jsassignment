let values = ['belle', 'candy', 'distributed', '113', 'Test', 'T!esT!', ' money ', 'test apples', '$$%^*&', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet metus et sodales dapibus. Fusce sodales in odio sit amet ornare. Proin suscipit elit at dui ornare molestie. Suspendisse congue finibus tellus, vel gravida lacus auctor non. Aliquam odio ex, venenatis vel pellentesque eu, cursus vel est. Etiam elementum ante odio, ac venenatis massa consequat ac. Pellentesque malesuada porta risus eget aliquam. Praesent suscipit ut justo tempus vehicula. Praesent hendrerit libero eu pharetra ornare. Sed nisi leo, laoreet vel dictum sed, finibus quis sem.'];
function removeDuplicates(eachWord){
    var ele = '';
    var eleCount = {};
    var newStr = [];
    eachChar = (eachWord.toLowerCase()).split('');
    len = eachChar.length;
    newCount =  recursive(0, ele, eleCount, eachChar);
    for (j in newCount) {
        if (newCount[j] == 1) newStr.push(j);
    }
    return newStr.join("");
}

function recursive(i, ele, eleCount, eachChar){
    if(i === len) {
        return eleCount;}

    ele = eachChar[i];
    if (eleCount[ele]) {
        eleCount[ele]++;
    }
    else eleCount[ele] = 1;
    i++;
    return recursive(i,ele,eleCount,eachChar);    
}
let expected = ['b','candy', 'srbue', '3', 'es', 'es', 'money',' al', '%^*&', 'xj'];

values.forEach((e,o)=>{removeDuplicates(e)!==expected[o]?(console.error("\n\n------- Failed -------"),console.error(`Test: ${e}`),console.error(`Result: ${removeDuplicates(e)}`),console.error(`Expected: ${expected[o]}`)):(console.log("\n\n------- Success -------"),console.log(`Test: ${e}`),console.log(`Result: ${removeDuplicates(e)}`))});