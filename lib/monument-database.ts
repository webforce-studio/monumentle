// Complete monument database with 61 monuments
// Last updated: 2025-07-20T09:56:14.089Z

export interface Monument {
  id: number
  name: string
  location: string
  country: string
  continent: string
  type: string
  kebabId?: string
  description: string
  yearBuilt: number | null
  height: number | null
  latitude: number | null
  longitude: number | null
  images: {
    thumbnail: { webp: string; jpg: string }
    medium: { webp: string; jpg: string }
    large: { webp: string; jpg: string }
  }
  attribution: {
    source: string
    photoId: string
    url: string
    photographer: string
    photographerUrl: string
  }
}

export const monuments: Monument[] = [
  {
    "id": 1,
    "name": "Eiffel Tower",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "eiffel-tower",
    "description": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognizable structures in the world. The Eiffel Tower is the tallest structure in Paris and the second tallest free-standing structure in France after the Millau Viaduct. It was the world's tallest man-made structure from 1889 to 1930, when it was surpassed by the Chrysler Building in New York City.",
    "yearBuilt": 1889,
    "height": 330,
    "latitude": 48.8584,
    "longitude": 2.2945,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "sfV_Tw658Y4",
      "url": "https://unsplash.com/photos/eiffel-tower-paris-sfV_Tw658Y4",
      "photographer": "Julien Doclot",
      "photographerUrl": "https://unsplash.com/@jdoclot"
    }
  },
  {
    "id": 5,
    "name": "Colosseum",
    "location": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "type": "Amphitheater",
    "kebabId": "colosseum",
    "description": "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest amphitheatre ever built, measuring approximately 189 meters long, 156 meters wide and 50 meters high. Despite its age, it is still the largest standing amphitheatre in the world today. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus. The Colosseum could hold an estimated 50,000 to 80,000 spectators at various points of its history over the centuries, having an average audience of some 65,000. It was used for gladiatorial contests and public spectacles such as mock naval battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology.",
    "yearBuilt": 80,
    "height": 48,
    "latitude": 41.8902,
    "longitude": 12.4922,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "VFRTXGw1VjU",
      "url": "https://unsplash.com/photos/colosseum-arena-photography-VFRTXGw1VjU",
      "photographer": "David Köhler",
      "photographerUrl": "https://unsplash.com/@davidkohler"
    }
  },
  {
    "id": 11,
    "name": "Stonehenge",
    "location": "Wiltshire",
    "country": "England",
    "continent": "Europe",
    "type": "Prehistoric Monument",
    "kebabId": "stonehenge",
    "description": "Stonehenge is a prehistoric monument in Wiltshire, England, consisting of a ring of standing stones. Each standing stone is around 13 feet high, seven feet wide, and weighs around 25 tons. The stones are set within earthworks in the middle of the most dense complex of Neolithic and Bronze Age monuments in England, including several hundred tumuli. Archaeologists believe it was constructed from 3100 to 2000 BC. The surrounding circular earth bank and ditch, which constitute the earliest phase of the monument, have been dated to about 3100 BC. Radiocarbon dating suggests that the first bluestones were raised between 2400 and 2200 BC, although they may have been at the site as early as 3000 BC.",
    "yearBuilt": -3100,
    "height": 7,
    "latitude": 51.1789,
    "longitude": -1.8262,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "yP8HHiF2okM",
      "url": "https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM",
      "photographer": "K. Mitch Hodge",
      "photographerUrl": "https://unsplash.com/@kmitchhodge"
    }
  },
  {
    "id": 12,
    "name": "Big Ben",
    "location": "London",
    "country": "England",
    "continent": "Europe",
    "type": "Clock Tower",
    "kebabId": "big-ben",
    "description": "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, England, and the name is frequently extended to refer to both the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower, but it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II. The tower was designed by Augustus Pugin in a neo-Gothic style. When completed in 1859, its clock was the largest and most accurate four-faced striking and chiming clock in the world. The tower stands 316 feet tall, and the climb from ground level to the belfry is 334 steps. Its base is square, measuring 40 feet on each side.",
    "yearBuilt": 1859,
    "height": 96,
    "latitude": 51.5007,
    "longitude": -0.1246,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "d80dS3gesa8",
      "url": "https://unsplash.com/photos/the-big-ben-clock-tower-towering-over-the-city-of-london-d80dS3gesa8",
      "photographer": "Marcin Nowak",
      "photographerUrl": "https://unsplash.com/@marcin_nowak"
    }
  },
  {
    "id": 14,
    "name": "Neuschwanstein Castle",
    "location": "Bavaria",
    "country": "Germany",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "neuschwanstein-castle",
    "description": "Neuschwanstein Castle is a 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by Ludwig II of Bavaria as a retreat and in honor of Richard Wagner. Ludwig paid for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. The castle was intended as a personal refuge for the reclusive king, but it was opened to the paying public immediately after his death in 1886. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually, with as many as 6,000 per day in the summer. The palace has appeared prominently in several movies and was the inspiration for Disneyland's Sleeping Beauty Castle and later, similar structures.",
    "yearBuilt": 1886,
    "height": 65,
    "latitude": 47.5576,
    "longitude": 10.7498,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "hMDRIo93xb0",
      "url": "https://unsplash.com/photos/white-and-gray-castle-on-top-of-hill-hMDRIo93xb0",
      "photographer": "Henrique Ferreira",
      "photographerUrl": "https://unsplash.com/@henriqueferreira"
    }
  },
  {
    "id": 16,
    "name": "Parthenon",
    "location": "Athens",
    "country": "Greece",
    "continent": "Europe",
    "type": "Temple",
    "kebabId": "parthenon",
    "description": "The Parthenon is a former temple on the Athenian Acropolis, Greece, dedicated to the goddess Athena, whom the people of Athens considered their patron. Construction began in 447 BC when the Athenian Empire was at the peak of its power. It was completed in 438 BC, although decoration of the building continued until 432 BC. It is the most important surviving building of Classical Greece, generally considered the zenith of the Doric order. Its decorative sculptures are considered some of the high points of Greek art. The Parthenon is regarded as an enduring symbol of Ancient Greece, democracy and Western civilization, and one of the world's greatest cultural monuments.",
    "yearBuilt": -447,
    "height": 14,
    "latitude": 37.9715,
    "longitude": 23.7267,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "ilQmlVIMN4c",
      "url": "https://unsplash.com/photos/view-of-brown-ruin-during-daytime-ilQmlVIMN4c",
      "photographer": "Spencer Davis",
      "photographerUrl": "https://unsplash.com/@spencerdavis"
    }
  },
  {
    "id": 19,
    "name": "Notre-Dame Cathedral",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "notre-dame-cathedral",
    "description": "Notre-Dame de Paris is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris, France. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. Its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, and the naturalism and abundance of its sculptural decoration set it apart from the earlier Romanesque style. Major components that make Notre-Dame stand out include one of the world's largest organs and its immense church bells. The cathedral was begun in 1163 under Bishop Maurice de Sully and was largely completed by 1260, though it was modified frequently in the following centuries. In the 1790s, Notre-Dame suffered desecration during the French Revolution; much of its religious imagery was damaged or destroyed.",
    "yearBuilt": 1345,
    "height": 69,
    "latitude": 48.853,
    "longitude": 2.3499,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "k5P45M2rSV0",
      "url": "https://unsplash.com/photos/a-large-cathedral-with-a-clock-on-the-front-of-it-k5P45M2rSV0",
      "photographer": "Léonard Cotte",
      "photographerUrl": "https://unsplash.com/@ettocl"
    }
  },
  {
    "id": 20,
    "name": "Tower Bridge",
    "location": "London",
    "country": "England",
    "continent": "Europe",
    "type": "Bridge",
    "kebabId": "tower-bridge",
    "description": "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become an iconic symbol of London. As a result, it is sometimes confused with London Bridge, situated some 0.5 miles upstream. Tower Bridge is one of five London bridges currently owned and maintained by the Bridge House Estates, a charitable trust overseen by the City of London Corporation. The bridge consists of two bridge towers tied together at the upper level by two horizontal walkways, designed to withstand the horizontal forces exerted by the suspended sections of the bridge on the landward sides of the towers. The vertical components of the forces in the suspended sections and the vertical reactions of the two walkways are carried by the two robust towers.",
    "yearBuilt": 1894,
    "height": 65,
    "latitude": 51.5055,
    "longitude": -0.0754,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "Q6UehpkBSnQ",
      "url": "https://unsplash.com/photos/london-bridge-london-Q6UehpkBSnQ",
      "photographer": "Eva Dang",
      "photographerUrl": "https://unsplash.com/@evantdang"
    }
  },
  {
    "id": 23,
    "name": "Alhambra",
    "location": "Granada",
    "country": "Spain",
    "continent": "Europe",
    "type": "Palace",
    "kebabId": "alhambra",
    "description": "The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. It was originally constructed as a fortress in AD 889 on the remains of Roman fortifications, and then largely ignored until its ruins were renovated and rebuilt in the mid-13th century by the Moorish emir Mohammed ben Al-Ahmar of the Emirate of Granada, who built its current palace and walls. It was converted into a royal palace in 1333 by Yusuf I, Sultan of Granada. After the conclusion of the Christian Reconquista in 1492, the site became the Royal Court of Ferdinand and Isabella, and the palaces were partially altered in the Renaissance style. In 1526, Charles I & V commissioned a new Renaissance palace better befitting the Holy Roman Emperor in the revolutionary Mannerist style influenced by Humanist philosophy in direct juxtaposition with the Nasrid Andalusian architecture.",
    "yearBuilt": 1238,
    "height": null,
    "latitude": 37.1773,
    "longitude": -3.5986,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "ududWyEyufk",
      "url": "https://unsplash.com/photos/a-large-building-with-a-clock-tower-on-top-of-it-ududWyEyufk",
      "photographer": "Tomas Malik",
      "photographerUrl": "https://unsplash.com/@maliktomas"
    }
  },
  {
    "id": 24,
    "name": "Acropolis",
    "location": "Athens",
    "country": "Greece",
    "continent": "Europe",
    "type": "Archaeological Site",
    "kebabId": "acropolis",
    "description": "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον and πόλις. Although the term acropolis is generic and there are many other acropoleis in Greece, the significance of the Acropolis of Athens is such that it is commonly known as 'The Acropolis' without qualification. During ancient times it was known also more properly as Cecropia, after the legendary serpent-man, Cecrops, the supposed first Athenian king. While there is evidence that the hill was inhabited as far back as the fourth millennium BC, it was Pericles in the fifth century BC who coordinated the construction of the site's most important present remains including the Parthenon, the Propylaia, the Erechtheium and the Temple of Athena Nike.",
    "yearBuilt": -447,
    "height": 156,
    "latitude": 37.9715,
    "longitude": 23.7267,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "yqBvJJ8jGBQ",
      "url": "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-yqBvJJ8jGBQ",
      "photographer": "Arthur Yeti",
      "photographerUrl": "https://unsplash.com/@arthuryeti"
    }
  },
  {
    "id": 25,
    "name": "St. Basil's Cathedral",
    "location": "Moscow",
    "country": "Russia",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "st-basils-cathedral",
    "description": "St. Basil's Cathedral is a Russian Orthodox church erected on the Red Square in Moscow in 1555–1561. Built on the order of Ivan the Terrible to commemorate the capture of Kazan and Astrakhan, it marks the geometric center of Moscow and the hub of the city's growth since the 14th century. It was the city's tallest building until the completion of the Ivan the Great Bell Tower in 1600. The original building, known as Trinity Church and later Trinity Cathedral, contained eight churches arranged around the ninth, central church of Intercession; the tenth church was erected in 1588 over the grave of venerated local saint Vasily (Basil). In the 16th and 17th centuries, the cathedral, perceived (together with the Kremlin) as a symbol of Moscow, was popularly known as Jerusalem.",
    "yearBuilt": 1561,
    "height": 65,
    "latitude": 55.7525,
    "longitude": 37.6231,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "8285167",
      "url": "https://www.pexels.com/photo/the-famous-saint-basil-s-cathedral-in-russia-8285167/",
      "photographer": "Anna Shvets",
      "photographerUrl": "https://www.pexels.com/@shvets-production"
    }
  },
  {
    "id": 26,
    "name": "Louvre Museum",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Museum",
    "kebabId": "louvre-museum",
    "description": "The Louvre is the world's most-visited museum and a historic landmark in Paris, France. It is the world's largest art museum and a historic monument. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement. Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters. The Louvre received 8.6 million visitors in 2019. The museum is housed in the Louvre Palace, originally built as the Louvre castle in the late 12th to 13th century under Philip II. Remnants of the fortress are visible in the basement of the museum. Due to urban expansion, the fortress eventually lost its defensive function, and in 1546 Francis I converted it into the primary residence of the French Kings.",
    "yearBuilt": 1793,
    "height": null,
    "latitude": 48.8606,
    "longitude": 2.3376,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "GCfE4fl7tIQ",
      "url": "https://unsplash.com/photos/people-gathering-near-louvre-museum-during-daytime-GCfE4fl7tIQ",
      "photographer": "Anthony Gauthier",
      "photographerUrl": "https://unsplash.com/@anthony_gauthier"
    }
  },
  {
    "id": 28,
    "name": "Buckingham Palace",
    "location": "London",
    "country": "England",
    "continent": "Europe",
    "type": "Palace",
    "kebabId": "buckingham-palace",
    "description": "Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning. Originally known as Buckingham House, the building at the core of today's palace was a large townhouse built for the Duke of Buckingham in 1703 on a site that had been in private ownership for at least 150 years. It was acquired by King George III in 1761 as a private residence for Queen Charlotte and became known as The Queen's House. During the 19th century it was enlarged, principally by architects John Nash and Edward Blore, who constructed three wings around a central courtyard. Buckingham Palace became the London residence of the British monarch on the accession of Queen Victoria in 1837. The palace has 775 rooms, including 19 State rooms, 52 Royal and guest bedrooms, 188 staff bedrooms, 92 offices and 78 bathrooms.",
    "yearBuilt": 1703,
    "height": 24,
    "latitude": 51.5014,
    "longitude": -0.1419,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "tPhw7EPFq6I",
      "url": "https://unsplash.com/photos/a-large-building-with-a-statue-in-front-of-it-tPhw7EPFq6I",
      "photographer": "Jamie Davies",
      "photographerUrl": "https://unsplash.com/@jamiedavies"
    }
  },
  {
    "id": 31,
    "name": "Brandenburg Gate",
    "location": "Berlin",
    "country": "Germany",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "brandenburg-gate",
    "description": "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II. Constructed from 1788 to 1791, it stands as a symbol of German reunification and European unity. The gate is composed of twelve Doric columns, six on each side, forming five passageways. Atop the gate is the Quadriga, a statue of Victoria, the Roman goddess of victory, driving a four-horse chariot. Throughout its history, the Brandenburg Gate has witnessed numerous historical events, including military parades, political rallies, and celebrations. It remains one of Berlin's most iconic landmarks and a popular tourist destination.",
    "yearBuilt": 1791,
    "height": 26,
    "latitude": 52.5163,
    "longitude": 13.3777,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "vidP-Ufhk2g",
      "url": "https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-building-vidP-Ufhk2g",
      "photographer": "Johannes Plenio",
      "photographerUrl": "https://unsplash.com/@jplenio"
    }
  },
  {
    "id": 36,
    "name": "Hagia Sophia",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Europe",
    "type": "Museum/Mosque",
    "kebabId": "hagia-sophia",
    "description": "Hagia Sophia is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles. Commissioned by the Byzantine emperor Justinian I and completed in 537 AD, it served as a cathedral for nearly a thousand years, renowned for its massive dome and intricate mosaics. In 1453, following the Ottoman conquest of Constantinople, it was converted into a mosque, with minarets added to its exterior and Islamic calligraphy adorning its interior. In 1935, it was secularized and opened as a museum, attracting millions of visitors each year. In 2020, it was re-designated as a mosque, sparking international debate and altering its accessibility to tourists.",
    "yearBuilt": 537,
    "height": 55,
    "latitude": 41.0086,
    "longitude": 28.9802,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "JbWg7W953LY",
      "url": "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-JbWg7W953LY",
      "photographer": "Ozan Safak",
      "photographerUrl": "https://unsplash.com/@ozansafak"
    }
  },
  {
    "id": 37,
    "name": "Blue Mosque",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Europe",
    "type": "Mosque",
    "kebabId": "blue-mosque",
    "description": "The Blue Mosque, officially known as the Sultan Ahmed Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. Constructed between 1609 and 1616 during the reign of Ahmed I, it is renowned for its stunning blue Iznik tiles adorning the interior walls, giving the mosque its popular name. The mosque features six minarets, a central dome, and eight smaller domes, showcasing classical Ottoman architecture. It remains an active place of worship and a major tourist attraction, offering visitors a glimpse into Istanbul's rich cultural and religious heritage.",
    "yearBuilt": 1616,
    "height": 43,
    "latitude": 41.0054,
    "longitude": 28.9768,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "cDE_FDdPT6Y",
      "url": "https://unsplash.com/photos/a-picture-of-a-building-that-looks-like-a-mosque-cDE_FDdPT6Y",
      "photographer": "ali çelik",
      "photographerUrl": "https://unsplash.com/@alicelik"
    }
  },
  {
    "id": 38,
    "name": "Palace of Versailles",
    "location": "Versailles",
    "country": "France",
    "continent": "Europe",
    "type": "Palace",
    "kebabId": "palace-of-versailles",
    "description": "The Palace of Versailles is a former royal residence located in Versailles, about 12 miles west of Paris, France. Originally a modest hunting lodge built by Louis XIII in 1623, it was transformed into a lavish palace by his son, Louis XIV, starting in 1661. The palace served as the center of political power in France from 1682 until the French Revolution in 1789. Known for its opulent architecture, extensive gardens, and Hall of Mirrors, the Palace of Versailles is a symbol of French royalty and a UNESCO World Heritage site, attracting millions of visitors annually.",
    "yearBuilt": 1682,
    "height": null,
    "latitude": 48.8049,
    "longitude": 2.1204,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "13692199",
      "url": "https://www.pexels.com/photo/marble-courtyard-palace-of-versailles-versailles-france-13692199/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 39,
    "name": "Leaning Tower of Pisa",
    "location": "Pisa",
    "country": "Italy",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "leaning-tower-of-pisa",
    "description": "The Leaning Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa. Construction began in 1173 and continued intermittently for about 200 years due to wars and financial difficulties. The tower's tilt is attributed to unstable soil beneath its foundation, which caused it to start leaning shortly after construction began. Despite ongoing efforts to stabilize the tower, it continues to lean at a rate of about one millimeter per year. The Leaning Tower of Pisa is a popular tourist attraction and a symbol of Italy's architectural heritage.",
    "yearBuilt": 1372,
    "height": 56,
    "latitude": 43.723,
    "longitude": 10.3966,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "4819294",
      "url": "https://www.pexels.com/photo/the-famous-pisa-cathedral-and-leaning-tower-of-pisa-in-italy-4819294/",
      "photographer": "David McBee",
      "photographerUrl": "https://www.pexels.com/@david-mcbee"
    }
  },
  {
    "id": 40,
    "name": "Mont Saint-Michel",
    "location": "Normandy",
    "country": "France",
    "continent": "Europe",
    "type": "Island/Abbey",
    "kebabId": "mont-saint-michel",
    "description": "Mont-Saint-Michel is a tidal island and mainland commune in Normandy, France. The island has held strategic fortifications since ancient times, and from the 8th century AD was the seat of the monastery from which it draws its name. The structural composition of the town exemplifies the feudal society that constructed it: on top, God, the abbey; below, the great halls, then the stores and housing, and at the bottom, outside the walls, the fishermen's and farmers' houses. Today, Mont-Saint-Michel is a UNESCO World Heritage site and a popular tourist destination, attracting millions of visitors each year.",
    "yearBuilt": 708,
    "height": 80,
    "latitude": 48.636,
    "longitude": -1.5114,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "EaEEml67Ws8",
      "url": "https://unsplash.com/photos/brown-concrete-building-near-body-of-water-during-daytime-EaEEml67Ws8",
      "photographer": "Loic Mermilliod",
      "photographerUrl": "https://unsplash.com/@loicmermilliod"
    }
  },
  {
    "id": 41,
    "name": "Chichen Itza",
    "location": "Yucatán",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "chichen-itza",
    "description": "Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was one of the largest Maya cities and it was likely to have been one of the great powers in the Maya world. Chichen Itza was a major economic power in the northern Maya lowlands from the Late Classic through the Terminal Classic and into the early Postclassic periods. The archaeological site is a popular tourist destination, attracting millions of visitors each year.",
    "yearBuilt": 600,
    "height": 30,
    "latitude": 20.6843,
    "longitude": -88.5678,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "3290068",
      "url": "https://www.pexels.com/photo/chichen-itza-pyramid-in-mexico-3290068/",
      "photographer": "Quang Nguyen Vinh",
      "photographerUrl": "https://www.pexels.com/@quang-nguyen-vinh-222549"
    }
  },
  {
    "id": 4,
    "name": "Taj Mahal",
    "location": "Agra",
    "country": "India",
    "continent": "Asia",
    "type": "Mausoleum",
    "kebabId": "taj-mahal",
    "description": "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centerpiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal is regarded by many as the finest example of Mughal architecture, a style that combines elements from Persian, Ottoman Turkish and Indian architectural styles.",
    "yearBuilt": 1653,
    "height": 73,
    "latitude": 27.1751,
    "longitude": 78.0421,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "iWMfiInivp4",
      "url": "https://unsplash.com/photos/taj-mahal-india-iWMfiInivp4",
      "photographer": "Soham Banerjee",
      "photographerUrl": "https://unsplash.com/@soham_banerjee"
    }
  },
  {
    "id": 7,
    "name": "Great Wall of China",
    "location": "Beijing",
    "country": "China",
    "continent": "Asia",
    "type": "Fortification",
    "kebabId": "great-wall-of-china",
    "description": "The Great Wall of China is a series of fortifications and walls built across the historical northern borders of ancient Chinese states. Several walls were being built from as early as the 7th century BC, by ancient Chinese states to protect their territories. The best-known section of the wall was built by the Qin dynasty (221–206 BC). The wall stretches from Dandong in the east to Lop Lake in the west, along an arc that roughly delineates the southern edge of Inner Mongolia. The Great Wall is a UNESCO World Heritage Site and is one of the most popular tourist attractions in the world.",
    "yearBuilt": -220,
    "height": 8,
    "latitude": 40.4319,
    "longitude": 116.5704,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "HwY9R6_YzgM",
      "url": "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
      "photographer": "zhang kaiyv",
      "photographerUrl": "https://unsplash.com/@zhang_kaiyv"
    }
  },
  {
    "id": 13,
    "name": "Angkor Wat",
    "location": "Siem Reap",
    "country": "Cambodia",
    "continent": "Asia",
    "type": "Temple Complex",
    "kebabId": "angkor-wat",
    "description": "Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world. It was originally constructed in the first half of the 12th century as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple towards the end of the 12th century. It was built by King Suryavarman II. Angkor Wat combines two basic plans of Khmer temple architecture: the temple-mountain and the galleried temple. It is designed to represent Mount Meru, home of the gods in Hindu mythology. Angkor Wat is a UNESCO World Heritage Site and is a major tourist destination.",
    "yearBuilt": 1150,
    "height": 65,
    "latitude": 13.4125,
    "longitude": 103.867,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "gt3gK_Wob2g",
      "url": "https://unsplash.com/photos/people-walking-on-park-near-trees-and-building-during-daytime-gt3gK_Wob2g",
      "photographer": "Arun Kuchibhotla",
      "photographerUrl": "https://unsplash.com/@arunkuchibhotla"
    }
  },
  {
    "id": 22,
    "name": "Forbidden City",
    "location": "Beijing",
    "country": "China",
    "continent": "Asia",
    "type": "Palace",
    "kebabId": "forbidden-city",
    "description": "The Forbidden City is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing. It is surrounded by numerous opulent imperial gardens and temples. The Forbidden City was constructed from 1406 to 1420, and was the former Chinese imperial palace and winter residence of the Emperor of China from the Ming dynasty to the end of the Qing dynasty, between 1420 and 1924. The Forbidden City was declared a World Heritage Site in 1987, and is listed by UNESCO as the largest collection of preserved ancient wooden structures in the world. Since 1925, the Forbidden City has been under the charge of the Palace Museum, whose extensive collection of artwork and artifacts were built upon the imperial collections of the Ming and Qing dynasties.",
    "yearBuilt": 1420,
    "height": null,
    "latitude": 39.9163,
    "longitude": 116.3972,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=600&fit=crop&crop=center&auto=format&q=85images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "wXyf-U8HqiI",
      "url": "https://unsplash.com/photos/empty-brown-and-white-building-during-daytime-wXyf-U8HqiI",
      "photographer": "zhang jiawei",
      "photographerUrl": "https://unsplash.com/@zhang_jiawei"
    }
  },
  {
    "id": 3,
    "name": "Statue of Liberty",
    "location": "New York",
    "country": "USA",
    "continent": "North America",
    "type": "Statue",
    "kebabId": "statue-of-liberty",
    "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor. The statue is a figure of Libertas, a Roman liberty goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776), the date of the U.S. Declaration of Independence. A broken chain and shackle lie at her feet as she walks forward, commemorating the national abolition of slavery. The statue is an icon of freedom and of the United States: a welcoming signal to immigrants arriving from abroad. The statue was dedicated on October 28, 1886.",
    "yearBuilt": 1886,
    "height": 93,
    "latitude": 40.6892,
    "longitude": -74.0445,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "QqUceByQlhM",
      "url": "https://unsplash.com/photos/statue-of-liberty-QqUceByQlhM",
      "photographer": "Yuhan Du",
      "photographerUrl": "https://unsplash.com/@yuhan_du"
    }
  },
  {
    "id": 15,
    "name": "Mount Rushmore",
    "location": "South Dakota",
    "country": "USA",
    "continent": "North America",
    "type": "Monument",
    "kebabId": "mount-rushmore",
    "description": "Mount Rushmore National Memorial is a sculpture carved into the granite face of Mount Rushmore. The memorial features 60-foot (18 m) sculptures of the heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. The memorial covers 1,278 acres (2.0 sq mi; 5.2 km2) and is 5,725 feet (1,745 m) above sea level. The project started in 1927 and was completed in 1941. Mount Rushmore attracts around three million people every year.",
    "yearBuilt": 1941,
    "height": 18,
    "latitude": 43.8791,
    "longitude": -103.4591,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "9_onxRgAmRA",
      "url": "https://unsplash.com/photos/mount-ruhsmore-9_onxRgAmRA",
      "photographer": "Lance Asper",
      "photographerUrl": "https://unsplash.com/@lanceasper"
    }
  },
  {
    "id": 18,
    "name": "Golden Gate Bridge",
    "location": "San Francisco",
    "country": "USA",
    "continent": "North America",
    "type": "Bridge",
    "kebabId": "golden-gate-bridge",
    "description": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers. The bridge took four years to build and was completed in 1937. The Golden Gate Bridge is a popular tourist destination, attracting millions of visitors each year.",
    "yearBuilt": 1937,
    "height": 227,
    "latitude": 37.8199,
    "longitude": -122.4783,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1kf69eE7VR4",
      "url": "https://unsplash.com/photos/golden-gate-bridge-during-daytime-1kf69eE7VR4",
      "photographer": "Denise Jans",
      "photographerUrl": "https://unsplash.com/@denise_jans"
    }
  },
  {
    "id": 6,
    "name": "Machu Picchu",
    "location": "Cusco",
    "country": "Peru",
    "continent": "South America",
    "type": "Archaeological Site",
    "kebabId": "machu-picchu",
    "description": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. It is situated on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machu Picchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows through it, cutting through the Cordillera and creating a canyon with a tropical mountain climate. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Machu Picchu was declared a Peruvian Historical Sanctuary in 1981 and a UNESCO World Heritage Site in 1983.",
    "yearBuilt": 1450,
    "height": 2430,
    "latitude": -13.1631,
    "longitude": -72.545,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "yam1KMv0SgQ",
      "url": "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
      "photographer": "Samuel Ferrara",
      "photographerUrl": "https://unsplash.com/@samuelferrara"
    }
  },
  {
    "id": 9,
    "name": "Christ the Redeemer",
    "location": "Rio de Janeiro",
    "country": "Brazil",
    "continent": "South America",
    "type": "Statue",
    "kebabId": "christ-the-redeemer",
    "description": "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. The statue is 30 metres (98 ft) tall, not including its 8-metre (26 ft) pedestal, and its arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. The statue is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil, and is listed as one of the New Seven Wonders of the World.",
    "yearBuilt": 1931,
    "height": 38,
    "latitude": -22.9519,
    "longitude": -43.2105,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "OkiDIla7K8Q",
      "url": "https://unsplash.com/photos/christ-the-redeemer-brazil-OkiDIla7K8Q",
      "photographer": "Victor Soares",
      "photographerUrl": "https://unsplash.com/@vitorsr"
    }
  },
  {
    "id": 27,
    "name": "Easter Island Moai",
    "location": "Easter Island",
    "country": "Chile",
    "continent": "South America",
    "type": "Statues",
    "kebabId": "easter-island-moai",
    "description": "The moai are monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia. Nearly half are still at Rano Raraku, the main moai quarry, but hundreds were transported from there and set on stone platforms called ahu around the island's perimeter. Almost all moai have overly large heads, which comprise three-eighths the size of the whole statue. The moai are chiefly the living faces (aringa ora) of deified ancestors (tupuna) or important contemporary figures and were symbols of authority and power, both religious and political. They were neither portraits nor commemorative statues, but rather a way to invoke the spirit of the ancestors.",
    "yearBuilt": 1250,
    "height": 4,
    "latitude": -27.1127,
    "longitude": -109.3497,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "2Qjk2PfaH3o",
      "url": "https://unsplash.com/photos/moai-easter-island-2Qjk2PfaH3o",
      "photographer": "Cristian Palmer",
      "photographerUrl": "https://unsplash.com/@cristianpalmer"
    }
  },
  {
    "id": 2,
    "name": "Great Pyramid of Giza",
    "location": "Giza",
    "country": "Egypt",
    "continent": "Africa",
    "type": "Pyramid",
    "kebabId": "great-pyramid-of-giza",
    "description": "The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. Egyptologists believe that the pyramid was built as a tomb for the Fourth Dynasty pharaoh Khufu and was constructed over a 20-year period concluding around 2560 BC. Initially standing at 146.6 metres (481 feet) tall, the Great Pyramid was the tallest man-made structure in the world for more than 3,800 years. The Great Pyramid is composed of an estimated 2.3 million blocks of stone, some weighing as much as 80 tons.",
    "yearBuilt": -2580,
    "height": 146,
    "latitude": 29.9792,
    "longitude": 31.1342,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "t3Xgc1q7N9g",
      "url": "https://unsplash.com/photos/two-pyramids-in-the-desert-with-a-blue-sky-in-the-background-t3Xgc1q7N9g",
      "photographer": "Ahmed Abdalla",
      "photographerUrl": "https://unsplash.com/@ahmed_abdalla"
    }
  },
  {
    "id": 10,
    "name": "Sydney Opera House",
    "location": "Sydney",
    "country": "Australia",
    "continent": "Oceania",
    "type": "Performance Venue",
    "kebabId": "sydney-opera-house",
    "description": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia. It is one of the 20th century's most distinctive buildings and one of the most famous performing arts centres in the world. Situated on Bennelong Point in Sydney Harbour, with views of the Sydney Harbour Bridge, it comprises multiple performance venues which together host well over 1,500 performances annually, attended by more than 1.2 million people. It was opened in 1973, after a long and controversial construction period beginning in 1957.",
    "yearBuilt": 1973,
    "height": 65,
    "latitude": -33.8568,
    "longitude": 151.2153,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "kRGjlSe7Df0",
      "url": "https://unsplash.com/photos/sydney-opera-house-australia-at-daytime-kRGjlSe7Df0",
      "photographer": "Eva Elijas",
      "photographerUrl": "https://unsplash.com/@evaelijas"
    }
  },
  {
    "id": 8,
    "name": "Petra",
    "location": "Ma'an Governorate",
    "country": "Jordan",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "petra",
    "description": "Petra is a famous archaeological site in Jordan's southwestern desert, dating to around 300 B.C. Once the capital of the Nabataean kingdom, it's accessed via a narrow canyon called Al-Siq, which contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the 'Rose City'. Petra was rediscovered to the Western world in 1812 by Swiss explorer Johann Ludwig Burckhardt. Petra is a UNESCO World Heritage Site and one of the New7Wonders of the World.",
    "yearBuilt": -300,
    "height": null,
    "latitude": 30.3285,
    "longitude": 35.4444,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "eoZTnFtusDs",
      "url": "https://unsplash.com/photos/low-angle-photography-of-brown-concrete-building-eoZTnFtusDs",
      "photographer": "shai palmer",
      "photographerUrl": "https://unsplash.com/@shaipalmer"
    }
  },
  {
    "id": 243,
    "name": "Dome of the Rock",
    "location": "Jerusalem",
    "country": "Israel/Palestine",
    "continent": "Middle East",
    "type": "Shrine",
    "kebabId": "dome-of-the-rock",
    "description": "The Dome of the Rock is an Islamic shrine located on the Temple Mount in the Old City of Jerusalem. It was initially completed in 691–92 CE, making it one of the oldest works of Islamic architecture. Its architecture and mosaics were patterned after nearby Byzantine churches and palaces. The Dome of the Rock remains a potent symbol of both Palestinian nationalism and Islamic identity in Jerusalem.",
    "yearBuilt": 691,
    "height": 20,
    "latitude": 31.778,
    "longitude": 35.2354,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "11565073",
      "url": "https://www.pexels.com/photo/dome-of-the-rock-jerusalem-11565073/",
      "photographer": "George Bohunicky",
      "photographerUrl": "https://www.pexels.com/@george-bohunicky"
    }
  },
  {
    "id": 42,
    "name": "Sagrada Familia",
    "location": "Barcelona",
    "country": "Spain",
    "continent": "Europe",
    "type": "Church",
    "kebabId": "sagrada-familia",
    "description": "The Sagrada Familia is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Spanish architect Antoni Gaudí, his work on Sagrada Familia is part of a UNESCO World Heritage Site. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica. Construction commenced in 1882 and Gaudí became involved in 1883, taking over the design and transforming it with his architectural and engineering style, combining Gothic and curvilinear Art Nouveau forms. Gaudí devoted the remainder of his life to the project, and he is buried in the crypt. At the time of his death in 1926, less than a quarter of the project was complete. Construction is expected to be completed in 2026, a century after Gaudí's death.",
    "yearBuilt": 2026,
    "height": 172,
    "latitude": 41.4036,
    "longitude": 2.1744,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "11773991",
      "url": "https://www.pexels.com/photo/brown-concrete-building-under-the-blue-sky-11773991/",
      "photographer": "Ricardo Gomez Angel",
      "photographerUrl": "https://www.pexels.com/@ricardo-gomez-angel-224429"
    }
  },
  {
    "id": 43,
    "name": "Pantheon",
    "location": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "type": "Temple",
    "kebabId": "pantheon",
    "description": "The Pantheon is a former Roman temple and since 609 AD a Catholic church in Rome, Italy. It was commissioned by Marcus Agrippa during the reign of Emperor Augustus (27 BC – 14 AD) and rebuilt by the emperor Hadrian about 126 AD. Its large circular domed cella, with a conventional portico front, was traditionally dedicated to all the gods. The building is circular in plan, with a portico of large granite Corinthian columns (eight in the first rank and two groups of four behind) under a pediment. A rectangular vestibule links the portico to the cella, which is circular with a domed concrete roof. The oculus at the dome's apex is the cella's only source of natural light.",
    "yearBuilt": 126,
    "height": 43,
    "latitude": 41.8986,
    "longitude": 12.4769,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "TLYzsNu8md0",
      "url": "https://unsplash.com/photos/people-walking-near-brown-concrete-building-during-daytime-TLYzsNu8md0",
      "photographer": "Ricardo Gomez Angel",
      "photographerUrl": "https://unsplash.com/@ricardo-gomez-angel-224429"
    }
  },
  {
    "id": 44,
    "name": "Trevi Fountain",
    "location": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "type": "Fountain",
    "kebabId": "trevi-fountain",
    "description": "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 metres (86 ft) high and 49.15 metres (161.3 ft) wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world. The fountain has appeared in several notable films, including Roman Holiday, Three Coins in the Fountain, Federico Fellini's La Dolce Vita, and The Lizzie McGuire Movie. Tradition holds that throwing a coin into the fountain ensures a return to Rome.",
    "yearBuilt": 1762,
    "height": 26,
    "latitude": 41.9009,
    "longitude": 12.4833,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "I1Lv2yX67GI",
      "url": "https://unsplash.com/photos/brown-concrete-house-I1Lv2yX67GI",
      "photographer": "Stijn Dijkstra",
      "photographerUrl": "https://unsplash.com/@stijndijkstra"
    }
  },
  {
    "id": 45,
    "name": "St. Peter's Basilica",
    "location": "Vatican City",
    "country": "Vatican",
    "continent": "Europe",
    "type": "Church",
    "kebabId": "st-peters-basilica",
    "description": "The Papal Basilica of Saint Peter in the Vatican is a church built in the Renaissance style located in Vatican City. It is often referred to as the greatest church in Christendom. It stands on the site where Saint Peter was crucified and buried. Construction of the present basilica began on 18 April 1506 and was completed on 18 November 1626. The dome is a major feature of the basilica, both externally and internally. It was designed by Michelangelo and completed after his death by Giacomo della Porta and Domenico Fontana.",
    "yearBuilt": 1626,
    "height": 136,
    "latitude": 41.9022,
    "longitude": 12.4539,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "1207962",
      "url": "https://www.pexels.com/photo/white-concrete-mosque-1207962/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 46,
    "name": "Arc de Triomphe",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "arc-de-triomphe",
    "description": "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the centre of the Place Charles de Gaulle (also known as the Étoile, the 'Star'). It honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I. The Arc de Triomphe is a key monument in Paris and hosts many national events.",
    "yearBuilt": 1836,
    "height": 50,
    "latitude": 48.8738,
    "longitude": 2.295,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "17064527",
      "url": "https://www.pexels.com/photo/arc-de-triomphe-in-paris-on-a-sunny-day-17064527/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 47,
    "name": "Pompeii",
    "location": "Naples",
    "country": "Italy",
    "continent": "Europe",
    "type": "Archaeological Site",
    "kebabId": "pompeii",
    "description": "Pompeii was an ancient city located in what is now the comune of Pompei near Naples in the Campania region of Italy. Pompeii, along with Herculaneum and many villas in the surrounding area, was mostly destroyed and buried under 4 to 6 m (13 to 20 ft) of ash and pumice in the eruption of Mount Vesuvius in 79 AD. The city was lost for nearly 1,500 years until its accidental rediscovery in 1748. The excavated site offers a unique snapshot of Roman life, frozen at the moment it was overwhelmed, and is a popular tourist attraction.",
    "yearBuilt": -600,
    "height": null,
    "latitude": 40.7489,
    "longitude": 14.4989,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "6v-S0mlnIJg",
      "url": "https://unsplash.com/photos/the-ruins-of-the-ancient-city-of-pompei-6v-S0mlnIJg",
      "photographer": "Darya Sannikova",
      "photographerUrl": "https://unsplash.com/@daryasannikova"
    }
  },
  {
    "id": 48,
    "name": "Santorini",
    "location": "Cyclades",
    "country": "Greece",
    "continent": "Europe",
    "type": "Island",
    "kebabId": "santorini",
    "description": "Santorini is a Greek island in the southern Aegean Sea, about 200 km southeast from the Greek mainland. It is the largest island of a small, circular archipelago, which bears the same name and is the remnant of a volcanic caldera. It is characterised by its whitewashed, cubiform houses clinging to cliffs above an underwater caldera. The island is a popular tourist destination, known for its stunning sunsets, volcanic beaches, and ancient cities.",
    "yearBuilt": null,
    "height": 566,
    "latitude": 36.3932,
    "longitude": 25.4615,
    "images": {
      "thumbnail": {
        "webp": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "p2xPbxVfw2U",
      "url": "https://unsplash.com/photos/famous-greek-iconic-selfie-spot-tourist-destination-oia-village-with-traditional-white-houses-and-windmills-in-santorini-island-on-sunset-in-twilight-greece-p2xPbxVfw2U",
      "photographer": "George Tsakalidis",
      "photographerUrl": "https://unsplash.com/@georgetsakalidis"
    }
  },
  {
    "id": 49,
    "name": "Duomo di Milano",
    "location": "Milan",
    "country": "Italy",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "duomo-di-milano",
    "description": "Milan Cathedral is the cathedral church of Milan, Lombardy, Italy. Dedicated to the Nativity of St Mary, it is the seat of the Archbishop of Milan, currently Archbishop Mario Delpini. The Gothic cathedral took nearly six centuries to complete: construction began in 1386, and the final details were completed in 1965. It is the largest church in Italy (St. Peter's Basilica is in the State of Vatican City) and the third largest in the world. The Duomo is renowned for its intricate facade, towering spires, and stunning stained glass windows.",
    "yearBuilt": 1965,
    "height": 108,
    "latitude": 45.464,
    "longitude": 9.1916,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "0xe2FGo7Vc0",
      "url": "https://unsplash.com/photos/people-walking-near-brown-concrete-building-during-daytime-0xe2FGo7Vc0",
      "photographer": "Sergey Katyshkin",
      "photographerUrl": "https://unsplash.com/@katyshkin"
    }
  },
  {
    "id": 50,
    "name": "Prague Castle",
    "location": "Prague",
    "country": "Czech Republic",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "prague-castle",
    "description": "Prague Castle is a castle complex in Prague, Czech Republic, built in the 9th century. It is one of the largest ancient castles in the world, occupying an area of almost 70,000 square meters. A major landmark of Prague, it is the official residence and office of the President of the Czech Republic. The castle contains a variety of historical buildings, including St. Vitus Cathedral, Old Royal Palace, St. George's Basilica, and Golden Lane.",
    "yearBuilt": 870,
    "height": null,
    "latitude": 50.0909,
    "longitude": 14.4009,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "lD6b_wEEg_Y",
      "url": "https://unsplash.com/photos/a-large-cathedral-with-a-clock-on-its-side-lD6b_wEEg_Y",
      "photographer": "Daniel Viskupič",
      "photographerUrl": "https://unsplash.com/@danielviskupic"
    }
  },
  {
    "id": 51,
    "name": "Charles Bridge",
    "location": "Prague",
    "country": "Czech Republic",
    "continent": "Europe",
    "type": "Bridge",
    "kebabId": "charles-bridge",
    "description": "Charles Bridge is a medieval stone arch bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under King Charles IV and finished in the beginning of the 15th century. As the only means of crossing the Vltava river until 1841, Charles Bridge was the most important connection between Prague Castle and the city's Old Town and adjacent areas. The bridge is decorated by a continuous alley of 30 statues and statuaries, most of them baroque-style, originally erected around 1700.",
    "yearBuilt": 1402,
    "height": null,
    "latitude": 50.0865,
    "longitude": 14.4114,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "19579405",
      "url": "https://www.pexels.com/photo/view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic-19579405/",
      "photographer": "Martin Vorel",
      "photographerUrl": "https://www.pexels.com/@martin-vorel-214741717"
    }
  },
  {
    "id": 52,
    "name": "Bran Castle",
    "location": "Transylvania",
    "country": "Romania",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "bran-castle",
    "description": "Bran Castle is a castle in Brașov County, Romania, situated near Bran and in the immediate vicinity of Brașov. It is commonly known as 'Dracula's Castle', being marketed as the home of the titular character in Bram Stoker's Dracula. However, there is no evidence that Stoker knew anything about this castle, which has only tangential associations with Vlad the Impaler, voivode of Wallachia, the Romanian ruler who inspired the Dracula character. The castle is now a museum open to tourists, displaying art and furniture collected by Queen Marie of Romania.",
    "yearBuilt": 1388,
    "height": null,
    "latitude": 45.5152,
    "longitude": 25.3676,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "8A496IhZ47A",
      "url": "https://unsplash.com/photos/white-and-brown-concrete-castle-8A496IhZ47A",
      "photographer": "Robert Tudor",
      "photographerUrl": "https://unsplash.com/@roberttudor"
    }
  },
  {
    "id": 53,
    "name": "Edinburgh Castle",
    "location": "Edinburgh",
    "country": "Scotland",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "edinburgh-castle",
    "description": "Edinburgh Castle is a historic castle in Edinburgh, Scotland. It stands on Castle Rock, which has been occupied by humans since at least the Iron Age. The castle served as a royal residence, military garrison, prison, and armory. Edinburgh Castle is a major tourist attraction, attracting millions of visitors each year. It is also a symbol of Edinburgh and Scotland.",
    "yearBuilt": 1103,
    "height": null,
    "latitude": 55.9486,
    "longitude": -3.1999,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "21235066",
      "url": "https://www.pexels.com/photo/edinburgh-castle-in-scotland-21235066/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 54,
    "name": "Guggenheim Museum",
    "location": "Bilbao",
    "country": "Spain",
    "continent": "Europe",
    "type": "Museum",
    "kebabId": "guggenheim-museum",
    "description": "The Guggenheim Museum Bilbao is a museum of modern and contemporary art designed by Canadian-American architect Frank Gehry. It is one of several museums belonging to the Solomon R. Guggenheim Foundation. The museum was opened in 1997 and is built alongside the Nervion River, which runs through the city of Bilbao to the Atlantic Coast. The Guggenheim Bilbao is one of the largest museums in Spain. The museum is one of Bilbao's major tourist attractions, helping to revitalize the city.",
    "yearBuilt": 1997,
    "height": 50,
    "latitude": 43.2687,
    "longitude": -2.9343,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "i1i40Cv7jb4",
      "url": "https://unsplash.com/photos/people-walking-near-white-concrete-building-during-daytime-i1i40Cv7jb4",
      "photographer": "Guillaume Marques",
      "photographerUrl": "https://unsplash.com/@guillaume_marques"
    }
  },
  {
    "id": 244,
    "name": "Meteora",
    "location": "Thessaly",
    "country": "Greece",
    "continent": "Europe",
    "type": "Monastery",
    "kebabId": "meteora",
    "description": "Meteora is a striking geological formation located in northwestern Thessaly Greece near the town of Kalabaka and the village of Kastraki. The name Meteora means lofty or suspended in the air which aptly describes this collection of massive sandstone pillars rising up to 400 meters above the plain. Perched atop these natural columns are six active Eastern Orthodox monasteries out of the original twenty-four established in the 14th century under the rule of Simeon Uroš. These monasteries include Great Meteoron Varlaam Saint Nicholas Anapausas Rousanou Holy Trinity and Saint Stephen. Originally these remote sanctuaries were accessible only by retractable rope ladders and nets providing effective defense and isolation for monks and nuns. Meteora's unique combination of spectacular geology spiritual significance and medieval architecture led to its inscription as a UNESCO World Heritage Site in 1988.",
    "yearBuilt": 1350,
    "height": null,
    "latitude": 39.721729,
    "longitude": 21.630466,
    "images": {
      "thumbnail": {
        "webp": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1661927459496-754b4215ff06",
      "url": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 245,
    "name": "Cologne Cathedral",
    "location": "Cologne",
    "country": "Germany",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "cologne-cathedral",
    "description": "Cologne Cathedral (Kölner Dom) is a renowned Gothic cathedral located in Cologne Germany. Initiated in 1248 to house the purported relics of the Three Wise Men its construction halted during the 16th century and remained unfinished for hundreds of years. Work resumed in the 19th century guided by original medieval plans and the cathedral was finally completed in 1880. Famous for its immense twin spires which rise to 157 meters it remained the world's tallest building until 1884. Cologne Cathedral is celebrated for its masterful Gothic architecture intricate stained-glass windows and its status as a symbol of enduring faith and unity through centuries of war modernization and restoration. In recognition of its significance in both religious and architectural history the cathedral became a UNESCO World Heritage Site in 1996.",
    "yearBuilt": 1248,
    "height": null,
    "latitude": 50.941278,
    "longitude": 6.958281,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 246,
    "name": "Atomium",
    "location": "Brussels",
    "country": "Belgium",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "atomium",
    "description": "The Atomium is a landmark building in Brussels Belgium originally constructed for the 1958 Brussels World's Fair (Expo 58). Designed by engineer André Waterkeyn and architects André and Jean Polak the structure represents an iron crystal magnified 165 billion times composed of nine interconnected stainless steel spheres. Standing at 102 meters tall the Atomium was envisioned as a symbol of scientific progress and the atomic age. The interconnected spheres house exhibition spaces and public areas and a panoramic viewing platform at the top offers vistas over Brussels. The Atomium is an iconic example of post-war optimism and modernist design and it has become one of Belgium's most recognized symbols as well as a major tourist attraction.",
    "yearBuilt": 1957,
    "height": null,
    "latitude": 50.895167,
    "longitude": 4.341389,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 247,
    "name": "Ponte Vecchio",
    "location": "Florence",
    "country": "Italy",
    "continent": "Europe",
    "type": "Bridge",
    "kebabId": "ponte-vecchio",
    "description": "The Ponte Vecchio or Old Bridge is a medieval stone arch bridge spanning the Arno River in Florence Italy. Renowned as the city's oldest and most famous bridge it has been a vital river crossing since Roman times. The present bridge was constructed in 1345 following disastrous floods that destroyed earlier versions. Notably the Ponte Vecchio has merchant shops built along its span—a tradition dating back to the 13th century—originally butchers and tanners later replaced by jewelers and goldsmiths. Richly associated with Florence's economic and cultural life the bridge survived World War II intact allegedly spared by Hitler's orders. Its charming architecture and the bustling market atmosphere maintain its status as a symbol of Florence and an enduring feat of medieval engineering.",
    "yearBuilt": 1345,
    "height": null,
    "latitude": 43.767917,
    "longitude": 11.253167,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 248,
    "name": "White Tower",
    "location": "Thessaloniki",
    "country": "Greece",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "white-tower",
    "description": "The White Tower of Thessaloniki is a cylindrical stone tower guarding the waterfront of Thessaloniki Greece. Constructed in the 15th century as part of the city's Ottoman fortifications it succeeded an older Byzantine tower at the same location. The tower served various defensive and administrative functions including use as a garrison and prison infamously known as the Tower of Blood due to its history as a site for executions. In 1912 after Thessaloniki's incorporation into Greece it was whitewashed as a symbol of cleansing and hope granting its current name. Standing 34 meters high and offering sweeping views of the city and Thermaic Gulf the White Tower is one of Thessaloniki's most recognizable monuments and today functions as a museum exploring the city's rich history.",
    "yearBuilt": 1450,
    "height": null,
    "latitude": 40.626667,
    "longitude": 22.948611,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 249,
    "name": "Windmills",
    "location": "Kinderdijk",
    "country": "Netherlands",
    "continent": "Europe",
    "type": "Historic Site",
    "kebabId": "windmills",
    "description": "The Windmills of Kinderdijk comprise a network of 19 monumental windmills constructed between 1738 and 1740 in the Alblasserwaard polder South Holland. Built to prevent flooding by pumping excess water out of the low-lying polder at the confluence of the Lek and Noord rivers these mills represent the largest concentration of old windmills in the Netherlands. Renowned for their role in Dutch water management they are considered symbols of Dutch ingenuity and resilience against the sea. Kinderdijk has been recognized as a UNESCO World Heritage Site since 1997 celebrated for its preservation and the exceptional technology of water control it demonstrates. The windmills remain a major Dutch tourist attraction and an iconic image of the Netherlands.",
    "yearBuilt": 1738,
    "height": null,
    "latitude": 51.8825,
    "longitude": 4.64944,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 250,
    "name": "Sintra",
    "location": "Lisbon",
    "country": "Portugal",
    "continent": "Europe",
    "type": "Historic Town",
    "kebabId": "sintra",
    "description": "Sintra is a picturesque town nestled in the Sintra Mountains near Lisbon. The historic center is notable for its medieval layout and romantic architectural ensemble attracting visitors with its winding lanes and lush mountain settings. The standout monument is the Palácio Nacional da Pena (Pena Palace) a 19th-century Romanticist castle built atop a former monastery between 1842 and 1854 blending Neo-Gothic Neo-Manueline and Moorish Revival styles with vivid colors. Both the palace and the town are inscribed as UNESCO World Heritage Sites celebrated for their harmonious integration of natural landscapes and revivalist architecture alongside Moorish and medieval remnants. Sintra is famed for its enchanting palaces exotic gardens mystic woods and fairy tale atmosphere.",
    "yearBuilt": 1842,
    "height": null,
    "latitude": 38.7876,
    "longitude": -9.3907,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 251,
    "name": "Belém Tower",
    "location": "Lisbon",
    "country": "Portugal",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "bel-m-tower",
    "description": "Belém Tower or Torre de Belém stands on the northern bank of the Tagus River in Lisbon. Built from 1514 to 1519 under the reign of King Manuel I this fortress was designed by Francisco de Arruda in the distinctive Portuguese Manueline style blending ornate Gothic and Moorish elements. Originally a defensive bastion to guard the river entrance and as a ceremonial gateway to Lisbon its richly decorated structure—with sculpted battlements and maritime motifs—symbolizes Portugal's Age of Discovery. Recognized as a UNESCO World Heritage Site the tower is an enduring icon of Lisbon admired for its historical role in maritime exploration and architectural splendor.",
    "yearBuilt": 1514,
    "height": null,
    "latitude": 38.6916,
    "longitude": -9.2165,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 252,
    "name": "Petronas Towers",
    "location": "Kuala Lumpur",
    "country": "Malaysia",
    "continent": "Asia",
    "type": "Skyscrapers",
    "kebabId": "petronas-towers",
    "description": "The Petronas Towers are a pair of 88-story supertall skyscrapers in Kuala Lumpur Malaysia designed by architect César Pelli and completed in 1998. Reaching a height of 451.9 meters they were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers globally. Their design incorporates Islamic-inspired motifs reflecting Malaysia's Muslim heritage with floor plans based on a Rub el Hizb geometric pattern. A skybridge at levels 41 and 42 links the two towers offering panoramic views. The Petronas Towers are a symbol of Kuala Lumpur's modern skyline and Malaysia's rapid urban development and economic ambition.",
    "yearBuilt": 1998,
    "height": null,
    "latitude": 3.1579,
    "longitude": 101.7113,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 253,
    "name": "Bagan",
    "location": "Mandalay",
    "country": "Myanmar",
    "continent": "Asia",
    "type": "Archaeological Zone",
    "kebabId": "bagan",
    "description": "The Bagan Archaeological Zone in central Myanmar's Mandalay Region encompasses the remains of over 3500 Buddhist stupas temples monasteries and other structures built from the 9th to 13th centuries during the Pagan Kingdom's reign. Once the heart of a prosperous empire Bagan's rulers commissioned thousands of monuments showcasing the spread of Theravāda Buddhism and sophisticated Burmese architecture. This plain along the Irrawaddy River is renowned for its monumental scale and diversity of temple forms. Inscribed as a UNESCO World Heritage Site in 2019 Bagan is celebrated as one of the world's greatest archaeological sites remarkable for both its historical importance and awe-inspiring landscape dotted with temple spires stretching to the horizon.",
    "yearBuilt": 9,
    "height": null,
    "latitude": 21.1717,
    "longitude": 94.8585,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 254,
    "name": "Borobudur",
    "location": "Central Java",
    "country": "Indonesia",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "borobudur",
    "description": "Borobudur is the largest Buddhist temple in the world and a UNESCO World Heritage Site. Constructed in the 8th and 9th centuries this massive structure is built as a series of stacked platforms—six square and three circular—topped by a central dome. Its walls and balustrades are adorned with over 2600 relief panels and 504 Buddha statues. The temple is designed as a mandala representing the Buddhist cosmology and its pilgrim path symbolizes the journey toward enlightenment spiraling upwards from the base through terraces toward the central stupa. The monument overlooks lush rice fields and distant volcanoes in Central Java.",
    "yearBuilt": 778,
    "height": null,
    "latitude": -7.6079,
    "longitude": 110.2038,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 255,
    "name": "Terracotta Army",
    "location": "Xi'an",
    "country": "China",
    "continent": "Asia",
    "type": "Archaeological Site",
    "kebabId": "terracotta-army",
    "description": "The Terracotta Army is an archaeological site containing thousands of life-size terracotta soldiers horses and chariots buried to accompany Emperor Qin Shi Huang in his afterlife. Discovered in 1974 by local farmers the army represents a sophisticated funerary practice intended to protect the emperor beyond death. The figures are meticulously detailed with individual facial features and uniforms reflecting military rank. The site covers several pits with most of the figures remaining in their original placements near the emperor's mausoleum in Lintong District outside Xi'an. Beyond soldiers later pits revealed acrobats musicians and court officials highlighting the complexity of the emperor's envisioned afterlife.",
    "yearBuilt": 247,
    "height": null,
    "latitude": 34.385,
    "longitude": 109.27306,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 256,
    "name": "Tokyo Tower",
    "location": "Tokyo",
    "country": "Japan",
    "continent": "Asia",
    "type": "Tower",
    "kebabId": "tokyo-tower",
    "description": "Tokyo Tower is a 333-meter-tall communications and observation tower modeled after the Eiffel Tower in Paris but painted in white and international orange for aviation safety. Upon completion it was the tallest structure in Japan serving as a television broadcasting antenna and a symbol of Japan's post-war rebirth. The tower features two observation decks offering panoramic views of Tokyo and Mount Fuji on clear days and houses museums and entertainment facilities at its base. Its nighttime illumination is a distinctive feature of the city's skyline.",
    "yearBuilt": 1957,
    "height": null,
    "latitude": 35.6586,
    "longitude": 139.7454,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 257,
    "name": "Fushimi Inari Shrine",
    "location": "Kyoto",
    "country": "Japan",
    "continent": "Asia",
    "type": "Shrine",
    "kebabId": "fushimi-inari-shrine",
    "description": "Fushimi Inari Taisha is the head shrine of the kami Inari located at the base of Mount Inari. It is renowned for its seemingly endless rows of bright vermilion torii gates that trail up the wooded mountainside forming pathways through the sacred site. The shrine complex includes several smaller shrines spanning 4 kilometers and takes about two hours to walk. Inari is the Shinto deity of rice agriculture and business and the fox statues (kitsune) frequent throughout the shrine's grounds are considered to be the deity's messengers. The vibrant gates are donated by individuals and companies with their names inscribed upon them.",
    "yearBuilt": 711,
    "height": null,
    "latitude": 34.9671,
    "longitude": 135.7727,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  }
]

// Export additional utilities
export const MONUMENTS_DATABASE = monuments
export default monuments
