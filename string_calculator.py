class StringCalculator:
    def add(self, string: str) -> int:
        string = self._normalize_delimiters(string)
        if string:
            return self._add_numbers_in_string(string)
        else:
            return 0

    def _normalize_delimiters(self, string: str) -> str:
        string = self._normalize_custom_delimiter(string)
        string = string.replace('\n', ',')
        return string

    def _normalize_custom_delimiter(self, string: str) -> str:
        if string.startswith('//'):
            delimiter_spec, string = string.split('\n', 1)
            delimiter = delimiter_spec[2:]
            string = string.replace(delimiter, ',')
        return string

    def _add_numbers_in_string(self, string: str) -> int:
        numbers = [int(x) for x in string.split(',') if x.strip()]
        self._validate_numbers(numbers)
        return sum(numbers)

    def _validate_numbers(self, numbers: list[int]) -> None:
        negatives = [n for n in numbers if n < 0]
        if negatives:
            raise ValueError(f"negative numbers not allowed: {','.join(map(str, negatives))}")
