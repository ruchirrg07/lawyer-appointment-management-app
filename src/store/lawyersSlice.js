import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lawyers: [
    {
      id: 1,
      name: "Harvey Specter",
      specialties: [
        "Criminal",
        "Property Dispute",
        "Family",
        "Corporate",
        "Civil",
        "Divorce",
      ],
      availability: 6,
      cost: 500,
    },
    {
      id: 2,
      name: "Michael Ross",
      specialties: ["Criminal", "Corporate", "Family", "Divorce", "Civil"],
      availability: 12,
      cost: 150,
    },
    {
      id: 3,
      name: "Jessica Pearson",
      specialties: [
        "Environmental",
        "Corporate",
        "Worker's compensation",
        "Public interest",
        "Estate planning",
      ],
      availability: 7,
      cost: 400,
    },
    {
      id: 4,
      name: "Louis Litt",
      specialties: [
        "Divorce",
        "Property Dispute",
        "Tax",
        "Cyber",
        "Merger and acquisition",
      ],
      availability: 8,
      cost: 300,
    },
    {
      id: 5,
      name: "Rachel Zane",
      specialties: ["Divorce", "Property Dispute"],
      availability: 10,
      cost: 100,
    },
    {
      id: 6,
      name: "Robert Zane",
      specialties: ["Divorce", "Property Dispute"],
      availability: 8,
      cost: 300,
    },
    {
      id: 7,
      name: "Daniel Hardman",
      specialties: ["Divorce", "Property Dispute"],
      availability: 9,
      cost: 250,
    },
    {
      id: 8,
      name: "Donna Paulsen",
      specialties: ["Divorce", "Property Dispute"],
      availability: 7,
      cost: 200,
    },
  ],
};

const lawyersSlice = createSlice({
  name: "lawyers",
  initialState,
  reducers: {},
});

export default lawyersSlice.reducer;
