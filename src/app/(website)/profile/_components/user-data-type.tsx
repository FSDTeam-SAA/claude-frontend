// ======================
// Root API Response
// ======================
export interface UserProfileApiResponse {
  statusCode: number
  success: boolean
  message: string
  data: UserProfileData
}

// ======================
// Data Wrapper
// ======================
export interface UserProfileData {
  user: User
  // stats: Stats
  reports: Report[]
  // transferHistory: TransferHistory[]
}

// ======================
// User Type
// ======================
export interface User {
  subscription: string | null
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: "admin" | "user" | string
  profileImage: string
  verified: boolean
  league: string
  category: string
  position: string[]
  socialMedia: string[]
  playingVideo: string[]
  createdAt: string
  updatedAt: string
  __v: number

  // Extra profile fields
  agent: string
  birthdayPlace: string
  citizenship: string
  currentClub: string
  dob: string
  foot: "right" | "left" | string
  gender: "male" | "female" | "other" | string
  gpa: string
  hight: string
  weight: string
  inSchoolOrCollege: boolean
  phone: string
  satAct: string
  institute: string
  jerseyNumber: string
  accessLavel: string[]
  isSubscription: boolean
  lastLogin: string
}

// ======================
// Stats Section
// ======================
// export interface Stats {
//   rating: Rating[]
//   gkstats: GKStats[]
//   fouls: Fouls[]
//   defensive: Defensive[]
//   distribution: Distribution[]
//   setpieces: SetPieces[]
//   national: National[]
// }

// // ======================
// // Individual Stat Types
// // (kept flexible for future)
// // ======================
// export interface Rating {
//   [key: string]: any
// }

// export interface GKStats {
//   [key: string]: any
// }

// export interface Fouls {
//   [key: string]: any
// }

// export interface Defensive {
//   [key: string]: any
// }

// export interface Distribution {
//   [key: string]: any
// }

// export interface SetPieces {
//   [key: string]: any
// }

// export interface National {
//   [key: string]: any
// }

// // ======================
// // Reports & Transfers
// // ======================
// export interface Report {
//   [key: string]: any
// }

// export interface TransferHistory {
//   [key: string]: any
// }




