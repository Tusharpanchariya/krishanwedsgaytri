export interface WeddingEvent {
  id: string;
  hindiTitle: string;
  englishLabel: string;
  date: string; // e.g. "20 November 2026" (No weekdays!)
  hindiDate: string; // e.g. "20 नवम्बर 2026"
  time: string; // e.g. "रात 9:15 बजे"
  description: string;
  hindiDescription?: string;
  visualTheme: {
    accentColor: string;
    bgTint: string;
    badgeBorder: string;
    motif: "kalash" | "shehnai" | "marigold" | "feast" | "mandap";
  };
  isMainEvent?: boolean;
}

export interface WeddingDataConfig {
  couple: {
    groom: {
      name: string;
      hindiName: string;
      titleHindi: string;
      bio?: string;
    };
    bride: {
      name: string;
      hindiName: string;
      titleHindi: string;
      bio?: string;
    };
    weddingTitle: string;
    traditionalTitle: string;
    tagline: string;
    weddingDate: string; // "22 November 2026"
    traditionalHinduDate: string; // "कार्तिक सुदी 13, संवत 2083"
    weddingCeremonyHindi: string; // "पाणिग्रहण संस्कार"
    weddingCeremonyTiming: string; // "रात्रि शुभलग्नानुसार"
    timezone: string; // "Asia/Kolkata"
    isoWeddingDate: string; // "2026-11-22T19:00:00+05:30" (for countdown calculation)
  };
  traditionalInvitation: {
    invitationHeading: string;
    ganeshShloka: string;
    blessingText: string;
    conjunctionHindi: string;
    invitationNote: string;
    closingBlessing: string;
    // Unverified family details preserved as unpublished / editable
    familyDetailsPublished: boolean;
    familyDetails?: {
      paternalGrandparents?: string;
      parents?: string;
      hostText?: string;
    };
  };
  events: WeddingEvent[];
  loveStory: {
    sectionHeading: string;
    subheading: string;
    quote: string;
    chapters: Array<{
      title: string;
      hindiTitle: string;
      dateLabel: string;
      narrative: string;
      image: string;
    }>;
  };
  gallery: Array<{
    id: string;
    src: string;
    alt: string;
    caption: string;
    hindiCaption: string;
    category: "portrait" | "celebration" | "traditional";
  }>;
  audio: {
    title: string;
    artist: string;
    src: string;
    description: string;
  };
  venue: {
    sectionTitle: string;
    cityHindi: string;
    cityEnglish: string;
    venueName: string;
    venueNameEnglish: string;
    addressHindi: string;
    address: string;
    noticeHindi: string;
    noticeEnglish: string;
    isAddressVerified: boolean;
    googleMapsUrl?: string;
  };
  finalMessage: {
    englishHeading: string;
    englishSubheading: string;
    hindiBlessing: string;
  };
}

export const weddingData: WeddingDataConfig = {
  couple: {
    groom: {
      name: "KRISHAN",
      hindiName: "किशन",
      titleHindi: "चि. किशन",
      bio: "With an authentic smile, calm grace, and warm heart, Krishan is ready to embark on this auspicious eternal journey.",
    },
    bride: {
      name: "GAYATRI",
      hindiName: "गायत्री",
      titleHindi: "सौ. का. गायत्री",
      bio: "Radiant, poised, and blessed with joyful warmth, Gayatri completes this beautiful story of love and family bond.",
    },
    weddingTitle: "Krishan Weds Gayatri",
    traditionalTitle: "शुभ परिणय सूत्र बंधन",
    tagline: "Two hearts, one sacred bond, a lifetime of togetherness.",
    weddingDate: "22 November 2026",
    traditionalHinduDate: "कार्तिक सुदी 13, संवत 2083",
    weddingCeremonyHindi: "पाणिग्रहण संस्कार",
    weddingCeremonyTiming: "रात्रि शुभलग्नानुसार",
    timezone: "Asia/Kolkata",
    isoWeddingDate: "2026-11-22T19:00:00+05:30",
  },

  traditionalInvitation: {
    invitationHeading: "सप्रेम आमंत्रण",
    ganeshShloka: "॥ श्री गणेशाय नमः ॥",
    blessingText: "परमपिता परमात्मा की असीम अनुकम्पा से",
    conjunctionHindi: "के",
    invitationNote:
      "परिणय की इस मांगलिक बेला पर सपरिवार पधारकर वर-वधू को अपना स्नेहिल आशीर्वाद प्रदान कर हमें अनुगृहीत करें।",
    closingBlessing: "दर्शनाभिलाषी: समस्त परिवार",
    familyDetailsPublished: false, // Preserved editable & unpublished until verified
    familyDetails: {
      paternalGrandparents: "स्व. दादाजी एवं दादीजी के स्नेहाशीष",
      parents: "वर-वधू पक्ष परिवार",
      hostText: "स्वागतार्थी: समस्त परिवार जन",
    },
  },

  events: [
    {
      id: "event-01",
      hindiTitle: "हल्दवाय (बान)",
      englishLabel: "Haldi & Baan Ceremony",
      date: "20 November 2026",
      hindiDate: "20 नवम्बर 2026",
      time: "रात 9:15 बजे",
      description:
        "A traditional Rajasthani pre-wedding celebration filled with turmeric rituals, blessings, family traditions and happiness.",
      hindiDescription:
        "शुभ हल्दी, बान संस्कार और परिजनों के मंगल आशीषों से परिपूर्ण पावन उत्सव।",
      visualTheme: {
        accentColor: "#D49B2A",
        bgTint: "#FFF9E6",
        badgeBorder: "#D49B2A",
        motif: "marigold",
      },
    },
    {
      id: "event-02",
      hindiTitle: "प्रीतिभोज",
      englishLabel: "Preetibhoj / Wedding Feast",
      date: "21 November 2026",
      hindiDate: "21 नवम्बर 2026",
      time: "शाम 7:15 बजे से",
      description:
        "An evening of traditional hospitality, delicious food and family togetherness.",
      hindiDescription:
        "स्नेहिल आत्मीयता, पारंपरिक राजस्थानी मिष्ठान और सुरुचिपूर्ण भोज का सत्कार।",
      visualTheme: {
        accentColor: "#C86428",
        bgTint: "#FFF5EC",
        badgeBorder: "#C86428",
        motif: "feast",
      },
    },
    {
      id: "event-03",
      hindiTitle: "महिला संगीत",
      englishLabel: "Mahila Sangeet",
      date: "21 November 2026",
      hindiDate: "21 नवम्बर 2026",
      time: "रात्रि में",
      description:
        "A beautiful evening of traditional music, dance, folk melodies and joyful celebrations.",
      hindiDescription:
        "पारंपरिक लोकगीत, ढोलक की थाप, मधुर स्वर और उल्लासपूर्ण नृत्य का रंगारंग समागम।",
      visualTheme: {
        accentColor: "#932758",
        bgTint: "#FDF2F7",
        badgeBorder: "#932758",
        motif: "shehnai",
      },
    },
    {
      id: "event-04",
      hindiTitle: "कुआं पूजन",
      englishLabel: "Kuan Poojan",
      date: "22 November 2026",
      hindiDate: "22 नवम्बर 2026",
      time: "शाम 6:15 बजे",
      description:
        "An auspicious traditional ceremony filled with prayers, devotion and family blessings.",
      hindiDescription:
        "कुलदेवता की आराधना, पवित्र कलश पूजन एवं कुलपरंपरा के पवित्र संस्कार।",
      visualTheme: {
        accentColor: "#A85E3B",
        bgTint: "#FBF5EF",
        badgeBorder: "#A85E3B",
        motif: "kalash",
      },
    },
    {
      id: "event-05",
      hindiTitle: "पाणिग्रहण संस्कार",
      englishLabel: "Wedding Ceremony",
      date: "22 November 2026",
      hindiDate: "22 नवम्बर 2026",
      time: "रात्रि शुभलग्नानुसार",
      description:
        "The sacred union of Krishan and Gayatri, beginning their beautiful journey of togetherness.",
      hindiDescription:
        "अग्नि को साक्षी मानकर सप्तपदी के सात फेरे और अटूट जीवन संगिनी का पावन संकल्प।",
      visualTheme: {
        accentColor: "#A84B40",
        bgTint: "#FAF0ED",
        badgeBorder: "#A84B40",
        motif: "mandap",
      },
      isMainEvent: true, // Main event with strongest visual prominence
    },
  ],

  loveStory: {
    sectionHeading: "OUR STORY",
    subheading: "EVERY LOVE STORY IS BEAUTIFUL, BUT OURS IS OUR FAVOURITE.",
    quote:
      "From shared smiles and quiet conversations to the blessing of two families coming together as one royal celebration.",
    chapters: [
      {
        title: "A Shared Glance",
        hindiTitle: "प्रथम दृष्टि एवं स्नेह",
        dateLabel: "The Sacred Beginning",
        narrative:
          "With respect, simplicity, and an unspoken spark, Krishan and Gayatri first crossed paths. What began with heartfelt conversations soon blossomed into a serene bond of deep trust.",
        image: "/images/couple-portrait-3.jpeg",
      },
      {
        title: "Two Families, One Heart",
        hindiTitle: "पारिवारिक मिलन व सहमति",
        dateLabel: "Blessings of Elders",
        narrative:
          "Rooted in Rajasthani values and mutual respect, both families united in joyous harmony, sealing the union of two gentle souls with elder blessings and traditional warmth.",
        image: "/images/couple-portrait-2.jpeg",
      },
      {
        title: "The Vow of Forever",
        hindiTitle: "अटूट विश्वास और परिणय",
        dateLabel: "22 November 2026",
        narrative:
          "Now, surrounded by loved ones, sacred fire, and fragrant marigolds, Krishan and Gayatri step hand in hand towards a lifetime of happiness, harmony, and togetherness.",
        image: "/images/couple-portrait-1.jpeg",
      },
    ],
  },

  gallery: [
    {
      id: "gal-1",
      src: "/images/couple-portrait-1.jpeg",
      alt: "Krishan and Gayatri in royal traditional celebration attire",
      caption: "Eternal Elegance — In Grace & Togetherness",
      hindiCaption: "स्नेह और गरिमा का दिव्य संगम",
      category: "portrait",
    },
    {
      id: "gal-2",
      src: "/images/couple-portrait-2.jpeg",
      alt: "Krishan and Gayatri holding ceremonial wedding announcement",
      caption: "The Auspicious Announcement — Welcoming Loved Ones",
      hindiCaption: "मांगलिक आमंत्रण एवं सप्रेम शुभाशीष",
      category: "celebration",
    },
    {
      id: "gal-3",
      src: "/images/couple-portrait-3.jpeg",
      alt: "Serene moment of love and togetherness",
      caption: "A Lifetime of Love — Hand in Hand",
      hindiCaption: "सदा सर्वदा संग चलने का अटूट विश्वास",
      category: "portrait",
    },
  ],

  audio: {
    title: "Night Changes (Indian Classical Fusion)",
    artist: "Bansuri, Santoor, Sitar & Orchestral Strings",
    src: "/audio/wedding-bgm.mp3",
    description: "Traditional Indian classical fusion with Western cinematic romance",
  },

  venue: {
    sectionTitle: "VENUE & LOCATION",
    cityHindi: "सरदारशहर (राजस्थान)",
    cityEnglish: "Sardarshahr, Rajasthan",
    venueName: "गिनाणी बास, वार्ड नं. 5",
    venueNameEnglish: "Ginani Bas, Ward No. 5",
    addressHindi: "गिनाणी बास, वार्ड नं. 5, सरदारशहर, जिला चूरू (राजस्थान)",
    address: "Ginani Bas, Ward No. 5, Sardarshahr, Churu District, Rajasthan",
    noticeHindi: "समस्त मांगलिक संस्कार एवं पावन उत्सव गिनाणी बास, वार्ड नं. 5, सरदारशहर (राजस्थान) में संपन्न होंगे।",
    noticeEnglish:
      "All auspicious wedding ceremonies will be solemnized at Ginani Bas, Ward No. 5, Sardarshahr, Rajasthan.",
    isAddressVerified: true,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ginani+Bas+Ward+No+5+Sardarshahr+Rajasthan",
  },

  finalMessage: {
    englishHeading: "WITH THE BLESSINGS OF OUR FAMILIES",
    englishSubheading:
      "WE WOULD LOVE TO HAVE YOU BY OUR SIDE AS WE BEGIN OUR FOREVER.",
    hindiBlessing: "आपका स्नेह और आशीर्वाद ही हमारे लिए सबसे अनमोल उपहार है।",
  },
};

