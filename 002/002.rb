currentFibo = 2
previousFibo = 1
temp = 0
sumOfPibo = 0


while currentFibo<4000000 do
    sumOfPibo +=  currentFibo % 2 == 0? currentFibo:0
    temp = currentFibo
    currentFibo = previousFibo + currentFibo
    previousFibo = temp
end

p sumOfPibo # =>4613732 
