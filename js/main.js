// js/main.js
const roadmapTemplates = {
    'ai-specialist': {
        role: 'Conversational AI Co-pilot',
        phases: [
            {
                title: 'Phase 1: AI & Digital Literacy Foundation',
                duration: 'Months 1-3',
                objective: 'Build foundational understanding of AI concepts and tools.',
                keySkills: [
                    { name: 'AI Fundamentals', category: 'Technical', description: 'Understand machine learning and NLP.' },
                    { name: 'Prompt Engineering', category: 'Technical', description: 'Craft effective AI prompts.' },
                    { name: 'Critical Thinking', category: 'Human-Edge', description: 'Evaluate AI responses.' }
                ],
                learningResources: ['Google\'s "AI for Everyone"', 'FutureSkills Prime: AI Literacy'],
                milestones: ['Complete AI literacy certification', 'Build a simple chatbot']
            }
        ],
        careerOutlook: 'High demand for human-AI collaboration roles.'
    }
};

function displayRoadmap(templateKey) {
    try {
        console.log('init running');
        const roadmapSection = document.getElementById('roadmapSection');
        const roadmapContent = document.getElementById('roadmapContent');
        if (!roadmapSection || !roadmapContent) {
            console.error('Roadmap elements not found');
            showFallback();
            return;
        }
        const template = roadmapTemplates[templateKey];
        if (!template) {
            console.error('Roadmap template not found:', templateKey);
            showFallback();
            return;
        }
        roadmapSection.classList.remove('hidden');
        let html = `<h4 class="text-xl font-semibold mb-4">${template.role}</h4>`;
        template.phases.forEach(phase => {
            html += `
                <div class="phase-card p-6 rounded-xl mb-6 bg-gray-800">
                    <h5 class="text-lg font-semibold mb-2">${phase.title}</h5>
                    <p class="text-sm opacity-75 mb-2">Duration: ${phase.duration}</p>
                    <p class="mb-4">${phase.objective}</p>
                    <h6 class="font-medium mb-2">Key Skills</h6>
                    <ul class="list-disc list-inside mb-4">
                        ${phase.keySkills.map(skill => `<li><strong>${skill.name}</strong> (${skill.category}): ${skill.description}</li>`).join('')}
                    </ul>
                    <h6 class="font-medium mb-2">Learning Resources</h6>
                    <ul class="list-disc list-inside mb-4">
                        ${phase.learningResources.map(resource => `<li>${resource}</li>`).join('')}
                    </ul>
                    <h6 class="font-medium mb-2">Milestones</h6>
                    <ul class="list-disc list-inside">
                        ${phase.milestones.map(milestone => `<li>${milestone}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        roadmapContent.innerHTML = html;
    } catch (error) {
        console.error('Error displaying roadmap:', error);
        showFallback();
    }
}

function showFallback() {
    const fallbackContent = document.getElementById('fallbackContent');
    if (fallbackContent) {
        fallbackContent.classList.remove('hidden');
    }
}

function init() {
    try {
        // Hide loading screen immediately for all pages
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        
        const storedData = localStorage.getItem('assessmentData');
        const selectedRoadmap = localStorage.getItem('selectedRoadmap');
        if (storedData || selectedRoadmap) {
            const assessmentData = storedData ? JSON.parse(storedData) : {};
            const templateKey = selectedRoadmap || assessmentData.careerGoal || 'ai-specialist';
            displayRoadmap(templateKey);
            localStorage.removeItem('assessmentData');
            localStorage.removeItem('selectedRoadmap');
        }
    } catch (error) {
        console.error('Error initializing:', error);
        showFallback();
        // Ensure loading screen is hidden even if there's an error
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }
}

window.addEventListener('DOMContentLoaded', init);

// ============================================================================
// RESOURCES PAGE FUNCTIONALITY
// ============================================================================

// Resource completion tracking
let completedResources = new Set(JSON.parse(localStorage.getItem('completedResources') || '[]'));
let resourceProgress = JSON.parse(localStorage.getItem('resourceProgress') || '{}');

// Initialize resource categories state
let resourceCategoryStates = JSON.parse(localStorage.getItem('resourceCategoryStates') || '{}');

// Mark resource as completed
function markAsCompleted(resourceId) {
    console.log('markAsCompleted called with:', resourceId);
    completedResources.add(resourceId);
    localStorage.setItem('completedResources', JSON.stringify([...completedResources]));
    
    // Update visual indicator - use event target or find by resource ID
    let button = event ? event.target : null;
    if (!button) {
        // Fallback: find button by resource ID
        button = document.querySelector(`[data-resource-id="${resourceId}"]`);
    }
    
    if (button) {
        button.textContent = '✅ Completed';
        button.classList.remove('btn-success');
        button.classList.add('btn-completed');
        button.disabled = true;
        console.log('Button updated for:', resourceId);
    } else {
        console.warn('Could not find button for resource:', resourceId);
    }
    
    // Update progress
    updateProgressTracker();
    
    // Show completion animation
    showCompletionFeedback(resourceId);
}

// Toggle resource category expansion
function toggleResourceCategory(categoryId) {
    console.log('🔄 toggleResourceCategory called with:', categoryId);
    
    // Visual feedback that the function was called
    document.body.style.backgroundColor = '#1a1a2e';
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 100);
    
    console.log('Available elements:', document.querySelectorAll('[id*="' + categoryId + '"]'));
    
    const content = document.getElementById(categoryId);
    const chevron = document.getElementById(categoryId + '_chevron');
    
    console.log('Found elements:', {
        content: content,
        chevron: chevron,
        contentId: categoryId,
        chevronId: categoryId + '_chevron'
    });
    
    if (!content) {
        console.error('❌ Content element not found:', categoryId);
        alert('Content element not found: ' + categoryId);
        return;
    }
    
    if (!chevron) {
        console.error('❌ Chevron element not found:', categoryId + '_chevron');
        alert('Chevron element not found: ' + categoryId + '_chevron');
        return;
    }
    
    const isExpanded = !content.classList.contains('hidden');
    console.log('Current state - isExpanded:', isExpanded);
    console.log('Content classes before:', content.classList.toString());
    console.log('Chevron classes before:', chevron.classList.toString());
    
    if (isExpanded) {
        // Collapse
        content.classList.add('hidden');
        content.classList.remove('active');
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
        resourceCategoryStates[categoryId] = false;
        console.log('✅ Collapsed:', categoryId);
    } else {
        // Expand
        content.classList.remove('hidden');
        content.classList.add('active');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
        resourceCategoryStates[categoryId] = true;
        console.log('✅ Expanded:', categoryId);
    }
    
    console.log('Content classes after:', content.classList.toString());
    console.log('Chevron classes after:', chevron.classList.toString());
    
    localStorage.setItem('resourceCategoryStates', JSON.stringify(resourceCategoryStates));
    
    // Visual confirmation
    console.log('🎉 Toggle completed for:', categoryId);
}

// Update progress tracker
function updateProgressTracker() {
    const totalResources = document.querySelectorAll('.resource-item').length;
    const completedCount = completedResources.size;
    const progressPercentage = totalResources > 0 ? Math.round((completedCount / totalResources) * 100) : 0;
    
    console.log('Progress update:', {totalResources, completedCount, progressPercentage});
    
    // Update progress bar
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar) {
        progressBar.style.width = progressPercentage + '%';
        console.log('Updated progress bar width to:', progressPercentage + '%');
    }
    
    if (progressText) {
        progressText.textContent = `${completedCount}/${totalResources} Resources Completed (${progressPercentage}%)`;
        console.log('Updated progress text');
    }
    
    // Update level and badges
    updateUserLevel(progressPercentage);
}

// Update user level based on progress
function updateUserLevel(progressPercentage) {
    const levelElement = document.querySelector('.user-level');
    if (!levelElement) return;
    
    let level = 'Beginner';
    let levelClass = 'level-beginner';
    
    if (progressPercentage >= 80) {
        level = 'Expert';
        levelClass = 'level-expert';
    } else if (progressPercentage >= 50) {
        level = 'Advanced';
        levelClass = 'level-advanced';
    } else if (progressPercentage >= 25) {
        level = 'Intermediate';
        levelClass = 'level-intermediate';
    }
    
    levelElement.textContent = level;
    levelElement.className = `user-level ${levelClass}`;
}

// Show completion feedback
function showCompletionFeedback(resourceId) {
    // Create floating notification
    const notification = document.createElement('div');
    notification.className = 'completion-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle text-green-400"></i>
            <span>Resource completed! 🎉</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate and remove
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Filter resources by category
function filterResources(category) {
    const allCategories = document.querySelectorAll('.resource-category');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active filter button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category.toLowerCase()) || category === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Show/hide categories
    allCategories.forEach(categoryElement => {
        if (category === 'all') {
            categoryElement.style.display = 'block';
        } else {
            const categoryTitle = categoryElement.querySelector('.resource-category-header span').textContent.toLowerCase();
            if (categoryTitle.includes(category.toLowerCase())) {
                categoryElement.style.display = 'block';
            } else {
                categoryElement.style.display = 'none';
            }
        }
    });
}

// Quick access navigation
function quickAccessTo(categoryId) {
    console.log('quickAccessTo called with:', categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('Scrolled to:', categoryId);
        
        // Auto-expand the category if it's collapsed
        const content = element.querySelector('.resource-category-content');
        const chevron = element.querySelector('[id$="_chevron"]');
        
        if (content && content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            if (chevron) {
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-up');
            }
            console.log('Auto-expanded:', categoryId);
        }
    } else {
        console.error('Element not found:', categoryId);
    }
}

// Initialize resources page
function initResourcesPage() {
    console.log('Initializing resources page...');
    
    try {
        // Add event listeners to all resource category headers
        const categoryHeaders = document.querySelectorAll('.resource-category-header');
        console.log('Found category headers:', categoryHeaders.length);
        
        categoryHeaders.forEach((header, index) => {
            const categoryId = header.getAttribute('onclick');
            console.log(`Header ${index} onclick:`, categoryId);
            
            if (categoryId) {
                // Extract the category ID from onclick attribute
                const match = categoryId.match(/toggleResourceCategory\('(.+?)'\)/);
                if (match) {
                    const contentId = match[1];
                    console.log(`Adding event listener to header ${index} for content: ${contentId}`);
                    
                    // Remove onclick attribute and add event listener
                    header.removeAttribute('onclick');
                    header.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('🖱️ Header clicked for:', contentId);
                        toggleResourceCategory(contentId);
                    });
                    
                    // Add visual indication that it's clickable
                    header.style.cursor = 'pointer';
                    header.style.border = '1px solid rgba(59, 130, 246, 0.3)';
                    
                    // Add a test data attribute
                    header.setAttribute('data-category-id', contentId);
                    console.log(`✅ Event listener added for: ${contentId}`);
                } else {
                    console.warn(`Could not extract category ID from: ${categoryId}`);
                }
            } else {
                console.warn(`Header ${index} has no onclick attribute`);
            }
        });
        
        // Add event listeners to quick access buttons
        const quickAccessButtons = document.querySelectorAll('[onclick*="quickAccessTo"]');
        console.log('Found quick access buttons:', quickAccessButtons.length);
        
        quickAccessButtons.forEach((button, index) => {
            const onclick = button.getAttribute('onclick');
            if (onclick) {
                const match = onclick.match(/quickAccessTo\('(.+?)'\)/);
                if (match) {
                    const targetId = match[1];
                    console.log(`Adding event listener to quick access button ${index} for: ${targetId}`);
                    
                    button.removeAttribute('onclick');
                    button.addEventListener('click', function() {
                        console.log('Quick access clicked for:', targetId);
                        quickAccessTo(targetId);
                    });
                }
            }
        });
        
        // Add event listeners to completion buttons
        const completionButtons = document.querySelectorAll('[onclick*="markAsCompleted"]');
        console.log('Found completion buttons:', completionButtons.length);
        
        completionButtons.forEach((button, index) => {
            const onclick = button.getAttribute('onclick');
            if (onclick) {
                const match = onclick.match(/markAsCompleted\('(.+?)'\)/);
                if (match) {
                    const resourceId = match[1];
                    console.log(`Adding event listener to completion button ${index} for: ${resourceId}`);
                    
                    button.removeAttribute('onclick');
                    button.addEventListener('click', function() {
                        console.log('Completion button clicked for:', resourceId);
                        markAsCompleted(resourceId);
                    });
                }
            }
        });
        
        // Restore completed resources visual state
        completedResources.forEach(resourceId => {
            const button = document.querySelector(`[data-resource-id="${resourceId}"]`);
            if (button) {
                button.textContent = '✅ Completed';
                button.classList.remove('btn-success');
                button.classList.add('btn-completed');
                button.disabled = true;
            }
        });
        console.log('Restored completed resources:', completedResources.size);
        
        // Restore category states
        Object.keys(resourceCategoryStates).forEach(categoryId => {
            const content = document.getElementById(categoryId);
            const chevron = document.getElementById(categoryId + '_chevron');
            
            if (content && chevron) {
                if (resourceCategoryStates[categoryId]) {
                    content.classList.remove('hidden');
                    chevron.classList.remove('fa-chevron-down');
                    chevron.classList.add('fa-chevron-up');
                } else {
                    content.classList.add('hidden');
                    chevron.classList.remove('fa-chevron-up');
                    chevron.classList.add('fa-chevron-down');
                }
            }
        });
        console.log('Restored category states:', Object.keys(resourceCategoryStates).length);
        
        // Update progress tracker
        updateProgressTracker();
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                const searchInput = document.querySelector('.search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        });
        
        console.log('Resources page initialization complete!');
    } catch (error) {
        console.error('Error initializing resources page:', error);
    }
}

// Search resources functionality
function searchResources(query) {
    const searchTerm = query.toLowerCase();
    const resourceItems = document.querySelectorAll('.resource-item');
    const categories = document.querySelectorAll('.resource-category');
    
    let hasVisibleResults = false;
    
    categories.forEach(category => {
        let categoryHasVisibleItems = false;
        const categoryItems = category.querySelectorAll('.resource-item');
        
        categoryItems.forEach(item => {
            const title = item.querySelector('h5').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const features = Array.from(item.querySelectorAll('li')).map(li => li.textContent.toLowerCase()).join(' ');
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || features.includes(searchTerm)) {
                item.style.display = 'block';
                categoryHasVisibleItems = true;
                hasVisibleResults = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show/hide entire category based on whether it has visible items
        if (categoryHasVisibleItems || searchTerm === '') {
            category.style.display = 'block';
            // Auto-expand category if there are search results
            if (searchTerm !== '' && categoryHasVisibleItems) {
                const content = category.querySelector('.resource-category-content');
                const chevron = category.querySelector('[id$="_chevron"]');
                if (content) {
                    content.classList.remove('hidden');
                    if (chevron) {
                        chevron.classList.remove('fa-chevron-down');
                        chevron.classList.add('fa-chevron-up');
                    }
                }
            }
        } else {
            category.style.display = 'none';
        }
    });
    
    // Show "no results" message
    const noResultsMsg = document.getElementById('no-results-message');
    if (noResultsMsg) {
        if (!hasVisibleResults && searchTerm !== '') {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing page...');
    
    // Check if we're on the resources page
    if (window.location.pathname.includes('resources.html') || window.location.pathname.endsWith('/resources.html')) {
        console.log('Resources page detected - initializing resources functionality');
        initResourcesPage();
    }
    
    // Make functions globally available for onclick handlers
    window.toggleResourceCategory = toggleResourceCategory;
    window.markAsCompleted = markAsCompleted;
    window.quickAccessTo = quickAccessTo;
    window.searchResources = searchResources;
    window.filterResources = filterResources;
    
    console.log('All functions made globally available');
});

// Test function to verify JavaScript is working
function testInteractivity() {
    console.log('🧪 Test function called - JavaScript is working!');
    alert('JavaScript is working! Now testing toggle...');
    
    // Test the toggle function directly
    console.log('🔄 Testing toggle function...');
    toggleResourceCategory('ai-tools-content');
    
    // List all available content sections
    const contentSections = document.querySelectorAll('[id$="-content"]');
    console.log('📋 Available content sections:', contentSections.length);
    contentSections.forEach((section, index) => {
        console.log(`Section ${index}: ${section.id} - hidden: ${section.classList.contains('hidden')}`);
    });
}

// Make test function available globally
window.testInteractivity = testInteractivity;