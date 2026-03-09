from collections.abc import Iterable


class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:

        def iterableToMap(values: Iterable):
            result = {}
            for val in values:
                result[val] = result.get(val, 0) + 1
            return result

        word1Map = iterableToMap(word1)
        word2Map = iterableToMap(word2)

        if word1Map.keys() != word2Map.keys():
            return False

        word1valuesMap = iterableToMap(word1Map.values())
        word2valuesMap = iterableToMap(word2Map.values())

        return word1valuesMap == word2valuesMap
