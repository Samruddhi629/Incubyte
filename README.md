# String Calculator

This project is a small exercise called **String Calculator Kata**.
It is used to practice **Test-Driven Development (TDD)**.

## What it does

* Takes a string of numbers and returns their sum.
* Numbers can be separated by:

  * Comma (`,`)
  * New line (`\n`)
  * A custom delimiter (example: `"//;\n1;2"` uses `;` as delimiter).
* Empty string returns `0`.
* Negative numbers are not allowed. If they appear, the program raises an error and shows them.

## Examples

Input → Output

""        → 0
"1"       → 1
"1,5"     → 6
"1,2,3"   → 6
"1\n2,3"  → 6
"//;\n1;2" → 3
"1,-2"    → error: negative numbers not allowed: -2

# How to Run
1. Put the code in `string_calculator.py`.
2. Run the tests with:
python test_string_calculator.py

If everything is correct, it will show:

Success!
