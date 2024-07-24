let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);

const exampleInfo = {
  personal: {
    fullName: "Emily Musterfrau",
    birthday: "1991-03-21",
    adress: "Lilienweg 4, 88888 Musterstadt",
    phone: "+49333444555",
    email: "emily.musterfrau@mail.com",
    website: "emilymusterfrau.com",
  },
  education: [
    {
      subject: "Bachelor of Arts (Literatur)",
      university: "Univerität Musterstadt",
      location: "",
      startDate: "10/2012",
      endDate: "09/2015",
      id: 0,
      index: 1,
      visible: true,
    },
    {
      subject: "Master of Arts (Literatur)",
      university: "Univerität Musterstadt",
      location: "",
      startDate: "10/2015",
      endDate: "09/2017",
      id: 0,
      index: 2,
      visible: true,
    },
  ],
  skills: [
    { id: 3, index: 1, level: "fließend", skill: "Englisch", visible: true },
    {
      id: 3,
      index: 2,
      level: "verhandlungssicher",
      skill: "Französisch",
      visible: true,
    },
    {
      id: 3,
      index: 3,
      level: "Muttersprache",
      skill: "Deutsch",
      visible: true,
    },
    {
      id: 3,
      index: 4,
      level: "sehr gut",
      skill: "Word/Excel",
      visible: true,
    },
    {
      id: 3,
      index: 5,
      level: "",
      skill: "Teamführung",
      visible: true,
    },
    {
      id: 3,
      index: 6,
      level: "",
      skill: "Interkulturelle Kompetenzen",
      visible: true,
    },
    {
      id: 3,
      index: 7,
      level: "",
      skill: "Strategische Gesprächsführung",
      visible: true,
    },
  ],
  career: [
    {
      company: "Zeitung GmbH",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      endDate: "01/2020",
      id: 2,
      index: 1,
      position: "Redaktion",
      startDate: "10/2017",
      visible: true,
    },
    {
      company: "Zeitung GmbH",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      endDate: "03/2025",
      id: 2,
      index: 2,
      position: "Redaktionsleiterin",
      startDate: "02/2020",
      visible: true,
    },

    {
      company: "Beste Zeitung GmbH",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      endDate: "05/2027",
      id: 2,
      index: 2,
      position: "Redaktionsleiterin",
      startDate: "04/2026",
      visible: true,
    },
  ],
  interests: [
    {
      id: 4,
      index: 1,
      interest: "Brennpunktthemen",
      visible: true,
    },
    {
      id: 4,
      index: 2,
      interest: "Klimaerwärmung",
      visible: true,
    },
    {
      id: 4,
      index: 3,
      interest: "Wirtschaft",
      visible: true,
    },
    {
      id: 4,
      index: 4,
      interest: "Handwerk",
      visible: true,
    },
  ],
  projects: [
    {
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      id: 1,
      index: 1,
      project: "Umstrukturierung der Redaktion",
      technologies: "",
      visible: true,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      id: 1,
      index: 2,
      project: "Zweite Umstrukturierung der Redaktion",
      technologies: "",
      visible: true,
    },
  ],
  signature: {
    date: currentDate,
    location: "Musterstadt",
  },
};

export default exampleInfo;
