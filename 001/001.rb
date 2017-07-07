sum = 0
for i in 0...1000
     sum += (i%3 == 0 || i%5 == 0)? i:0
end
puts sum # => 233168


# other solution

# 합의 공식을 이용하여 해결

def sumOfRange(distance,range)
    length = (range/distance).floor();
    length*(length+1)/2*distance
end

puts sumOfRange(3,999) + sumOfRange(5,999) - sumOfRange(15,999) # => 233168