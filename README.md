# INHA University GPA Calculator

A simple responsive web application for calculating semester GPA for INHA University students.

The application allows students to select their faculty or program and semester, view the corresponding courses with credits and course types, choose grades for each course, and automatically calculate the semester GPA based on weighted credits.

## Features

- Select faculty/program and semester
- Display semester courses automatically
- Show course name, credit value, and course type
- Select grades for each course
- Automatic semester GPA calculation
- Display total graded credits
- Display total semester credits
- Display total number of courses
- INHA-style blue and white interface
- University logo included
- Responsive layout for desktop and mobile devices

## How GPA Is Calculated

The semester GPA is calculated using weighted credits:

text GPA = Σ(grade point × course credit) / Σ(graded credits) 

Only courses with selected grades are included in the GPA calculation.

## Grade Scale

The calculator uses a standard grade point system.

Example:

| Grade | Point |
|------|-------|
| A+ | 4.5 |
| A | 4.0 |
| B+ | 3.5 |
| B | 3.0 |
| C+ | 2.5 |
| C | 2.0 |
| D+ | 1.5 |
| D | 1.0 |
| F | 0.0 |

You can update the grade scale in the source code if your university uses a different grading policy.

## Project Structure

text inha-gpa-calculator/ │ ├── index.html ├── style.css ├── script.js ├── assets/ │   └── logo.png └── README.md 

## Technologies Used

- HTML
- CSS
- JavaScript

No backend or database is required. The project runs entirely in the browser.

## Getting Started

### 1. Clone the repository

bash git clone https://github.com/your-username/inha-gpa-calculator.git 

### 2. Open the project folder

bash cd inha-gpa-calculator 

### 3. Run the application

Open index.html in your browser.

Alternatively, you can use a local development server, for example with VS Code Live Server.

## Usage

1. Select your faculty or program.
2. Choose the semester.
3. The list of courses for that semester will appear.
4. Select a grade for each course.
5. The GPA and semester statistics will be calculated automatically.

## Customization

You can customize the project by editing:

- Course data
- Faculty/program list
- Semester structure
- Grade scale
- University logo
- Theme colors
- Layout and design

Course and grade data are stored directly in the JavaScript file, so the application can be easily modified without using a database.

## Screenshots

Add screenshots of the application here.

text assets/screenshot-home.png assets/screenshot-calculation.png 

Example:

markdown ![Home Page](assets/screenshot-home.png) ![GPA Calculation](assets/screenshot-calculation.png) 

## Future Improvements

Possible improvements include:

- Cumulative GPA calculation
- Save selected grades in local storage
- Export GPA results as PDF
- Add more faculties and semester plans
- Add dark mode
- Add multilingual support
- Improve accessibility

## License

This project is open-source and available under the MIT License.

## Author

Created by [Your Name].

## Disclaimer

This GPA calculator is an unofficial tool created for educational purposes. It may not fully represent the official GPA calculation rules of INHA University. Always verify your GPA with the official university academic system.
