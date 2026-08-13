import type { ElementId } from "./types";

export type RecipeOutput = ElementId | ElementId[];

export const recipes: Record<string, RecipeOutput> = {
  "fire+water": "steam",
  "air+fire": "smoke",
"air+water": "steam",

  "earth+fire": "lava",
"hero+sea": "aquaman",
"knowledge+time": "wisdom",

  "earth+water": "swamp",
  "water+water": "sea",

  "fire+sea": "salt",
  "air+air": "wind",
  "wind+fire": "smoke",
  "wind+water": "sea",
  "air+earth": "dust",
  "dust+water": "mud",
  "lava+water": "obsidian",
  "magma+water": "stone",
"fire+magma": "lava",
"air+lava": "stone",
"coal+pressure": "diamond",
  "pressure+water": "ice",

 
  "pressure+stone": "granite",
  "fire+tree": "coal",
  "boiler+steam": "pressure",

  "life+sand": "seed",

  "earth+seed": "tree",

  "stone+wind": "sand",


  "fire+stone": "metal",

  "metal+steam": "boiler",
  "coal+fire": "energy",

  "energy+mud": "life",
  "energy+swamp": "life",

  "corpse+energy": "zombie",

  "energy+ghost": "ectoplasm",

  "energy+metal": "electricity",

  "energy+scientist": "albert_einstein",
"heat+sugar": "toffee",
"fire+sugar": "toffee",
"energy+sugar": "toffee",
"air+energy": "storm",
"fire+fire": "sun",
"sea+sun": "life",
"life+swamp": "bacteria",

  "air+bacteria": "flu",

  "bacteria+glass": "microscope",

  "bacteria+milk": "yogurt",

  "bacteria+mushroom": "lichen",

  "bacteria+plankton": "fish",

  "bacteria+swamp": "sulfur",

  // 🌊 bacteria + water → plankton
  "bacteria+water": "plankton",

  // 🪱 bacteria + earth → worm
  "bacteria+earth": "worm",

  // 🪨 bacteria + stone → stromatolite
  "bacteria+stone": "stromatolite",

  // 🍶 bacteria + wine → vinegar (you referenced wine but didn’t define it)
  "bacteria+wine": "vinegar",
"alcohol+grape": "wine",

"fruit+sun": "alcohol",

"berry+sun": "grape",

"fruit+grass": "berry",
"berry+fire": "jam",

"earth+moss": "grass",

"algae+swamp": "moss",
"human+seed": "farmer",

"clay+statue": "golem",

"human+metal": "tool",

"stone+tool": "statue",

"farmer+tree": "fruit",
"life+tree": "ent",
"tree+tree": "forest",
"fire+forest": "ash",
"forest+forest": "jungle",
"forest+life": "animal",
"algae+earth": "mushroom",
"life+mushroom": "1up",
"mud+mushroom": "mold",
"mushroom+tool": "poison",
"mushroom+poison": "amanita",
"milk+mold": "cheese",
"animal+human": "livestock",
"animal+farmer": "livestock",
"human+library": "scientist",
"book+wood": "library",
"book+book": "library",
"book+house": "library",
"feather+paper": "book",
"skin+paper": "book",
"ink+paper": "book",
"tool+tree": "wood",
"water+wood": "paper",
"grass+life": "insect",
"bird+hunter": ["feather", "blood", "meat"],
"bow+human": "hunter",
"bullet+metal": "gun",
"dust+fire": "gunpowder",
"reed+tool": "paper",
"grass+swamp": "reed",
"metal+tool": "sword",
"human+sword": "warrior",
"warrior+sword": "knight",
"warrior+warrior": "war",
"bow+hero": "robin_hood",
"water+wind": "wave",
"air+sea": "wave",
"wave+wave": "tsunami",
"earthquake+sea": "tsunami",
"sea+sea": "ocean",
"air+wave": "sound",
"mountain+wave": "avalanche",
"earth+sea": "beach",
"earth+earth": "earthquake",
"earth+steam": "geyser",
"earth+earthquake": "mountain",
"island+island": "archipelago",
"sea+volcano": "island",
"lava+pressure": "volcano",
"air+stone": "sand",
"sand+sand": "desert",
"fire+sand": "glass",
"wind+wind": "tornado",
"tornado+water": "whirlpool",
"storm+water": "typhoon",
"electricity+storm": "thunder",
"sand+storm": "sandstorm",
"dust+storm": "sandstorm",
"light+storm": "rainbow",
"light+rain": "rainbow",
"electricity+lightbulb": "light",
"electricity+glass": "lightbulb",
"lightbulb+metal": "lamp",
"light+rainbow": "spectrum",
"glass+light": "prism",
"diamond+light": "prism",
"light+prism": "refraction",
"prism+storm": "rainbow",
"prism+rain": "rainbow",
"air+steam": "cloud",
"cloud+water": "rain",
"glass+water": "ice",
"cloud+ice": "snow",
"ice+rain": "hail",
"air+cloud": "sky",
"cloud+cloud": "sky",
"earth+sky": "horizon",
"edge+horizon": "boundary",

"center+storm": "eye",

"depth+ocean": "abyss",
"line+void": "edge",
"circle+point": "center",
"darkness+water": "abyss",
"abyss+distance": "depth",
"glass+sand": "hourglass",
"hourglass+life": "time",
"hourglass+scientist": "time",
"electricity+hourglass": "clock",
"time+tool": "clock",
"clock+country": "switzerland",
"clay+fire": "brick",
"brick+brick": "wall",
"wall+wall": "house",
"house+house": "village",
"village+village": "city",
"city+city": "country",
"earth+wind": "dust",
"gunpowder+metal": "bullet",
"gun+human": "soldier",
"soldier+soldier": "war",
"fire+gunpowder": "explosion",
"explosion+sky": "fireworks",
"air+explosion": "fireworks",
"electricity+gun": "taser",
"gun+water": "watergun",
"gun+metal": "bayonet",
"gun+knife": "bayonet",
"gun+sword": "bayonet",
"blade+gun": "bayonet",
"grave+plant": "mandrake",
"human+time": "old_man",
"old_man+time": "death",
"death+human": "corpse",
"corpse+earth": "grave",
"grave+grave": "graveyard",
"brick+fire": "oven",
"1up+human": "mario",
"brick+mario": "coin",
"brick+water": "dam",
"coin+human": "merchant",
"city+coin": "economy",
"coin+fire": "gold",
"coin+mario": "1up",
"fire+mario": "firemario",
"ice+mario": "ice_mario",
"mario+star": "invincible",
"energy+sky": "star",
"coin+star": "powerstar",
"brick+explosion": "ruins",
"earthquake+house": "ruins",
"brick+time": "ruins",
"brick+storm": "ruins",
"life+stone": "egg",
"egg+swamp": "lizard",
"fire+lizard": "dragon",
"dragon+warrior": "hero",
"country+dragon": "china",
"country+star": "china",
"lizard+swamp": "frog",
"frog+water": "amphibian",
"animal+frog": "kangaroo",
"animal+australia": "kangaroo",
"frog+jedi": "yoda",
"hero+lightsaber": "jedi",
"light+sword": "lightsaber",
"jedi+swamp": "yoda",
"milk+time": "cheese",
"cheese+hamburger": "cheeseburger",
"cheese+pasta": "macandcheese",
"fruit+yogurt": "dessert",
"egg+flour+sugar": "cake",
"mountain+sea": "cliff",
"metal+water": "rust",
"rust+time": "dust",
"rain+sun": "rainbow",
"rain+rain": "flood",
"cloud+earth": "fog",
"fog+grass": "dew",
"ice+mountain": "glacier",
"time+tree": "acorn",
"acorn+mouse": "squirrel",
"animal+cheese": "mouse",
"earthquake+mountain": "landslide",
"landslide+village": "ruins",
"sand+swamp": "clay",
"fire+glass": "lamp",
"fire+insect": "firefly",
"ghost+lamp": "genie",
"lamp+lava": "lava_lamp",
"light+tower": "lighthouse",
"light+skyscraper": "lighthouse",
"genie+human": "wish",
"lighthouse+sea": "navigation",
"time+wish": "prophecy",
"corruption+wish": "curse",
"navigation+storm": "lost_voyage",
"map+navigation": "exploration_mastery",
"prophecy+time": "destiny",
"alcohol+wheat": "beer",
"farmer+seed": "wheat",
"farmer+field": "wheat",
"farmer+plant": "wheat",
"beer+country": "germany",
"farmer+tool": "sickle",
"stone+wheat": "flour",
"egg+flour": "pasta",
"flour+water": "dough",
"dough+fire": "bread",
"bread+fire": "toast",
"egg+fire": "fried_egg",
"pasta+rope": "spaghetti",
"flour+time": "sourdough",
"cotton+tool": "thread",
"wool+wheel": "thread",
"cloud+plant": "cotton",
"thread+thread": "rope",
"earth+rain": "plant",
"human+rope": "climbing",
"animal+wheel": "hamster",
"cotton+fire": "ash",
"earth+tool": "field",
"field+seed": "wheat",
"field+grass": "wheat",
"alien+plane": "ufo",
"field+ufo": "crop_circles",
"life+star": "alien",
"life+space": "alien",
"crop_circles+time": "legend",
"human+legend": "hero",
"legend+time": "religion",
"legend+ufo": "conspiracy",
"air+car": "plane",
"bird+metal": "plane",
"metal+plane": "aluminium",
"navigation+plane": "airport",
"aluminium+glass": "mirror",
"aluminium+oxygen": "ruby",
"blood+diamond": "ruby",
"blade+human": "blood",
"diamond+gold": "ring",
"human+ring": "marriage",
"ring+volcano": "lord_of_the_rings",
"marriage+time": "family",
"lord_of_the_rings+time": "legend",
"family+house": "home",
"family+time": "generation",
"legend+religion": "mythology",
"family+tree": "family_tree",
"hero+mythology": "demigod",
"generation+time": "dynasty",
"campfire+house": "fireplace",
"fire+home": "fireplace",
"country+dynasty": "empire",
"big+country": "empire",
"corruption+empire": "tyranny",
"empire+mythology": "pantheon",
"money+sin": "greed",
"mirror+sun": "moon",
"moon+sea": "tide",
"moon+ocean": "tide",
"earth+moon": "eclipse",
"hero+pantheon": "god",
"eclipse+mythology": "omen",
"greed+empire": "corruption",
"earthquake+tsunami": "disaster",
"animal+moon": "wolf",
"human+wolf": "dog",
"animal+hunter": ["fur", "skin", "blood", "meat", "wool"],
"silver+pressure": "coin",
"gold+pressure": "coin",
"clay+coin": "piggy_bank",
"coin+paper": "money",
"corruption+money": "inflation",
"clay+human": "ceramics",
"ceramics+fire": "pottery",
"carbon_dioxide+wine": "champagne",
"soda_water+wine": "champagne",
"champagne+country": "france",
"animal+oxygen": "carbon_dioxide",
"human+oxygen": "carbon_dioxide",
"carbon_dioxide+plant": "oxygen",
"electricity+oxygen": "ozone",
"oxygen+thunder": "ozone",
"air+pressure": "atmosphere",
"pressure+sky": "atmosphere",
"atmosphere+pollution": "smog",
"alcohol+human": "drunk",
"fog+smoke": "smog",
"city+smoke": "smog",
"city+fog": "smog",
"rain+smog": "acid_rain",
"cloud+smog": "acid_rain",
"liquid+poison": "acid",
"lemon+pressure": "acid",
"alcohol+cactus": "tequila",
"alcohol+worm": "tequila",
"lemon+water": "lemonade",
"country+tequila": "mexico",
"fruit+tequila": "lemon",
"desert+tree": "cactus",
"beetle+cactus": "cochineal",
"cochineal+fire": "carmine",
"carmine+soda_water": "coca_cola",
"carmine+diamond": "ruby",
"coca_cola+mentos": "geyser",
"cactus+water": "oasis",
"cactus+lake": "oasis",
"lake+tree": "oasis",
"lake+palm": "oasis",
"desert+lake": "oasis",
"wheel+wood": "cart",
"animal+cart": "horse",
"cart+combustion_engine": "car",
"car+life": "transformers",
"cart+steam_engine": "locomotive",
"locomotive+time": "train",
"cart+warrior": "chariot",
"gasoline+steam_engine": "combustion_engine",
"bicycle+combustion_engine": "motorcycle",
"boat+combustion_engine": "motorboat",
"combustion_engine+scissors": "lawnmower",
"combustion_engine+plane": "jet",
"grass+lawnmower": "lawn",
"boiler+coal": "steam_engine",
"ship+steam_engine": "steamer",
"lake+wood": "boat",
"sea+wood": "boat",
"ocean+wood": "boat",
"boat+wood": "ship",
"plank+water": "ship",
"boat+metal": "ship",
"boat+human": "sailor",
"human+ship": "sailor",
"boat+paper": "paper_boat",
"paper+plane": "paper_plane",
"boat+cloth": "sailboat",
"thread+tool": "cloth",
"tool+wool": "cloth",
"machine+thread": "cloth",
"machine+wool": "cloth",
"blood+cloth": "bandage",
"cloth+feather": "pillow",
"cloth+hero": "cape",
"cloth+mountain_goat": "cashmere",
"cloth+window": "blinds",
"cloth+light": "cinema",
"cloth+country": "flag",
"cloth+china": "silk",
"cloth+worm": "silk",
"cloth+corpse": "mummy",
"cloth+zombie": "mummy",
"cloth+human": "clothing",
"cloth+computer_mouse": "mousepad",
"cloth+tea": "teabag",
"cloth+pilot": "parachute",
"cloth+cotton": "pillow",
"cloth+wood": "drum",
"cloth+house": "tent",
"cloth+rain": "umbrella",
"cloth+cook": "apron",
"cloth+metal": "armor",
"cloth+paint": "canvas",
"air+cloth": "balloon",
"cloth+sandwich": "picnic",
"cloth+horse": "saddle",
"armor+human": "knight",
"cloth+sand": "sandpaper",
"paper+sand": "sandpaper",
"cart+cloth": "wagon",
"spider+thread": "web",
"bathroom+cloth": "towel",
"cloth+forest": "tent",
"cloth+metal_spring": "trampoline",
"cloth+snake": "rope",
"cloth+rope": "bag",
"cloth+table": "tablecloth",
"cloth+floor": "carpet",
"cloth+wing": "hang_glider",
"feather+feather": "wing",
"arm+bird": "wing",
"air+bird": "wing",
"horse+wing": "pegasus",
"human+wing": "angel",
"human+light": "eye",
"feather+snake": "quetzalcoatl",
"country+quetzalcoatl": "mexico",
"god+snake": "quetzalcoatl",
"jungle+rain": "rainforest",
"forest+rain": "rainforest",
"animal+rainforest": "monkey",
"monkey+time": "human",
"jungle+monkey": "banana",
"fruit+monkey": "banana",
"fruit+palm": "banana",
"palm+wind": "coconut",
"cat+dragon": "tatzelwurm",
"arrow+bag": "quiver",
"island+tree": "palm",
"bird+palm": "toucan",
"tornado+tornado": "pressure",
"sand+stone": "sandstone",
"human+bacteria": "illness",
"human+flu": "illness",
"house+illness": "hospital",
"car+illness": "ambulance",
"hospital+human": "doctor",
"hospital+scientist": "doctor",
"fish+glass": "aquarium",
"aquarium+plant": "greenhouse",
"aquarium+grass": "greenhouse",
"aquarium+tree": "greenhouse",
"aquarium+big": "swimming_pool",
"sauna+water": "swimming_pool",
"house+swimming_pool": "bathroom",
"ice+swimming_pool": "rink",
"sport+swimming_pool": "swimming",
"swimming+usa": "phelps",
"glasses+swimming": "swim_goggles",
"human+swim_goggles": "swimmer",
"swimmer+usa": "phelps",
"sport+swimmer": "swimming",
"glasses+swimmer": "swim_goggles",
"scuba_tank+swimmer": "diver",
"chemistry+swimming_pool": "chlorine",
"field+lawnmower": "tractor",
"country+tractor": "belarus",
"poison+sword": "poisoned_weapon",
"human+poisoned_weapon": "assassin",
"assassin+gun": "sniper",
"assassin+jedi": "sith",
"assassin+lightsaber": "sith",
"jedi+sith": "star_wars",
"assassin+time": "prisoner",
"assassin+human": "corpse",
"hero+robot": "r2d2",
"robot+swiss_army_knife": "r2d2",
"robot+star_wars": "r2d2",
"gold+robot": "c3po",
"knife+soldier": "swiss_army_knife",
"knife+switzerland": "swiss_army_knife",
"knife+tool": "swiss_army_knife",
"jedi+lava": "darth_vader",
"fire+jedi": "darth_vader",
"life+steel": "robot",
"armor+life": "robot",
"metal+sun": "gold",
"butter+metal": "gold",
"philosophy+stone": "philosophers_stone",
"dilemma+scientist": "philosophy",
"chicken+egg": "dilemma",
"country+country": "continent",
"continent+country": "australia",
"country+kangaroo": "australia",
"continent+continent": "planet",
"planet+woman": "venus",
"venus+metal": "copper",
"copper+thread": "wire",
"apple+phone": "iphone",
"fruit+tree": "apple",
"planet+planet": "solar_system",
"solar_system+solar_system": "galaxy",
"star+star": "space",
"space+space": "solar_system",

// ASH RECIPES

"book+fire": "ash",
"cigarettes+fire": "ash",
"corpse+fire": "ash",

"dragon+hunter": "ash",
"dragon+hut": "ash",

"ent+fire": "ash",

"fire_elemental+water": "ash",

"fire+hut": "ash",
"fire+moss": "ash",
"fire+paper": "ash",
"fire+snake": "ash",
"fire+tobacco": "ash",
"fire+wood": "coal",
"fire+worm": "ash",

"lava+human": "ash",
"lava+woman": "ash",

"light+vampire": "ash",
"pressure+volcano": "lava",
"sun+vampire": "ash",
// ASH RESULT RECIPES

"ash+fat": "soap",
"ash+glass": "ashtray",
"ash+lava": "volcano",
"ash+life": "ghost",
"bird+fire": "phoenix",
// AVIAN FLU RECIPES

"bird+flu": "avian_flu",
"chicken+flu": "avian_flu",

// B ELEMENTS

"human+woman": "baby",
"baby+time": "child",
"life+woman": "baby",

"fire+pig": "bacon",

"life+mud": "bacteria",

"beer+house": "bar",
"house+tequila": "bar",
"house+vodka": "bar",

"bird+vampire": "bat",

"bat+hero": "batman",

"sand+sun": "beach",
"sand+water": "beach",

"animal+forest": "bear",
"animal+honey": "bear",

"animal+dam": "beaver",

"beetle+flower": "bee",
"flower+insect": "bee",
"flower+hunter": "bee",

"earth+worm": "beetle",

"reed+scientist": "beetroot",
"seed+sugar": "beetroot",
"air+sugar": "cotton_candy",
"cloud+sugar": "cotton_candy",

// SAMPLE C RECIPES

"bread+cream": "cake",
"dough+sweet": "cake",
"container+witch": "cauldron",
"campfire+witch": "cauldron",
"metal+pottery": "cauldron",
"goat+wool": "cashmere",
"cloth+goat": "cashmere",
"fire+wax": "candle",
"flashlight+wax": "candle",
"lamp+wax": "candle",
"light+wax": "candle",
"thread+wax": "candle",
"bat+house": "cave",
"fox+house": "cave",
"house+wolf": "cave",
"house+lion": "cave",
"castle+gun": "cannon",
"castle+gunpowder": "cannon",
"gun+pirate_ship": "cannon",
"gunpowder+pirate_ship": "cannon",
"bat+god": "camazotz",
"boar+legend": "calydonian_boar",
"candle+dough": "cake",
"candle+donut": "cake",
"bread+sugar": "cake",
"mountain+rope": "cable_car",
"mountain+wire": "cable_car",
"horse+human": "centaur",

"desert+horse": "camel",
  "animal+desert": "camel",

"sugar+time": "candy",

"boat+tree": "canoe",

"boat+soldier": "captain",

"snowman+vegetable": "carrot",

"house+knight": "castle",

"mountain+house": "cave",

"metal+rope": "chain",

"egg+life": "chicken",
  "bird+egg": "chicken",

"fireplace+house": "chimney",

"country+wall": "china",

"cocoa+sugar": "chocolate",

"house+religion": "church",

"plant+time": "tree",

"animal+milk": "cow",

"animal+beach": "crab",
"beach+tree": "palm",

"fossil+pressure": "gasoline",

"wheel+wheel": "bicycle",

"beetroot+fire": "borscht",
"beetroot+salo": "borscht",

"air+worm": "butterfly",
"cigarettes+drunk": "cancer",
"drunk+tobacco": "cancer",

"cigarettes+human": "cancer",
"cigarettes+woman": "cancer",

"human+tobacco": "cancer",
"tobacco+woman": "cancer",
"cancer+time": "corpse",
// CAT RECIPES

"animal+yarn": "cat",

"hunter+milk": "cat",
"hunter+mouse": "cat",

"cat+country": "egypt",
"fish+fish": "caviar",
"caviar+swamp": "frog",

"clay+limestone": "cement",
"cement+water": "concrete",


"chocolate+fire": "hot_chocolate",

"lightbulb+tree": "christmas_tree",
"christmas_tree+old_man": "santa",


"paper+tobacco": "cigarettes",




"mexico+seed": "cocoa",

"corpse+wood": "coffin",
"desert+wind": "dune",

"darkness+light": "day",

"mass+acceleration": "force",

"gravity+time": "fall",

"iron+magnet": "attraction",

"human+desire": "willpower",

"pressure+vacuum": "flow",

"emotion+decision": "fate",

"energy+direction": "field",

"stone+water": "sand",

"light+shadow": "focus",

"country+law_and_justice": "government",

"force+willpower": "authority",

"fate+human": "destiny",

"king+war": "conquest",

"knowledge+power": "wisdom",
"data+time": "history",

"mirror+mirror": "infinity",
"energy+void": "big_bang",

"galaxy+galaxy": "multiverse",
"loop+loop": "infinity",
"metal+coal": "steel",
"human+robot": "cyborg",
// DAM


"beaver+branch": "dam",
"beaver+stick": "dam",
"beaver+tree": "dam",
"dam+river": "lake",

// DIET

"diet+obesity": "human",
"human+yogurt": "diet",

// DINOSAUR

"earth+egg": "dinosaur",
"big+lizard": "dinosaur",
"dinosaur+dinosaur": "egg",

// DINOSAUR RESULTS

"air+dinosaur": "pterodactyl",
"dinosaur+earth": "fossil",
"dinosaur+fire": "dragon",
"dinosaur+stone": "fossil",
"dinosaur+water": "plesiosauria",

// BLOOD / HUNTER INTERACTIONS

"dinosaur+hunter": "corpse",
"dinosaur+human": "corpse",
"dinosaur+warrior": "corpse",

// FOSSIL CHAIN

"butterfly+earth": "fossil",
"fern+earth": "fossil",
"pterodactyl+earth": "fossil",


"fossil+life": "zombie",

// ZOMBIE


"corpse+life": "zombie",

// ZOMBIE RESULTS


"paper+zombie": "mummy",
"electricity+zombie": "frankenstein",


// GOLEM

"clay+life": "golem",
"golem+life": "human",

// ZOO CHAIN

"animal+museum": "zoo",

// EXTRA RELATED CHAINS

"coffin+earth": "grave",
// E-BOOK

"book+microchip": "e_book",

// EGYPT

"country+mummy": "egypt",
"country+scarab": "egypt",

// ELECTRIC EEL

"electricity+snake": "electric_eel",

// ELECTRIC RAY

"electricity+fish": "electric_ray",

// ELECTRICITY


"glass+wool": "electricity",

// ELEPHANT

"earth+whale": "elephant",
"animal+india": "elephant",
"country+elephant": "india",

// ENERGY

"fire+peat": "energy",
"lava_golem+water": "energy",

// EXPLOSION

"fire+gasoline": "explosion",

// EXTRA ELECTRICITY RESULTS

"electricity+metal": "wire",

// EXTRA EGG RESULTS

"air+egg": "bird",

// EXTRA EXPLOSION RESULTS

"explosion+metal": "bomb",
"explosion+stone": "dust",


// FISH

"animal+water": "fish",
"egg+water": "fish",

// FLOUR


"wheat+windmill": "flour",

// FOG


"cloud+swamp": "fog",
"swamp+worm": "snake",

// FRUIT

"flower+tree": "fruit",
"sun+tree": "fruit",

// FIREPLACE


"fire+house": "fireplace",

// FIREMAN

"fire+hero": "fireman",

// FLUTE

"music+wood": "flute",
"wind+wood": "flute",
// FOX

"chicken+hunter": "fox",

// FLY

"air+insect": "fly",

// FLOWER

"plant+sun": "flower",

// EXTRA FLOUR RESULTS

"flour+egg": "pasta",

// EXTRA FRUIT RESULTS


"fruit+water": "juice",
"fruit+pressure": "juice",
// FABERGE EGG

"egg+jewelry": "faberge_egg",
"diamond+egg": "faberge_egg",
"egg+ruby": "faberge_egg",

// SALO

"knife+pig": "salo",

// FERN

"moss+swamp": "fern",

// FINLAND

"country+sauna": "finland",

// FISHERMAN

"fish+human": "fisherman",
"fish+hunter": "fisherman",
"human+fishing_rod": "fisherman",
"bamboo+fisherman": "fishing_rod",

// FONDUE

"cheese+fire": "fondue",


"country+eiffel_tower": "france",
"country+perfume": "france",

// FRIED CHICKEN

"chicken+fire": "fried_chicken",

// FUGU

"fish+poison": "fugu",

// EXTRA RESULT CHAINS FROM THESE ELEMENTS


"fisherman+water": "boat",

"country+fondue": "switzerland",

"france+tower": "eiffel_tower",

"fried_chicken+human": "colonel",

"fugu+human": "corpse",
// GHOSTBUSTERS

"ghost+hunter": "ghostbusters",

// HEN COOP

"chicken+house": "hen_coop",

// HONEY

"bee+flower": "honey",
"bee+sugar": "honey",
"bee+time": "honey",

// HOUSE M.D.

"doctor+house": "house_m_d",
"doctor+vicodin": "house_m_d",

// HYDROGEN

"water+electricity": "hydrogen",

// EXTRA RESULTS FROM THESE ELEMENTS


"hen_coop+egg": "chicken",


"hydrogen+oxygen": "water",

"hydrogen+fire": "explosion",


"house+human": "family",
// ITALY

"country+venice": "italy",
"country+pizza": "italy",

// IODINE

"algae+fire": "iodine",

// IDEA

"human+lightbulb": "idea",
"lightbulb+woman": "idea",

// ICELAND

"country+volcano": "iceland",
"country+ice": "iceland",

"fish+seaweed": "sushi",

// JAPAN

"country+sushi": "japan",
"country+sun": "japan",
"country+totoro": "japan",

// KILT

"clothing+scotland": "kilt",

// KNIFE

"meat+tool": "knife",

// EXTRA ITALY RESULTS

"car+italy": "fiat",

// EXTRA IDEA RESULTS

"idea+sound": "music",

// EXTRA ICELAND RESULTS

"iceland+fire": "volcano",

// EXTRA JAPAN RESULTS

"japan+monster": "godzilla",
"japan+robot": "gundam",

// EXTRA KNIFE RESULTS

"knife+knife": "scissors",
"blade+blade": "scissors",
"knife+tree": ["stick", "bark"],
"knife+plant": "scythe",
"blade+knife": "scythe",
"animal+knife": "skin",
"cow+knife": "skin",

// RELATED CHAINS

"metal+wind": "sound",
"sound+wire": "phone",

"forest+ghost": "totoro",

// PIZZA

"cheese+dough": "pizza",
"dough+tomato": "pizza",

// SUSHI

"fish+rice": "sushi",
"algae+fish": "sushi",

// STAKE

"vampire+wood": "stake",
"knife+wood": "stake",

// PEAT

"plant+swamp": "peat",
"pressure+swamp": "peat",
"swamp+time": "peat",
"swamp+tree": "peat",

// SCOTCH WHISKY

"alcohol+scotland": "scotch_whisky",
"alcohol+peat": "scotch_whisky",
"alcohol+smoke": "scotch_whisky",

// SCOTLAND

"bagpipe+country": "scotland",
"country+kilt": "scotland",
"country+scotch_whisky": "scotland",


// EXTRA SUSHI RESULTS

"sushi+country": "japan",
"sushi+human": "cook",

// EXTRA STAKE RESULTS

"stake+vampire": "corpse",

// EXTRA PEAT RESULTS

"peat+pressure": "coal",

// EXTRA SCOTCH WHISKY RESULTS

"scotch_whisky+human": "drunk",

// EXTRA SCOTLAND RESULTS

"cloth+scotland": "kilt",
"music+scotland": "bagpipe",

// RELATED SOURCE CHAINS

"alcohol+grain": "whisky",
// LEECH

"blood+worm": "leech",

"metal+thunder": "lightning_rod",

// EXTRA RESULTS

"corpse+lightning_rod": "frankenstein",

"storm+sound": "thunder",

"corpse+electricity": "frankenstein",

"worm+swamp": "snake",
// LIMESTONE

"shells+stone": "limestone",

// LIME

"fire+limestone": "lime",

// LOBSTER

"crab+water": "lobster",
"scorpion+water": "lobster",

// SCORPION

"beetle+sand": "scorpion",

// SUGAR

"lime+reed": "sugar",

// SALTPETER

"limestone+manure": "saltpeter",

// EXTRA SCORPION RESULTS

"scorpion+tool": "poison",

// EXTRA SALTPETER RESULTS

"saltpeter+sulfur": "gunpowder",

"fruit+energy": "sugar",
"juice+energy": "sugar",
"fire+juice": "sugar",

"dough+sugar": "cookie",
"electricity+sugar": "cotton_candy",
"juice+sugar": "jam",
"campfire+sugar": "marshmallows",
"christmas_tree+sugar": "candy_cane",
"confetti+sugar": "sprinkles",
"fish+sugar": "swedish_fish",
"love+sugar": "sweethearts",
"rainbow+sugar": "skittles",
"diamond+sugar": "ring_pop",
"sand+sugar": "fun_dip",
"sugar+wire": "red_vines",
"chicken+sugar": "peeps",
"animal+sugar": "ant",
"engineer+sugar": "willy_wonka",

// MUSEUM

"fossil+house": "museum",
"building+history": "museum",

// MOLOTOV COCKTAIL

"bottle+fire": "molotov_cocktail",
"alcohol+cloth": "molotov_cocktail",
"alcohol+fire": "molotov_cocktail",

// MITE

"dust+life": "mite",

// MICROCHIP

"computer+metal": "microchip",
"silicon+transistor": "microchip",
"silicon+silicon": "microchip",


// MENTOS

"mint+sugar": "mentos",
"coca_cola+geyser": "mentos",

// MCDONALDS

"capitalism+hamburger": "mcdonalds",
"coca_cola+sandwich": "mcdonalds",

// MANURE

"grass+livestock": "manure",

// EXTRA RESULTS (ZED-STYLE CHAINS)

// MUSHROOM SYSTEMS
"forest+mushroom": "mycelium",

// MUSEUM SYSTEM
"fossil+museum": "knowledge",

// MICROCHIP SYSTEM
"human+microchip": "cyborg",

// MCDONALDS SYSTEM
"human+mcdonalds": "obesity",

// MANURE SYSTEM
"manure+time": "fertilizer",
"beetle+manure": "scarab",

"gold+scarab": "jewelry",

"internet+money": "cryptocurrency",
"computer+money": "cryptocurrency",
"gold+internet": "cryptocurrency",
"computer+gold": "cryptocurrency",
"earth+paper": "map",
"land+paper": "map",
"hill+paper": "map",
"mountain+paper": "map",
"mountain_range+paper": "map",
"continent+paper": "map",
"ocean+paper": "map",
"paper+sea": "map",
"lake+paper": "map",
"paper+river": "map",
"city+paper": "map",
"paper+village": "map",
"map+pirate": "treasure_map",
"map+pirate_ship": "treasure_map",
"map+treasure": "treasure_map",
"island+map": "treasure_map",
"big+land": "continent",
"land+land": "continent",
"earth+land": "continent",
"land+ocean": "continent",
"land+sea": "continent",
"earth+space": "planet",
"opposite+ yin_yang": "chaos",
"new+old": "opposite",
"day+night": "opposite",
"cold+hot": "opposite",
"black+white": "opposite",
"sun+tornado": "opposite",
"dragon+phoenix": "yin_yang",
"chaos+opposite": "yin_yang",
"evil+good": "yin_yang",
"gift+god": "pandora's_box",
"container+good": "pandora's_box",
"container+evil": "pandora's_box",
"box+good": "pandora's_box",
"box+evil": "pandora's_box",
"disaster+box": "pandora's_box",
"disaster+gift": "pandora's_box",
"black_magic+box": "pandora's_box",
"magic_box+evil": "pandora's_box",
"human+pandora's_box": ["evil", "good"],
"christmas_tree+santa": "gift",
"christmas_stocking+santa": "gift",
"chimney+santa": "gift",
"fireplace+santa": "gift",
"cookie+santa": "gift",

"christmas_tree+wrapping paper": "gift",

"milk+santa": "gift",
"santa+wrapping_paper": "gift",
"christmas_stocking+wrapping paper": "gift",
"fireplace+wrapping paper": "gift",

"gift+tree": "christmas_tree",
"gift+paper": "wrapping_paper",
"planet+rust": "mars",
"earthquake+avalanche": "disaster",
"earthquake+earthquake": "disaster",
"earthquake+eruption": "disaster",
"earthquake+flood": "disaster",
"earthquake+hurricane": "disaster",
"chaos+planet": "disaster",
"tornado+tsunami": "disaster",
"avalanche+tornado": "disaster",
"earthquake+tornado": "disaster",
"eruption+tornado": "disaster",
"flood+tornado": "disaster",
"hurricane+tornado": "disaster",
"meteor+tornado": "disaster",
"sandstorm+tornado": "disaster",
"explosion+tornado": "disaster",

"tsunami+philosophy": "disaster",
"avalanche+philosophy": "disaster",
"earthquake+philosophy": "disaster",
"eruption+philosophy": "disaster",
"flood+philosophy": "disaster",
"hurricane+philosophy": "disaster",
"meteor+philosophy": "disaster",
"sandstorm+philosophy": "disaster",
"explosion+philosophy": "disaster",


"chicken+barn": "hen_coop",
"egg+house": "hen_coop",
"hospital+tv": "house_m_d",
"doctor+tv": "house_m_d",
"medicine+tv": "house_m_d",
"house+tv": "house_m_d",
"animal+bamboo": "panda",
"animal+china": "panda",
"animal+tree": "giraffe",
"horse+savannah+tree": "giraffe",
"country+panda": "china",
"oyster+sand": "pearl",
"sand+shells": "pearl",
"pearl+necklace": "jewelry",
"bird+ice": "penguin",
"doctor+mold": "penicillin",
"medicine+mold": "penicillin",
"alcohol+flower": "perfume",
"life+wood": "pinocchio",
"fire+soured_milk": ["quark_cheese", "whey"],
"flu+pig": "swine_flu",
"wool+human": "sweater",
"wool+clothing": "sweater",
"tool+yarn": "sweater",
"flower+sun": "sunflower",
"statue+usa": "statue_of_liberty",
"wheel+wool": "spinning_wheel",
"spinning_wheel+wool": "yarn",
"spinning_wheel+yarn": "thread",
"milk+yogurt": "soured_milk",
"carbon_dioxide+water": "soda_water",
"soda_water+syrup": "soda",
"sugar+water": "syrup",
"shells+worm": "snail",
"metal+moon": "silver",
"pressure+sand": "silicon",
"electricity+silicon": "transistor",
"metal+silicon": "transistor",
"china+cloth": "silk",
"thread+china": "silk",
"worm+yarn": "silk",
"house+steam": "sauna",
"human+steam": "sauna",
"desert+oil": "saudi_arabia",
"country+gasoline": "saudi_arabia",
"country+vodka": "russia",
"bear+country": "russia",
"country+vampire": "romania",
"beach+egg": "turtle",
"egg+sand": "turtle",
"plant+smoke": "tobacco",
"grass+smoke": "tobacco",
"dinosaur+mario": "yoshi",
"fish+plankton": "whale",
"beetle+wheat": "weevil",
"beetle+flour": "weevil",
"city+water": "venice",
"blood+human": "vampire",
"country+tea": "united_kingdom",
"country+robin_hood": "united_kingdom",
"country+salo": "ukraine",
"borscht+country": "ukraine",
"chocolate+milk": "chocolate_milk",
"milk+space": "milky_way",

"story+lake": "nessie",
"space+time": "tardis",
"chocolate+cookie": "twix",
"mountain+story": "yeti",

"house+plane": "airport",
"city+plane": "airport",
"plane+runway": "airport",
"apple+dough": "pie",
"dough+fruit": "pie",
"robot+phone": "android",
"robot+google": "android",
"insect+earth": "ant",
"rain+smoke": "acid_rain",
"clock+sound": "alarm_clock",
"clock+bell": "alarm_clock",
"alchemy+human": "alchemist",
"human+pollen": "allergy",
"dust+human": "allergy",
"llama+small": "alpaca",
"alpaca+tool": "wool",
"sheep+tool": "wool",
"continent+ice": "antarctica",
"animal+antarctica": "penguin",
"ant+house": "anthill",
"ant+earth": "anthill",
"fossil+human": "archaeologist",
"human+ruins": "archaeologist",
"archaeologist+desert": "pyramid",
"ocean+ice": "arctic",
"cold+ocean": "arctic",
"animal+arctic": "white_bear",
"bullet+wood": "arrow",
"human+space": "astronaut",
"astronaut+moon": "flag",
"human+telescope": "astronomer",
"air+planet": "atmosphere",
"air+sky": "atmosphere",
"electricity+sky": "aurora",
"arctic+light": "aurora",
"mountain+snow": "avalanche",
"blade+wood": "axe",
"steel+wood": "axe",
"bird+container": "birdcage",
"bird+cage": "birdcage",
"big+birdcage": "aviary",
"big+explosion": "atomic_bomb",
"energy+explosion": "atomic_bomb",
"explosion+explosion": "atomic_bomb",
"animal+armor": "armadillo",
"ant+container": "ant_farm",
"anthill+container": "ant_farm",
"ant+glass": "ant_farm",
"reptile+swamp": "alligator",
"lizard+river": "alligator",
"god+wind": "aeolus",
"air+god": "aeolus",
"god+shield": "aegis",
"hero+immortality": "achilles",
"fire+mud": "brick",
"plankton+stone": "shells",
"butterfly+lamp": "moth",
"butterfly+moon": "moth",
"life+water": "algae",
"grass+sun": "hay",
"grass+earth+sun": "savannah",
"human+human": "love",
"human+fire": "corpse",
"seed+water": "flower",
"coal+wood": "pencil",
"human+ink": "tattoo",
"ink+pencil": "pen",
"paint+water": "ink",
"flower+pressure": "paint",
"forest+plant": "mushroom",
"tool+wood": "wheel",
"bread+fried_chicken": "sandwich",
"bread+meat": ["sandwich", "hamburger"],
"cat+god": "baast",
"bread+human": "baker",
"baker+house": "bakery",
"banana+bread": "banana_bread",
"banana+dough": "banana_bread",
"house+money": "bank",
"faerie+sound": "banshee",
"monster+sound": "banshee",
"hay+house": "barn",
"cow+house": "barn",
"container+wine": "barrel",
"flour+milk": "batter",
"angel+evil": "demon",
"ant+philosophy": "small",
"demon+small": "goblin",
"goblin+good": "faerie",
"animal+evil": "monster",
"container+electricity": "battery",
"container+energy": "battery",
"campfire+garden": "bbq",
"campfire+metal": "bbq",
"campfire+steel": "bbq",
"container+glass": "bottle",
"alcohol+container": "bottle",
"beer+container": "bottle",
"container+milk": "bottle",
"container+water": "bottle",
"book+immortality": "book_of_the_dead",
"small+tree": "bonsai_tree",
"corpse+time": ["bone", "skeleton"],
"blood+container": "blood_bag",
"snow+storm": "blizzard",
"snow+wind": "blizzard",
"blade+electricity": "blender",
"metal+stone": "blade",
"darkness+star": "black_hole",
"darkness+sun": "black_hole",
"pressure+star": "black_hole",
"pressure+sun": "black_hole",
"glasses+glasses": "binoculars",
"glasses+soldier": "binoculars",
"galaxy+philosophy": "big",
"philosophy+universe": "big",
"metal+sound": "bell",
"sound+steel": "bell",
"bee+house": "beehive",
"bee+tree": "beehive",
"bee+container": "beehive",
"bee+human": ["beekeeper", "pain"],
"angel+human": "good",
"demon+human": "evil",
"darkness+human": "evil",

"net+butterfly": "butterfly_net",
"milk+tool": "butter",
"milk+pressure": "butter",
"milk+motion": "butter",
"energy+milk": "butter",
"monster+swamp": "bunyip",
"armor+bullet": "bulletproof_vest",
"container+wood": "bucket",
"container+yogurt": "bucket",
"container+paint": "bucket",
"witch+wood": "broom",
"hay+wood": "broom",
"river+wood": "bridge",
"metal+river": "bridge",
"cardboard+container": "box",
"container+pizza": "box",
"rope+wood": "bow",
"big+rock": "boulder",
"big+stone": "boulder",
"box+philosophy": "container",
"philosophy+safe": "container",
"philosophy+pottery": "container",
"coal+metal": "steel",

"flower+flower": "bouquet",
"bakery+street": "221b_baker_street",
"radiation+time": "60_seconds",
"plane+skyscraper": "9_11",
"totoro+tree": "acorn",
"idea+robot": "ai",
"bell+sound": "alarm_clock",
"sugar+yeast": "alcohol",
"dynamite+scientist": "alfred_nobel",
"aluminium+paper": "aluminium_foil",
"bullet+bullet": "ammunition",
"human+wings": "angel",
"earth+mite": "ant",
"ant+hero": "ant_man",
"chocolate+fruit": "aphrodisiac",
"feather+wood": "arrow",
"knife+warrior": "assassin",
"solar_system+stone": "asteroid",
"radiation+scientist": "atom",
"alcohol+house": "bar",
"bat+human": "batman",
"pillow+quilt": "bed",
"beer+robot": "bender",
"chain+coin": "blockchain",

"forest+pig": "boar",
"cold+human": "chill",
"space+thermometer": "cold",
"bone+chicken": "chicken_wing",
"chicken+water": "chicken_soup",
"chicken+soup": "chicken_soup",
"cheese+sandwich": "cheeseburger",
"mcdonalds+sandwich": "hamburger",
"faerie+human": "changeling",
"goblin+human": "changeling",
"god+moon": "chang_e",
"lizard+rainbow": "chameleon",
"axe+chain": "chainsaw",
"chain+electricity": "chainsaw",
"axe+electricity": "chainsaw",
"axe+machine": "chainsaw",
"metal+wire": "chain",
"milk+wheat": "cereal",

"clown+tent": "circus",
"animal+tent": "circus",
"big+tent": "circus",
"dragon+snake": "chinese_dragon",
"brick+smoke": "chimney",
"goat+lion": "chimera",
"goat+monster": "chimera",
"eye+giant": "cyclops",
"giant+zeus": "cyclops",
"bicycle+human": "cyclist",
"cook+wood": "cutting_board",
"evil+magic": "curse",
"motion+sea": "current",
"angel+love": "cupid",
"ceramics+glass": "cup",
"container+tea": "cup",
"bird+clock": "cuckoo",
"god+octopus": "cthulhu",
"god+space": "cthulhu",
"crystal+magic": "crystal_ball",
"glass+magic": "crystal_ball",
"crystal+witch": "crystal_ball",
"crystal+wizard": "crystal_ball",
"bird+darkness": "crow",
"bird+field": "crow",
"rainbow+wax": "crayon",
"pencil+rainbow": "crayon",
"paint+pencil": "crayon",
"paint+wax": "crayon",
"egg+universe": "cosmic_egg",
"egg+space": "cosmic_egg",
"ocean+plant": "coral",
"bone+ocean": "coral",
"blade+dough": "cookie_cutter",
"human+recipe": "cook",
"book+recipe": "cookbook",
"book+cook": "cookbook",
"recipe+recipe": "cookbook",
"computer+mouse": "computer_mouse",
"animal+computer": "computer_mouse",
"chicken+dragon": "cockatrice",
"broom+container": "closet",
"container+tool": "closet",

"family+video_game": "the_sims",
"europe+sea": "baltic_sea",
"latvia+sea": "baltic_sea",
"family+tv_show": "the_simpsons",
"tv_show+yellow": "the_simpsons",
"television+video": "tv_show",
"good+house": "heaven",
"god+house": "heaven",
"angel+house": "heaven",
"hell+opposite": "heaven",
"evil+house": "hell",
"demon+house": "hell",
"heaven+opposite": "hell",

"japan+warrior": "samurai",
"katana+warrior": "samurai",
"human+katana": "samurai",
"blade+japan": "katana",
"japan+sword": "katana",
"ninja+sword": "katana",
"movie+house": "cinema",
"metal+signal": "antenna_dish",
"metal+net": "antenna_dish",
"human+stage": "theater",
"game+fairy_tale": "theater",
"game+story": "theater",
"game+legend": "theater",
"snake+weasel": "mongoose",
"hunter+snake": "mongoose",
"forest+gun": "hunter",
"camera+story": "movie",
"cinema+video": "movie",
"camera+television": "video",
"photo+photo": "video",
"pirate+ship": "pirate_ship",
"monster+ocean": "kraken",

"bag+school": "backpack",
"oil+water": "soap",
"book+paper": "notebook",
"batter+pan": "pancake",
"battery+lamp": "flashlight",
"light+street": "traffic_light",
"board+wheel": "skateboard",
"glass+scientist": "microscope",
"bucket+plant": "watering_can",
"steel+water": "bucket",
"beach+fire": "bonfire",
"hail+hell": "brimstone",
"city+museum": "turin",
"dictionary+language": "translation",
"dubbing+language": "translation",
"computer+translation": "machine_translation",
"tool+translation": "machine_translation",
"machine+translation": "machine_translation",
"movie+voice": "dubbing",
"language+movie": "dubbing",
"language+video": "dubbing",
"human+speech": "language",
"human+voice": "speech",
"human+sound": "voice",

"container+gunpowder": "dynamite",
"gunpowder+pipe": "dynamite",
"gunpowder+wire": "dynamite",
"paladin+sword": "durendal",
"bird+pond": "duck",
"bird+water": "duck",
"bird+lake": "duck",
"forest+god": "dryad",
"god+tree": "dryad",
"carbon_dioxide+cold": "dry_ice",
"carbon_dioxide+ice": "dry_ice",
"plane+robot": "drone",
"dough+oil": "donut",
"dough+wheel": "donut",
"pressure+sunflower": "oil",
"hero+windmill": "don_quixote",
"goblin+house": "domovoi",
"dog+house": "doghouse",
"dog+meme": "doge",
"dog+internet": "doge",
"human+scuba_tank": "diver",
"god+wine": "dionysus",
"evil+immortality": "demon",
"human+immortality": "god",
"sun+time": "day",
"night+void": "darkness",

"king+legend": "excalibur",
"stone+sword": "excalibur",
"shovel+vehicle": "excavator",
"car+shovel": "excavator",
"god+horse": "epona",
"gardener+tool": "shovel",
"computer+letter": "email",
"paper+pencil": "letter",
"immortality+potion": "elixir_of_life",
"bottle+immortality": "elixir_of_life",
"human+magic": "wizard",
"big+faerie": "elf",
"electricity+human": "electrician",
"human+wire": "electrician",
"eel+electricity": "electric_eel",
"car+electricity": "electric_car",
"clock+egg": "egg_timer",
"moon+sun": "eclipse",
"bird+mountain": "eagle",

"bread+electricity": "toaster",
"fish+wood": "fishing_rod",
"bonfire+wood": "campfire",
"bread+cheese": "pizza",
"fire+lamp": "lantern",
"hay+human": "scarecrow",
"clothing+rain": "raincoat",
"paper+pirate": "treasure_map",

"fish+snake": "eel",
"fish+gold": "goldfish",
"fish+tooth": "shark",
"fish+river": "salmon",
"fish+lamp": "anglerfish",
"fish+sword": "swordfish",
"fish+gelatin": "jellyfish",
"cat+fish": "catfish",

"bone+mouth": "tooth",
"doctor+tooth": "dentist",
"bone+water": "gelatin",
"bear+gelatin": "gummy_bear",
"fruit+gelatin": "jelly",
"gelatin+sugar": "marshmallow",

"face+hole": "mouth",
"mouth+muscle": "tongue",
"mouth+paint": "lipstick",
"human+love": "kiss",
"human+sun": "smile",
"mouth+wind": "whistle",
"mouth+tooth": "teeth",
"mouth+water": "saliva",
"mouth+sleep": "yawn",
"hair+mouth": "mustache",

"human+strength": "muscle",
"beauty+paint": "makeup",
"human+smile": "happy",
"human+night": "sleep",

"circus+smile": "clown",
"cards+clown": "joker",
"metal+tooth": "saw",
"house+saw": "sawmill",
"saw+wood": "plank",
"chair+saw": "stool",
"nails+wood": "table",
"broom+tooth": "toothbrush",
"mop+tooth": "toothbrush",

"plank+rim": "barrel",
"chair+wood": "bench",
"bench+bus": "bus_stop",
"chair+pillow": "armchair",
"house+plank": "floor",
"plank+wall": "panels",
"plank+wheel": "skateboard",
"chair+king": "throne",
"metal+wheel": "rim",

"sulfur+water": "acid",
"fighter+ship": "aircraft_carrier",
"human+halo": "angel",
"ice+continent": "antarctica",
"rock+space": "asteroid",

"book+road": "atlas",
"bomb+uranium": "atomic_bomb",

"animal+vampire": "bat",
"animal+wool": "sheep",
"animal+cloud": "sheep",
"asia+tree": "bamboo",
"ball+grass": "court",
"batman+car": "batmobile",
"beetle+desert": "scorpion",
"beetle+gold": "scarab",
"bird+bread": "crumbs",
"bird+island": "seagull",
"blood+fly": "mosquito",
"boat+sea": "ship",
"book+computer": "ebook",
"book+hero": "comics",
"book+ink": "letter",
"book+laser": "cd",
"bow+feather": "arrow",
"bridge+water": "canal",
"insect+rope": "earthworm",
"butterfly+fire": "moth",
"camera+lens": "camera_lens",
"canvas+country": "flag",
"castle+sand": "sandcastle",
"circus+human": "clown",
"coal+time": "diamond",
"dragon+sea": "sea_serpent",
"energy+fire": "energy",
"energy+light": "laser",
"feather+farm": "cotton",
"stick+sulfur": "matches",
"egg+fish": "caviar",
"fish+stone": "shell",
"flower+lake": "lily",
"glass+house": "skyscraper",
"glass+metal": "mirror",
"gold+mirror": "silver",
"metal+mirror": "silver",
"gold+stone": "nugget",
"grass+water": "swamp",
"house+scientist": "laboratory",
"house+tool": "factory",
"house+machine": "factory",
"jungle+rope": "creeper",
"lake+water": "sea",
"lava+life": "demon",
"light+wall": "shadow",
"human+moon": "astronaut",
"human+ocean": "diver",
"human+road": "sidewalk",
"human+sand": "dream",
"human+shadow": "ninja",
"human+tool": "worker",
"human+water": "swimmer",
"metal+ship": "anchor",
"metal+whirlpool": "screw",
"microchip+scientist": "computer",
"moon+radio_wave": "satellite",
"paper+wood": "kite",
"toy+wind": "fan",
"sunflower+tool": "oil",
"television+spiderman": "film",

"alcohol+can": "beer",
"bee+wood": "beehive",
"cloth+fire": "balloon",
"car+hospital": "ambulance",
"egg+steam": "bird",
"glass+electricity": "bulb",
"grass+park": "bench",
"house+wood": "bed",
"feather+ink": "ballpen",
"alcohol+money": "gambling",
"park+wood": "bench",
"river+road": "bridge",
"sand+sea": "beach",
"cloth+wheel": "ball",

"cave+human": "caveman",
"egg+farm": "chicken",
"glass+laser": "cd",
"cow+grass": "manure",
"house+underground": "bunker",
"paper+road": "map",
"sky+steam": "cloud",
"balloon+hydrogen": "airship",
"resin+time": "amber",
"hammer+metal": "anvil",
"sidewalk+skin": "boots",
"electricity+rope": "wire",
"microchip+picture": "camera",

"field+human": "farm",
"human+livestock": "meat",
"human+pig": "meat",
"chicken+human": "meat",

"clothing+time": "fashion",
"meat+oil": "fat",
"wood+hedge": "fence",
"rope+glass": "fiber",
"gun+plane": "fighter",
"fly+light": "firefly",
"asia+gunpowder": "fireworks",
"bamboo+tool": "fishing_rod",
"fire+gun": "flamethrower",
"ship+ship": "fleet",
"board+house": "floor",
"soap+water": "foam",
"oil+potato": "french_fries",
"brick+wood": "furnace",
"screw+wood": "furniture",
"hydrogen+hydrogen": "fusion",

"air+wood": "hang_glider",
"house+ship": "port",
"stone+wood": "hammer",
"bird+wind": "hawk",
"plant+water": "seaweed",
"glacier+ship": "titanic",

"big+wolf": "fenrir",
"god+wolf": "fenrir",
"bird+fish": "flying_fish",
"cold+container": "fridge",
"cold+electricity": "fridge",
"cold+metal": "fridge",
"carbon_dioxide+fire": "fire_extinguisher",
"algae+sun": "oxygen",
"car+fireman": "firetruck",
"fire+human": "fireman",
"fireman+house": "firestation",
"goat+human": "faun",
"magic+story": "fairy_tale",
"dragon+story": "fairy_tale",
"glider+squirrel": "flying_squirrel",
"bird+squirrel": "flying_squirrel",
"cookie+prophecy": "fortune_cookie",
"cookie+paper": "fortune_cookie",
"statue+water": "fountain",
"pitchfork+small": "fork",
"needle+needle": "fork",
"animal+pond": "frog",
"wall+wood": "fence",
"chimney+house": "factory",


"boat+venice": "gondola",
"ceramics+grain": "granary",
"coal+sulfur": "gunpowder",
"combustion_engine+electricity": "generator",
"computer+road": "gps",
"creeper+fruit": "grape",
"death+energy": "ghost",
"drawing+wall": "graffiti",
"earth+seeds": "greenhouse",
"lens+metal": "glasses",
"mine+tool": "gold",
"sea+wind": ["gale", "wave"],
"strings+wood": "guitar",

"air+motion": "wind",
"air+small": "gust",
"livestock+mountain": "goat",
"bird+lion": "griffin",
"lion+monster": "griffin",
"cheese+toast": "grilled_cheese",
"car+house": ["garage", "rv"],
"flower+grass": "garden",
"garden+human": "gardener",
"monster+statue": "gargoyle",
"dough+house": "gingerbread_house",
"dough+life": "gingerbread_man",
"garden+statue": "gnome",
"goblin+plane": "gremlin",
"giant+skeleton": "gashadokuro",
"eagle+god": "garuda",
"air+idea": "gas",
"big+monster": "giant",

"angel+pandora's_box": "good",
"demon+pandora's_box": "evil",
"human+philosophers_stone": "immortality",
"metal+philosophers_stone": "gold",

"cow+tool": "milk",
"livestock+tool": "milk",
"barn+livestock": "cow",
"axe+cow": "meat",
"mountain+rain": "river",
"metal+thread": "needle",

"animal+mud": "pig",
"livestock+mud": "pig",
"cow+pressure": "milk",
"cheese+tool": "mousetrap",
"sandwich+sandwich": "hamburger",
"evil+life": "monster",
"good+life": "angel",
"dinosaur+time": "old",
"ruins+time": "old",
"old+opposite": "new",
"potion+video_game": "great_alchemy_2",
"magic+water": "potion",
"electricity+guitar": "electric_guitar",
"instrument+rope": "guitar",
"music+rope": "guitar",
"guitar+small": "ukulele",

"energy+wizard": "magic",
"energy+witch": "magic",
"energy+human": "wizard",
"music+tool": "instrument",
"human+letter": "mailman",
"letter+mailbox": "mailman",
"human+newspaper": "mailman",
"letter+metal": "mailbox",
"paper+paper": "newspaper",

"candle+silver": "candlestick",
"gambling+paper": "cards",
"grain+milk": "cereals",
"human+island": "castaway",
"juice+tree": "caoutchouc",
"knight+stone": "castle",
"laundry+wood": "clip",
"ice+meteor": "comet",
"silver+tool": "cutlery",
"skin+clothing": "case",
"statue+tool": "chisel",
"toys+wheel": "carousel",

"head+skin": "face",
"eye+head": "face",
"ears+eye": "head",
"head+scissors": "hairstyle",
"headphones+human": "ears",
"eye+glass": "glasses",
"eye+paint": "mascara",
"music+wire": "headphones",
"black_hole+philosophy": "hole",
"philosophy+wheel": "circle",
"donut+philosophy": "circle",
"philosophy+pizza": "circle",
"philosophy+planet": "circle",
"circle+light": "halo",

"clothing+hay": "hat",
"fur+human": "hair",
"hat+soldier": "helmet",
"hero+radiation": "hulk",
"metal+yarn": "strings",
"country+harp": "ireland",

"computer+human": "hacker",
"instrument+wire": "harp",
"angel+music": "harp",
"meat+smoke": "ham",
"mouse+wheel": "hamster",
"fire+idea": "heat",
"ice+idea": "cold",
"dog+hell": "hellhound",
"cup+immortality": "holy_grail",
"good+water": "holy_water",
"dog+snow": "husky",
"monster+snake": "hydra",
"life+life": "immortality",
"hare+pig": "aardvark",
"cheetah+dog": "african_civet",
"cheetah+seagull": "albatross",
"big+boa": "anaconda",
"flatfish+golden_carp": "angelfish",
"bear+elephant_shrew": "anteater",
"deer+hare": "antelope",
"coyote+human": "anubis",
"big+parrot": "ara",
"mouse+pterodactyl": "archaeopteryx",
"fox+snow": "arctic_fox",
"spider+zebra": "argiope",
"mole+snail": "armadillo",
"big+butterfly": "atlas_moth",
"ladybird+triton": "axolotl",
"hare+rat": "aye_aye",
"ground_squirrel+panda": "badger",
"hippo+rat": "bald_rat",
"lizard+monitor_lizard": "basilisk",
"ant+mosquito": "bedbug",
"hare+pygmy_mouse": "bilby",
"raccoon+slowpoke": "binturong",
"fish+hippo": "blobfish",
"frog+poison": "blue_dart_frog",
"octopus+poison": "blue_ringed_octopus",
"big+snake": "boa",
"cheetah+toad": "bombina",

"butterfly+monitor_lizard": "cockatrice",
"cat+raccoon": "dog",
"cat+wolf": "coyote",
"centaur+tiger": "cheetah",
"flatfish+human": "cyclops",
"goat+water_nymph": "capricorn",
"magpie+sparrow": "cuckoo",
"anaconda+monitor_lizard": "crocodile",
"monitor_lizard+mosquito": "chupacabra",
"poison+snake": "cobra",
"dog+zombie": "cujo",

"gremlin+snake": "brahminy_blindsnake",
"cartoon+dog": "brian",
"cartoon+rabbit": "bugs_bunny",
"antelope+toad": "bullfrog",
"hare+white_bear": "bunnyball",

"shark+whale": "cachalot",
"cow+llama": "camel",
"sabertooth_squirrel+spider": "camel_spider",
"crab+kangaroo": "cancer_pagurus",
"big+guinea_pig": "capybara",
"aardvark+lynx": "caracal",

"cat+dog": "catdog",
"sloth+worm": "caterpillar",
"cat+hero": "catwoman",
"devil+dog": "cerberus",
"bald_rat+yorkshire_terrier": "chihuahua",
"dragon+pikachu": "charmander",
"aye_aye+mickey_mouse": "cheburashka",
"cartoon+cat": "cheshire_cat",
"hamster+rhino": "chinchilla",
"monster+star_wars": "chewbacca",
"fish+ring_tailed_lemur": "clownfish",
"lizard+snail": "club_tailed_lizard",
"crab+tyrannosaur": "coconut_crab",
"flamingo+moth": "comet_moth",
"poison+snail": "cone_snail",
"bee+snake": "coral_snake",

"armadillo+cow": "cowdillow",
"cow+shark": "sturgeon",
"ostrich+shark": "cowfish",
"bear+shrimp": "crab",
"cat+grasshopper": "cricket",

"frog+mouse": "cuban_frog",

"ant+squirrel": "degu",
"ghost+umber_hulk": "dementor",
"kinkajou+mole": "desman",
"armadillo+crocodile": "desmatosuchus",
"australia+dog": "dingo",
"dinosaur+ostrich": "diplodocus",
"dove+manul": "dodo",

"cat+jackal": "dog",
"eggdevil+human": "devil",
"elk+horse": "deer",
"monster+squid": "cthulhu",
"wolf+okapi": "coyote",
"parrot+seal": "dolphin",
"pony+sea_otter": "donkey",
"chicken+golden_carp": "dove",
"gargoyle+gorilla": "dragon",
"catfish+dragon": "dragoncatfish",

"beaver+dove": "duck",
"beaver+scorpion": "duckbill",

"cartoon+elephant": "dumbo",
"dwarf+octopus": "dumbo_octopus",
"human+small": "dwarf",
"fish+small": "dwarf_pygmy_goby",

"anteater+hedgehog": "echidna",

"bat+bunnyball": "eggdevil",
"mosquito+mouse": "elephant_shrew",
"elephant+spotted_catshark": "elephatamus",
"aye_aye+human": "elf",

"horned_bird+horse": "elk",
"dove+sloth": "eurasian_woodcock",

"alien+ostrich": "et",

"human+ladybug": "fairy",
"eagle+ostrich": "falcon",
"aye_aye+dog": "fennec",
"dove+heron": "flamingo",
"fish+pressure": "flatfish",
"cockroach+pegasus": "fly",

"crocodile+wing": "flying_crocodile",
"air+ring_tailed_lemur": "flying_lemur",
"air+monkey": "flying_monkey",
"pig+wing": "flying_piglet",
"air+rat": "flying_rat",

"bunnyball+leech": "football_fish",

"basilisk+sea_devil": "frilled_lizard",
"charmander+shark": "frilled_shark",

"elephant+frog": "frog_pinoccio",
"sea_otter+seal": "fur_seal",
"aye_aye+wombat": "galago",
"kangaroo+rat": "gambian_pouch_rat",
"anteater+crocodile": "gavial",
"antelope+giraffe": "gazelle",
"leaf_tailed_gecko+triton": "gecko",

"big+salamander": "giant_salamander",

"dwarf+ogre": "goblin",
"alien+tyrannosaur": "godzilla",
"chicken+fish": "golden_carp",
"mouse+pheasant": "golden_pheasant",
"duck+tyrannosaur": "goose",

"monkey+tyrannosaur": "gorilla",
"house_elf+umber_hulk": "gollum",
"ant+ground_squirrel": "grasshopper",
"atlas_moth+stork": "grey_crowned_crane",

"heron+rat": "ground_squirrel",
"hamster+pig": "guinea_pig",
"flatfish+swordfish": "guitarfish",
"duck+hyena": "seagull",
"golden_carp+mouse": "guppy",

"crab+tarantula": "hairy_crab",
"frog+hairy_crab": "hairy_frog",

"chinchilla+degu": "hare",
"ara+valkyrie": "harpy",
"crab+video_game": "headcrab",

"crab+mouse": "hermit_crab",
"duck+ostrich": "heron",

"dwarf+goat": "hobbit",

"swan+woodpecker": "hoopoe",
"bird+yak": "horned_bird",
"horned_bird+turtle": "horned_turtle",
"horned_bird+snake": "horned_viper",

"guitarfish+hairy_crab": "horseshoe_crab",
"cat+elf": "house_elf",

"bird+flower": "hummingbird",
"c3po+eggdevil": "humpty_dumpty",

"dog+vulture": "hyena",
"r2d2+toad": "hypnotoad",

"human+shark": "ichthyander",
"sparrow+spider": "ifrita_kowaldi",
"lizard+snake": "iguana",
"cow+tyrannosaur": "iguanodon",

"golem+metal": "metal_golem",

"leech+tyrannosaur": "jabba_the_hutt",
"hyena+leaf_tailed_gecko": "jackal",
"antelope+hare": "jackalope",
"cheetah+frog": "jaguar",
"angel+donkey": "jar_jar_binks",
"lion+starfish": "jellyfish",
"kangaroo+mouse": "jerboa",

"chinchilla+hare": "kangaroo",
"horse+vampire": "kelpie",
"hare+holy_grail": "killer_bunny",
"mouse+ring_tailed_lemur": "kinkajou",
"mosquito+perdix": "kiwi_bird",
"bear+kangaroo": "koala",
"dog+red_panda": "komondor",
"monster+sea": "kraken",
"flatfish+tyrannosaur": "kronosaurus",

"beetle+butterfly": "ladybug",
"horse+manul": "llama",
"eel+wombat": "lamprey",
"chupacabra+dwarf": "leaf_tailed_gecko",

"cat+spotted_catfish": "leopard_cat",
"dementor+wizard": "lich_king",
"lion+tiger": "liger",
"pig+tiger": "lion",
"galago+monkey": "lion_tamarin",

"bee+grasshopper": "locust",
"hare+jerboa": "long_eared_jerboa",
"cat+shark": "lynx",

"rat+raven": "magpie",
"elephant+fur": "mammoth",
"lion+scorpion": "manticore",
"bear+grasshopper": "mantis",
"mantis+shrimp": "mantis_shrimp",
"cat+pig": "manul",


"cat+pikachu": "meowth",

"cartoon+mouse": "mickey_mouse",
"ant+spongebob": "minion",
"mouse+tarantula": "mink",
"cow+human": "minotaur",
"chicken+rat": "mole",
"hare+iguana": "monitor_lizard",
"blood+insect": "mosquito",

"deer+wallaby": "mouse_deer",
"monkey+mouse_deer": "mouse_lemur",
"pikachu+starfish": "mudkip",
"ant+horse": "mule",
"lich+sphinx": "mummy",
"shark+snake": "muraena",
"beaver+swan": "musk_beaver",
"ant+worm": "myriapod",

"blue_dart_frog+human": "navi",
"ninja+snake": "naga",
"swordfish+whale": "narwhal",
"charmander+raccoon": "nasua",
"octopus+snail": "nautilus",
"diplodocus+kronosaurus": "nessy",

"jaguar+mouse": "ocelot",
"badger+bear": "opossum",
"monkey+raven": "orangutan",
"nautilus+trepang": "oyster",

"bear+cheetah": "panda",
"monitor_lizard+turtle": "pangolin",

"fish+parrot": "parrotfish",
"big+chameleon": "parsons_chameleon",
"cartoon+starfish": "patric",

"dove+eagle": "peafowl",
"aye_aye+boar": "pecari",
"eagle+koala": "pelican",

"chicken+raccoon": "perdix",
"frilled_lizard+perdix": "pheasant",

"electricity+mouse": "pikachu",
"muraena+sturgeon": "pike",
"flamingo+jaguar": "pink_panther",
"blood+fish": ["piranha", "shark"],
"bee+gremlin": "pixie",

"cartoon+horse": "pony",
"horse+small": "pony",

"pig+scorpionfish": "porcupine",

"cobra+jellyfish": "man_o_war",
"charmander+duck": "psyduck",

"bat+dinosaur": "pterodactyl",
"hamster+wombat": "pygmy_mouse",

"eagle+human": "ra",
"rat+weasel": "raccoon",

"owl+panda": "red_panda",
"red_panda+ring_tailed_lemur": "red_ruffed_lemur",

"hippo+horned_bird": "rhino",
"beetle+woodpecker": "rhinoceros_beetle",
"rhino+zebra": "rhinozebra",

"lynx+raccoon": "ring_tailed_lemur",
"cuckoo+ostrich": "road_runner",
"terminator+termite": "robocop",

"mammoth+squirrel": "sabre_toothed_squirrel",
"mammoth+tiger": "sabre_toothed_tiger",
"pheasant+turkey": "sage_grouse",

"lizard+panda": "salamander",

"scorpion+shark": "scorpionfish",
"flatfish+rhino": "sea_devil",
"seahorse+starfish": "sea_dragon",
"flying_fish+horse": "seahorse",
"horse+water": "seahorse",
"lizard+seal": "sea_lion",
"beaver+hummingbird": "sea_otter",
"turtle+whale": "sea_turtle",
"flying_fish+hedgehog": "sea_hedgehog",
"cow+eel": "seal",
"axolotl+slug": "sea_slug",

"raven+stork": "secretarybird",
"human+seal": "selkie",

"flatfish+pig": "sheatfish",
"goat+pig": "sheep",
"duck+heron": "shoebill",

"ant+fish": "shrimp",
"chinchilla+tarantula": "skunk",
"bear+snail": "sloth",
"anteater+pikachu": "slowpoke",
"aye_aye+snail": "slug",
"dwarf+toucan": "smurf",
"crab+worm": "snail",

"cat+snow": "snow_leopard",
"android+ant": "space_invader",
"hummingbird+monkey": "sparrow",
"lion+statue": "sphinx",
"aye_aye+cat": "sphynx",

"heron+monkey": "spider_monkey",
"human+spider": "spiderman",
"gargoyle+trepang": "spongebob",
"dwarf+shark": "spotted_catshark",
"octopus+pheasant": "squid",

"pikachu+turtle": "squirtle",
"mole+starfish": "star_nosed_mole",
"butterfly+leech": "starfish",

"iguanodon+strawberry_crab": "stegosaurus",
"flying_crocodile+mosquito": "stirge",

"goose+heron": "stork",
"crab+smurf": "strawberry_crab",
"clownfish+lion_tamarin": "striated_frogfish",

"octopus+sea_dragon": "sucker_octopus",
"peafowl+sparrow": "swallow",
"dove+duck": "swan",

"fish+worm": "syngnathus",

"aardvark+yak": "takin",
"angel+raccoon": "tanuki",
"anteater+pig": "tapir",
"scorpion+spider": "tarantula",
"ground_squirrel+sloth": "tarsier",
"gremlin+koala": "tasmanian_devil",

"angel+kangaroo": "tauntaun",
"dumbo_octopus+echidna": "tenrec",

"ant+cockroach": "termite",
"hippo+pegasus": "thestral",
"lizard+porcupine": "thorny_devil",
"kangaroo+wolf": "thylacine",
"gazelle+snow_leopard": "tiger",
"cat+jungle": "tiger",
"cat+savannah": "lion",
"cat+savannah+wind": "cheetah",
"big+frog": "toad",
"parrot+swordfish": "toucan",

"pheasant+striated_frogfish": "tragopan",
"crab+snake": "trepang",
"horned_bird+iguanodon": "triceratops",
"lizard+tunny": "triton",
"dragon+ogre": "troll",
"basilisk+fish": "tunny",
"chicken+piranha": "turkey",
"donkey+pterodactyl": "turuk",
"ant+chicken": "tweety",
"kangaroo+monitor_lizard": "tyrannosaur",

"ant+terminator": "umber_hulk",
"horse+rhino": "unicorn",

"god+warrior": "valkyrie",
"octopus+vampire": "vampire_squid",
"aye_aye+tyrannosaur": "verociraptor",
"eagle+hippo": "vulture",

"android+human": "wall_e",
"kangaroo+small": "wallaby",
"chicken+kangaroo": "wallaroo",
"seal+warthog": "walrus",
"elephant+pig": "warthog",
"clownfish+human": "water_nymph",
"batman+duck": "watto",

"mouse+scorpion": "weasel",
"beetle+giraffe": "weevil_giraffe",
"elephant+walrus": "whale",
"bear+snow": "white_bear",
"arctic_fox+dolphin": "white_whale",

"bear+cartoon": "winnie_the_pooh",

"raccoon+turkey": "wolverine",
"bear+goblin": "wombat",
"bird+rhino": "woodpecker",

"cow+opossum": "yak",
"gorilla+white_bear": "yeti",
"dog+small": "yorkshire_terrier",

"camel+elephant": "ypotryll",
"big+naga": "yuan_ti",
"boar+cow": "zebu",
"samurai+shadow": "ninja",
"snake+warrior": "naga",

"cow+river": "hippo",
"bird+desert": "ostrich",
"china+continent": "asia",
"continent+japan": "asia",

"radiation+phosphorescence": "glow",

"electricity+fire": "plasma",

"concert+fire": "pyrotechnics",

"meteor+rain": "shooting_star",

"chemistry+light": "phosphorescence",

"sun+wave": "radiation",

"radio_wave+radio_wave": "radiation",

"electricity+wave": "radio_wave",

"money+music": "concert",

"light+energy": "laser",
"moon+machine": "satellite",
"human+spaceship": "astronaut",

"uranium+radiation": "plutonium",
"uranus+metal": "uranium",
"photography+radiation": "x_ray",
"oven+radiation": "microwave",
"photography+printer": "xerox",

"bird+war": "angry_birds",

"galaxy+science": "astronomy",

"box+plastic": "basket",
"container+mushroom": "basket",
"basket+ball": "basketball",

"void+explosion": "big_bang",
"monument+united_kingdom": "big_ben",
"time+universe": "big_crunch",

"microsoft+hero": "bill_gates",
"limestone+ocean": "chalk",
"football+human": "player",
"fashion+player": "david_beckham",
"1up+ghost": "boo_mushroom",
"bird+slingshot": "angry_birds",
"idea+scientist": "science",
"biology+scientist": "charles_darwin",
"chalk+wood": "blackboard",
"carnival+flag": "brazil",
"country+jungle": "brazil",

"hero+star": "captain_picard",

"captain_picard+spaceship": "uss_enterprise",

"oxygen+science": "chemistry",

"knight+wood": "chess",

"internet+google": "google_chrome",

"arena+rome": "colosseum",
"italy+monument": "colosseum",

"worker+worker": "company",

"computer+mario": "video_game",

"money+plastic": "creditcard",

"india+sport": "cricket",

"plane+star": "spaceship",

"euro+continent": "europe",

"germany+money": "euro",
"italy+money": "euro",
"france+money": "euro",

"france+monument": "eiffel_tower",

"country+money": "economy",

"money+science": "economics",

"egg+paint": "easter_egg",

"money+usa": "dollar",

"bank+container": "deposit_box",
"bank+box": "deposit_box",

"car+germany": "bmw",
"car+horse": "ferrari",
"car+sport": "formula_1",
"car+usa": "ford",
"food+machine": "food_mixer",

"fried_egg+toast": "food",

"computer+fox": "firefox",
"internet+fox": "firefox",

"building+machine": "factory",

"car+cow": "lamborghini",

"box+steel": "safe",
"box+metal": "safe",

"bill_gates+company": "microsoft",
"company+windows": "microsoft",

"computer+microsoft": "windows",

"internet+windows": "edge",
"internet+microsoft": "edge",

"animal+river": "hippo",

"hero+protoss": "zeratul",

"alien+robot": "protoss",

"hero+terran": "jim_raynor",

"human+starcraft": "terran",

"space+video_game": "starcraft",
"protoss+zerg": "starcraft",

"queen+zerg": "queen_of_blades",
"hero+zerg": "queen_of_blades",

"alien+swarm": "zerg",
"alien+infestation": "zerg",

"house+termite": "infestation",

"ant+termite": "insect",

"insects+jungle": "mantis",

"ant+wood": "termite",

"dinosaur+science": "paleontology",
"fossil+science": "paleontology",

"movie+statue": "oscar",

"country+salmon": "norway",

"car+japan": "nissan",

"computer+scientist": "nerd",

"car+video_game": "need_for_speed",

"human+instrument": "musician",

"computer+penguin": "linux",

"language+science": "linguistics",

"australia+sport": "rugby",

"latex+tree": "rubber",
"milk+tree": "rubber",

"asia+seed": "rice",
"china+seed": "rice",
"japan+seed": "rice",

"video_game+zombie": "resident_evil",

"car+france": "renault",

"albert_einstein+physics": "relativity_theory",

"company+factory": "product",

"computer+paper": "printer",

"money+united_kingdom": "pound",

"field+horse": "plough",

"oil+product": "plastic",

"albert_einstein+science": "physics",

"egypt+king": "pharaoh",
"human+pyramid": "pharaoh",

"black_hole+scientist": "stephen_hawking",

"fish+star": "starfish",

"team+team": "sport",

"box+sound": "speakers",

"sport+usa": "american_football",

"country+diamond": "south_africa",

"country+pirate": "somalia",

"car+school": "school_bus",

"child+house": "school",

"mario+team": "luigi",
"mario+yoshi": "team",

"air+internet": "wireless",

"glass+wall": "window",

"internet+encyclopedia": "wikipedia",
"internet+knowledge": "wikipedia",
"monster+wolf": "werewolf",

"lich_king+video_game": "warcraft",

"fruit+jungle": "watermelon",

"nothing+space": "void",
"black_hole+star": "void",

"bank+metal": "vault",

"uranium+energy": "radiation",

"air+transistor": "radio",

"bird+internet": "twitter",

"vampire+werewolf": "twilight_saga",

"box+tool": "toolbox",

"grave+video_game": "tomb_raider",

"cat+mouse": "tom_and_jerry",

"bird+storm": "thunderbird",

"car+gun": "tank",

"india+monument": "taj_mahal",
"house+marble": "taj_mahal",

"china+sport": "table_tennis",
"ball+table": "table_tennis",

"hero+tomb_raider": "lara_croft",

"crown+death": "lich_king",
"limestone+pressure": "marble",
"human+idea": "monument",
"bone+mineral": "calcium",

"calcium+coal": "calcite",
"frog+human": "murloc",
"human+paint": "artist",
"safe+philosophy": "container",
"blade+paper": "confetti",
"paper+scissors": "confetti",

"utensil+wood": "rolling-pin",

"life+metal": "metal_golem",
"electricity+metal_golem": "robot",

"golem+lava": "lava_golem",

"fire+life": "fire_elemental",

"cow+mountain": "yak",
"mountain+sheep": "yak",
"alpaca+cow": "yak",

"light+bone": "x_ray",
"light+skeleton": "x_ray",

"armadillo+dinosaur": "talarurus",

"rice+tool": "rice_cooker",

"milk+ice_cream": "milk_shake",
"ice_cream+yogurt": "milk_shake",
"ice_cream+water": "milk_shake",

"human+mountain_range": "cold",
"human+mountain": "cold",
"human+rain": "cold",
"human+storm": "cold",
"human+wind": "cold",

"air+cold": "chill",
"bird+cold": "penguin",
"blood+cold": "lizard",
"cold+crystal_ball": "snow_globe",
"cold+fruit": "smoothie",
"cold+giant": "jotunn",
"cold+glasses": "ski_goggles",
"cold+house": "igloo",
"cold+juice": "popsicle",
"cold+lava": "obsidian",
"cold+machine": "fridge",
"cold+milk": "ice_cream",
"cold+puddle": "ice",
"cold+rain": "snow",
"cold+sea": "arctic",
"motion+ocean": "current",
"cold+steam": "snow",
"cold+steel": "fridge",
"cold+sunglasses": "ski_goggles",
"cold+tea": "iced_tea",
"cold+water": "ice",
"cold+yogurt": "frozen_yogurt",
"ice+yogurt": "frozen_yogurt",

"can+recycling": "aluminium",
"river+stone": "boulder",
"time+shell": "chalk",
"metal+stone_age": "copper",
"chalk+pressure": "flint",
"mineral+superman": "kryptonite",
"half_life+uranium": "lead",
"ash+water": "lye",
"chemistry+stone": "mineral",

"gasoline+sea": "pollution",
"sunset+wind": "poniente",
"explosion+sound": "sonic_boom",
"cold+rainbow": "sun_dog",
"storm+thunder": "thunderstorm",
"storm+storm": "tornado",
"north+wind": "tramontane",
"heat+water": ["steam", "vapour"],
"air+movement": "wind",

"movement+planet": "astronomy",
"microscope+tunnel": "atom",
"fission+war": "atomic_energy",
"magnet+metal": "attraction",
"explosion+space": "big_bang",
"chemistry+life": "biology",
"gravity+light": "black_hole",
"opposite+yin_yang": "chaos",
"compass+pencil": "circle",
"currents+precipitation": "climate",
"rotation+clock": "clockwise",
"water+rotation": "coriolis_effect",
"clockwise+time_machine": "counter_clockwise",
"secret+mathematics": "cryptography",
"square+space": "cube",
"circle+space": "cylinder",
"shadow+space": "dark_matter",
"black_hole+light": "darkness",
"mathematics+symbol": "digit",
"movement+sound": "doppler_effect",
"cavern+sound": "echo",
"atom+chemistry": "electron",
"black_hole+time": "event_horizon",
"car+static_charge": "faraday_cage",
"mathematics+tree": "fibonacci",
"impact+uranium": "fission",
"drawing+mathematics": "fractals",
"time+wave": "frequency",
"movement+pressure": "friction",
"atomic_energy+pressure": "fusion",
"radiation+video_game": "half_life",

"time+time": "infinity",
"atom+electron": "ion",
"echo+echo": "larsen_effect",
"point+point": "line",
"astronomy+tide": ["mathematics", "calendar"],
"atom+atom": "molecule",
"time+space": "movement",
"supernova+cloud": "nebula",
"sound+sound": "noise",
"atom+table": "periodic_table",
"infinity+movement": "perpetuum_mobile",
"light+quantum_physics": "photon",
"movement+philosophy": "physics",
"air+gravity": "pressure",
"gambling+predictions": "probability",
"neutron+particle_accelerator": "quantum_physics",
"atomic_bomb+war": "radiation",
"light+water": "reflection",
"light+time": "relativity",
"magnet+magnet": "repulsion",
"movement+wheel": "rotation",
"wave+air": "sound",
"circle+cube": "sphere",

"friction+glass": "static_charge",
"air+void": "vacuum",
"predictions+climate": "weather_forecast",
"black_hole+black_hole": "wormhole",

"coral+island": "atoll",
"crater+volcano": "caldera",
"river+time": "canyon",
"limestone+rain": ["cavern", "karst"],
"sinkhole+religion": "cenote",
"meteor+planet": "crater",
"ice+ocean": "iceberg",
"ocean+volcano": "island",
"heat+rainforest": "jungle",
"mountain+photography": "landscape",
"prairie+stone": "mesa",
"moss+pond": "mire",
"desert+palm": "oasis",
"grass+grass": "prairie",
"mire+peat": "quagmire",
"coral+ocean": "reef",
"karst+well": "sinkhole",
"forest+tundra": "taiga",
"cold+desert": "tundra",
"ice+philosophy": "cold",
"magma+mountain": "volcano",
"goat+hair": "beard",
"eye_patch+eye_patch": "blindness",
"atmosphere+life": "oxygen",
"cat+scare": "claw",
"running+scissors": "danger",
"labyrinth+thread": "escape",
"plankton+volcano": "extremophiles",
"bull+dart": "eye",
"death+opossum": "fake_death",
"digit+human": "finger",
"walking+mud": "footprint",
"chain+howl": "ghost",
"king+revolution": "head",
"blood+pump": "heart",
"insect+nest": "hive",
"bone+head": "horn",
"wolf+moon": "howl",
"invasion+bacteria": "infection",
"ocean+thunder": ["life", "primordial_soup"],
"horse+shoe": "horseshoe",
"air+pump": "lung",
"life+radiation": "mutation",
"sodium+potassium": "nervous_system",
"bird+tree": "nest",
"insect+leaf": "parasite",
"dog+tree": "pee",
"primordial_soup+time": "plankton",
"blood+rhythm": "pulse",
"running+time": "resting",

"bone+cage": "rib",
"dog+stick": "running",
"glasses+stone": "scratch",
"pirate+time": "scurvy",
"light+tree": "shadow",
"skin+static_charge": "shock",
"arm+head": "shoulder",
"human+virus": "ill",
"corpse+decay": "skeleton",
"resting+resting": "sleep",
"ghost+space": "slime",
"skin+thorn": "sting",
"life+pressure": "stress",
"heat+skin": "sweat",
"coin+head": "tail",
"drop+salt": "tear",
"feather+skin": "tickle",
"dentist+tool": "tooth",
"gold+pirate": "treasure",
"life+spices": "variety",
"blood+tube": "vein",
"landscape+mountain": "view",
"human+movement": "walking",
"spider+yarn": "web",
"old_man+skin": "wrinkle",

"left+right": "ambidextrous",
"breathing+mite": "asthma",
"bus+ice_cream": "ice_cream_truck",
"car+ice_cream": "ice_cream_truck",
"ice_cream+wagon": "ice_cream_truck",
"ice+statue": "ice_sculpture",
"grass+wall": "ivy",
"plant+wall": "ivy",
"monster+rabbit": "jackalope",
"hare+monster": "jackalope",
"candle+pumpkin": "jack_o_lantern",
"fire+pumpkin": "jack_o_lantern",
"ghost+pumpkin": "jack_o_lantern",
"light+pumpkin": "jack_o_lantern",
"night+pumpkin": "jack_o_lantern",
"pumpkin+skeleton": "jack_o_lantern",
"hair+old_man": "bald",
"pumpkin+vegetable": "jack_o_lantern",
"ghost+vegetable": "jack_o_lantern",
"skeleton+vegetable": "jack_o_lantern",
"heat+meat": "jerky",
"heat+steak": "jerky",
"meat+sun": "jerky",
"corpse+curse": "jiangshi",
"corpse+evil": "jiangshi",
"big+ouroboros": "jormungandr",
"giant+ouroboros": "jormungandr",
"giant+snake": "jormungandr",
"giant+ice": "jotunn",
"giant+snow": "jotunn",
"big+planet": "jupiter",
"ice+milk": "ice_cream",
"milk+snow": "ice_cream",

"astronomy+predictions": "astrology",
"language+stone": "bilingual",
"cotton+singing": "blues",
"paper+thinker": "book",
"game+paper": "cards",
"game+war": "chess",
"batman+drawing": "comics",
"astronomy+star": "constellation",
"paper+work": "contract",
"good_and_bad+money": ["crime", "law_and_justice"],
"lawn+mallet": "croquet",
"hat+king": "crown",
"broom+ice": "curling",
"book+pencil": "diary",
"life+television": "documentary",
"carrot+stick": "education",
"game+sword": "fencing",
"museum+school": "field_trip",
"bonfire+village": "folklore",
"fun+law_and_justice": "game",
"life+wisdom": ["good_and_bad", "philosophy"],
"news+telephone": "gossip",
"book+time": "history",
"canada+rink": "hockey",
"cow+gold": "idol",
"religion+torture": "inquisition",
"coin+music": "jukebox",
"message+voice": "language",
"animal+university": "mascot",
"cenote+village": "maya",
"hero+war": "medal",
"army+army": "war",
"water+wine": "miracle",
"shell+thread": "necklace",
"history+time_machine": "news",
"animal+paper": "origami",
"religion+spaghetti": "pastafarian",
"calendar+mathematics": "predictions",
"game+television": "quiz_show",
"gulliver's_travels+music": "royal_society",
"diamond+stick": "sceptre",
"fly+human": "sci_fi",
"ball+net": "soccer",
"philosophy+sign": "symbol",
"net+table": "table_tennis",
"cards+prophet": "tarot",
"earth+table_tennis": "tennis",
"philosophy+religion": "theology",
"wood+woodchuck": "tongue_twister",
"game+plastic": "toy",
"contract+war": ["treaty", "peace"],
"letter+love": "valentine",
"feud+knight": "vassalage",
"doll+needle": "voodoo",
"echo+mountain": "yodel",
"astronomy+calendar": "zodiac",

"sailor+star": "astronaut",
"drum+guitar": "band",
"bank+human": "banker",
"child+explorer": "boy_scout",
"house+thief": "burglar",
"limo+human": "chauffer",
"circus+cosmetics": "clown",
"army+elder": "colonel",
"fun+human": "comedian",
"human+pain": "dentist",
"human+medicine": "doctor",
"money+spy": "double_agent",
"car+human": "driver",
"old_man+stonehenge": "druid",
"human+recycling": "environmentalist",
"human+navigation": "explorer",
"hand+prediction": "fortune_teller",
"fruit+hunter": "gatherer",
"colonel+time": "general",
"king+time": "government",
"burglar+computer": "hacker",
"mountain+thinker": "hermit",
"machine+thinker": "inventor",
"law_and_justice+human": "judge",
"horse+warrior": "knight",
"mirror+smoke": "magician",
"sailor+soldier": "marines",
"money+soldier": "mercenary",
"cosmetics+silence": "mime",
"priest+silence": "monk",
"guitar+human": "musician",
"human+painting": "painter",
"priest+sword": "paladin",
"love+human": "philanthropist",
"human+plane": "pilot",
"sailor+thief": "pirate",
"shower+work": "plumber",
"hunter+private_property": "poacher",
"law_and_justice+gun": "police",
"human+religion": "priest",
"old_man+predictions": "prophet",
"duck+voice": "quack",
"human+sea": "sailor",
"breathing+deeps": "scuba",
"medicine+priest": "shaman",
"human+sheep": "shepherd",
"cowboy+star": "sheriff",
"cloak+knife": "spy",
"crime+human": "thief",
"human+philosophy": "thinker",
"grave+thief": "tomb_raider",
"animal+doctor": "veterinarian",

"government+terminator": "arnold_schwarzenegger",
"gentleman+thief": "arsene_lupin",
"camel+oasis": "bedouin",
"cement+pond": "beverly_hillbillies",
"disaster+far_west": "calamity_jane",
"movie+pirate": "captain_jack_sparrow",
"circle+head": "charlie_brown",
"blood+tiger": "charlie_sheen",
"ninja+superman": "chuck_norris",
"glass+shoe": "cinderella",
"glasses+superman": "clark_kent",
"asthma+helmet": "darth_vader",
"apple+princess": "dead_snow_white",
"cowboy+crime": "desperado",
"crossroad+robert_johnson": "devil",
"comics+duck": "donald_duck",
"alien+crustacean": "dr_zoidberg",
"alien+doctor": "dr_zoidberg",
"doctor+lobster": "dr_zoidberg",
"human+surfboard": "surfer",
"beard+mine": "dwarf",
"bugs_bunny+hunter": "elmer_fudd",
"king+music": "elvis",
"cat+quantum_physics": "erwin_schroedinger",
"alien+bicycle": "et",
"quagmire+television": "family_guy",
"forest+running": "forrest_gump",
"masonry+secret": "freemasons",
"life+snowman": "frosty",
"astronomy+inquisition": "galileo_galilei",
"prairie+voice": "garrison_keillor",
"computer+fun": "geek",
"friction+lantern": "genie",
"corpse+zombie": "ghoul",
"death+sickle": "grim_reaper",
"christmas+thief": "grinch",
"gingerbread+witch": "hansel_and_gretel",
"dragon+knight": "hero",
"flower+human": "hippie",
"fish+lightbulb": "homer_simpson",
"egg+wall": "humpty_dumpty",
"human+prairie": "indian",
"boulder+whip": "indiana_jones",
"apple+gravity": "isaac_newton",

"head+horse": "jack_woltz",
"dynamite+laser": "killer_queen",
"human+sceptre": "king",
"king+monkey": "king_kong",
"blanket+pumpkin": "linus",
"jukebox+king": "louis_jordan",
"revolver+shadow": "lucky_luke",
"chuck_norris+swiss_army_knife": "macgyver",
"plumber+turtle": "mario",
"best_friend+diamond": "marylin_monroe",
"alien+sunglasses": "men_in_black",
"moon+walk": "michael_jackson",
"crime+prohibitionism": "mob",
"probability+quiz_show": "monty_hall",
"good_and_bad+potion": ["mr_hyde", "dr_jekyll"],
"explosion+television": "mythbusters",
"chemistry+fun": "nerd",
"shadow+warrior": "ninja",
"invasion+radio": "orson_welles",
"copper_age+mountain": "otzi",
"bleach+silicon": "pamela_anderson",
"gold+mummy": "pharaoh",
"religion+walking": "pilgrim",
"alien+warrior": "predator",
"deep_purple+rain": "prince",
"blood+shower": "psycho",
"balcony+hair": "rapunzel",
"blues+delta": "robert_johnson",
"forest+thief": "robin_hood",
"darkness+rainbow": "ronnie_james_dio",
"chimney+human": "santa",
"angel+hell": "satan",
"magician+tiger": "siegfried_and_roy",
"silence+sound": "simon_and_garfunkel",
"fungi+house": "smurf",
"charlie_brown+dog": "snoopy",
"dead_snow_white+prince": "snow_white",
"alien+nerd": "spock",
"basket+chicken": "swedish_chef",
"jungle+human": "tarzan",
"ninja+turtle": "ninja_turtle",
"mutation+turtle": "ninja_turtle",
"robot+time_machine": "terminator",
"feud+italy": "the_godfather",
"car+robot": "transformers",
"environmentalist+tree": "tree_hugger",
"helmet+horn": "viking",
"apple+arrow": "william_tell",
"broom+druid": "witch",
"hero+mutation": "x_men",

"brick+metal": "anvil",
"balcony+curtain": "awning",
"human+plastic": "bag",
"rubber+sphere": "ball",
"metal+gasoline": "barrel",
"box+weeping_willow": "basket",
"telescope+telescope": "binoculars",
"fire+gas": "blowtorch",
"furnace+steam": "boiler",
"arrow+thread": "bow",
"paperboard+paperboard": "box",
"brush+stick": "broom",
"hair+stick": "brush",
"metal+zoo": "cage",
"stick+walking": "cane",
"bottle+hat": "cap",
"bonfire+pot": "cauldron",
"chair+plank": "table",
"blowtorch+glass": "test_tube",
"cyclops+neptune": "trident",
"ash+pot": "urn",
"ceramic+flower": "vase",
"magician+stick": "wand",
"house+view": "window",


  "oni+tool":        "kanabo",
  "demon+lake":    "kappa",
  "demon+turtle":    "kappa",
  "horse+monster":     "kelpie",
  "paper+wind":      "kite",
  "fox+god":      "kitsune",
  "monster+santa":     "krampus",
  "demon+santa":     "krampus",

"fern+mire": "peat",
"copper+electricity": "platinum",
"radiation+uranium": "plutonium",
"electricity+lye": "potassium",
"lava+vapour": "pumice",
"oxygen+silicon": "quartz",
"heat+limestone": "lime",
"gravity+stone": "satellite",
"clay+quartz": "shale",
"electricity+sand": "silicon",
"chalk+school": "slate",
"electricity+salt": "sodium",
"chimney+fire": "soot",
"cavern+drop": "stalactite",
"drop+stalactite": "stalagmite",
"earth+pressure": "stone",
"metal+uranus": "uranium",
"castle+human": "king",
"crown+human": "king",
"excalibur+human": "king",

"dog+savannah": "hyena",
"horn+savannah": "rhino",
"horse+savannah": "zebra",
"savannah+tree": "baobab",

"cold+grass": "dew",
"cold+fog": "drizzle",
"drop+water": "rain",
"earth+lake": "pond",
"earth+river": "lake",
"fart+water": "bubble",
"grass+ice": "frost",
"gravity+river": "waterfall",
"gravity+water": "drop",
"hole+water": "well",
"ice+storm": "hail",
"ice+snow": "precipitation",
"ice+drop": "icicle",
"king+sea": "poseidon",
"lake+earth": "pond",
"movement+water": "river",
"mud+rain": "flood",
"ocean+pressure": "deeps",
"priest+water": "holy_water",
"rain+snow": "precipitation",
"river+sea": "delta",
"rotation+tide": "whirlpool",
"rotation+whirlpool": "maelstrom",
"sea+tornado": "waterspout",
"snow+war": "snowball",
"sea+moon": "tide",

"mind+pleasure": "beauty",

"dog+human": "best_friend",

"circuit+horse": "gambling",

"hand+hand": "clap",

"conversation+priest": "confession",

"voice+voice": "conversation",

"voice+war": "cry",

"dog+newspaper": "discipline",

"gas+noise": "fart",

"graffiti+police": "fine",

"jail+time": "freedom",
"prisoner+time": "freedom",

"education+man": "gentleman",

"hell+road": "good_intentions",

"death+money": "heirloom",

"breathing+breathing": "hyperventilate",

"bouquet+chocolate": "kiss",

"comedian+voice": "laughter",

"padded_room+straitjacket": "madman",

"ape+stone": "human",

"head+thinker": "mind",

"desert+reflection": "mirage",

"pirate+plank": "murder",

"scare+sleep": "nightmare",

"boy_scout+law_and_justice": "oath",


"fire+love": "passion",

"freedom+pain": "pleasure",

"icarus+sun": "pride",

"board_game+war": "risk",

"animal+priest": "sacrifice",

"e_mail+heirloom": "scam",

"darkness+noise": "scare",

"diary+lock": "secret",

"closet+passion": "secret_lover",

"sound+space": "silence",

"fruit+snake": "sin",

"human+private_property": ["chain", "slavery"],

"sleep+walking": "sleepwalking",

"breathing+dust": "sneezing",

"fat+sleep": "snoring",

"sun+tan": ["sunburn", "cancer"],

"skin+sun": "tan",

"electricity+scare": "torture",

"bag+human": "trash",

"game+money": "vice",

"night+shooting_star": "wish",

"human+machine": ["work", "worker", "engineer"],

"archipelago+asia": "japan",

"bread+tool": "knife",

"asia+clothing": "kimono",

"computer+net": "internet",

"feather+sun": "icarus",

"hero+metal": "ironman",

"house+snow": "igloo",

"herbs+water": "infusion",

"soot+water": "ink",

"monkey+skyscraper": "king_kong",

"australia+bear": "koala",

"knight+knight": "knights_tournament",
"human+human+human": "family",
"computer+language": "programming_language",

"game+school": "educational_game",

"educational_game+programming_language": "scratch",

"machine+pencil": "mechanical_pencil",

"speedrun+tool": "tas",

"speed+video_game": ["speedrun", "need_for_speed"],

"opposite+snail": "speed",

"opposite+speed": "slow",
"bark+spices": "cinnamon",

"beehive+wall": "wax",

"mammal+tube": "aardvark",

"nuclear_boiler+submarine": "atomic_submarine",

"battery+radiation": "atom_battery",

"clock+star": "astrolabe",

"factory+gear": "assembly_line",

"earth+plankton": ["arthropod", "insect"],

"steel+tool": "anvil",

"ancient_footwear+bone": "skates",

"clothing+wooden_fragments": "ancient_footwear",

"fish+swamp": "amphibian",

"cephalopod+sand": "ammonite",

"swamp+thunder": "amino_acids",

"resin+water": "amber",

"mercury+silver": "amalgam",

"car+caterpillar_platform": "all_terrain_vehicle",

"coconut_shell+fire": "activated_carbon",

"bone+coin+wood": "abacus",

"assembly_line+factory": "automated_factory",
"axe+tree": ["wood", "wooden_fragments"],

"cow+rope": "lasso",
"grass+house": "lawn",
"cat+king": "lion",
"idea+water": "liquid",
"science+water": "liquid",

"flower+wind": "leaf",
"forest+wind": "leaf",
"tree+wind": "leaf",

"glass+tool": "lens",
"engineer+glass": "lens",

"earth+science": "solid",
"earth+idea": "solid",

"blade+tree": "sap",

"heat+sap": "maple_syrup",
"sap+sugar": "maple_syrup",

"car+letter": "mail_truck",
"car+mailman": "mail_truck",
"car+post_office": "mail_truck",

"double_rainbow+life": "magic",
"life+rainbow": "magic",

"cow+ocean": "manatee",
"cow+sea": "manatee",
"cow+fish": "manatee",
"cow+lake": "manatee",

"cow+legend": "minotaur",
"cow+story": "minotaur",
"cow+werewolf": "minotaur",

"boulder+organic_matter": "mineral",
"earth+organic_matter": "mineral",
"hill+organic_matter": "mineral",
"mountain+organic_matter": "mineral",
"organic_matter+rock": "mineral",
"organic_matter+stone": "mineral",

"air+meteoroid": "meteor",
"atmosphere+meteoroid": "meteor",
"day+meteoroid": "meteor",
"meteoroid+night": "meteor",
"meteoroid+sky": "meteor",

"boulder+sun": "meteoroid",
"rock+solar_system": "meteoroid",
"rock+sun": "meteoroid",
"boulder+solar_system": "meteoroid",
"boulder+space": "meteoroid",
"space+stone": "meteoroid",

"heat+planet": "mercury",
"planet+small": "mercury",

"egg+oil": "mayonnaise",

"fishing_rod+maui": "mauis_fishhook",
"maui+tool": "mauis_fishhook",

"cat+egypt": "maahes",
"lion+ra": "maahes",
"lion+sun": "maahes",
"god+lion": "maahes",

"demigod+ocean": "maui",
"demigod+island": "maui",
"hero+new_zealand": "maui",
"fishing_rod+god": "maui",

"monster+treasure_chest": "mimic",
"chest+legend": "mimic",
"box+monster": "mimic",

"dream+fear": "mara",
"nightmare+spirit": "mara",
"demon+sleep": "mara",
"darkness+demon": "mara",
"monster+night": "mara",

"goat+mountain": "mountain_goat",
"goat+mountain_range": "mountain_goat",

"god+mountain": "mount_olympus",
"dionysus+mountain": "mount_olympus",
"heaven+mountain": "mount_olympus",
"mountain+poseidon": "mount_olympus",
"mountain+vulcan": "mount_olympus",
"mountain+zeus": "mount_olympus",

"idea+wind": "motion",
"car+philosophy": "motion",
"philosophy+river": "motion",

"legend+moth": "mothman",
"monster+moth": "mothman",
"moth+story": "mothman",

"car+moon": "moon_rover",

"hammer+thor": "mjolnir",
"god+hammer": "mjolnir",
"hammer+legend": "mjolnir",
"baast+tool": "ankh",

"immortality+mummy": "ankh",

"maahes+tool": "ankh",

"ra+tool": "ankh",

"tawaret+tool": "ankh",

"pirate_ship+sailor": "pirate",

"sailor+sword": "pirate",

"gun+sailor": "pirate",

"bayonet+sailor": "pirate",
"bird+pirate": "parrot",
"bird+pirate_ship": "parrot",
"pigeon+pirate": "parrot",
"pigeon+pirate_ship": "parrot",

"pirate+treasure_map": "treasure",

"monster+treasure": "mimic",
"book+maahes": "book_of_the_dead",
"book+ra": "book_of_the_dead",
"book+tawaret": "book_of_the_dead",
"baast+book": "book_of_the_dead",
"book+urn": "book_of_the_dead",

"book_of_the_dead+corpse": "mummy",
"book_of_the_dead+human": "mummy",

"book+of_the_dead+container": "pyramid",


"black_magic+human": "sacrifice",

"animal+black_magic": "sacrifice",
"black_magic+cow": "sacrifice",
"black_magic+demon": "sacrifice",
"black_magic+goat": "sacrifice",
"black_magic+sheep": "sacrifice",
"black_magic+witch": "sacrifice",
"black_magic+wizard": "sacrifice",

"camazotz+human": "sacrifice",

"animal+curse": "sacrifice",
"curse+demon": "sacrifice",

"animal+witchcraft": "sacrifice",
"candle+witchcraft": "sacrifice",
"evil+witchcraft": "sacrifice",
"rowan+witchcraft": "sacrifice",

"god+sacrifice": "camazotz",

"house+sacrifice": "hell",

"book+sacrifice": "necronomicon",
"book_of_the_dead+sacrifice": "necronomicon",

"light+sacrifice": "will_o_the_wisp",
"lamp+monster": "will_o_the_wisp",

"light+monster": "will_o_the_wisp",

"lightbulb+monster": "will_o_the_wisp",
"tree+witchcraft": "rowan",
"magic+tree": "rowan",
"magic+night": "black_magic",
"curse+magic": "black_magic",
"magic+witch": "black_magic",
"human+needle": "tailor",
"human+sewing_machine": "tailor",
"human+thread": "tailor",
"computer+game": "video_game",
"gun+video_game": "counter_strike",
"animal+pirate_ship": "rat",
"animal+sailboat": "rat",

"big+mouse": "rat",

"city+mouse": "rat",

"mouse+pirate_ship": "rat",
"mouse+sailboat": "rat",

"mouse+skyscraper": "rat",

"mouse+village": "rat",
"rat+wheel": "hamster",

"animal+needle": "hedgehog",
"mouse+needle": "hedgehog",
"needle+rat": "hedgehog",

"beach+rat": "seagull",
"ocean+rat": "seagull",
"rat+sea": "seagull",
"bird+wooden_man": "xecotcovach",
"folktales+wooden_man": "xecotcovach",
"god+wood": "wooden_man",
"centaur+story": "myth",
"cyclops+story": "myth",
"faun+story": "myth",
"kraken+story": "myth",
"minotaur+story": "myth",
"story+yeti": "myth",
"good+myth": "angel",

"griffin+myth": "anzu",

"immortality+myth": "god",

"evil+myth": "demon",

"grass+myth": "fern_flower",
"myth+reed": "fern_flower",
"myth+rose": "fern_flower",


"grave+myth": "ghost",
"gravestone+myth": "ghost",
"graveyard+myth": "ghost",

"myth+zombie": "ghoul",

"ghost+myth": "immortality",
"myth+vampire": "immortality",

"myth+swamp": "kongamato",

"book_of_the_dead+myth": "mummy",
"myth+pyramid": "mummy",

"lake+myth": "nessie",
"dinosaur+myth": "nessie",

"giant+myth": "paul_bunyan",
"giant+axe": "paul_bunyan",
"lumberjack+myth": "paul_bunyan",

"kraken+myth": "shipwreck",

"avalanche+myth": "slide_rock_bolter",
"hill+myth": "slide_rock_bolter",

"monster+myth": "story",

"mountain+myth": "yeti",
"mountain_range+myth": "yeti",
"glacier+myth": "yeti",

"death+myth": ["zombie", "ghost"],
"cow+giant": "babe_the_blue_ox",

"cow+paul_bunyan": "babe_the_blue_ox",

"giant+livestock": "babe_the_blue_ox",

"livestock+paul_bunyan": "babe_the_blue_ox",
"hedgehog+speed": "sonic",

"antarctica+story": "yeti",

"big+story": "legend",
"story+story": "legend",
"story+time": "legend",

"broom+story": "witch",
"cauldron+story": "witch",

"castle+story": "fairy_tale",
"knight+story": "fairy_tale",
"monarch+story": "fairy_tale",
"story+unicorn": "fairy_tale",

"clay+story": "golem",
"statue+story": "golem",

"container+story": "book",

"cookie+story": "gingerbread_man",
"cookie_dough+story": "gingerbread_man",
"dough+story": "gingerbread_man",

"corpse+story": ["frankenstein", "zombie"],


"cthulhu+story": "necronomicon",

"garden+story": "gnome",

"glacier+story": "yeti",

"grave+story": "ghost",
"gravestone+story": "ghost",
"graveyard+story": "ghost",
"night+story": "ghost",

"horse+story": "centaur",

"human+story": ["hero", "philosophy"],

"lake+story": "nessie",

"lizard+story": "dragon",

"paper+story": "newspaper",

"snake+story": "medusa",

"sword+story": "excalibur",

"windmill+story": "don_quixote",

"campfire+human": "story",
"hero+human": "story",

"sea+unicorn": "narwhal",
"ocean+unicorn": "narwhal",

"evil+witch": "necromancer",
"evil+wizard": "necromancer",
"curse+wizard": "necromancer",
"curse+witch": "necromancer",

"demon+monster": "oni",

"liquid+monster": "ooze",
"monster+mud": "ooze",

"glass+internet": "optical_fiber",
"glass+wire": "optical_fiber",
"light+rope": "optical_fiber",
"light+wire": "optical_fiber",
"internet+light": "optical_fiber",

"big+goblin": "orc",
"human+monster": "orc",

"earth+hammer": "ore",
"hammer+mountain": "ore",
"hammer+rock": "ore",
"hammer+stone": ["ore", "statue"],

"life+science": ["organic_matter", "biology"],
"bacteria+death": "organic_matter",

"horse+legend": "unicorn",
"horse+rainbow": "unicorn",
"horse+magic": "unicorn",

"human+necromancer": "lich",

"ooze+rock": "slime",
"ooze+stone": "slime",

"optical_fiber+computer": "internet",

"orc+story": "myth",

"fire+ore": "metal",
"hammer+ore": "metal",
"ore+tool": "metal",

"doctor+needle": "syringe",
"needle+tool": "syringe",

"human+syringe": "blood",
"syringe+vampire": "blood",

"pencil+ruler": "line",
"liquid+metal": "quicksilver",
"engineer+quicksilver": "thermometer",
"glass+quicksilver": "thermometer",
"quicksilver+tool": "thermometer",
"medicine+syringe": "vaccine",
"cube+glasses": "3d_glasses",
"cube+printer": "3d_printer",

"cloud+sunset": "afterglow",
"sky+sunset": "afterglow",

"genie+hero": "aladdin",
"genie_lamp+hero": "aladdin",

"alien+computer": "android",

"line+line": "angle",

"computer+mask": "anonymous",

"human+bird": "angel",

// USER_PROVIDED

"cinema+spy": "james_bond",
"spy+united_kingdom": "james_bond",

"the_matrix+gun": "agent_smith",

"air+electricity": "air_conditioning",

"text+text": "alphabet",

"book+website": "amazon",

"austria+mountain_range": "alps",

"mountain+mountain": "mountain_range",

"baby+milk": "baby_bottle",
"baby+water": "baby_bottle",

"human+bread": "baker",
"dough+human": "baker",
"flour+human": "baker",

"circle+circle": "ball",

"grass+wood": "bamboo",

"analysis+fruit": "banana",

"fence+wire": "barbed_wire",

"gun+ship": "battleship",

"ball+beach": "beach_ball",

"beach+umbrella": "beach_umbrella",
"sun+umbrella": "beach_umbrella",

"crayon+robot": "bender",
"pencil+robot": "bender",

"brain+spoon": "bent_spoon",

"glass+horizon": "binoculars",


"air+life": "bird",

"bird+house": "birdhouse",

"ash+paint": "black",
"night+paint": "black",

"hole+space": "black_hole",

"bird+livestock": "chicken",
"egg+livestock": "chicken",
"bird+farmer": "chicken",
"bird+farm": "chicken",

"tree+christmas": "christmas_tree",
"tree+santa": "christmas_tree",

"house+christmas_tree": "christmas",
"snow+christmas_tree": "christmas",

"sugar+christmas_tree": "candy_cane",

"day+christmas": "christmas_eve",

"cloud+electricity": "lightning",
"storm+electricity": "lightning",

"lightning+tree": "christmas_tree",


"tree+night": "carbon_dioxide",
"night+plant": "carbon_dioxide",

"rope+steel": "chain",

"chain+saw": "chainsaw",
"electricity+saw": "chainsaw",

"satellite+sound": "cellphone",

"floppy_disk+time": "cd",

"fireplace+witch": "cauldron",
"metal+witch": "cauldron",
"steel+witch": "cauldron",



"sun+snowman": "carrot",


"car+phone": "carpool",
"taxi+taxi": "carpool",

"oxygen+human": "carbon_dioxide",

"sugar+fire": "caramel",

"car+rain": "car_wipers",
"car+soap": "car_wash",

"wheel+metal": "car",

"shield+hero": "captain_america",

"boy+hat": "cap",
"girl+hat": "cap",

"gunpowder+castle": "cannon",

"sugar+baby": "candy",
"boy+sugar": "candy",
"girl+sugar": "candy",

"photo+tool": "camera",

"desert+livestock": "camel",

"day+note": "calendar",


"desert+plant": "cactus",
"plant+sand": "cactus",

"car+mountain": "cable_car",

"milk+energy": "butter",

"human+meat": "butcher",

"businessman+woman": "businesswoman",
"human+money": "businessman",

"bus+time": "bus_stop",

"minibus+minibus": "bus",

"bee+bee": "bumblebee",

"cow+male": "bull",

"paint+wood": "brown",

"river+steel": "bridge",

"love+woman": "bride",

"mud+sun": "brick",

"baby+car": "boy",

"cube+paper": "box",

"string+wood": "bow",

"flower+gift": "bouquet",


"book+shop": "bookshop",


"tree+pottery": "bonsai_tree",
"tree+scissors": "bonsai_tree",

"dvd+time": "blu_ray",

"paint+sky": "blue",

"blade+glass": "blender",

"glasses+horizon": "binoculars",


"human+sleep": "bed",

"ocean+sand": "beach",

"brick+fireplace": "chimney",
"house+fireplace": "chimney",

"fire+pepper": "chilli_pepper",

"cacao+sugar": "chocolate",

"candle+christmas_tree": "christmas_candle",

"fireplace+wool": "christmas_stocking",

"light_bulb+tree": "christmas_tree",
"star+tree": "christmas_tree",



"line+octagon": "circle",

"saw_blade+tool": "circular_saw",

"elephant+tent": "circus",


"skyscraper+skyscraper": "city",

"city+house": "city_hall",

"room+school": "classroom",

"mud+sand": "clay",



"electricity+time": "clock",
"time+wheel": "clock",

"clothing+house": "closet",



"cloud+hdd": "cloud_storage",



"clown+fish": "clownfish",

"plant+pressure": "coal",

"flute+snake": "cobra",

"alcohol+glass": "cocktail_glass",



"coconut+tool": "coconut_milk",
"coconut+milk": "coconut_milk",


"analysis+money": "coin",



"hair+tool": "comb",

"ice+space": "comet",

"businessman+businesswoman": "company",

"earth+magnet": "compass",
"magnet+tool": "compass",

"electricity+nerd": "computer",
"nerd+tool": "computer",
"nerd+wire": "computer",

"computer+text": "computer_keyboard",

"human+music": "conductor",

"ruler+wall": "construction_ruler",

"cookie+dough": "cookie",

"cookie+pottery": "cookie_jar",

"alien+cookie": "cookie_monster",

"grim_reaper+human": "corpse",

"windows+woman": "cortana",



"cotton+sugar": "cotton_candy",





"human+lasso": "cowboy",

"brain+computer": "cpu",



"baby+bed": "crib",

"sugar+dough": "croissant",

"bird+scarecrow": "crow",

"gold+head": "crown",

"glass+witch": "crystal_ball",
"glass+wizard": "crystal_ball",

"square+square": "cube",

"computer+computer_mouse": "cursor",

"sun+window": "curtains",

"country+metal_music": "czech_republic",
"beaver+river": "dam",
"beaver+wood": "dam",
"river+wall": "dam",

"devil+hero": "daredevil",
"hero+netflix": "daredevil",



"night+sun": "day",
"night+time": "day",
"sky+sun": "day",

"blood+hero": "deadpool",

"darth_vader+star": "death_star",

"brain+problem": "decomposition",

"forest+wild_animal": "deer",

"box+car": "delivery_truck",

"octahedron+octahedron": "deltohedron",

"country+windmill": "denmark",
"country+lego_brick": "denmark",


"cactus+sand": "desert",

"magnifying_glass+thief": "detective",

"detective+hat": "detective_hat",

"angel+pitchfork": "devil",
"angel+fire": "devil",



"cube+dot": "dice",

"lizard+time": "dinosaur",

"blender+music": "dj",

"app+whale": "docker",

"doctor+tardis": "doctor_who",

"deltohedron+deltohedron": "dodecahedron",

"human+wild_animal": "dog",
"bone+wolf": "dog",

"human+wool": "doll",

"brain+fish": "dolphin",

"love+spain": "don_quixote",
"spain+windmill": "don_quixote",

"alarm_clock+door": "door_alarm",

"door+paper": "door_hanger",

"time+windows_xp": "dos",

"pencil+point": "dot",

"bed+bed": "double_bed",


"dragon+pokemon": "dratini",

"clothing+female": "dress",

"leather+wood": "drum",


"beer+human": "drunk",
"human+wine": "drunk",

"day+vampire": "dust",

"time+vhs": "dvd",
"time+cd": "dvd",

"ant+human": "dwarf",





"decomposition+head": "ear",

"ear+ring": "earrings",

"earth+wild_animal": "earthworm",
"field+wild_animal": "earthworm",

"earth+energy": "earthquake",
"earth+wave": "earthquake",

"book+electricity": "e_book",



"bird+bird": "egg",
"life+rock": "egg",
"lizard+lizard": "egg",
"turtle+turtle": "egg",

"box+pokemon_egg": "egg_incubator",
"glass+pokemon_egg": "egg_incubator",


"egg+watch": "egg_timer",

"country+pyramid": "egypt",

"france+metal": "eiffel_tower",
"france+steel": "eiffel_tower",

"electricity+toothbrush": "electric_toothbrush",




"light+solar_cell": "electricity",
"solar_cell+sun": "electricity",
"wind+wind_turbine": "electricity",

"internet+letter": "e_mail",

"house+stormtrooper": "empire",
"castle+stormtrooper": "empire",

"love+ring": "engagement_ring",

"book+tablet": "e_reader",

"coin+internet": ["ethereum", "bitcoin"],

"money+spain": "euro",
"money+italy": "euro",

"rock+sword": "excalibur",

"human+internet": "facebook",

"company+house": "factory",


"king+story": "fairy_tale",

"human_torch+the_thing": "fantastic_four",

"barn+farmer": "farm",
"farmer+house": "farm",

"carbon_dioxide+metal": "fire_extinguisher",
"carbon_dioxide+pressure": "fire_extinguisher",

"fire+fireman": "fire_hose",
"fire+firewoman": "fire_hose",
"water+fireman": "fire_hose",
"water+firewoman": "fire_hose",

"fireman+truck": "fire_truck",

"fire+fox": "firefox",

"fire_truck+human": "fireman",

"brick+campfire": "fireplace",
"campfire+wall": "fireplace",

"hard_roe+time": "fish",

"fishing_rod+human": "fisherman",

"fish+tool": "fishing_rod",

"light+tool": "flashlight",


"rain+time": "flood",

"computer+memory": "floppy_disk",

"rock+wheat": "flour",

"garden+plant": "flower",

"dinosaur+rock": "fossil",


"chicken+wild_animal": "fox",

"country+croissant": "france",
"cheese+country": "france",



"oil+vegetable": "french_fries",


"electricity+cold": "fridge",
"ice+metal": "fridge",

"pond+wild_animal": "frog",

"alcohol+fruit": "fruit_punch",
"alcohol+beach": "fruit_punch",

"boy+professor": "fry",

"constellation+star": "galaxy",
"constellation+constellation": "galaxy",

"plant+plant": "garden",
"grass+plant": "garden",

"dust+mask": "gas_mask",

"door+fence": "gate",

"japan+woman": "geisha",

"genie_lamp+ghost": "genie",

"the_earth+treasure": "geocaching",

"germany+house": "german_house",


"graveyard+night": "ghost",
"castle+night": "ghost",

"ghost+movie": "ghostbusters",


"gingerbread_man+house": "gingerbread_house",

"skyscraper+wild_animal": "giraffe",

"baby+doll": "girl",

"source_code+website": "github",
"house+source_code": "github",

"glass+glass": "glasses",

"ball+the_earth": "globe",
"continent+sea": "globe",

"city+dinosaur": "godzilla",

"metal+rainbow": "gold",

"gold+leprechaun": "gold_pot",

"ball+field": "golf_ball",

"golf_ball+human": "golfer",

"boat+italy": "gondola",

"alphabet+company": "google",

"google+internet": "google_chrome",
"google+text": "google_docs",
"cloud_storage+google": "google_drive",
"google+note": "google_keep",
"google+map": "google_maps",
"google+numbers": "google_sheets",
"google+presentation": "google_slides",
"facebook+google": "google_plus",

"bear+monkey": "gorilla",
"forest+monkey": "gorilla",

"antenna+earth": "gps",
"antenna+the_earth": "gps",

"female_graduate+hat": "graduate_hat",
"graduate+hat": "graduate_hat",

"music+needle": "gramophone",
"needle+sound": "gramophone",


"decomposition+wine": "grapes",

"earth+plant": "grass",

"pokeball+pokeball": "great_ball",

"china+wall": "great_wall",

"country+philosophy": "greece",

"grass+paint": "green",

"blue+yellow": "green",

"hero+ring": "green_lantern",

"glass+plant": "greenhouse",


"human+scythe": "grim_reaper",
"corpse+scythe": "grim_reaper",

"love+man": "groom",

"hero+wood": "groot",

"earth+surface": "ground",

"beer+ireland": "guinness",

"metal+wood": "hammer",

"metal+policeman": "handcuffs",
"metal+policewoman": "handcuffs",
"policeman+thief": "handcuffs",
"policewoman+thief": "handcuffs",

"bride+joker": "harley_quinn",

"book+wizard": "harry_potter",

"boy+lightning": "harry_potter_character",
"harry_potter+lightning": "harry_potter_character",

"field+tractor": "harvester",

"head+roof": "hat",

"ghost+house": "haunted_house",
"house+time": "haunted_house",

"avengers+bow": "hawkeye",

"farmer+grass": "hay",

"hay+hay": "hay_bale",

"brain+house": "head",

"head+sound": "headphones",

"microphone+sound": "headset",

"fence+plant": "hedge",
"fence+leaf": "hedge",


"plane+windmill": "helicopter",

"line+pentagon": "hexagon",

"blade+plane": "helicopter",

"wind+flower": "helicopter_seed",

"mountain+human": "hermit",

"horse+river": "hippo",

"spade+earth": "hole",

"movie+star": "hollywood",

"glasses+microsoft": "hololens",

"ocean+sky": "horizon",
"sea+sky": "horizon",

"wasp+wasp": "hornet",

"hay+livestock": "horse",
"livestock+horseshoe": "horse",

"horse+metal": "horseshoe",


"ambulance+house": "hospital",

"cacao+milk": "hot_cocoa",

"bread+sausage": "hot_dog",

"brick+human": "house",
"human+wood": "house",
"brick+tool": "house",

"energy+wind": "hurricane",

"electricity+water": "hydroelectricity",

"super_potion+super_potion": "hyper_potion",

"ice_cream+ladle": "ice_cream_scoop",

"ice+sea": "iceberg",

"ice+tea": "iced_tea",

"country+hot_spring": "iceland",

"dodecahedron+dodecahedron": "icosahedron",

"human+light_bulb": "idea",
"light_bulb+nerd": "idea",

"house+ice": "igloo",

"flower+japan": "ikebana",

"crayon+paper": "image",

"internet+movie": "imdb",

"e_mail+house": "inbox",

"facebook+image": "instagram",

"computer+web": "internet",
"network+network": "internet",

"ipad_mini+ipad_mini": "ipad",
"apple_inc+tablet": "ipad",

"iphone+iphone": "ipad_mini",

"cell_phone+fruit": "iphone",

"egypt+hero": "isis",
"egypt+princess": "isis",

"pumpkin+fire": "jack_o_lantern",
"blade+pumpkin": "jack_o_lantern",
"pumpkin+candle": "jack_o_lantern",


"origami+country": "japan",

"doll+japan": "japanese_dolls",

"umbrella+japan": "japanese_umbrella",

"japan+money": "japanese_yen",

"human+lightsaber": "jedi",
"knight+lightsaber": "jedi",

"meat+salt": "jerky",

"netflix+hero": "jessica_jones",
"netflix+detective": "jessica_jones",

"clown+batman": "joker",

"giraffe+country": "kenya",

"vase+tea": "kettle",
"pottery+tea": "kettle",

"wood+russia": "khokhloma",

"dress+man": "kilt",

"man+crown": "king",

"love+lips": "kiss",

"sky+paper": "kite",

"kiwi_fruit+bird": "kiwi_bird",

"fruit+analysis": "kiwi_fruit",

"rope+rope": "knot",

"bear+pouch": "koala",

"fish+japan": "koi",

"castle+russia": "kremlin",

"needle+fish": "pufferfish",
"fish+light": "anglerfish",
"gold+legend": "eldorado",

"dragon+immortality": "ouroboros",
"immortality+snake": "ouroboros",
"jormungandr+small": "ouroboros",
  "earth+explosion": "mine_bomb",
  "squirrel+tree": "nut",
  "butter+nut": "peanut_butter",
"nut+pressure": "peanut_butter",
  "canvas+paint": "painting",
"canvas+painter": "painting",
 
  "flute+flute": "pan_flute",
"human+pan_flute": "musician",
"musician+pan_flute": "music",
  "hang_glider+plane": "paraglider",
"bird+hang_glider": "paraglider",
"hang_glider+pilot": "paraglider",

"grass+city": "park",

"bird+rainbow": "peacock",
"bird+pride": "peacock",

"blade+pencil": "pencil_sharpener",
"metal+pencil": "pencil_sharpener",

"rock+small": "pebble",
"stone+small": "pebble",

"electricity+liquid": "plasma",
"energy+liquid": "plasma",
"fire+science": "plasma",

"field+tool": "plow",

"fire+legend": "prometheus",
"fire+mount_olympus": "prometheus",

  "animal+carrot": "rabbit",

"god+double_rainbow": "rainbow_serpent",
"god+rain": "rainbow_serpent",
"god+rainbow": "rainbow_serpent",
"jormungandr+rainbow": "rainbow_serpent",

"bakery+newspaper": "recipe",
"bakery+paper": "recipe",
"baker+newspaper": "recipe",
"baker+paper": "recipe",
"cook+paper": "recipe",
"flour+newspaper": "recipe",
"flour+paper": "recipe",
"fruit+newspaper": "recipe",
"fruit+paper": "recipe",
"meat+newspaper": "recipe",
"meat+paper": "recipe",
"newspaper+vegetable": "recipe",
"paper+vegetable": "recipe",

"animal+christmas_stocking": "reindeer",
"animal+christmas_tree": "reindeer",
"animal+santa": "reindeer",
"christmas_tree+livestock": "reindeer",
"livestock+santa": "reindeer",

"cook+house": "restaurant",
  "broom+robot": "robot_vacuum",
"robot+vacuum": "robot_vacuum",

"eagle+giant": "roc",

"atmosphere+plane": "spaceship",
"atmosphere+boat": "spaceship",
"atmosphere+car": "spaceship",
"atmosphere+machine": "spaceship",
"atmosphere+metal": "spaceship",
"atmosphere+pirate_ship": "spaceship",
"atmosphere+steamboat": "spaceship",
"atmosphere+steel": "spaceship",
"atmosphere+train": "spaceship",

"blade+flower": "rose",
"blade+plant": "rose",
"flower+love": "rose",
"love+plant": "rose",

"pencil+wood": "ruler",

  "container+flour": "sack",
  "container+letter": "sack",
  "container+salt": "sack",


"horse+skin": "saddle",
"horse+tool": "saddle",

"container+gold": "safe",
"container+gun": "safe",
"gold+metal": "safe",
"gold+steel": "safe",
"metal+money": "safe",
"money+steel": "safe",

"armor+glasses": "safety_glasses",
"bulletproof_vest+glasses": "safety_glasses",
"engineer+glasses": "safety_glasses",
"explosion+glasses": "safety_glasses",
"glasses+tool": "safety_glasses",


"boat+wind": "sailboat",
"cloth+steamboat": "sailboat",
"steamboat+wind": "sailboat",


"human+lake": "sailor",
"human+sailboat": "sailor",
"human+steamboat": "sailor",

"fire+monster": "salamander",
"lava+monster": "salamander",
"lizard+monster": "salamander",
"monster+volcano": "salamander",

"fire+ocean": "salt",
"mineral+ocean": "salt",
"mineral+sea": "salt",
"ocean+sun": "salt",

"air+pebble": "sand",
"air+rock": "sand",
"pebble+small": "sand",
"pebble+wind": "sand",
"rock+wind": "sand",

"beach+castle": "sand_castle",
"castle+desert": "sand_castle",
"castle+dune": "sand_castle",

"good+mara": "sandman",
"monster+sand": "sandman",

"earth+sand": "sandstone",
"rock+sand": "sandstone",

"desert+motion": "sandstorm",
"desert+storm": "sandstorm",
"desert+tornado": "sandstorm",
"motion+sand": "sandstorm",
"sand+tornado": "sandstorm",

"bacon+bread": "sandwich",
"bread+ham": "sandwich",
"bread+vegetable": "sandwich",

"christmas_stocking+human": "santa",
"christmas_stocking+legend": "santa",
"christmas_stocking+story": "santa",
"christmas_tree+human": "santa",
"christmas_tree+legend": "santa",
"christmas_tree+story": "santa",

"jupiter+small": "saturn",
"planet+ring": "saturn",

"ambulance+blade": "scalpel",
"ambulance+sword": "scalpel",
"blade+doctor": "scalpel",
"blade+hospital": "scalpel",
"doctor+sword": "scalpel",
"hospital+sword": "scalpel",

"barn+statue": "scarecrow",
"farm+statue": "scarecrow",
"golem+hay": "scarecrow",
"hay+sack": "scarecrow",
"hay+statue": "scarecrow",
"jack_o_lantern+sack": "scarecrow",
"pumpkin+sack": "scarecrow",

"human+microscope": "science",
"human+universe": "science",

"blade+sword": "scissors",
"paper+sword": "scissors",
"sword+sword": "scissors",

"animal+dune": "scorpion",
"animal+sand": "scorpion",
"desert+spider": "scorpion",
"dune+spider": "scorpion",
"sand+spider": "scorpion",

"air+container": "scuba_tank",
"atmosphere+container": "scuba_tank",
"container+oxygen": "scuba_tank",

"axe+grass": "scythe",
"axe+wheat": "scythe",
"blade+grass": "scythe",
"blade+wheat": "scythe",
"grass+sword": "scythe",
"sword+wheat": "scythe",

"big+lake": "sea",
"lake+lake": "sea",
"ocean+small": "sea",

"beach+bird": "seagull",
"beach+pigeon": "seagull",
"bird+ocean": "seagull",
"bird+sea": "seagull",
"ocean+pigeon": "seagull",
"pigeon+sea": "seagull",

"fish+horse": "seahorse",
"horse+lake": "seahorse",
"horse+ocean": "seahorse",
"horse+sea": "seahorse",

"arctic+dog": "seal",
"dog+lake": "seal",
"dog+ocean": "seal",
"dog+sea": "seal",
"dog+water": "seal",

"airplane+lake": "seaplane",
"airplane+ocean": "seaplane",
"airplane+sea": "seaplane",
"airplane+water": "seaplane",

"boat+illness": "seasickness",
"illness+lake": "seasickness",
"illness+ocean": "seasickness",
"illness+sailboat": "seasickness",
"illness+sea": "seasickness",
"illness+steamboat": "seasickness",

"grass+ocean": "seaweed",
"grass+sea": "seaweed",
"lake+plant": "seaweed",
"plant+sea": "seaweed",

"bee+pollen": "seed",
"flower+time": "seed",
"plant+pollen": "seed",

"monster+seal": "selkie",

"electricity+needle": "sewing_machine",
"electricity+thread": "sewing_machine",
"machine+needle": "sewing_machine",
"needle+robot": "sewing_machine",
"robot+thread": "sewing_machine",

"blood+sea": "shark",
"fish+wolf": "shark",
"ocean+wolf": "shark",
"sea+wolf": "shark",

"cloud+livestock": "sheep",
"hill+livestock": "sheep",
"land+livestock": "sheep",
"livestock+wool": "sheep",

"book+music": "sheet_music",
"music+paper": "sheet_music",

"boat+kraken": "shipwreck",
"kraken+pirate_ship": "shipwreck",
"kraken+sailboat": "shipwreck",
"kraken+steamboat": "shipwreck",

"blade+ninja": "shuriken",
"blade+star": "shuriken",
"metal+star": "shuriken",
"star+steel": "shuriken",
"star+sword": "shuriken",

"bacteria+human": "illness",
"human+swamp": "illness",

"bank+wheat": "silo",
"barn+wheat": "silo",
"container+wheat": "silo",
"farm+wheat": "silo",
"house+wheat": "silo",
"safe+wheat": "silo",
"wall+wheat": "silo",

"ski_goggles+wheel": "skateboard",
"skier+wheel": "skateboard",
"snowboard+wheel": "skateboard",

"bone+bone": "skeleton",
"bone+corpse": "skeleton",

"glacier+glasses": "ski_goggles",
"glacier+sunglasses": "ski_goggles",
"glasses+skier": "ski_goggles",
"glasses+snow": "ski_goggles",
"skier+sunglasses": "ski_goggles",
"snow+sunglasses": "ski_goggles",

"human+ski_goggles": "skier",

"atmosphere+cloud": "sky",
"atmosphere+sun": "sky",

"big+house": "skyscraper",
"cloud+house": "skyscraper",
"house+sky": "skyscraper",
"sky+village": "skyscraper",

"antarctica+cart": "sleigh",
"antarctica+wagon": "sleigh",
"arctic+cart": "sleigh",
"arctic+wagon": "sleigh",
"cart+ice": "sleigh",
"cart+snow": "sleigh",
"ice+wagon": "sleigh",
"snow+wagon": "sleigh",

"animal+time": "sloth",
"manatee+tree": "sloth",

"bacteria+philosophy": "small",
"bee+philosophy": "small",
"carbon_dioxide+philosophy": "small",
"confetti+philosophy": "small",
"oxygen+philosophy": "small",
"ozone+philosophy": "small",
"pebble+philosophy": "small",
"philosophy+rivulet": "small",
"philosophy+scorpion": "small",
"philosophy+seahorse": "small",
"philosophy+spider": "small",

"small+tablet": "phone",

"air+city": "smog",
"atmosphere+city": "smog",

"campfire+storm": "smoke",
"campfire+time": "smoke",
"campfire+water": "smoke",
"earth+gas": "smoke",
"fire+grass": "smoke",
"fire+plant": "smoke",

"campfire+cloth": "smoke_signal",
"cloth+smoke": "smoke_signal",
"letter+smoke": "smoke_signal",

"blender+fruit": "smoothie",
"fruit+ice": "smoothie",

"animal+rope": "snake",
"animal+wire": "snake",
"electric_eel+land": "snake",

"mountain_range+rain": "river",

"blizzard+crystal_ball": "snow_globe",
"blizzard+glass": "snow_globe",
"christmas_stocking+crystal_ball": "snow_globe",
"christmas_stocking+glass": "snow_globe",
"christmas_tree+crystal_ball": "snow_globe",
"christmas_tree+glass": "snow_globe",
"crystal_ball+ice": "snow_globe",
"crystal_ball+santa": "snow_globe",
"crystal_ball+snow": "snow_globe",
"crystal_ball+snowball": "snow_globe",
"crystal_ball+snowman": "snow_globe",
"crystal_ball+snowmobile": "snow_globe",
"glass+santa": "snow_globe",
"glass+snow": "snow_globe",
"glass+snowball": "snow_globe",
"glass+snowman": "snow_globe",
"glass+snowmobile": "snow_globe",

"earth+snow": "snowball",
"rock+snow": "snowball",
"snow+stone": "snowball",

"ice+surfer": "snowboard",
"ice+wood": "snowboard",
"mountain+surfer": "snowboard",
"mountain_range+surfer": "snowboard",
"snow+surfer": "snowboard",
"snow+wood": "snowboard",

"human+snowboard": "snowboarder",

"carrot+snow": "snowman",
"carrot+snowball": "snowman",
"coal+snow": "snowman",
"coal+snowball": "snowman",
"human+snow": ["snowman", "snowball"],
"snowball+snowball": "snowman",

"car+glacier": "snowmobile",
"car+ice": "snowmobile",
"car+snow": "snowmobile",
"glacier+motorcycle": "snowmobile",
"ice+motorcycle": "snowmobile",
"motorcycle+snow": "snowmobile",

"ash+oil": "soap",
"ash+wax": "soap",
"clay+oil": "soap",
"clay+wax": "soap",
"oil+wax": "soap",

"carbon_dioxide+juice": "soda",
"carbon_dioxide+tea": "soda",

"earth+life": "soil",
"land+life": "soil",
"land+organic_matter": "soil",

"electricity+sun": "solar_cell",
"energy+sun": "solar_cell",
"machine+sun": "solar_cell",

"container+jupiter": "solar_system",
"container+mars": "solar_system",
"container+mercury": "solar_system",
"container+planet": "solar_system",
"container+saturn": "solar_system",
"container+sun": "solar_system",
"container+venus": "solar_system",
"planet+sun": "solar_system",

"wave+wolf": "sound",

"moon+star": "space",
"night+solar_system": "space",
"sky+solar_system": "space",
"sky+star": "space",
"star+sun": "space",

"atmosphere+house": "space_station",
"atmosphere+village": "space_station",
"atmosphere+wall": "space_station",
"house+space": "space_station",
"space+village": "space_station",
"space+wall": "space_station",

"airplane+space": "spaceship",
"astronaut+container": "spaceship",
"boat+space": "spaceship",
"car+space": "spaceship",
"metal+space": "spaceship",
"pirate_ship+space": "spaceship",
"space+steamboat": "spaceship",
"space+steel": "spaceship",

"pasta+thread": "spaghetti",
"pasta+wire": "spaghetti",

"desert+statue": "sphinx",
"lion+stone": "sphinx",
"pyramid+statue": "sphinx",

"animal+net": "spider",
"animal+thread": "spider",
"animal+web": "spider",

"shovel+small": "spoon",

"light+machine": "spotlight",
"light+metal": "spotlight",
"light+steel": "spotlight",

"double_rainbow+sugar": "sprinkles",
"paint+sugar": "sprinkles",

"animal+nut": "squirrel",
"mouse+nut": "squirrel",
"mouse+plant": "squirrel",
"mouse+tree": "squirrel",

"night+sky": "star",
"night+space": "star",
"night+telescope": "star",
"sky+space": "star",
"space+sun": "star",
"space+telescope": "star",

"ocean+star": "starfish",
"sea+star": "starfish",

"astronaut+medusa": "statue",
"baker+medusa": "statue",
"boulder+hammer": "statue",
"butcher+medusa": "statue",
"doctor+medusa": "statue",
"drunk+medusa": "statue",
"engineer+medusa": "statue",
"farmer+medusa": "statue",
"firefighter+medusa": "statue",
"hacker+medusa": "statue",
"human+medusa": "statue",
"lumberjack+medusa": "statue",
"medusa+mirror": "statue",
"medusa+pilot": "statue",
"medusa+sailor": "statue",
"medusa+surfer": "statue",

"bbq+cow": "steak",
"bbq+meat": "steak",
"cow+fire": "steak",
"fire+meat": "steak",

"gas+water": "steam",

"boiler+wheel": "steam_engine",
"machine+steam": "steam_engine",
"steam+wheel": "steam_engine",

"boat+steam_engine": "steamboat",
"ocean+steam_engine": "steamboat",
"pirate_ship+steam_engine": "steamboat",
"sailboat+steam_engine": "steamboat",
"sea+steam_engine": "steamboat",

"ash+metal": "steel",
"metal+mineral": "steel",

"metal+wool": "steel_wool",
"steel+wool": "steel_wool",
"wire+wool": "steel_wool",

"doctor+drum": "stethoscope",
"doctor+sound": "stethoscope",
"doctor+tool": "stethoscope",
"hospital+tool": "stethoscope",
"sound+tool": "stethoscope",

"earth+solid": "stone",

"atmosphere+electricity": "lightning",
"rain+wind": "storm",

"big+rivulet": "stream",
"motion+pond": "stream",
"river+small": "stream",

"cup+thread": "string_phone",
"cup+wire": "string_phone",

"bow+electricity": "taser",
"bow+energy": "taser",
"energy+gun": "taser",
"gun+wire": "taser",

"alcohol+energy": "sugar",
"beer+energy": "sugar",
"beer+fire": "sugar",
"energy+fruit": "sugar",
"energy+juice": "sugar",
"energy+wine": "sugar",
"fire+fruit": "sugar",
"fire+wine": "sugar",

"day+light": "sun",
"day+sky": "sun",
"day+space": "sun",
"fire+planet": "sun",
"fire+sky": "sun",
"light+planet": "sun",
"light+sky": "sun",

"god+monkey": "wukong",
"immortality+monkey": "wukong",
"monkey+peach_of_immortality": "wukong",

"clock+light": "sundial",
"clock+sun": "sundial",
"day+tool": "sundial",
"day+wheel": "sundial",
"light+watch": "sundial",
"light+wheel": "sundial",
"sun+tool": "sundial",
"sun+watch": "sundial",
"sun+wheel": "sundial",

"beach+glasses": "sunglasses",
"day+glasses": "sunglasses",
"glasses+light": "sunglasses",
"glasses+sky": "sunglasses",
"glasses+sun": "sunglasses",

"explosion+galaxy": "supernova",
"explosion+star": "supernova",
"explosion+sun": "supernova",

"beach+human": "surfer",
"human+wave": "surfer",

"caviar+seaweed": "sushi",

"algae+lake": "swamp",
"algae+pond": "swamp",
"grass+mud": "swamp",
"lake+reed": "swamp",
"mud+reed": "swamp",
"mud+tree": "swamp",
"pond+reed": "swamp",

"glasses+lake": "swim_goggles",
"glasses+ocean": "swim_goggles",
"glasses+river": "swim_goggles",
"glasses+sea": "swim_goggles",
"glasses+water": "swim_goggles",
"lake+sunglasses": "swim_goggles",
"ocean+sunglasses": "swim_goggles",
"river+sunglasses": "swim_goggles",
"sea+sunglasses": "swim_goggles",
"sunglasses+water": "swim_goggles",

"human+pond": "swimmer",
"human+swimming_pool": "swimmer",

"house+lake": "swimming_pool",
"house+swimmer": "swimming_pool",

"blade+metal": "sword",
"blade+steel": "sword",

"blade+fish": "swordfish",
"blade+shark": "swordfish",
"shark+sword": "swordfish",

  "court+heirloom": "feud",
"feud+football": "derby",
};
