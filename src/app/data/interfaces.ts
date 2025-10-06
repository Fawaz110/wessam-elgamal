export interface ExperienceData {
    location: string,
    role: string
}

export interface Certificate {
    location?: string,
    title: string,
    type: boolean // true for army certificate otherwise false.
}

export interface TrainingCycle {
    title: string,
    location?: string
}

export interface Skill {
    title: string,
    description: string,
    percentage: string
}