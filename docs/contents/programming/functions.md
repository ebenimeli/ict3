# Functions in Python: Basic Concepts

## Introduction

In Python, functions are like little helpers that perform specific tasks. They make code organized and reusable. Let's explore two types of functions: those without parameters and those with two parameters. We'll also cover functions with and without a return value.

## Functions Without Parameters

```python
def say_hello():
    """This function prints a simple greeting."""
    print("Hello, world!")

# Function Call
say_hello()
```

- `def say_hello():`: Declares a function named `say_hello` without parameters.
- `print("Hello, world!")`: Code inside the function that prints a greeting.

## Functions with Two Parameters

```python
def add_numbers(x, y):
    """This function adds two numbers and prints the result."""
    result = x + y
    print("Sum:", result)

# Function Call
add_numbers(5, 3)
```

- `def add_numbers(x, y):`: Declares a function named `add_numbers` with two parameters (`x` and `y`).
- `result = x + y`: Performs addition inside the function.
- `print("Sum:", result)`: Prints the result.

## Functions with Return Value

```python
def multiply_numbers(a, b):
    """This function multiplies two numbers and returns the result."""
    result = a * b
    return result

# Function Call
product = multiply_numbers(4, 7)
print("Product:", product)
```

- `def multiply_numbers(a, b):`: Declares a function named `multiply_numbers` with two parameters.
- `return result`: Returns the multiplication result.
- `product = multiply_numbers(4, 7)`: Calls the function and assigns the result to `product`.
- `print("Product:", product)`: Prints the product.

## Functions Without Return Value

```python
def greet_user():
    """This function greets the user without returning a value."""
    print("Hey there! Welcome!")

# Function Call
greet_user()
```

- `def greet_user():`: Declares a function named `greet_user` without a return value.
- `print("Hey there! Welcome!")`: Prints a friendly greeting.

## More examples

### Example 1: Greeting Function

```python
def greet_user():
    """This function greets the user without returning a value."""
    print("Hey there! Welcome!")

# Function Call
greet_user()
```

- **Explanation:** This function says a friendly greeting.
- **Example Message:** "Hey there! Welcome!"

### Example 2: Calculator Function

```python
def multiply_numbers(a, b):
    """This function multiplies two numbers and returns the result."""
    result = a * b
    return result

# Function Call
product = multiply_numbers(4, 7)
print("Product:", product)
```

- **Explanation:** This function multiplies two numbers.
- **Example Message:** "Product: 28"

These basic functions help keep code organized and are easy to understand. Functions without parameters perform specific actions, while functions with parameters allow customization. Functions with return values provide results that can be used in other parts of the code.