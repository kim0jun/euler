startNum = 100
endNum   = 999
m        = 0;   

for i in startNum..endNum
    for k in i..endNum
        mulNum = i * k
        mulStr = "#{mulNum}"
        if mulStr == mulStr.reverse and mulNum > m
            m = mulNum
        end
    end
end


p "#{m}"# => 906609
