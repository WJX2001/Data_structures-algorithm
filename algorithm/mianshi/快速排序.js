function quickSort(arr) {
    const rec = (arr) => {
        if(arr.length <=1){
            return arr
        }
        let left = []
        let right = []
        let mid = arr[0]
        for(let i=1;i<arr.length;i++) {
            if(arr[i]>mid){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }
        }
        return [...rec(left),mid,...rec(right)]
    }
    return rec(arr)
}
const arr = [1,5,7,2,4,0]
const a  = quickSort(arr)
console.log(a)