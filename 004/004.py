
numStr          = ""
reverseStr      = ""
biggestNum      = 0

minNum   = 100
maxNum   = 1000

for a in range(minNum,maxNum):
    for b in range(a,maxNum):
        numStr = str(a*b)
        reverseStr = numStr[::-1]
        biggestNum =  a*b if (numStr == reverseStr and a*b > biggestNum)  else biggestNum

print(biggestNum) #=>906609

print("sdvs"[1:3])
