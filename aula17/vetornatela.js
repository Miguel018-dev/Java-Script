let num = [9, 6, 8, 0, 4]
num.sort()
console.log(num)

/*
for (pos=0; pos < num.length; pos++){
    console.log(`os valores do vetor são ${num[pos]}`)
}
*/

for(pos in num){
    console.log(`os valores do vetor são ${num[pos]}`)
}
