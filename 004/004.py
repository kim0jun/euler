startNum = 100
endNum   = 999
m        = 0;   

for i in range(startNum, endNum): 
    for k in range(i,endNum):
        mulNum = i * k
        mulStr = str(mulNum)
        if mulStr == ''.join(reversed(mulStr)) and mulNum > m:
            m = mulNum


print(m) # => 906609
