// export interface UserProfileApiResponse {
//   statusCode: number;
//   success: boolean;
//   message: string;
//   data: UserProfile;
// }

// export interface UserProfile {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   role: "admin" | "user";
//   profileImage: string;
//   verified: boolean;
//   league: string | null;
//   category: string | null;
//   position: string[];
//   socialMedia: SocialMedia[];
//   playingVideo: string[];
//   createdAt: string; // ISO date string
//   updatedAt: string; // ISO date string
//   __v: number;
//   otp: string;
//   otpExpiry: string; // ISO date string
// }

// export interface SocialMedia {
//   platform?: string;
//   url?: string;
// }



export type UserProfile = {
  subscription: null | string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "user" | string;
  profileImage: string;
  verified: boolean;
  league: string;
  category: string;
  position: string;
  socialMedia: string[];
  playingVideo: string[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  otp: string;
  otpExpiry: string; // ISO date string
  agent: string;
  birthdayPlace: string;
  citizenship: string;
  currentClub: string;
  dob: string; // ISO date string
  foot: "Right" | "Left" | string;
  gender: "male" | "female" | string;
  gpa: string;
  hight: string;
  inSchoolOrCollege: boolean;
  institute: string;
  phone: string;
  satAct: string;
  weight: string;
  accessLavel: string
  isSubscription: boolean;
  lastLogin: string; // ISO date string
};

export type UserProfileApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: UserProfile;
};
