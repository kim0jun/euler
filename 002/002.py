currentFibo = 2
previousFibo = 1
temp = 0
sumOfPibo = 0


while currentFibo<4000000 :
    sumOfPibo += currentFibo if (currentFibo % 2 == 0) else 0
    temp = currentFibo
    currentFibo = previousFibo + currentFibo
    previousFibo = temp

print(sumOfPibo) # =>4613732 
