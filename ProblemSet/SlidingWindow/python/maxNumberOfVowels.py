class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}
        count = 0

        for letter in s[:k]:
            if letter in vowels:
                count += 1

        result = count

        if result == k:
            return result

        for i in range(k, len(s)):
            count += int(s[i] in vowels)
            count -= int(s[i-k] in vowels)
            result = max(result, count)

        return result
