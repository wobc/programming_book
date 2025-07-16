# Choosing the right tools

One of the first decisions that we encounter when learning to code is, precisely, choosing which programming language to use. Why are there different programming languages? What are the advantages and disadvantages of each of them? Why are some of them more prominent than others in our field? These questions can feel overwhelming at first, especially when colleagues or supervisors recommend different things. In our opinion, **no single language is objectively the best** – each one was developed with certain goals and communities in mind, and all of them have advantages and disadvantages (which are largely dependent on the user). For instance, in the past years, there's been a strong tendency to advocate for open languages such as Python and R, but some of our colleagues might feel more comfortable with certain features of Matlab. Choosing among them depends not only on your goals (e.g., data analysis, experimental design, visualization) but also on the available libraries, community support, and, importantly, on what your team has used in the past.

We believe that all of these common languages (R, Python, and Matlab, primarily) provide useful tools for cognitive neuroscience, and therefore in this book we do not advocate for a language in particular. Rather than suggesting a “best” language, our goal is to give you a clear, beginner-friendly overview of frequent concepts and decisions you’ll encounter when learning to code. 

## What is code, really?

In the [previous chapter](/foundations.html), we defined what programming is. As we discussed, code is just text –  a set of instructions written in a programming language that a computer can interpret and execute. Most of the time, this set of instructions takes up the form of *a script.* Code scripts are plain text files that contain those instructions and they can be written in the simplest text editors (like Notepad in Windows or TextEdit in MacOS). But how does the computer then know how to read these files? Again, you don’t need to do anything too fancy for this. For instance, if you write the instructions using Python format, then you could save the text file as a “.py” file. And that would be your first Python script\! Then, if you have Python installed in your computer (see below), you could run the .py file in a terminal, which would execute the contained instructions. Scripts in R (.R) or MATLAB (.m) work in a similar fashion.

Of course, as code becomes more complex, it becomes increasingly helpful to use tools designed specifically to support programming. For instance, you might want to check if your code is correct before running it, or check the result of certain operations to develop the next steps. This is where **IDEs** – integrated Development Environments – come into play. But before going further, here’s a quick glossary of terms you’ll see throughout this chapter and the rest of the book:

| Term | Definition |
| :---- | :---- |
| Script | A plain text file containing a sequence of commands in a programming language |
| IDE | An application that provides tools like code editors, syntax highlighting, debugging and visualization in once place |
| Programming language | A formal language (like Python, R or MATLAB) used to write instructions a computer can execute |
| Terminal / console | An interface where users can type commands and execute them directly |
| Workspace | A collection of variables, functions, and data that are currently loaded into memory during a session |
| Environment | The “context” in which code runs (including which libraries are loaded, which interpreter version is being used, etc.) |
| Library / package / toolbox | External code snippets or modules that extend the functionality of the base programming language (the term depends on the language, for instance, R usually refers to “packages” or “libraries”) |
| Notebook | A hybrid document format combining text and code in one file. Very useful for communicating results. |

## Best setups for each language

Once you’ve chosen your language of preference, another question that might come to mind is how to choose the best setup to write and execute code in said language. Again, there are multiple alternatives for most of the languages and in the end it comes to a matter of personal preference. An important aspect to consider in this regard is whether or not to use an IDE. MATLAB, R and Python all can be used both with and without an IDE. So, should you use an IDE? It depends\!

IDEs are ideal for:

- Writing and organizing code  
- Debugging (stepping through your script, checking variables and the results of each command)  
- Visualizing intermediate outputs  
- Integrating documentation and comment (see “Notebook” in the glossary above).

Non-IDE scenarios can be useful when:

- Executing scripts that are already written  
- Running jobs on servers or remote machines (most of them don’t allow a graphical interface)

Let’s now look at how these ideas apply across different languages!

### MATLAB

MATLAB is commonly used in cognitive neuroscience for signal processing (e.g., EEG and fMRI data) and running behavioral experiments (e.g. Psychtoolbox). Most users interact with it through its IDE, which includes an editor, console and workspace viewer. In contrast with most other languages, MATLAB allows you to even edit the content of variables through the viewer, a feature that has inspired [heated discussions](https://neuroplausible.com/matlab). While you can run `.m` scripts from the command line, most users stay within the IDE environment.

::: tip Licensed software

 Unlike other languages, MATLAB is proprietary software and requires a (paid) license. Many universities provide such licenses for students and staff. For instance, [check out options](https://csirc.ugr.es/informacion/servicios/mathworks) at the University of Granada.

:::

::: info Toolboxes

MATLAB’s core functionality can be extended through “toolboxes”, some of which are heavily used in the cognitive neuroscience community (e.g., SPM or Fieldtrip). These toolboxes are free themselves, but still require a MATLAB license.

:::


### R

R is popular in cognitive (neuro)science primarily for the statistical analysis and data visualization tools it provides. In contrast with MATLAB, different people use R differently, and there’s no “official” IDE that comes with R itself (in other words, you can download and install R in your system, and use it without an IDE). However, a lot of people use a very popular IDE called “RStudio”.

- R vs. Rstudio: R is the language. RStudio is the IDE most people use to interact with R. RStudio adds helpful tools as other IDEs do for other languages.  
- In RStudio, some people directly write .R scripts, while others prefer to use Notebooks, combining code, text and results in one document.

::: tip Extending R

Just as in MATLAB, you can extend R by installing “packages”. For instance, a very popular package in cognitive science is [Tidyverse](https://www.tidyverse.org/).
:::



### Python

Among the three main languages we’re discussing here, Python is arguably the most versatile and widely used across scientific disciplines. In cognitive neuroscience, it’s used for everything from stimulus presentation and data analysis to machine learning and computational modeling. However, this versatility often comes with perhaps the steepest learning curve in terms of understanding how to actually run Python code and how to extend its core functionalities. If you are starting or have tried to start using Python, probably you’ve struggled to understand what environments are, when and what to use *conda* for, or what’s the best IDE to run Python. But why is this the case?

Unlike MATLAB or RStudio, where much of the environment is predefined and bundled, Python doesn’t come with a built-in graphical interface or a single “official” way to manage your code, data, and libraries. Instead, you’re given options – and these can be a bit overwhelming at first. In practice, most researchers in cognitive neuroscience work with Python through a few popular distributions (e.g. Anaconda) and IDEs (e.g. Spyder or VSCode). Here’s a few definitions that might help clarify different useful concepts here:

| Term | Definition |
| :---- | :---- |
| Distribution | A predefined version of Python that includes not only the core language, but also a set of useful tools and even sometimes an IDE. For instance, [Anaconda](https://www.anaconda.com/download) comes with Spyder (an IDE) and certain popular packages for data science (e.g., numpy, pandas, matplotlib, scikit-learn, etc.) |
| Interpreter | The “version” of Python that actually reads and executes your code. There can be multiple Python interpreters on your systems, which is why managing environments (“contexts”) becomes important |
| Environments | A self-contained “folder” on your computer where a specific version of Python and its packages are stored. This keeps single projects isolated: different projects can use different package versions without interfering with each other |
| Package managers | A package manager helps you download and install libraries. The most common ones are `pip` (the default Python package manager) and `conda` (comes with Anaconda and can manage both packages *and* environment). |

**So what should you do?** If you're feeling overwhelmed by all these options — that's completely normal. The good news is, you don’t need to understand everything right away, and you certainly don’t need to try every tool. The best approach is to start with a simple, stable setup that’s well supported and widely used in the research community. Some of us really like the combination of [**VSCode**](https://code.visualstudio.com/) (a lightweight yet powerful code editor) with [**Miniconda**](https://www.anaconda.com/docs/getting-started/miniconda/main#is-miniconda-free-for-me) (a minimal version of Anaconda that lets you install only the packages you need). This combo gives you full control over your coding environment without the bloat of preinstalled packages you may never use. That said, if you're more comfortable with graphical interfaces and prefer something closer to MATLAB, **Spyder** or **Jupyter Notebooks** may be a gentler starting point. In the next section, we’ll guide you step by step through setting up your first Python environment so you can start coding with confidence.

#### Setting up a productive coding environment in Python

**Step 1:** Install [**Miniconda**](https://www.anaconda.com/docs/getting-started/miniconda/main#is-miniconda-free-for-me). Download the installer for your operating system (Windows, macOS, or Linux).  Choose Python 3.10 or higher.

**Step 2**: Create a new environment. Creating an environment keeps your project clean and isolated. To do so, open a terminal (or Anaconda Prompt on Windows) and run:

```bash  
conda create -n my_first_env python=3.10  
```

Then activate it:

```bash  
conda activate my_first_env  
```

**Step 3**: Install essential packages  
```bash  
conda install jupyterlab numpy pandas matplotlib seaborn scikit-learn
```

**Step 4:** Install and set up Visual Studio Code

1. Download [VSCode]((https://code.visualstudio.com)).

2. Install the **Python extension** (it will suggest this the first time you open a `.py` file).

3. Open VSCode and go to `View > Command Palette` → type and select **“Python: Select Interpreter”** → choose the `my_first_env` environment you just created.

4. You’re now ready to run `.py` scripts *line by line* using **“Run Cell”** commands in VSCode (just like in RStudio).

::: tip Dividing your script

You can write special comments like `# %%` to divide your script into executable blocks, just like cells in a notebook.

:::

Want to read more about VSCode? Here’s some slides from some time ago…

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBRuhn2Ld0Dh-1YihZwM7RKl18XRLDdSXn1hTe0xDvm8-URLFXfZs07pn-djdj9tS-jqJc-PnmluBM/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
