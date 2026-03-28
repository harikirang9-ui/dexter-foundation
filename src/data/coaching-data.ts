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
  orientation?: "horizontal" | "vertical";
}

export interface PtmItem {
  type: "video" | "image";
  id?: string;
  src?: string;
  title: string;
  orientation?: "horizontal" | "vertical";
}

export interface LocationData {
  heroImages: string[];
  trainers: Trainer[];
  participants: Student[];
  selectedStudents: SelectedStudent[];
  ptmVideos: Video[];
  ptmItems?: PtmItem[];
  classVideos: Video[];
}

// Data keyed by year -> location
export type CoachingData = Record<number, Record<string, LocationData>>;

const coachingData: CoachingData = {
  2024: {
    "Kotputli, Behror": {
      heroImages: [
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/1%20Kotputli.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/2%20Kotputli.webp"
      ],
      trainers: [
        { name: "Sher Singh", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Sher%20Singh.webp" }
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
        { name: "Jay Shree Arya", dob: "12-Jul-2014" }
      ],
      selectedStudents: [],
      ptmVideos: [],
      ptmItems: [
        { type: "video", id: "6KWFFwzIvRQ", title: "PTM Event 1", orientation: "vertical" },
        { type: "video", id: "qJUY5DW5xoA", title: "PTM Event 2", orientation: "vertical" }
      ],
      classVideos: [
        { id: "A7h0Mkb3Le0", title: "Class Video", orientation: "horizontal" }
      ],
    },
    "Bhatinda, Jodhpur": {
      heroImages: [
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/1%20Bhatinda_Jodhpur.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/2%20Bhatinda_Jodhpur.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/3%20Bhatinda_Jodhpur.webp"
      ],
      trainers: [
        { name: "Anil", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Anil.webp" },
        { name: "Ramesh", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Ramesh.webp" }
      ],
      participants: [
        { name: "Anjali", dob: "13-Sep-2014" },
        { name: "Anju Dewasi", dob: "28-Aug-2013" },
        { name: "Apeksha", dob: "09-Jul-2014" },
        { name: "Aslam Khan", dob: "06-Jul-2014" },
        { name: "Deepika", dob: "01-Dec-2014" },
        { name: "Ghanshyam", dob: "25-May-2014" },
        { name: "Javed Khan", dob: "02-Jul-2013" },
        { name: "Jisan Mohammad", dob: "30-Jun-2014" },
        { name: "Karan", dob: "27-Aug-2014" },
        { name: "Pawan Dangi", dob: "16-Jun-2013" },
        { name: "Rahul", dob: "18-Dec-2014" },
        { name: "Ronak", dob: "26-Feb-2014" },
        { name: "Sohil Khan", dob: "14-Aug-2014" },
        { name: "Vikram", dob: "14-Feb-2014" },
        { name: "Vishal", dob: "15-Oct-2013" },
        { name: "Harsh prajapat", dob: "07-Dec-2014" },
        { name: "Pari", dob: "30-Aug-2024" },
        { name: "Sonu", dob: "12-Nov-2013" },
        { name: "Rozi Bano", dob: "17-Dec-2014" },
        { name: "GOUTAM", dob: "30-Dec-2014" },
        { name: "HASSAN KHAN", dob: "05-Jan-2015" },
        { name: "NEHA", dob: "02-Jun-2015" },
        { name: "SHRAWAN", dob: "11-Aug-2013" },
        { name: "Divyanshu", dob: "15-Oct-2014" },
        { name: "Jigar", dob: "26-Aug-2013" },
        { name: "Monika", dob: "14-Sep-2013" },
        { name: "Naveen", dob: "09-Oct-2013" },
        { name: "Prins", dob: "18-Mar-2014" },
        { name: "Zeeshan Khan", dob: "14-Dec-2013" },
        { name: "VIRENDRA SINGH", dob: "06-Jul-2014" },
        { name: "Sahita", dob: "26-Aug-2014" }
      ],
      selectedStudents: [],
      ptmVideos: [],
      ptmItems: [
        { type: "video", id: "8yEsJOPILKA", title: "PTM Event", orientation: "horizontal" }
      ],
      classVideos: [
        { id: "M6gmEwjU0OA", title: "Class Video", orientation: "horizontal" }
      ],
    },
    "Hasampur, Neem ka Thana": {
      heroImages: [
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/1%20Hasampur.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/2%20Hasampur.webp"
      ],
      trainers: [
        { name: "Bintu Kumar Sharma", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%201.png" },
        { name: "Seema", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%202.png" }
      ],
      participants: [
        { name: "Neeraj", dob: "08-Oct-2013" },
        { name: "Virat Singh", dob: "27-Dec-2014" },
        { name: "Mahak Kanwar", dob: "13-Jun-2015" },
        { name: "Gudiya", dob: "13-Feb-2014" },
        { name: "Chatar Singh", dob: "25-Dec-2014" },
        { name: "Mahank Sain", dob: "10-Aug-2013" },
        { name: "Nalini", dob: "12-Jun-2014" },
        { name: "Shiya", dob: "05-Dec-2014" },
        { name: "Nishu Kumawat", dob: "12-Jun-2014" },
        { name: "Navin Kumawat", dob: "16-May-2014" },
        { name: "Harshit", dob: "02-Jun-2015" },
        { name: "Ritesh Meena", dob: "01-Sep-2014" },
        { name: "Vihan Meena", dob: "27-Jan-2014" },
        { name: "Krishna Kaloya", dob: "20-Jun-2014" },
        { name: "Naveta", dob: "23-Nov-2014" },
        { name: "Alina Bano", dob: "09-Nov-2013" },
        { name: "Shakib Khan", dob: "01-Jul-2014" },
        { name: "Shoyab Khan", dob: "27-Jun-2014" },
        { name: "Jayant Kaloya", dob: "10-Nov-2013" },
        { name: "Aayush", dob: "30-Jul-2014" },
        { name: "Cheten Kumar", dob: "06-Feb-2014" },
        { name: "Dhruv Pratap", dob: "12-Dec-2013" },
        { name: "Shivam Meena", dob: "26-Jul-2015" },
        { name: "Mayank", dob: "09-May-2014" },
        { name: "Arushi", dob: "16-Aug-2014" },
        { name: "Shagun Tanwar", dob: "21-Jun-2013" },
        { name: "Palak Kanwar", dob: "01-Sep-2013" },
        { name: "Nikita", dob: "27-Sep-2014" },
        { name: "Nachita", dob: "27-Sep-2014" },
        { name: "Niku", dob: "01-Jul-2013" },
        { name: "Nidhi Yadav", dob: "13-Feb-2015" },
        { name: "Kanupriya Nehera", dob: "31-Aug-2013" },
        { name: "AVANI NEHRA", dob: "07-Jan-2014" },
        { name: "PRINS", dob: "19-Aug-2013" },
        { name: "Ronak Gurjar", dob: "11-Dec-2013" }
      ],
      selectedStudents: [
        { name: "Ritesh Meena", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Ritesh%20Meena.png" },
        { name: "Shagun Tanwar", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Shagun%20Tanwar.png" },
        { name: "Vihan Meena", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Vihan%20Meena.png" }
      ],
      ptmVideos: [],
      ptmItems: [
        { type: "video", id: "IXN86kunsDg", title: "PTM Event 1", orientation: "horizontal" },
        { type: "video", id: "nZ1xXa_70aU", title: "PTM Event 2", orientation: "horizontal" },
        { type: "video", id: "7sM99JClIT4", title: "PTM Event 3", orientation: "horizontal" }
      ],
      classVideos: [
        { id: "B4AmFR5eJSI", title: "Class Video", orientation: "horizontal" }
      ]
    },
    "Sojat, Pali": {
      heroImages: [
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/1%20Sojat_Pali.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/2%20Sojat_Pali.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/3%20Sojat_Pali.webp"
      ],
      trainers: [
        { name: "Vikash", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Vikashpng.webp" }
      ],
      participants: [
        { name: "Aahil Rja", dob: "20-May-2014" },
        { name: "Ataur Rahman", dob: "21-May-2015" },
        { name: "Komal Chouhan", dob: "04-May-2014" },
        { name: "Kumud", dob: "22-Nov-2013" },
        { name: "Mohammad Zafar", dob: "29-Oct-2014" },
        { name: "Naman", dob: "19-Jul-2013" },
        { name: "Lagan", dob: "30-Jul-2013" },
        { name: "Hemlata", dob: "01-Jan-2015" },
        { name: "Mohammad Moin", dob: "27-Jul-2014" },
        { name: "Nandni", dob: "20-Dec-2014" },
        { name: "Nirmla Bhati", dob: "01-Sep-2014" },
        { name: "Vinita", dob: "18-Aug-2014" },
        { name: "Harsh Rajpurohit", dob: "10-Dec-2014" },
        { name: "Charan", dob: "06-Nov-2014" },
        { name: "Govind Gopal Boss", dob: "28-May-2015" },
        { name: "Varsha", dob: "07-Jul-2013" },
        { name: "Tara", dob: "07-Jul-2014" },
        { name: "Susheel Solanki", dob: "22-Aug-2013" },
        { name: "Sameer Khan", dob: "09-Aug-2014" },
        { name: "Nishbat", dob: "24-Jul-2014" },
        { name: "Manisha", dob: "23-Dec-2013" },
        { name: "Kishan Ram", dob: "26-Jan-2015" },
        { name: "Farina Bano", dob: "03-Jan-2015" },
        { name: "Digvijay Singh", dob: "01-Feb-2015" },
        { name: "Mahira Qadri", dob: "06-Mar-2014" },
        { name: "Pooja", dob: "27-May-2014" },
        { name: "Tanish", dob: "05-Aug-2014" },
        { name: "Priyanshu Chouhan", dob: "11-Jan-2015" },
        { name: "LUCKY SINGARIYA", dob: "01-Apr-2014" },
        { name: "KESAR KANWAR", dob: "11-Aug-2014" },
        { name: "Deepshikha", dob: "23-Aug-2013" },
        { name: "Yogesh", dob: "04-Sep-2014" },
        { name: "VAIBHAV SINGH", dob: "05-Dec-2014" },
        { name: "Virendra Kumar", dob: "03-Jan-2015" },
        { name: "Bhawana Dewasi", dob: "19-Dec-2014" },
        { name: "Dimpal", dob: "13-Feb-2014" }
      ],
      selectedStudents: [],
      ptmVideos: [],
      ptmItems: [
        { type: "image", src: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/SP%20PTM1.jpeg", title: "PTM 1", orientation: "vertical" },
        { type: "image", src: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/SP%20PTM2.jpeg", title: "PTM 2", orientation: "vertical" },
        { type: "image", src: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/SP%20PTM3.jpeg", title: "PTM 3", orientation: "vertical" }
      ],
      classVideos: [
        { id: "2bJHBGVa5a0", title: "Class Video", orientation: "vertical" }
      ],
    },
  },
  2025: {
    "Hasampur, Neem ka Thana": {
      heroImages: [
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/1%20Hasampur%202025.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/2%20Hasampur%202026.webp",
        "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20location%20images/3%20Hasampur%202027.webp"
      ],
      trainers: [
        { name: "Bintu Kumar Sharma", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%201.png" },
        { name: "Seema", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/has_trainer%202.png" }
      ],
      participants: [
        { name: "Anamika Sharma", dob: "19-May-2015" },
        { name: "Anuradha Yogi", dob: "21-Jul-2014" },
        { name: "Anushka", dob: "28-Jan-2015" },
        { name: "Naitik Nehra", dob: "29-Sep-2014" },
        { name: "Ritik", dob: "25-Feb-2016" },
        { name: "Ritesh Gurjar", dob: "01-Jan-2015" },
        { name: "Nidhi Yadav", dob: "24-Mar-2016" },
        { name: "Charvi Yadav", dob: "01-Jun-2016" },
        { name: "Rhuchika Yadav", dob: "20-Nov-2014" },
        { name: "Nishu", dob: "19-Jul-2014" },
        { name: "Kavya", dob: "10-Oct-2015" },
        { name: "Mayank Nehra", dob: "31-Mar-2015" },
        { name: "Lakshay Yadav", dob: "17-May-2015" },
        { name: "Siddhi Rajput", dob: "02-Feb-2016" },
        { name: "Piyush", dob: "09-Jul-2016" },
        { name: "Deepanshu Yadav", dob: "22-Sep-2015" },
        { name: "Vivek", dob: "07-Jul-2016" },
        { name: "Priyanshu Yadav", dob: "26-Sep-2014" },
        { name: "Lakshya", dob: "27-May-2014" },
        { name: "Vihan", dob: "23-Jun-2014" },
        { name: "Jayant", dob: "03-Jan-2015" },
        { name: "Dikshu Yadav", dob: "11-Oct-2015" }
      ],
      selectedStudents: [
        { name: "Jayant", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Jayant.png" },
        { name: "Lakhsya", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Lakhsya.png" },
        { name: "Kavya", image: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/Kavya.png" }
      ],
      ptmVideos: [],
      ptmItems: [
        { type: "image", src: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/PTM%202025%201.jpeg", title: "PTM 1", orientation: "vertical" },
        { type: "image", src: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/PTM%202025%202.jpeg", title: "PTM 2", orientation: "vertical" },
        { type: "image", src: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Navodaya%20Coaching%202024/PTM%202025%203.jpeg", title: "PTM 3", orientation: "vertical" }
      ],
      classVideos: [
        { id: "aU293E11s0I", title: "Class Video 1", orientation: "horizontal" },
        { id: "kxuriPCXubk", title: "Class Video 2", orientation: "horizontal" }
      ],
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
    classVideos: [],
  };
}

export default coachingData;
