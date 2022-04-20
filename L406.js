/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let queue = [];
    // 身高最高的排前面，身高相同按照前面人数从小到大排列
    people.sort((a, b) => {
        // 身高不同，则按身高从大到小排列
        if (b[0] !== a[0]) {
            return b[0] - a[0];
        } else {
            // 身高相同，则按人数从小到大排列
            return a[1] - b[1];
        }
    });
    
    // 有了前面的规则排序后，就可以进行插入了
    for (let i = 0; i < people.length; i++) {
        // 插入每一项前面的人数的索引中
        queue.splice(people[i][1], 0, people[i]);
    }
    return queue;
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));