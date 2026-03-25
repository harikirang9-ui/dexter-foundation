export interface Trainer {
  name: string;
  image: string;
}

export interface Student {
  name: string;
  dob: string;
}

export interface SelectedStudent {
  name: string;
  image: string;
}

export interface Video {
  id: string;
  title: string;
}

export interface LocationData {
  heroImages: string[];
  trainers: Trainer[];
  participants: Student[];
  selectedStudents: SelectedStudent[];
  ptmVideos: Video[];
}

// Data keyed by year -> location
export type CoachingData = Record<number, Record<string, LocationData>>;

const coachingData: CoachingData = {
  2023: {
    "Kotputli, Behror": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Bhatinda, Jodhpur": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Hasampur, Neem ka Thana": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Sojat, Pali": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
  },
  2024: {
    "Kotputli, Behror": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Bhatinda, Jodhpur": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Hasampur, Neem ka Thana": {
      heroImages: [
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/hasampur%20hero%20img.png",
      ],
      trainers: [
        { name: "Bintu Kumar Sharma", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%201.png" },
        { name: "Seema", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%202.png" },
      ],
      participants: [
        { name: "Neeraj", dob: "11-Aug-2014" },
        { name: "Nisha Saini", dob: "16-May-2015" },
        { name: "Avni Saini", dob: "26-Apr-2015" },
        { name: "Jyoti Saini", dob: "12-Apr-2015" },
        { name: "Ekta", dob: "30-Jun-2014" },
        { name: "Yanshika", dob: "01-Jul-2015" },
        { name: "Sonam", dob: "03-May-2015" },
        { name: "Divya", dob: "26-Jul-2013" },
        { name: "Helant", dob: "01-Jul-2014" },
        { name: "Gunjan Saini", dob: "19-Dec-2014" },
        { name: "Hardik Shekhawat", dob: "30-Jun-2014" },
        { name: "Jay Shree Arya", dob: "12-Jul-2014" },
      ],
      selectedStudents: [
        { name: "Ritesh Meena", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_selected%201.png" },
        { name: "Shagun Tanwar", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_selected%202.png" },
        { name: "Vihan Meena", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_selected%203.png" },
      ],
      ptmVideos: [
        { id: "dQw4w9WgXcQ", title: "PTM Event 1" },
        { id: "dQw4w9WgXcQ", title: "PTM Event 2" },
        { id: "dQw4w9WgXcQ", title: "PTM Event 3" },
      ],
    },
    "Sojat, Pali": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
  },
  2025: {
    "Kotputli, Behror": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Bhatinda, Jodhpur": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Hasampur, Neem ka Thana": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
    "Sojat, Pali": {
      heroImages: [],
      trainers: [],
      participants: [],
      selectedStudents: [],
      ptmVideos: [],
    },
  },
};

export function getLocationData(year: number, location: string): LocationData {
  return coachingData[year]?.[location] ?? {
    heroImages: [],
    trainers: [],
    participants: [],
    selectedStudents: [],
    ptmVideos: [],
  };
}

export default coachingData;
