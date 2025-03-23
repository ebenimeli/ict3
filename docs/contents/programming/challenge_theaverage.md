# Programming Challenge: The Average

<img class="header" src="images/coding.jpg"/>

In this challenge, the student will complete a Python program that calculates the average of four grades and converts the numeric average to a text grade. The challenge is divided into several steps that require defining functions and using them to process grades.


## Instructions

**Function Definitions:**

* **getAverage**: This function will take four numeric inputs (representing grades) and calculate their average. The student needs to complete the function.
* **getTextGrade**: This function will convert a numeric grade to a corresponding text grade. The student should define logic to return: "Fail" for grades between 0 and 5 (not included), "Good" for grades between 5 and 7.5 (not included), or "Very Good" for grades 7.5 and above

**Assign Values to Variables:**

The student will assign values to the four grade variables (t1, t2, t3, t4).

**Calculate the Average:**

Use the getAverage function to calculate the average of the four grades.

**Round the Average:**

The student must round the average to two decimal places using the round() function.

**Determine the Text Grade:**

The student will use the getTextGrade function to convert the numeric average into a text grade.

**Print the Final Grade:**

Finally, the student will print the final result, displaying both the numeric average and the corresponding text grade.

## The Code

```python
# Filename: get_average_template.py
# Author: Write here your name
# Date: Write here the current date

# IMPORTANT: Please read the instructions in the comments

# COMPLETE: define a function that calculates the average of 4 numbers: x1, x2, x3, and x4
def getAverage( ? ):
    # here your code

# COMPLETE: define a function that converts a grade from number (ngrade) to text (tgrade)
# (i.e.: 7.4 --> NT)
# 0 <= num < 5 --> Fail
# 5 <= num < 7.5 --> Good
# 7.5 <= num     --> Very good
def getTextGrade( ? ):
    # here your code

# COMPLETE: assign values to the variables
t1 = 
t2 = 
t3 = 
t4 = 

# COMPLETE: Use a function get the average of those 4 grades t1,t2,t3 and t4
average = 

# This line rounds the average with 2 decimals
average = round(average,2)

# COMPLETE: Use a function toget the text grade from the numeric average
text_average = 

# COMPLETE: print the final grade. Example: Final grade: 8.03 (Very Good)
print("Final grade: " + str(average) + " (" + text_average + ")")
```