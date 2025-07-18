export const nthprime = (n: number) => {
    let count = 0;
    let i = 1;
    while (count < n) {
        i++;
        if (isPrime(i)) {
            count++;
        }
    }
    return i;
}

export const isPrime = (n: number) => {
    if (n < 2) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 == 0) {
        return false;
    }
    let maxDivisor = Math.sqrt(n);
    for (let i = 3; i <= maxDivisor; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}