#https://leetcode.com/problems/largest-rectangle-in-histogram/



class Solution:
    def largestRectangleArea(self, list: List[int]) -> int:
        stack = []
        result = 0
        i = 0
        list.append(0)
        while ( i < len(list)) :
            if (len(stack) == 0 or list[stack[len(stack)-1]] < list[i]):
                stack.append(i)
                i += 1
            else :
                height = list[stack.pop()]
                if (len(stack)-1 >= 0):
                    left = stack[len(stack)-1]
                else:
                    left = -1
                width = i - left- 1
                result = max(result, height * width)
                

        return (result)
