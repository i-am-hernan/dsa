class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {'a', 'e', 'i', 'o', 'u'}

        def identify_vowels(s: str) -> list[str]:
            return [ch for ch in s if ch.lower() in vowels]

        result = []
        vowel_stack = identify_vowels(s)
        for ch in s:
            if ch.lower() in vowels:
                result.append(vowel_stack.pop())
            else:
                result.append(ch)
        return "".join(result)
