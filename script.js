// Regex content for each day
const regexContent = {
    1: {
        title: "Email Validation",
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        description: `
            <p>A basic email validation pattern that checks for common email formats.</p>
            <ul>
                <li><code>^</code> - Start of string</li>
                <li><code>[a-zA-Z0-9._%+-]+</code> - One or more valid characters before @</li>
                <li><code>@</code> - Literal @ symbol</li>
                <li><code>[a-zA-Z0-9.-]+</code> - Domain name</li>
                <li><code>\\.</code> - Literal dot</li>
                <li><code>[a-zA-Z]{2,}</code> - Top-level domain (2+ letters)</li>
                <li><code>$</code> - End of string</li>
            </ul>
        `,
        examples: {
            javascript: `const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

const email = "user@example.com";
console.log(emailRegex.test(email)); // true

const invalidEmail = "invalid@email";
console.log(emailRegex.test(invalidEmail)); // false`,

            python: `import re

email_regex = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"

email = "user@example.com"
print(bool(re.match(email_regex, email)))  # True

invalid_email = "invalid@email"
print(bool(re.match(email_regex, invalid_email)))  # False`,

            java: `import java.util.regex.*;

String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$";
Pattern pattern = Pattern.compile(emailRegex);

String email = "user@example.com";
Matcher matcher = pattern.matcher(email);
System.out.println(matcher.matches()); // true`,

            php: `<?php
$emailRegex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/";

$email = "user@example.com";
echo preg_match($emailRegex, $email); // 1 (true)

$invalidEmail = "invalid@email";
echo preg_match($emailRegex, $invalidEmail); // 0 (false)
?>`,

            ruby: `email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

email = "user@example.com"
puts email.match?(email_regex)  # true

invalid_email = "invalid@email"
puts invalid_email.match?(email_regex)  # false`
        }
    },
    2: {
        title: "Phone Number (US Format)",
        pattern: "^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$",
        description: `
            <p>Matches US phone numbers in various formats.</p>
            <ul>
                <li><code>\\(?\\d{3}\\)?</code> - Area code with optional parentheses</li>
                <li><code>[\\s.-]?</code> - Optional separator (space, dot, or dash)</li>
                <li><code>\\d{3}</code> - First 3 digits</li>
                <li><code>\\d{4}</code> - Last 4 digits</li>
            </ul>
            <p>Matches: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890</p>
        `,
        examples: {
            javascript: `const phoneRegex = /^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$/;

console.log(phoneRegex.test("(123) 456-7890")); // true
console.log(phoneRegex.test("123-456-7890")); // true
console.log(phoneRegex.test("1234567890")); // true`,

            python: `import re

phone_regex = r"^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$"

print(bool(re.match(phone_regex, "(123) 456-7890")))  # True
print(bool(re.match(phone_regex, "123-456-7890")))  # True`,

            java: `String phoneRegex = "^\\\\(?\\\\d{3}\\\\)?[\\\\s.-]?\\\\d{3}[\\\\s.-]?\\\\d{4}$";
Pattern pattern = Pattern.compile(phoneRegex);

System.out.println(pattern.matcher("(123) 456-7890").matches()); // true
System.out.println(pattern.matcher("123-456-7890").matches()); // true`,

            php: `<?php
$phoneRegex = "/^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$/";

echo preg_match($phoneRegex, "(123) 456-7890"); // 1
echo preg_match($phoneRegex, "123-456-7890"); // 1
?>`,

            ruby: `phone_regex = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

puts "(123) 456-7890".match?(phone_regex)  # true
puts "123-456-7890".match?(phone_regex)  # true`
        }
    },
    3: {
        title: "URL Validation",
        pattern: "^(https?:\\/\\/)([\\w\\d-]+\\.)+[\\w\\d-]+(\\/[^\\s]*)?$",
        description: `
            <p>Validates HTTP and HTTPS URLs.</p>
            <ul>
                <li><code>https?</code> - HTTP or HTTPS (s is optional)</li>
                <li><code>:\\/\\/</code> - Protocol separator</li>
                <li><code>([\\w\\d-]+\\.)+</code> - Domain parts (can have multiple)</li>
                <li><code>[\\w\\d-]+</code> - Top-level domain</li>
                <li><code>(\\/[^\\s]*)?</code> - Optional path</li>
            </ul>
        `,
        examples: {
            javascript: `const urlRegex = /^(https?:\\/\\/)([\\w\\d-]+\\.)+[\\w\\d-]+(\\/[^\\s]*)?$/;

console.log(urlRegex.test("https://example.com")); // true
console.log(urlRegex.test("http://subdomain.example.com/path")); // true
console.log(urlRegex.test("ftp://example.com")); // false`,

            python: `import re

url_regex = r"^(https?://)([\\w\\d-]+\\.)+[\\w\\d-]+(/[^\\s]*)?$"

print(bool(re.match(url_regex, "https://example.com")))  # True
print(bool(re.match(url_regex, "ftp://example.com")))  # False`,

            java: `String urlRegex = "^(https?://)([\\\\w\\\\d-]+\\\\.)+[\\\\w\\\\d-]+(/[^\\\\s]*)?$";
Pattern pattern = Pattern.compile(urlRegex);

System.out.println(pattern.matcher("https://example.com").matches()); // true`,

            php: `<?php
$urlRegex = "/^(https?:\\/\\/)([\\w\\d-]+\\.)+[\\w\\d-]+(\\/[^\\s]*)?$/";

echo preg_match($urlRegex, "https://example.com"); // 1
?>`,

            ruby: `url_regex = /^(https?:\/\/)([\w\d-]+\.)+[\w\d-]+(\/[^\s]*)?$/

puts "https://example.com".match?(url_regex)  # true`
        }
    },
    4: {
        title: "Date Format (YYYY-MM-DD)",
        pattern: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$",
        description: `
            <p>Matches ISO 8601 date format.</p>
            <ul>
                <li><code>\\d{4}</code> - Year (4 digits)</li>
                <li><code>(0[1-9]|1[0-2])</code> - Month (01-12)</li>
                <li><code>(0[1-9]|[12]\\d|3[01])</code> - Day (01-31)</li>
            </ul>
            <p>Note: This doesn't validate actual calendar dates (e.g., Feb 30 would match)</p>
        `,
        examples: {
            javascript: `const dateRegex = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;

console.log(dateRegex.test("2024-12-25")); // true
console.log(dateRegex.test("2024-01-01")); // true
console.log(dateRegex.test("2024-13-01")); // false`,

            python: `import re

date_regex = r"^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$"

print(bool(re.match(date_regex, "2024-12-25")))  # True
print(bool(re.match(date_regex, "2024-13-01")))  # False`,

            java: `String dateRegex = "^\\\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\\\d|3[01])$";
Pattern pattern = Pattern.compile(dateRegex);

System.out.println(pattern.matcher("2024-12-25").matches()); // true`,

            php: `<?php
$dateRegex = "/^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/";

echo preg_match($dateRegex, "2024-12-25"); // 1
?>`,

            ruby: `date_regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

puts "2024-12-25".match?(date_regex)  # true`
        }
    },
    5: {
        title: "Hexadecimal Color Code",
        pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        description: `
            <p>Matches hex color codes in both 3 and 6 digit formats.</p>
            <ul>
                <li><code>#</code> - Hash symbol</li>
                <li><code>([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})</code> - Either 6 or 3 hex digits</li>
            </ul>
            <p>Matches: #FFF, #FFFFFF, #a1b2c3</p>
        `,
        examples: {
            javascript: `const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

console.log(hexRegex.test("#FFF")); // true
console.log(hexRegex.test("#FFFFFF")); // true
console.log(hexRegex.test("#a1b2c3")); // true
console.log(hexRegex.test("#GGGGGG")); // false`,

            python: `import re

hex_regex = r"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"

print(bool(re.match(hex_regex, "#FFF")))  # True
print(bool(re.match(hex_regex, "#FFFFFF")))  # True
print(bool(re.match(hex_regex, "#GGGGGG")))  # False`,

            java: `String hexRegex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
Pattern pattern = Pattern.compile(hexRegex);

System.out.println(pattern.matcher("#FFF").matches()); // true
System.out.println(pattern.matcher("#FFFFFF").matches()); // true`,

            php: `<?php
$hexRegex = "/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/";

echo preg_match($hexRegex, "#FFF"); // 1
echo preg_match($hexRegex, "#FFFFFF"); // 1
?>`,

            ruby: `hex_regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

puts "#FFF".match?(hex_regex)  # true
puts "#FFFFFF".match?(hex_regex)  # true`
        }
    },
    6: {
        title: "Username Validation",
        pattern: "^[a-zA-Z0-9_-]{3,16}$",
        description: `
            <p>Validates usernames with specific requirements.</p>
            <ul>
                <li><code>[a-zA-Z0-9_-]</code> - Allowed characters: letters, numbers, underscore, hyphen</li>
                <li><code>{3,16}</code> - Length between 3 and 16 characters</li>
            </ul>
        `,
        examples: {
            javascript: `const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

console.log(usernameRegex.test("john_doe")); // true
console.log(usernameRegex.test("user123")); // true
console.log(usernameRegex.test("ab")); // false (too short)
console.log(usernameRegex.test("user@name")); // false (invalid char)`,

            python: `import re

username_regex = r"^[a-zA-Z0-9_-]{3,16}$"

print(bool(re.match(username_regex, "john_doe")))  # True
print(bool(re.match(username_regex, "ab")))  # False`,

            java: `String usernameRegex = "^[a-zA-Z0-9_-]{3,16}$";
Pattern pattern = Pattern.compile(usernameRegex);

System.out.println(pattern.matcher("john_doe").matches()); // true
System.out.println(pattern.matcher("ab").matches()); // false`,

            php: `<?php
$usernameRegex = "/^[a-zA-Z0-9_-]{3,16}$/";

echo preg_match($usernameRegex, "john_doe"); // 1
echo preg_match($usernameRegex, "ab"); // 0
?>`,

            ruby: `username_regex = /^[a-zA-Z0-9_-]{3,16}$/

puts "john_doe".match?(username_regex)  # true
puts "ab".match?(username_regex)  # false`
        }
    },
    7: {
        title: "IP Address (IPv4)",
        pattern: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
        description: `
            <p>Validates IPv4 addresses with proper range checking.</p>
            <ul>
                <li><code>25[0-5]</code> - 250-255</li>
                <li><code>2[0-4][0-9]</code> - 200-249</li>
                <li><code>[01]?[0-9][0-9]?</code> - 0-199</li>
                <li>Each octet must be 0-255</li>
            </ul>
        `,
        examples: {
            javascript: `const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

console.log(ipRegex.test("192.168.1.1")); // true
console.log(ipRegex.test("255.255.255.255")); // true
console.log(ipRegex.test("256.1.1.1")); // false`,

            python: `import re

ip_regex = r"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"

print(bool(re.match(ip_regex, "192.168.1.1")))  # True
print(bool(re.match(ip_regex, "256.1.1.1")))  # False`,

            java: `String ipRegex = "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
Pattern pattern = Pattern.compile(ipRegex);

System.out.println(pattern.matcher("192.168.1.1").matches()); // true`,

            php: `<?php
$ipRegex = "/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";

echo preg_match($ipRegex, "192.168.1.1"); // 1
?>`,

            ruby: `ip_regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

puts "192.168.1.1".match?(ip_regex)  # true`
        }
    },
    8: {
        title: "Password Strength",
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        description: `
            <p>Validates strong passwords with multiple requirements.</p>
            <ul>
                <li><code>(?=.*[a-z])</code> - At least one lowercase letter</li>
                <li><code>(?=.*[A-Z])</code> - At least one uppercase letter</li>
                <li><code>(?=.*\\d)</code> - At least one digit</li>
                <li><code>(?=.*[@$!%*?&])</code> - At least one special character</li>
                <li><code>{8,}</code> - Minimum 8 characters</li>
            </ul>
        `,
        examples: {
            javascript: `const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

console.log(passwordRegex.test("Password123!")); // true
console.log(passwordRegex.test("weakpass")); // false
console.log(passwordRegex.test("NoSpecial1")); // false`,

            python: `import re

password_regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"

print(bool(re.match(password_regex, "Password123!")))  # True
print(bool(re.match(password_regex, "weakpass")))  # False`,

            java: `String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@$!%*?&])[A-Za-z\\\\d@$!%*?&]{8,}$";
Pattern pattern = Pattern.compile(passwordRegex);

System.out.println(pattern.matcher("Password123!").matches()); // true`,

            php: `<?php
$passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/";

echo preg_match($passwordRegex, "Password123!"); // 1
?>`,

            ruby: `password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

puts "Password123!".match?(password_regex)  # true`
        }
    },
    9: {
        title: "Credit Card Number",
        pattern: "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$",
        description: `
            <p>Validates major credit card formats.</p>
            <ul>
                <li><code>4[0-9]{12}(?:[0-9]{3})?</code> - Visa (13 or 16 digits, starts with 4)</li>
                <li><code>5[1-5][0-9]{14}</code> - Mastercard (16 digits, starts with 51-55)</li>
                <li><code>3[47][0-9]{13}</code> - Amex (15 digits, starts with 34 or 37)</li>
            </ul>
            <p>Note: This only checks format, not validity via Luhn algorithm</p>
        `,
        examples: {
            javascript: `const ccRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;

console.log(ccRegex.test("4532015112830366")); // true (Visa format)
console.log(ccRegex.test("5425233430109903")); // true (Mastercard format)
console.log(ccRegex.test("1234567890123456")); // false`,

            python: `import re

cc_regex = r"^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$"

print(bool(re.match(cc_regex, "4532015112830366")))  # True
print(bool(re.match(cc_regex, "1234567890123456")))  # False`,

            java: `String ccRegex = "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$";
Pattern pattern = Pattern.compile(ccRegex);

System.out.println(pattern.matcher("4532015112830366").matches()); // true`,

            php: `<?php
$ccRegex = "/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/";

echo preg_match($ccRegex, "4532015112830366"); // 1
?>`,

            ruby: `cc_regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/

puts "4532015112830366".match?(cc_regex)  # true`
        }
    },
    10: {
        title: "HTML Tag Extraction",
        pattern: "<([a-z]+)([^<]+)*(?:>(.*)<\\/\\1>|\\s+\\/>)",
        description: `
            <p>Matches and extracts HTML tags.</p>
            <ul>
                <li><code>&lt;([a-z]+)</code> - Opening tag name (captured)</li>
                <li><code>([^&lt;]+)*</code> - Attributes</li>
                <li><code>(?:&gt;(.*)&lt;\\/\\\\1&gt;</code> - Content and closing tag (backreference)</li>
                <li><code>|\\s+\\/&gt;)</code> - Or self-closing tag</li>
            </ul>
        `,
        examples: {
            javascript: `const htmlRegex = /<([a-z]+)([^<]+)*(?:>(.*)<\\/\\1>|\\s+\\/>)/gi;

const html = "<div>Hello</div>";
const match = html.match(htmlRegex);
console.log(match); // ["<div>Hello</div>"]

const selfClosing = "<img src='test.jpg' />";
console.log(selfClosing.match(htmlRegex)); // ["<img src='test.jpg' />"]`,

            python: `import re

html_regex = r"<([a-z]+)([^<]+)*(?:>(.*)<\\/\\1>|\\s+\\/>)"

html = "<div>Hello</div>"
match = re.search(html_regex, html, re.IGNORECASE)
print(match.group(0))  # <div>Hello</div>`,

            java: `String htmlRegex = "<([a-z]+)([^<]+)*(?:>(.*)<\\\\/\\\\1>|\\\\s+\\\\/>)";
Pattern pattern = Pattern.compile(htmlRegex, Pattern.CASE_INSENSITIVE);

String html = "<div>Hello</div>";
Matcher matcher = pattern.matcher(html);
if (matcher.find()) {
    System.out.println(matcher.group(0)); // <div>Hello</div>
}`,

            php: `<?php
$htmlRegex = "/<([a-z]+)([^<]+)*(?:>(.*)<\\/\\1>|\\s+\\/>)/i";

$html = "<div>Hello</div>";
preg_match($htmlRegex, $html, $matches);
print_r($matches[0]); // <div>Hello</div>
?>`,

            ruby: `html_regex = /<([a-z]+)([^<]+)*(?:>(.*)<\\/\\1>|\\s+\\/>)/i

html = "<div>Hello</div>"
match = html.match(html_regex)
puts match[0]  # <div>Hello</div>`
        }
    },
    11: {
        title: "Time Format (24-hour)",
        pattern: "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
        description: `
            <p>Validates 24-hour time format (HH:MM).</p>
            <ul>
                <li><code>([01]?[0-9]|2[0-3])</code> - Hours: 0-23</li>
                <li><code>:</code> - Colon separator</li>
                <li><code>[0-5][0-9]</code> - Minutes: 00-59</li>
            </ul>
        `,
        examples: {
            javascript: `const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

console.log(timeRegex.test("09:30")); // true
console.log(timeRegex.test("23:59")); // true
console.log(timeRegex.test("24:00")); // false
console.log(timeRegex.test("12:60")); // false`,

            python: `import re

time_regex = r"^([01]?[0-9]|2[0-3]):[0-5][0-9]$"

print(bool(re.match(time_regex, "09:30")))  # True
print(bool(re.match(time_regex, "24:00")))  # False`,

            java: `String timeRegex = "^([01]?[0-9]|2[0-3]):[0-5][0-9]$";
Pattern pattern = Pattern.compile(timeRegex);

System.out.println(pattern.matcher("09:30").matches()); // true
System.out.println(pattern.matcher("24:00").matches()); // false`,

            php: `<?php
$timeRegex = "/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/";

echo preg_match($timeRegex, "09:30"); // 1
echo preg_match($timeRegex, "24:00"); // 0
?>`,

            ruby: `time_regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

puts "09:30".match?(time_regex)  # true
puts "24:00".match?(time_regex)  # false`
        }
    },
    12: {
        title: "Postal Code (US ZIP)",
        pattern: "^\\d{5}(-\\d{4})?$",
        description: `
            <p>Matches US ZIP codes in both 5-digit and ZIP+4 formats.</p>
            <ul>
                <li><code>\\d{5}</code> - 5 digits</li>
                <li><code>(-\\d{4})?</code> - Optional dash and 4 more digits</li>
            </ul>
            <p>Matches: 12345, 12345-6789</p>
        `,
        examples: {
            javascript: `const zipRegex = /^\\d{5}(-\\d{4})?$/;

console.log(zipRegex.test("12345")); // true
console.log(zipRegex.test("12345-6789")); // true
console.log(zipRegex.test("1234")); // false`,

            python: `import re

zip_regex = r"^\\d{5}(-\\d{4})?$"

print(bool(re.match(zip_regex, "12345")))  # True
print(bool(re.match(zip_regex, "12345-6789")))  # True`,

            java: `String zipRegex = "^\\\\d{5}(-\\\\d{4})?$";
Pattern pattern = Pattern.compile(zipRegex);

System.out.println(pattern.matcher("12345").matches()); // true
System.out.println(pattern.matcher("12345-6789").matches()); // true`,

            php: `<?php
$zipRegex = "/^\\d{5}(-\\d{4})?$/";

echo preg_match($zipRegex, "12345"); // 1
echo preg_match($zipRegex, "12345-6789"); // 1
?>`,

            ruby: `zip_regex = /^\d{5}(-\d{4})?$/

puts "12345".match?(zip_regex)  # true
puts "12345-6789".match?(zip_regex)  # true`
        }
    },
    13: {
        title: "Social Security Number",
        pattern: "^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$",
        description: `
            <p>Validates US Social Security Numbers with format and business rules.</p>
            <ul>
                <li><code>(?!000|666)</code> - First 3 digits cannot be 000 or 666</li>
                <li><code>[0-8][0-9]{2}</code> - First 3 digits: 001-899</li>
                <li><code>(?!00)[0-9]{2}</code> - Middle 2 digits cannot be 00</li>
                <li><code>(?!0000)[0-9]{4}</code> - Last 4 digits cannot be 0000</li>
            </ul>
        `,
        examples: {
            javascript: `const ssnRegex = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

console.log(ssnRegex.test("123-45-6789")); // true
console.log(ssnRegex.test("000-45-6789")); // false
console.log(ssnRegex.test("123-00-6789")); // false`,

            python: `import re

ssn_regex = r"^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$"

print(bool(re.match(ssn_regex, "123-45-6789")))  # True
print(bool(re.match(ssn_regex, "000-45-6789")))  # False`,

            java: `String ssnRegex = "^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$";
Pattern pattern = Pattern.compile(ssnRegex);

System.out.println(pattern.matcher("123-45-6789").matches()); // true`,

            php: `<?php
$ssnRegex = "/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/";

echo preg_match($ssnRegex, "123-45-6789"); // 1
?>`,

            ruby: `ssn_regex = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/

puts "123-45-6789".match?(ssn_regex)  # true`
        }
    },
    14: {
        title: "File Path (Windows & Unix)",
        pattern: "^(?:[a-zA-Z]:\\\\|\\/)(?:[^\\\\\\/:*?\"<>|\\r\\n]+[\\\\\/])*[^\\\\\\/:*?\"<>|\\r\\n]*$",
        description: `
            <p>Matches both Windows and Unix file paths.</p>
            <ul>
                <li><code>(?:[a-zA-Z]:\\\\|\\/)</code> - Drive letter with backslash OR forward slash</li>
                <li><code>[^\\\\\\/:*?\"&lt;&gt;|\\r\\n]+</code> - Valid filename characters</li>
                <li>Excludes invalid Windows filename characters</li>
            </ul>
        `,
        examples: {
            javascript: `const pathRegex = /^(?:[a-zA-Z]:\\\\|\/)(?:[^\\\\\\/:*?"<>|\\r\\n]+[\\\\\\/])*[^\\\\\\/:*?"<>|\\r\\n]*$/;

console.log(pathRegex.test("C:\\\\Users\\\\file.txt")); // true
console.log(pathRegex.test("/home/user/file.txt")); // true
console.log(pathRegex.test("invalid*file.txt")); // false`,

            python: `import re

path_regex = r"^(?:[a-zA-Z]:\\\\|/)(?:[^\\\\/:*?\"<>|\\r\\n]+[\\\\/])*[^\\\\/:*?\"<>|\\r\\n]*$"

print(bool(re.match(path_regex, "C:\\\\Users\\\\file.txt")))  # True
print(bool(re.match(path_regex, "/home/user/file.txt")))  # True`,

            java: `String pathRegex = "^(?:[a-zA-Z]:\\\\\\\\|/)(?:[^\\\\\\\\/:*?\\\"<>|\\\\r\\\\n]+[\\\\\\\\/])*[^\\\\\\\\/:*?\\\"<>|\\\\r\\\\n]*$";
Pattern pattern = Pattern.compile(pathRegex);

System.out.println(pattern.matcher("C:\\\\Users\\\\file.txt").matches()); // true`,

            php: `<?php
$pathRegex = "/^(?:[a-zA-Z]:\\\\\\\\|\\/)(?:[^\\\\\\\\\\/:*?\"<>|\\r\\n]+[\\\\\\\\\\/])*[^\\\\\\\\\\/:*?\"<>|\\r\\n]*$/";

echo preg_match($pathRegex, "C:\\\\Users\\\\file.txt"); // 1
?>`,

            ruby: `path_regex = /^(?:[a-zA-Z]:\\\\|\\/)(?:[^\\\\\\/:*?"<>|\\r\\n]+[\\\\\\/])*[^\\\\\\/:*?"<>|\\r\\n]*$/

puts "C:\\\\Users\\\\file.txt".match?(path_regex)  # true`
        }
    },
    15: {
        title: "MAC Address",
        pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
        description: `
            <p>Validates MAC addresses in common formats.</p>
            <ul>
                <li><code>[0-9A-Fa-f]{2}</code> - Two hex digits</li>
                <li><code>[:-]</code> - Separator (colon or hyphen)</li>
                <li>Repeated 5 times, then final pair</li>
            </ul>
            <p>Matches: 00:1A:2B:3C:4D:5E, 00-1A-2B-3C-4D-5E</p>
        `,
        examples: {
            javascript: `const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

console.log(macRegex.test("00:1A:2B:3C:4D:5E")); // true
console.log(macRegex.test("00-1A-2B-3C-4D-5E")); // true
console.log(macRegex.test("00:1A:2B:3C:4D")); // false`,

            python: `import re

mac_regex = r"^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"

print(bool(re.match(mac_regex, "00:1A:2B:3C:4D:5E")))  # True
print(bool(re.match(mac_regex, "00-1A-2B-3C-4D-5E")))  # True`,

            java: `String macRegex = "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$";
Pattern pattern = Pattern.compile(macRegex);

System.out.println(pattern.matcher("00:1A:2B:3C:4D:5E").matches()); // true`,

            php: `<?php
$macRegex = "/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/";

echo preg_match($macRegex, "00:1A:2B:3C:4D:5E"); // 1
?>`,

            ruby: `mac_regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

puts "00:1A:2B:3C:4D:5E".match?(mac_regex)  # true`
        }
    },
    16: {
        title: "Markdown Link Extraction",
        pattern: "\\[([^\\]]+)\\]\\(([^\\)]+)\\)",
        description: `
            <p>Extracts Markdown-style links.</p>
            <ul>
                <li><code>\\[([^\\]]+)\\]</code> - Link text in square brackets</li>
                <li><code>\\(([^\\)]+)\\)</code> - URL in parentheses</li>
                <li>Both parts are captured for extraction</li>
            </ul>
        `,
        examples: {
            javascript: `const mdLinkRegex = /\\[([^\\]]+)\\]\\(([^\\)]+)\\)/g;

const text = "Check [Google](https://google.com) and [GitHub](https://github.com)";
const matches = [...text.matchAll(mdLinkRegex)];

matches.forEach(match => {
    console.log(\`Text: \${match[1]}, URL: \${match[2]}\`);
});`,

            python: `import re

md_link_regex = r"\\[([^\\]]+)\\]\\(([^\\)]+)\\)"

text = "Check [Google](https://google.com) and [GitHub](https://github.com)"
matches = re.findall(md_link_regex, text)

for text, url in matches:
    print(f"Text: {text}, URL: {url}")`,

            java: `String mdLinkRegex = "\\\\[([^\\\\]]+)\\\\]\\\\(([^\\\\)]+)\\\\)";
Pattern pattern = Pattern.compile(mdLinkRegex);

String text = "Check [Google](https://google.com)";
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println("Text: " + matcher.group(1) + ", URL: " + matcher.group(2));
}`,

            php: `<?php
$mdLinkRegex = "/\\[([^\\]]+)\\]\\(([^\\)]+)\\)/";

$text = "Check [Google](https://google.com)";
preg_match_all($mdLinkRegex, $text, $matches);

foreach ($matches[1] as $i => $linkText) {
    echo "Text: $linkText, URL: {$matches[2][$i]}\\n";
}
?>`,

            ruby: `md_link_regex = /\[([^\]]+)\]\(([^\)]+)\)/

text = "Check [Google](https://google.com)"
text.scan(md_link_regex) do |link_text, url|
    puts "Text: #{link_text}, URL: #{url}"
end`
        }
    },
    17: {
        title: "Whitespace Normalization",
        pattern: "\\s+",
        description: `
            <p>Matches one or more whitespace characters (spaces, tabs, newlines).</p>
            <ul>
                <li><code>\\s</code> - Any whitespace character</li>
                <li><code>+</code> - One or more occurrences</li>
            </ul>
            <p>Useful for: normalizing spaces, removing extra whitespace, splitting by whitespace</p>
        `,
        examples: {
            javascript: `const whitespaceRegex = /\\s+/g;

const text = "  Hello    world  \\n\\t  RegEx  ";
const normalized = text.trim().replace(whitespaceRegex, " ");
console.log(normalized); // "Hello world RegEx"

const words = text.trim().split(whitespaceRegex);
console.log(words); // ["Hello", "world", "RegEx"]`,

            python: `import re

whitespace_regex = r"\\s+"

text = "  Hello    world  \\n\\t  RegEx  "
normalized = re.sub(whitespace_regex, " ", text.strip())
print(normalized)  # "Hello world RegEx"

words = re.split(whitespace_regex, text.strip())
print(words)  # ["Hello", "world", "RegEx"]`,

            java: `String whitespaceRegex = "\\\\s+";

String text = "  Hello    world  \\n\\t  RegEx  ";
String normalized = text.trim().replaceAll(whitespaceRegex, " ");
System.out.println(normalized); // "Hello world RegEx"

String[] words = text.trim().split(whitespaceRegex);
System.out.println(Arrays.toString(words)); // [Hello, world, RegEx]`,

            php: `<?php
$whitespaceRegex = "/\\s+/";

$text = "  Hello    world  \\n\\t  RegEx  ";
$normalized = preg_replace($whitespaceRegex, " ", trim($text));
echo $normalized; // "Hello world RegEx"

$words = preg_split($whitespaceRegex, trim($text));
print_r($words); // Array([0] => Hello [1] => world [2] => RegEx)
?>`,

            ruby: `whitespace_regex = /\s+/

text = "  Hello    world  \n\t  RegEx  "
normalized = text.strip.gsub(whitespace_regex, " ")
puts normalized  # "Hello world RegEx"

words = text.strip.split(whitespace_regex)
puts words.inspect  # ["Hello", "world", "RegEx"]`
        }
    },
    18: {
        title: "Version Number (Semantic)",
        pattern: "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
        description: `
            <p>Validates Semantic Versioning (SemVer) format.</p>
            <ul>
                <li><code>(0|[1-9]\\d*)</code> - Major, minor, patch (no leading zeros)</li>
                <li><code>(?:-...)?</code> - Optional pre-release version</li>
                <li><code>(?:\\+...)?</code> - Optional build metadata</li>
            </ul>
            <p>Matches: 1.0.0, 2.1.3-alpha, 1.0.0-beta.1+build.123</p>
        `,
        examples: {
            javascript: `const semverRegex = /^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$/;

console.log(semverRegex.test("1.0.0")); // true
console.log(semverRegex.test("2.1.3-alpha")); // true
console.log(semverRegex.test("1.0.0-beta.1+build.123")); // true`,

            python: `import re

semver_regex = r"^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$"

print(bool(re.match(semver_regex, "1.0.0")))  # True
print(bool(re.match(semver_regex, "2.1.3-alpha")))  # True`,

            java: `String semverRegex = "^(0|[1-9]\\\\d*)\\\\.(0|[1-9]\\\\d*)\\\\.(0|[1-9]\\\\d*)(?:-((?:0|[1-9]\\\\d*|\\\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\\\.(?:0|[1-9]\\\\d*|\\\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\\\+([0-9a-zA-Z-]+(?:\\\\.[0-9a-zA-Z-]+)*))?$";
Pattern pattern = Pattern.compile(semverRegex);

System.out.println(pattern.matcher("1.0.0").matches()); // true`,

            php: `<?php
$semverRegex = "/^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$/";

echo preg_match($semverRegex, "1.0.0"); // 1
?>`,

            ruby: `semver_regex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

puts "1.0.0".match?(semver_regex)  # true`
        }
    },
    19: {
        title: "Extracting Numbers",
        pattern: "-?\\d+\\.?\\d*",
        description: `
            <p>Matches decimal numbers including negatives.</p>
            <ul>
                <li><code>-?</code> - Optional minus sign</li>
                <li><code>\\d+</code> - One or more digits</li>
                <li><code>\\.?</code> - Optional decimal point</li>
                <li><code>\\d*</code> - Zero or more decimal digits</li>
            </ul>
            <p>Matches: 42, -17, 3.14, -0.5</p>
        `,
        examples: {
            javascript: `const numberRegex = /-?\\d+\\.?\\d*/g;

const text = "Temperature: -5.5°C, Price: $29.99, Quantity: 42";
const numbers = text.match(numberRegex);
console.log(numbers); // ["-5.5", "29.99", "42"]

const sum = numbers.reduce((acc, n) => acc + parseFloat(n), 0);
console.log(sum); // 66.49`,

            python: `import re

number_regex = r"-?\\d+\\.?\\d*"

text = "Temperature: -5.5°C, Price: $29.99, Quantity: 42"
numbers = re.findall(number_regex, text)
print(numbers)  # ['-5.5', '29.99', '42']

total = sum(float(n) for n in numbers)
print(total)  # 66.49`,

            java: `String numberRegex = "-?\\\\d+\\\\.?\\\\d*";
Pattern pattern = Pattern.compile(numberRegex);

String text = "Temperature: -5.5°C, Price: $29.99, Quantity: 42";
Matcher matcher = pattern.matcher(text);

List<String> numbers = new ArrayList<>();
while (matcher.find()) {
    numbers.add(matcher.group());
}
System.out.println(numbers); // [-5.5, 29.99, 42]`,

            php: `<?php
$numberRegex = "/-?\\d+\\.?\\d*/";

$text = "Temperature: -5.5°C, Price: $29.99, Quantity: 42";
preg_match_all($numberRegex, $text, $matches);
print_r($matches[0]); // Array([0] => -5.5 [1] => 29.99 [2] => 42)
?>`,

            ruby: `number_regex = /-?\d+\.?\d*/

text = "Temperature: -5.5°C, Price: $29.99, Quantity: 42"
numbers = text.scan(number_regex)
puts numbers.inspect  # ["-5.5", "29.99", "42"]`
        }
    },
    20: {
        title: "Camel Case to Snake Case",
        pattern: "([a-z0-9])([A-Z])",
        description: `
            <p>Converts camelCase to snake_case.</p>
            <ul>
                <li><code>([a-z0-9])</code> - Lowercase letter or digit (captured)</li>
                <li><code>([A-Z])</code> - Uppercase letter (captured)</li>
                <li>Insert underscore between the two groups</li>
            </ul>
        `,
        examples: {
            javascript: `const camelRegex = /([a-z0-9])([A-Z])/g;

function camelToSnake(str) {
    return str.replace(camelRegex, "$1_$2").toLowerCase();
}

console.log(camelToSnake("myVariableName")); // "my_variable_name"
console.log(camelToSnake("userId")); // "user_id"
console.log(camelToSnake("HTTPResponse")); // "httpresponse"`,

            python: `import re

camel_regex = r"([a-z0-9])([A-Z])"

def camel_to_snake(text):
    return re.sub(camel_regex, r"\\1_\\2", text).lower()

print(camel_to_snake("myVariableName"))  # "my_variable_name"
print(camel_to_snake("userId"))  # "user_id"`,

            java: `String camelRegex = "([a-z0-9])([A-Z])";

public static String camelToSnake(String str) {
    return str.replaceAll(camelRegex, "$1_$2").toLowerCase();
}

System.out.println(camelToSnake("myVariableName")); // "my_variable_name"`,

            php: `<?php
$camelRegex = "/([a-z0-9])([A-Z])/";

function camelToSnake($str) {
    global $camelRegex;
    return strtolower(preg_replace($camelRegex, "$1_$2", $str));
}

echo camelToSnake("myVariableName"); // "my_variable_name"
?>`,

            ruby: `camel_regex = /([a-z0-9])([A-Z])/

def camel_to_snake(str)
    str.gsub(camel_regex, '\\1_\\2').downcase
end

puts camel_to_snake("myVariableName")  # "my_variable_name"`
        }
    },
    21: {
        title: "Remove HTML Tags",
        pattern: "<[^>]*>",
        description: `
            <p>Removes all HTML tags from text.</p>
            <ul>
                <li><code>&lt;</code> - Opening angle bracket</li>
                <li><code>[^&gt;]*</code> - Any characters except closing bracket</li>
                <li><code>&gt;</code> - Closing angle bracket</li>
            </ul>
            <p>Note: This is a simple approach; for complex HTML, use a proper parser</p>
        `,
        examples: {
            javascript: `const htmlTagRegex = /<[^>]*>/g;

const html = "<p>Hello <strong>world</strong>!</p>";
const plainText = html.replace(htmlTagRegex, "");
console.log(plainText); // "Hello world!"

const complex = "<div class='test'>Text <span>here</span></div>";
console.log(complex.replace(htmlTagRegex, "")); // "Text here"`,

            python: `import re

html_tag_regex = r"<[^>]*>"

html = "<p>Hello <strong>world</strong>!</p>"
plain_text = re.sub(html_tag_regex, "", html)
print(plain_text)  # "Hello world!"`,

            java: `String htmlTagRegex = "<[^>]*>";

String html = "<p>Hello <strong>world</strong>!</p>";
String plainText = html.replaceAll(htmlTagRegex, "");
System.out.println(plainText); // "Hello world!"`,

            php: `<?php
$htmlTagRegex = "/<[^>]*>/";

$html = "<p>Hello <strong>world</strong>!</p>";
$plainText = preg_replace($htmlTagRegex, "", $html);
echo $plainText; // "Hello world!"
?>`,

            ruby: `html_tag_regex = /<[^>]*>/

html = "<p>Hello <strong>world</strong>!</p>"
plain_text = html.gsub(html_tag_regex, "")
puts plain_text  # "Hello world!"`
        }
    },
    22: {
        title: "Duplicate Word Detection",
        pattern: "\\b(\\w+)\\s+\\1\\b",
        description: `
            <p>Finds duplicate consecutive words.</p>
            <ul>
                <li><code>\\b</code> - Word boundary</li>
                <li><code>(\\w+)</code> - Capture a word</li>
                <li><code>\\s+</code> - One or more spaces</li>
                <li><code>\\\\1</code> - Backreference to first captured group</li>
            </ul>
            <p>Finds: "the the", "is is", etc.</p>
        `,
        examples: {
            javascript: `const duplicateRegex = /\\b(\\w+)\\s+\\1\\b/gi;

const text = "This is is a test test of the the duplicate finder.";
const duplicates = text.match(duplicateRegex);
console.log(duplicates); // ["is is", "test test", "the the"]

const fixed = text.replace(duplicateRegex, "$1");
console.log(fixed); // "This is a test of the duplicate finder."`,

            python: `import re

duplicate_regex = r"\\b(\\w+)\\s+\\1\\b"

text = "This is is a test test of the the duplicate finder."
duplicates = re.findall(duplicate_regex, text, re.IGNORECASE)
print(duplicates)  # ['is', 'test', 'the']

fixed = re.sub(duplicate_regex, r"\\1", text, flags=re.IGNORECASE)
print(fixed)  # "This is a test of the duplicate finder."`,

            java: `String duplicateRegex = "\\\\b(\\\\w+)\\\\s+\\\\1\\\\b";
Pattern pattern = Pattern.compile(duplicateRegex, Pattern.CASE_INSENSITIVE);

String text = "This is is a test test of the the duplicate finder.";
Matcher matcher = pattern.matcher(text);

String fixed = matcher.replaceAll("$1");
System.out.println(fixed); // "This is a test of the duplicate finder."`,

            php: `<?php
$duplicateRegex = "/\\b(\\w+)\\s+\\1\\b/i";

$text = "This is is a test test of the the duplicate finder.";
preg_match_all($duplicateRegex, $text, $matches);
print_r($matches[0]); // Array([0] => is is [1] => test test [2] => the the)

$fixed = preg_replace($duplicateRegex, "$1", $text);
echo $fixed; // "This is a test of the duplicate finder."
?>`,

            ruby: `duplicate_regex = /\\b(\\w+)\\s+\\1\\b/i

text = "This is is a test test of the the duplicate finder."
duplicates = text.scan(duplicate_regex).flatten
puts duplicates.inspect  # ["is", "test", "the"]

fixed = text.gsub(duplicate_regex, '\\1')
puts fixed  # "This is a test of the duplicate finder."`
        }
    },
    23: {
        title: "Currency Format",
        pattern: "^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{2})?$",
        description: `
            <p>Validates currency amounts with optional dollar sign and commas.</p>
            <ul>
                <li><code>\\$?</code> - Optional dollar sign</li>
                <li><code>([0-9]{1,3},)*</code> - Thousands separated by commas</li>
                <li><code>(\\.[0-9]{2})?</code> - Optional cents (2 digits)</li>
            </ul>
            <p>Matches: $1,234.56, 1234, $1,000,000.00</p>
        `,
        examples: {
            javascript: `const currencyRegex = /^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{2})?$/;

console.log(currencyRegex.test("$1,234.56")); // true
console.log(currencyRegex.test("1234")); // true
console.log(currencyRegex.test("$1,000,000.00")); // true
console.log(currencyRegex.test("$1,23.45")); // false`,

            python: `import re

currency_regex = r"^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{2})?$"

print(bool(re.match(currency_regex, "$1,234.56")))  # True
print(bool(re.match(currency_regex, "1234")))  # True
print(bool(re.match(currency_regex, "$1,23.45")))  # False`,

            java: `String currencyRegex = "^\\\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\\\.[0-9]{2})?$";
Pattern pattern = Pattern.compile(currencyRegex);

System.out.println(pattern.matcher("$1,234.56").matches()); // true
System.out.println(pattern.matcher("$1,23.45").matches()); // false`,

            php: `<?php
$currencyRegex = "/^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{2})?$/";

echo preg_match($currencyRegex, "$1,234.56"); // 1
echo preg_match($currencyRegex, "$1,23.45"); // 0
?>`,

            ruby: `currency_regex = /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9]{2})?$/

puts "$1,234.56".match?(currency_regex)  # true
puts "$1,23.45".match?(currency_regex)  # false`
        }
    },
    24: {
        title: "Lookahead & Lookbehind",
        pattern: "(?<=@)\\w+(?=\\.com)",
        description: `
            <p>Advanced: Positive lookbehind and lookahead.</p>
            <ul>
                <li><code>(?&lt;=@)</code> - Positive lookbehind: preceded by @</li>
                <li><code>\\w+</code> - One or more word characters (the match)</li>
                <li><code>(?=\\.com)</code> - Positive lookahead: followed by .com</li>
            </ul>
            <p>From "user@example.com", extracts only "example"</p>
            <p><strong>Merry Christmas! 🎄</strong> You've completed all 24 days!</p>
        `,
        examples: {
            javascript: `const lookaroundRegex = /(?<=@)\\w+(?=\\.com)/g;

const email = "Contact: user@example.com or admin@test.com";
const domains = email.match(lookaroundRegex);
console.log(domains); // ["example", "test"]

// Without lookarounds, you'd capture @ and .com too
const simpleRegex = /@(\\w+)\\.com/g;
const matches = [...email.matchAll(simpleRegex)];
console.log(matches[0][1]); // "example"`,

            python: `import re

lookaround_regex = r"(?<=@)\\w+(?=\\.com)"

email = "Contact: user@example.com or admin@test.com"
domains = re.findall(lookaround_regex, email)
print(domains)  # ['example', 'test']

# Lookarounds don't consume characters
# So the match is just the domain name`,

            java: `String lookaroundRegex = "(?<=@)\\\\w+(?=\\\\.com)";
Pattern pattern = Pattern.compile(lookaroundRegex);

String email = "Contact: user@example.com or admin@test.com";
Matcher matcher = pattern.matcher(email);

List<String> domains = new ArrayList<>();
while (matcher.find()) {
    domains.add(matcher.group());
}
System.out.println(domains); // [example, test]`,

            php: `<?php
$lookaroundRegex = "/(?<=@)\\w+(?=\\.com)/";

$email = "Contact: user@example.com or admin@test.com";
preg_match_all($lookaroundRegex, $email, $matches);
print_r($matches[0]); // Array([0] => example [1] => test)

// Lookarounds are zero-width assertions
// They don't include @ or .com in the match
?>`,

            ruby: `lookaround_regex = /(?<=@)\w+(?=\.com)/

email = "Contact: user@example.com or admin@test.com"
domains = email.scan(lookaround_regex)
puts domains.inspect  # ["example", "test"]

# The beauty of lookarounds: they assert without consuming`
        }
    }
};

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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCalendar);
