// ============================================================
// TEAM DATA — Update team member details here
// ============================================================

export interface TeamMember {
  name: string;
  designation: string;
  qualification: string;
  image: string;
  bio: string;
  bioPoints?: string[];
}

export const team: TeamMember[] = [
  {
    name: "CA Kumar Avinash",
    designation: "Founding Partner",
    qualification: "B.Com, FCA, DISA",
    image: "/images/team/Avinash.jpg",
    bio: "CA Kumar Avinash is the founding partner of Kumar Avinash & Associates with extensive experience in taxation, audit, and corporate advisory. He is a Fellow Member of the Institute of Chartered Accountants of India (ICAI) and holds a Diploma in Information Systems Audit (DISA).",
    bioPoints: [
      "He is the Founder Partner and Managing Partner of Kumar Avinash & Associates.",
      "He is a Fellow Member of the Institute of Chartered Accountants of India (ICAI).",
      "He holds a Diploma in Information Systems Audit (DISA) from ICAI.",
      "He has extensive post-qualification professional experience in the fields of Taxation, Audit, and Accounting.",
      "He has in-depth experience in Income Tax, GST, Audit, Company Law Matters, and Financial Services.",
      "He has vast knowledge and thorough understanding of Indian Laws and Regulations as well as complex corporate taxation.",
      "His professionalism and expertise in serving clients to their satisfaction has always been an inspiration for the entire team.",
      "His extensive knowledge and hard work are the pillars of this firm.",
    ],
  },
];

export const firmHistory = {
  established: "2020",
  aboutText:
    "Kumar Avinash & Associates is a professionally managed Chartered Accountancy firm committed to providing comprehensive and quality professional services. The firm was established with the vision of offering one-stop solutions for all financial, taxation, and compliance needs of businesses and individuals.",
  mission:
    "To provide exemplary professional services with integrity, competence, and commitment while building lasting client relationships based on trust and mutual growth.",
  vision:
    "To be a leading Chartered Accountancy firm known for excellence in service delivery, ethical practices, and contribution to the financial well-being of our clients and the community.",
  values: [
    "Integrity & Ethics",
    "Client-Centric Approach",
    "Professional Excellence",
    "Timely Delivery",
    "Confidentiality",
    "Continuous Learning",
  ],
};
