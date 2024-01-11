# Exercises

## Combining strings using concatenation

Create two string variables, 'greeting' and 'name', and concatenate them to print a personalized greeting.

<details><summary>Code</summary>
``` py
greeting = "Hello, "
name = "world!"
print(greeting + name)
```
</details>
---

Declare two more string variables, 'first_name' and 'last_name', and concatenate them to print the full name.
<details><summary>Code</summary>
``` py
first_name = "John"
last_name = "Doe"
print("Full Name: " + first_name + " " + last_name)
```
</details>
---

## Arithmetic expressions in Python

Calculate and print the result of the expression: x = 10 + 5 * 2

<details><summary>Code</summary>
``` py
x = 10 + 5 * 2
print("Result of x:", x)
```
</details>
---

Create a new variable 'y' and assign the result of the expression: y = 3 ** 2

<details><summary>Code</summary>
``` py
y = 3 ** 2
print("Result of y:", y)
```
</details>
---

## Exponentiation in Python

Calculate and print the result of 2 raised to the power of 4 using the exponentiation operator.

<details><summary>Code</summary>
``` py
result = 2 ** 4
print("2 to the power of 4:", result)
```
</details>
---

## Modulo operator in Python

Calculate and print the remainder when 15 is divided by 4 using the modulo operator.

<details><summary>Code</summary>
``` py
x = 15 % 4
print("Remainder:", x)
```
</details>
---

## Augmented assignment in Python

Initialize variables x and y with some values.

<details><summary>Code</summary>
``` py
x = 5
y = 3
```
</details>
---

Use augmented assignment to add y to x and print the result.

<details><summary>Code</summary>
``` py
x += y
print("Result of x += y:", x)
```
</details>
---

## Comments in Python

Add comments to the following code explaining the purpose of each line.

<details><summary>Code</summary>
``` py
# Calculate the sum of two numbers
num1 = 10
num2 = 20
sum_result = num1 + num2
```
</details>
---

Print the result
<details><summary>Code</summary>
``` py
print("Sum:", sum_result)
```
</details>
---

## Understanding data types - int vs float

Declare an integer variable 'integer_var' and a float variable 'float_var'.

<details><summary>Code</summary>
``` py
integer_var = 5
float_var = 3.14
```
</details>
---

Print the data type of each variable.

<details><summary>Code</summary>
``` py
print("Type of integer_var:", type(integer_var))
print("Type of float_var:", type(float_var))
```
</details>
---

## Multi-line string in Python

Create a multi-line string containing your address.

<details><summary>Code</summary>
``` py
address = """123 Main Street
Cityville, USA
Zip: 12345"""
```
</details>
---

Print the multi-line string.

<details><summary>Code</summary>
``` py
print(address)
```
</details>
---

## Booleans in Python

Declare boolean variables indicating weather conditions.

<details><summary>Code</summary>
``` py
is_sunny = True
is_raining = False
```
</details>
---

Print the values of the boolean variables.

<details><summary>Code</summary>
``` py
print("Is it sunny?", is_sunny)
print("Is it raining?", is_raining)
```
</details>
---

## Type error in Python

Fix the type error in the following statement and print the corrected string.

``` py
f1 = 0.25
f2 = 40.0
p = f1 * f2
bs = "The price is " + p
print(bs)
```

<details><summary>Code</summary>
``` py
f1 = 0.25
f2 = 40.0
p = f1 * f2
bs = "The price is " + str(p)
print(bs)
```
</details>
---

## For loop with countries

Create a list of countries: Spain, France and Germany.

<details><summary>Code</summary>
``` py
countries = ["Spain", "France", "Germany"]
```
</details>
---

Use a for loop to print a message for each country.

<details><summary>Code</summary>
``` py
for country in countries:
    print("The country is " + country)
```
</details>
---

## For loop with numbers

Create a list of numbers: [1, 2, 3].

<details><summary>Code</summary>
``` py
numbers = [1, 2, 3]
```
</details>
---

Use a for loop to calculate the product of all numbers and print the result.

<details><summary>Code</summary>
``` py
total = 1
for num in numbers:
    total *= num

print("Product of numbers:", total)
```
</details>
---

## Return statements in Python

Define a function 'calculate_sum' that takes two parameters and returns their sum.

<details><summary>Code</summary>
``` py
def calculate_sum(a, b):
    return a + b
```
</details>
---

Use the function to calculate and print the sum of 7 and 3.

<details><summary>Code</summary>
``` py
result = calculate_sum(7, 3)
print("The sum is:", result)
```
</details>
---

Create a function 'is_positive' that takes a number as a parameter and returns True if it's positive, False otherwise.

<details><summary>Code</summary>
``` py
def is_positive(number):
    return number > 0
```
</details>
---

Test the 'is_positive' function with both positive and negative numbers and print the results.

<details><summary>Code</summary>
``` py
print(is_positive(5))  # Should print True
print(is_positive(-2))  # Should print False
```
</details>
---

## Defining a square function and calling it

Define a function 'square' that takes a number as a parameter and returns its square.

<details><summary>Code</summary>
``` py
def square(num):
    return num * num
```
</details>
---

Use the 'square' function to calculate and print the square of 8.

<details><summary>Code</summary>
``` py
result = square(8)
print("The square is:", result)
```
</details>
---

Create a function 'calculate_area' that calculates the area of a square given its side length. Use the 'square' function to find the area of a square with side length 5.

<details><summary>Code</summary>
``` py
def calculate_area(side_length):
    return square(side_length)

area = calculate_area(5)
print("The area of the square is:", area)
```
</details>
---

## Using a for loop

Write a program that uses a for loop to print the numbers from 1 to 5.

<details><summary>Code</summary>
``` py
for i in range(1, 6):
    print(i)
```
</details>
---

## Comparison operators in Python

Create a function 'compare_numbers' that takes two numbers as parameters and prints a message indicating which number is greater or if they are equal.

<details><summary>Code</summary>
``` py
def compare_numbers(x, y):
    if x > y:
        print(f"{x} is greater than {y}.")
    elif x < y:
        print(f"{x} is less than {y}.")
    else:
        print(f"{x} is equal to {y}.")
```
</details>
---

Test the 'compare_numbers' function with different pairs of numbers.

<details><summary>Code</summary>
``` py
compare_numbers(7, 3)
compare_numbers(5, 8)
compare_numbers(4, 4)
```
</details>
---