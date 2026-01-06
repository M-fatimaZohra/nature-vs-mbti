# Data Model: MBTI Perspectives on Nature

## MBTIPerspective
- id: string (unique identifier for the MBTI type, e.g. "INFP")
- type: string (the MBTI type code: INFP, INTJ, etc.)
- name: string (full name of the type: "Mediator", "Architect", etc.)
- category: string (Analyst, Diplomat, Sentinel, Explorer)
- perspective: string (the nature perspective description)
- emotionalTone: string (calming, exploratory, structured, etc.)
- colorTheme: string (primary color associated with this type)

## MBTICategory
- id: string (unique identifier for the category: "Analysts", "Diplomats", etc.)
- name: string (category name: Analysts, Diplomats, Sentinels, Explorers)
- description: string (brief description of the category's general approach to nature)
- types: array[MBTIPerspective] (list of MBTI types in this category)
- colorTheme: string (primary color for the category)

## PageStructure
- header: object (title and introduction to MBTI and nature connection)
- categorySections: array[MBTICategory] (organized sections for each MBTI category)
- mbtiGrid: array[MBTIPerspective] (grid of all 16 MBTI types)
- reflectionSection: object (section for user reflection)
- footer: object (additional resources or information)