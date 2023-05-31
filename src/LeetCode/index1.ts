/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum1(nums: number[], target: number): number[] {
    const map: {[key: number]: number} = {};
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (complement in map) {
        return [map[complement], i];
      }
      
      map[nums[i]] = i;
    }
  
    // 問題によると、解は常に存在すると仮定されるため、この部分は実行されません。
    return [];
  }
// @lc code=end

