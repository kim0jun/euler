num = 600851475143
maxPrimer = 0
primer = 2

while num != 1
    if num % primer == 0
        maxPrimer = primer
        num /= primer
    else
        primer += 1
    end
end

p maxPrimer # => 6857
