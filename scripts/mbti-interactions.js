// MBTI Nature Perspectives Rendering Logic
// Generates UI elements programmatically from MBTI data

document.addEventListener('DOMContentLoaded', function() {
    // Render MBTI cards in a grid
    renderMBTIGrid();

    // Render categories with grouped MBTI types
    renderCategories();

    // Add any additional interactive features
    initializeInteractions();
});

// Function to render all MBTI types in a grid
function renderMBTIGrid() {
    const gridContainer = document.getElementById('mbti-grid');
    if (!gridContainer) return;

    // Clear existing content
    gridContainer.innerHTML = '';

    // Generate a card for each MBTI type
    mbtiData.forEach(personality => {
        const card = createMBTICard(personality);
        gridContainer.appendChild(card);
    });
}

// Function to render categories with grouped MBTI types
function renderCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Create a section for each category
    Object.keys(mbtiByCategory).forEach(categoryName => {
        const category = {
            name: categoryName,
            types: mbtiByCategory[categoryName]
        };

        const categorySection = createCategorySection(category);
        container.appendChild(categorySection);
    });
}

// Function to create an individual MBTI card
function createMBTICard(personality) {
    const card = document.createElement('div');
    card.className = 'mbti-card';
    card.setAttribute('data-type', personality.type);
    card.setAttribute('data-category', personality.category);

    // Set the background color based on the personality type
    card.style.backgroundColor = personality.colorTheme + '15'; // Add opacity
    card.style.borderColor = personality.colorTheme;

    card.innerHTML = `
        <h3 class="mbti-type">${personality.type}</h3>
        <h4 class="mbti-name">${personality.name}</h4>
        <h5 class="perspective">${personality.perspective}</h5>
        <p class="description">${personality.description}</p>
        <span class="category-tag">${personality.category}</span>
    `;

    return card;
}

// Function to create a category section
function createCategorySection(category) {
    const section = document.createElement('div');
    section.className = 'category-section';

    const header = document.createElement('h3');
    header.className = 'category-header';
    header.textContent = category.name;
    section.appendChild(header);

    const categoryGrid = document.createElement('div');
    categoryGrid.className = 'category-grid';

    category.types.forEach(personality => {
        const card = createMBTICard(personality);
        categoryGrid.appendChild(card);
    });

    section.appendChild(categoryGrid);

    return section;
}

// Function to initialize additional interactions
function initializeInteractions() {
    // Add filter functionality by category
    addCategoryFilter();

    // Add search functionality
    addSearchFunctionality();
}

// Function to add category filtering
function addCategoryFilter() {
    // This could be expanded to add actual filtering UI
    console.log('Category filtering functionality initialized');
}

// Function to add search functionality
function addSearchFunctionality() {
    // This could be expanded to add search UI
    console.log('Search functionality initialized');
}

// Export functions if needed for testing or other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderMBTIGrid,
        renderCategories,
        createMBTICard,
        createCategorySection,
        initializeInteractions
    };
}