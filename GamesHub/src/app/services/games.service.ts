import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { game } from '../models/game.model';
import { category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  catList:category[]=[]
  gameList:game[]=[]
  game: game | undefined;
  gamesCat: game[] | undefined;
  constructor() { 
    this.gameList=[
      {id:1 , name:'EA SPORTS™ FC24' , description:'For the first few hours of EA Sports FC 24, everything feels familiar gameplay-wise, for better and for worse. HyperMotion V and the PlayStation 5’s DualSense controller feedback return make matches realistic...' , price:69.99 , category:'sports' , imgUrl:'assets/storeImages/FC24.jpg' , inCart:false , Purchased:false},
      {id:2 , name:'The witcher 3 : Wild hunt' , description:'The climactic third game in the fantasy RPG series, The Witcher 3: Wild Hunt is a unique combination of a non-linear story and an open world -- a character-driven, non-linear story experience focused on player choice, tactical combat and a rich, living environment.' , price:69.99 , category:'action' , imgUrl:'assets/storeImages/TheWitcher3.jpeg' , inCart:false,Purchased:false},
      {id:3 , name:'Assassin creed: valhalla' , description:'Assassins Creed Valhalla is an action role-playing video game structured around several main story arcs and numerous optional side-missions, called "World Events". The player takes on the role of Eivor Varinsdottir, a Viking raider, as they lead their fellow Vikings against the Anglo-Saxon kingdoms.\nThis Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: Some Nudity or Sexual Content, Frequent Violence or Gore, General Mature Content' , price:69.99 , category:'action' , imgUrl:'assets/storeImages/assc.jpg' , inCart:false ,Purchased:false},
      {id:4 , name:'Need for Speed Heat' , description:'Need for Speed: Heat is a racing game set in an open world environment called Palm City, a fictionalised version of Miami, Florida, and its surrounding areas. However, the in-game map features diverse geography, including mountainous areas, dense forests, and open fields.' , price:69.99 , category:'racing' , imgUrl:'assets/storeImages/nfs.png', inCart:false , Purchased:false},
      {id:5 , name:'Spider man Remastered' , description:'Developed by Insomniac Games in collaboration with Marvel, and optimized for PC by Nixxes Software, Marvels Spider-Man Remastered on PC introduces an experienced Peter Parker who’s fighting big crime and iconic villains in Marvel’s New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of Marvel’s New York rests upon his shoulders.PC Optimized Graphics.Enjoy a variety of graphics quality options to tailor to a wide range of devices, unlocked framerates, and support for other technologies including performance boosting NVIDIA DLSS and image quality enhancing NVIDIA DLAA. Upscaling technology AMD FSR 2.0 is also supported.' , price:69.99 , category:'adventure' , imgUrl:'assets/storeImages/spiderman.jpg' , inCart:false ,Purchased:false},
      {id:6 , name:'Call of duty : Modern warfare 2' , description:'Welcome to the new era of Call of Duty®.  Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience. Infinity Ward brings fans state-of-the-art gameplay, with all-new gun handling, advanced AI system, a new Gunsmith and a suite of other gameplay and graphical innovations that elevate the franchise to new heights. Modern Warfare® II launches with a globe-trotting single-player campaign, immersive Multiplayer combat, and a narrative-driven, co-op Special Ops experience.You also get access to Call of Duty®: Warzone™, the all-new Battle Royale experience.' , price:69.99 , category:'shooting' , imgUrl:'assets/storeImages/callofduty.jpeg' , inCart:false ,Purchased:false},
      {id:7 , name:'Battlefield 2024' , description:'WELCOME TO 2042Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. With the help of a cutting-edge arsenal, you can engage in intense, immersive multiplayer battles. It’s all or nothing in Battlefield™ 2042 – Season 7: Turning Point Do whatever it takes in Season 7: Turning Point, which brings the battle for Earth’s most valuable resource to the Atacama Desert in Chile. There’s no holding back for your squad as you engage in lawless, suburban combat on the new map Haven and revisit a returning fan-favorite front: Stadium. Use destruction as your ally and give the enemy everything you’ve got with new gear like the SCZ-3 SMG, the Predator SRAW gadget, and the XFAD-4 Draugr aerial bomber*. Unlock 100 new tiers of Battle Pass content in a battle for ultimate power.Lead your team to victory in both large, all-out warfare and close-quarters combat on maps from the world of 2042 and classic Battlefield titles. Find your playstyle in class-based gameplay and take on several experiences, including elevated versions of Conquest and Breakthrough. Explore Battlefield Portal, a platform where players can discover, create, and share unexpected battles from Battlefields past and present.' , price:59.99 , category:'Shooting' , imgUrl:'assets/storeImages/battlefield.jpg' , inCart:false , Purchased:false},
      {id:8 , name:'Call of duty: Cold War' , description:'Black Ops Cold War, the direct sequel to Call of Duty®: Black Ops, will drop fans into the depths of the Cold War’s volatile geopolitical battle of the early 1980s. Nothing is ever as it seems in a gripping single-player Campaign, where players will come face-to-face with historical figures and hard truths, as they battle around the globe through iconic locales like East Berlin, Vietnam, Turkey, Soviet KGB headquarters and more.' , price:59.99 , category:'Shooting' , imgUrl:'assets/storeImages/callofdutyCD.jpg' , inCart:false ,Purchased:false},
      {id:9 , name:'Need for speed: payback' , description:'Set in the underworld of Fortune Valley, you and your crew were divided by betrayal and reunited by revenge to take down The House, a nefarious cartel that rules the city’s casinos, criminals and cops. In this corrupt gambler’s paradise, the stakes are high and The House always wins.Craft unique rides with deeper performance and visual customization than ever before. Push them to the limit when you narrowly escape the heat in epic cop battles. From insane heist missions to devastating car battles to jaw-dropping set piece moments, Need for Speed Payback delivers an edge-of-your-seat, adrenaline-fueled action-driving fantasy.' , price:29.99 , category:'racing' , imgUrl:'assets/storeImages/nfspb.jpg' , inCart:false ,Purchased:false},
      {id:10 , name:'Battlefield V' , description:'This is the ultimate Battlefield V experience. Enter mankind’s greatest conflict across land, air, and sea with all gameplay content unlocked from the get-go. Choose from the complete arsenal of weapons, vehicles, and gadgets, and immerse yourself in the hard-fought battles of World War II. Stand out on the battlefield with the complete roster of Elites and the best customization content of Year 1 and Year 2.' , price:49.99, category:'Shooting' , imgUrl:'assets/storeImages/Battlefieldv.jpeg' , inCart:false,Purchased:false},
      {id:11 , name:'Watch dogs' , description:'All it takes is the swipe of a finger. We connect with friends. We buy the latest gadgets and gear. We find out what’s happening in the world. But with that same simple swipe, we cast an increasingly expansive shadow. With each connection, we leave a digital trail that tracks our every move and milestone, our every like and dislike. And it’s not just people. Today, all major cities are networked. Urban infrastructures are monitored and controlled by complex operating systems.In Watch_Dogs, this system is called the Central Operating System (CTOS) – and it controls almost every piece of the city’s technology and holds key information on all of the city’s residents.You play as Aiden Pearce, a brilliant hacker and former thug, whose criminal past led to a violent family tragedy. Now on the hunt for those who hurt your family, you will be able to monitor and hack all who surround you by manipulating everything connected to the city’s network. Access omnipresent security cameras, download personal information to locate a target, control traffic lights and public transportation to stop the enemy…and more.' , price:15.99 , category:'adventure' , imgUrl:'assets/storeImages/watchdogs.png' , inCart:false ,Purchased:false},
      {id:12 , name:'Red dead Redemption 2' , description:' Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more.With all new graphical and technical enhancements for deeper immersion, Red Dead Redemption 2 for PC takes full advantage of the power of the PC to bring every corner of this massive, rich and detailed world to life including increased draw distances; higher quality global illumination and ambient occlusion for improved day and night lighting; improved reflections and deeper, higher resolution shadows at all distances; tessellated tree textures and improved grass and fur textures for added realism in every plant and animal. Red Dead Redemption 2 for PC also offers HDR support, the ability to run high-end display setups with 4K resolution and beyond, multi-monitor configurations, widescreen configurations, faster frame rates and more.' ,price:59.99 , category:'action' , imgUrl:'assets/storeImages/reddead.jpg' , inCart:false ,Purchased:false},
      {id:13 , name:'Resident Evil Village' , description:'jdsnksjngksbfg' , price:69.99 , category:'action' , imgUrl:'assets/storeImages/residentevil.jpeg' , inCart:false,Purchased:false},
      {id:14 , name:'dying light 2: stay human' , description:'jdsnksjngksbfg' ,price:69.99 , category:'action' , imgUrl:'assets/storeImages/dyinglight2.jpeg', inCart:false,Purchased:false},
      {id:15 , name:'Grand theft auto: V' , description:'jdsnksjngksbfg', price:69.99 , category:'adventure' , imgUrl:'assets/storeImages/gtav.jpg', inCart:false,Purchased:false},
      {id:16 , name:'EA SPORTS™ Madden NFL 25' , description:'Hit like you mean it with FieldSENSE™ powered by BOOM Tech. Experience how the new physics-informed dynamic tackling system unlocks realistic collisions & new gameplay animations on both sides of the ball. With a reengineered Hit Stick, perfect hit indicator, a new Ball Carrier Balance System, and physics-driven dives, trucks and stiff arms, timing has never been more important as each interaction reflects true-to-life motion and physical outcomes.', price:69.99 , category:'sports' , imgUrl:'assets/storeImages/MaddenNFL25.jpeg', inCart:false,Purchased:false}
    ]
    this.catList=[
      {id:1 , name:"All"},
      {id:2 , name:"action"},
      {id:3 , name:"racing"},
      {id:4 , name:"Shooting"},
      {id:5 , name:"adventure"},
      {id:5 , name:"sports"},
    ]
  }
 
 
  getAllGames(): game[]{
    return this.gameList;
  }
  
  getGameByID(gameID:number): game | null{
    let game = this.gameList.find(game => game.id == gameID)
    return game ? game:null
  }
   
  getGamesByCatName(gameCat:string):game[]{
     this.gamesCat = this.gameList.filter(game=>game.category == gameCat)
     return this.gamesCat
  }
  getGameArray(){
     this.gameList=[]
     return this.gameList;
  }

  getCatList(){
    return this.catList;
  }

  getCatListAll(){
    return this.gameList;
  }
}
