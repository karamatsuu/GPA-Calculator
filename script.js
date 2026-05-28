const KOREAN_TERMS = [
  "1st year Fall",
  "1st year Spring",
  "2nd year Fall",
  "2nd year Spring",
  "3rd year Fall",
  "3rd year Spring",
  "4th year Fall",
  "4th year Spring"
];

const SOURCES = [
  {
    id: "ice",
    name: "ICE - Information and Communication Engineering",
    file: "ref/Curriculum ICE — INHA University in Tashkent.html",
    type: "korean"
  },
  {
    id: "cse",
    name: "CSE - Computer Science and Software Engineering",
    file: "ref/Curriculum SOCIE — INHA University in Tashkent.html",
    type: "korean"
  },
  {
    id: "sbl",
    name: "SBL - Logistics Management",
    file: "ref/Curriculum SBL — INHA University in Tashkent.html",
    type: "korean"
  },
  {
    id: "ba",
    name: "SBL - Business Administration",
    file: "ref/Curriculum BA — INHA University in Tashkent.html",
    type: "korean"
  },
  {
    id: "italy",
    name: "Italy - Computer Science",
    file: "ref/Curriculum Italy — INHA University in Tashkent.html",
    type: "italy"
  },
  {
    id: "uk",
    name: "Great Britain Programs",
    file: "ref/UK curricullum — INHA University in Tashkent.html",
    type: "uk"
  }
];

const STATIC_PROGRAMS = [
  {
    id: "uk-ai",
    name: "UK IT - Artificial Intelligence",
    terms: ["Level 3", "Level 4", "Level 5", "Level 6"],
    courses: [
      ...ukCommonItCourses(),
      course("Introduction to artificial intelligence", "", 10, "Level 4"),
      course("Programming with Python", "", 10, "Level 4"),
      course("Mathematics & Logical Reasoning / Linear Algebra", "", 10, "Level 4"),
      course("Computer Vision & Pattern Recognition", "", 10, "Level 4"),
      course("Machine Learning Fundamentals", "", 10, "Level 4"),
      course("Introduction to Data Science", "", 10, "Level 4"),
      course("Advanced Machine Learning", "", 10, "Level 5"),
      course("Deep Learning and Neural Networks", "", 10, "Level 5"),
      course("Natural Language Processing (NLP)", "", 10, "Level 5"),
      course("Robotics", "", 10, "Level 5"),
      course("Probabilistic Modelling and Reasoning", "", 10, "Level 5"),
      course("Responsible AI & Ethics", "", 10, "Level 5"),
      course("Advanced Programming for Data Science", "", 10, "Level 6"),
      course("Advanced Machine Learning and Deep Learning", "", 10, "Level 6"),
      course("Cloud Computing and Data Engineering", "", 10, "Level 6"),
      course("AI Ethics, Law, and Governance", "", 10, "Level 6"),
      course("AI Project Design and Deployment", "", 10, "Level 6"),
      course("Research Methods and AI Innovation (Diploma Work)", "", 10, "Level 6")
    ]
  },
  {
    id: "uk-data",
    name: "UK IT - Data Science",
    terms: ["Level 3", "Level 4", "Level 5", "Level 6"],
    courses: [
      ...ukCommonItCourses(),
      course("Programming with Python", "", 10, "Level 4"),
      course("Mathematics & Logical Reasoning / Linear Algebra", "", 10, "Level 4"),
      course("Database Systems", "", 10, "Level 4"),
      course("Statistical Methods for Data Science", "", 10, "Level 4"),
      course("Data Ethics and Privacy", "", 10, "Level 5"),
      course("Advanced Data Analytics", "", 10, "Level 5"),
      course("Data Mining and Big Data Analytics", "", 10, "Level 5"),
      course("Data Visualization and Communication", "", 10, "Level 5"),
      course("Professional Development in Data Science", "", 10, "Level 5"),
      course("Ethics, Governance and Data Security", "", 10, "Level 6"),
      course("Data Engineering and Big Data Technologies", "", 10, "Level 6")
    ]
  },
  {
    id: "uk-cyber",
    name: "UK IT - Cyber Security",
    terms: ["Level 3", "Level 4", "Level 5", "Level 6"],
    courses: [
      ...ukCommonItCourses(),
      course("Introduction to Cyber Security", "", 10, "Level 4"),
      course("Cyber Security Policies and Governance", "", 10, "Level 4"),
      course("Network Security", "", 10, "Level 4"),
      course("Operating System Security", "", 10, "Level 4"),
      course("Application Security", "", 10, "Level 4"),
      course("Cryptography", "", 10, "Level 4"),
      course("Advanced Network Security", "", 10, "Level 5"),
      course("Ethical Hacking and Penetration Testing", "", 10, "Level 5"),
      course("Digital Forensics and Incident Response", "", 10, "Level 5"),
      course("Malware Analysis and Reverse Engineering", "", 10, "Level 5"),
      course("Cloud Security", "", 10, "Level 5"),
      course("Capstone Project", "", 20, "Level 5"),
      course("AI and Automation in Cyber Security", "", 10, "Level 6"),
      course("Security Architecture and Enterprise Infrastructure", "", 10, "Level 6"),
      course("Cyber Threat Intelligence and Digital Forensics", "", 10, "Level 6"),
      course("Cryptographic Systems and Protocol Engineering", "", 10, "Level 6"),
      course("Cyber Security Governance, Compliance and Risk Management", "", 10, "Level 6")
    ]
  },
  {
    id: "uk-business",
    name: "UK - Business and Management",
    terms: ["Level 3", "Level 4", "Level 5", "Level 6"],
    courses: [
      course("Business English", "", 6, "Level 3"),
      course("Business communication", "", 10, "Level 3"),
      course("Introduction to marketing", "", 6, "Level 3"),
      course("Numeracy and data", "", 10, "Level 3"),
      course("Introduction to business computing", "", 6, "Level 3"),
      course("Introduction to research", "", 10, "Level 3"),
      course("Social science (The new History of Uzbekistan)", "", 10, "Level 3"),
      course("Capstone project", "", 2, "Level 3"),
      course("Introduction to Strategic Management", "", 10, "Level 4"),
      course("Principles of Marketing", "", 10, "Level 4"),
      course("Financial Management", "", 10, "Level 4"),
      course("Business Law and Ethics", "", 10, "Level 4"),
      course("Organizational Behaviour", "", 10, "Level 4"),
      course("Research Methods and Data Analysis", "", 10, "Level 4"),
      course("Strategic Planning and Implementation", "", 10, "Level 5"),
      course("International Business Management", "", 10, "Level 5"),
      course("Business Innovation and Entrepreneurship", "", 10, "Level 5"),
      course("Project Management", "", 10, "Level 5"),
      course("Leadership and Change Management", "", 10, "Level 5"),
      course("Business Research Project", "", 10, "Level 5"),
      course("Business Strategy", "", 6, "Level 6"),
      course("Contemporary Issues in Business and Management", "", 6, "Level 6"),
      course("International Human Resource Management", "", 6, "Level 6"),
      course("Leadership and Organisations", "", 6, "Level 6"),
      course("Business and Commercial Awareness", "", 6, "Level 6"),
      course("Global Marketing, Ethics, and Culture", "", 6, "Level 6"),
      course("Issues in the Global Economy", "", 6, "Level 6"),
      course("Digital Economy", "", 6, "Level 6"),
      course("Final capstone project", "", 12, "Level 6")
    ]
  }
];

const state = {
  programs: [],
  selectedProgramId: "",
  selectedTerm: "",
  grades: new Map()
};

const GRADE_OPTIONS = [
  { label: "A+", value: 4.5 },
  { label: "A", value: 4.0 },
  { label: "B+", value: 3.5 },
  { label: "B", value: 3.0 },
  { label: "C+", value: 2.5 },
  { label: "C", value: 2.0 },
  { label: "D+", value: 1.5 },
  { label: "D", value: 1.0 },
  { label: "F", value: 0.0 }
];

const CSE_ICE_CORRECTIONS = {
  "1st year Fall": [
    fixedCourse("OOP 1", 3, false, ["Object-Oriented Programming 1"]),
    fixedCourse("Calculus 1", 3, false),
    fixedCourse("Physics 1", 3, false),
    fixedCourse("Intro to IT", 3, false, ["Introduction to IT"]),
    fixedCourse("Academic English 1", 2, false),
    fixedCourse("Academic Reading", 2, false, ["Academic English Reading"]),
    fixedCourse("Physics Experiment 1", 1, false)
  ],
  "1st year Spring": [
    fixedCourse("OOP 2", 3, false, ["Object-Oriented Programming 2"]),
    fixedCourse("Calculus 2", 3, false),
    fixedCourse("Creative Engineering Design", 3, false),
    fixedCourse("Physics 2", 3, false),
    fixedCourse("Academic English 2", 2, false),
    fixedCourse("Academic Writing", 2, false, ["Technical Writing & Discussion"]),
    fixedCourse("Physics Experiment 2", 1, false)
  ],
  "2nd year Fall": [
    fixedCourse("Application Programming in Java", 3, false),
    fixedCourse("Circuit and Lab", 3, { cse: true, ice: false }),
    fixedCourse("Data Structure", 3, { cse: false, ice: true }),
    fixedCourse("Engineering Mathematics", 3, false),
    fixedCourse("Linear Algebra", 3, false),
    fixedCourse("Academic English 3", 2, true),
    fixedCourse("Basic Korean 1", { cse: 2, ice: 1 }, true)
  ],
  "2nd year Spring": [
    fixedCourse("Computer Architecture", 3, true),
    fixedCourse("Digital Logic and Circuit", 3, false, ["Digital Logic Circuit"]),
    fixedCourse("Dicrete Mathematics", 3, false, ["Discrete Mathematics"]),
    fixedCourse("System Programming", 3, false),
    fixedCourse("Academic English 4", 2, true),
    fixedCourse("Basic Korean 2", { cse: 2, ice: 1 }, true),
    fixedCourse("History of Uzbekistan", 1, false, ["The New History of Uzbekistan, Philosophy, Basics of Spirituality and Jurisprudence-1"])
  ],
  "3rd year Fall": [
    fixedCourse("Computer Algorithm", 3, false),
    fixedCourse("Database", 3, false),
    fixedCourse("Engineering Communications", 3, false),
    fixedCourse("Introduction to Economics", 3, false),
    fixedCourse("Operating System", 3, false),
    fixedCourse("System Analysis", 3, true),
    fixedCourse("History of Uzbekistan 2", 1, false, ["The New History of Uzbekistan, Philosophy, Basics of Spirituality and Jurisprudence-2"])
  ],
  "3rd year Spring": [
    fixedCourse("Computer Networks", 3, false),
    fixedCourse("Database Application and Design", 3, true, ["Database Application & Design"]),
    fixedCourse("Introduction to Business Administration", 3, false),
    fixedCourse("Probability and Statistics", 3, false),
    fixedCourse("Signals and Systems", 3, { cse: true, ice: false }),
    fixedCourse("Unix Programming", 3, true)
  ],
  "4th year Fall": [
    fixedCourse("Artificial Intelligence", 3, true),
    fixedCourse("Big Data Analytics", 3, true),
    fixedCourse("Blockchain Basics and Platforms", 3, null),
    fixedCourse("Deep Learning for Computer Vision", 3, true),
    fixedCourse("Embedded Software & Design", 3, true),
    fixedCourse("Multimedia Computing", 3, true),
    fixedCourse("Distinguished Lecture in Social Science", 2, true, ["Distinguished Lecture in Social Science and Art"])
  ],
  "4th year Spring": [
    fixedCourse("Capstone Design", 3, false),
    fixedCourse("Computer Security", 3, true),
    fixedCourse("Internet of Things", 3, true),
    fixedCourse("Mobile Programming", 3, true),
    fixedCourse("Multimedia Computing", 3, true),
    fixedCourse("Engineering Ethics", 2, false)
  ]
};

const programSelect = document.querySelector("#program-select");
const semesterSelect = document.querySelector("#semester-select");
const courseBody = document.querySelector("#course-body");
const gpaValue = document.querySelector("#gpa-value");
const gradedCredits = document.querySelector("#graded-credits");
const semesterCredits = document.querySelector("#semester-credits");
const courseCount = document.querySelector("#course-count");
const panelNote = document.querySelector("#panel-note");
const loadStatus = document.querySelector("#load-status");
const clearGradesButton = document.querySelector("#clear-grades");

function course(name, code, credits, term, optional = false) {
  return {
    name,
    code,
    credits,
    term,
    optional
  };
}

function fixedCourse(name, credits, optional, aliases = []) {
  return {
    name,
    credits,
    optional,
    aliases
  };
}

function programValue(value, programId) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[programId] ?? value.default ?? null;
  }

  return value;
}

function ukCommonItCourses() {
  return [
    course("English", "", 6, "Level 3"),
    course("Operating System", "", 10, "Level 3"),
    course("Networking and Security", "", 6, "Level 3"),
    course("Programming concepts and application development", "", 10, "Level 3"),
    course("Cloud computing and AI", "", 6, "Level 3"),
    course("Math in IT (calculus)", "", 10, "Level 3"),
    course("Social science", "", 10, "Level 3"),
    course("Capstone project", "", 2, "Level 3")
  ];
}

function normalizeText(value) {
  return value
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/[ ]+/g, " ");
}

function cleanCell(value) {
  return value
    .replace(/\*/g, "")
    .replace(/\//g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanCourseName(rawName) {
  const parts = rawName
    .split(/\t|\n/)
    .map(cleanCell)
    .filter(Boolean)
    .filter((part) => !/^(Fundamental|Sequences?|General Sequence|Major Sequence|Technical|Core|Elective|Math|Science|S\/W|Internship)$/i.test(part))
    .filter((part) => !/credits|course name|course id|mandatory|year$/i.test(part));

  return parts.at(-1) || cleanCell(rawName);
}

function parseTermCells(rawCells) {
  const cells = rawCells.split("\t").slice(1);
  return KOREAN_TERMS.filter((_, index) => /O|\(O\)/.test(cells[index] || ""));
}

function parseKoreanCurriculum(text) {
  const tableStart = text.search(/Course name/i);
  const noteStart = text.search(/The open semester/i);
  const sourceText = text.slice(tableStart > -1 ? tableStart : 0, noteStart > -1 ? noteStart : text.length);
  const lines = normalizeText(sourceText).split("\n");
  const courses = [];
  let pendingName = "";
  let pendingCode = "";
  let active = null;

  function finishActive() {
    if (!active) {
      return;
    }

    const terms = parseTermCells(active.tail);
    terms.forEach((term) => {
      courses.push(course(active.name, active.code, active.credits, term, active.optional));
    });
    active = null;
  }

  lines.forEach((line) => {
    const codeMatch = line.match(/([A-Z]{3}\d{4})\s*\t\s*(\d+(?:\.\d+)?)/);
    const codeOnlyMatch = line.trim().match(/^([A-Z]{3}\d{4})$/);
    const creditsOnlyMatch = line.trim().match(/^(\d+(?:\.\d+)?)$/);

    if (codeMatch) {
      finishActive();
      const beforeCode = line.slice(0, codeMatch.index);
      const afterCredits = line.slice(codeMatch.index + codeMatch[0].length);
      const name = cleanCourseName(`${pendingName} ${beforeCode}`);

      if (name && !/^(Apply Now|Copyright)$/i.test(name)) {
        active = {
          name,
          code: codeMatch[1],
          credits: Number(codeMatch[2]),
          tail: afterCredits,
          optional: /\(O\)/.test(afterCredits)
        };
      }

      pendingName = "";
      pendingCode = "";
      return;
    }

    if (codeOnlyMatch) {
      finishActive();
      pendingCode = codeOnlyMatch[1];
      return;
    }

    if (pendingCode && creditsOnlyMatch) {
      const name = cleanCourseName(pendingName);
      active = {
        name,
        code: pendingCode,
        credits: Number(creditsOnlyMatch[1]),
        tail: "",
        optional: false
      };
      pendingName = "";
      pendingCode = "";
      return;
    }

    if (active) {
      if (!line.trim() || /^[\t\sO()]+$/.test(line)) {
        active.tail += line;
        active.optional = active.optional || /\(O\)/.test(line);
        return;
      }

      finishActive();
    }

    if (line.trim() && !/^\/\*/.test(line.trim())) {
      pendingName = [...pendingName.split("\n").filter(Boolean), line].slice(-3).join("\n");
    }
  });

  finishActive();

  return dedupeCourses(courses);
}

function parseItalyCurriculum(text) {
  const lines = normalizeText(text).split("\n");
  const courses = [];
  let term = "Years 1-3 at IUT";

  lines.forEach((line) => {
    if (/fourth\/last year/i.test(line)) {
      term = "Year 4 at UCF";
    }

    if (/Courses chosen freely/i.test(line)) {
      courses.push(course("Courses chosen freely and individually by each student", "", 12, "Free choice", true));
      return;
    }

    const match = line.match(/([A-Z0-9-]{6,})\s+(.+?)\s+(\d+)\s*$/);
    if (!match) {
      return;
    }

    const name = cleanCell(match[2]);
    if (name.length < 3 || /credits|programme/i.test(name)) {
      return;
    }

    courses.push(course(name, match[1], Number(match[3]), term));
  });

  return dedupeCourses(courses);
}

function dedupeCourses(courses) {
  const seen = new Set();
  return courses.filter((item) => {
    if (/^pre[-\s]/i.test(item.name)) {
      return false;
    }

    const key = `${item.name}|${item.code}|${item.term}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function normalizedName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function termIndex(term) {
  const index = KOREAN_TERMS.indexOf(term);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function sortTerms(terms) {
  return [...terms].sort((a, b) => {
    const aIndex = termIndex(a);
    const bIndex = termIndex(b);

    if (aIndex !== Number.MAX_SAFE_INTEGER || bIndex !== Number.MAX_SAFE_INTEGER) {
      return aIndex - bIndex;
    }

    return terms.indexOf(a) - terms.indexOf(b);
  });
}

function sortCourses(courses) {
  return [...courses].sort((a, b) => {
    const creditDiff = b.credits - a.credits;
    if (creditDiff !== 0) {
      return creditDiff;
    }

    return a.name.localeCompare(b.name);
  });
}

function findExistingCourse(courses, fixedItem) {
  const options = [fixedItem.name, ...fixedItem.aliases].map(normalizedName);
  return courses.find((item) => options.includes(normalizedName(item.name)));
}

function applyCseIceCorrections(program) {
  if (!["cse", "ice"].includes(program.id)) {
    return program;
  }

  const correctedCourses = [];
  Object.entries(CSE_ICE_CORRECTIONS).forEach(([term, items]) => {
    items.forEach((fixedItem) => {
      const existing = findExistingCourse(program.courses, fixedItem);
      correctedCourses.push(course(
        fixedItem.name,
        existing ? existing.code : "",
        programValue(fixedItem.credits, program.id),
        term,
        programValue(fixedItem.optional, program.id)
      ));
    });
  });

  return {
    ...program,
    courses: dedupeCourses(correctedCourses)
  };
}

function makeProgram(source, courses) {
  const terms = sortTerms([...new Set(courses.map((item) => item.term))]);
  return {
    id: source.id,
    name: source.name,
    terms,
    courses
  };
}

async function loadPrograms() {
  const loaded = [];

  for (const source of SOURCES) {
    if (source.type === "uk") {
      continue;
    }

    const response = await fetch(source.file);
    if (!response.ok) {
      throw new Error(`Could not load ${source.file}`);
    }

    const text = await response.text();
    const courses = source.type === "italy" ? parseItalyCurriculum(text) : parseKoreanCurriculum(text);
    loaded.push(makeProgram(source, courses));
  }

  return [...loaded, ...STATIC_PROGRAMS];
}

function renderProgramOptions() {
  programSelect.replaceChildren();
  state.programs.forEach((program) => {
    const option = document.createElement("option");
    option.value = program.id;
    option.textContent = program.name;
    programSelect.append(option);
  });
}

function renderSemesterOptions() {
  const program = currentProgram();
  semesterSelect.replaceChildren();

  program.terms.forEach((term) => {
    const option = document.createElement("option");
    option.value = term;
    option.textContent = term;
    semesterSelect.append(option);
  });

  semesterSelect.value = state.selectedTerm;
}

function currentProgram() {
  return state.programs.find((program) => program.id === state.selectedProgramId);
}

function currentCourses() {
  const program = currentProgram();
  return sortCourses(program.courses.filter((item) => item.term === state.selectedTerm));
}

function gradeKey(courseItem) {
  return `${state.selectedProgramId}|${courseItem.term}|${courseItem.code || courseItem.name}`;
}

function renderCourseRows() {
  const program = currentProgram();
  const courses = currentCourses();
  courseBody.replaceChildren();

  panelNote.textContent = `${program.name} - ${state.selectedTerm} - ${courses.length} course${courses.length === 1 ? "" : "s"}`;

  if (!courses.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No courses were found for this term in the attached curriculum.";
    courseBody.append(empty);
    return;
  }

  courses.forEach((courseItem) => {
    const row = document.createElement("article");
    const credit = document.createElement("div");
    const subject = document.createElement("div");
    const name = document.createElement("div");
    const meta = document.createElement("div");
    const gradeGroup = document.createElement("div");
    const key = gradeKey(courseItem);

    row.className = "course-row";
    credit.className = "credit-pill";
    credit.textContent = courseItem.credits;

    name.className = "course-name";
    name.textContent = courseItem.name;
    meta.className = "course-meta";
    meta.textContent = [
      courseItem.code || "No code",
      courseItem.optional === true ? "Elective" : courseItem.optional === false ? "Required" : "Course"
    ].join(" - ");

    subject.className = "subject-block";
    subject.append(name, meta);

    gradeGroup.className = "grade-group";
    GRADE_OPTIONS.forEach((grade) => {
      const storedGrade = state.grades.get(key);
      const button = document.createElement("button");

      button.type = "button";
      button.className = `grade-chip grade-${grade.label.toLowerCase().replace("+", "plus")}`;
      button.textContent = grade.label;
      button.setAttribute("aria-label", `${grade.label} for ${courseItem.name}`);
      button.setAttribute("aria-pressed", storedGrade === String(grade.value));

      if (storedGrade === String(grade.value)) {
        button.classList.add("selected");
      }

      button.addEventListener("click", () => {
        if (state.grades.get(key) === String(grade.value)) {
          state.grades.delete(key);
        } else {
          state.grades.set(key, String(grade.value));
        }

        renderCourseRows();
        renderSummary();
      });

      gradeGroup.append(button);
    });

    subject.append(gradeGroup);
    row.append(credit, subject);
    courseBody.append(row);
  });
}

function renderSummary() {
  const courses = currentCourses();
  const totalSemesterCredits = courses.reduce((sum, item) => sum + item.credits, 0);
  let gradedCreditCount = 0;
  let qualityPoints = 0;

  courses.forEach((courseItem) => {
    const grade = Number(state.grades.get(gradeKey(courseItem)));
    if (Number.isFinite(grade)) {
      gradedCreditCount += courseItem.credits;
      qualityPoints += grade * courseItem.credits;
    }
  });

  gpaValue.textContent = gradedCreditCount ? (qualityPoints / gradedCreditCount).toFixed(2) : "0.00";
  gradedCredits.textContent = gradedCreditCount;
  semesterCredits.textContent = totalSemesterCredits;
  courseCount.textContent = courses.length;
}

function render() {
  programSelect.value = state.selectedProgramId;
  renderSemesterOptions();
  renderCourseRows();
  renderSummary();
}

programSelect.addEventListener("change", () => {
  const previousProgram = currentProgram();
  const previousTermIndex = previousProgram ? previousProgram.terms.indexOf(state.selectedTerm) : 0;
  const program = state.programs.find((item) => item.id === programSelect.value);

  state.selectedProgramId = program.id;
  if (!program.terms.includes(state.selectedTerm)) {
    state.selectedTerm = program.terms[previousTermIndex] || program.terms[0] || "";
  }

  render();
});

semesterSelect.addEventListener("change", () => {
  state.selectedTerm = semesterSelect.value;
  render();
});

clearGradesButton.addEventListener("click", () => {
  currentCourses().forEach((courseItem) => state.grades.delete(gradeKey(courseItem)));
  render();
});

loadPrograms()
  .then((programs) => {
    state.programs = programs
      .map(applyCseIceCorrections)
      .map((program) => ({
        ...program,
        terms: sortTerms([...new Set(program.courses.map((item) => item.term))])
      }))
      .filter((program) => program.courses.length);
    state.selectedProgramId = state.programs[0].id;
    state.selectedTerm = state.programs[0].terms[0];
    loadStatus.textContent = `${state.programs.length} programs loaded`;
    renderProgramOptions();
    render();
  })
  .catch((error) => {
    loadStatus.textContent = "Curriculum data failed to load";
    panelNote.textContent = error.message;
  });
