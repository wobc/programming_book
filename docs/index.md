---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
lastUpdated: true
hero:
  name: "Programming in Psychological Science"
  text: "A Practical Introduction"
  tagline: #My great project tagline
  actions:
    - theme: brand
      text: Start reading!
      link: /introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/gonzalezgarcia/programmingCogNeuro_book

# features:
#   - title: Multi-language
#     details: Rather than focusing on a single programming language, this book will introduce you to the most popular languages in Psychology and Cognitive Neuroscience - Python, R, and MATLAB.
#   - title: Comprehensive
#     details: We known programming can be confusing. We will try to cover a wide range of important concepts in a clear and concise way, so you can focus on what matters most.
#   - title: Collaborative
#     details: This book is a collaborative effort, and we welcome contributions from the community. If you have suggestions or improvements, please let us know!

---


This book is designed to equip psychology and cognitive neuroscience students with essential programming skills. Rather than focusing on a single programming language, this book will introduce you to the most popular languages in Psychology and Cognitive Neuroscience - Python, R, and MATLAB:

::: code-group

```r
# this is a comment in R
example <- 5
example
```

```python
# this is a comment in Python
example = 5
example
```

```matlab
% this is a comment in MATLAB
example = 5;
example
```
:::

<br><br>

## Table of contents

- [**Introduction**](/introduction.html)
- [**Foundations: programming in Psychological science**](/foundations.html)
- [**Choosing the right tools**](/tools.html)
- [**Core concepts**](/coreconcepts.html)
- [**Hands-on applications**](/applications.html)
- [**Good practices**](/goodpractices.html)
- [**What's next?**](/next.html)

<br><br>

---


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cimcyc.ugr.es/sites/centros/cimcyc/public/2025-02/Chiara_Avancini.jpeg',
    name: 'Chiara Avancini',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:chiara.avancini@ugr.es' },
    ]
  },
   {
    avatar: 'foto_luis.jpg',
    name: 'Luis Ciria',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:lciria@ugr.es' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/luisciria.bsky.social' }
    ]
  },
   {
    avatar: 'carlospic.png',
    name: 'Carlos González-García',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:cgonzalez@ugr.es' },
      { icon: 'github', link: 'https://github.com/gonzalezgarcia' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gonzalezgarcia.bsky.social' }
    ]
  },
   {
    avatar: 'https://lh3.googleusercontent.com/OQT-3lGXwZX0IBW-ABNQX2ThjyrmSwJPqJD7fExtvQRpAOBB208ypgoLnfnwVtjvNsUqx7JFngKzvUpwhNUx25J4G-eb8-jlG6xwpKnGDjGJmDGNpa2oclFvLAGfLLJF_gYNwAE8bAYcPVHiGorYaOuf1xTGWiFufIsHnmBnS0mul1gor9_UKA=w1280',
    name: 'Juan Linde-Domingo',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:lindedomingo@ugr.es' },
      { icon: 'github', link: 'https://github.com/lindedomingo' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/lindedomingo.bsky.social' }
    ]
  },
  {
    avatar: 'https://cdn.bsky.app/img/avatar/plain/did:plc:a2adix6ozyep2ulh3n4dr4ng/bafkreidjzb52ipee3dcsxl4vtebmjbsblbx7eutllwmylqk6uo2uoas6u4@jpeg',
    name: 'Maria Jesús Maraver',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:mjmaraver@ugr.es' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/maravermj.bsky.social' }
    ]
  },
  
  {
    avatar: 'foto_javi.jpg',
    name: 'Javier Ortiz-Tudela',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:ortiztudela@ugr.es' },
      { icon: 'github', link: 'https://github.com/ortiztudela' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/ortiztudela.bsky.social' }
    ]
  },
   {
    avatar: 'https://cdn.bsky.app/img/avatar/plain/did:plc:srx4rfffho7nlfxg4zmmnzrj/bafkreienptbl4g3fvgv6clqjyo7at67lecfw3x2j6i44kwmk7owcuknw4i@jpeg',
    name: 'Ana F. Palenciano',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:palencianoap@ugr.es' },
      { icon: 'github', link: 'https://github.com/AnaPalenciano/' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/palencianoap.bsky.social' }
    ]
  },
  {
    avatar: 'https://icon-library.com/images/member-icon/member-icon-4.jpg',
    name: 'Rodika Sokoliuk',
    title: 'Contributor',
    links: [
      { icon: 'minutemailer', link: 'mailto:sokoliuk@ugr.es' },

    ]
  },
]
</script>

### Who are we?

We are a group of postdoctoral researchers at the University of Granada, Spain, with a passion for programming and its applications in psychology and cognitive neuroscience. Our goal is to make programming accessible and practical for students and researchers in these fields.

The list below is sorted alphabetically.
<VPTeamMembers size="small" :members />

::: warning Want to contribute?

We known programming can be confusing. We will try to cover a wide range of important concepts in a clear and concise way, so you can focus on what matters most. However, this book is a collaborative effort, and we welcome contributions from the community. If you have suggestions or improvements, [please let us know](https://github.com/gonzalezgarcia/programmingCogNeuro_book/issues/new/choose)!

:::

::: details License information

The information provided in this book is provided "as-is" without any guarantees or warranties, express or implied, regarding its completeness, accuracy, or reliability. While we strive to keep the content accurate and up-to-date, errors and omissions may occur. Use this information at your own risk, and please verify any critical details independently. We welcome feedback and corrections to improve the accuracy of the content.

The resources listed here are Open Educational Resources (OER) that are free to use, share, copy, and edit, with attribution, following the terms of the specified license.

Please contact [Carlos González](https://ugr.es/~cgonzalez) for any inquiry.

:::