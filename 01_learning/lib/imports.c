#include <emscripten.h>
#include <stdio.h>

// Declare reusable JS function
EM_JS(void, jsFunction, (int n), {
    console.log("Call from EM_JS: " + n);
})

int main()
{
    printf("WASM Ready!\n");

    // Call JS function (eval)
    emscripten_run_script("console.log('Hello from C!')");
    int jsVal = emscripten_run_script_int("getNum()");
    char *jsValStr = emscripten_run_script_string("getString()");

    printf("Val from getNum(): %d\n", jsVal);
    printf("Val from getString(): %s\n", jsValStr);

    // Call JS function (eval)
    emscripten_async_run_script("alert('Hello from C! - ASYNC!')", 1500);

    // Execute EM_JS fn
    jsFunction(123);

    return 1;
}
