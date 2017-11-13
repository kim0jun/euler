n = 600851475143
m = 0
i = 2
while(n>1)
    if(n%i == 0)
        n /= i
        m = i
    else
        i += 1
    end
end
p m #=>6857;