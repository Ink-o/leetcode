{
    function lengthOfLongestSubstring(s) {
        if (s.length === 0)
            return 0;
        var left = 0;
        var max = 0;
        var map = new Map();
        for (var i = 0; i < s.length; i++) {
            if (map.has(s.charAt(i))) {
                left = Math.max(left, map.get(s.charAt(i)) + 1);
            }
            map.set(s.charAt(i), i);
            max = Math.max(max, i - left + 1);
        }
        return max;
    }
    ;
}
