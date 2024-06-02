export type TAcademicSemesterName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';
export type TMonths =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

export interface TAcademicSemester {
    name: TAcademicSemesterName;
    code: TAcademicSemesterCode;
    year: Date;
    startMonth: TMonths;
    endMonth: TMonths;
}