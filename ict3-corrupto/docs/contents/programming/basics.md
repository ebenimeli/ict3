## Creating an Application: The Basics

### What is Python?
Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used for web development, data science, artificial intelligence, automation, and more.

### Basic Syntax
- Python uses indentation to define blocks of code (no curly braces or semicolons).
- Comments start with the `#` symbol.

### Variables and Data Types
- Variables are containers for storing data. They don't need explicit declarations.
- Common data types include integers, floats, strings, lists, tuples, and dictionaries.

```python
t1 = 6.0
t2 = 4.0
```

### Functions
- Functions are reusable blocks of code defined using the `def` keyword.
- Parameters are passed inside parentheses.

```python
def getAverage(x1, x2):
    x = (x1 + x2) / 2
    return x
```

### Conditional Statements
- `if`, `elif`, and `else` are used for decision-making.
- Python relies on indentation to denote code blocks.

```python
def getTextGrade(ngrade):
    text = ""
    if ngrade >= 7.5:
        text = "Very good"
    elif 5 <= ngrade < 7.5:
        text = "Good"
    else:
        text = "Fail"
    return text
```

### Round Numbers
- The `round()` function is used to round numerical values.

```python
average = round(average, 2)
```

### Printing
- The `print()` function is used to display output.

```python
print("Final grade: " + str(average) + " (" + text_average + ")")
```


These fundamentals cover the basics needed to understand and write a Python application. Further exploration of Python will enhance your ability to create more complex and powerful applications.