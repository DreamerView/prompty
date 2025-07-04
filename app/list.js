const list = [
  {
    id: 1,
    type:"human",
    title: "Spotify Streets: Future Fit",
    image: "/gallery/1.png",
    prompt: "A stylish young male model stands on a giant iPhone 16 screen showing a Spotify playlist. He wears 2025 AirPods Max, an oversized white shirt, black shorts, and white Air Jordans. The top-down angle highlights the scale of the phone. The vibe is sleek, modern, and minimal",
    desc: "A model stands on an iPhone screen with Spotify, dressed in futuristic streetwear and AirPods Max.",
    key: ["fashion", "tech", "streetwear", "modern", "realism"]
  },
  {
    id: 2,
    type:"human",
    title: "Spectrum in the Shadows",
    image: "/gallery/2.png",
    prompt: "Create image Stipple-shaded black-and-white portrait on a pure black backdrop, medium close-up of the source image. The face, hair, and clothing are rendered with fine dotted texture and sharp contrast, almost like a hand-inked engraving. The subject wears oversized wraparound visor sunglasses. Only the lenses are in color, glowing with a vivid rainbow gradient from red to violet. Everything else stays grayscale. Lighting is low-key and dramatic, adding depth but keeping the background dark. High detail, slight film grain.",
    desc: "High-contrast dotted portrait with colorful visor lenses and dramatic lighting on black background.",
    key: ["portrait", "grayscale", "pop-art", "contrast", "stylized"]
  },
  {
    id: 3,
    type:"human",
    title: "Breaking the Feed",
    image: "/gallery/3.png",
    prompt: `A trompe l'œil illusion of a (subject) in (outfit) emerging from a large screen displaying a "xyz" social media interface. The screen shows the username "@" , 1K likes, & 12–20 comments with floating emojis (heart eyes, smiley faces).`,
    desc: "Trompe-l'œil illusion of a character emerging from a social media screen full of likes and emojis.",
    key: ["illusion", "social", "conceptual", "fun"]
  },
  {
    id: 4,
    type:"human",
    title: "When Real Meets Toon!",
    image: "/gallery/4.png",
    prompt: `Ultra-realistic 9:16 vertical format fisheye selfie of me with [shinchan, Doraemon, Naruto, Nobita,]. We're all making silly, exaggerated faces. Set in a small, bright living room with white tones. High camera angle. Extreme fisheye distortion. Realistic, cinematic lighting, anime characters integrated with stylized realism.`,
    desc: "A silly fisheye selfie with anime legends in a cozy living room. Real meets toon in cinematic style.",
    key: ["anime", "selfie", "realism", "fun", "cartoon"]
  },
  {
    id: 5,
    type:"human",
    title: "Pixel Persona: Glitch Awakening",
    image: "/gallery/5.png",
    prompt: "A close-up of a young man’s face as he looks directly at the screen, half of his face glitching into pixel blocks and RGB shifts. Background is a dark futuristic city blurred out. Lighting is neon with red and cyan accents. Facial expression is neutral but intense.",
    desc: "Half-glitched digital face stares through the screen — real meets virtual in a neon glitch realm.",
    key: ["glitch", "cyberpunk", "portrait", "digital", "futuristic"]
  },
  {
    id: 6,
    type:"human",
    title: "Upload Complete: Human v1.0",
    image: "/gallery/6.png",
    prompt: "A front-facing portrait of a confident person from upload image looking into the camera as if scanning the viewer. Half head is transparent showing circuit boards and glowing wires. Light comes from a futuristic holographic interface in front of her. Very cinematic, clean, and tech-inspired. ",
    desc: "Sci-fi portrait of a woman with a digital twist — her face lit by a futuristic UI as if scanning you.",
    key: ["sci-fi", "portrait", "cyborg", "futuristic", "technology"]
  },
  {
    id: 7,
    type:"human",
    title: "404 Face Not Found",
    image: "/gallery/7.png",
    prompt: "A surreal close-up of a man’s face partially erased with brush strokes and glitch fragments. His eye is replaced by a spinning loading icon. Background is plain white. Emotion is confused but calm. Inspired by digital identity loss and internet culture.",
    desc: "A conceptual digital portrait where the man’s face glitches out like a missing file — surreal and expressive.",
    key: ["surreal", "identity", "internet", "glitch", "conceptual"]
  },
  {
    id: 8,
    type:"human",
    title: "Through the Frame",
    image: "/gallery/8.png",
    prompt: "A person from upload image leans toward the camera from inside a computer monitor, his hands gripping the frame like he’s stepping out. His facial expression is shocked and curious. Lighting comes from the monitor glow. Background is a real desktop with coffee mug and notepad.",
    desc: "Breaking the 4th wall — a man’s face emerges from the screen in vivid realism, crossing virtual and real.",
    key: ["4th-wall", "realism", "monitor", "surreal", "interactive"]
  },
  {
    id: 9,
    type:"human",
    title: "Steppe Elegance",
    image: "/gallery/9.png",
    prompt: "Ultra-realistic portrait of the original person wearing a richly embroidered shapan and a traditional Kazakh headdress (tymaq for men or saukele for women), standing in front of a vast golden steppe under soft sunlight. The wind slightly moves their clothing. Style is realistic and noble, evoking the timeless spirit of the Kazakh people.",
    desc: "A portrait set against the backdrop of the Kazakh steppe, wearing traditional clothing — pure realism, without stylization.",
    key: ["kazakh", "traditional", "steppe", "realism", "cultural"]
  },
  {
    id: 10,
    type:"human",
    title: "Yurt Serenity",
    image: "/gallery/10.png",
    prompt: "A warm, peaceful portrait of the original person sitting inside a traditional Kazakh yurt, lit by soft natural light. They are dressed in national garments with detailed patterns, surrounded by felt carpets and wooden ornaments. The expression is calm and dignified. The background is rich in cultural detail.",
    desc: "The coziness and warmth of a yurt in a classic Kazakh interior, with a focus on the face and traditions.",
    key: ["kazakh", "yurt", "interior", "warm", "traditional"]
  },
  {
    id: 11,
    type:"human",
    title: "Dombra Soul",
    image: "/gallery/11.png",
    prompt: "A mid-close portrait of the original person holding a dombra near the chest, gazing gently ahead. Traditional Kazakh attire and detailed embroidery are visible. The background is softly blurred with steppe grass and blue sky, focusing fully on the face and emotion.",
    desc: "A bright portrait with a dombra in hand, where all the attention is focused on the face and emotions.",
    key: ["kazakh", "music", "dombra", "emotion", "portrait"]
  },
  {
    id: 12,
    type:"human",
    title: "Mountain Heritage",
    image: "/gallery/12.png",
    prompt: "A realistic portrait of the original person standing outdoors with the majestic Kazakh mountains (such as the Alatau range) in the background. The person wears traditional Kazakh clothing appropriate to their gender — a man in a velvet chapan and traditional hat like a borik or tymak, or a woman in a richly layered national dress with matching embroidered headwear. Their facial features remain fully visible and untouched. The expression is proud and serene. The natural cool daylight enhances the authenticity and atmosphere.",
    desc: "A proud, calm portrait in traditional Kazakh clothing with mountain scenery — culturally accurate and gender-aware.",
    key: ["kazakh", "mountains", "traditional", "gender-aware", "realism"]
  },
  {
    id: 13,
    type:"human",
    title: "Silhouettes at Sunset – A Double Exposure Love Story",
    image: "/gallery/13.png",
    prompt: "A double cinematic exposure of us in profile, with a sunset landscape integrated into our silhouettes, showing both of us walking hand in hand on wet sand, with gentle sea waves crashing and the sky painted by the last rays of sunlight. A warm and intimate atmosphere, golden and orange tones, subtle and expressive details, 8K resolution.",
    desc: "A romantic double exposure of a couple holding hands on the beach, sunset glowing through their intimate profile silhouettes.",
    key: ["double_exposure","romantic_couple","sunset","silhouette","warm","emotion"]
  },
  {
    id: 14,
    type:"human",
    title: "Golden Hour Picnic on the Hilltop",
    image: "/gallery/14.png",
    prompt: "A realistic photo of a couple having a picnic on a grassy hilltop at golden hour. A cozy blanket, fruits, flowers, and a view of distant mountains. The couple laughs while feeding each other strawberries. Lens flare, crisp natural detail, soft depth of field.",
    desc: "A romantic hilltop picnic at golden hour with a laughing couple, strawberries, flowers, and a mountain view.",
    key: ["realistic","picnic","hilltop","strawberries","couple","mountain"]
  },
  {
    id: 15,
    type:"human",
    title: "Rainy Night Under One Umbrella",
    image: "/gallery/15.png",
    prompt: "A couple standing under a glowing streetlamp in a rainy city at night, sharing one umbrella. Reflections on the wet pavement, neon lights in the background. Ultra-realistic textures — water droplets, skin pores, clothes.",
    desc: "A couple under one umbrella on a rainy night, neon reflections glowing on the wet pavement in a vibrant city.",
    key: ["realistic","rainy","night","romance","couple","umbrella"]
  },
  {
    id: 16,
    type:"human",
    title: "Cozy Movie Night at Home",
    image: "/gallery/16.png",
    prompt: "A realistic candid photo of a couple cuddling on a couch at night, wrapped in a blanket, watching a movie. Warm ambient light, popcorn on the table, soft expressions, very detailed shadows, fabric textures, and natural skin tones.",
    desc: "A candid moment of a couple cuddling under a blanket, watching a movie with warm light and popcorn on the table.",
    key: ["realistic","movie","couple","blanket","home"]
  }
];

export default list;
