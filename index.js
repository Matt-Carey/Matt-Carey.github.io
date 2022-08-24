
function sidebar_open() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
 
function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function click_project(project, display) {
  document.getElementById("modal").style.display = "block";
  const video = document.getElementById('project_video');
  const iFrame = document.getElementById('project_iFrame');
  
  video.style.display = "none";
  iFrame.style.display = "none";
  
  if(display == 'video') {
	  video.style.display = "inline";
	  const sources = video.getElementsByTagName('source');
	  sources[0].src = "/media/video/" + project + ".mp4";
	  video.load();
  } else if(display == 'iFrame') {
	  iFrame.style.display = "inline";
	  iFrame.src = "/" + project + "/" + "index.html";
  }
  
  const siteMap = new Map();
  siteMap.set('RogueCompany', 'https://www.roguecompany.com/');
  siteMap.set('RealmRoyale', 'https://www.realmroyale.com/');
  siteMap.set('MafiaIII', 'https://mafiagame.com/mafia-3/');
  
  if(siteMap.get(project) != undefined) {
	document.getElementById("project_site").setAttribute("href", siteMap.get(project));
	document.getElementById("project_link").style.display = "block";
  } else {
	document.getElementById("project_site").setAttribute("href", "#");
	document.getElementById("project_link").style.display = "none";
  }
  
  const techList = ['Cpp', 'UnrealEngine', 'UnrealEngine3', 'Unity', 'CSharp', 'Lua', 'Java', 'JavaScript', 'ThreeJS', 'OimoJS', 'GeckosIO', 'GoogleCardboard', 'GameMaker'];
  
  const techMap = new Map();
  techMap.set('RogueCompany', ['Cpp', 'UnrealEngine']);
  techMap.set('RealmRoyale', ['Cpp', 'UnrealEngine3']);
  techMap.set('HandOfTheGods', ['Cpp', 'UnrealEngine']);
  techMap.set('MafiaIII', ['Cpp', 'Lua']);
  techMap.set('SnailEngine',['JavaScript', 'ThreeJS', 'OimoJS', 'GeckosIO']);
  techMap.set('Sokoban',['JavaScript']);
  techMap.set('GearFrontier',['CSharp', 'Unity']);
  techMap.set('TinyBob',['Cpp', 'UnrealEngine']);
  techMap.set('RGB',['CSharp', 'Unity']);
  techMap.set('Lyvinia',['GameMaker']);
  techMap.set('AttackOfTrojans',['CSharp', 'Unity', 'GoogleCardboard']);
  techMap.set('BattleShip',['Java']);
  techMap.set('MineSweeper',['Java']);
  
  const titleMap = new Map();
  titleMap.set('RogueCompany', 'Rogue Company');
  titleMap.set('RealmRoyale', 'Realm Royale');
  titleMap.set('HandOfTheGods', 'Hand of The Gods');
  titleMap.set('MafiaIII', 'Mafia III');
  titleMap.set('SnailEngine', 'Snail Engine');
  titleMap.set('Sokoban', 'Sokoban');
  titleMap.set('GearFrontier', 'Gear Frontier');
  titleMap.set('TinyBob', 'Tiny Bob');
  titleMap.set('RGB', 'RGB');
  titleMap.set('Lyvinia', 'Lyvinia');
  titleMap.set('AttackOfTrojans', 'Attack of Trojans');
  titleMap.set('BattleShip', 'Battle Ship');
  titleMap.set('MineSweeper', 'Mine Sweeper');
  
  const descriptionMap = new Map();
  descriptionMap.set('RogueCompany', 'At Hi-Rez Studios, I worked on Rogue Company as a Senior Gameplay Programmer.');
  descriptionMap.set('RealmRoyale', 'At Hi-Rez Studios, I worked on Realm Royale as a Gameplay Programmer.');
  descriptionMap.set('HandOfTheGods', 'At Hi-Rez Studios, I worked on Hand of The Gods as an Associate Gameplay Programmer.');
  descriptionMap.set('MafiaIII', 'At 2K, I worked Mafia III as an intern on the Core Tech team.');
  descriptionMap.set('SnailEngine', 'An experimental project leveraging Three.js for graphics, Oimo.js for physics, and Geckos.io for WebSockets. My goal is to create a modular game engine that supports real-time multiplayer for the web.');
  descriptionMap.set('Sokoban', 'A Sokoban clone using assets from kenney.nl.');
  descriptionMap.set('GearFrontier', 'My undergrad capstone project was Gear Frontier. I worked with a great team to create a real-time multiplayer action racing shooter.');
  descriptionMap.set('TinyBob', 'In my Networked Games class, two teammates and I created the multiplayer platformer Tiny Bob.');
  descriptionMap.set('RGB', 'In one of my college game design classes, I worked with one other programmer and a composer to create RGB. This co-op puzzle game revolves around painting the world around you.');
  descriptionMap.set('Lyvinia', 'In one of my college game design classes, I worked with an artist and a composer to create Lyvinia. This top-down RPG involved combat, explorations, cut-scenes, and a magic hat.');
  descriptionMap.set('AttackOfTrojans', 'In my Mobile Games class, a few teammates and I created Attack of Trojans. I implemented the axe-throwing mechanics, and made it work over bluetooth for local co-op multiplayer.');
  descriptionMap.set('BattleShip', 'While I was a Teaching Assistant for CS201, I created a clone of BattleShip. This served as a sample solution for an assignment.');
  descriptionMap.set('MineSweeper', 'I was bored at home over winter break in college, so I made a small MineSweeper clone.');
  
  document.getElementById("project_title").innerHTML = "<b>" + titleMap.get(project) + "</b>";
  document.getElementById("project_description").innerHTML = "<b>" + descriptionMap.get(project) + "</b>";
  
  for(tech of techList) {
	  document.getElementById(tech+"_logo").style.display = "none";
  }
  for(tech of techMap.get(project)) {
	  document.getElementById(tech+"_logo").style.display = "inline";
  }
}

function pause_project_video() {
	const video = document.getElementById('project_video');
	video.pause();
}

function go_to_page(page) {
	const title = page.charAt(0).toUpperCase() + page.slice(1);
	document.getElementById("title").innerHTML = "<b>"+title+"</b>";
	
	for(toHide of ["projects", "about", "contact", "resume"]) {
		document.getElementById(toHide).style.display = "none";
		document.getElementById(toHide+"_link").classList.remove("w3-black");
		document.getElementById(toHide+"_link").classList.add("w3-hover-white");
		document.getElementById(toHide+"_link").classList.add("w3-button");
	}
	document.getElementById(page).style.display = "block";
	document.getElementById(page+"_link").classList.add("w3-black");
	document.getElementById(page+"_link").classList.remove("w3-hover-white");
	document.getElementById(page+"_link").classList.remove("w3-button");
}