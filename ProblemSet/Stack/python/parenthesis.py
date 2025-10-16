class Solution:
    def isValid(self, s: str) -> bool:
        BRACKETS = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        currBrackets = []

        for char in s:
            if (char in BRACKETS):
                currBrackets.append(BRACKETS[char])
            elif not currBrackets or currBrackets.pop() != char:
                return False

        return len(currBrackets) == 0
