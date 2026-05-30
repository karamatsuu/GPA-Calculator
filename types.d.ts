interface Course {
  id?: string;
  programId?: string;
  term: Semester["name"];
  name: string;
  code: string;
  credits: number;
  optional?: boolean | null;
  aliases?: string[];
  selectedCourseKey?: string;
}

interface Semester {
  name: string;
}

interface Program {
  id: string;
  name: string;
  terms: Semester["name"][];
  courses: Course[];
}

interface GradeState {
  programs: Program[];
  selectedProgramId: string;
  selectedTerm: Semester["name"];
  grades: Map<string, string>;
  customCourses: Course[];
}
