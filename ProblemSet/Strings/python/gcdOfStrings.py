class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:

        def isDivisor(subword: str, word: str) -> bool:
            if len(word) % len(subword) != 0:
                return False
            divisor = ''
            denomonitor = len(word) // len(subword)
            for i in range(denomonitor):
                divisor += subword
            if divisor == word:
                return True
            return False

        def findDivisors(word: str) -> set[str]:
            subString: str = ''
            divisors: set = set()
            for i in range(len(word)):
                subString += word[i]
                if isDivisor(subString, word):
                    divisors.add(subString)
            return divisors

        str1Divisors: set[str] = findDivisors(str1)
        str2Divisors: set[str] = findDivisors(str2)
        greatestCommonDivisors: str = ''
        for divisor in str1Divisors:
            if divisor in str2Divisors and len(divisor) > len(greatestCommonDivisors):
                greatestCommonDivisors = divisor
        return greatestCommonDivisors
