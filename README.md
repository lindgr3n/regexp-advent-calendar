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
2. **Phone Numbers** - US phone number formats
3. **URL Validation** - HTTP/HTTPS URLs
4. **Date Format** - ISO 8601 dates (YYYY-MM-DD)
5. **Hex Colors** - Hexadecimal color codes
6. **Username Validation** - Alphanumeric usernames
7. **IPv4 Addresses** - Valid IP address ranges
8. **Password Strength** - Strong password requirements
9. **Credit Card Numbers** - Major card formats
10. **HTML Tags** - Extract HTML elements
11. **Time Format** - 24-hour time
12. **ZIP Codes** - US postal codes
13. **Social Security Numbers** - SSN format with validation
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

### Running Locally

1. Clone this repository
2. Open `index.html` in your web browser
3. Start exploring regex patterns!

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
├── script.js           # Logic and regex content
└── README.md           # This file
```

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

Want to add your own regex patterns? Edit the `regexContent` object in `script.js`:

```javascript
const regexContent = {
    1: {
        title: "Your Pattern Name",
        pattern: "your-regex-pattern-here",
        description: `<p>HTML description</p>`,
        examples: {
            javascript: "// Your JS example",
            python: "# Your Python example",
            // ... other languages
        }
    },
    // ... more days
};
```

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
