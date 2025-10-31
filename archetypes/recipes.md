---
layout: recipe
date: {{ .Date }}
draft: true
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
tags:
  - ""

# You have two ways to structure your ingredients.

# Option 1: A simple list of ingredients.
ingredients:
- "Ingredient 1"
- "Ingredient 2"

# Option 2: Ingredients grouped with headings (like in your Zürcher Geschnetzeltes recipe).
# To use this, comment out or remove Option 1 above and uncomment the section below.
# ingredients:
# -
#   heading: "For the first part"
#   items:
#     - "Ingredient A"
#     - "Ingredient B"
# -
#   heading: "For the second part"
#   items:
#     - "Ingredient C"
#     - "Ingredient D"

directions:
- "Step 1"
- "Step 2"
---

A brief description of the recipe can go here. This content will be rendered below the recipe details on the page.
