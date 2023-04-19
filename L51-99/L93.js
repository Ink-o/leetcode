/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let path = [];
    let result = [];
    let restLen = s.length;
    let len = s.length;
    return progress(0);
    function progress(startIndex) {
        if (path.length === 4) {
            if (restLen !== 0) {
                return;
            }
            result.push(path.join('.'));
            return;
        }
        for (let i = startIndex; i < len; i++) {
            if (i + 1 - startIndex > 3 || !isIp(s.substring(startIndex, i + 1))) {
                continue;
            }
            path.push(s.substring(startIndex, i + 1));
            restLen = restLen - (i + 1 - startIndex);
            progress(i + 1);
            path.pop();
            restLen = restLen + (i + 1 - startIndex);
        }
        return result;
    }
};
function isIp(str) {
    if (str == 0 && str.length == 0) return true;
    if (str.indexOf('0') == 0 || Number(str) > 255) return false;
    return true;
}
console.log(restoreIpAddresses('25525511135'));