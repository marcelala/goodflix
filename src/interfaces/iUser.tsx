import { Profile } from "./iProfile";

export default interface iUser {
  uid: string;
  fullName: string;
  email: string;
  city: string;
  password: string;
  imageURL: string;
  userRole: string;
  phone: string;
  profiles?: Array<Profile>;
  isActive: boolean;
}
