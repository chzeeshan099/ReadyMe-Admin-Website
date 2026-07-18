import { ReactNode } from "react";

export interface signUpInterface {
  fullName: string;
  email: string;
  password: string,
  confirmPassword: string;
  companyName: string;
  companySize: string;
}

export interface signInInterface {
  username: string;
  password: string;
}

export interface forgotInterface {
  username : string;
}
export interface resetPasswordInterface {
  password : string;
  confirmPassword  :string;
  token: string|null;
}

export interface userInterface {
user: Object,
status:string,
loggedInUser:string
}


export interface MenuItem {
    icon?: ReactNode;
    name: string;
    href?: string;
    resource: string;
    actions?: string | string[];
    type?: string;
    dropdownItems?: MenuItem[];
    badge?: string;
}


export interface Permission {
    _id: string;
    resource: string;
    actions: string | string[];
}