from string_calculator import StringCalculator

def run_tests():
    calc = StringCalculator()

    assert calc.add("") == 0

    assert calc.add("1") == 1

    assert calc.add("1,5") == 6

    assert calc.add("1,2,3,4") == 10

    assert calc.add("1\n2,3") == 6

    assert calc.add("//;\n1;2") == 3

    try:
        calc.add("1,-2")
    except ValueError as e:
        assert str(e) == "negative numbers not allowed: -2"

    try:
        calc.add("1,-2,-5,3")
    except ValueError as e:
        assert str(e) == "negative numbers not allowed: -2,-5"

    print("Success!")

if __name__ == "__main__":
    run_tests()
