/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
const longestCommonPrefix14 = (strs: string[]): string => {
    // strs配列に何もない時はreturn
    if(strs.length == 0) return ""

// strs = ["flower", "flow", "flight"]の時
//f, l, o, wと見ていく
    for(let i = 0; i < strs[0].length; i++){
        // 一致しなくなったらその前の文字で返す。
        if(strs.every(item => item[i] !== strs[0][i])){
            return strs[0].at(-1)
        }
    }

    return strs[0]
};

// @lc code=end

