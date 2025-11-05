// Regex content - loaded from external JSON file
let regexContent = {};

// Load regex data from external file
async function loadRegexData() {
    try {
        const response = await fetch('regex-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        regexContent = await response.json();
        return true;
    } catch (error) {
        console.error('Error loading regex data:', error);
        alert('Failed to load regex data. Please make sure regex-data.json is available.');
        return false;
    }
}

// State management
let currentDay = 1;
let currentLanguage = 'javascript';
let openedDoors = JSON.parse(localStorage.getItem('openedDoors') || '[]');

// Initialize the calendar
function initCalendar() {
    const grid = document.querySelector('.calendar-grid');

    for (let day = 1; day <= 24; day++) {
        const door = createDoor(day);
        grid.appendChild(door);
    }

    // Modal controls
    setupModal();
}

// Create a door element
function createDoor(day) {
    const door = document.createElement('div');
    door.className = 'door';
    door.dataset.day = day;

    const doorNumber = document.createElement('div');
    doorNumber.className = 'door-number';
    doorNumber.textContent = day;

    const doorIcon = document.createElement('div');
    doorIcon.className = 'door-icon';

    door.appendChild(doorNumber);
    door.appendChild(doorIcon);

    // Check if door should be locked or opened
    const isUnlocked = isDoorUnlocked(day);
    const isOpened = openedDoors.includes(day);

    if (!isUnlocked) {
        door.classList.add('locked');
    } else if (isOpened) {
        door.classList.add('opened');
    }

    // Add click handler
    door.addEventListener('click', () => handleDoorClick(day, door));

    return door;
}

// Check if a door should be unlocked based on date
function isDoorUnlocked(day) {
    // For testing: unlock all doors
    // Remove this and uncomment below for production
    return true;

    // Production code:
    // const now = new Date();
    // const currentMonth = now.getMonth() + 1; // 1-12
    // const currentDate = now.getDate();
    //
    // // Only unlock in December
    // if (currentMonth !== 12) return false;
    //
    // // Check if current date >= door number
    // return currentDate >= day;
}

// Handle door click
function handleDoorClick(day, doorElement) {
    if (doorElement.classList.contains('locked')) {
        alert('This door is locked! Come back on December ' + day + 'th.');
        return;
    }

    // Mark as opened
    if (!openedDoors.includes(day)) {
        openedDoors.push(day);
        localStorage.setItem('openedDoors', JSON.stringify(openedDoors));
        doorElement.classList.add('opened');
    }

    // Show content
    showRegexContent(day);
}

// Display regex content in modal
function showRegexContent(day) {
    currentDay = day;
    const content = regexContent[day];

    document.getElementById('modal-title').textContent = `Day ${day}`;
    document.getElementById('regex-title').textContent = content.title;
    document.getElementById('regex-pattern').textContent = content.pattern;
    document.getElementById('regex-description').innerHTML = content.description;

    // Show code example for current language
    updateCodeExample();

    // Clear test result
    document.getElementById('test-result').textContent = '';
    document.getElementById('test-result').className = '';
    document.getElementById('test-string').value = '';

    // Show modal
    document.getElementById('modal').style.display = 'block';
}

// Update code example based on selected language
function updateCodeExample() {
    const content = regexContent[currentDay];
    const example = content.examples[currentLanguage];

    const codeBlock = document.getElementById('code-example');
    codeBlock.innerHTML = `<pre>${escapeHtml(example)}</pre>`;
}

// Setup modal controls
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLanguage = btn.dataset.lang;
            updateCodeExample();
        });
    });

    // Test button
    document.getElementById('test-btn').addEventListener('click', testRegex);

    // Allow Enter key to test
    document.getElementById('test-string').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            testRegex();
        }
    });
}

// Test regex against user input
function testRegex() {
    const content = regexContent[currentDay];
    const testString = document.getElementById('test-string').value;
    const resultDiv = document.getElementById('test-result');

    if (!testString) {
        resultDiv.textContent = 'Please enter some text to test.';
        resultDiv.className = 'error';
        return;
    }

    try {
        const regex = new RegExp(content.pattern);
        const match = testString.match(regex);

        if (match) {
            resultDiv.className = 'success';
            resultDiv.innerHTML = `
                <strong>✓ Match found!</strong><br>
                Full match: "${match[0]}"<br>
                ${match.length > 1 ? `Captured groups: ${match.slice(1).map((g, i) => `Group ${i + 1}: "${g}"`).join(', ')}` : ''}
            `;
        } else {
            resultDiv.className = 'error';
            resultDiv.textContent = '✗ No match found.';
        }
    } catch (error) {
        resultDiv.className = 'error';
        resultDiv.textContent = 'Error: ' + error.message;
    }
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize when DOM is loaded and data is fetched
document.addEventListener('DOMContentLoaded', async () => {
    const dataLoaded = await loadRegexData();
    if (dataLoaded) {
        initCalendar();
    }
});
