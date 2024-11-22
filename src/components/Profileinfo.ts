export interface UserData {
  usertype: string;
  userlocation: string;
  votingstatus: string;
  name: string;
  fathersname: string;
  mothersname: string;
  dob: string;
  nid: string;
}
export const Users: UserData[] = [
  {
    usertype: "Voter",
    userlocation: "Gazipur",
    votingstatus: "NOT DONE",
    name: "Md. Numanur Rahman",
    fathersname: "Md. Habibur Rahman",
    mothersname: "Parvin Begum",
    dob: "01 Aug 2002",
    nid: "123456789",
  },
];
