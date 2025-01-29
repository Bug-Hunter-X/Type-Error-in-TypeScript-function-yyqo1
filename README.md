# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript.  The `add` function is defined to accept two numbers, but the code attempts to call it with a string and a number. TypeScript's type system catches this error, preventing unexpected behavior at runtime.

## How to reproduce:

1. Clone the repository.
2. Compile the code using `tsc bug.ts`.
3. Observe the type error reported by the compiler.