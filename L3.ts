{
    function lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) return 0;
        let left = 0;
        let max = 0;
        let map: Map<string, number> = new Map();
        for (let i = 0; i < s.length; i ++) {
            if (map.has(s.charAt(i))) {
                left = Math.max(left, map.get(s.charAt(i)) + 1);
            }
            map.set(s.charAt(i), i);
            max = Math.max(max, i - left + 1);
        }
        return max;
    };
}