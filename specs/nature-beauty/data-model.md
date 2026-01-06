# Data Model: Nature and Its Beauty

## NatureSection
- id: string (unique identifier for the section)
- title: string (display name: Forest, Ocean, Mountain, Sky)
- description: string (poetic, calming description of the nature type)
- colorTheme: string (primary color associated with this nature type)
- imageUrl: string (optional path to nature image)

## ContentPiece
- id: string (unique identifier for the content)
- text: string (calming, reflective language)
- emotionalTone: string (peaceful, serene, majestic, etc.)
- associatedSection: string (link to NatureSection.id)

## PageStructure
- header: object (title and navigation)
- heroSection: object (quote about nature)
- natureSections: array[NatureSection] (the four main nature sections)
- footer: object (reflective message)