#include <stdio.h>
#include <string.h>

int main()
{
    printf("WASM Ready!\n");
    return 1;
}

int getNum()
{
    return 22;
}

int getDouleNum(int n)
{
    return n * 2;
}

char *greet(char *name)
{
    return strcat("Hello ", name);
}

void play(int n)
{
    for (size_t i = 0; i < n; n--)
    {
        printf("%d\n", n);
    }
}