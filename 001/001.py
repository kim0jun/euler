# 10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.

# 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?

import math

sum = 0
for i in range(3,1000):
    sum += i if (i%3 == 0 or i%5 == 0) else 0
print(sum) # => 233168


# other solution

# 합의 공식을 이용하여 해결

def sumOfRange(distance,range):
    length = math.floor(range/distance)
    return length*(length+1)/2*distance

print(sumOfRange(3,999)+sumOfRange(5,999)-sumOfRange(15,999)) # => 233168.0

