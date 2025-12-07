class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        altitude = 0
        maxaltitude = 0
        for i in gain:
            altitude += i
            maxaltitude = max(altitude, maxaltitude)
        return maxaltitude
