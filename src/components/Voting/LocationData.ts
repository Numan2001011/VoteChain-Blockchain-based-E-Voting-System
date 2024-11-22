export interface LocationData {
  location: string;
  sublocation: string[];
}
export const Locations: LocationData[] = [
  {
    location: "Tangail",
    sublocation: ["Tangail Sadar(01)", "Mirzapur(02)", "Ghatail(03)"],
  },
  {
    location: "Gazipur",
    sublocation: ["Gazipur Sadar(01)", "Kaliakoir(02)", "Mawna(03)"],
  },
  { location: "Dhaka", sublocation: ["Dhaka North(01)", "Dhaka South(02)"] },
  // {location:"Tangail", sublocation:["Tangail Sadar(01)","Mirzapur(02)","Ghatail(03)"]},
];
