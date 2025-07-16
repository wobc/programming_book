# Core concepts
## Variables, data types, and structures:

### Variables

A variable works like a placeholder in programming. The name of this placeholder can be chosen (almost) freely, but a rule of thumb is, **it should make sense**. Let’s say, we want to save the age of a participant of our study. Instead of just typing in the actual information, which would be for instance 25 years, we type in `participant1_age = 25`.

Our placeholder, the variable, allows us now to look at it more closely. We can run different mathematical operations:

::: code-group

```r
# The second participant was 3 years younger than this participant

participant1_age <- 25
participant2_age <- participant1_age - 3

# The 5th participant was half the age of this participant

participant5_age <- participant1_age / 2

# Or just store the value that is assigned to this variable (for example as a .txt file)
write.table(participant1_age, file = "participant1_age.txt", row.names = FALSE)

```

```python
# The second participant was 3 years younger than this participant
participant1_age = 25
participant2_age = participant1_age - 3

# The 5th participant was half the age of this participant
participant5_age = participant1_age / 2

# Or just store the value that is assigned to this variable (for example as a .txt file)
with open("participant1_age.txt", "w") as file:
    file.write(str(participant1_age))

```

```matlab
% The second participant was 3 years younger than this participant
participant1_age = 25;
participant2_age = participant1_age - 3;

% The 5th participant was half the age of this participant
participant5_age = participant1_age / 2;

% Or just store the value that is assigned to this variable (for example as a .txt file)
writematrix(participant1_age, 'participant1_age.txt', 'Delimiter', '');

```
:::

A variable can be much more than a single number or value (“integer”), it can store almost any data type: 

- string: `"twenty_five"`
- vector/lists: 
::: code-group

```r
ages <- c(25, 21, 26, 28, 34, 25, 37, 24)
```
```python
ages = [25, 21, 26, 28, 34, 25, 37, 24]
ages = np.array([25, 21, 26, 28, 34, 25, 37, 24]) # if using numpy
```
```matlab
ages = [25, 21, 26, 28, 34, 25, 37, 24];
```
:::

- cells/dictionaries:
::: code-group
```r
ages_by_group <- list(
    group1 = c(25, 21, 26, 28, 34
    group2 = c(22, 21, 38, 22, 28, 35, 21, 24),
    group3 = c(20, 23, 35, 37, 22
)
```
```python
ages_by_group = {
    "group1": [25, 21, 26, 28, 34],
    "group2": [22, 21, 38, 22, 28, 35, 21, 24],
    "group3": [20, 23, 35, 37, 22],
}
```
```matlab
ages_by_variable_groups = {[25 21 26 28 34 37 24] [22 21 38 22 28 35 21 24];[20 23 35 37 22]}
```
:::




A variable…

- is **case-sensitive**: it has to be written exactly the same way when you call it like it was created. For example, if you call your variable "age", then trying to retrieve it with “Age” would throw an error, since "Age" is not the same as "age" and therefore this variable is not defined.
::: warning Classic mistake...
A frequent mistake (not only in begginers!) is to have a long script where we create different variables with similar names (e.g. `age`, `Age`, `ages`, `Ages`). If you then try to call one of these variables, you might not remember the exact name you used, and therefore you might end up calling the wrong variable. The "funny" thing here is that the code will run without errors, but it will not do what you expect it to do. This is why it is important to **choose meaningful names** for your variables and to be consistent in how you write them.
:::

- **must start with a letter**
- **can contain letters, numbers and underscores** (underscores are a way to separate information that defines the variable more clearly, like in `ages_by_group`)  
- cannot be named in the same way as some specific words which have a function attributed to them (for, if, when, while, nan || def, class, etc. or any names of functions should also be avoided)

If you want to know all about the variables that are currently loaded in your workspace, you can type `whos` in Matlab, `dir()` in R or `globals()` in Python. If you want to know the type of your variable, you can use `class(variable_name)` in Matlab, `type(variable_name)` in Python and `typeof(variable_name)` in R. If you want to know the size of your variable, you can use `size(variable_name)` in Matlab, `len(variable_name)` in Python and `length(variable_name)` in R.

#### Data types
In programming, information can be expressed and stored in data of different types. The type of data tells the computer how to handle those data and what sort of operation can be done with those data. Types of data may vary across different programming languages, however some data types are common across languages.  
   
Common data types shared across languages are:  
 

| Type | What they are | Example | Some operation that can we do with it (not exhaustive) |
| :---- | :---- | :---- | :---- |
| Integers |  Full numbers | \-2,  0,  129 | Arithmetic; Accessing and modifying variables |
| Floating point | Number with decimals | \-9.5, 88.4 | Arithmetic |
| Boolean | Logical true or false | True, false 1, 0 | Performing logical operations (i.e. "If condition x true, then do y) |
| Characters | Letters and keyboard symbols | 'a', "n", '%' | Concatenate into strings; Print text on command window; Use to access existing filenames on your computer; Create filenames to save files; Arithmetic |
| Strings | Sequence of characters | 'qwerty', "Hello world\!" | Print text on command window; Use to access existing filenames on your computer; Create filenames to save files |

   
Different languages may have specific data types. Here are some link to documentation that explain the different data types in:  
Matlab --> [www.mathworks.com/help/matlab/data-types.html](http://www.mathworks.com/help/matlab/data-types.html)  
R --> [https://www.programiz.com/r/data-types](https://www.programiz.com/r/data-types)  
Python --> [https://www.datacamp.com/blog/python-data-types](https://www.datacamp.com/blog/python-data-types)

::: warning Remember!
If you are unsure what data type you are handling at any point, languages offer ways of finding out the data type of your variable.

::: code-group

```r
class(variable_name)
```
```python
type(variable_name)
```
```matlab
class(variable_name)
```

:::

## Control flow

### Loops & conditionals

When programming, you will make use of loops and conditionals to make your scripts more efficient.  
If you’re working in the field of cognitive neuroscience, you will most of the time have data of a group of participants and you want to apply the same analysis to each subject. In Matlab, an ‘end’ is mandatory to close a loop or conditional, in Python this is optional but instead, correct indentation is mandatory.

**‘for’ loop**  
This loop allows you to automate your scripts. For instance. instead of every time changing the name of the subject to load the appropriate file manually, you can automate this and save a lot of time and errors. 

“*For **every participant**, subtract 2 from the initial value*”

::: code-group

```r
subject_number <- c(10, 12, 8, 15, 9)
subject_number_corrected <- numeric(length(subject_number))

for (i in 1:length(subject_number)) {
    subject_number_corrected[i] <- subject_number[i] - 2
}
```
```python
subject_number = [10, 12, 8, 15, 9]
subject_number_corrected = []
for i in range(len(subject_number)):
    subject_number_corrected.append(subject_number[i] - 2)
```
```matlab
subject_number = [10, 12, 8, 15, 9];
subject_number_corrected = zeros(1, length(subject_number));
for i = 1:length(subject_number)
    subject_number_corrected(i) = subject_number(i) - 2;
end
```
:::
   

**Conditionals**:

_**`if`**_ makes sure that only when specific criteria are met, code will be executed.

“*For every participant who is **part of the attention group, subtract 2** from the initial value. For every participant of the **no attention group, add 2** to the initial value. For **all other participants, don’t do anything**.*”

::: code-group

```r
group <- c("attention", "no_attention", "other", "attention", "no_attention")
subject_number <- c(10, 12, 8, 15, 9)
subject_number_corrected <- numeric(length(subject_number))

for (i in 1:length(subject_number)) {
    if (group[i] == "attention") {
        subject_number_corrected[i] <- subject_number[i] - 2
    } else if (group[i] == "no_attention") {
        subject_number_corrected[i] <- subject_number[i] + 2
    } else {
        subject_number_corrected[i] <- subject_number[i]
    }
}
```
```python
group = ["attention", "no_attention", "other", "attention", "no_attention"]
subject_number = [10, 12, 8, 15, 9]
subject_number_corrected = []
for i in range(len(subject_number)):
    if group[i] == "attention":
        subject_number_corrected.append(subject_number[i] - 2)
    elif group[i] == "no_attention":
        subject_number_corrected.append(subject_number[i] + 2)
    else:
        subject_number_corrected.append(subject_number[i])
```
```matlab
group = {'attention', 'no_attention', 'other', 'attention', 'no_attention'};
subject_number = [10, 12, 8, 15, 9];
subject_number_corrected = zeros(1, length(subject_number));
for i = 1:length(subject_number)
    if strcmp(group{i}, 'attention')
        subject_number_corrected(i) = subject_number(i) - 2;
    elseif strcmp(group{i}, 'no_attention')
        subject_number_corrected(i) = subject_number(i) + 2;
    else
        subject_number_corrected(i) = subject_number(i);
    end
end
```
:::


_**`while`**_ will execute some code as long as a specific criteria is still met, this criteria however changes with iterations or time (if not, you’ll be caught in an infinite loop).

"*While the **participant number is smaller than 3**, subtract 2 from the initial value. If the participant number is **greater than or equal to 3**, stop the loop and leave the rest of the values unchanged.*"

::: code-group

```r
subject_number <- c(2, 1, 4, 5)
subject_number_corrected <- subject_number

i <- 1
while (i <= length(subject_number) && subject_number[i] < 3) {
    subject_number_corrected[i] <- subject_number[i] - 2
    i <- i + 1
}
```
```python
subject_number = [2, 1, 4, 5]
subject_number_corrected = subject_number.copy()
i = 0
while i < len(subject_number) and subject_number[i] < 3:
    subject_number_corrected[i] = subject_number[i] - 2
    i += 1
```
```matlab
subject_number = [2, 1, 4, 5];
subject_number_corrected = subject_number;
i = 1;
while i <= length(subject_number) && subject_number(i) < 3
    subject_number_corrected(i) = subject_number(i) - 2;
    i = i + 1;
end
```
:::

## Functions

Functions are blocks of code that perform a specific task. They are useful because they allow you to carry out simple or complex operations in just a few lines of code, without having to write every small step manually. Most programming languages include many built-in functions, but you can also create your own custom functions to perform tasks specific to your data handling or analysis needs.

A function usually takes *inputs* (also called arguments), performs some operations on them (defined in its *body*), and then gives you back an *output* (or result). Each function has a name, which usually describes what it does.

Let’s look at an example of a function that is common in all programming languages: calculating the *mean* (or average) of a list of numbers.  

::: code-group

```r
participants_age <- c(23, 55, 43, 19, 29)
average_age <- mean(participants_age)
```
```python
participants_age = [23, 55, 43, 19, 29]
# you can use the numpy library
import numpy as np
average_age = np.mean(participants_age)
```
```matlab
participants_age = [23, 55, 43, 19, 29];
average_age = mean(participants_age);
```
:::

In all these examples, the function `mean` (or `np.mean)` takes a list of numbers as input and returns the average as output.

You can also **create** your own custom function. To do this, most programming languages use a special keyword to tell the computer that you’re defining a new function. Inside the function (in the body of the function), you can write all the steps and operations you want the computer to perform. You can even use functions inside other functions: this is called *nesting* functions\!  
You can give your function any name, but it’s a good idea to choose a name that clearly describes what the function does. This helps make your code easier to read and understand.  
Below are some examples of simple custom functions to show you how it works in different programming languages. Let's say that we have a vector with reaction times in milliseconds. We want to create a custom function called `clean_average_reaction_time` that  
 
1. Removes 100ms to all reaction times  
2. Calculate the average of the reaction times  
3. Return the result

::: code-group

```r
clean_average_reaction_time <- function(reaction_times) {
    cleaned_times <- reaction_times - 100
    average_time <- mean(cleaned_times)
    return(average_time)
}
reaction_times <- c(250, 300, 400, 500)
average_reaction_time <- clean_average_reaction_time(reaction_times)
```
```python
def clean_average_reaction_time(reaction_times):
    cleaned_times = [rt - 100 for rt in reaction_times]
    average_time = sum(cleaned_times) / len(cleaned_times)
    return average_time
reaction_times = [250, 300, 400, 500]
average_reaction_time = clean_average_reaction_time(reaction_times)
```
```matlab
function average_time = clean_average_reaction_time(reaction_times)
    cleaned_times = reaction_times - 100;
    average_time = mean(cleaned_times);
end
reaction_times = [250, 300, 400, 500];
average_reaction_time = clean_average_reaction_time(reaction_times);
```
::: 

## Data handling

### Loading, cleaning and saving data

When you’re working on data of several participants, or one participant but several trials or recording blocks, you want to make sure that you load the right data to begin with. Cleaning or clearing variables is thereby as important as saving them.  

**Loading data:**  
Depending on the file format, you will need to use specific functions to load the data. This is not a complete list but just the way to load common file formats.  

**Matlab**:

* .mat files: Files, that have been save within Matlab --> `load(‘filename.mat’);`  
* .xls/xlsx files: Excel files; this requires Excel or compatible libraries --> `data = xlsread(‘filename.xlsx’);`
* .png files: Images (also .jpg or other formats) --> `img = imread(‘filename.png’); imshow(img);`

**Python**:

* .py files: Files, that have been created using Python --> 
```python
with open('my\_script.py') as f:
    exec(f.read())
```
* .xls/xlsx files: Excel files; this requires Excel or compatible libraries -->
```python
import pandas as pd
data = pd.read_excel(‘filename.xlsx’)
```  
* .png files: Images (also .jpg or other formats) --> 
```python
from matplotlib import pyplot as plt
import matplotlib.image as mpimg
img = mpimg.imread('filename.png')
plt.imshow(img)
```

**Cleaning data:**  
When you’re analysing data of several participants and you do this in a loop, you want to make sure to not use the values that were assigned to a variable for `participant_1` for `participant_2`. To avoid this, clear specific variables at the end of a loop and before running any new code. For instance:
- in **Matlab** you can use the command `clear variable_name` to clear a specific variable, or `clear all` to clear all variables.
- in **Python**, you can use the command `del variable_name` to delete a specific variable.
- in **R**, you can use the command `rm(variable_name)` to remove a specific variable, or `rm(list = ls())` to remove all variables.
