function shiftelement(s1,s2,n){
    for(let i = 0; i<n; i++){
        let temp = s1[s1.length-1];
        s1.pop()
        s2.push(temp)
    }

}
function reverse(s1,n){
    let s2 = []
    for(let i = 0; i<n; i++){
        let item = s1[s1.length-1]
        s1.pop()
        shiftelement(s1,s2,n-i-1)
        s1.push(item)
        shiftelement(s2,s1,n-i-1)
    }
}
let s1 = [1, 2, 3, 4, 5];
reverse(s1, s1.length);
console.log(s1);