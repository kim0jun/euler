numStr      = ""
reverseStr  = ""
mostNum     = 0
startNum    = 100
endNum      = 1000

for i in startNum...endNum
    for j in i...endNum
        numStr     = (i*j).to_s
        reverseStr = numStr.reverse
        mostNum    = (numStr != reverseStr || mostNum > i*j)?mostNum:i*j
    end
end
p mostNum #=>906609