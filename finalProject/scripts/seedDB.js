const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/final-projectDB" );

const inventorySeed = [
  {
    product: "2 Person Backpacking Tent",
    description: "Your home away from home shouldn't skimp on the essentials. The 3-season REI Co-op Half Dome 2 Plus backpacking tent provides you and a partner with plenty of room to stretch out and stay comfortable.",
    retail: 229,
    quantity: 12
  },
  {
    product: "4 Person Tent",
    description: "Big enough for rainy afternoon card games or road trippin' mountain bikers who like to stand up in their shelter to change, the Big Agnes Big House 4 offers 3-season shelter and a 5 ft. peak height.",
    retail: 299,
    quantity: 20
  },
  {
    product: "6 Person Tent",
    description: "With considerable living space, standing room and a screened-in porch, the Nemo Wagontop 6P tent leverages a unique pole structure to create a camping experience you won't soon forget.",
    retail: 649,
    quantity: 10
  },
  {
    product: "Backpack",
    description: "Head out for the weekend and haul your gear for miles in the Osprey Aether AG 60 pack. You'll soon notice the difference of the custom-fit Anti-Gravity™ harness and suspended mesh back panel.",
    retail: 290,
    quantity: 75
  },
  {
    product: "Camp Cot",
    description: "Anything but your typical bare-bones cot, the fully padded REI Kingdom Cot 3 provides plush support with plenty of room to stretch out, relax and slumber until the sun comes up.",
    retail: 159,
    quantity: 30
  },
  {
    product: "Sleeping Bag",
    description: "Toasty-warm yet ultralight and compressible, the men's NEMO Kyan 35 sleeping bag helps you stay cozy and catch some quality zzz's at your off-the-grid campsite.",
    retail: 219,
    quantity: 75
  },
  {
    product: "Sleeping Pad",
    description: "Designed with a smooth sleeping surface, larger outside tubes and high-volume valve for quick inflation and deflation, the 3-season Big Agnes Insulated Air Core Pad packs fast, light and small.",
    retail: 99,
    quantity: 45
  },
  {
    product: "Camp Pillow",
    description: "Luxurious, high-performance comfort without a lot of bulk, the Sea to Summit Aeros Premium pillow is perfect for travel and camping where you can risk a couple extra grams for a great night's sleep.",
    retail: 45,
    quantity: 62
  },
  {
    product: "Camp Table",
    description: "Whether you're playing cards or sitting down for a gourmet dinner, this lightweight, packable table makes it all possible on your car-camping adventures.",
    retail: 65,
    quantity: 30
  },
  {
    product: "Camp Chair",
    description: "Oh, the places you'll lounge! The Sit Anywhere chair from Mountain Summit Gear offers a comfy spot to relax and enjoy a backcountry sunset, an outdoor movie or a backyard cookout.",
    retail: 19,
    quantity: 26
  },
  {
    product: "Lightweight Camp Chair",
    description: "If you want full-on comfort and without all the fuss, tthe TravelChair Joey chair is light, comfortable, packs down to just about nothing and still supports 300 lbs.",
    retail: 99,
    quantity: 45
  },
  {
    product: "Deluxe Camp Chair",
    description: "Be the hit of the meteor shower party in the NEMO Stargaze Recliner Luxury. Its supportive headrest ensures you won't get a crick in your neck as you lean back, swing and marvel at the night sky.",
    retail: 199,
    quantity: 22
  },
  {
    product: "Hammock",
    description: "Pack a sublime, suspended dozing experience for 2 people into any backcountry destination with the Sea to Summit Double Pro hammock bundle. It offers a hammock and straps in a light, compact package.",
    retail: 99,
    quantity: 70
  },
  {
    product: "Trekking Poles",
    description: "For a bit of extra help on hardworking hikes, the ergonomic, durable rubber grips and wide, supportive trail baskets of the adjustable REI Passage Trekking Poles bring a reliable boost to every step.",
    retail: 69,
    quantity: 112
  },
  {
    product: "Rechargeable Headlamp",
    description: "On midweek dawn patrol and overnight trail runs, the Black Diamond Spot waterproof headlamp shines 300 lumens and lets you adjust the brightness easily on the fly and in any weather.",
    retail: 39,
    quantity: 35
  },
  {
    product: "Electric Lantern",
    description: "With up to 700 lumens of bright, clean light, the Ultimate Survival Technologies 30 Day Duro Lantern has an impact-resistant housing that makes it strong enough for the most rugged adventures.",
    retail: 49,
    quantity: 27
  },
  {
    product: "Pocket Rocket Stove",
    description: "The next-generation MSR PocketRocket 2 backpacking stove takes everything good about the celebrated original and makes it even better. It's lighter weight and smaller, and fits a wider range of pots.",
    retail: 45,
    quantity: 53
  },
  {
    product: "2 Burner Camp Stove",
    description: "The portable Eureka Ignite 2-burner camp stove helps you create perfectly cooked meals in the outdoors. Its 2-turn simmer control gives precise flame adjustment and enhances the cooking performance.",
    retail: 99,
    quantity: 37
  },
  {
    product: "Deluxe Camp Stove",
    description: "The Jetboil Genesis Basecamp System is the world's first complete cooking solution in one easy-to-carry travel bag.",
    retail: 349,
    quantity: 3
  },
  {
    product: "Camp Cook Set",
    description: "Take your camp food to the next level with the Stanley Adventure Base Camp Cookset 4. This 19-piece cookset packs full-kitchen convenience into a camp-friendly package for truly epicurean adventures.",
    retail: 80,
    quantity: 57
  },
  {
    product: "Water Filter",
    description: "Weighing only 2 oz. and sized to fit in the palm of your hand, the Sawyer Mini water filter is one of the lightest, most compact filters available, and you can use it to drink straight from a stream.",
    retail: 19,
    quantity: 116
  },
  {
    product: "Coffee Percolator",
    description: "Ahhh, the memories of waking up to hear a percolator bubbling over the campfire and anticipating that outdoor coffee are brought back to life thanks to the 6-cup Stanley Adventure Percolator.",
    retail: 40,
    quantity: 2
  },
  {
    product: "Cooler",
    description: "Built to handle the abuse of outdoor adventures while keeping your food and drinks icy cold, the super-rugged YETI Tundra 45 Cooler provides 32.9 liters of cold storage for your camp.",
    retail: 300,
    quantity: 5
  },
  {
    product: "Camp Shower",
    description: "There's nothing like a refreshing shower after a muddy mountain bike ride or hot, dusty hike. Use the freestanding NEMO Helio™ Pressure Shower to clean up as soon as you're back at the car.",
    retail: 99,
    quantity: 7
  },
]

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " INVENTORY inserted!");
    process.exit(0);
  })
  .catch(err => {_
    console.error(err);
    process.exit(1);
  });

const postSeed = [
  {
    author: {
      _id: '5e1d07555c13f02bc1313a29',
      username: "tardyparty",
      name: "David Tardy"
    },
    body: "Where should I go camping close to Nashville?",
    comments: [
      {
        author: {
          username: "glampGirl"
        },
        body: "I like percy warner if I only have a couple hours"
      },
      {
        author: {
          username: "tardyparty"
        },
        body: "ok cool, I haven't been there yet!"
      },
      {
        author: {
          username: "NashDog43"
        },
        body: "there are tons of pretty good trails in the city and lots more if you drive a little"
      }
    ]
  },
  {
    author: {
      _id: '5e1d07555c13f02bc1313a29',
      username: "tardyparty",
      name: "David Tardy"
    },
    body: "Does anyone want to go day hiking at Percy Warner?",
    comments: [
      {
        author: {
          username: "glampGirl"
        },
        body: "ALWAYS DOWN"
      },
      {
        author: {
          username: "aHikeADay"
        },
        body: "let's do the red trail. I think its like 4 miles-ish"
      },
      {
        author: {
          username: "NashDog43"
        },
        body: "I'll bring my dog, he loves that trail!"
      }
    ]
  }
]

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " POSTS inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// const userSeed = [
//   {
//     username: "tardyparty",
//     email: "latetard@gmail.com",
//     name: "David Tardy",
//     password: "4510tardy"
//   }
// ]

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " Users inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });