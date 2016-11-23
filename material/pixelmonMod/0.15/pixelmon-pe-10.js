/*
__________________________________________________
--------------------------------------------------
Pixelmon PE
Version: 0.1 [Beta 4] 
Edicion: Espanol
By:
XScripter0 = Funciones  - Renders
TaQuItO_988 = GUI
Wartave = GUI - Funciones
Gonza All = Renders
--------------------------------------------------
Advertencia:
Este mod es solo para su uso en el BlockLancher.
Se prohibe copiar su contenido o sus funciones.
Se prohibe editar de alguna forma este mod.
Se prohibe vender este mod, no somos responsables de ello.
Este mod no es de codigo abierto.
--------------------------------------------------
Si hay algun bug o error que reportar siguenos en 
Twitter y contactanos:
@XScripter0
@Wartave
@TaQuItO_988
--------------------------------------------------
CopyRight© 2016 - 2018
This mod is under the Pixelmon Mod CopyRight©
Este mod no tiene ningun tipo de relacion con Nintendo.
__________________________________________________
--------------------------------------------------
*/
//=========================
///# -- Pixelmon PE -- #///
///# - Version INDEV - #//
//=========================

var VenusaurRenderType = Renderer.createHumanoidRenderer();
var CharmeleonRenderType = Renderer.createHumanoidRenderer();
var CharizardRenderType = Renderer.createHumanoidRenderer();
var CharmanderRenderType = Renderer.createHumanoidRenderer();
var VaporeonRenderType = Renderer.createHumanoidRenderer();
var EmberonRenderType = Renderer.createHumanoidRenderer();
var JolteonRenderType = Renderer.createHumanoidRenderer();
var BulbasaurRenderType = Renderer.createHumanoidRenderer();
var IvysaurRenderType = Renderer.createHumanoidRenderer();
var OddishRenderType = Renderer.createHumanoidRenderer();
var GeodudeRenderType = Renderer.createHumanoidRenderer();
var GravelerRenderType = Renderer.createHumanoidRenderer();
var GolemRenderType = Renderer.createHumanoidRenderer();
var DratiniRenderType = Renderer.createHumanoidRenderer();
var DragonairRenderType = Renderer.createHumanoidRenderer();
var CaterpieRenderType = Renderer.createHumanoidRenderer();
var MagnemiteRenderType = Renderer.createHumanoidRenderer();
var SnorlaxRenderType = Renderer.createHumanoidRenderer();
var BellsproutRenderType = Renderer.createHumanoidRenderer();
var GyaradosRenderType = Renderer.createHumanoidRenderer();
var PikachuRenderType = Renderer.createHumanoidRenderer();
//var VenonatRenderType = Renderer.createHumanoidRenderer();
var VenomothRenderType = Renderer.createHumanoidRenderer();
var DiglettRenderType = Renderer.createHumanoidRenderer();
var DugtrioRenderType = Renderer.createHumanoidRenderer();
var LaprasRenderType = Renderer.createHumanoidRenderer();
var EeveeRenderType = Renderer.createHumanoidRenderer();
var RattataRenderType = Renderer.createHumanoidRenderer();
var SandshrewRenderType = Renderer.createHumanoidRenderer();
var TangelaRenderType = Renderer.createHumanoidRenderer();
var RaichuRenderType = Renderer.createHumanoidRenderer();
var VoltorbRenderType = Renderer.createHumanoidRenderer();
var ElectrodeRenderType = Renderer.createHumanoidRenderer();

var SquirtleRenderType=Renderer.createHumanoidRenderer();
var WartortleRenderType=Renderer.createHumanoidRenderer();
//var BlastoiseRenderType = Renderer.createHumanoidRenderer();
var WeepinbellRenderType=Renderer.createHumanoidRenderer();
var ButterfreeRenderType= Renderer.createHumanoidRenderer();
var GastlyRenderType = Renderer.createHumanoidRenderer();
var HitmonleeRenderType = Renderer.createHumanoidRenderer();
var WeedleRenderType = Renderer.createHumanoidRenderer();
var RaticateRenderType = Renderer.createHumanoidRenderer();
var ZubatRenderType = Renderer.createHumanoidRenderer();
var VileplumeRenderType = Renderer.createHumanoidRenderer();

//===============================
// Legendarios
//===============================
var MoltresRenderType = Renderer.createHumanoidRenderer();
var ArticunoRenderType = Renderer.createHumanoidRenderer();

var PokemonInventory={
captured1:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:null,pokeball:""},
captured2:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured3:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured4:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured5:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured6:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""}
};



PokemonBiomes={
normal:["Extreme Hills","Plains","Sunflower Plains","Forest","Flower Forest","Forest","Jungle","Jungle M","Jungle Edge","Jungle Edge M","Birch","Birch Forest","Birch Forest M","Birch Forest Hills M","Roofed Forest","Roofed Forest M","Mushroom Island","Mushroom Island Shore"],
grass:["Extreme Hills","Plains","Sunflower Plains","Forest","Flower Forest","Forest","Jungle","Jungle M","Jungle Edge","Jungle Edge M","Birch","Birch Forest","Birch Forest M","Birch Forest Hills M","Roofed Forest","Roofed Forest M","Mushroom Island","Mushroom Island Shore"],
water:["River","Beach","Ice Plains","Cold Beach","Cold Taiga","Cold Taiga Hills","Cold Taiga M","Frozen River","Tundra","Extreme Hills","Extreme Hills M","Taiga","Taiga M","Mega Taiga","Mega Spruce Taiga","Extreme Hills+","Extreme Hills+ M","Stone Beach","Frozen River","Ice Plains","Ice Plains Spikes","Cold Beach","Cold Taiga","Cold Caiga M (Mountainous)"],
fighting:["Desert","Desert M","Savanna","Savanna M","Savanna Plateau","Mesa","Mesa (Bryce)","Plateu", "Plateu M"],
fire:["Forest","Extreme Hills","Plains","Desert","Desert M","Savanna","Savanna M","Savanna Plateau","Mesa","Mesa (Bryce)","Plateu", "Plateu M"],
rock:["Desert","Desert M","Savanna","Savanna M","Savanna Plateau","Mesa","Mesa (Bryce)","Plateu", "Plateu M"],
gound:["Desert","Desert M","Savanna","Savanna M","Savanna Plateau","Mesa","Mesa (Bryce)","Plateu", "Plateu M"]
};

var PixelmonItem={
bonguries:{red:190,yellow:191,blue:192,black:193},
apricorn:{
red:{normal:3009, cooked:3015},
yellow:{normal:3010, cooked:3016},
blue:{normal:3011, cooked:3017},
purple:{normal:3012, cooked:3018},
pink:{normal:3013, cooked:3019},
black:{normal:3014, cooked:3020}
},
//Blocks
 healer:23,
//Items
 pokedex:3000,
//CraftItems
 pokeball_up: 504,
 ultraball_up: 505,
 masterball_up: 506,
 downball: 507,
	evolve:[
	{id:2000,texture:"rarecandy",name:"Rare Candy"},
	{id:2001,texture:"thunderstone",name:"Thunder Stone"},
	{id:2002,texture:"waterstone",name:"Water Stone"},
 	{id:2003,texture:"moonstone",name:"Moon Stone"},
	{id:2004,texture:"leafstone",name:"Leaft Stone"},
	{id:2005,texture:"firestone",name:"Fire Stone"},
	{id:2006,texture:"duskstone",name:"Dusk Stone"},
	{id:2007,texture:"dawstone",name:"Daw Stone"}
	],
	ball:[
	{id:2008,texture:"pokeball",name:"Poke Ball"},
	{id:2009,texture:"ub",name:"Ultra Ball"}, 
	{id:2010,texture:"greatball",name:"Great Ball"},
	{id:2011,texture:"mb",name:"Master Ball"}
	]
};
PixelmonItem.evolve.forEach(function(item,i){
	ModPE.setItem(item.id,item.texture,0,item.name,16);
	Item.setCategory(item.id,ItemCategory.TOOL);
	Player.addItemCreativeInv(item.id,1,0);
});
PixelmonItem.ball.forEach(function(item,i){
	Item.defineThrowable(item.id,item.texture,0,item.name,16);
	Item.setCategory(item.id,ItemCategory.TOOL);
	Player.addItemCreativeInv(item.id,1,0);
});

	
//ModPE.setItem(PokedexId,"pokedex",0, LangText("",Lang.get("ItemsName.pokedex")));



//CraftItems
//Pokeballs Parts
//ModPE.setItem(pokeball_up,"pokeball_up",0,LangText("",Lang.get("ItemsName.pokeball.disc")));
//ModPE.setItem(ultraball_up,"ultraball_up",0,LangText("",Lang.get("ItemsName.ultraball.disc")));
//ModPE.setItem(masterball_up,"masterball_up",0,LangText("",Lang.get("ItemsName.masterball.disc")));	
//ModPE.setItem(PixelmonItem.downball,"downball",0,"Disco de hierro");	


//Bonguris
//ModPE.setItem(PixelmonItem.apricorn.red.normal,"red_bongurie",0,"Apricorn Rojo");
//ModPE.setItem(PixelmonItem.apricorn.purple.normal,"purple_bongurie",0,"Apricorn Purpura");
//ModPE.setItem(PixelmonItem.apricorn.blue.normal,"blue_bongurie",0,"Apricorn Azul");
//ModPE.setItem(PixelmonItem.apricorn.yellow.normal,"yellow_bongurie",0,"Apricorn Amarillo");
//ModPE.setItem(PixelmonItem.apricorn.black.normal,"black_bongurie",0,"Apricorn Negro");
//ModPE.setItem(PixelmonItem.apricorn.pink.normal,"pink_bongurie",0,"Apricorn Rosa");

			


function customThrowableHitEntityHook(projectile, itemId, target){
	var Sym = Entity.getNameTag(target);
	Sym = Sym.substring(0,3);
	if(Sym!="[♥]"){
	if(Entity.getNameTag(target)>""){
		switch(itemId){
			case PixelmonItem.ball[0].id: //pekebola
			preventDefault();
			UiThread(function(){
			var extract=JSON.parse(Entity.getExtraData(target,"PixelmonPE.Pokemon")); 
			UiThread(function(){
				if(PokemonSelector.showed===true){
					PokemonSelector.window.dismiss();
					PokemonSelector.showed=false;
				}
			});
			CatchPokemon(extract,Entity.getHealth(target),OnlyLevel(Entity.getNameTag(target),OnlyName(Entity.getNameTag(target))),"Pokeball.base");
			Entity.remove(target);
			});
			break;
			case PixelmonItem.ball[1].id: //pekebola
			preventDefault();
			UiThread(function(){
				var extract=JSON.parse(Entity.getExtraData(target,"PixelmonPE.Pokemon")); 
				UiThread(function(){
					if(PokemonSelector.showed===true){
						PokemonSelector.window.dismiss();
						PokemonSelector.showed=false;
					}
				});
				CatchPokemon(extract,Entity.getHealth(target),OnlyLevel(Entity.getNameTag(target),OnlyName(Entity.getNameTag(target))),"Pokeball.ultra");
				Entity.remove(target);
			});
			break;		
			case PixelmonItem.ball[2].id: //great
			preventDefault();
			UiThread(function(){
				var extract=JSON.parse(Entity.getExtraData(target,"PixelmonPE.Pokemon")); 
				UiThread(function(){
					if(PokemonSelector.showed===true){
						PokemonSelector.window.dismiss();
						PokemonSelector.showed=false;
					}
				});
				CatchPokemon(extract,Entity.getHealth(target),OnlyLevel(Entity.getNameTag(target),OnlyName(Entity.getNameTag(target))),"Pokeball.great");
				Entity.remove(target);
			});			
			break;
			case PixelmonItem.ball[3].id: //great
			preventDefault();
			UiThread(function(){
				var extract=JSON.parse(Entity.getExtraData(target,"PixelmonPE.Pokemon")); 
				UiThread(function(){
					if(PokemonSelector.showed===true){
						PokemonSelector.window.dismiss();
						PokemonSelector.showed=false;
					}
				});
			CatchPokemon(extract,Entity.getHealth(target),OnlyLevel(Entity.getNameTag(target),OnlyName(Entity.getNameTag(target))),"Pokeball.master");
			Entity.remove(target);
			});			
			break;
		}
	}
	}else{
		var x=Entity.getX(target);
		var y=Entity.getY(target);
		var z=Entity.getZ(target);
		switch(itemId){
			case PixelmonItem.ball[0].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[0].id,1,0);break;//pokebola
			case PixelmonItem.ball[1].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[1].id,1,0);break;//ultra
			case PixelmonItem.ball[2].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[2].id,1,0);break;//great
			case PixelmonItem.ball[3].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[3].id,1,0);break;//master
		}		
	}
}


function customThrowableHitBlockHook(projectile, itemId, x, y, z, side){
		switch(itemId){
			case PixelmonItem.ball[0].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[0].id,1,0);break;//pokebola
			case PixelmonItem.ball[1].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[1].id,1,0);break;//ultra
			case PixelmonItem.ball[2].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[2].id,1,0);break;//great
			case PixelmonItem.ball[3].id:Level.dropItem(x,y+1,z,0,PixelmonItem.ball[3].id,1,0);break;//master
		}	
}








var Pokeball = {
	base:{
		name:"pokeball.base.name",
		icon:"items-opaque/pokeball_0.png",
		image:"gui/pokemon_selector/base.png",
		catchRate:1.0
	},
	great:{
		name:"pokeball.great.name",
		icon:"items-opaque/pokeball_1.png",
		image:"gui/pokemon_selector/great.png",
		catchRate:1.5
	},
	ultra:{
		name:"pokeball.ultra.name",
		icon:"items-opaque/pokeball_1.png",
		image:"gui/pokemon_selector/ultra.png",
		catchRate:1.5
	},
	master:{
		name:"pokeball.master.name",
		icon:"items-opaque/pokeball_1.png",
		image:"gui/pokemon_selector/master.png",
		catchRate:1.5
	}
};



var Pokemon={
	Bulbasaur:{
		name:"Bulbasaur",
        description:"pokemon.bulbasaur.description",
        type:["PokemonType.grass","PokemonType.poison"],
        attacks:[null,null,null,null],
		biomes:["Plains","Flower Forest","Forest","Forest Hills","Roofed Forest","Sunflower Plains"],
		level:[5,14],
        evolution:"Pokemon.Ivysaur",
		levelevolve:16,
		evolutionItem:PixelmonItem.evolve[0].id,
		virtue:["PokemonVirtue.fast"],
        skin:"mob/1Bulbasaur1.png",
        renderType:"BulbasaurRenderType.renderType",
        sprite:"sprites/001.png"		
	},
	Ivysaur:{
		name:"Ivysaur",
        description:"pokemon.ivysaur.description",
        type:["PokemonType.grass","PokemonType.poison"],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"Pokemon.Venusaur",
		levelevolve:32,
		evolutionItem:PixelmonItem.evolve[0].id,
		virtue:["PokemonVirtue.fast"],
        skin:"mob/1Ivysaur1.png",
        renderType:"IvysaurRenderType.renderType",
        sprite:"sprites/002.png"	
	},
	Venusaur:{
		name:"Venusaur",
        description:"pokemon.venusaur.description",
        type:["PokemonType.grass","PokemonType.poison"],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		levelevolve:null,
		evolutionItem:null,
		virtue:["PokemonVirtue.heavy"],
        skin:"mob/1Venusaur1.png",
        renderType:"VenusaurRenderType.renderType",
        sprite:"sprites/003.png"
	},
	Charmander:{
		name:"Charmander",
        description:"pokemon.charmander.description",
        type:["PokemonType.fire",""],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		evolutionItem:"PixelmonItem.leafStone",
		virtue:["PokemonVirtue.fast"],
        skin:"mob/1Charmander1.png",
        renderType:"CharmanderRenderType.renderType",
        sprite:"sprites/004.png"
	},
	Charmeleon:{
		name:"Charmeleon",
        description:"pokemon.charmeleon.description",
        type:["PokemonType.fire",""],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		evolutionItem:"PixelmonItem.leafStone",
		virtue:["PokemonVirtue.fast"],
        skin:"mob/1Charmeleon1.png",
        renderType:"CharmeleonRenderType.renderType",
        sprite:"sprites/005.png"		
	},
	Charizard:{
		name:"Charizard",
        description:"pokemon.charizard.description",
        type:["PokemonType.fire","PokemonType.flight"],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		evolutionItem:"PixelmonItem.leafStone",
		virtue:["PokemonVirtue.heavy"],
        skin:"mob/1Charizard1.png",
        renderType:"CharizardRenderType.renderType",
        sprite:"sprites/006.png"	
		},
	 Squirtle:{
		name:"Squirtle",
        description:"pokemon.squirtle.description",
        type:["PokemonType.water",""],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		evolutionItem:"PixelmonItem.waterSoten",
		virtue:["PokemonVirtue.heavy"],
        skin:"mob/1Squirtle1.png",
        renderType:"SquirtleRenderType.renderType",
        sprite:"sprites/007.png"	
	},
	Wartortle:{
		name:"Wartortle",
        description:"pokemon.wartortle.description",
		type:["PokemonType.water",""],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		evolutionItem:"PixelmonItem.waterStone",
		virtue:["PokemonVirtue.fast"],
        skin:"mob/1Wartortle1.png",
        renderType:"WartortleRenderType.renderType",
        sprite:"sprites/008.png"	
	},
	Blastoise:{
		name:"Blastoise",
        description:"pokemon.blastoise.description",
        type:["PokemonType.water",""],
        attacks:[null,null,null,null],
		biomes:["Plains","Forest"],
		level:[5,14],
        evolution:"",
		evolutionItem:"PixelmonItem.waterStone",
		virtue:["PokemonVirtue.heavy"],
        skin:"mob/1Blastoise1.png",
        renderType:"BlastoiseRenderType.renderType",
        sprite:"sprites/009.png"	
	}
};

var PokemonAttack={
    vineWhip:{
        name:"attack.lovergrow.name",
        description:"attack.overgrow.description",
        damage:0,
        type:"PokemonType.grass",
        range:[5,10],
        effect:function(victim){
			Entity.setHealth(victim,Entity.getHealth(victim)-this.damage);
        }
    },
    overgrow:{
        name:"at.overgrow.name ",
        description:"attack.overgrow.description",
        damage:0,
        range:[5,10],
        type:"PokemonType.grass",
        effect:function(victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-this.damage);    
		}        
    },
    GUAt:{
        name:"at.CGCB.name ",
        description:"attack.overgrow.description",
        damage:0,
        range:[5,10],
        type:"PokemonType.grass",
        effect:function(victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-this.damage);    
		}        
    },
    GUAbt:{
        name:"at.CG...CB.name ",
        description:"attack.overgrow.description",
        damage:0,
        range:[5,10],
        type:"PokemonType.grass",
        effect:function(victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-this.damage);    
		}        
    },	
    GUAu:{
        name:"agugu ",
        description:"attack.overgrow.description",
        damage:0,
        range:[10,20],
        type:"PokemonType.grass",
        effect:function(victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-this.damage);    
		}        
    }	
};

	
Player.SpawnPokemon=function(pokemon){
	if(PokemonInventory[pokemon].spawned==false){
		var p=((Entity.getPitch(Player.getEntity())+90)*Math.PI)/180;
		var y=((Entity.getYaw(Player.getEntity())+90)*Math.PI)/180;
		var xx=Math.sin(p)*Math.cos(y);
		var yy=Math.sin(p)*Math.sin(y);
		var zz=Math.cos(p);
		var EntHP=PokemonInventory[pokemon].hp;
		var Ent=Level.spawnMob(Player.getX()+xx,Player.getY()+zz,Player.getZ()+yy,15,PokemonInventory[pokemon].skin);
		Entity.setHealth(Ent,PokemonInventory[pokemon].hp);
		Entity.setMaxHealth(Ent, PokemonInventory[pokemon].level*2.3);
		Entity.setRenderType(Ent,eval(PokemonInventory[pokemon].render));
		Entity.setNameTag(Ent,"[♥]["+PokemonInventory[pokemon].name+" | NVL:" +PokemonInventory[pokemon].level+"]");
		Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(PokemonInventory[pokemon]));				
		ModPE.showTipMessage(PokemonInventory[pokemon].name+" I choose you!");
		PokemonInventory[pokemon].spawned=true;
		PokemonInventory[pokemon].entity=Ent;
	}
}


var Pixelmon = {
	player:{
		playerspawnPokemon:function(id){
			if(PokemonInventory[id].spawned==false){
				var p=((Entity.getPitch(Player.getEntity())+90)*Math.PI)/180;
				var y=((Entity.getYaw(Player.getEntity())+90)*Math.PI)/180;
				var xx=Math.sin(p)*Math.cos(y);
				var yy=Math.sin(p)*Math.sin(y);
				var zz=Math.cos(p);
				var EntHP=PokemonInventory[id].hp;
				var Ent=Level.spawnMob(Player.getX()+xx,Player.getY()+zz,Player.getZ()+yy,15,PokemonInventory[id].skin);
				Entity.setHealth(Ent,PokemonInventory[id].hp);
				Entity.setMaxHealth(Ent, PokemonInventory[id].level*2.3);
				Entity.setRenderType(Ent,eval(PokemonInventory[id].render));
				Entity.setNameTag(Ent,"[♥]["+PokemonInventory[id].name+" | NVL:" +PokemonInventory[id].level+"]");
				Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(PokemonInventory[id]));				
				ModPE.showTipMessage(PokemonInventory[id].name+" I choose you!");
				PokemonInventory[id].spawned=true;
				PokemonInventory[id].entity=Ent;
			}
		}
	},
	save:function(JsonFilee,Data){
		File = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+ Level.getWorldDir()+"/"+JsonFilee);
		File.getParentFile().mkdirs();
		FileBR = new java.io.BufferedWriter(new java.io.FileWriter(File));
		FileBR.write(JSON.stringify(Data));
		FileBR.close();
	},
	load:function(pokedata){
		File = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+pokedata);
		if(!File.exists()){
			this.save(pokedata,PokemonInventory.captured1);
		}
		FileBR=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(File)));
		switch(pokedata){
			case "pkm_captured1.json":PokemonInventory.captured1=JSON.parse(FileBR.readLine());break;
			case "pkm_captured2.json":PokemonInventory.captured2=JSON.parse(FileBR.readLine());break;
			case "pkm_captured3.json":PokemonInventory.captured3=JSON.parse(FileBR.readLine());break;
			case "pkm_captured4.json":PokemonInventory.captured4=JSON.parse(FileBR.readLine());break;
			case "pkm_captured5.json":PokemonInventory.captured5=JSON.parse(FileBR.readLine());break;
			case "pkm_captured6.json":PokemonInventory.captured6=JSON.parse(FileBR.readLine());break;
		}
		FileBR.close();
	},
	pokemonWild:{
		spawn:function(x,y,z,biome,DatJson){
			var WildData={
				name:DatJson.name,
				description:DatJson.description,
				type:DatJson.type,
				attacks:DatJson.attacks,
				evolution:DatJson.evolution,
				evolutionItem:DatJson.evolutionItem,
				virtue:DatJson.virtue,
				skin:DatJson.skin,
				renderType:DatJson.renderType,
				sprite:DatJson.sprite
			};
			DatJson.biomes.forEach(function(pokemonbiome,i){
				if(biome==pokemonbiome){
					var Rnd = Math.floor(Math.random()*5);
					if(Rnd==4||Rnd==3||Rnd==2){
						var EntLevel = Math.floor(Math.random()*(DatJson.level[1]-DatJson.level[0]+1)+DatJson.level[0]);
						var EntHP = Math.floor(EntLevel*2.3);
						var Ent = Level.spawnMob(x,y+1,z,15,DatJson.skin);
						Entity.setHealth(Ent,EntHP);
						Entity.setMaxHealth(Ent,EntHP);
						Entity.setRenderType(Ent,eval(DatJson.renderType));
						Entity.setNameTag(Ent,"["+DatJson.name+" | NVL:" +EntLevel+"]");
						Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(WildData));
						Pixelmon.pokemonWild.lernNewAttack(Ent,EntLevel);
						
					}
				}			
			})		
		},
		lernNewAttack:function(entity,entityLvl){
			var compare=JSON.parse(Entity.getExtraData(entity,"PixelmonPE.Pokemon")); 
			for(var T in PokemonAttack){ 
				if(compare.type[0]==PokemonAttack[T].type){ 
					if(entityLvl>=PokemonAttack[T].range[0]&&entityLvl<=PokemonAttack[T].range[1]){ 
						if(compare.attacks[0]!=PokemonAttack[T]&&compare.attacks[1]!=PokemonAttack[T]&&compare.attacks[2]!=PokemonAttack[T]&&compare.attacks[3]!=PokemonAttack[T]){
							if(compare.attacks[0]==null){
								compare.attacks[0]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare));  
							}else if(compare.attacks[1]==null){
								compare.attacks[1]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[2]==null){
								compare.attacks[2]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[3]==null){
								compare.attacks[3]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else{
//MUESTRA LA GUI PARA REEMPLAZAR LOS ATAQUES    
       clientMessage(PokemonAttack[T].name); 
							}
						}else{
							continue;
						}
					} 
				}
				if(compare.type[1]==PokemonAttack[T].type){ 
					if(entityLvl>=PokemonAttack[T].range[0]&&entityLvl<=PokemonAttack[T].range[1]){ 
						if(compare.attacks[0]!=PokemonAttack[T]&&compare.attacks[1]!=PokemonAttack[T]&&compare.attacks[2]!=PokemonAttack[T]&&compare.attacks[3]!=PokemonAttack[T]){
							if(compare.attacks[0]==null){
								compare.attacks[0]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare));  
							}else if(compare.attacks[1]==null){
								compare.attacks[1]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[2]==null){
								compare.attacks[2]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[3]==null){
								compare.attacks[3]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else{
//MUESTRA LA GUI PARA REEMPLAZAR LOS ATAQUES    
    clientMessage(PokemonAttack[T].name);
							}
						}else{
							continue;
						}
					} 
				}
//<------FOR-------->
			}
		}    
	},
    EvolutionData:{
		Anim:[false,false,false,false,false,false],
		Pkm:[null,null,null,null,null,null],
		Level:[null,null,null,null,null,null],
		check:function(Name,PokemonData,nvl,item){
			clientMessage("cero"+PokemonData.Evl);
			if(PokemonData.Evl!=null){
				clientMessage("uno");
				if(item===PokemonData.itemevolve){
					clientMessage("DOS");
					if(nvl>=PokemonData.evolvelevel){
						clientMessage("TRES");
						UiThread(function(){
							if(PokemonSelector.showed===true){
								PokemonSelector.window.dismiss();
								PokemonSelector.showed=false;
							}
						});
						PixelmonButton.hide();
						Pixelmon.EvolutionData.Level[0]=nvl;
						Pixelmon.EvolutionData.Pkm[0]=PokemonData;
						Pixelmon.EvolutionData.Anim[0]=true;						
					}
				}
			}
		}
	},
	 apricornTree:{
		enabled: false,//Activa o desactiva la generacion de arboles en el mapa.
		timer:20,//Tiempo en que se ejecutara la funcion de animacion.
		treeData:{//Informacion de los arboles.
		red:{
			timer:1*20,
			bongurie:PixelmonItem.bonguries.red,
			biomes:["Extreme Hills","Plains","Sunflower Plains","Forest","Flower Forest","Forest","Jungle","Jungle M","Jungle Edge","Jungle Edge M","Birch","Birch Forest","Birch Forest M","Birch Forest Hills M","Roofed Forest","Roofed Forest M","Mushroom Island","Mushroom Island Shore"],
			give:PixelmonItem.apricorn.red.normal
		},
		yellow:{
			timer:1*20,
			bongurie:PixelmonItem.bonguries.yellow,
			biomes:["Desert","Desert M","Savanna","Savanna M","Savanna Plateau","Mesa","Mesa (Bryce)","Plateu", "Plateu M"],
			give:PixelmonItem.apricorn.yellow.normal
		},
		blue:{
			timer:1*20,
			bongurie:PixelmonItem.bonguries.blue,
			biomes:["River","Beach","Ice Plains","Cold Beach","Cold Taiga","Cold Taiga Hills","Cold Taiga M","Frozen River","Tundra","Extreme Hills","Extreme Hills M","Taiga","Taiga M","Mega Taiga","Mega Spruce Taiga","Extreme Hills+","Extreme Hills+ M","Stone Beach","Frozen River","Ice Plains","Ice Plains Spikes","Cold Beach","Cold Taiga","Cold Caiga M (Mountainous)"],
			give:PixelmonItem.apricorn.blue.normal
		},
		black:{
			timer:1*20,
			bongurie:PixelmonItem.bonguries.black,
			biomes:["Swamp","Swamp M","Swampland","Swanpland M","Mega Taiga",],
			give:PixelmonItem.apricorn.black.normal
		}
	},
	spawnTree: function(x,y,z,Biome){
		var T = 0;
		for(i=0; i<Pixelmon.apricornTree.treeData.red.biomes.length; i++){
			if(Pixelmon.apricornTree.treeData.red.biomes[i]==Biome){
				T = PixelmonItem.bonguries.red;
			}
		}
		for(e=0; e<Pixelmon.apricornTree.treeData.yellow.biomes.length; e++){
			if(Pixelmon.apricornTree.treeData.yellow.biomes[e]==Biome){
				T = PixelmonItem.bonguries.yellow;
			}
		}
		for(o=0; o<Pixelmon.apricornTree.treeData.blue.biomes.length; o++){
			if(Pixelmon.apricornTree.treeData.blue.biomes[o]==Biome){
				T = PixelmonItem.bonguries.blue;
			}
		}
		for(u=0; u<Pixelmon.apricornTree.treeData.black.biomes.length; u++){
			if(Pixelmon.apricornTree.treeData.black.biomes[u]==Biome){
				T = PixelmonItem.bonguries.black;
			}
		}
		var Rnd = Math.floor(Math.random()*20);
			if(Rnd == 0||Rnd==10||Rnd==20){
				if(T==0){return;}
				setTile(x,y+1,z,Pixelmon.apricornTree.phases.phase4.id1);
				setTile(x,y+2,z,Pixelmon.apricornTree.phases.phase4.id2);
				setTile(x,y+3,z,T);
			}
	},
	
	//Aloja los datos de los arboles generados en el mapa.
	list:[
	/*{
	x:0,tree.y:0,tree.z:0, //Posicion XYZ.
	bongurie:0, //Bonguri del arbol.
	phase:0, //Fase en la que se encuentra.
	timer:0 //Tiempo que tarda en aumentar de fase.
	}*/
	],
	//Contiene las id de los bloques en fases
	phases:{
		phase0:{id1:194},
		phase1:{id1:195,id2:196},
		phase2:{id1:197,id2:198},
		phase3:{id1:199,id2:200},
		phase4:{id1:201,id2:202}
	},
	//Crea los bloques de los Apricorns
	createBlocks: function(){
//stained_clay
Block.defineBlock( PixelmonItem.bonguries.red ,"Bongurie Rojo",[["wool",14]],1,false);
Block.setShape(PixelmonItem.bonguries.red ,6/16,24/16-3,6/16,10/16,28/16-3,10/16);

Block.defineBlock( PixelmonItem.bonguries.yellow ,"Bongurie Amarillo",[["wool",4]],1,false);
Block.setShape(PixelmonItem.bonguries.yellow ,6/16,24/16-3,6/16,10/16,28/16-3,10/16);

Block.defineBlock( PixelmonItem.bonguries.blue ,"Bongurie Azul",[["wool",11]],1,false);
Block.setShape(PixelmonItem.bonguries.blue ,6/16,24/16-3,6/16,10/16,28/16-3,10/16);

Block.defineBlock( PixelmonItem.bonguries.black ,"Bongurie Negro",[["wool",15]],1,false);
Block.setShape(PixelmonItem.bonguries.black ,6/16,24/16-3,6/16,10/16,28/16-3,10/16);


for(i=0; i<3; i++){
Block.setLightOpacity(PixelmonItem.bonguries[i] ,.000001);
Block.setDestroyTime(PixelmonItem.bonguries[i] , 1);
}

//Fase 0 de 4
Block.defineBlock(Pixelmon.apricornTree.phases.phase0.id1,"Tronco Fase 1",[["log2",2]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase0.id1,7/16,0/16-2,7/16,9/16,6/16-2,9/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase0.id1,.000001);

//Fase 1 de 4
Block.defineBlock(Pixelmon.apricornTree.phases.phase1.id1,"Arbol Fase 2",[["stained_clay",5]],1,false);
Block.setShape( Pixelmon.apricornTree.phases.phase1.id1, 1/16,5/16-1,1/16,15/16,8/16-1,15/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase1.id1 ,.000001);

Block.defineBlock(Pixelmon.apricornTree.phases.phase1.id2,"Tronco Fase 2",[["log2",2]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase1.id2,7/16,0/16-2,7/16,9/16,6/16-2,9/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase1.id2 ,.000001);

//Fase 2 de 4

Block.defineBlock(Pixelmon.apricornTree.phases.phase2.id1 ,"Arbol Fase 3",[["stained_clay",5]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase2.id1 ,1/16,5/16-1,1/16,15/16,14/16-1,15/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase2.id1 ,.000001);

Block.defineBlock(Pixelmon.apricornTree.phases.phase2.id2 ,"Tronco Fase 3",[["log2",2]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase2.id2 ,7/16,0/16-2,7/16,9/16,6/16-2,9/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase2.id2 ,.000001);

//Fase 3 de 4

Block.defineBlock(Pixelmon.apricornTree.phases.phase3.id1 ,"Arbol Fase 4",[["stained_clay",5]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase3.id1 ,1/16,5/16-1,1/16,15/16,24/16-1,15/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase3.id1 ,.000001);

Block.defineBlock(Pixelmon.apricornTree.phases.phase3.id2 ,"Tronco Fase 4",[["log2",2]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase3.id2 ,7/16,0/16-2,7/16,9/16,6/16-2,9/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase3.id2 ,.000001);

//Fase 4 de 4
Block.defineBlock(Pixelmon.apricornTree.phases.phase4.id1 ,"Arbol Fase 5",[["stained_clay",5]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase4.id1 ,1/16,5/16-1,1/16,15/16,24/16-1,15/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase4.id1 ,.000001);

Block.defineBlock(Pixelmon.apricornTree.phases.phase4.id2,"Tronco Fase 5",[["log2",2]],1,false);
Block.setShape(Pixelmon.apricornTree.phases.phase4.id2,7/16,0/16-2,7/16,9/16,6/16-2,9/16);
Block.setLightOpacity(Pixelmon.apricornTree.phases.phase4.id2,.000001);
	},
	
	//Guarda la lista Pixelmon.apricornTree
	saveList: function(){
	File = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+ Level.getWorldDir()+"/Pixelmon/data/Pixelmon.apricornTree.json");
	File.getParentFile().mkdirs();
	FileBR = new java.io.BufferedWriter(new java.io.FileWriter(File));
	FileBR.write(JSON.stringify(Pixelmon.apricornTree.list));
	FileBR.close();
	},
	//Carga tree.y retorna la lista Pixelmon.apricornTree
	loadList: function(){
	File = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+ Level.getWorldDir()+"/Pixelmon/data/Pixelmon.apricornTree.json");
	if(!File.exists()){
	 File.getParentFile().mkdirs();
	 Pixelmon.apricornTree.list=[];
	return;
	}
	FileBR=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(File)));
	Pixelmon.apricornTree.list = JSON.parse(FileBR.readLine());
	if(Pixelmon.apricornTree.list == null){
	 Pixelmon.apricornTree.list =[];
	}
	return JSON.parse(FileBR.readLine());
	FileBR.close();
	}
	}
	
};



function newLevel(){
	//PixelmonInventory.init();
Pixelmon.apricornTree.enabled = true;
Pixelmon.apricornTree.loadList();
Pixelmon.apricornTree.createBlocks();

	if(!java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/pkm_captured1.json").exists()){
		PixelmonButton.init();
		PokemonSelector.init();
		StarterScreen.init();
		StarterScreen.show();
	return;
	}else{
		Pixelmon.load("pkm_captured6.json");
		Pixelmon.load("pkm_captured5.json");
		Pixelmon.load("pkm_captured4.json");
		Pixelmon.load("pkm_captured3.json");
		Pixelmon.load("pkm_captured2.json");
		Pixelmon.load("pkm_captured1.json");
		PixelmonButton.init();
		PokemonSelector.init();
		PixelmonButton.show();
	}

}

function useItem(x,y,z,i,b,s){
	if(i==280){
		Pixelmon.spawn(x,y+1,z,(10)+1,"Plains",Pokemon.Ivysaur);
		Pixelmon.spawn(x,y+1,z,(10)+1,"Plains",Pokemon.Venusaur);
	}
	if(i==260){
		var Ent = Level.spawnMob(x,y+1,z,15,PokemonInventory[PokemonSelector.slotNumber].skin);
		Entity.setHealth(Ent,PokemonInventory[PokemonSelector.slotNumber].hp);
		Entity.setRenderType(Ent,eval(PokemonInventory[PokemonSelector.slotNumber].render));
		Entity.setNameTag(Ent,"[♥]["+PokemonInventory[PokemonSelector.slotNumber].name+" | NVL:" +PokemonInventory[PokemonSelector.slotNumber].level+"]");
		Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(PokemonInventory[PokemonSelector.slotNumber]));				
	}
}

function attackHook(a,victim){
	var item=Player.getCarriedItem();
	if(Entity.getNameTag(victim)>""){
		var Sym = Entity.getNameTag(victim);
		Sym = Sym.substring(0,3);
		if(Sym=="[♥]"){
			preventDefault();
		}
		if(item==PixelmonItem.evolve[0].id||item==PixelmonItem.evolve[1].id||item==PixelmonItem.evolve[2].id||item==PixelmonItem.evolve[3].id||item==PixelmonItem.evolve[4].id||item==PixelmonItem.evolve[5].id){
			var extract=JSON.parse(Entity.getExtraData(victim,"PixelmonPE.Pokemon")); 
			eval("var getEvolve="+extract.evolution);
			preventDefault();
			if(Sym=="[♥]"){
				
				if(item==PixelmonItem.evolve[0].id){
					var APName = OnlyName(Entity.getNameTag(victim));
					var PokesetLevel = OnlyLevel(Entity.getNameTag(victim),APName);				
					if(PokesetLevel < 100){PokesetLevel++;}				
					Entity.setNameTag(victim,"[♥][ "+OnlyName(Entity.getNameTag(victim))+" | NVL: "+PokesetLevel+"]");			
				}
				var PokesetLevel = OnlyLevel(Entity.getNameTag(victim),APName);	
				Pixelmon.EvolutionData.check(extract.name,{
					X:Entity.getX(victim),
					Y:Entity.getY(victim),
					Z:Entity.getZ(victim),
					Entities:victim,
					Render:Entity.getRenderType(victim),
					Datattack:extract,
					Evl:getEvolve,
					evolvelevel:Pokemon[OnlyName(Entity.getNameTag(victim))].levelevolve,
					itemevolve:Pokemon[OnlyName(Entity.getNameTag(victim))].evolutionItem,
					Tick:200
				},PokesetLevel,item);				 
			}
		}
	}
}


function leaveGame(){
Pixelmon.apricornTree.saveList();
}



function ReplaceAll(string,find,replaced){
	while(string.indexOf(find) != -1){
		string = string.replace(find, replaced);
	}
	return string;
}

//Obtener solo el nombre del NameTag del pokemon
function OnlyName(name){
var patron1 = ["[","NVL",":",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,"]","|","null","-","_","\n"," ","Â§c","♥"," "];
for (var i = 0; i < patron1.length; i++) {
name = ReplaceAll(name,patron1[i],"");
}
return name;
}

//Obtener solo el Level del NameTag del jugador
function OnlyLevel(lvl,pokemon){
var patron2 = ["[","]",":","|","NVL"," ","null","-","_","\n"," ","Â§c","♥"," ",pokemon];
for (var i = 0; i < patron2.length; i++) {
lvl = ReplaceAll(lvl,patron2[i],"");
}
return lvl;
}

function CatchPokemon(DatPokemon,HP,lvl,pokeball){
	try{
		for(var p in PokemonInventory){
			if(PokemonInventory[p].enabled==false){			
				PokemonInventory[p].name=DatPokemon.name;
				PokemonInventory[p].level=lvl;
				PokemonInventory[p].hp=HP;					
				PokemonInventory[p].attacks[0]=DatPokemon.attacks[0];
				PokemonInventory[p].attacks[1]=DatPokemon.attacks[1];
				PokemonInventory[p].attacks[2]=DatPokemon.attacks[2];
				PokemonInventory[p].attacks[3]=DatPokemon.attacks[3];				
				PokemonInventory[p].type[0]=DatPokemon.type[0];
				PokemonInventory[p].type[1]=DatPokemon.type[1];					
				PokemonInventory[p].render=DatPokemon.renderType;					
				PokemonInventory[p].skin=DatPokemon.skin;
				PokemonInventory[p].enabled=true;				
				PokemonInventory[p].spawned=false;
				PokemonInventory[p].evolution=DatPokemon.evolution;			
				PokemonInventory[p].sprite=DatPokemon.sprite;
				PokemonInventory[p].pokeball=pokeball;				
				Pixelmon.save("pkm_"+p+".json",PokemonInventory[p]);	
				PokemonSelector.init();
				for(var m=0;m<101;m++){
					if(m>=100){
						PokemonSelector.show();
					}
				}
				break;
			}
		}	
}catch(e){

}
}

function entityAddedHook(entity){
	if(Entity.getEntityTypeId(entity) == 10 || Entity.getEntityTypeId(entity) == 11 && Entity.getMobSkin(entity) == "mob/cow.png" || Entity.getEntityTypeId(entity) == 12 || Entity.getEntityTypeId(entity) == 13 || Entity.getEntityTypeId(entity) == 14 || Entity.getEntityTypeId(entity) == 16|| Entity.getEntityTypeId(entity) == 17|| Entity.getEntityTypeId(entity) == 19) {
		var entX = Entity.getX(entity);
		var entY = Entity.getY(entity);
		var entZ = Entity.getZ(entity);
		var entBiome = Level.getBiomeName(entX, entZ);
		var rndProcess = Math.floor(Math.random()*3);
		switch(rndProcess){
			case 0:
			Pixelmon.apricornTree.spawnTree(entX,entY,entZ,entBiome);
			break;		
			case 1:			
				Pixelmon.pokemonWild.spawn(entX,entY,entZ,entBiome,Pokemon[pickRandomProperty(Pokemon)]);
			break;
		}
	}
}

function pickRandomProperty(obj){
    var prop, len = 0, randomPos, pos = 0;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            len += 1;
        }
    }
    randomPos = Math.floor(Math.random() * len);
    for (prop in obj) {
        if(obj.hasOwnProperty(prop)){
            if (pos === randomPos){
                return prop;
            }
            pos += 1;
        }
    }       
}

function destroyBlock(x, y, z, side){
	var Itm = Math.floor(Math.random()*64);
if(getTile(x,y,z)==Pixelmon.apricornTree.phases.phase4.id1){
	switch(getTile(x,y+2,z)){
	case PixelmonItem.bonguries.red ://Rojo
		Level.dropItem(x,y,z,0,Itm,1,0);
		setTile(x,y+1,z,0);
		setTile(x,y+2,z,0);
	break;
	case PixelmonItem.bonguries.yellow ://Yellow
		Level.dropItem(x,y,z,0,Itm,1,0);
		setTile(x,y+1,z,0);
		setTile(x,y+2,z,0);
	break;	
	case PixelmonItem.bonguries.blue ://Blue
		Level.dropItem(x,y,z,0,Itm,1,0);
		setTile(x,y+1,z,0);
		setTile(x,y+2,z,0);
	break;
	case PixelmonItem.bonguries.black ://Black
		Level.dropItem(x,y,z,0,Itm,1,0);
		setTile(x,y+1,z,0);
		setTile(x,y+2,z,0);
	break;
	}
    Pixelmon.apricornTree.list.forEach(function(tree, i){
		if(x==tree.x&&y==tree.y&&z==tree.z){
		Pixelmon.apricornTree.list.slice(i,1);
		Pixelmon.apricornTree.saveList();
		}
	});

}
}



var PokemonSelector={
	slotNumber:"captured1",
		defineSlot:function(){
				this.Pokeball = null;
				this.Pokemon =null;
				var that = this;
				this.show=function(){
						var that = this;
						this.widget = CreateLayoutView(new android.widget.RelativeLayout(ctx),0,0,PokemonSelector.size,PokemonSelector.size);
						this.pokeball = CreateLayoutView(new android.widget.ImageView(ctx),0,0,PokemonSelector.size,PokemonSelector.size);this.pokeball.setRotation(-45);
						this.slotState = CreateLayoutView(new android.widget.ImageView(ctx),0,0,PokemonSelector.size,PokemonSelector.size);
						this.pokemon = CreateLayoutView(new android.widget.ImageView(ctx),PokemonSelector.size*0.05,PokemonSelector.size*0.05,PokemonSelector.size*0.9,PokemonSelector.size*0.9);
						this.widget.setClickable(true);
						this.widget.addView(this.slotState);
						this.widget.addView(this.pokeball);
						this.widget.addView(this.pokemon);
						return this.widget;
				};
				this.setPokeball=function(newPokeball){
						this.Pokeball = newPokeball;
						this.pokeball.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture(newPokeball.image)));
				};
				this.setPokemon = function(newPokemon){
						this.Pokemon=newPokemon;
						this.pokemon.setBackgroundDrawable(BitmapUtils.ultimateDrawable(newPokemon.sprite,0,4,32,28,PokemonSelector.size*0.8,PokemonSelector.size*0.8));
				};
				this.setSlotState = function(newState){
					switch(newState){
							case "selected":this.slotState.setBackgroundDrawable(Background.ring(PokemonSelector.size,30,android.graphics.Color.parseColor("#1BB5FF")));break;
							case "released":this.slotState.setBackgroundDrawable(null);break;
							case "selected_released":this.slotState.setBackgroundDrawable(Background.ring(PokemonSelector.size,30,android.graphics.Color.parseColor("#1BB5FF")));break;
							case "fainted":this.slotState.setBackgroundDrawable(Background.ring(PokemonSelector.size,30,android.graphics.Color.parseColor("#ff0000")));break;
					}
				};
				this.setAvailable = function(available){
						if(available===false)
								this.pokeball.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture("gui/pokemon_selector/base.png")));
						else{
								var cMatrix = new android.graphics.ColorMatrix();cMatrix.setSaturation(0);
								this.pokeball.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture("gui/pokemon_selector/base.png")));
								this.pokeball.getBackground().setColorFilter(new android.graphics.ColorMatrixColorFilter(cMatrix));
						}
				};
		},
		init:function(){
				this.size = Math.min(dp(22.5),ScreenHeight()/8);
				this.showAnimation = new android.view.animation.TranslateAnimation(this.size,0,0,0);
				this.showAnimation.setDuration(300);
				this.hideAnimation = new android.view.animation.TranslateAnimation(0,this.size,0,0);
				this.hideAnimation.setDuration(300);			
				this.layout = new android.widget.LinearLayout(ctx);	
				this.layout.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/pokemon_selector/dock.png",0,0,45,279,this.size,this.size*6.2));
				this.layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				this.layout.setPadding(0,this.size*0.1,0,this.size*0.1);
				this.widget = new android.widget.RelativeLayout(ctx);		
				this.widget.addView(this.layout);
				this.window = new android.widget.PopupWindow(this.widget,this.size,this.size*6.2);	
				this.slot=[];
				this.slot[1] = new this.defineSlot();this.layout.addView(this.slot[1].show());this.slot[1].setAvailable();this.slot[1].setSlotState("selected");
				this.slot[2] = new this.defineSlot();this.layout.addView(this.slot[2].show());this.slot[2].setAvailable();
				this.slot[3] = new this.defineSlot();this.layout.addView(this.slot[3].show());this.slot[3].setAvailable();
				this.slot[4] = new this.defineSlot();this.layout.addView(this.slot[4].show());this.slot[4].setAvailable();
				this.slot[5] = new this.defineSlot();this.layout.addView(this.slot[5].show());this.slot[5].setAvailable();
				this.slot[6] = new this.defineSlot();this.layout.addView(this.slot[6].show());this.slot[6].setAvailable();
				if(PokemonInventory.captured1.name!=""){this.slot[1].setPokemon(PokemonInventory.captured1);this.slot[1].setAvailable(false);this.slot[1].setPokeball(eval(PokemonInventory.captured1.pokeball));}
				if(PokemonInventory.captured2.name!=""){this.slot[2].setPokemon(PokemonInventory.captured2);this.slot[2].setAvailable(false);this.slot[2].setPokeball(eval(PokemonInventory.captured2.pokeball));}
				if(PokemonInventory.captured3.name!=""){this.slot[3].setPokemon(PokemonInventory.captured3);this.slot[3].setAvailable(false);this.slot[3].setPokeball(eval(PokemonInventory.captured3.pokeball));}
				if(PokemonInventory.captured4.name!=""){this.slot[4].setPokemon(PokemonInventory.captured4);this.slot[4].setAvailable(false);this.slot[4].setPokeball(eval(PokemonInventory.captured4.pokeball));}	
				if(PokemonInventory.captured5.name!=""){this.slot[5].setPokemon(PokemonInventory.captured5);this.slot[5].setAvailable(false);this.slot[5].setPokeball(eval(PokemonInventory.captured5.pokeball));}
				if(PokemonInventory.captured6.name!=""){this.slot[6].setPokemon(PokemonInventory.captured6);this.slot[6].setAvailable(false);this.slot[6].setPokeball(eval(PokemonInventory.captured6.pokeball));}	


				
				 AddClickFunction(this.slot[1].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber!=="captured1"){
								PokemonSelector.slotNumber="captured1";
								if(PokemonInventory.captured1.name!==""){
									SelectPokemon = 1;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddLongClickFunction(this.slot[1].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber==="captured1"){							
								if(PokemonInventory.captured1.name!==""&&PokemonInventory.captured1.hp!==0){								
									Player.SpawnPokemon("captured1");
									/*var Ent = Level.spawnMob(Player.getX(),Player.getY()+1,Player.getZ(),15,PokemonInventory[PokemonSelector.slotNumber].skin);
									Entity.setHealth(Ent,PokemonInventory[PokemonSelector.slotNumber].hp);
									Entity.setRenderType(Ent,eval(PokemonInventory[PokemonSelector.slotNumber].render));
									Entity.setNameTag(Ent,"[♥]["+PokemonInventory[PokemonSelector.slotNumber].name+" | NVL:" +PokemonInventory[PokemonSelector.slotNumber].level+"]");
									Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(PokemonInventory[PokemonSelector.slotNumber]));
									*/
								}
							}
						})
					});
					AddClickFunction(this.slot[2].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber!=="captured2"){
								PokemonSelector.slotNumber="captured2";
								if(PokemonInventory.captured2.name!==""){
						SelectPokemon = 2;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("selected");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("released");		
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[2].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber==="captured2"){						
								if(PokemonInventory.captured2.name!==""&&PokemonInventory.captured2.hp!=0){
									Pixelmon.player.spawnPokemon("captured2");
								}
							}
						})
					});
					AddClickFunction(this.slot[3].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber!=="captured3"){
								PokemonSelector.slotNumber="captured3";
								if(PokemonInventory.captured3.name!==""){
						SelectPokemon = 3;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("selected");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("released");		
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[3].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber==="captured3"){						
								if(PokemonInventory.captured3.name!==""&&PokemonInventory.captured3.hp!=0){
									Pixelmon.player.spawnPokemon("captured3");
								}
							}
						})
					});
					AddClickFunction(this.slot[4].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber!=="captured4"){
								PokemonSelector.slotNumber="captured4";
								if(PokemonInventory.captured4.name!==""){	
						SelectPokemon = 4;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("selected");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("released");	
								}
							}								
						})			
					});	
					AddLongClickFunction(this.slot[4].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber==="captured4"){						
								if(PokemonInventory.captured4.name!==""&&PokemonInventory.captured4.hp!=0){
									Pixelmon.player.spawnPokemon("captured4");
								}
							}
						})
					});
					AddClickFunction(this.slot[5].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber!=="captured5"){
								PokemonSelector.slotNumber="captured5";
								if(PokemonInventory.captured5.name!==""){	
						SelectPokemon = 5;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("selected");
						PokemonSelector.slot[6].setSlotState("released");			
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[5].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber==="captured5"){						
								if(PokemonInventory.captured5.name!==""&&PokemonInventory.captured5.hp!=0){
									Pixelmon.player.spawnPokemon("captured5");
								}
							}
						})
					});
					AddClickFunction(this.slot[6].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber!=="captured6"){
								PokemonSelector.slotNumber="captured6";
								if(PokemonInventory.captured6.name!==""){	
						SelectPokemon = 6;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("selected");		
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[6].pokemon,function(){
						UiThread(function(){
							if(PokemonSelector.slotNumber==="captured6"){						
								if(PokemonInventory.captured6.name!==""&&PokemonInventory.captured6.hp!=0){
									Pixelmon.player.spawnPokemon("captured6");
								}
							}
						})
					});
		},
		show:function(){
				UiThread(function(){
						if(PokemonSelector.showed===false){						
								PokemonSelector.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.CENTER,0,dp(-8));
								PokemonSelector.layout.startAnimation(PokemonSelector.showAnimation);
								new android.os.Handler().postDelayed(function(){PokemonSelector.showed=true;},300);
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(PokemonSelector.showed===true){
								PokemonSelector.layout.startAnimation(PokemonSelector.hideAnimation);						
								new android.os.Handler().postDelayed(function(){PokemonSelector.window.dismiss();PokemonSelector.showed=false;},300);
						}
				});
		},showed:false
};

var PixelmonInventory = {
		init:function(){
				this.widget = new android.widget.RelativeLayout(ctx);
				this.window = new android.widget.PopupWindow(this.widget,ScreenWidth(),ScreenHeight());
				this.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(144,0,0,0)));		
				this.body = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(35),dp(8),ScreenWidth()-dp(43),ScreenHeight()-dp(16));
				this.body.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",34,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),ScreenWidth()-dp(43),ScreenHeight()-dp(16)))
				
				this.exitTab = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(8),dp(8),dp(30),dp(30));
				this.exitTab.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",49,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),dp(30),dp(30)));
				this.exitTab.addView(ModPEGUI.imageButton(BitmapUtils.ultimateDrawable("gui/spritesheet.png",60,0,18,18,dp(19),dp(19)),BitmapUtils.ultimateDrawable("gui/spritesheet.png",78,0,18,18,dp(19),dp(19)),dp(5),dp(6),dp(19),dp(19),function(){PixelmonInventory.hide();}));
				
				this.inventoryTab = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(8),dp(41),dp(30),dp(30));
				this.inventoryTab.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",49,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),dp(30),dp(30)));
				this.inventoryTab.addView(ModPEGUI.imageButton(Background.itemIcon("pokeball",0,dp(20)),Background.itemIcon("pokeball",0),dp(5),dp(5),dp(20),dp(20)));
				
				this.missionsTab = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(8),dp(74),dp(30),dp(30));
				this.missionsTab.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",49,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),dp(30),dp(30)));
				this.missionsTab.addView(ModPEGUI.imageButton(Background.itemIcon("map_filled",0,dp(20)),Background.itemIcon("map_filled",0,dp(20)),dp(5),dp(5),dp(20),dp(20)));
				
				this.horizontalSlots = Math.floor((ScreenWidth()-dp(55))*0.66/dp(26));
				this.itemsDisplay = CreateLayoutView(new android.widget.ScrollView(ctx),dp(6),dp(6),(ScreenWidth()-dp(43))*0.66-dp(12),ScreenHeight()-dp(28));			
				this.itemsDisplay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.rgb(49,49,49)));		
				this.itemsDisplay.setPadding(((ScreenWidth()-dp(43))*0.66-dp(12)-this.horizontalSlots*dp(26))/2,dp(6),((ScreenWidth()-dp(43))*0.66-dp(12)-this.horizontalSlots*dp(26))/2,dp(6));		
				this.itemsDisplay.setOverScrollMode(android.view.View.OVER_SCROLL_NEVER);					
				this.itemsDisplay.setVerticalScrollBarEnabled(false);		
				this.slots_frame = new android.widget.RelativeLayout(ctx);
				for(let i=0;i<36;i++){
						var slot = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(26*(i%this.horizontalSlots)),dp(26*Math.floor(i/this.horizontalSlots)),dp(26),dp(26));
						slot.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/gui.png",200,46,16,16,dp(26),dp(26)));
						this.slots_frame.addView(slot);
				}
				this.itemsDisplay.addView(this.slots_frame);
				this.body.addView(this.itemsDisplay);		
				
				for(let i=0;i<12;i++){					
						this.slot = CreateLayoutView(new android.widget.ImageView(ctx),(ScreenWidth()-dp(43))*0.8-dp(17)+dp(22*(i%2)),ScreenHeight()/2-dp(73)+dp(22*Math.floor(i/2)),dp(20),dp(20));
						this.slot.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",0,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),dp(20),dp(20)));
						this.body.addView(this.slot);
				}
				
				this.widget.addView(this.missionsTab);
				this.widget.addView(this.body);
				this.widget.addView(this.exitTab);
				this.widget.addView(this.inventoryTab);
		},
		show:function(){
				UiThread(function(){
						if(PixelmonInventory.showed===false){
								PixelmonInventory.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER,0,0);
								PixelmonInventory.showed = true;
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(PixelmonInventory.showed===true){
								PixelmonInventory.window.dismiss();
								PixelmonInventory.showed = false;
						}
				});
		},showed:false
};


var StarterScreen = {
		createButton:function(x,y,sprite,name,action){
				var unpressed = Background.starterButton(sprite,"unpressed");//BitmapUtils.ultimateDrawable("gui/starter_screen/starter_buttons.png",0,0,144,56);
				var pressed = Background.starterButton(sprite,"pressed");//BitmapUtils.ultimateDrawable("gui/starter_screen/starter_buttons.png",0,56,144,56);
				var button = CreateLayoutView(new android.widget.Button(ctx),x,y,dp(72),dp(28));
				button.setBackgroundDrawable(unpressed);
				button.setGravity(android.view.Gravity.CENTER);
				button.setPadding(dp(16),dp(1),dp(2),0);		
				MinecraftText(button,name,false,dp(5.5));;
				button.setTextColor(android.graphics.Color.BLACK);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);view.setTextColor(android.graphics.Color.WHITE);break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>dp(72)||event.getY()>dp(28)){view.setBackgroundDrawable(unpressed);view.setTextColor(android.graphics.Color.BLACK);var current = true;}else if(!current){view.setTextColor(android.graphics.Color.WHITE);view.setBackgroundDrawable(pressed);}break;
										case android.view.MotionEvent.ACTION_UP:view.setTextColor(android.graphics.Color.BLACK);view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(dp(72))||event.getY()>dp(28))){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;
										case android.view.MotionEvent.ACTION_UP:view.setTextColor(android.graphics.Color.BLACK);view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(dp(72))||event.getY()>dp(28))){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;
								}return false;
						}
				}));return button;
		},
		init:function(){
				this.widget = new android.widget.RelativeLayout(ctx);
				this.window = new android.widget.PopupWindow(this.widget,ScreenWidth(),ScreenHeight());
				this.window.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture("gui/starter_screen/starter_background.png")));			
				this.message = CreateLayoutView(new android.widget.TextView(ctx),0,ScreenHeight()/4,ScreenWidth(),android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				this.message.setGravity(android.view.Gravity.CENTER);
				this.message.setPadding(dp(4),dp(1),dp(4),dp(1));
				this.message.setLineSpacing(dp(2),1);
				MinecraftText(this.message,"§fBienvenido al mundo de Pixelmon! Gracias por descargar el mod!\n§8Ahora, iniciemos con elegir a tu primer Pokemon!",true,dp(7));			
				this.starter1 = this.createButton(ScreenWidth()/2-dp(142),ScreenHeight()/2,"sprites/001.png","Bulbasaur",function(){
						PokemonSelector.slot[1].setAvailable(false);
						PokemonSelector.slot[1].setPokemon(Pokemon.Bulbasaur);
						PokemonInventory.captured1.name=Pokemon.Bulbasaur.name;	
						PokemonInventory.captured1.level=5;
						PokemonInventory.captured1.hp=20;
						PokemonInventory.captured1.exp=0;
						PokemonInventory.captured1.attacks=Pokemon.Bulbasaur.attacks;
						PokemonInventory.captured1.type=Pokemon.Bulbasaur.type;
						PokemonInventory.captured1.render=Pokemon.Bulbasaur.renderType;
						PokemonInventory.captured1.skin=Pokemon.Bulbasaur.skin;
						PokemonInventory.captured1.enabled=true;
						PokemonInventory.captured1.spawned=false;
						PokemonInventory.captured1.evolution=Pokemon.Bulbasaur.evolution;
						PokemonInventory.captured1.sprite=Pokemon.Bulbasaur.sprite;
						PokemonInventory.captured1.pokeball="Pokeball.base";
						StarterScreen.hide();
						PixelmonButton.show();
						Pixelmon.save("pkm_captured1.json",PokemonInventory.captured1);						
				});
				this.starter2 = this.createButton(ScreenWidth()/2-dp(32),ScreenHeight()/2,"sprites/007.png","Squirtle",function(){
						PokemonSelector.slot[1].setAvailable(false);
						PokemonSelector.slot[1].setPokemon(Pokemon.Squirtle);
						PokemonInventory.captured1.name=Pokemon.Squirtle.name;	
						PokemonInventory.captured1.level=5;
						PokemonInventory.captured1.hp=20;
						PokemonInventory.captured1.exp=0;
						PokemonInventory.captured1.attacks=Pokemon.Squirtle.attacks;
						PokemonInventory.captured1.type=Pokemon.Squirtle.type;
						PokemonInventory.captured1.render=Pokemon.Squirtle.renderType;
						PokemonInventory.captured1.skin=Pokemon.Squirtle.skin;
						PokemonInventory.captured1.enabled=true;
						PokemonInventory.captured1.spawned=false;
						PokemonInventory.captured1.evolution=Pokemon.Squirtle.evolution;
						PokemonInventory.captured1.sprite=Pokemon.Squirtle.sprite;
						PokemonInventory.captured1.pokeball="Pokeball.base";
						StarterScreen.hide();
						PixelmonButton.show();
						Pixelmon.save("pkm_captured1.json",PokemonInventory.captured1);						
				});
				this.starter3 = this.createButton(ScreenWidth()/2-dp(-70),ScreenHeight()/2,"sprites/004.png","Charmander",function(){
						PokemonSelector.slot[1].setAvailable(false);
						PokemonSelector.slot[1].setPokemon(Pokemon.Charmander);
						PokemonInventory.captured1.name=Pokemon.Charmander.name;	
						PokemonInventory.captured1.level=5;
						PokemonInventory.captured1.hp=20;
						PokemonInventory.captured1.exp=0;
						PokemonInventory.captured1.attacks=Pokemon.Charmander.attacks;
						PokemonInventory.captured1.type=Pokemon.Charmander.type;
						PokemonInventory.captured1.render=Pokemon.Charmander.renderType;
						PokemonInventory.captured1.skin=Pokemon.Charmander.skin;
						PokemonInventory.captured1.enabled=true;
						PokemonInventory.captured1.spawned=false;
						PokemonInventory.captured1.evolution=Pokemon.Charmander.evolution;
						PokemonInventory.captured1.sprite=Pokemon.Charmander.sprite;
						PokemonInventory.captured1.pokeball="Pokeball.base";
						StarterScreen.hide();
						PixelmonButton.show();
						Pixelmon.save("pkm_captured1.json",PokemonInventory.captured1);						
				});				
				this.message2 = CreateLayoutView(new android.widget.TextView(ctx),0,ScreenHeight()/4,ScreenWidth(),android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				this.message2.setGravity(android.view.Gravity.CENTER);
				this.message2.setPadding(dp(4),dp(1),dp(4),dp(1));
				this.message2.setLineSpacing(dp(2),1);
				MinecraftText(this.message2,"§fEste mod esta bajo los derechos de autor de Pixelmon Mod!",true,dp(7));			

				this.widget.addView(this.starter1);
				this.widget.addView(this.starter2);
				this.widget.addView(this.starter3);
				this.widget.addView(this.message);
		},
		show:function(){
				UiThread(function(){
						if(StarterScreen.showed===false){
								StarterScreen.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,0,dp(22));
								StarterScreen.showed = true;
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(StarterScreen.showed===true){
								StarterScreen.window.dismiss();
								StarterScreen.showed = false;
						}
				});
		},showed:false
};


var PixelmonButton = {
		init:function(){
				this.widget = ModPEGUI.minecraftButton("P",0,0,dp(20),dp(20),function(){
						if(PokemonSelector.showed===true&&PixelmonInventory.showed===false)
								PokemonSelector.hide();
						else if(PokemonSelector.showed===false&&PixelmonInventory.showed===false)
								PokemonSelector.show();
				});
				AddLongClickFunction(this.widget,function(){
						PixelmonInventory.show();
				});
				this.window = new android.widget.PopupWindow(this.widget,dp(20),dp(20));
		},
		show:function(){
				UiThread(function(){
						if(PixelmonButton.showed===false){
								PixelmonButton.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0)
								PixelmonButton.showed = true;
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(PixelmonButton.showed===true){
								PixelmonButton.window.dismiss();
								PixelmonButton.showed = false;
						}
				});
		},showed:false
};



function modTick(){
Pixelmon.apricornTree.timer = Pixelmon.apricornTree.timer - 1;
if(Pixelmon.apricornTree.timer==0){

Pixelmon.apricornTree.list.forEach(function(tree, i){
if(tree.timer>0){
	tree.timer = tree.timer - 1;
	if(tree.timer == 0){
var t = Math.floor(tree.timer/20);
//clientMessage("Arbol #"	+i+ "\n"+t+" segundos.\n Fase: "+tree.phase);
	 
	if(tree.phase==1){
	setTile(tree.x,tree.y+1,tree.z,Pixelmon.apricornTree.phases.phase1.id1);
	setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase2.id2);
	tree.phase = tree.phase + 1;
	switch(tree.bongurie){
	case PixelmonItem.apricorn.red.normal:
	tree.timer = Pixelmon.apricornTree.treeData.red.timer;
	break;
	 	case PixelmonItem.apricorn.yellow.normal:
	tree.timer = Pixelmon.apricornTree.treeData.yellow.timer;
	break;
	 	case PixelmonItem.apricorn.blue.normal:
	tree.timer = Pixelmon.apricornTree.treeData.blue.timer;
	break;
	 	case PixelmonItem.apricorn.black.normal:
	tree.timer = Pixelmon.apricornTree.treeData.black.timer;
	break;
	}
	
	}else if(tree.phase==2){
	setTile(tree.x,tree.y+1,tree.z,Pixelmon.apricornTree.phases.phase2.id1);
	setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase2.id2);
	tree.phase = tree.phase + 1;	
	 switch(tree.bongurie){
	case PixelmonItem.apricorn.red.normal:
	tree.timer = Pixelmon.apricornTree.treeData.red.timer;
	break;
	 	case PixelmonItem.apricorn.yellow.normal:
	tree.timer = Pixelmon.apricornTree.treeData.yellow.timer;
	break;
	 	case PixelmonItem.apricorn.blue.normal:
	tree.timer = Pixelmon.apricornTree.treeData.blue.timer;
	break;
	 	case PixelmonItem.apricorn.black.normal:
	tree.timer = Pixelmon.apricornTree.treeData.black.timer;
	break;
	}
	
	}else if(tree.phase==3){
	setTile(tree.x,tree.y+1,tree.z,Pixelmon.apricornTree.phases.phase3.id1);
    setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase3.id2);
	tree.phase = tree.phase + 1;	
	 switch(tree.bongurie){
	case PixelmonItem.apricorn.red.normal:
	tree.timer = Pixelmon.apricornTree.treeData.red.timer;
	break;
	 	case PixelmonItem.apricorn.yellow.normal:
	tree.timer = Pixelmon.apricornTree.treeData.yellow.timer;
	break;
	 	case PixelmonItem.apricorn.blue.normal:
	tree.timer = Pixelmon.apricornTree.treeData.blue.timer;
	break;
	 	case PixelmonItem.apricorn.black.normal:
	tree.timer = Pixelmon.apricornTree.treeData.black.timer;
	break;
	}
	}else if(tree.phase==4){
	switch(tree.bongurie){
	case PixelmonItem.apricorn.red.normal: 
	setTile(tree.x,tree.y+1,tree.z,Pixelmon.apricornTree.phases.phase4.id1);
    setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase4.id2);
	setTile(tree.x,tree.y+3,tree.z, PixelmonItem.bonguries.red );
	Pixelmon.apricornTree.list.slice(tree,1);
	break;
	case PixelmonItem.apricorn.yellow.normal:
	setTile(tree.x,tree.y+1,tree.z,Pixelmon.apricornTree.phases.phase4.id1);
    setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase4.id2);
	setTile(tree.x,tree.y+3,tree.z, PixelmonItem.bonguries.yellow );
	Pixelmon.apricornTree.list.slice(tree,1);
    break;
    case PixelmonItem.apricorn.blue.normal:
	setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase4.id1);
    setTile(tree.x,tree.y+3,tree.z,Pixelmon.apricornTree.phases.phase4.id2);
	setTile(tree.x,tree.y+4,tree.z, PixelmonItem.bonguries.blue );
	Pixelmon.apricornTree.list.slice(tree,1);
    break;
    case PixelmonItem.apricorn.black.normal:
 	setTile(tree.x,tree.y+1,tree.z,Pixelmon.apricornTree.phases.phase4.id1);
    setTile(tree.x,tree.y+2,tree.z,Pixelmon.apricornTree.phases.phase4.id2);
	setTile(tree.x,tree.y+3,tree.z, PixelmonItem.bonguries.black);
	Pixelmon.apricornTree.list.slice(tree,1);
    break;
	}
	}
Pixelmon.apricornTree.saveList();
}
}else{
Pixelmon.apricornTree.list.slice(tree,1);
Pixelmon.apricornTree.saveList();
}
});
Pixelmon.apricornTree.timer = 3*20;
}
	for(var i in Pixelmon.EvolutionData.Anim){
		if(Pixelmon.EvolutionData.Anim[i]==true){
			try{
			Level.addParticle(4,Pixelmon.EvolutionData.Pkm[i].X+Math.random()* 2-1,Pixelmon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, Pixelmon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,Pixelmon.EvolutionData.Pkm[i].X+Math.random()* 2-1,Pixelmon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, Pixelmon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,Pixelmon.EvolutionData.Pkm[i].X+Math.random()* 2-1,Pixelmon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, Pixelmon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,Pixelmon.EvolutionData.Pkm[i].X+Math.random()* 2-1,Pixelmon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, Pixelmon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,Pixelmon.EvolutionData.Pkm[i].X+Math.random()* 2-1,Pixelmon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, Pixelmon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,Pixelmon.EvolutionData.Pkm[i].X+Math.random()* 2-1,Pixelmon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, Pixelmon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);		
			Entity.setPosition(Pixelmon.EvolutionData.Pkm[i].Entities,Pixelmon.EvolutionData.Pkm[i].X,Pixelmon.EvolutionData.Pkm[i].Y,Pixelmon.EvolutionData.Pkm[i].Z);
			var skin=Math.floor((Math.random()*4)+1);
				switch(skin){
					case 1:
						Entity.setRenderType(Pixelmon.EvolutionData.Pkm[i].Entities,Pixelmon.EvolutionData.Pkm[i].Render);
						Entity.setMobSkin(Pixelmon.EvolutionData.Pkm[i].Entities,"mob/evolve.png");
					 
					break;
					case 2:
						Entity.setRenderType(Pixelmon.EvolutionData.Pkm[i].Entities,eval(Pixelmon.EvolutionData.Pkm[i].Evl.renderType));  
						Entity.setMobSkin(Pixelmon.EvolutionData.Pkm[i].Entities,"mob/evolve.png");
					break;
					case 3:
						Entity.setRenderType(Pixelmon.EvolutionData.Pkm[i].Entities,eval(Pixelmon.EvolutionData.Pkm[i].Evl.renderType));
						Entity.setMobSkin(Pixelmon.EvolutionData.Pkm[i].Entities,"mob/evolve.png");
					break;
					case 4:
						Entity.setRenderType(Pixelmon.EvolutionData.Pkm[i].Entities,Pixelmon.EvolutionData.Pkm[i].Render);
						Entity.setMobSkin(Pixelmon.EvolutionData.Pkm[i].Entities,"mob/evolve.png");
					break;
				}
			Entity.setVelX(Pixelmon.EvolutionData.Pkm[i].Entities,0);
			Entity.setVelZ(Pixelmon.EvolutionData.Pkm[i].Entities,0);
			
			Pixelmon.EvolutionData.Pkm[i].Tick--;
			if(Pixelmon.EvolutionData.Pkm[i].Tick<=0){					
				Pixelmon.EvolutionData.Pkm[i].Evl.attacks[0]=Pixelmon.EvolutionData.Pkm[i].Datattack.attacks[0];
				Pixelmon.EvolutionData.Pkm[i].Evl.attacks[1]=Pixelmon.EvolutionData.Pkm[i].Datattack.attacks[1];
				Pixelmon.EvolutionData.Pkm[i].Evl.attacks[2]=Pixelmon.EvolutionData.Pkm[i].Datattack.attacks[2];
				Pixelmon.EvolutionData.Pkm[i].Evl.attacks[3]=Pixelmon.EvolutionData.Pkm[i].Datattack.attacks[3];
				var Ent = Level.spawnMob(Pixelmon.EvolutionData.Pkm[i].X,Pixelmon.EvolutionData.Pkm[i].Y,Pixelmon.EvolutionData.Pkm[i].Z,15,Pixelmon.EvolutionData.Pkm[i].Evl.skin);
				EntLvl =Pixelmon.EvolutionData.Level[i];
				EntHP = Math.floor(EntLvl*2.3);
				Entity.setHealth(Ent,EntHP);
				Entity.setRenderType(Ent,eval(Pixelmon.EvolutionData.Pkm[i].Evl.renderType));
				Entity.setNameTag(Ent,"[♥]["+Pixelmon.EvolutionData.Pkm[i].Evl.name+" | NVL:" +EntLvl+"]");
				Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(Pixelmon.EvolutionData.Pkm[i].Evl));				
				Pixelmon.pokemonWild.lernNewAttack(Ent,EntLvl);	
			//	PokemonInventory[PokemonSelector.slotNumber].name=Pixelmon.EvolutionData.Pkm[i].Evl.name;	
				//PokemonInventory[PokemonSelector.slotNumber].entity=Ent;
				//PokemonInventory[PokemonSelector.slotNumber].level=EntLvl;
				//PokemonInventory[PokemonSelector.slotNumber].hp=EntHP;
				//PokemonInventory[PokemonSelector.slotNumber].exp=0;
				//PokemonInventory[PokemonSelector.slotNumber].attacks=Pixelmon.EvolutionData.Pkm[i].Evl.attacks;
				//PokemonInventory[PokemonSelector.slotNumber].type=Pixelmon.EvolutionData.Pkm[i].Evl.type;
				//PokemonInventory[PokemonSelector.slotNumber].render=Pixelmon.EvolutionData.Pkm[i].Evl.renderType;
				//PokemonInventory[PokemonSelector.slotNumber].skin=Pixelmon.EvolutionData.Pkm[i].Evl.skin;
				//PokemonInventory[PokemonSelector.slotNumber].enabled=true;
				//PokemonInventory[PokemonSelector.slotNumber].evolution=Pixelmon.EvolutionData.Pkm[i].Evl.evolution;
				//PokemonInventory[PokemonSelector.slotNumber].sprite=Pixelmon.EvolutionData.Pkm[i].Evl.sprite;		
				//Entity.remove(Pixelmon.EvolutionData.Pkm[i].Entities);
				Pixelmon.EvolutionData.Pkm[i]=null;
				Pixelmon.EvolutionData.Anim[i]=false;
				Pixelmon.EvolutionData.Level[i]=null;		
				//Pixelmon.save("pkm_"+PokemonSelector.slotNumber+".json",PokemonInventory[PokemonSelector.slotNumber]);
				PokemonSelector.init();
				for(var m=0;m<101;m++){
					if(m>=100){
						PokemonSelector.show();
						PixelmonButton.show();
					}
				}
			}
		}catch(e){
			clientMessage(e);
			
		}
		}
		
	}
}

///# GUI Utils #///
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var MinecraftFont = android.graphics.Typeface.createFromFile("/sdcard/games/com.mojang/minecraft.ttf");

//@Desno365's Immersive Mode Support
function ScreenWidth(){
		if(android.os.Build.VERSION.SDK_INT>=17){
				var uiFlags = ctx.getWindow().getDecorView().getSystemUiVisibility();
				if((uiFlags&android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)!==0){
						var metrics = new android.util.DisplayMetrics();
						ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
						var realWidth = metrics.widthPixels;
						var realHeight = metrics.heightPixels;
						if(realHeight>realWidth){
								var x = realHeight;
								realHeight = realWidth;
								realWidth = x;								
						}return realWidth;
				}else{
						return ctx.getScreenWidth();
				}
		}else{
				return ctx.getScreenWidth();
		}
}
function ScreenHeight(){
		if(android.os.Build.VERSION.SDK_INT>=17){
				var uiFlags = ctx.getWindow().getDecorView().getSystemUiVisibility();
				if((uiFlags&android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)!==0){
						var metrics = new android.util.DisplayMetrics();
						ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
						var realWidth = metrics.widthPixels;
						var realHeight = metrics.heightPixels;
						if(realHeight>realWidth){
								var x = realHeight;
								realHeight = realWidth;
								realWidth = x;								
						}return realHeight;
				}else{
						return ctx.getScreenHeight();
				}
		}else{
				return ctx.getScreenHeight();
		}
}
function UiThread(functionToRun){
		ctx.runOnUiThread(new java.lang.Runnable(){
				run:function(){
						try{
								functionToRun();
						}catch(e){clientMessage("Error: "+e);}
				}
		});
}
function AddTouchFunction(myView,pressAction,unpressAction){
		myView.setOnTouchListener(new android.view.View.OnTouchListener(){
				onTouch:function(v,event){
						switch(event.getAction()){
								case 0:pressAction();break;
								case 1:unpressAction();break;
						}return false;
				}
		});
}
function AddClickFunction(myView,clickAction){
		myView.setOnClickListener(new android.view.View.OnClickListener(){
				onClick:function(v){
						clickAction();
				}
		});
}
function AddLongClickFunction(myView,clickAction){
		myView.setOnLongClickListener(new android.view.View.OnLongClickListener(){
				onLongClick:function(v,t){
						clickAction();
						return true;
				}
		});
}
function MinecraftText(textView,text,shadow,textSize){
		var colors = [["\n","<br/>"],["§l","</b><b>"],["§m","</del><del>"],["§n","</ins><ins>"],["§o","</i><i>"],["§r","</font>"],["§0","</font><font color=#000000>"],["§1","</font><font color=#0000AA>"],["§2","</font><font color=#00AA00>"],["§3","</font><font color=#00AAAA>"],["§4","</font><font color=#AA0000>"],["§5","</font><font color=#AA00AA>"],["§6","</font><font color=#FFAA00>"],["§7","</font><font color=#AAAAAA>"],["§8","</font><font color=#555555>"],["§9","</font><font color=#5555FF>"],["§a","</font><font color=#55FF55>"],["§b","</font><font color=#55FFFF>"],["§c","</font><font color=#FF5555>"],["§d","</font><font color=#FF55FF>"],["§e","</font><font color=#FFFF55>"],["§f","</font><font color=#FFFFFF>"]];
		colors.forEach((e,i) => {text = text.split(e[0]).join(e[1]);});
		textSize = textSize||dp(8);
		textView.setText(android.text.Html.fromHtml(text));		
		textView.setTypeface(MinecraftFont);
		textView.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX,textSize);
		textView.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));
		textView.setLayerType(android.view.View.LAYER_TYPE_SOFTWARE,null);
		textView.setAllCaps(false);
		if(shadow===true)textView.setShadowLayer(0.00001,Math.round(dp(1)*(textSize/dp(8))),Math.round(dp(1)*(textSize/dp(8))),android.graphics.Color.DKGRAY);
}
function CreateLayoutView(widgetType,x,y,width,height){
		var LayoutWidget = widgetType;
		var LayoutParams = new android.widget.RelativeLayout.LayoutParams(width,height);
		LayoutParams.setMargins(x,y,0,0);
		LayoutWidget.setLayoutParams(LayoutParams);
		return LayoutWidget;
}
var BitmapUtils = {
		getDrawable:(bitmap) => new android.graphics.drawable.BitmapDrawable(bitmap),
		getFromTexture:(direction) => new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/"+direction)),
		getTrimmed:(bitmap,x,y,width,height)=>new android.graphics.Bitmap.createBitmap(bitmap,x,y,width,height),
		getScaled:(bitmap,scaleX,scaleY) => new android.graphics.Bitmap.createScaledBitmap(bitmap,scaleX,scaleY,false),
		ultimateDrawable:(direction,x,y,width,height,scaleX,scaleY)=>BitmapUtils.getDrawable(BitmapUtils.getScaled(BitmapUtils.getTrimmed(BitmapUtils.getFromTexture(direction),x,y,width,height),scaleX||dp(width),scaleY||dp(height))),
		//Affogatoman(@dfak0557)'s Method
		stretchImage:(bm,x,y,stretchWidth,stretchHeight,width,height) => {
				var blank = android.graphics.Bitmap.createBitmap(width,height,android.graphics.Bitmap.Config.ARGB_8888);
				var Bitmap = android.graphics.Bitmap;
				var part1 = Bitmap.createBitmap(bm,0,0,x,y);
				var part2 = Bitmap.createBitmap(bm,x,0,stretchWidth,y);
				var part3 = Bitmap.createBitmap(bm,x+stretchWidth,0,bm.getWidth()-x-stretchWidth,y);
				var part4 = Bitmap.createBitmap(bm,0,y,x,stretchHeight);
				var part5 = Bitmap.createBitmap(bm,x,y,stretchWidth,stretchHeight);
				var part6 = Bitmap.createBitmap(bm,x+stretchWidth,y,bm.getWidth()-x-stretchWidth,stretchHeight);
				var part7 = Bitmap.createBitmap(bm,0,y+stretchHeight,x,bm.getHeight()-y-stretchHeight);
				var part8 = Bitmap.createBitmap(bm,x,y+stretchHeight,stretchWidth,bm.getHeight()-y-stretchHeight);
				var part9 = Bitmap.createBitmap(bm,x+stretchWidth,y+stretchHeight,bm.getWidth()-x-stretchWidth,bm.getHeight()-y-stretchHeight);
				var canvas = new android.graphics.Canvas(blank);
				canvas.drawBitmap(part1,0,0,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part2,width-bm.getWidth()+stretchWidth,y,false),x,0,null);
				canvas.drawBitmap(part3,width-bm.getWidth()+stretchWidth+x,0,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part4,x,height-bm.getHeight()+stretchHeight,false),0,y,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part5,width-bm.getWidth()+stretchWidth,height-bm.getHeight()+stretchHeight,false),x,y,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part6,part3.getWidth(),height-bm.getHeight()+stretchHeight,false),width-bm.getWidth()+stretchWidth+x,y,null);
				canvas.drawBitmap(part7,0,height-bm.getHeight()+stretchHeight+y,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part8,width-bm.getWidth()+stretchWidth,part7.getHeight(),false),x,height-bm.getHeight()+stretchHeight+y,null);
				canvas.drawBitmap(part9,width-bm.getWidth()+stretchWidth+x,height-bm.getHeight()+stretchHeight+y,null);
				return new android.graphics.drawable.BitmapDrawable(blank);
		}
};
var Background = {
		itemIcon:function(name,data,size){
				eval("var meta = "+new java.lang.String(ModPE.getBytesFromTexturePack("images/items.meta"))+";");
				var metaMapped = meta.map(e=>e.name);	
				var items = BitmapUtils.getFromTexture("items-opaque.png");
				var uvs = meta[metaMapped.indexOf(name)].uvs[data];
				return BitmapUtils.ultimateDrawable("items-opaque.png",uvs[0]*uvs[4],uvs[1]*uvs[5],Math.ceil(uvs[2]*uvs[4]-uvs[0]*uvs[4]),Math.ceil(uvs[3]*uvs[5]-uvs[1]*uvs[5]),size||dp(16),size||dp(16));
		},
		dirtWall:function(){
				var background = BitmapUtils.getDrawable(this.getScaled(BitmapUtils.getFromTexture("gui/background.png"),dp(32),dp(32)));
				background.setTileModeXY(android.graphics.Shader.TileMode.REPEAT,android.graphics.Shader.TileMode.REPEAT);
				background.setColorFilter(android.graphics.Color.rgb(60,60,60),android.graphics.PorterDuff.Mode.MULTIPLY);
				return background;
		},
		contentRect:function(width,height){
				var blank = android.graphics.Bitmap.createBitmap(width,height,android.graphics.Bitmap.Config.ARGB_8888);		
				var canvas = new android.graphics.Canvas(blank);
				var paint = new android.graphics.Paint();		
				paint.setColor(android.graphics.Color.BLACK);
				canvas.drawRect(0,0,width,height,paint);		
				paint.setColor(android.graphics.Color.rgb(49,49,49));
				canvas.drawRect(dp(1),dp(1),width-dp(1),height-dp(1),paint);		
				return BitmapUtils.getDrawable(blank);
		},
		ring:function(size,width,color){
				var blank = android.graphics.Bitmap.createBitmap(size,size,android.graphics.Bitmap.Config.ARGB_8888);		
				var canvas = new android.graphics.Canvas(blank);
				var paint = new android.graphics.Paint();
				paint.setStyle(android.graphics.Paint.Style.STROKE);
				paint.setStrokeWidth(width);		
				paint.setColor(color);			
				canvas.drawCircle(size/2,size/2,size/2-width/2,paint);
				return BitmapUtils.getDrawable(blank);
		},
		slider:function(width,sections){
				var blank = android.graphics.Bitmap.createBitmap(width,dp(17),android.graphics.Bitmap.Config.ARGB_8888);
				var canvas = new android.graphics.Canvas(blank);
				var paint = new android.graphics.Paint();
				paint.setColor(android.graphics.Color.rgb(115,113,115));
				canvas.drawRect(dp(5.5),dp(6.8),width-dp(5.5),dp(10.2),paint);
				paint.setColor(android.graphics.Color.rgb(148,148,148));		
				for(let i=0;i<sections+1;i++){
							canvas.drawRect(dp(5.5)+(width-dp(11))/sections*i-dp(2.25),dp(4.5),dp(5.5)+(width-dp(11))/sections*i+dp(2.25),dp(12.25),paint);
				}return BitmapUtils.getDrawable(blank);
		},
		starterButton:function(sprite,state){
				var blank = android.graphics.Bitmap.createBitmap(dp(144),dp(56),android.graphics.Bitmap.Config.ARGB_8888);		
				var canvas = new android.graphics.Canvas(blank);
				canvas.drawBitmap(BitmapUtils.ultimateDrawable("gui/starter_screen/starter_buttons.png",0,state==="unpressed"?0:56,144,56).getBitmap(),0,0,null);//BitmapUtils.getTrimmed(BitmapUtils.getFromTexture("gui/starter_screen/starter_buttons.png"),0,state==="unpressed"?0:56,144,56),0,0,null);
				canvas.drawBitmap(BitmapUtils.ultimateDrawable(sprite,0,0,32,32,dp(40),dp(40)).getBitmap(),dp(4),dp(4),null);
				return BitmapUtils.getDrawable(blank);
		}
};
var ModPEGUI = {
		imageButton:function(unpressedImage,pressedImage,x,y,width,height,action){
				var unpressed = unpressedImage;
				var pressed = pressedImage;
				var button = CreateLayoutView(new android.widget.ImageView(ctx),x,y,width,height);	
				button.setBackgroundDrawable(unpressedImage);
				button.setClickable(true);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>width||event.getY()>height){view.setBackgroundDrawable(unpressed);var current = true;}else if(!current){view.setBackgroundDrawable(pressed);}break;
										case android.view.MotionEvent.ACTION_UP:view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return button;
		},
		minecraftButton:function(text,x,y,width,height,action){
				var unpressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",8,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var pressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",0,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var button = CreateLayoutView(new android.widget.Button(ctx),x,y,width,height);
				button.setBackgroundDrawable(unpressed);
				button.setPadding(0,dp(1),0,0);
				MinecraftText(button,text,true);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);view.setTextColor(android.graphics.Color.parseColor("#FFFFA1"));view.setPadding(view.getPaddingLeft(),dp(2),view.getPaddingRight(),view.getPaddingBottom());break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>width||event.getY()>height){view.setBackgroundDrawable(unpressed);view.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());var current = true;}else if(!current){view.setTextColor(android.graphics.Color.parseColor("#FFFFA1"));view.setBackgroundDrawable(pressed);view.setPadding(view.getPaddingLeft(),dp(2),view.getPaddingRight(),view.getPaddingBottom());}break;
										case android.view.MotionEvent.ACTION_UP:view.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return button;
		},
		minecraftImageButton:function(bitmap,x,y,width,height,action){
				var unpressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",8,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var pressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",0,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var button = CreateLayoutView(new android.widget.ImageView(ctx),x,y,width,height);
				button.setScaleType(android.widget.ImageView.ScaleType.CENTER);
				button.setBackgroundDrawable(unpressed);
				button.setImageBitmap(bitmap);
				button.setPadding(0,0,0,0);
				button.setClickable(true);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>width||event.getY()>height){view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingLeft(),0,view.getPaddingRight(),view.getPaddingBottom());var current = true;}else if(!current){view.setBackgroundDrawable(pressed);view.setPadding(view.getPaddingRight(),dp(1),view.getPaddingTop(),view.getPaddingBottom());}break;
										case android.view.MotionEvent.ACTION_UP:view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingRight(),0,view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingRight(),0,view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return button;
		},
		minecraftLabel:function(text,x,y,width,height,shadow,size,gravity,lineSpacing){
				var textView = CreateLayoutView(new android.widget.TextView(ctx),x,y,width,height);
				textView.setGravity(gravity||android.view.Gravity.CENTER);
				textView.setLineSpacing(lineSpacing||0,1);
				MinecraftText(textView,text,shadow,size);
				return textView;
		},
		minecraftSlider:function(x,y,width,sections,max){
				var slider = CreateLayoutView(new android.widget.SeekBar(ctx),x,y,width,dp(17));
				slider.getProgressDrawable().setColorFilter(android.graphics.Color.TRANSPARENT,android.graphics.PorterDuff.Mode.MULTIPLY);
				slider.setBackgroundDrawable(Background.slider(width,sections));
				slider.setThumb(BitmapUtils.ultimateDrawable("gui/touchgui.png",225,125,11,17,dp(33),dp(51)));
				slider.setPadding(dp(5.5),0,dp(5.5),0);
				slider.setMax(max||100);
				return slider;
		},
		minecraftSwitch:function(defaultState,x,y,activeAction,deactiveAction){
				var active = BitmapUtils.ultimateDrawable("gui/touchgui.png",198,206,38,19).getBitmap();//BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",8,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var deactive = BitmapUtils.ultimateDrawable("gui/touchgui.png",160,206,38,19).getBitmap();//,dp(2),dp(2),dp(4),dp(4),width,height);
				var mcSwitch = CreateLayoutView(new android.widget.ImageView(ctx),x,y,dp(38),dp(19));
				mcSwitch.setImageBitmap(defaultState==="off"?deactive:active);
				mcSwitch.setTag(defaultState==="off"?false:true);
				mcSwitch.setClickable(true);
				mcSwitch.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setPadding(dp(0.5),dp(0.5),dp(0.5),dp(0.5));if(view.getTag()==true){if(typeof deactiveAction==="function")deactiveAction();view.setImageBitmap(deactive);view.setTag(false);}else{if(typeof activeAction==="function")activeAction();view.setImageBitmap(active);view.setTag(true);}break;			
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>dp(38)||event.getY()>dp(19)){view.setPadding(0,0,0,0);var current = true;}else if(!current)view.setPadding(dp(0.5),dp(0.5),dp(0.5),dp(0.5));break;							
										case android.view.MotionEvent.ACTION_UP:view.setPadding(0,0,0,0);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>dp(38)||event.getY()>dp(19))){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setPadding(0,0,0,0);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>dp(38)||event.getY()>dp(19))){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return mcSwitch;
		},
		screenHeader:function(text,width){
				var body = new android.widget.RelativeLayout(ctx);			
				var center = CreateLayoutView(new android.widget.TextView(ctx),0,0,width||ScreenWidth(),dp(25));
				center.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",153,26,8,25,width||ScreenWidth(),dp(25)));		
				center.setGravity(android.view.Gravity.CENTER);
				center.setPadding(dp(3),dp(1),dp(3),0);
				MinecraftText(center,text,true);		
				body.addView(center);			
				var left = CreateLayoutView(new android.widget.ImageView(ctx),0,0,dp(2),dp(25));
				left.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",150,26,2,25));
				body.addView(left);				
				var right = CreateLayoutView(new android.widget.ImageView(ctx),(width||ScreenWidth())-dp(2),0,dp(2),dp(25));
				right.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",162,26,2,25));
				body.addView(right);		
				var bottom = CreateLayoutView(new android.widget.ImageView(ctx),0,dp(25),width||ScreenWidth(),dp(3));
				bottom.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",153,52,8,3,width||ScreenWidth(),dp(3)));
				body.addView(bottom);		
				return body;
		}
};
var dp = (pixels) => android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP,2,ctx.getResources().getDisplayMetrics())*pixels;



//------------------
//MODELS FUNCTIONS
//------------------


//addBlastoiseRenderType(BlastoiseRenderType);
addCharmanderRenderType(CharmanderRenderType);
addBulbasaurRenderType(BulbasaurRenderType);
addIvysaurRenderType(IvysaurRenderType);
addVenusaurRenderType(VenusaurRenderType);
addCharmeleonRenderType(CharmeleonRenderType);
addCharizardRenderType(CharizardRenderType);


addVaporeonRenderType(VaporeonRenderType);
addJolteonRenderType(JolteonRenderType);
addEmberonRenderType(EmberonRenderType);

//addButterfreeRenderType(ButterfreeRenderType)
//addWeepinbellRenderType(WeepinbellRenderType);
addSquirtleRenderType(SquirtleRenderType);
addWartortleRenderType(WartortleRenderType);
addElectrodeRenderType(ElectrodeRenderType);
addVoltorbRenderType(VoltorbRenderType);
addRaichuToRenderType(RaichuRenderType);
addTangelaToRenderType(TangelaRenderType);
addSandshrewToRenderType(SandshrewRenderType);

addRattataRenderType(RattataRenderType);
addEeveeRenderType(EeveeRenderType);
addLaprasRenderType(LaprasRenderType);
addPikachuToRenderType(PikachuRenderType);
addGyaradosRenderType(GyaradosRenderType); 
addMoltresRenderType(MoltresRenderType);
addArticunoRenderType(ArticunoRenderType);
addDugtrioRenderType(DugtrioRenderType);
addDiglettRenderType(DiglettRenderType);
addVenomothRenderType(VenomothRenderType);
//addVenonatRenderType(VenonatRenderType);
addBellsproutRenderType(BellsproutRenderType);
addSnorlaxRenderType(SnorlaxRenderType);
addMagnemiteRenderType(MagnemiteRenderType);
addCaterpieRenderType(CaterpieRenderType);
addDragonairRenderType(DragonairRenderType);
addDratiniRenderType(DratiniRenderType);
addGravelerRenderType(GravelerRenderType);
addGolemRenderType(GolemRenderType);
addGeodudeRenderType(GeodudeRenderType);
addOddishRenderType(OddishRenderType);
addGastlyRenderType(GastlyRenderType);
addHitmonleeRenderType(HitmonleeRenderType);
addRaticateRenderType(RaticateRenderType);
addWeedleRenderType(WeedleRenderType);
addZubatRenderType(ZubatRenderType);
addVileplumeRenderType(VileplumeRenderType);


function addBulbasaurRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -3.5, 14, -13 , 7, 7, 7);

//orejas
body.setTextureOffset(45,0, true);
body.addBox(2, 12, -10 ,1, 2, 2);
body.addBox(-3, 12, -10 ,1, 2, 2);

//cuerpo
body.setTextureOffset(28,8, true);
body.addBox( -4,16, -6 , 8, 6, 10);

//capullo
body.setTextureOffset(0,15, true);
body.addBox(-3,14,-4 ,6,2, 7);
body.setTextureOffset(3,18, true);
body.addBox(-2.5,13,-3,5,1, 5);


//piernas l
body.setTextureOffset(33,0, true);
body.addBox( 4,19, 2 ,2,5, 2);
body.addBox( 4,19, -5 ,2,5, 2);
body.addBox(-6,19,2,2,5,2);
body.addBox(-6,19,-4,2,5,2);
}

function addIvysaurRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128, 64);
var body = model.getPart("body").setTextureSize(128, 64);
var rArm = model.getPart("rightArm").setTextureSize(128, 64);
var lArm = model.getPart("leftArm").setTextureSize(128, 64);
var rLeg = model.getPart("rightLeg").setTextureSize(128, 64);
var lLeg = model.getPart("leftLeg").setTextureSize(128, 64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -4,11, -13,8, 7, 8);

//orejas
body.setTextureOffset(26,0, true);
body.addBox( -4,9, -9,1,2,3);
body.addBox(3,9,-9,1,2,3);


//cuerpo
body.setTextureOffset(52,0, true);
body.addBox(-5,13,-5,10,7,8);
body.setTextureOffset(0,25, true);
body.addBox(-4,14,3,8,6,5);


//petalos
body.setTextureOffset(90,31, true);
body.addBox(-3,12.2,-6,5,0,8);

//petalos 2
body.setTextureOffset(90,7, true);
body.addBox(-9,12.2,0,8,0,5);

//petalos 3
body.setTextureOffset(91,16, true);
body.addBox(-3,12.2,2,5,0,8);

//petalos 4
body.setTextureOffset(89,0, true);
body.addBox(0,12.2,0,8,0,5);


//petalos arriba
body.setTextureOffset(36,0, true);
body.addBox(-3,6.2,-4.8,5,6,0);

//petalos 2
body.setTextureOffset(55,52, true);
body.addBox(-9,6.2,0,0,6,5);

//petalos 3
body.setTextureOffset(44,28, true);
body.addBox(-3,6.2,10,5,6,0);

//petalos 4
body.setTextureOffset(66,38, true);
body.addBox(8,6.2,0,0,6,5);

//capuyo
body.setTextureOffset(62,19, true);
body.addBox(-2,8,0,4,4,4);


//brazos
body.setTextureOffset(0,42, true);
body.addBox(-8,18,-8.1,4,6,4);
body.addBox(4,18,-6,4,6,4);

//piernas
body.setTextureOffset(18,53, true);
body.addBox(4,19,4,3,5,3);
body.addBox(-7,19,4,3,5,3);


}
 function addVenusaurRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza --
body.setTextureOffset(144,0, true);
body.addBox( -13,4,-14,26,15,28);

//--
body.setTextureOffset(152, 46, true);
body.addBox(-12,3,-13,24, 1, 26);

//33
body.setTextureOffset(0,0, true);
body.addBox(-9.5, 5, -25,19, 12, 11);

//44
body.setTextureOffset(66,0, true);
body.addBox(-4.5, 1, -4,10, 2, 10);


//55
body.setTextureOffset(110,0, true);
body.addBox(-3.5, -11, -3,8, 12, 8);

//66
body.setTextureOffset(64, 15, true);
body.addBox(-5, -13, -4,11, 2, 10);


//77
body.setTextureOffset(78, 42, true);
body.addBox(-4, -11, -19,9, 1, 16);
//77
body.setTextureOffset(203, 109, true);
body.addBox(-4, -11, 5,9, 1, 16);
//88
body.setTextureOffset(79, 104, true);
body.addBox(-4.5, 2, -27,10, 1, 23);
//88
body.setTextureOffset(216, 76, true);
body.addBox(-4.5,2,6,10, 1, 9);
//9
body.setTextureOffset(0, 26, true);
body.addBox(12, 13, -16, 5, 11, 5);
body.addBox(-16, 13, -16, 5, 11, 5);
body.addBox(11, 13, 11, 5, 11, 5);
body.addBox(-16, 12, 11, 5, 11, 5);
//10
body.setTextureOffset(76,71, true);
body.addBox(5.5, 2, -4, 9,1,10)
//10
body.setTextureOffset(76,85, true);
body.addBox(-13.5, 2, -4, 9,1,10);
//11
body.setTextureOffset(115, 25, true);
body.addBox(-4.5, 2, 15,10, 11, 1);
//12
body.setTextureOffset(26, 27, true);
body.addBox(14.5, 2, -4,1, 11, 10);
//12
body.setTextureOffset(55, 30, true);
body.addBox(-14.5, 2, -4,1, 11, 10);
//13
body.setTextureOffset(0, 75, true);
body.addBox(4.5, -11, -3.5, 16, 1, 9);
//13
body.setTextureOffset(0, 113, true);
body.addBox(-19.5, -11, -3.5, 16, 1, 9);
//14
body.setTextureOffset(0, 57, true);
body.addBox(5, 2, -19, 4, 3, 1);
body.addBox(-9, 2, -19, 4, 3, 1);
}

function addCharmeleonRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 24, 22,true);
body.addBox(-2,5,-4, 3, 4, 5);
body.setTextureOffset( 43, 18,true);
body.addBox(-3.5,11,-2.5, 6, 9, 4);
body.setTextureOffset( 55, 8,true);
body.addBox(-5,12,-2, 2, 6, 2);
body.setTextureOffset( 55, 8,true);
body.addBox(2,12,-2, 2, 6, 2);
body.setTextureOffset( 43, 7,true);
body.addBox(-4,17,-2, 2, 7, 3);
body.setTextureOffset( 43, 7,true);
body.addBox(1,17,-2, 2, 7, 3);
body.setTextureOffset( 55, 2,true);
body.addBox(-1.5,9,-2, 2, 2, 2);
body.setTextureOffset( 35, 1,true);
body.addBox(-1,3,-1, 1, 3, 2);
body.setTextureOffset( 31, 8,true);
body.addBox(-1.5,17,1, 2, 2, 3);
body.setTextureOffset( 32, 16,true);
body.addBox(-1,17,4, 1, 1, 3);
body.setTextureOffset( 2, 17,true);
body.addBox(-0.5,12,5, 0, 6, 7);
body.setTextureOffset( 44, 1,true);
body.addBox(-1.5,7,-6, 2, 2, 2);
body.setTextureOffset( 0, 0,true);
body.addBox(-3,12,-3, 5, 7, 1);
}


function addEeveeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);
head.setTextureOffset(28, 15);
head.addBox(-1.5, 13, -3, 4, 2, 2);
head.setTextureOffset(28, 0);
head.addBox(-3, 6, -1, 2, 4, 1);
head.setTextureOffset(28, 0);
head.addBox(2, 6, -1, 2, 4, 1);
body.clear();
body.setTextureOffset(0, 1);
body.addBox(-3, 15, -1, 7, 4, 4);
body.setTextureOffset(0, 20);
body.addBox(-2.5, 15, 3, 6, 4, 6);
body.setTextureOffset(28, 22);
body.addBox(0, 13, 7, 1, 4, 6);
rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);
lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);
rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}




function addVaporeonRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,1,-12,10,10,8);
//2
body.setTextureOffset(63,0, true);
body.addBox(-4,6, -4,10, 10, 16);
//3
body.setTextureOffset(0,35, true);
body.addBox(4, -9, -7,6, 11, 0);
//3
body.setTextureOffset(0,58, true);
body.addBox(-8,-9,-7,6, 11, 0);
//4
body.setTextureOffset(135,0, true);
body.addBox(6,12,-3,2, 8, 4);
body.addBox(-6,12,-3,2, 8, 4);
//5
body.setTextureOffset(60, 36, true);
body.addBox(-1, 6, 12,4, 5, 6);
//6
body.setTextureOffset(134, 22, true);
body.addBox(-6,11, 6,2, 6, 5);
body.addBox(6,11, 6,2, 6, 5);
//7
body.setTextureOffset(118, 0, true);
body.addBox(6,17,8,2,3,4);
body.addBox(-6,17,8,2,3,4);
//8
body.setTextureOffset(156, 0, true);
body.addBox(-6,20,-3,2, 4, 3);
body.addBox(6,20,-3,2, 4, 3);
body.addBox(6,20,9,2,4,3);
body.addBox(-6,20,9,2,4,3);
//9
body.setTextureOffset(44, 0, true);
body.addBox(-6, 22,-4,2, 2, 2);
body.addBox(6, 22, -4,2, 2, 2);

body.addBox(6, 22, 8,2, 2, 2);
body.addBox(-6, 22, 8,2, 2, 2);
//10
body.setTextureOffset(7,77, true);
body.addBox(-11,-4,-4,24, 23, 0);
//11
body.setTextureOffset(0, 25, true);
body.addBox(-1, 8, -13,4, 3, 1);
//12
body.setTextureOffset(175, 0, true);
body.addBox(0, 7, 18,2, 4, 8);
//13
body.setTextureOffset(163, 46, true);
body.addBox(0.5, 8, 26,1, 3, 10);
//14
body.setTextureOffset(69, 70, true);
body.addBox(-5, 8, 36,13, 0, 12);
//14
body.setTextureOffset(69, 70, true);
body.addBox(-5, 8, 36,13, 0, 12);
//15
body.setTextureOffset(205, 0, true);
body.addBox(0.5, 4, 0,1, 2, 2);
body.addBox(0.5, 4, 4,1, 2, 2);
body.addBox(0.5, 4, 9,1, 2, 2);
body.addBox(0.5, 4, 13,1, 2, 2);
body.addBox(0.5,5,18,1, 2, 2);
body.addBox(0.5, 5, 22,1, 2, 2);
body.addBox(0.5,6,27,1,2,2);
body.addBox(0.5,6,32,1,2,2);
}

function addEmberonRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,1,-12,10,10,8);
//2
body.setTextureOffset(63,0, true);
body.addBox(-4,6, -4,10, 10, 16);
//3
body.setTextureOffset(0,35, true);
body.addBox(4, -9, -7,6, 11, 0);
//3
body.setTextureOffset(0,58, true);
body.addBox(-8,-9,-7,6, 11, 0);
//4
body.setTextureOffset(135,0, true);
body.addBox(6,12,-3,2, 8, 4);
body.addBox(-6,12,-3,2, 8, 4);
//6
body.setTextureOffset(134, 22, true);
body.addBox(-6,11, 6,2, 6, 5);
body.addBox(6,11, 6,2, 6, 5);
//7
body.setTextureOffset(118, 0, true);
body.addBox(6,17,8,2,3,4);
body.addBox(-6,17,8,2,3,4);
//8
body.setTextureOffset(156, 0, true);
body.addBox(-6,20,-3,2, 4, 3);
body.addBox(6,20,-3,2, 4, 3);
body.addBox(6,20,9,2,4,3);
body.addBox(-6,20,9,2,4,3);
//9
body.setTextureOffset(44, 0, true);
body.addBox(-6, 22,-4,2, 2, 2);
body.addBox(6, 22, -4,2, 2, 2);

body.addBox(6, 22, 8,2, 2, 2);
body.addBox(-6, 22, 8,2, 2, 2);

//11
body.setTextureOffset(0, 25, true);
body.addBox(-1, 8, -13,4, 3, 1);

//

//5
body.setTextureOffset(0, 83, true);
body.addBox(-7,5,-7,16, 9, 8);

//10
body.setTextureOffset(49, 45, true);
body.addBox(-1.5, -1, -14,5, 5, 5);

//12
body.setTextureOffset(83, 81, true);
body.addBox(-5, 1, 7,12, 12, 12);
}

function addCharmanderRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(64, 64);
var body = model.getPart("body").setTextureSize(64, 64);
var rArm = model.getPart("rightArm").setTextureSize(64, 64);
var lArm = model.getPart("leftArm").setTextureSize(64, 64);
var rLeg = model.getPart("rightLeg").setTextureSize(64, 64);
var lLeg = model.getPart("leftLeg").setTextureSize(64, 64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -2,4, -5,6, 6, 7);

body.setTextureOffset(21,50, true);
body.addBox( -1.5,3.5, -4.5,5,1,6);

body.setTextureOffset(0,36, true);
body.addBox(3.5,5, -3,1,4,4);
body.addBox(-2.5,5, -3,1,4,4);

body.setTextureOffset(24,0, true);
body.addBox(-0.5,7, -6,3,3,1);

//cuerpo
body.setTextureOffset(40,0, true);
body.addBox(-2, 10, -3 ,6, 10, 6);

body.setTextureOffset(0,47, true);
body.addBox(-1,12, -4,4, 6, 1);


//brazos
body.setTextureOffset(17,24, true);
body.addBox(-4,11,-2,2,6,2);
body.addBox(4,11,-2,2,6,2);

//piernas
body.setTextureOffset(17,24, true);
body.addBox(3,18,-2,2,6,2);
body.addBox(-3,18,-2,2,6,2);


//cola
body.setTextureOffset(48,18, true);
body.addBox(-0.5,16,3,3,3, 5);

body.setTextureOffset(31,18, true);
body.addBox(0,15,6,2,2, 5);

body.setTextureOffset(29,10, true);
body.addBox(0,13,10,2,3,2);

body.setTextureOffset(33,29, true);
body.addBox(0.5,8,9,1,5,4);
}

function addJolteonRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,1,-12,10,10,8);
//2
body.setTextureOffset(63,0, true);
body.addBox(-4,6, -4,10, 10, 16);
//3
body.setTextureOffset(0,35, true);
body.addBox(4, -9, -7,6, 11, 0);
//3
body.setTextureOffset(0,58, true);
body.addBox(-8,-9,-7,6, 11, 0);
//4
body.setTextureOffset(135,0, true);
body.addBox(6,12,-3,2, 8, 4);
body.addBox(-6,12,-3,2, 8, 4);
//6
body.setTextureOffset(134, 22, true);
body.addBox(-6,11, 6,2, 6, 5);
body.addBox(6,11, 6,2, 6, 5);
//7
body.setTextureOffset(118, 0, true);
body.addBox(6,17,8,2,3,4);
body.addBox(-6,17,8,2,3,4);
//8
body.setTextureOffset(156, 0, true);
body.addBox(-6,20,-3,2, 4, 3);
body.addBox(6,20,-3,2, 4, 3);
body.addBox(6,20,9,2,4,3);
body.addBox(-6,20,9,2,4,3);
//9
body.setTextureOffset(44, 0, true);
body.addBox(-6, 22,-4,2, 2, 2);
body.addBox(6, 22, -4,2, 2, 2);

body.addBox(6, 22, 8,2, 2, 2);
body.addBox(-6, 22, 8,2, 2, 2);
//11
body.setTextureOffset(0, 25, true);
body.addBox(-1, 8, -13,4, 3, 1);

//

//5
body.setTextureOffset(20, 64, true);
body.addBox(-5, 5, 7,12, 1, 11);
body.addBox(-5,4, 8,12, 1, 11);
//5
body.setTextureOffset(29, 92, true);
body.addBox(6, 6, 7,1, 7, 11);
body.addBox(-5,6,7,1, 7, 11);
body.addBox(7, 5, 8,12, 1, 11);
body.addBox(-6,5, 8,12, 1, 11);

//5
body.setTextureOffset(91, 71, true);
body.addBox(-5, 5, -4,11, 1, 6);
body.addBox(-5,4,-3,11,1,6);

//5
body.setTextureOffset(92, 110, true);
body.addBox(6, 6, -4,1, 7, 6);
body.addBox(7,6,-3,1,7,6);
body.addBox(-7, 6, -3,1,7,6);
}


function addOddishRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-2.5,16,-3,6, 6, 6);


//c111
body.setTextureOffset(30,0, true);
body.addBox(-3,22,-5,2,2,5);
body.addBox(2,22,-5,2,2,5);

//c111
body.setTextureOffset(-12, 13, true);
body.addBox(-2, 15.5, 0,5, 0, 12);


//c111
body.setTextureOffset(28, 13, true);
body.addBox(-2, 15.5, -12,5, 0, 12);

//c111
body.setTextureOffset(0, 26, true);
body.addBox(-14,15.5,-2,12, 0, 5);

//c111
body.setTextureOffset(0, 39, true);
body.addBox(3,15.5,-2,12, 0, 5);
}

function addCharizardRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 0, 0,true);
body.addBox(-9.5,-2,-6.5, 19, 19, 15);
body.setTextureOffset( 0, 38,true);
body.addBox(-8,-6,-6, 16, 4, 14);
body.setTextureOffset( 0, 61,true);
body.addBox(-7,-7,-5, 14, 1, 12);
body.setTextureOffset( 0, 78,true);
body.addBox(-5,-8,-4, 10, 1, 10);
body.setTextureOffset( 76, 0,true);
body.addBox(-3.5,-17,-3, 7, 9, 7);
body.setTextureOffset( 123, 0,true);
body.addBox(-4.5,-25,-3, 9, 8, 8);
body.setTextureOffset( 168, 0,true);
body.addBox(-3,-22,-13, 6, 5, 10);
body.setTextureOffset( 80, 29,true);
body.addBox(-12,-8,-2, 5, 5, 5);
body.setTextureOffset( 80, 29,true);
body.addBox(7,-8,-2, 5, 5, 5);
body.setTextureOffset( 110, 37,true);
body.addBox(-12,10,-2, 7, 14, 7);
body.setTextureOffset( 110, 37,true);
body.addBox(6,10,-2, 7, 14, 7);
body.setTextureOffset( 161, 38,true);
body.addBox(-4,12,6, 9, 8, 9);
body.setTextureOffset( 161, 38,true);
body.addBox(-3.5,13.5,15, 8, 7, 8);
body.setTextureOffset( 161, 38,true);
body.addBox(-3,15,23, 7, 6, 7);
body.setTextureOffset( 161, 38,true);
body.addBox(-2.5,17,30, 6, 5, 6);
body.setTextureOffset( 161, 38,true);
body.addBox(-2,19,36, 5, 4, 5);
body.setTextureOffset( 161, 38,true);
body.addBox(-1.5,19,41, 4, 4, 4);
body.setTextureOffset( 79, 54,true);
body.addBox(-13,-3,-1, 3, 8, 3);
body.setTextureOffset( 79, 54,true);
body.addBox(10,-3,-1, 3, 8, 3);
body.setTextureOffset( 160, 68,true);
body.addBox(-15,1,-11, 4, 4, 13);
body.setTextureOffset( 160, 68,true);
body.addBox(11,1,-11, 4, 4, 13);
body.setTextureOffset( 5, 97,true);
body.addBox(0,3,38, 1, 17, 13);
body.setTextureOffset( 0, 0,true);
body.addBox(-4,-25.5,5, 2, 2, 5);
body.setTextureOffset( 0, 0,true);
body.addBox(2,-25.5,5, 2, 2, 5);
body.setTextureOffset( 160, 90,true);
body.addBox(0,-25,9, 45, 34, 1);
body.setTextureOffset( 60, 90,true);
body.addBox(-45,-25,9, 45, 34, 1);
body.setTextureOffset( 53, 0,true);
body.addBox(-11,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(-9,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(-7,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(7,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(9,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(11,23,-5, 1, 1, 3);
}



var RenderBallRenderType = Renderer.createHumanoidRenderer();
addRenderBallRenderType(RenderBallRenderType);

function addRenderBallRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-5, 13, -6.5, 6, 4, 6, -1);//Abajo
body.setTextureOffset(0, 18, true);
body.addBox(-5, 11, -6.5, 6, 4, 6, -1);//Arriba
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

}

var RenderBallOpenRenderType = Renderer.createHumanoidRenderer();
addRenderBallOpenRenderType(RenderBallOpenRenderType);

function addRenderBallOpenRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-5, 13, -6.5, 6, 4, 6, -1);//Abajo
body.setTextureOffset(0, 16, true);
body.addBox(-6.5, 9, -6.5, 4, 6, 6.5, -1);//Arriba
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

}
function addGeodudeRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,0,-5,9, 9, 9);
//c111
body.setTextureOffset(0,28, true);
body.addBox(-12,3,-2,8, 2, 2);
//c111
body.setTextureOffset(0,28, true);
body.addBox(-12,3,-2,8, 2, 2);
body.addBox(5,3,-2,8, 2, 2);
//c111
body.setTextureOffset(45, 0, true);
body.addBox(-12,3,-7,3,3,5);
body.addBox(10,3,-7,3,3,5);
//c111
body.setTextureOffset(75,0, true);
body.addBox(-12.5,2,-13,4,4,6);
body.addBox(9.5,2,-13,4,4,6);

}

function addGravelerRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-8,6,-8,16, 16, 16);
//c111
body.setTextureOffset(0,39, true);
body.addBox(-7,22,-2,5, 2, 5);
body.addBox(2,22,-2,5, 2, 5);
//c111
body.setTextureOffset(0,51, true);
body.addBox(-16,9,0,8, 4, 4);
body.addBox(8,9,0,8, 4, 4);
//c111
body.setTextureOffset(75,0, true);
body.addBox(-20,9,-4,4, 4, 8);
body.addBox(16,9,-4,4, 4, 8);
//c111
body.setTextureOffset(71, 39, true);
body.addBox(3,17,-10,6, 4, 4);
body.addBox(-9,18,-10,6, 4, 4);
}

function addGolemRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-9, -1, -9,18, 18, 18);
//c111
//c111
body.setTextureOffset(0,50, true);
body.addBox(-3.5,5,-15,7, 7, 6);

//c111
body.setTextureOffset(90, 0, true);
body.addBox(-14,7,-12,5, 5, 13);
body.addBox(9,7,-12,5, 5, 13);


//c111
body.setTextureOffset(35, 56, true);
body.addBox(-10,16,-4,5,8,5);
body.addBox(5,16,-4,5,8,5);

} 

function addDratiniRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-3,19,-17,5, 5, 5);
//c111
body.setTextureOffset(0,17, true);
body.addBox(-2.5,20,-12,4, 4, 22);
//c111
body.setTextureOffset(26, 0, true);
body.addBox(-2,22,-18,3, 2, 1);
//c111
body.setTextureOffset(43, 0, true);
body.addBox(1,17,-14,3, 3, 0);
body.addBox(-5,17,-14,3, 3, 0);
//c111
body.setTextureOffset(64, 0, true);
body.addBox(-1.5,21,10,2, 3, 6);
}



function addDragonairRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,29, true);
body.addBox(-2,6,-8,5, 18, 5);
//c111
body.setTextureOffset(0,0, true);
body.addBox(-2,19, -3,5, 5, 21);
//c111
body.setTextureOffset(44,0, true);
body.addBox(-3,0, -10,7, 6, 7);
//c111
body.setTextureOffset(0,0, true);
body.addBox(-1.5,2,-14,4, 4, 4);
//c111
body.setTextureOffset(0,13, true);
body.addBox(-0.5,7,-10,2, 2, 2);
//c11
body.setTextureOffset(79, 0, true);
body.addBox(-1.5,20, 18,4, 4, 7);
//c111
body.setTextureOffset(54, 28, true);
body.addBox(-0.5,21,24,2, 3, 7);
//c111
body.setTextureOffset(80, 34, true);
body.addBox(-0.5,14,29,2, 8, 2);
//c111
body.setTextureOffset(30, 50, true);
body.addBox(-1,11,28.5,3, 3, 3);
//c111
body.setTextureOffset(108, 0, true);
body.addBox(0,3,29.5,1, 8, 1);
//c111
body.setTextureOffset(31, 44, true);
body.addBox(-0.5,7,29,2, 2, 2);
//c111
body.setTextureOffset(54, 44, true);
body.addBox(-3.1, -4, -6,0, 8, 12);
//c111
body.setTextureOffset(87, 44, true);
body.addBox(4.1,-4,-6,0, 8, 12);
}

function addCaterpieRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-2.5,16,-6,5, 5, 5);

//c111
body.setTextureOffset(38,0, true);
body.addBox(-2,19,-2,4, 4, 4);
body.addBox(-2,19,2,4, 4, 4);

//c111
body.setTextureOffset(0, 24, true);
body.addBox(-0.5,15,-7,1, 4, 1);


//c111
body.setTextureOffset(0, 39, true);
body.addBox(-4,15,-6,8, 1, 1);

//c111
body.setTextureOffset(65, 0, true);
body.addBox(-1.5,18,4,3, 3, 6);

//c111
body.setTextureOffset(15, 16, true);
body.addBox(-3,22,-2,2, 2, 2);
body.addBox(-3,22,1,2, 2, 2);

body.addBox(1,22,-1,2, 2, 2);
body.addBox(1,22,1,2, 2, 2);


//c111
body.setTextureOffset(22, 0, true);
body.addBox(-1,17,9,2, 2, 3);
}

	


function addIvysaurRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128, 64);
var body = model.getPart("body").setTextureSize(128, 64);
var rArm = model.getPart("rightArm").setTextureSize(128, 64);
var lArm = model.getPart("leftArm").setTextureSize(128, 64);
var rLeg = model.getPart("rightLeg").setTextureSize(128, 64);
var lLeg = model.getPart("leftLeg").setTextureSize(128, 64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -4,11, -13,8, 7, 8);

//orejas
body.setTextureOffset(26,0, true);
body.addBox( -4,9, -9,1,2,3);
body.addBox(3,9,-9,1,2,3);


//cuerpo
body.setTextureOffset(52,0, true);
body.addBox(-5,13,-5,10,7,8);
body.setTextureOffset(0,25, true);
body.addBox(-4,14,3,8,6,5);


//petalos
body.setTextureOffset(90,31, true);
body.addBox(-3,12.2,-6,5,0,8);

//petalos 2
body.setTextureOffset(90,7, true);
body.addBox(-9,12.2,0,8,0,5);

//petalos 3
body.setTextureOffset(91,16, true);
body.addBox(-3,12.2,2,5,0,8);

//petalos 4
body.setTextureOffset(89,0, true);
body.addBox(0,12.2,0,8,0,5);


//petalos arriba
body.setTextureOffset(36,0, true);
body.addBox(-3,6.2,-4.8,5,6,0);

//petalos 2
body.setTextureOffset(55,52, true);
body.addBox(-9,6.2,0,0,6,5);

//petalos 3
body.setTextureOffset(44,28, true);
body.addBox(-3,6.2,10,5,6,0);

//petalos 4
body.setTextureOffset(66,38, true);
body.addBox(8,6.2,0,0,6,5);

//capuyo
body.setTextureOffset(62,19, true);
body.addBox(-2,8,0,4,4,4);


//brazos
body.setTextureOffset(0,42, true);
body.addBox(-8,18,-8.1,4,6,4);
body.addBox(4,18,-6,4,6,4);

//piernas
body.setTextureOffset(18,53, true);
body.addBox(4,19,4,3,5,3);
body.addBox(-7,19,4,3,5,3);


}

function addMagnemiteRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-3.5, -10, -3.5, 7, 7, 7, 0);
body.setTextureOffset(8, 14, true);
body.addBox(-1.5, -13, -1.5, 3, 1, 3, 0);
body.setTextureOffset(0, 14, true);
body.addBox(-1, -12, -1, 2, 2, 2, 0);
body.setTextureOffset(0, 18, true);
body.addBox(-3, -4.5, -5.5, 1, 1, 2, 0);
body.addBox(2, -4.5, -5.5, 1, 1, 2, 0);
body.setTextureOffset(0, 21, true);
body.addBox(-3.5, -5, -6, 2, 2, 1, 0);
body.addBox(1.5, -5, -6, 2, 2, 1, 0);
body.setTextureOffset(34, 0, true);
body.addBox(-10.5, -9, -0.5, 5, 2, 1, 0);
body.setTextureOffset(34, 3, true);
body.addBox(-10.5, -6, -0.5, 5, 2, 1, 0);
body.setTextureOffset(28, 0, true);
body.addBox(-5.5, -9, -0.5, 2, 5, 1, 0);

body.setTextureOffset(46, 0, true);
body.addBox(5.5, -9, -0.5, 5, 2, 1, 0);
body.setTextureOffset(46, 3, true);
body.addBox(5.5, -6, -0.5, 5, 2, 1, 0);
body.setTextureOffset(28, 0, true);
body.addBox(3.5, -9, -0.5, 2, 5, 1, 0);

rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
}


function addSnorlaxRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(172,0, true);
body.addBox(-12.13333,-11,-9,24, 28, 18);
//c111
body.setTextureOffset(0,0, true);
body.addBox(-11,17,-5,8, 7, 9);
body.addBox(3,17,-5,8, 7, 9);
//c111
body.setTextureOffset(0,37, true);
body.addBox(-18,-10,-3,6, 21, 6);
body.addBox(12,-10,-3,6, 21, 6);
//c111
body.setTextureOffset(52,0, true);
body.addBox(-7,-21,-5,14, 10, 11);
//c111
body.setTextureOffset(0, 86, true);
body.addBox(-10,21,-7,6, 3, 2);
body.addBox(4,21,-7,6, 3, 2);
//c111
body.setTextureOffset(36, 47, true);
body.addBox(-7,-24,0,4, 3, 1);
body.addBox(3,-24,0,4, 3, 1);
}


function addBellsproutRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize (128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(23,0, true);
body.addBox(0,5,0,1, 17, 1);

//c111
body.setTextureOffset(33,0, true);
body.addBox(-2,0,-4,5, 5, 6);

//c111
body.setTextureOffset(33,0, true);
body.addBox(-2,0,-4,5, 5, 6);

//c111
body.setTextureOffset(0,0, true);
body.addBox(-1,2,-7,3, 3, 3);

//c111
body.setTextureOffset(0,21, true);
body.addBox(-1.5,1.5,-8,4, 4, 1);

//c111
body.setTextureOffset(68, 0, true);
body.addBox(1,7,0,12, 8, 1);

body.setTextureOffset(68,17, true);
body.addBox(-12,7,0,12, 8, 1);


//c111
body.setTextureOffset(0, 38, true);
body.addBox(-1,22,0,1, 2, 1);
body.addBox(1,22,1,1, 2, 1);

}


function addVenomothRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,49, true);
body.addBox(-2.5,0.5,0,8, 8, 12);

//c111
body.setTextureOffset(63, 0, true);
body.addBox(-2,1,-3,7, 7, 3);

//c111
body.setTextureOffset(0, 0, true);
body.addBox(-1,1,-10,5, 6, 7);

//c111
body.setTextureOffset(0,24, true);
body.addBox(-2, 0,-8,7, 7, 3);

//c111
body.setTextureOffset(97, 0, true);
body.addBox(-1.5,-1,-16,6, 6, 6);

//c111
body.setTextureOffset(31, 0, true);
body.addBox(2,-1,-17,4, 4, 1);
body.addBox(-3,-1,-17,4, 4, 1);

//c111
body.setTextureOffset(56, 24, true);
body.addBox(-2,-11,-15,2, 10, 2);
body.addBox(0.5,-11,-15,2, 10, 2);
body.addBox(3,-11,-15,2,10,2);


//c111
body.setTextureOffset(42, 77, true);
body.addBox(3,0,-6,29, 1, 20);


//c111
body.setTextureOffset(42, 102, true);
body.addBox(-29,0,-6,29, 1, 20);
}

function addDiglettRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//Shape1
body.setTextureOffset(0, 34, true);
body.addBox(-5,23,-5,10, 1, 10);


//Shape2
body.setTextureOffset(0,0, true);
body.addBox(-4,15,-4,8, 8, 8);

//Shape3
body.setTextureOffset(35,0, true);
body.addBox(-1.5,19,-4.666667,3, 2, 1);

//Shape4
body.setTextureOffset(48,0, true);
body.addBox(-7,21,0,3,3,3);

//Shape5
body.setTextureOffset(72, 0, true);
body.addBox(-3,14,-3,6, 1, 6);

}



function addDugtrioRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//Shape1
body.setTextureOffset(0, 34, true);
body.addBox(-5,23,-5,10, 1, 10);


//Shape2
body.setTextureOffset(0,0, true);
body.addBox(-4,15,-4,8, 8, 8);

//Shape3
body.setTextureOffset(35,0, true);
body.addBox(-1.5,19,-4.666667,3, 2, 1);
body.addBox(-5.5,13,5,3, 2, 1);
body.addBox(4.5,9,6,3, 2, 1);

//Shape4
body.setTextureOffset(48,0, true);
body.addBox(-7,21,0,3,3,3);
body.addBox(10,21,13,3,3,3);



//Shape5
body.setTextureOffset(72, 0, true);
body.addBox(-3,14,-3,6, 1, 6);
body.addBox(-7,7, 7,6, 1, 6);
body.addBox(3,3,8,6, 1, 6);

//digle_2
body.setTextureOffset(0, 47, true);
body.addBox(-9,23,5,20, 1, 11);

//digle_2
body.setTextureOffset(0, 0, true);
body.addBox(-8,8,6,8, 15, 8);
body.addBox(2,4,7,8, 19, 8);

}

function addMoltresRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(512,256);
var body = model.getPart("body").clear().setTextureSize(512,256);
var rArm = model.getPart("rightArm").clear().setTextureSize(512,256);
var lArm = model.getPart("leftArm").clear().setTextureSize(512,256);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(512,256);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(512,256);
body.setTextureOffset( 67, 0,true);
body.addBox(-6,-5,-9, 13, 10, 16);
body.setTextureOffset( 0, 0,true);
body.addBox(-5,5,4, 4, 7, 4);
body.setTextureOffset( 0, 0,true);
body.addBox(3,5,4, 4, 7, 4);
body.setTextureOffset( 0, 44,true);
body.addBox(-5,-4,-10, 11, 8, 1);
body.setTextureOffset( 0, 68,true);
body.addBox(-4,-4.5,-12, 9, 7, 2);
body.setTextureOffset( 0, 98,true);
body.addBox(-3.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 98,true);
body.addBox(4.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 129,true);
body.addBox(-2.5,-5,-14, 6, 6, 2);
body.setTextureOffset( 154, 0,true);
body.addBox(-1.5,-5,-30, 4, 4, 16);
body.setTextureOffset( 214, 0,true);
body.addBox(-2.5,-6.5,-38, 6, 6, 8);
body.setTextureOffset( 30, 0,true);
body.addBox(-2,-6,-44, 5, 5, 6);
body.setTextureOffset( 44, 52,true);
body.addBox(0,-11,-40, 1, 7, 19);
body.setTextureOffset( 166, 42,true);
body.addBox(0,-4,-55, 1, 2, 11);
body.setTextureOffset( 38, 100,true);
body.addBox(4,-3,-11, 19, 1, 4);
body.setTextureOffset( 38, 100,true);
body.addBox(-22,-3,-11, 19, 1, 4);
body.setTextureOffset( 44, 120,true);
body.addBox(20,-4,-10, 30, 1, 5);
body.setTextureOffset( 44, 120,true);
body.addBox(-49,-4,-10, 30, 1, 5);
body.setTextureOffset( 43, 151,true);
body.addBox(47,-3,-9, 25, 1, 3);
body.setTextureOffset( 43, 151,true);
body.addBox(-70,-3,-9, 25, 1, 3);
body.setTextureOffset( 264, 0,true);
body.addBox(-5,-4,7, 11, 8, 3);
body.setTextureOffset( 145, 87,true);
body.addBox(-0.5,-4,10, 2, 2, 12);
body.setTextureOffset( 325, 0,true);
body.addBox(-5,-5,8, 11, 1, 22);
body.setTextureOffset( 325, 0,true);
body.addBox(-5,4,8, 11, 1, 22);
body.setTextureOffset( 228, 54,true);
body.addBox(6,-5,8, 1, 10, 22);
body.setTextureOffset( 228, 54,true);
body.addBox(-6,-5,8, 1, 10, 22);
body.setTextureOffset( 0, 171,true);
body.addBox(7,-2,-7, 16, 1, 27);
body.setTextureOffset( 0, 206,true);
body.addBox(-22,-2,-7, 16, 1, 27);
body.setTextureOffset( 125, 118,true);
body.addBox(20,-3,-5, 30, 1, 27);
body.setTextureOffset( 125, 160,true);
body.addBox(-49,-3,-5, 30, 1, 27);
body.setTextureOffset( 312, 73,true);
body.addBox(47,-2,-6, 25, 1, 24);
body.setTextureOffset( 312, 120,true);
body.addBox(-70,-2,-6, 25, 1, 24);
body.setTextureOffset( 197, 39,true);
body.addBox(-5,23,4, 4, 1, 4);
body.setTextureOffset( 197, 39,true);
body.addBox(3,23,4, 4, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-3,23,8, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(4,23,8, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(-5,23,1, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(-2,23,1, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(3,23,1, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(6,23,1, 1, 1, 6);
}	  
	  
function addArticunoRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(512,256);
var body = model.getPart("body").clear().setTextureSize(512,256);
var rArm = model.getPart("rightArm").clear().setTextureSize(512,256);
var lArm = model.getPart("leftArm").clear().setTextureSize(512,256);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(512,256);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(512,256);
body.setTextureOffset( 67, 0,true);
body.addBox(-6,-5,-9, 13, 10, 16);
body.setTextureOffset( 0, 0,true);
body.addBox(-5,5,4, 4, 7, 4);
body.setTextureOffset( 0, 0,true);
body.addBox(3,5,4, 4, 7, 4);
body.setTextureOffset( 0, 44,true);
body.addBox(-5,-4,-10, 11, 8, 1);
body.setTextureOffset( 0, 68,true);
body.addBox(-4,-4.5,-12, 9, 7, 2);
body.setTextureOffset( 0, 98,true);
body.addBox(-3.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 98,true);
body.addBox(4.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 129,true);
body.addBox(-2.5,-5,-14, 6, 6, 2);
body.setTextureOffset( 160, 2,true);
body.addBox(-1.5,-5,-20, 4, 4, 6);
body.setTextureOffset( 214, 0,true);
body.addBox(-3,-6.5,-27, 7, 7, 7);
body.setTextureOffset( 30, 0,true);
body.addBox(-2.5,-6,-32, 6, 6, 5);
body.setTextureOffset( 166, 42,true);
body.addBox(-0.5,-4,-36, 2, 3, 4);
body.setTextureOffset( 38, 100,true);
body.addBox(4,-3,-11, 19, 1, 4);
body.setTextureOffset( 38, 100,true);
body.addBox(-22,-3,-11, 19, 1, 4);
body.setTextureOffset( 44, 120,true);
body.addBox(20,-4,-10, 30, 1, 5);
body.setTextureOffset( 44, 120,true);
body.addBox(-49,-4,-10, 30, 1, 5);
body.setTextureOffset( 43, 151,true);
body.addBox(47,-3,-9, 11, 1, 3);
body.setTextureOffset( 43, 151,true);
body.addBox(-57,-3,-9, 11, 1, 3);
body.setTextureOffset( 264, 0,true);
body.addBox(-5,-4,7, 11, 8, 3);
body.setTextureOffset( 145, 87,true);
body.addBox(-3.5,-4,10, 8, 2, 12);
body.setTextureOffset( 0, 171,true);
body.addBox(7,-2,-7, 16, 1, 26);
body.setTextureOffset( 0, 206,true);
body.addBox(-22,-2,-7, 16, 1, 26);
body.setTextureOffset( 125, 118,true);
body.addBox(20,-3,-5, 30, 1, 26);
body.setTextureOffset( 125, 160,true);
body.addBox(-49,-3,-5, 30, 1, 26);
body.setTextureOffset( 312, 73,true);
body.addBox(47,-2,-6, 37, 1, 23);
body.setTextureOffset( 312, 120,true);
body.addBox(-86,-2,-6, 37, 1, 23);
body.setTextureOffset( 197, 39,true);
body.addBox(-5,23,4, 4, 1, 4);
body.setTextureOffset( 197, 39,true);
body.addBox(3,23,4, 4, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-3,23,8, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(4,23,8, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-5,23,2, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-2,23,2, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(3,23,2, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(6,23,2, 1, 1, 4);
body.setTextureOffset( 50, 39,true);
body.addBox(-3.5,-8,-30, 8, 3, 8);
body.setTextureOffset( 264, 178,true);
body.addBox(-4.5,-5,18.53333, 10, 1, 45);
}

function addGyaradosRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(512,256);
var body = model.getPart("body").clear().setTextureSize(512,256);
var rArm = model.getPart("rightArm").clear().setTextureSize(512,256);
var lArm = model.getPart("leftArm").clear().setTextureSize(512,256);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(512,256);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(512,256);
body.setTextureOffset( 0, 56);
body.addBox(-5,15,-5, 10, 9, 11);
body.setTextureOffset( 0, 100);
body.addBox(-5,13,6, 10, 9, 10);
body.setTextureOffset( 0, 138);
body.addBox(-4.5,11,16, 9, 8, 9);
body.setTextureOffset( 0, 138);
body.addBox(-4.5,5,21, 9, 8, 9);
body.setTextureOffset( 0, 138);
body.addBox(-4.5,1,26, 9, 8, 9);
body.setTextureOffset( 0, 0);
body.addBox(-4,2,34, 8, 7, 8);
body.setTextureOffset( 0, 0);
body.addBox(-4,5,38, 8, 7, 8);
body.setTextureOffset( 61, 100);
body.addBox(-5,11,-15, 10, 10, 10);
body.setTextureOffset( 0, 100);
body.addBox(-5,4,-19, 10, 9, 10);
body.setTextureOffset( 0, 100);
body.addBox(-5,-3,-22, 10, 9, 10);
body.setTextureOffset( 86, 0);
body.addBox(-4.4,-10,-25, 9, 10, 10);
body.setTextureOffset( 75, 46);
body.addBox(-5,-15,-28, 10, 9, 11);
body.setTextureOffset( 149, 0);
body.addBox(-6,-19,-38, 12, 12, 11);
body.setTextureOffset( 69, 0);
body.addBox(6,-8,-37, 1, 16, 1);
body.setTextureOffset( 69, 0);
body.addBox(-7,-8,-37, 1, 16, 1);
body.setTextureOffset( 221, 0);
body.addBox(-1,-24,-21, 1, 9, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-21,-24, 1, 6, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-20,-19, 1, 7, 3);
body.setTextureOffset( 271, 0);
body.addBox(5,-9,-32, 6, 8, 1);
body.setTextureOffset( 271, 0);
body.addBox(-11,-9,-32, 6, 8, 1);
body.setTextureOffset( 167, 44);
body.addBox(-6,-7,-45, 12, 1, 8);
body.setTextureOffset( 0, 32);
body.addBox(-3.5,9,43, 7, 5, 9);
body.setTextureOffset( 139, 75,true);
body.addBox(-6,12,52, 14, 13, 1);
body.setTextureOffset( 233, 26);
body.addBox(-1,-1,-12, 1, 4, 10);
body.setTextureOffset( 221, 0);
body.addBox(-1,-8,30, 1, 9, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-5,27, 1, 6, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-4,33, 1, 6, 3);
body.setTextureOffset( 46, 0);
body.addBox(5,-14,-39, 1, 7, 1);
body.setTextureOffset( 46, 0);
body.addBox(-6,-14,-39, 1, 7, 1);
body.setTextureOffset( 0, 166);
body.addBox(-6,-14,-39, 12, 1, 1);
body.setTextureOffset( 81, 129);
body.addBox(-2,-20,-37, 4, 1, 13);
}


function addPikachuToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
body.setTextureSize(64,33);
head.setTextureSize(64,33);
rLeg.setTextureSize(64,33);
lLeg.setTextureSize(64,33);
rArm.setTextureSize(64,33);
lArm.setTextureSize(64,33);
head.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, 13.5, -4.3, 8, 7, 6,-0.5);

head.setTextureOffset(0, 13);
head.addBox(-3,10,-1.3,1,4,2);

head.setTextureOffset(6, 13);
head.addBox(2,10,-1.3,1,4,2);

head.setTextureOffset(0, 0);
head.addBox(-1.5, 17, -4, 3, 2, 1,0.2);
head.setRotationPoint(0,0,-8);

body.clear();
body.setTextureOffset( 0, 22);
body.addBox(-3.5, 14.5, -7, 7, 6, 5,0.1);  
body.setTextureOffset( 24, 19);
body.addBox(-4, 14, -2, 8, 7, 7,0);  

body.setTextureOffset(22, 0);
body.addBox(-0.5, 14.5, 5, 1, 1, 2);  

body.setTextureOffset( 28, 0);
body.addBox(-0.5, 13.5, 6, 1, 1, 2);

body.setTextureOffset( 36, 0);
body.addBox(-0.5, 11.5, 7, 1, 2, 4);

body.setTextureOffset( 28, 0);
body.addBox(-0.5, 8.5, 9, 1, 3, 6);

rArm.clear();
rArm.setTextureOffset(11,0);
rArm.addBox(1, 3, -5, 2, 6, 2);

rArm.setTextureOffset(11,0);
rArm.addBox(8, 7, 2, 2, 2, 2);
rArm.setTextureOffset(11,0);
rArm.addBox(8, 2, 0.2, 2, 5, 4);
rArm.setRotationPoint(0,15,0);
lArm.clear(); 
lArm.setTextureOffset(11,0);
lArm.addBox(-3, 3, -5, 2, 6, 2);

lArm.setTextureOffset(11,0);
lArm.addBox(-10, 7, 2, 2, 2, 2);
lArm.setTextureOffset(11,0);
lArm.addBox(-10, 2, 0.2, 2, 5, 4);//-para meter
lArm.setRotationPoint(0,15,0);

rLeg.clear(); 
lLeg.clear(); 
}

function addLaprasRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(256,128);
var body = model.getPart("body").clear().setTextureSize(256,128);
var rArm = model.getPart("rightArm").clear().setTextureSize(256,128);
var lArm = model.getPart("leftArm").clear().setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(256,128);
body.setTextureOffset( 0, 95);
body.addBox(-9,16,-8, 18, 8, 22);
body.setTextureOffset( 91, 83);
body.addBox(-3,-3,-10, 6, 25, 6);
body.setTextureOffset( 0, 61);
body.addBox(-10,14,-3, 20, 4, 22);
body.setTextureOffset( 64, 0);
body.addBox(9,22,-7, 10, 2, 5);
body.setTextureOffset( 64, 0);
body.addBox(-19,22,-7, 10, 2, 5);
body.setTextureOffset( 64, 0);
body.addBox(7,22,10, 10, 2, 5);
body.setTextureOffset( 64, 0);
body.addBox(-17,22,10, 10, 2, 5);
body.setTextureOffset( 100, 0);
body.addBox(-9,12,-2, 18, 2, 11);
body.setTextureOffset( 100, 0);
body.addBox(-9,13,5, 18, 1, 11);
body.setTextureOffset( 0, 0);
body.addBox(-7,18,14, 14, 6, 3);
body.setTextureOffset( 90, 26);
body.addBox(-1.5,19,17, 3, 5, 9);
body.setTextureOffset( 170, 0);
body.addBox(-3,-9,-12, 6, 7, 7);
body.setTextureOffset( 133, 31);
body.addBox(-3,-9,-17, 6, 9, 7);
body.setTextureOffset( 0, 31);
body.addBox(-3,-6,-20, 6, 6, 3);
body.setTextureOffset( 32, 23);
body.addBox(3,-12,-11, 1, 11, 5);
body.setTextureOffset( 32, 23);
body.addBox(-4,-12,-11, 1, 11, 5);
body.setTextureOffset( 0, 20);
body.addBox(-0.5,-12,-18, 1, 4, 2);
body.setTextureOffset( 27, 67);
body.addBox(-1,9,0, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(4,10,0, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-7,10,0, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-1,11,7, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-7,11,7, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(4,11,7, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-1,11,13, 3, 3, 3);
}

function addEeveeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(128,64);
var body = model.getPart("body").clear().setTextureSize(128,64);
var rArm = model.getPart("rightArm").clear().setTextureSize(128,64);
var lArm = model.getPart("leftArm").clear().setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(128,64);
body.setTextureOffset( 72, 41,true);
body.addBox(-3,12,-6, 6, 6, 12);
body.setTextureOffset( 51, 0,true);
body.addBox(-3.5,10,4, 7, 6, 6);
body.setTextureOffset( 0, 27,true);
body.addBox(2,16,3, 2, 3, 4);
body.setTextureOffset( 0, 27,true);
body.addBox(-4,16,3, 2, 3, 4);
body.setTextureOffset( 34, 33,true);
body.addBox(-3,7,-9, 6, 6, 6);
body.setTextureOffset( 80, 0,true);
body.addBox(-4,11,-7, 8, 8, 7);
body.setTextureOffset( 7, 49,true);
body.addBox(2.5,18,-6, 2, 6, 2);
body.setTextureOffset( 7, 49,true);
body.addBox(-4.5,18,-6, 2, 6, 2);
body.setTextureOffset( 7, 49,true);
body.addBox(2,19,5.5, 2, 5, 2);
body.setTextureOffset( 7, 49,true);
body.addBox(-4,19,5.5, 2, 5, 2);
body.setTextureOffset( 0, 0,true);
body.addBox(-2,9,9, 4, 4, 5);
body.setTextureOffset( 0, 73,true);
body.addBox(2,0,-6, 7, 9, 1);
body.setTextureOffset( 0, 94,true);
body.addBox(-9,0,-6, 7, 9, 1);
body.setTextureOffset( 18, 35,true);
body.addBox(-1,7,13, 2, 3, 2);
body.setTextureOffset(0,40,true);
body.addBox(-1.5,11,-10, 3, 2, 1);
}



function addRattataRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(128,64);
var body = model.getPart("body").clear().setTextureSize(128,64);
var rArm = model.getPart("rightArm").clear().setTextureSize(128,64);
var lArm = model.getPart("leftArm").clear().setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(128,64);
body.setTextureOffset( 0, 0,true);
body.addBox(-2,16,-8, 4, 4, 4);
body.setTextureOffset(0,16,true);
body.addBox(-3,17,-5,6,4,8);
body.setTextureOffset(32,0,true);
body.addBox(-3,20,-5,2,4,2);
body.setTextureOffset(32,0,true);
body.addBox(1,20,-5,2,4,2);
body.setTextureOffset(32,0,true);
body.addBox(1,20,1,2,4,2);
body.setTextureOffset(32, 0,true);
body.addBox(-3,20,1,2,4,2);
body.setTextureOffset( 0, 34,true);
body.addBox(-1.5,18,-10,3,3,2);
body.setTextureOffset( 61,0,true);
body.addBox(-1,10,0,1,8,6);
body.setTextureOffset(0,47,true);
body.addBox(1,13,-6, 4,4,1);
body.setTextureOffset(0,55,true);
body.addBox(-5,13,-6,4,4,1);
}

function addSandshrewToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
head.setTextureOffset(0, 0);
head.addBox(-3, 13.5, -4.3, 6, 5, 6);

head.setTextureOffset(10, 11);
head.addBox(-2.8,12.8,-1.3,1,2,2);
head.setTextureOffset(16, 11);
head.addBox(1.8,12.8,-1.3,1,2,2);

head.setTextureOffset(0, 11);
head.addBox(-1.5, 15.5, -6.2, 3, 3, 2,0.2);
head.setRotationPoint(0,0,-8);

body.clear();
body.setTextureOffset( 24, 14);
body.addBox(-3.5, 14.5, -7, 7, 6, 5,0.1);  
body.setTextureOffset( 24, 0);
body.addBox(-4, 14, -2, 8, 7, 7,0);  

body.setTextureOffset(18, 0);
body.addBox(-1, 15, 8, 2, 2, 3,0.2);  
body.setTextureOffset(0, 16);
body.addBox(-2, 14.6, 5, 4, 4, 3,0.2);  


rArm.clear();
rArm.setTextureOffset(0,23);
rArm.addBox(1, 3, -5, 2, 6, 2);

rArm.setTextureOffset(0,27);
rArm.addBox(8, 7, 2, 2, 2, 2);
rArm.setTextureOffset(10,23);
rArm.addBox(8, 2, 0.2, 2, 5, 4);
rArm.setRotationPoint(0,15,0);
lArm.clear(); 
lArm.setTextureOffset(0,23);
lArm.addBox(-3, 3, -5, 2, 6, 2);

lArm.setTextureOffset(0,27);
lArm.addBox(-10, 7, 2, 2, 2, 2);
lArm.setTextureOffset(10,23);
lArm.addBox(-10, 2, 0.2, 2, 5, 4);//-para meter
lArm.setRotationPoint(0,15,0);

rLeg.clear(); 
lLeg.clear(); 
}




function addTangelaToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
body.setTextureSize(64,64);
head.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
rArm.setTextureSize(64,64);
lArm.setTextureSize(64,64);

head.clear();
body.clear();
body.setTextureOffset( 0, 16);
body.addBox(-3.5, 15, -3.5, 7, 7, 7, -0.2);  
body.setTextureOffset( 0, 0, true);
body.addBox(-4, 14.5, -4, 8, 8, 8,0);  

rArm.clear();
rArm.setTextureOffset(0,30);
rArm.addBox(1.5, 3, -2, 3, 1, 4);

rArm.setRotationPoint(0,20,0);

lArm.clear(); 
lArm.setTextureOffset(0,30);
lArm.addBox(-4.5, 3, -2, 3, 1, 4);

lArm.setRotationPoint(0,20,0);

rLeg.clear(); 
lLeg.clear(); 
}




function addRaichuToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

body.setTextureSize(64,64);
head.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
rArm.setTextureSize(64,64);
lArm.setTextureSize(64,64);

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, 2, -5, 8, 8, 8, -1);

head.setTextureOffset(0, 16,true);
head.addBox(-7.8,-1,-0.5,5,5,1);
head.setTextureOffset(0, 22,true);
head.addBox(2.8,-1,-0.5,5,5,1);

head.setTextureOffset(0, 0);
head.addBox(-1.5, 5.9, -4.5, 3, 3, 1);
head.setRotationPoint(0,0,0);

body.clear();
body.setTextureOffset( 32, 0);
body.addBox(-3.5, 9, -3.5, 7, 6, 6,0); 
body.setTextureOffset( 32, 12);
body.addBox(-3.5, 13, -3.5, 7, 6, 6,0.4);  
body.setTextureOffset( 9, 14,true);
body.addBox(0, 9, 2.9, 1, 8, 12);  

rArm.clear();
rArm.setTextureOffset(24,0);
rArm.addBox(-0.5, -1, -5, 2, 2, 5);
rArm.setRotationPoint(0,11,0);

lArm.clear(); 
lArm.setTextureOffset(24,0);
lArm.addBox(-1.5, -1, -5, 2, 2, 5);
lArm.setRotationPoint(0,11,0);

rLeg.clear(); 
rLeg.setTextureOffset(0,34);
rLeg.addBox(-2.9, 3, -3, 2, 5, 5);
rLeg.setTextureOffset(8,0);
rLeg.addBox(-2.9, 8, -1, 2, 3, 2);
rLeg.setTextureOffset(27,3);
rLeg.addBox(-2.9, 10, -3, 2, 1, 2);

lLeg.clear(); 
lLeg.setTextureOffset(0,34);
lLeg.addBox(0.9, 3, -3, 2, 5, 5);
lLeg.setTextureOffset(8,0);
lLeg.addBox(0.9, 8, -1, 2, 3, 2);
lLeg.setTextureOffset(27,3);
lLeg.addBox(0.9, 10, -3, 2, 1, 2);
}

function addElectrodeRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(20, 0, true);
body.addBox(-5, 10, -5, 10, 10, 10, 3);
body.addBox(-5, 8.1, -5, 10, 10, 10, 2);
body.addBox(-5, 11.9, -5, 10, 10, 10, 2);
body.addBox(-6.9, 10, -5, 10, 10, 10, 2);
body.addBox(-3.1, 10, -5, 10, 10, 10, 2);
body.addBox(-5, 10, -3.1, 10, 10, 10, 2);
body.setTextureOffset(0, 0, true);
body.addBox(-5, 10, -6.9, 10, 10, 10, 2);
body.setTextureOffset(0, 10, true);
body.addBox(-5, 13, -9.01, 10, 10, 10, -1);
body.addBox(-2, 13, -9.01, 10, 10, 10, -1);
body.addBox(-8, 13, -9.01, 10, 10, 10, -1);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

}



function addVoltorbRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-5, 13, -6.5, 10, 10, 10, -1);
body.setTextureOffset(20, 0, true);
body.addBox(-5, 13, -5, 10, 10, 10, -0.3);
body.addBox(-5, 11.5, -5, 10, 10, 10, -1);
body.addBox(-5, 14.5, -5, 10, 10, 10, -1);
body.addBox(-3.5, 13, -5, 10, 10, 10, -1);
body.addBox(-6.5, 13, -5, 10, 10, 10, -1);
body.addBox(-5, 13, -3.5, 10, 10, 10, -1);
body.setTextureOffset(0, 10, true);
body.addBox(-5, 13.2, -6.3, 10, 10, 10, -1.1);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

}

function addSquirtleRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabarazon 1
body.setTextureOffset(0, 27, true);
body.addBox(-5,9,-4,10, 11, 2);

//cabarazon 2
body.setTextureOffset(0, 47, true);
body.addBox(-4,9,-2,8,10,3);

//cabarazon 3
body.setTextureOffset(25, 52, true);
body.addBox(-4,9,-5,8, 10, 1);

//cola
body.setTextureOffset(47, 52, true);
body.addBox(-1.5,16,-2,3, 4, 7);

//cabeza
body.setTextureOffset(0, 0, true);
body.addBox(-2.5,4,-6,5, 5, 5);

//pies
body.setTextureOffset(35, 0, true);
body.addBox(-4,19,-5,2, 5, 2);
body.addBox(2,19,-5,2, 5, 2);

//brazos
body.setTextureOffset(58, 0, true);
body.addBox(4,11,-8,2, 2, 5);
body.addBox(-6,11,-8,2, 2, 5);
}

function addWartortleRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//
body.setTextureOffset(0, 27, true);
body.addBox(-5,7,-4,10, 13, 2);


//
body.setTextureOffset(0, 47, true);
body.addBox(-4.5,7,-2,9, 12, 4);

//
body.setTextureOffset(33, 35, true);
body.addBox(-4,8,-5,8, 11, 1);

//
body.setTextureOffset(0, 0, true);
body.addBox(-3.5,0,-6,7, 7, 7);

//
body.setTextureOffset(35, 0, true);
body.addBox(-5,19,-5,3, 5, 3);
body.addBox(2,19,-5,3, 5, 3);

//
body.setTextureOffset(58, 0, true);
body.addBox(4,8,-9,3, 3, 6);
body.addBox(-7,8,-9,3, 3, 6);

//
body.setTextureOffset(90, 0, true);
body.addBox(3.5,-4,-4,1, 7, 8);


//
body.setTextureOffset(90, 23, true);
body.addBox(-4.5,-4,-4,1, 7, 8);

//
body.setTextureOffset(54, 30, true);
body.addBox(0,4,2,1, 15, 15);
}

function addBlastoiseRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
body.setTextureOffset( 0, 0);
body.addBox(-11,-12,-8, 23, 28, 16);
body.setTextureOffset( 83, 0);
body.addBox(-4,-19,-11, 10, 10, 9);
body.setTextureOffset( 126, 0);
body.addBox(-2.5,-15,-13, 7, 6, 2);
body.setTextureOffset( 0, 58);
body.addBox(-14,11,-4, 8, 13, 8);
body.setTextureOffset( 0, 58);
body.addBox(6,11,-4, 8, 13, 8);
body.setTextureOffset( 161, 0);
body.addBox(-12,-13,-1, 25, 30, 1);
body.setTextureOffset( 0, 0);
body.addBox(-5,-21,-7, 4, 4, 1);
body.setTextureOffset( 67, 2);
body.addBox(3,-21,-7, 4, 4, 1);
body.setTextureOffset( 53, 74);
body.addBox(7,-17,0, 6, 6, 6);
body.setTextureOffset( 53, 74);
body.addBox(-12,-17,0, 6, 6, 6);
body.setTextureOffset( 88, 97);
body.addBox(-11,-16,-6, 3, 3, 6);
body.setTextureOffset( 88, 97);
body.addBox(9,-16,-6, 3, 3, 6);
body.setTextureOffset( 121, 40);
body.addBox(-13,-17,-12, 5, 5, 6);
body.setTextureOffset( 121, 40);
body.addBox(9,-17,-12, 5, 5, 6);
body.setTextureOffset( 82, 48);
body.addBox(-3.5,11,6, 6, 6, 6);
body.setTextureOffset( 0, 88);
body.addBox(-15,-8,-16, 6, 6, 15);
body.setTextureOffset( 42, 100);
body.addBox(10,-8,-16, 6, 6, 15);
}


function addWeepinbellRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//
body.setTextureOffset(46, 0, true);
body.addBox(-5,14,-8,10, 10, 1);

//
body.setTextureOffset(0, 0, true);
body.addBox(-4,15,-7,8, 8, 14);

//
body.setTextureOffset(0,32,true);
body.addBox(-3.5,5,0,7,10,7);

//
body.setTextureOffset(0,0,true);
body.addBox(0.5,8,-1, 3, 3, 1);
body.addBox(-3.5,8,-1, 3, 3, 1);

//
body.setTextureOffset(73, 0,true);
body.addBox(-3,4,1, 6, 1, 5);

//
body.setTextureOffset(100, 0,true);
body.addBox(-1,0,3, 2, 4, 2);

//
body.setTextureOffset(54, 28,true);
body.addBox(-5,10,2, 1, 8, 14);

//
body.setTextureOffset(91, 28,true);
body.addBox(4,10,2, 1, 8, 14);
}

function addButterfreeRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//
body.setTextureOffset(0, 22, true);
body.addBox(-4,17,0,2, 6, 2);
body.addBox(2,17,0,2, 6, 2);

//
body.setTextureOffset(0, 37, true);
body.addBox(-3.5,10,-3,7, 7, 7);

//
body.setTextureOffset(0, 0, true);
body.addBox(-3.5,2,-3,7, 7, 7);

//
body.setTextureOffset(33, 0, true);
body.addBox(-4,3,-4,3, 3, 1);
body.addBox(1,3,-4,3, 3, 1);

//
body.setTextureOffset(46, 0, true);
body.addBox(-1.5,7,-4, 3, 2, 11);

//
body.setTextureOffset(64, 0, true);
body.addBox(-3,10,-5, 2, 2, 2);
body.addBox(1,10,-5, 2, 2, 2);

//
body.setTextureOffset(26, 18, true);
body.addBox(-3,9,-2, 6, 1, 6);

//
body.setTextureOffset(89, 0, true);
body.addBox(-2.5,-9, -1, 1, 11, 1);
body.addBox(1.5,-9,-1, 1, 11, 1);

//
body.setTextureOffset(35, 37, true);
body.addBox(-12,-1,4, 24, 20, 1);
}

function addGastlyRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 48, 15, true);
body.addBox(-5,7,-1, 1, 9, 8);
body.setTextureOffset( 31, 15, true);
body.addBox(2,7,-2, 1, 9, 8);
body.setTextureOffset( 40, 0, true);
body.addBox(-4,9,-3, 6, 7, 6);
body.setTextureOffset( 2, 9, true);
body.addBox(-3.5,10,3, 5, 5, 1);
body.setTextureOffset( 2, 1, true);
body.addBox(-3.5,10,-4, 5, 5, 1);
body.setTextureOffset( 27, 0, true);
body.addBox(2,10,-2.5, 1, 5, 5);
body.setTextureOffset( 27, 0, true);
body.addBox(-5,10,-2.5, 1, 5, 5);
body.setTextureOffset( 31, 15, true);
body.addBox(0,7,0, 1, 9, 8);
body.setTextureOffset( 31, 15, true);
body.addBox(-3,7,0, 1, 9, 8);
body.setTextureOffset( 42, 20, true);
body.addBox(-6,7,-3, 10, 11, 1);
body.setTextureOffset( 4, 22, true);
body.addBox(-3,11,-4.5, 1, 1, 1);
body.setTextureOffset( 4, 22, true);
body.addBox(0,11,-4.5, 1, 1, 1);
body.setTextureOffset( 11, 26, true);
body.addBox(-3,13,-4.5, 4, 2, 0);
}

function addHitmonleeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 16, 4, true);
body.addBox(-4,-4,-2, 8, 18, 4);
body.setTextureOffset( 45, 16, true);
body.addBox(4,-0.5,-1, 2, 12, 2);
body.setTextureOffset( 45, 16, true);
body.addBox(-6,-0.5,-1, 2, 12, 2);
body.setTextureOffset( 0, 16, true);
body.addBox(-3,14,-1, 2, 10, 2);
body.setTextureOffset( 0, 16, true);
body.addBox(1,14,-1, 2, 10, 2);
body.setTextureOffset( 52, 0, true);
body.addBox(4,-2,-1.5, 3, 3, 3);
body.setTextureOffset( 52, 0, true);
body.addBox(-7,-2,-1.5, 3, 3, 3);
body.setTextureOffset( 52, 0, true);
body.addBox(-3.5,14,-1.5, 3, 3, 3);
body.setTextureOffset( 52, 0, true);
body.addBox(0.5,14,-1.5, 3, 3, 3);
}



function addWeedleRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 45, 0, true);
body.addBox(-2,15,-10.533334, 5, 5, 5);
body.setTextureOffset( 32, 36, true);
body.addBox(-0.5,22,4, 2, 2, 2);
body.setTextureOffset( 32, 42, true);
body.addBox(-0.5,21,5, 2, 2, 2);
body.setTextureOffset( 10, 0, true);
body.addBox(0,13,-9, 1, 2, 1);
body.setTextureOffset( 18, 0, true);
body.addBox(-0.5,18,-11, 2, 1, 1);
body.setTextureOffset( 26, 0, true);
body.addBox(-1.5,19,-7, 4, 4, 4);
body.setTextureOffset( 26, 10, true);
body.addBox(-1.5,20,-5, 4, 4, 4);
body.setTextureOffset( 29, 21, true);
body.addBox(-1,21,-1, 3, 3, 3);
body.setTextureOffset( 30, 30, true);
body.addBox(-1,22,2, 3, 2, 2);
body.setTextureOffset( 10, 0, true);
body.addBox(0,19,6, 1, 2, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-1,21,-8, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(1,21,-8.2, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,22,-7, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,-5, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,-2, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,3, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,0, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,22,-7, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,-5, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,-2, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,0, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,3, 1, 1, 1);
}

function addRaticateRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 83, 0, true);
body.addBox(-3.5,11,-4, 6, 6, 7);
body.setTextureOffset( 54, 16, true);
body.addBox(-4,14,-2, 7, 9, 7);
body.setTextureOffset( 46, 2, true);
body.addBox(-4,18,-3, 2, 2, 2);
body.setTextureOffset( 46, 2, true);
body.addBox(1,18,-3, 2, 2, 2);
body.setTextureOffset( 20, 14, true);
body.addBox(0,23,-1, 2, 1, 4);
body.setTextureOffset( 20, 14, true);
body.addBox(-4,23,-1, 2, 1, 4);
body.setTextureOffset( 0, 0, true);
body.addBox(-3,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(-4,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(0,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(1,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,-3, 0, 1, 2);
body.setTextureOffset( 36, 19, true);
body.addBox(-3,6,0, 0, 6, 7);
body.setTextureOffset( 36, 19, true);
body.addBox(2,6,0, 0, 6, 7);
body.setTextureOffset( 68, 0, true);
body.addBox(-2,13,-6, 3, 4, 2);
body.setTextureOffset( 41, 9, true);
body.addBox(-1.5,20,5, 2, 2, 2);
body.setTextureOffset( 33, 3, true);
body.addBox(-1,20,7, 1, 1, 2);
}

function addZubatRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 20, 0 ,true);
body.addBox(-1.5,9,-1, 3, 5, 2);
body.setTextureOffset( 0, 6 ,true);
body.addBox(1.5,8,0, 10, 6, 0);
body.setTextureOffset( 0, 0 ,true);
body.addBox(-11.5,8,0, 10, 6, 0);
body.setTextureOffset( 27, 8 ,true);
body.addBox(1,7,0, 3, 3, 0);
body.setTextureOffset( 20, 8 ,true);
body.addBox(-4,7,0, 3, 3, 0);
body.setTextureOffset( 0, 19 ,true);
body.addBox(1,14,-1, 0, 4, 1);
body.setTextureOffset( 0, 19 ,true);
body.addBox(-1,14,-1, 0, 4, 1);
}

function addVileplumeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 42, 0 ,true);
body.addBox(-0.5,17,-3, 4, 6, 6);
body.setTextureOffset( 26, 13 ,true);
body.addBox(1.5,23,1, 3, 1, 1);
body.setTextureOffset( 26, 16 ,true);
body.addBox(1.5,23,-2, 3, 1, 1);
body.setTextureOffset( 5, 0 ,true);
body.addBox(-3,16,-4.5, 9, 1, 9);
body.setTextureOffset( 42, 14 ,true);
body.addBox(-1,15,-2.5, 5, 1, 5);
body.setTextureOffset( 15, 27 ,true);
body.addBox(1,19,3, 1, 3, 1);
body.setTextureOffset( 20, 27 ,true);
body.addBox(1,19,-4, 1, 3, 1);
}