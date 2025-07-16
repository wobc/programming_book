
# Introduction

## Why psychologists and cognitive neuroscientists should learn to code.

*Why should a psychologist learn to code?* This simple question has a straightforward answer, but we believe it is worth spending some time thinking about the underlying assumptions, biases, and stereotypes that it hides. The most transparent and probably determinant one is that Psychology is not a *proper* scientific discipline, or if you want to be benevolent, that our discipline has some sort of special halo that makes it different from the classic natural sciences. Nobody questions whether a physicist or a computer scientist should learn to code, but it is somehow debated if the same applies to a Psychology researcher. From such debate, one could potentially conclude one first thing: the subject we try to understand as psychologists is not as complex as in other fields, and therefore we do not need sophisticated tools to do so. We believe it is abundantly clear that the object of study of Psychology (the Mind and the Brain) is, at least, as complex as those in other disciplines. A second alternative is that, even if our discipline is complex, our workspace (e.g. the type of data we work with, our analyses pipelines, our statistical tools, etc.) itself is not. In other words, it could be that our approach to the mind and the brain has resourced to simple tools and workflows, a sort of light science that therefore does not depend as much as others in automation or advanced computations. We believe this way of thinking suffers from two big misconceptions: 1\) Psychology and related disciplines can (and indeed are) benefit(ting) from evermore advanced analytical approaches, and 2\) coding is useful even in simple workflows to warrant reproducibility and transparency in our research.

Then, why are Psychology students not learning to code? We think part of the problem comes from within. We have over the years encountered several professors in Psychology faculties that do not consider programming a skill we should train in our students. Again, this sometimes has to do with the conception of our discipline as somewhat unique, in which we can gain knowledge just via personal experience or reflection, and where the scientific method is often regarded as a “naive” approach to proper insight (*“why would you learn how to code if you could learn more about human psyche by having a conversation with your friend?”*). Some other times, and in our opinion reflecting a deeper problem, we hear the condescending argument that Psychology students (unlike the almighty `[insert proper science]` ones) will simply not learn how to code even if you tried to teach them. We are apparently clearly not programmed to program\!

Luckily, our own experience as, first, students, and then, teachers has proved wrong many of these preconceptions. First and foremost, **Psychology students can and often love to learn to code**. Second, early-career researchers in Psychology always find coding useful, regardless of how “complex” their research is. Third, coding is becoming more and more a prerequisite rather than an extra, as psychologists with coding skills are highly regarded in academia and in industry. Finally, an increasingly trained generation of psychologists are making psychological science a more robust discipline, precisely because we are subjecting ourselves to the same (in this case, technical and computational) standards as other scientific disciplines.

So, why should you learn to code? We hope the more philosophical reasons we listed above already got you on board. However, there is plenty of practical reasons that should be considered as well:

| For others | For ourselves |
| :---- | :---- |
| Transparency | Control |
| Precision | Automatization |
| Reproducibility | Flexibility |

* Coding promotes **transparency** in research. By writing code, researchers make their methods and data analysis steps explicit and clear. This allows others to see exactly how the results were obtained, reducing ambiguity and increasing trust in the findings.  
* Coding enables researchers to perform tasks with greater **precision**. Code allows for very specific instructions, reducing the potential for human error or ambiguity in data processing and analysis.  
* Coding enhances **reproducibility**. When researchers use code to conduct their analyses, others can take that code and the original data to replicate the study and verify the results. This is crucial for scientific progress and building confidence in research.  
* Coding gives researchers greater **control** over their research process. Instead of relying on pre-packaged software, they can customize their analyses, data manipulation, and experimental procedures to fit their specific needs. This allows for more nuanced and tailored research.  
* Coding makes it possible to **automate** repetitive tasks. This saves researchers time and effort, allowing them to focus on more important aspects of their work, such as designing studies or interpreting results. It further prevents potential mistakes in such repetitive tasks.  
* Coding provides researchers with greater **flexibility** in their research. They are not limited by the capabilities of existing software but can adapt their code to handle new data, explore different analyses or plot their data in different ways.

## Common fears and misconceptions about programming:

Many psychology and cognitive neuroscience students might hesitate to learn programming due to certain anxieties and misconceptions. Below, we review some of them:

### Programming is complex

One common fear about programming is its perceived complexity. It’s true that coding can become complex, especially when tackling sophisticated tasks or advanced analyses. However, the vast majority of coding tasks psychologists will encounter are fundamentally logical and structured, with clear patterns and manageable complexity. Coding languages used commonly in psychology, such as Python or R, are intentionally designed to be user-friendly and straightforward. For instance, let's assume you have zero previous experience with programming. Can you figure out what the following code does?

::: code-group

```r
participant <- 5

if (participant > 3) {
  print("Participant is greater than 3")
} else {
  print("Participant is not greater than 3")
}
```

```python
participant = 5

if participant > 3:
    print("Participant is greater than 3")
else:
    print("Participant is not greater than 3")
    
```

```matlab
participant = 5;

if participant > 3
    disp("Participant is greater than 3")
else
    disp("Participant is not greater than 3")
end
```
:::

Just like learning any new language, there is an initial learning curve. But remember, complexity in coding builds incrementally. You start with basic building blocks, gradually learning to combine them into larger structures. Step-by-step, the seemingly complicated will become intuitive. Just try to trust the process!

### Coding as a Learnable Skill

Perhaps the most significant misconception is the idea that coding is an innate talent rather than a learnable skill. This belief might discourage those who see themselves as "non-technical" or who think they lack an innate aptitude for programming.

Research and practical teaching experiences clearly demonstrate that **coding is entirely learnable**, just like writing, reading, or any other academic skill. Successful coding does not rely on innate talent but on consistent practice, curiosity, and openness to making mistakes and learning from them. Many successful programmers—including psychologists—started without any "natural" inclination toward technology.

In summary, while anxieties around learning to code can seem daunting, these fears reveal themselves as unfounded once you start to get your hands dirty: coding is a practical, achievable, and empowering skill.

