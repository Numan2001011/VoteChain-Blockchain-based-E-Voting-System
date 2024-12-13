export interface CandidateData {
  cid: number;
  cimage: string;
  cname: string;
  location: string;
  party: string;
  symbolimg: string;
  symbolname: string;
}

export const Candidates: CandidateData[] = [
  //Tangail Zilla
  {
    cid: 1,
    cimage: "../../images/c1.jpg",
    cname: "Md. Shahidul Islam",
    location: "Tangail 01",
    party: "Awami League",
    symbolimg: "../../images/marka1.jpg",
    symbolname: "Murgi",
  },
  {
    cid: 2,
    cimage: "../../images/c2.jpg",
    cname: "Shariful Islam",
    location: "Tangail 01",
    party: "BNP",
    symbolimg: "../../images/marka2.jpg",
    symbolname: "Boat",
  },
  {
    cid: 3,
    cimage: "../../images/c3.jpg",
    cname: "Jamilur Rahman",
    location: "Tangail 01",
    party: "Jamat-E-islami",
    symbolimg: "../../images/marka3.jpg",
    symbolname: "Hatpakha",
  },
  {
    cid: 4,
    cimage: "../.../../images/c1.jpg",
    cname: "Jalal Uddin",
    location: "Tangail 02",
    party: "Awami League",
    symbolimg: "../../images/marka1.jpg",
    symbolname: "Murgi",
  },
  {
    cid: 5,
    cimage: "../../images/c2.jpg",
    cname: "Jolil Khan",
    location: "Tangail 02",
    party: "BNP",
    symbolimg: "../../images/marka2.jpg",
    symbolname: "Boat",
  },
  {
    cid: 6,
    cimage: "../../images/c3.jpg",
    cname: "Jahed Hasan",
    location: "Tangail 02",
    party: "Jamat-E-Islami",
    symbolimg: "../../images/marka3.jpg",
    symbolname: "Hatpakha",
  },
];
