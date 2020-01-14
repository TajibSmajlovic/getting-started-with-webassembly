#include <emscripten.h>
#include <stdio.h>

char *str = "SOMETHING SOMETHING!";

char *getStr()
{
    return str;
}

int getNum()
{
    int num = 22;

    if (num < 30)
    {
        emscripten_log(EM_LOG_WARN, "KomPAJLIRAJ!");
    }

    // Debugger breakpoint
    emscripten_debugger();

    return num;
}

int main()
{
    printf("WASM Ready!\n");

    return 1;
}
