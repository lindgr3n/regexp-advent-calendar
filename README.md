# RegEx Advent Calendar 🎄

An interactive advent calendar that teaches regular expressions! Open a new door each day from December 1st to 24th to discover a new regex pattern with examples in multiple programming languages.

## Features

- **24 Days of RegEx**: Each day reveals a new regular expression pattern
- **Multi-Language Examples**: Switch between JavaScript, Python, Java, PHP, and Ruby
- **Interactive Testing**: Test each regex pattern with your own input
- **Beautiful UI**: Festive design with smooth animations
- **Progress Tracking**: Your opened doors are saved locally
- **Date-Based Unlocking**: Doors unlock on their corresponding December dates

## Regex Patterns Included

1. **Email Validation** - Validate email addresses
2. **Phone Numbers** - Swedish mobile phone formats
3. **URL Validation** - HTTP/HTTPS URLs
4. **Date Format** - ISO 8601 dates (YYYY-MM-DD)
5. **Hex Colors** - Hexadecimal color codes
6. **Username Validation** - Alphanumeric usernames
7. **IPv4 Addresses** - Valid IP address ranges
8. **Password Strength** - Strong password requirements
9. **Credit Card Numbers** - Major card formats
10. **HTML Tags** - Extract HTML elements
11. **Time Format** - 24-hour time
12. **Postal Codes** - Swedish postnummer format
13. **Personal Identity Numbers** - Swedish personnummer format
14. **File Paths** - Windows and Unix paths
15. **MAC Addresses** - Network hardware addresses
16. **Markdown Links** - Extract markdown link syntax
17. **Whitespace Normalization** - Clean up extra spaces
18. **Semantic Versioning** - SemVer format validation
19. **Number Extraction** - Extract decimal numbers
20. **Camel to Snake Case** - Case conversion
21. **HTML Tag Removal** - Strip HTML tags
22. **Duplicate Word Detection** - Find repeated words
23. **Currency Format** - Money amounts with formatting
24. **Lookahead & Lookbehind** - Advanced regex techniques

## Getting Started

### Live Demo

The calendar is automatically deployed to GitHub Pages: `https://[your-username].github.io/regexp-advent-calendar/`

### Running Locally

1. Clone this repository
2. Serve the files with a local web server (required for JSON loading)
3. Open in your web browser

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js**
```bash
npx serve
```

**Option 3: Using VS Code**
Install the "Live Server" extension and click "Go Live"

Then open `http://localhost:8000` (or the port shown) in your browser.

**Note:** Opening `index.html` directly with `file://` won't work due to CORS restrictions when loading the JSON file. You need a web server.

No build process or dependencies required - it's pure HTML, CSS, and JavaScript.

### For Development

To enable all doors for testing (without date restrictions):

In `script.js`, the function `isDoorUnlocked(day)` currently returns `true` for all doors.

For production (actual advent calendar behavior), replace the function with:

```javascript
function isDoorUnlocked(day) {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // 1-12
    const currentDate = now.getDate();

    // Only unlock in December
    if (currentMonth !== 12) return false;

    // Check if current date >= door number
    return currentDate >= day;
}
```

## File Structure

```
regexp-advent-calendar/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Application logic
├── regex-data.json     # Regex patterns and examples data
└── README.md           # This file
```

The regex content is stored separately in `regex-data.json` for easy maintenance and extensibility.

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients, animations, and responsive design
- **Vanilla JavaScript** - No frameworks or libraries
- **LocalStorage** - Progress persistence

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid
- CSS Custom Properties
- LocalStorage API

## Educational Value

Each regex pattern includes:

- **Clear Pattern Explanation** - Breaking down each component
- **Multi-Language Examples** - See how to use it in your preferred language
- **Interactive Testing** - Try it with your own strings
- **Practical Use Cases** - Real-world applications

Perfect for:
- Learning regular expressions
- Teaching regex concepts
- Daily coding practice
- Holiday-themed programming fun

## Customization

Want to add your own regex patterns? Edit the `regex-data.json` file:

```json
{
  "1": {
    "title": "Your Pattern Name",
    "pattern": "your-regex-pattern-here",
    "description": "<p>HTML description</p>",
    "examples": {
      "javascript": "// Your JS example",
      "python": "# Your Python example",
      "java": "// Your Java example",
      "php": "<?php // Your PHP example ?>",
      "ruby": "# Your Ruby example"
    }
  }
}
```

**Tips for adding patterns:**
- Remember to escape backslashes in JSON (use `\\` for a single backslash)
- Keep descriptions clear and break down each regex component
- Include working code examples for all 5 languages
- Test your patterns before adding them!

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Instructions:**

**One-time setup (do this first):**

1. **Enable GitHub Pages manually:**
   - Go to your GitHub repository
   - Click **Settings** (top menu)
   - Click **Pages** (left sidebar under "Code and automation")
   - Under **"Build and deployment"** → **"Source"**
   - Select **"GitHub Actions"** from the dropdown
   - Click **Save** (if available)
   - ✅ You should see a message: "Your site is ready to be published"

**Deploy your site:**

2. **Merge to main branch:**
   - Create a pull request from your feature branch to `main`
   - Merge the pull request
   - OR push directly to `main` if you prefer

3. **Automatic deployment:**
   - The GitHub Actions workflow will automatically run
   - Check the **Actions** tab to see deployment progress
   - Deployment typically takes 1-2 minutes
   - ✅ When done, you'll see a green checkmark

4. **Access your site:**
   - Your site will be available at: `https://[your-username].github.io/[repository-name]/`
   - Go to **Settings** → **Pages** to see the exact URL

**Manual deployment (optional):**
- Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**
- Select `main` branch and click **Run workflow**

The workflow automatically deploys on every push to `main`.

## Contributing

Feel free to:
- Add more regex patterns
- Improve explanations
- Add more programming languages
- Enhance the UI/UX
- Fix bugs

## License

MIT License - Feel free to use this for educational purposes!

## Credits

Created as a fun way to learn and teach regular expressions during the holiday season.

---

**Merry Christmas and Happy RegEx Learning! 🎄✨**
