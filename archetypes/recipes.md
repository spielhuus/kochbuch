---
date: {{ .Date }}
draft: true
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

# The slug is the URL segment AND the image file name: the templates resolve the
# page image as assets/images/<slug>.jpg. Give the photo exactly this file's
# name (gyoza.md -> gyoza.jpg); a missing image falls back to the placeholder
# plate and warns at build time.

# Use ASCII only in the file name (koettbullar.md, never koettbullar.md), so the
# slug, the URL and the photo name all stay plain. Set `slug` only to repair an
# existing non-ASCII file: koettbullar.md has no slug and no matching photo, so
# it renders the placeholder plate today.
# slug: "koettbullar"

# Optional escape hatch, used only when the photo cannot be renamed: an explicit
# param beats the slug lookup (partials/recipe-image.html, priority 1). Extension
# optional.
# image: "carbonara.jpg"

# Tags are optional. Use real values only: an empty tag generates an empty term
# page. Tags are free text and the term URL is the lowercased tag, so reuse the
# spelling already in the corpus: Italien (not Italia / Italy), Schweiz, Schweden.
# Add a new value only for a genuinely new axis.
# tags:
#   - Italien

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

Eine kurze Beschreibung des Rezepts steht hier. Dieser Text erscheint über den
Zutaten und der Zubereitung.



