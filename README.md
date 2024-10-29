The below is the problem statement which is given by Catalog IT Solutions as a part of placement drive...

## Problem Statement

Consider an unknown polynomial of degree \( m \). To solve for its coefficients, you require \( m + 1 \) roots of the polynomial, represented as \( k = m + 1 \).

An unknown polynomial of degree \( m \) can be expressed as:

\[ f(x) = a_m x^m + a_{m-1} x^{m-1} + ... + a_1 x + c \]

Where:
- \( f(x) \) is the polynomial function.
- \( m \) is the degree of the polynomial.
- \( a_m, a_{m-1}, ..., a_1, c \) are coefficients (real numbers).
- \( a_m \neq 0 \) ensures that the polynomial is of degree \( m \).

The goal is to find the constant term \( c \) of the polynomial using the given roots, provided in a specific JSON format.

## Test Cases

### Test Case 1

```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Test Case 2

```json
{
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d63"
    },
    "3": {
        "base": "15",
        "value": "6aeeb69631c227c"
    },
    "4": {
        "base": "16",
        "value": "e1b5e05623d881f"
    },
    "5": {
        "base": "8",
        "value": "316034514573652620673"
    },
    "6": {
        "base": "3",
        "value": "2122212201122002221120200210011020220200"
    },
    "7": {
        "base": "3",
        "value": "20120221122211000100210021102001201112121"
    },
    "8": {
        "base": "6",
        "value": "20220554335330240002224253"
    },
    "9": {
        "base": "12",
        "value": "45153788322a1255483"
    },
    "10": {
        "base": "7",
        "value": "1101613130313526312514143"
    }
}
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/secret-sharing-finder.git
   cd secret-sharing-finder
   ```

2. Install any dependencies (none required for this code to run directly).

### JSON Input Format

Each input file (e.g., `testcase1.json`, `testcase2.json`) must contain:

- `"keys"`: Specifies `n` (total points) and `k` (minimum points needed).
- Each point represented by:
  - `"base"`: Base of the value (e.g., binary, octal, etc.).
  - `"value"`: The value at the point, given in the specified base.

## Code Explanation

- **convertToDecimal(value, base)**: Converts a given value from its specified base to decimal.
- **lagrangeInterpolation(points)**: Uses Lagrange Interpolation to calculate the constant term of the polynomial.
- **parseInput(data)**: Parses the input JSON data and converts points to decimal form.
- **findConstantTerm(data)**: Validates input points and calculates the constant term using Lagrange Interpolation.
- **calculateFromFile(filename)**: Reads a JSON file, calculates the constant term, and prints the result.

## Running the Code

To execute the code and calculate the secrets:

1. Make sure the JSON files (e.g., `testcase1.json`, `testcase2.json`) are present in the project directory.

2. Run the following command:
   ```bash
   node index.js
   ```

The output will display the constant term (or "secret") for each test case.

### Example Output

```
The Secret for testcase1.json is: 4
The Secret for testcase2.json is: 79836263940096
```

## License

This project is open-source and available under the MIT License.

---

Feel free to modify the repository link and any other parts as necessary to fit your project!
