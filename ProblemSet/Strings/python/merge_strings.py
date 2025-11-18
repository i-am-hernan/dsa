class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        if not isinstance(word1,str) or not word1:
            raise TypeError("word1 must be a non-empty string")

        if not isinstance(word2, str) or not word2:
            raise TypeError("word2 must be a non-empty string")
        wordsCombined = ''
        minimumLength = min(len(word1), len(word2))

        for i in range(minimumLength):
            wordsCombined = wordsCombined + word1[i] + word2[i]

        if len(word1) > minimumLength:
            wordsCombined += word1[minimumLength:]
        if len(word2) > minimumLength:
            wordsCombined += word2[minimumLength:]

        return wordsCombined
