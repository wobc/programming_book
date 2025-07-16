# Good practices

## Debugging and troubleshooting:

One of the most fundamental (and underrated) skills in research programming is learning how to identify and fix errors, best known as *debugging*. Whether you’re designing experiments, modeling behavior, or analyzing neuroimaging data, your code will fail at some point. And that’s ok. In fact, it’s not just ok, it’s part of the learning process.

As a beginner, it’s easy to assume that if something doesn’t work, it’s because you’re just bad at coding, but here’s the “*secret*”: even the most experienced coders spend a good portion of their time fixing things that don’t work. Debugging is not a sign of failure, it’s where real learning happens. Here you have some tips to remember when at coding:

> **1. Errors  aren’t the enemy, they are part of the journey**

It might sound strange or even contradictory, but errors give you a valuable opportunity to check and truly understand what your code is doing. When a script runs perfectly on the first try, that is not only rare but should actually be a warning sign. You need to make sure your code is doing what it is supposed to do, because sometimes it runs without crashing but does not produce the results you expect. That can lead to subtle and misleading errors.

So if something breaks, take it as a good sign. It is a chance to understand your code more deeply, become more aware of how it works, and make sure it is doing exactly what it should. The sooner you start seeing errors as helpful clues rather than obstacles, the faster you will improve. In fact, getting stuck and figuring out how to move forward is what programming is all about.

> **2. The computer is never wrong**

This can be both comforting and frustrating. Your code might not be doing what you want, but it is doing exactly what you told it to do. Sometimes you might think that the lines you wrote are exactly what your code needs in order to achieve the desired outcome, but you may need to express it differently, using another function, a different variable, or a new structure. Instead of blaming the computer, take a step back and ask yourself what instructions you actually gave it.

> **3. Errors vs. warnings**

Not every message your code gives you is equally serious. Some will stop everything immediately, while others are just friendly alerts. While the general idea of errors and warnings is similar across languages, the way they behave can vary slightly between environments (see table XX). 

|  | MATLAB | Python | R |
| :---- | :---- | :---- | :---- |
| **Errors stop execution?** | Yes | Yes | Usually |
| **Warnings stop execution?** | No | No | No |
| **Can it be detected?** | `try` `catch` | `try` `except`, `warnings` | `tryCatch`, `suppressWarnings()` |
| **Can it be suppressed?** | `warning off` | `warnings.filterwarnings` | `suppressWarnings()` |

In short, we can distinguish them because errors stop your code (they demand immediate attention) while warnings allow the code to run, but suggest that something might not be working as intended. Understanding the distinction is key to becoming a better debugger. It will also help you feel less intimidated when the screen lights up with red text. Sometimes it's just a friendly nudge saying: *are you sure you meant to do that?*. But please, do not underestimate warnings because they allow you to run your code. They are there to alert you to potential issues and can save you from much bigger problems later (it’s like driving with a low fuel light on).

### Classic errors (not only for beginners)

We all make errors when coding, and the most common ones are often the most absurd and easiest to fix, even though they can sometimes take a while to spot. Forgetting a parenthesis, writing pritn() instead of print(), using a variable before it is defined, or mixing up data types. These mistakes are as frustrating as they are common, and when you finally catch them and fix them, you get that very specific feeling of human foolishness.

Again, they are not a reflection of your intelligence, but simply part of the process. Do not assume that the computer is wrong. Go through your code slowly, use the tools that programming languages offer to highlight possible issues, and look carefully at the variables or functions that are causing the error. All languages will point you to the line where the error occurred, although some are more informative than others.

#### Read and interpret error messages carefully
One of the most valuable habits you can build as a beginner is to read error messages carefully. Seriously. Even if they look intimidating at first, they are not random nonsense. In fact, they are (supposedly) designed to help you althoug in many occasions it doesn't look like. Error messages usually tell you what went wrong and where in your code it happened. 

Some languages like Python tend to be quite informative (`IndexError: list index out of range`), while others like MATLAB may sound more technical. In R, sometimes an error might not even show up unless you actively check for it. Don’t ignore the message. Read it, check the line number, the function name, the variable mentioned. And most importantly, **don’t panic**. Often, the problem is something small, and the message is pointing right at it.

#### Isolate the error
When something breaks, staring at your whole script usually doesn’t help. Instead, try to isolate the error. You can do this by commenting out parts of your code, running small blocks separately, or creating a simplified version of the problem. This technique helps you zoom in on the specific part that’s failing. Once you identify it, the solution is often much easier to find.

### Useful commands and sanity check
Sometimes, the most powerful debugging tools are also the simplest. Commands like `print()` in Python, `disp()` in MATLAB, or `print()` and `cat()` in R allow you to look inside your script and check what’s really going on. Is your variable what you think it is? Is the data loaded correctly? Is a function returning what you xpect?

These quick inspections are what are known as sanity checks and can save you hours of frustration. A well-placed print command can help you catch a typo, a missing value, or an unexpected data type before it becomes a more complex error or silent warning. And just like with errors and warnings, the way these outputs behave can vary slightly across languages. For example, in R, accessing a missing index might return `NA` without any complaint, while Python or MATLAB would raise a visible error. That’s why actively checking your variables and outputs as you go is so important, especially in languages that are more “permissive”.

Most languages also let you handle errors elegantly using dedicated structures.

::: code-group
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can’t divide by zero!")
```
```matlab
try
    result = 10 / 0;
catch
    disp('Division by zero!')
end
```
```r
result <- tryCatch({
    10 / 0
}, warning = function(w) {
    print("Warning occurred")
}, error = function(e) {
    print("You can’t divide by zero!")
})
```
:::

These structures are especially useful when working with large datasets, long-running scripts, or external files. They allow your program to react to problems without falling apart and help you build more robust and user-friendly code.

###Use the Tools in Your Environment

Modern development [environments](/tools.html#best-setups-for-each-language) like VSCode, MATLAB, or RStudio offer helpful tools that make debugging more visual and intuitive:

* Breakpoints allow you to pause execution and see what’s happening at a specific line.  
* Variable explorers let you see the current values of your variables as the code runs.  
* Interactive consoles help you run code piece by piece, modify values, and test hypotheses in real time.

Learning how to use these tools will save you time and give you a deeper understanding of how your code works and why it breaks.

**Visualize your data, not just the final results.** Data visualization is not just for presentations, it’s also a powerful debugging tool. Sometimes, a quick plot can show you that your data is upside down, full of missing values, or just completely wrong. Use `plot()` (in MATLAB, Python, R) to look at your data at different stages of your pipeline. If something looks weird, it probably is and a simple graph can reveal what raw numbers might be hiding.

**Take advantage of AI, but stay in control.** You now have access to tools that programmers a few years ago could only dream of. AI assistants like ChatGPT, GitHub Copilot, or even built-in tools in editors can help you to understand error messages, suggest better syntax or structure, explain unfamiliar functions and provide code examples. However, don’t rely on them blindly. Always make sure you understand what the AI is suggesting. Use it as a tutor, not a crutch. The goal is to learn, not just to copy and paste.

**Red Flags (things you should avoid when debugging).** Even experienced programmers fall into bad habits, especially under pressure. But ignoring these common red flags can turn small bugs into big problems. Here’s a list of things you really shouldn’t do when handling errors, warnings, or debugging your code:

* Your code works… but you don’t know why. If your script runs but you cannot explain how, that is a red flag. It might break the next time you change something. Always try to understand what each line of code is doing. Even if you do not know the exact function or all the technical details of how it works, you should at least know what it does and why it is there. 

* Ignoring warnings because “it still runs”. Warnings are there for a reason. They may not stop your script, but they often point to deeper issues (i.e., deprecated functions, mismatched types, or silent errors waiting to cause trouble later). 

* Making major edits without backing up your original script. Changing your code without saving a copy of the working version is risky. Use version control (like Git) or at least save separate versions. This gives you a safety net when things go wrong. 

* Copy-pasting code from ChatGPT (or any AI) without understanding the changes. It’s tempting to just paste and move on, but if you don’t know what was changed or why it works now, you’re setting yourself up for future confusion. Always read and understand the fix before you trust it. 

* You didn’t test parts of your code… you just ran everything and hoped for the best. Hoping is not a debugging strategy. Break your code into small, testable chunks. This not only helps you find errors faster but also improves the overall structure of your code. 

* You tweak your main script or functions directly when trying to fix a bug. Avoid editing your main logic without creating a test version first. It’s safer to isolate the problem in a small test file or duplicate function. This keeps the original logic intact and reduces the risk of making things worse. 

* Functions inside functions inside functions (a recipe for confusion). Nesting functions might look fancy, but it makes your code harder to read, debug, and reuse. Keep your functions simple and separate. You’ll thank yourself later when something breaks. 

* Mixing data types or sources without checking compatibility. Combining datasets without verifying their formats, lengths, or encodings can lead to subtle, hard-to-track bugs. Always check compatibility before merging or manipulating data.

## Writing clean, reproducible code

*Coming soon*

