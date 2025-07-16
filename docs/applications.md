# Hands-on applications


| Task | Why it is important | How to do it |
| :---- | :---- | :---- |
| Project organization and data curation  | Proper curation is key for data sharing and personal organization. Among others, coding can help you to quickly and systematically create folders, subfolders and naming files. | You can use many basic functions to create folders, rename files and move them. |
| Experimental design and stimulus presentation | Creating controlled and reproducible experiments that flexibly adjust to your needs (versus more rigid and error prone task control implemented with GUI-based software).  | Combining basic building blocks (such as variables and loops) with specialized functions (e.g., Psychtoolbox, Psychopy, …). |
| Data Processing & Analysis  | *coming soon* | *coming soon* |
| Visualizations | *coming soon* | *coming soon* |
| Writing and disseminating | *coming soon* | *coming soon* |

## Project organization and data curation

### Why does it matters?

It is quite likely that you will be working with several files of data, scripts, and/or stimuli.Naturally, having a well-organized structure of files and folders is essential for many reasons. Among others, good organization is fundamental for sharing your work (see the Good Practices and Open Science sections). Just as importantly, it will make your life much easier when you return to your project after a few weeks away since you will be able to quickly locate everything you need.

But how can coding help you with this? There are several reasons. Let’s look at them through a simple example.

### How to do it? Starting (re)naming files

Imagine that, for your Master’s thesis, you are going to re-analyse an existing, very large dataset from your research group. When you receive the data, you find a folder called data containing dozens of *.csv* files with inconsistent naming conventions: *subj01.csv*, *participant\_2.csv*, *03subjectj.csv*, and so on.

One of the first things you will want to do is to organize these files using a consistent naming convention. For example: *subj\_01.csv*, *subj\_02.csv*, etc. You might think that the simplest approach is to rename the files manually. However, this can take quite some time and, more importantly, doing it one by one is prone to errors, for instance, accidentally giving a file the wrong name or skipping a file entirely.

This is where coding can be extremely helpful. With just a few lines of code, you can create a systematic way to rename all the files consistently, in a process that runs in seconds rather than hours.

::: code-group

```matlab
% Define the folder containing the files
data_folder = 'data';

% List all CSV files
file_list = dir(fullfile(data_folder, '*.csv'));

% Loop through each file
for k = 1:length(file_list)
    old_name = file_list(k).name;
    % Create new name with consistent numbering
    new_name = sprintf('subj_%02d.csv', k);
    % Rename the file
    movefile(fullfile(data_folder, old_name), fullfile(data_folder, new_name));
end
```

```python
import os
import glob

# Define the folder
data_folder = 'data'

# List all CSV files
file_paths = glob.glob(os.path.join(data_folder, '*.csv'))

# Sort for reproducibility
file_paths.sort()

# Loop through and rename
for idx, old_path in enumerate(file_paths, start=1):
    new_name = f"subj_{idx:02d}.csv"
    new_path = os.path.join(data_folder, new_name)
    os.rename(old_path, new_path)

```

```r
# Define the folder containing the files
data_folder <- 'data'
# List all CSV files
file_list <- list.files(data_folder, pattern = '\\.csv$', full.names = TRUE)
# Loop through each file
for (k in seq_along(file_list)) {
    old_name <- file_list[k]
    # Create new name with consistent numbering
    new_name <- sprintf('subj_%02d.csv', k)
    # Rename the file
    file.rename(old_name, file.path(data_folder, new_name))
}
```
:::

::: tip 
Before running any of these scripts, make a backup of your files. This way, you avoid accidental overwriting or loss.
:::

### How to do it? Organizing files in subfolders

But let’s see a slightly more complicated (and perhaps more realistic) situation. Imagine you have been collecting data from a study where, for each participant, you gathered data from two different behavioural tasks and, in addition, acquired a structural MRI scan of each participant’s brain.

It is possible that you currently have all this information saved in a single folder, or scattered across several folders without a clear structure. However, it is good practice to follow a consistent and transparent convention. For example, within the `data` folder, you may want to create a subfolder for each participant that contains all the files associated with that participant. This makes it much easier to keep track of your data and to share or archive your project in the future.

Below are examples of how you could reorganize your files programmatically, by:

* creating a folder per participant (e.g., `subj_01/`)  
* moving their corresponding files inside

Suppose your files are named like this:

* `taskA_subj_01.csv`  
* `taskB_subj_01.csv`  
* `mri_subj_01.nii`  
  …and so on for each participant.

::: code-group
```matlab
data_folder = 'data';
% List all files
file_list = dir(fullfile(data_folder, '*.*'));
file_list = file_list(~[file_list.isdir]); % Remove directories
% Loop through participants
n_participants = 20; % Change to your actual number
for k = 1:n_participants
    subj_id = sprintf('subj_%02d', k);
    subj_folder = fullfile(data_folder, subj_id);


    % Create subfolder if it does not exist
    if ~exist(subj_folder, 'dir')
        mkdir(subj_folder);
    end
    
    % Move files for this participant
    for f = 1:length(file_list)
        fname = file_list(f).name;
        if contains(fname, subj_id)
            old_path = fullfile(data_folder, fname);
            new_path = fullfile(subj_folder, fname);
            movefile(old_path, new_path);
        end
    end
end
```

```python
import os
import glob
import shutil


data_folder = 'data'
n_participants = 20  # adjust as needed

# Loop through participants
for k in range(1, n_participants + 1):
    subj_id = f"subj_{k:02d}"
    subj_folder = os.path.join(data_folder, subj_id)
    os.makedirs(subj_folder, exist_ok=True)

    # Find all files belonging to this subject
    pattern = os.path.join(data_folder, f"*{subj_id}*")
    files = glob.glob(pattern)

    # Move files
    for filepath in files:
        filename = os.path.basename(filepath)
        new_path = os.path.join(subj_folder, filename)
        shutil.move(filepath, new_path)
```
```r
data_folder <- 'data'
n_participants <- 20  # Change to your actual number
# Loop through participants
for (k in 1:n_participants) {
    subj_id <- sprintf('subj_%02d', k)
    subj_folder <- file.path(data_folder, subj_id)
    # Create subfolder if it does not exist
    if (!dir.exists(subj_folder)) {
        dir.create(subj_folder)
    }
    # Move files for this participant
    file_list <- list.files(data_folder, full.names = TRUE)
    for (fname in file_list) {
        if (grepl(subj_id, fname)) {
            new_path <- file.path(subj_folder, basename(fname))
            file.rename(fname, new_path)
        }
    }
}
```
:::

::: tip

This type of organization not only makes your project more readable but also helps prevent mistakes like mixing up files across participants or analyses.

:::


### How to do it? Creating the folder structure for your projects 

Let’s look at another example of how coding can be useful for data curation.

Something that is strongly recommended is to follow a consistent structure to organize your projects. For instance, in cognitive neuroscience, it is often helpful to set up a folder called data with subfolders for raw (unprocessed) and derivatives (processed) files, along with other folders for scripts, stimuli, documentation, or results.

Once you identify a folder structure that works well for your workflow, you should stick to it across all your projects. You might be tempted to simply copy an old project and then delete its contents. However, this approach is not ideal for many reasons (e.g., you may accidentally leave old files behind, or clutter your project with unnecessary metadata).

And as you might be anticipating, having a short script that automatically creates your project folder structure will make your life much easier and less error-prone.

::: code-group
```matlab
% Define the root project folder
project_root = 'MyNewProject';

% List of subfolders to create
folders_to_create = {
    'data/raw'
    'data/derivatives'
    'scripts'
    'stimuli'
    'results'
    'docs'
};

% Create the root folder
if ~exist(project_root, 'dir')
    mkdir(project_root);
end

% Create each subfolder
for i = 1:length(folders_to_create)
    folder_path = fullfile(project_root, folders_to_create{i});
    if ~exist(folder_path, 'dir')
        mkdir(folder_path);
    end
end
```

```python
import os

# Define root project folder
project_root = 'MyNewProject'

# List of subfolders
folders_to_create = [
    'data/raw',
    'data/derivatives',
    'scripts',
    'stimuli',
    'results',
    'docs'
]

# Create folders
for folder in folders_to_create:
    path = os.path.join(project_root, folder)
    os.makedirs(path, exist_ok=True)
```
```r
# Define the root project folder
project_root <- 'MyNewProject'
# List of subfolders to create
folders_to_create <- c(
    'data/raw',
    'data/derivatives',
    'scripts',
    'stimuli',
    'results',
    'docs'
)
# Create the root folder
if (!dir.exists(project_root)) {
    dir.create(project_root)
}
# Create each subfolder
for (folder in folders_to_create) {
    folder_path <- file.path(project_root, folder)
    if (!dir.exists(folder_path)) {
        dir.create(folder_path, recursive = TRUE)
    }
}
```
:::

::: warning Additional resources
To get to know more about naming conventions and folder structures, take a look at the [Good practices chapter](/goodpractices.html) together with these additional resources. 
- The Brain Imaging Data Structure: https://bids.neuroimaging.io/index.html
- Some example of Research Folder Structure Standard: https://gin-tonic.netlify.app/standard/ 
:::

## Experimental design and stimulus presentation

As a psychologist working in research, you may need to collect new datasets via well-controlled experimental paradigms. Programming will also be a powerful tool for this task. Although plenty of existing software offers an user-friendly graphical interface where you can drag and drop the different events that compose your experiments (e.g., E-Prime, OpenSesame, or the builder from Psychopy are popular options), they impose severe constraints on the flexibility you can achieve regarding experimental control and task presentation. Imagine, for instance, that you need to pseudo-randomize your trial order following certain conditions, as in task-switching paradigms (where we need a fixed proportion of task repetitions and switches) or in n-back tasks (where we need show stimuli matching the one displayed in N previous trial). Alternatively, imagine that you want to use complex, multimodal stimuli that are not included among the builder predefined events. In all these cases, most GUI-based software will not offer straight-forward solutions, usually requiring to include short pieces of code (sometimes, written in obscure programming languages, as E-Basic in E-prime) to achieve these demands. In opposition, coding your task from scratch provides full flexibility and control over experimental design and stimulus presentation, allowing you to implement complex paradigms and custom features that GUI-based software cannot easily accommodate. Most critically, building your experimental design and the task flow through a GUI will entail defining critical information across a high number of windows, tabs, drop-down menus, etc. This approach makes it difficult to keep track of the different details of your task design and increases the likelihood of human errors. In contrast, a well-structured and commented experiment script will ensure that your experiment is not only flexibly tailored to your needs, but also transparent and reproducible.

### How to do it: Using PsychoPy, OpenSesame, or jsPsych for stimulus presentation and data collection.

To do so, you can use stimulus presentation toolboxes such as [PsychoPy](https://www.psychopy.org/) (written in Python), [Psychtoolbox](https://www.psychtoolbox.net/) (in Matlab) or [jsPsych](https://www.jspsych.org/latest/) (in JavaScript), which provide specialized functions to achieve great precision at controlling visual and auditory stimulus presentation, collecting behavioral responses, or synchronizing your task to recording techniques such as fMRI, EEG, EyeTracker, etc. Although your script(s) for design control and stimulus presentation can grow exponentially, both in terms of length and sophistication, here we want to stress that just by combining a few building blocks shown in the previous chapter with these specialized functions is enough to create a simple experiment. 

For instance, imagine that you want to code a simple Stroop task. You will need to create [**variables**](/coreconcepts.html#variables) which contain all your trials’ stimulus (the word and ink color that will be displayed) and experimental conditions (congruent and incongruent), as well as the subject responses (the keypress, reaction time, and whether or not the response was correct). Then, you will need to add a [**loop**](/coreconcepts.html#loops-conditionals) that iterates across your experiment trials. Finally, you will use a series of [**functions**](/coreconcepts.html#functions) to control the computer screen and keyboard.

Let’s start from the beginning and write down the experimental design. Below you will find two examples for that in Matlab and Python. 

::: code-group
```matlab
%% Simple Stroop task design - Matlab
% Design Parameters
nTrials = 20; % total trials (must be even)
nCond = nTrials / 2; % half congruent, half incongruent

words = {'YELLOW', 'GREEN'};
colors = {[255 255 0], [0 255 0]}; % yellow, green RGB
colorNames = {'YELLOW', 'GREEN'};

% Create a variable coding the congruency condition 
% 1 = congruent, 0 = incongruent
cond = [ones(1,nCond), zeros(1,nCond)];

% Preallocate the variables containing the trial info
wordList = cell(1, nTrials);
colorList = cell(1, nTrials);
colorRGB = cell(1, nTrials);

% Generate stimuli
for i = 1:nTrials
    if cond(i) == 1  % Congruent
        idx = randi(2); % choose 1 or 2
        wordList{i} = words{idx};
        colorList{i} = colorNames{idx};
        colorRGB{i} = colors{idx};
    else % Incongruent
        idxWord = randi(2);
        idxColor = 3 - idxWord; % ensures mismatch
        wordList{i} = words{idxWord};
        colorList{i} = colorNames{idxColor};
        colorRGB{i} = colors{idxColor};
    end
end

% Combine into table
trials = table(wordList', colorList', cond', colorRGB', ...
    'VariableNames', {'Word','Color','Condition','RGB'});

% Shuffle and make sure no identical trials in a row
valid = false;
while ~valid
    trials = trials(randperm(nTrials), :);
    valid = true;
    for i = 2:nTrials
        if strcmp(trials.Word{i}, trials.Word{i-1}) && ...
           strcmp(trials.Color{i}, trials.Color{i-1})
            valid = false;
            break;
        end
    end
end

% Store your task design 
writetable(trials, ‘design.csv’);
```

```python
# Simple Stroop task design - Python
import random

# Design parameters
n_trials = 20  # total trials (must be even)
n_cond = n_trials // 2  # half congruent, half incongruent

words = ['YELLOW', 'GREEN']
color_names = ['YELLOW', 'GREEN']

# Create condition list: 1 = congruent, 0 = incongruent
conditions = [1]*n_cond + [0]*n_cond

# Preallocate trial lists
word_list = []
color_list = []

# Generate congruent trials: word and color match
congruent_words = words * (n_cond // len(words))
congruent_colors = congruent_words.copy()

# Generate incongruent trials: word and color mismatch
incongruent_words = words * (n_cond // len(words))
# For each word, assign the opposite color
incongruent_colors = ['GREEN' if w == 'YELLOW' else 'YELLOW' for w in incongruent_words]

# Combine congruent and incongruent trials
word_list = congruent_words + incongruent_words
color_list = congruent_colors + incongruent_colors

# Combine all trials into a list of tuples: (word, color, condition)
trials = list(zip(word_list, color_list, conditions))

# Shuffle trials ensuring no immediate repeats of the same word-color pair
valid = False
while not valid:
    random.shuffle(trials)
    valid = True
    for i in range(1, n_trials):
        if trials[i][0] == trials[i-1][0] and trials[i][1] == trials[i-1][1]:
            valid = False
            break

# Now trials is a shuffled list of (word, color, condition) with no immediate repeats

# Example output
for t in trials:
    print(t)
```
:::
