extern "C"
{

    int isPrime(int n)
    {
        for (int i = 2; i < n; i++)
            if (n % i == 0)
                return 0;

        return (n != 1 && n != 0) ? 1 : 0;
    }

    int checkPrimes(int n)
    {
        int count = 0;

        for (int i = 0; i < n; i++)
        {
            if (isPrime(i))
                count++;
        }

        return count;
    }
}