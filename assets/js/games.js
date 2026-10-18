// Gamealltime - Game Registry
// TO ADD A NEW GAME: just push a new object to this array.
// Required: id, title, category, thumb, url
const GAMES = [
  {
    id: "road-fury",
    title: "Road Fury",
    category: "Racing",
    badge: "HOT",
    badgeColor: "#ff5a36",
    rating: 4.9,
    plays: "125K",
    thumb: "linear-gradient(135deg,#ff5a36 0%, #ff7a3d 45%, #ffb347 100%)",
    thumbIcon: "🏎️",
    thumbImage: "assets/img/road-fury-thumb.svg",
    url: "games/road-fury/index.html",
    featured: true,
    description: "Survive the 3-minute road to the finish line. Dodge obstacles, smash barriers, grab repair kits. 100 stages, 8 cars to unlock!",
    controls: "WASD / Arrows to drive • Space Attack • Shift Block • E Skill",
    tags: ["3D", "Car", "Action", "Stages"]
  }
];

const CATEGORIES = ["All", "Racing", "Action", "Puzzle", "Adventure", "Sports"];
