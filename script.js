const timeline = [

  {
    dates:    "August 2022 — Present",
    title:    "Unreal Engine Developer",
    subtitle: "Inworld AI",
    logo:     "logo/Inworld.png",
    projects: [
      {
        name:  "Inworld Godot SDK",
        thumb: "thumb/GodotSDK.png",
        video: "video/GodotSDK.mp4",
        description: "I developed the Inworld Godot SDK during a company hackathon, enabling Godot developers to seamlessly integrate Inworld AI characters into their games. This SDK empowers game creators to enhance their projects with interactive, AI-driven characters, enriching gameplay and storytelling experiences.",
        tech: ["Godot", "C++", "GDScript"]
      },
      {
        name:  "TED Talk",
        thumb: "thumb/Ted.png",
        video: "",
        description: "I contributed to a demo showcased during a TED Talk presentation, which highlighted the potential of AI to bring fictional characters to life. The demo featured Caleb, an 'AI agent' with personality and internal reasoning, demonstrating how AI-powered characters can interact with people in novel ways, generate unique video game outcomes, and enhance storytelling capabilities. I provided support for the Unreal SDK for Inworld, facilitating the integration of these advanced AI interactions.",
        tech: ["Unreal Engine 5"]
      },
      {
        name:  "Covert Protocol (NVIDIA)",
        thumb: "thumb/CovertProtocol.png",
        video: "video/CovertProtocol.mp4",
        description: "NVIDIA Covert Protocol is a tech demo developed with Inworld AI to showcase the cutting-edge NVIDIA ACE (Avatar Cloud Engine) technologies for creating interactive, AI-driven NPCs in video games. Built on Unreal Engine 5, it features characters that leverage generative AI to respond dynamically to player dialogue and actions in real time, facilitating immersive experiences like detective-style investigations where players can interrogate suspects. I integrated Audio2Face into the Inworld Unreal SDK and served as a Forward Deployed Engineer to support NVIDIA in the demo's development..",
        tech: ["Unreal Engine 5", "Audio2Face"]
      },
      {
        name:  "NEO NPC (UBISOFT)",
        thumb: "thumb/Neo.png",
        video: "",
        description: "Ubisoft's NEO NPC is a generative AI-powered prototype that transcends traditional scripted dialogue, enabling unscripted, real-time conversations and emotional interactions between players and NPCs. Developed in collaboration with NVIDIA ACE and Inworld AI, these intelligent characters use large language models to understand, remember, and react to players' actions while preserving character personality and narrative authenticity. I contributed by integrating Audio2Face into the Inworld Unreal SDK and served as a Forward Deployed Engineer to support Ubisoft in developing the demo.",
        tech: ["Unreal Engine 5", "Audio2Face"]
      },
      {
        name:  "Stardew Valley Mod",
        thumb: "thumb/StardewMod.png",
        video: "video/StardewMod.mp4",
        description: "I created the 'Stardew Valley: AI Villagers' mod, powered by Inworld's AI character engine, which enhances NPC interactions by generating dynamic dialogue and real-time emotional responses. This mod enables players to develop deeper relationships with villagers through unscripted conversations. It supports full configuration of existing characters and the addition of custom characters. The mod has been downloaded over 10,000 times on NexusMods",
        tech: ["SMAPI", "C#"]
      },
      {
        name:  "Origins",
        thumb: "thumb/Origins.png",
        video: "video/Origins.mp4",
        description: "Inworld Origins is a tech-demo detective game by Inworld AI, highlighting AI-driven NPCs capable of dynamic, unscripted, voice-based interactions. Developed in collaboration with John Gaeta (The Matrix), the game features NPCs with distinct personalities, memories, and emotions, powered by large language models to replace traditional scripted dialogue. I contributed by developing the underlying Inworld SDK for Unreal Engine and implementing the gameplay mechanics for the project.",
        tech: ["Unreal Engine 5", "C++", "Blueprint"]
      }
    ]
  },

  {
    dates:    "May 2017 - August 2022",
    title:    "Gameplay Engineer",
    subtitle: "Hi-Rez Studios",
    logo:     "logo/HiRez.png",
    projects: [
      {
        name:  "Rogue Company",
        thumb: "thumb/RogueCompany.png",
        video: "video/RogueCompany.mp4",
        description: "I developed core gameplay systems and tools that enabled designers to rapidly prototype and ship new game modes in Rogue Company. My work included networking improvements to character movement, modular game mode architecture, spawn-selection logic, and gameplay features such as abilities, weapons, and killcam replay. I also led development of the limited-time Battle Zone mode, which became the game’s highest-CCU event mode.",
        tech: ["Unreal Engine 4", "C++", "Blueprint"]
      },
      {
        name:  "Realm Royale",
        thumb: "thumb/RealmRoyale.png",
        video: "video/RealmRoyale.mp4",
        description: "During the explosive early growth of Realm Royale, I helped rapidly prototype and ship gameplay features in a fast-paced iteration environment. I worked across multiple areas of the codebase, quickly adapting to new technologies while supporting development in Unreal Engine and legacy systems. My focus was enabling rapid feature development to keep pace with the game’s sudden player growth.",
        tech: ["Unreal Engine 3", "UnrealScript"]
      },
      {
        name:  "SMITE Tactics",
        thumb: "thumb/SmiteTactics.png",
        video: "video/SmiteTactics.mp4",
        description: "For SMITE Tactics, I built gameplay tooling that allowed designers to independently create and maintain character abilities and spells using Blueprint libraries. I also implemented a gameplay event logging system to generate meaningful data for analysis and UI display. Additionally, I developed a configurable deck validation system to enforce rules and prevent invalid or cheating deck configurations.",
        tech: ["Unreal Engine 4", "C++", "Blueprint"]
      }
    ]
  },

  {
    dates:    "Summer 2016",
    title:    "Core Tech Intern",
    subtitle: "2K Games",
    logo:     "logo/2K.png",
    projects: [
      {
        name:  "Mafia III",
        thumb: "thumb/MafiaIII.png",
        video: "video/MafiaIII.mp4",
        description: "As a tools engineering intern, I developed a scriptable soak testing system in Lua to automate long-running game sessions and collect performance data. I also created an ImageMagick-based plugin used by the art pipeline to convert to and from DDS textures. My work supported QA, technical artists, and engineers by improving automation and asset workflows.",
        tech: ["C++", "Lua"]
      }
    ]
  },

  {
    dates:    "Fall 2016 — Spring 2017",
    title:    "M.S. Computer Science",
    subtitle: "University of Southern California",
    logo:     "logo/USC.png",
    projects: [
      {
        name:  "Tiny Bob",
        thumb: "thumb/TinyBob.png",
        video: "video/TinyBob.mp4",
        description: "In my Networked Games class, I collaborated with two teammates to develop 'Tiny Bob,' a multiplayer platformer built in Unreal Engine. I implemented character movement and designed power-ups.",
        tech: ["Unreal Engine 4", "C++", "Blueprint"]
      },
      {
        name:  "Snail Engine",
        thumb: "thumb/SnailEngine.png",
        video: "video/SnailEngine.mp4",
        description: "This experimental project utilizes Three.js for graphics, Oimo.js for physics, and Geckos.io for WebSockets to develop a modular game engine. The goal is to support real-time multiplayer gameplay on the web.",
        tech: ["Javascript", "three.js", "Oimo.js", "Geckos.io"]
      },
      {
        name:  "Axe Throw VR",
        thumb: "thumb/AxeThrowVR.png",
        video: "video/AxeThrowVR.mp4",
        description: "In my Mobile Games class, my teammates and I developed Axe Throw: VR. I was responsible for implementing the axe-throwing mechanics and enabling local co-op multiplayer functionality via Bluetooth.",
        tech: ["Unity", "C#", "Google Cardboard"]
      }
    ]
  },

  {
    dates:    "Spring 2013 — Spring 2016",
    title:    "B.S. Computer Science (Games)",
    subtitle: "University of Southern California",
    logo:     "logo/USC.png",
    projects: [
      {
        name:  "Gear Frontier",
        thumb: "thumb/GearFrontier.png",
        video: "video/GearFrontier.mp4",
        description: "For my undergraduate capstone project, I collaborated with a talented team to develop 'Gear Frontier,' a real-time multiplayer action racing shooter.",
        tech: ["Unity", "C#"]
      },
      {
        name:  "RGB",
        thumb: "thumb/RGB.png",
        video: "video/RGB.mp4",
        description: "In a college game design class, I teamed up with another programmer and a composer to create 'RGB,' a co-op puzzle game focused on painting the environment.",
        tech: ["Unity", "C#"]
      },
      {
        name:  "Lyvinia",
        thumb: "thumb/Lyvinia.png",
        video: "video/Lyvinia.mp4",
        description: "In a collaborative college game design project, I teamed up with an artist and a composer to bring Lyvinia to life - a captivating top-down RPG. As the programmer, I developed engaging combat mechanics, immersive exploration features, dynamic cut-scenes, and a whimsical magic hat element.",
        tech: ["GameMaker", "GML"]
      },
      {
        name:  "Sokoban",
        thumb: "thumb/Sokoban.png",
        game: "game/sokoban/index.html",
        description: "I crafted a Sokoban clone using JavaScript, recreating the classic puzzle game's challenging box-pushing mechanics. I added a level selection menu, enabling players to choose from various puzzles, and implemented an undo functionality to allow easy correction of mistakes.",
        tech: ["Javascript"]
      },
      {
        name:  "Battle Ship",
        thumb: "thumb/BattleShip.png",
        video: "video/BattleShip.mp4",
        description: "I developed a networked Battleship game that enables players to compete against each other in real-time over a local network.",
        tech: ["Java", "Swing"]
      },
      {
        name:  "Minesweeper",
        thumb: "thumb/Minesweeper.png",
        video: "video/Minesweeper.mp4",
        description: "I recreated a Java-based Minesweeper game featuring three distinct difficulty modes: Beginner, Intermediate, and Advanced. Each mode offers a unique grid size and number of mines, providing varied challenges for players of all skill levels.",
        tech: ["Java", "Swing"]
      }
    ]
  }

];

const container = document.getElementById('timeline');

timeline.forEach(section => {
  const sec = document.createElement('div');
  sec.className = 'timeline-section';

  const thumbsHTML = section.projects.map(p => {
    const data = JSON.stringify(p).replace(/'/g, '&#39;');
    return `
      <div class="project-thumb"
           data-project='${data}'
           tabindex="0"
           role="button"
           aria-label="View ${p.name}">
        <img src="${p.thumb}" alt="${p.name}" loading="lazy">
        <div class="thumb-label">${p.name}</div>
      </div>`;
  }).join('');

  sec.innerHTML = `
    <img class="timeline-logo" src="${section.logo}" alt="${section.subtitle} logo">
    <div class="timeline-meta">
      <div class="timeline-dates">${section.dates}</div>
      <div class="timeline-title">${section.title}</div>
      <div class="timeline-subtitle">${section.subtitle}</div>
    </div>
    <div class="projects">${thumbsHTML}</div>`;

  container.appendChild(sec);
});

const overlay      = document.getElementById('overlay');
const modalTitleEl = document.getElementById('modal-title');
const modalVideo   = document.getElementById('modal-video');
const modalDesc    = document.getElementById('modal-description');
const modalTech    = document.getElementById('modal-tech');

function openModal(project) {
  modalTitleEl.textContent = project.name;
  modalDesc.textContent    = project.description;
  modalTech.innerHTML      = project.tech.map(t => `<li>${t}</li>`).join('');

  if (project.game) {
    modalVideo.style.display = 'block';
    modalVideo.innerHTML = `<iframe src="${project.game}" allowfullscreen></iframe>`;
  } else if (project.video) {
    modalVideo.style.display = 'block';
    modalVideo.innerHTML = `<video src="${project.video}" controls autoplay type="video/mp4"></video>`;
  } else {
    modalVideo.style.display = 'none';
    modalVideo.innerHTML = '';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  modalVideo.innerHTML = '';
}

document.addEventListener('click', e => {
  const thumb = e.target.closest('.project-thumb');
  if (thumb) openModal(JSON.parse(thumb.dataset.project));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    const thumb = e.target.closest('.project-thumb');
    if (thumb) { e.preventDefault(); openModal(JSON.parse(thumb.dataset.project)); }
  }
  if (e.key === 'Escape') closeModal();
});

document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
