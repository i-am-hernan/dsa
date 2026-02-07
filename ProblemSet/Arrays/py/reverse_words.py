class Solution:
    def reverseWords(self, s: str) -> str:
        result = s.split()
        result.reverse()
        return " ".join(result)

    def reverse_words(self, s: str) -> str:
        return " ".join(s.spit(' ')[::-1])
