// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let temp=[root,'s']
    let count=0
    let answer=[]
        while(temp.length>1){
            const node= temp.shift();
            
            if(node === 's'){
                answer.push(count);
                temp.push('s')
                count=0
            }
            else{
                count++
                temp.push(...node.children);
            }
        }
        answer.push(count)
        return answer
}

module.exports = levelWidth;
