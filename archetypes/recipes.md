---
date: {{ .Date }}
draft: true
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

# The slug is the URL segment AND the image file name: the templates resolve the
# page image as assets/images/<slug>.jpg. Give the photo exactly this file's
# name (gyoza.md -> gyoza.jpg); a missing image falls back to the placeholder
# plate and warns at build time.

# Optional: set a plain slug when the file name contains non-ASCII characters,
# e.g. koettbullar.md for the title "Köttbullar".
# slug: "koettbullar"

# Tags are optional. Use real values only: an empty tag generates an empty term
# page. Match the existing spelling of a country ("Italia", "Schweiz", "Japan").
# tags:
#   - Italia

# Ingredients: a plain list,
ingredients:
- "Ingredient 1"
- "Ingredient 2"

# ... or grouped under headings (replace `heading` / `items` for every group).
# Comment out the list above and uncomment this form:
# ingredients:
#   - heading: "Für das Geschnetzelte"
#     items:
#       - "400 g Kalbsgeschnetzeltes"
#       - "1 Zwiebel"
#   - heading: "Für die Rösti"
#     items:
#       - "ca. 800 g festkochende Kartoffeln"

# Directions: the same two options, a plain ordered list or grouped headings.
directions:
- "Step 1"
- "Step 2"
---

A brief description of the recipe goes here. This body content is rendered
below the ingredients and directions.

