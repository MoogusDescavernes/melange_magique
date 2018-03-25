// ==UserScript==
// @name         [Mountyhall] Assistant Mélange Magique
// @namespace    Mountyhall
// @description  Assistant Mélange Magique & Affichage % de stabilisation des compos
// @author       Dabihul
// @version      2.0a.1.17
// @include      */mountyhall/MH_Taniere/TanierePJ_o_Stock*
// @include      */mountyhall/MH_Comptoirs/Comptoir_o_Stock*
// @include      */mountyhall/MH_Follower/FO_Equipement*
// @include      */mountyhall/MH_Play/Play_e_follo*
// @include      */mountyhall/View/TaniereDescription*
// @include      */mountyhall/MH_Play/Play_equipement*
// @include      */mountyhall/MH_Play/Actions/Competences/Play_a_CompetenceYY*
// @grant        none
// ==/UserScript==


//---------------------------- Variables Globales ----------------------------//

var WHEREARTTHOU = window.location.pathname;
window.console.debug("[mmassistant] script ON! sur : "+WHEREARTTHOU);

var numTroll; // définie dans le main avec getNumTroll()

//----------------------------- Bases de données -----------------------------//

var niveauDuMonstre = {
	"Abishaii Bleu":19,
	"Abishaii Noir":10,
	"Abishaii Rouge":23,
	"Abishaii Vert":15,
	"Ame-en-peine":8,
	"Amibe Geante":9,
	"Anaconda des Catacombes":8,
	"Ankheg":10,
	"Anoploure Purpurin":36,
	"Aragnarok du Chaos": 16,
	"Araignee Geante":2,
	"Ashashin":35,
	"Balrog":50,
	"Banshee":16,
	"Barghest":36,
	"Basilisk":11,
	"Behemoth":34,
	"Behir":14,
	"Beholder":50,
	"Boggart":3,
	"Bondin":9,
	"Bouj'Dla":19,
	"Bouj'Dla Placide":37,
	"Bulette":19,
	"Caillouteux":1,
	"Capitan":35,
	"Carnosaure":25,
	"Champi-Glouton":3,
	"Chauve-Souris Geante":4,
	"Cheval a Dents de Sabre":23,
	"Chevalier du Chaos":20,
	"Chimere":13,
	"Chonchon":24,
	"Coccicruelle":22,
	"Cockatrice":5,
	"Crasc":10,
	"Crasc Maexus":25,
	"Crasc Medius":17,
	"Croquemitaine":6,
	"Cube Gelatineux":32,
	"Daemonite":27,
	"Diablotin":5,
	"Dindon du Chaos":1,
	"Djinn":29,
	"Ectoplasme":18,
	"Effrit":27,
	"Elementaire d'Air":23,
	"Elementaire d'Eau":17,
	"Elementaire de Feu":21,
	"Elementaire de Terre":21,
	"Elementaire du Chaos":26,
	"Erinyes":7,
	"Esprit-Follet":16,
	"Essaim Craterien":30,
	"Essaim Sanguinaire":25,
	"Ettin":8,
	"Familier":1,
	"Fantome":24,
	"Feu Follet":20,
	"Flagelleur Mental":33,
	"Foudroyeur":38,
	"Fumeux":22,
	"Fungus Geant":9,
	"Fungus Violet":4,
	"Furgolin":10,
	"Gargouille":3,
	"Geant de Pierre":13,
	"Geant des Gouffres":22,
	"Geck'oo Majestueux":40,
	"Geck'oo":15,
	"Glouton":20,
	"Gnoll":5,
	"Gnu Domestique":1,
	"Gnu Sauvage":1,
	"Goblin":4,
	"Goblours":4,
	"Golem d'Argile":15,
	"Golem de cuir":1,
	"Golem de Chair":8,
	"Golem de Fer":31,
	"Golem de metal":1,
	"Golem de mithril":1,
	"Golem de papier":1,
	"Golem de Pierre":23,
	"Gorgone":11,
	"Goule":4,
	"Gowap Apprivoise":1,
	"Gowap Sauvage":1,
	"Gremlins":3,
	"Gritche":39,
	"Grouilleux":4,
	"Grylle":31,
	"Harpie":4,
	"Hellrot":18,
	"Homme-Lezard":4,
	"Hurleur":8,
	"Hydre":50,
	"Incube":13,
	"Kobold":2,
	"Labeilleux":26,
	"Lezard Geant":5,
	"Liche":50,
	"Limace Geante":10,
	"Loup-Garou":8,
	"Lutin":4,
	"Mante Fulcreuse":30,
	"Manticore":9,
	"Marilith":33,
	"Meduse":6,
	"Megacephale":38,
	"Mille-Pattes Geant":14,
	"Mimique":6,
	"Minotaure":7,
	"Mohrg": 35,
	"Molosse Satanique":8,
	"Momie":4,
	"Monstre Rouilleur":3,
	"Mouch'oo Domestique":14,
	"Mouch'oo Majestueux Sauvage":33,
	"Mouch'oo Sauvage":14,
	"Naga":10,
//	"Na-Haniym-Heee":0,
	"Necrochore":37,
	"Necromant":39,
	"Necrophage":8,
	"Nuage d'Insectes":7,
	"Nuee de Vermine":13,
	"Ogre":7,
	"Ombre de Roches":13,
	"Ombre":2,
	"Orque":3,
	"Ours-Garou":18,
	"Palefroi Infernal":29,
	"Phoenix":32,
//	"Pititabeille":0,
	"Plante Carnivore":4,
	"Pseudo-Dragon":5,
	"Rat Geant":2,
	"Rat-Garou":3,
	"Rocketeux":5,
	"Sagouin":3,
	"Scarabee Geant":4,
	"Scorpion Geant":10,
	"Shai":28,
	"Sirene":8,
	"Slaad":5,
	"Sorciere":17,
	"Spectre":14,
	"Sphinx":30,
	"Squelette":1,
	"Strige":2,
	"Succube":13,
	"Tertre Errant":20,
	"Thri-kreen":10,
	"Tigre-Garou":12,
	"Titan":26,
	"Trancheur":35,
	"Tubercule Tueur":14,
	"Tutoki":4,
	"Vampire":29,
	"Ver Carnivore Geant":12,
	"Ver Carnivore":11,
	"Veskan Du Chaos":14,
	"Vouivre":33,
	"Worg":5,
	"Xorn":14,
	"Yeti":8,
	"Yuan-ti":15,
	"Zombie":2
}

var effetParQualite = {
	"Tres Bonne":20,
	"Bonne":16,
	"Moyenne":12,
	"Mauvaise":8,
	"Tres Mauvaise":4
}

var dureePotion = {
	"Dover Powa"            : 2,
	"Elixir de Bonne Bouffe": 5,
	"Elixir de Corruption"  : 4,
	"Elixir de Fertilite"   : 5,
	"Elixir de Feu"         : 5,
	"Elixir de Longue-Vue"  : 3,
	"Essence de KouleMann"  : 4,
	"Extrait de DjhinTonik" : 4,
	"Extrait du Glacier"    : 5,
	"Grippe en Conserve"    : 3,
	"Jus de Chronometre"    : 3,
	"Metomol"               : 2,
	"Pneumonie en Conserve" : 3,
	"Potion de Guerison"    : 0,
	"Potion de Painture"    : 0,
	"PufPuff"               : 3,
	"Rhume en Conserve"     : 3,
	"Sang de Toh Reroh"     : 4,
	"Sinne Khole"           : 2,
	"Toxine Violente"       : 0,
	"Voi'Pu'Rin"            : 2,
	"Zet Crakdedand"        : 3
}

//---------------------- Icone Mélange Magique (base64) ----------------------//

var iconeBase64 = "data:image/png;base64," +
	"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" +
	"MGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8" +
	"Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4Kt" +
	"guXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3E" +
	"Nz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/8" +
	"7fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHc" +
	"JnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9" +
	"MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsm" +
	"dlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUF" +
	"K4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1Yf" +
	"qGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N" +
	"2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7h" +
	"t7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw62" +
	"17nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x" +
	"92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4yd" +
	"lZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdO" +
	"o8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+" +
	"cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY" +
	"+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl" +
	"/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5" +
	"jz/GMzLdsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElN" +
	"RQfiAxkSIyf56Mf4AAACqUlEQVRYw82YT2sTQRjGn87srWAktFRi1YMgpDQEcvDoIRCwKI" +
	"J4VPADePNbiOeAR8Wb4EVyEBeCInioEFzSphrJwRBWQ0qaLeSgdjYewmwnk92Z2T9CB5bd" +
	"nZnd95nf++zMJMAZKStZvIQQMtP18X1fGcvKakTfn90Pri/dqOJd/WVwf6f+Xvu89b9JyH" +
	"2jyFhZBGOM4e+35wt1xdLFhXYAoJSmI6LDPhhNsaF43nY81Mq5ZKmJg/3KhXMAgB+/jgEA" +
	"B+4JcP1u0F4r50ApVRrW0iEHYIy93uijWimg2XKD9mqloBUBAEQ32sFoqmy3HS+4fnT7Mm" +
	"rlHKqVwgKN1PMIIWTGGIPteCgWrFPsQuHYORkunvfjQnRUiG4S4k6vN/o4cE/QbLnBwQNw" +
	"EZye2M+0GH01tXIOxYKFzfVVAAgCiKN92xqj2XKXPGI7Hm5W8lqPGKVG9kwYdsbYQlucLy" +
	"bWzDoYTbG5vhpgl43I08K9xFNkOx4YY6CUzlJ7xHY81Bt92I63hF02Kk9f5qsvT48KO5/I" +
	"uAjRtKYpskxFaLBD9lLYfKNKEYmDLyl2WUzY8kFMaUSJEKmkEUPSiEgqxsgjcUWEiXE/vp" +
	"lvGY6OQvt+HWDJL5ltFWUxXx5vRfYr5TeAWw+iPZKUhjJgSGmPh2afb3fSBgAMcX6pzZtM" +
	"AADHv8Oxv96FQCWFRwDgxZ8PuLp1DcBPAECv0w3axnuHyhfmt9dwDzsBkbDRK6d4npaH+0" +
	"+Wgs9FnQYSz3IRhZqKUM4jYnCZSH57TUtG5ZGw+kghKiJcjK60x8MgqHg2NmtmRJ7OTV/i" +
	"98JZXgAzJyLWU0ojD3nhI1FmG+8dotfp4vOrT+h1ugv1shjxLJLyfX8l6lDuR8K2hkmKyd" +
	"ZQuzGK8wsv6V8QZ7r8AzgV4fJtzqZQAAAAAElFTkSuQmCC";

//-------------------------- Utilitaires génériques --------------------------//

function epure(texte) {
	return texte.
		replace(/[àâä]/g,"a").replace(/Â/g,"A").
		replace(/[ç]/g,"c").
		replace(/[éêèë]/g,"e").
		replace(/[ïî]/g,"i").
		replace(/[ôöõ]/g,"o").
		replace(/[ùûü]/g,"u");
}

function getNumTroll() {
// Récupère le num de trõll dans la frame Menu
// Menu = top.frames["Sommaire"].document
// onclick du nom du trõll: "EnterPJView(numTroll,750,550)"
	var
		liens = top.frames["Sommaire"].document.getElementsByTagName("a"),
		str;
	if(liens.length>0 && liens[0].onclick!==undefined) {
		str = liens[0].onclick.toString();
		numTroll = parseInt(/\d+/.exec(str)[0]);
		window.console.debug("[mmassistant] numTroll = "+numTroll);
	}
}

//------------------------------ Gestion du DOM ------------------------------//

function appendText(paren, text, bold) {
	if(bold) {
		var b = document.createElement("b");
		b.appendChild(document.createTextNode(text));
		paren.appendChild(b);
	} else {
		paren.appendChild(document.createTextNode(text));
	}
}

//--------------- Fonctions d'affichage des % de Stabilisation ---------------//

function creerIconeMM() {
// Prépare l'icône à afficher pour les infos MM
	var img = new Image();
	img.src = iconeBase64;
	img.alt = "Mélange_Magique:";
	img.style.height = "20px";
	img.style.verticalAlign = "middle";
	return img;
}

function ajouteInfosDuCompo(node, objCompo) {
// Ajoute un span img + % avec titre d'infos de compo à la fin de node
	var
		bonusQualite = effetParQualite[objCompo.qualite],
		span = document.createElement("span"),
		str;
	appendText(node," ");
	span.appendChild(creerIconeMM());
	appendText(span," [-"+(objCompo.niveau+bonusQualite)+" %]");
	switch(objCompo.mob[0]) {
		case "A":
		case "E":
		case "I":
		case "O":
		case "U":
			str = "Compo d'";
			break;
		default:
			str = "Compo de ";
	}
	span.title =
		str+objCompo.mob+" : -"+objCompo.niveau+
		"\nQualité "+objCompo.qualite+" : -"+bonusQualite;
	node.appendChild(span);
}

function ajouteInfosDeLaPopo(node, objPopo) {
// Ajoute un span img avec titre d'infos de popos à la fin de node
	var	
		img = creerIconeMM(),
		titre = "Caracs: +"+objPopo.risque;
	if(objPopo.melange) {
		titre += "\nMélangée: +15";
	}
	if(objPopo.GPT) {
		titre += "\nFamille GPT: +40";
	}
	if(objPopo.zone) {
		titre += "\nDe Zone: +40";
	}
	img.title = titre+"\nDurée: +"+objPopo.duree;
	appendText(node," ");
	node.appendChild(img);
}

/*
 * Désactivé, en attente de refonte
 */
/*function getSetInfo(snap) {
// Extrait et affiche les infos MM d'un compo *dans un tr standard*
	if(isNaN(snap.childNodes[1].getElementsByTagName("img")[0].alt[0])) {
		// Si non identifié, on laisse
		return;
	}
	var
		node = snap.childNodes[5],
		mob = node.firstChild.textContent;
	mob = mob.slice(mob.indexOf("d'un")+5).trim();
	var
		niv = niveauDuMonstre[epure(mob)],
		qualite = snap.childNodes[7].textContent;
	qualite = qualite.slice(qualite.indexOf("Qualit")+9).trim();
	var effet = effetParQualite[epure(qualite)];
	if(niv && effet) {
		// Si compo référencé (mob en base), on affiche & stocke les infos
		addInfo(node, mob, niv, qualite, effet);
	}
}

function mmListeGowap() {
// Traitement de la page qui liste les gowaps
	try {
		// On extrait les nums de gowaps
		var gogoList = document.evaluate(
			".//form/table/descendant::table/tbody/tr/td[@class='mh_titre3']/a",
			document, null, 7, null
		);
		var gogoNumbers = [];
		for(var i=0 ; i<gogoList.snapshotLength ; i++) {
			gogoNumbers.push(parseInt(gogoList.snapshotItem(i).textContent));
		}
	} catch(e) {
		return;
	}

	// Puis pour chaque gowap, on recherche les compos portés et on traite
	for(var j=0 ; j<gogoNumbers.length ; j++) {
		var div = document.getElementById(
			"mh_"+gogoNumbers[j]+"_hidden_Composant"
		);
		if(!div) {
			continue;
		}
		var trList = document.evaluate("./table/tbody/tr", div, null, 7, null);
		if(!(trList.snapshotLength > 0)) {
			continue;
		}
		for(var i=0 ; i<trList.snapshotLength ; i++) {
			getSetInfo(trList.snapshotItem(i));
		}
	}
}

function mmEquipGowap() {
// Traitement de la page d'équipement d'un gowap
	try {
		// On récupère la liste des compos portés
		var trList = document.evaluate(
			".//p/table/tbody/tr/"+
			"td[contains(table/tbody/tr/td/b/text(),'Composant')]/"+
			"div/table/tbody/tr",
			document, null, 7, null
		);
	} catch(e) {
		return;
	}

	for(var i=0 ; i<trList.snapshotLength ; i++) {
		getSetInfo(trList.snapshotItem(i));
	}
}

function mmStockGT() {
// Traitement du stock de tanière perso (onglet tanière)
	try {
		// On récupère la liste des compos en stock
		var mainTab = document.getElementById("stock");
		var trList = document.evaluate("./tbody[2]/tr", mainTab, null, 7, null);
	} catch(e) {
		return;
	}

	for(var i=numCompo ; i<trList.snapshotLength ; i++) {
		getSetInfo(trList.snapshotItem(i));
		numCompo++;
	}
}

function mmViewTaniere() {
// Traitement de l'étal d'une tanière dans la vue (popup)
	try {
		var mainTab = document.
			getElementsByClassName("listeEquipement")[0].
			getElementsByTagName("table")[0];
		var trstart = document.evaluate(
			"./tbody/tr[@class='mh_tdtitre' and contains(td/b/text(),'Composant')]",
			mainTab, null, 9, null
		).singleNodeValue;
	} catch(e) {
		return;
	}
	
	var tr = trstart.nextSibling.nextSibling;
	while(tr && tr.className=="mh_tdpage") {
		// Les tr sont non-standard dans la vue,
		// il faut refaire l'extraction à la main
		var
			node = tr.getElementsByTagName("td")[2],
			txt = node.textContent,
			indQ = txt.indexOf("de Qualit"),
			mob = txt.slice(txt.indexOf("d'un")+5, indQ-1).trim(),
			niv = niveauDuMonstre[epure(mob)],
			qualite = txt.slice(indQ+11, txt.indexOf("[")-1).trim(),
			effet = effetParQualite[epure(qualite)];
		if(niv && effet && node.lastChild.textContent.indexOf("MM")==-1) {
			addInfo(node, mob, niv, qualite, effet);
		}
		tr = tr.nextSibling.nextSibling;
	}
}*/

function mmExtracteurMatos() {
	var
		// Si pas de compos / popos, on mime une table vide
		tablePopos = tableCompos = {rows:{length:0}},
		tr;
	try {
		// Recherche d'éventuels compos
		tr = document.getElementById("mh_objet_hidden_"+numTroll+"Composant");
		if(tr) {
			tableCompos = tr.getElementsByTagName("table")[0];
		} else {
			window.console.warn("[mmassistant] Aucun composant trouvé");
		}
		
		// Recherche d'éventuelles popos
		tr = document.getElementById("mh_objet_hidden_"+numTroll+"Potion");
		if(tr) {
			tablePopos = tr.getElementsByTagName("table")[0];
		} else {
			window.console.warn("[mmassistant] Aucune potion trouvée");
		}
	} catch(e) {
		window.console.error(
			"[mmassistant] Impossible d'analyser l'équipement", e
		);
		return;
	}
	window.console.debug("[mmassistant] Extracteur ON!");
	var
		objCompos = {}, objPopos = {},
		i, j, insertNode, mob, niveau, qualite, effet,
		num, racine, effets, risque, magie, nb, carac;
	
	// Récupération & Stockage des données des Composants
	// trCompos.cells:
	// 0: ?
	// 1: menu contextuel
	// 2: numéro
	// 3: nom
	// 4: emplacement | qualité
	// 5: usure
	// 6: poids
	// 7: ceinture
	for(i=0 ; i<tableCompos.rows.length ; i++) {
		insertNode = tableCompos.rows[i].cells[3];
		mob = insertNode.textContent;
		mob = mob.slice(mob.indexOf("d'un")+5).trim();
		niveau = niveauDuMonstre[epure(mob)];
		qualite = tableCompos.rows[i].cells[4].textContent;
		qualite = qualite.slice(qualite.indexOf("Qualit")+9).trim();
		if(niveau && epure(qualite) in effetParQualite) {
			num = tableCompos.rows[i].cells[2].textContent.match(/\d+/);
			objCompos[num] = {
				mob: mob,
				niveau: niveau,
				qualite: qualite
			}
			ajouteInfosDuCompo(insertNode, objCompos[num]);
		}
	}
	window.console.debug(objCompos);
	window.localStorage[numTroll+".MM_compos"] = JSON.stringify(objCompos);
	
	// Récupération & Stockage des données des Potions
	// trPopos.cells:
	// 0: ?
	// 1: menu contextuel
	// 2: numéro
	// 3: nom
	// 4: effets
	// 5: usure
	// 6: poids
	// 7: ceinture
	for(i=0 ; i<tablePopos.rows.length ; i++) {
		num = tablePopos.rows[i].cells[2].textContent.match(/\d+/);
		insertNode = tablePopos.rows[i].cells[3];
		nom = epure(insertNode.textContent.trim());
		if(nom=="Potion") {
		// Si popo non identifiée, on passe
			continue;
		}
		if(nom.indexOf(" Melangees")!=-1) {
		// Si popo issue d'un mélange de 2 popos de base de même famille,
		// on récupère ladite famille pour computer durée+type (GPT/autre)
		// Si mélange niv sup, on récupère "Potions", sans effet.
			racine = nom.slice(0, nom.indexOf(" Melangees"));
		} else {
			racine = nom;
		}
		effet = tablePopos.rows[i].cells[4].textContent.trim();
		effets = effet.split(" | ");
		
		objPopos[num] = {
			nom: nom,
			effet: effet,
		};
		
		// Calcul du risque associé aux effets de la popo
		risque=0;
		magie=0;
		for(j=0 ; j<effets.length ; j++) {
			nb = effets[j].match(/\d+/);
			if(nb) {
				carac = effets[j].split(":")[0].trim();
				if(carac=="RM" || carac=="MM") {
				// Si MM/RM, on attrape le signe pour faire la somme algébrique
				// et on divise la carac par 10
					nb = effets[j].match(/-?\d+/);
					magie = magie ? magie+nb/10 : nb/10;
				} else if(carac=="TOUR") {
					// Si effet de durée, malus = nb de 1/2 h
					risque += nb/30;
				} else if(carac.indexOf("Pàïntûré")==0) {
					// Si Painture, malus = niv x 10
					risque += nb*10;
				} else {
					risque += Number(nb);
				}
			} else {
				window.console.log("[mmassistant] Effet inconnu:", effets[j]);
			}
		}
		if(magie) {
		// Si MM/RM, on vire le signe final de la somme algébrique
			risque += Math.abs(magie);
		}
		objPopos[num].risque = Math.round(10*risque)/10;
		
		// Si popo de famille connue, on ajoute la durée
		if(racine in dureePotion) {
			objPopos[num].duree = dureePotion[racine];
		}
		
		// Attribution d'un "niveau" à la potion (affichage)
		// Si popo à effet simple, on fixe niveau = 1er effet
		niveau = effet.match(/\d+/);
		// Cas particuliers:
		switch(racine) {
			case "Dover Powa":
			case "Sinne Khole":
				// "niveau" = MM/RM
				niveau = effet.match(/\d+/g).join("/");
			case "Metomol":
				// niveau = malus armure
				niveau = effets[1].match(/\d+/);
				break;
			case "Zet Crakdedand":
				// niveau = bonus PV
				niveau = effets[effets.length-1].match(/\d+/);
				break;
			case "PufPuff":
				// niveau = malus Vue
				niveau = effets.length>4 ?
					"3 (+Tox.)" : effets[effets.length-2].match(/\d+/);
				break;
			case "Elixir de Corruption":
				// niveau = niveau + MM/RM
				if(effets.length>6) {
					niveau += " ("+
						effets[6].match(/\d+/)+"/"+
						effets[7].match(/\d+/)+")";
				}
			default:
				niveau = NaN;
		}
		if(niveau) {
			objPopos[num].niveau = niveau;
		}
		
		// Ajout du malus mélange
		if(nom.indexOf("Mélangées")!=-1) {
			objPopos[num].melange = 1;
		}
		
		// Ajout du malus GPT
		switch(racine) {
			case "Potion de Guerison":
			case "Potion de Painture":
			case "Toxine Violente":
				objPopos[num].GPT = 1;
			default:
		}
		
		// Ajout du malus de zone
		if(effet.indexOf("Zone")!=-1) {
			objPopos[num].zone = 1;
		}
		
		ajouteInfosDeLaPopo(insertNode, objPopos[num]);
	}
	window.console.debug(objPopos);
	window.localStorage[numTroll+".MM_popos"] = JSON.stringify(objPopos);
}


// ------------------- Initialisation Compétence Mélange -------------------- //

function addInfosCompos() {
// Ajoute les infos de compos au menu déroulant lors d'un mélange
// Génère la liste listeCompo
	if(!window.localStorage[numTroll+".MM_compos"]) {
		return;
	}
	
	// Récupération des % de stabilisation (précalculés sur le profil)
	var dataList = window.localStorage[numTroll+".MM_compos"].split(";");
	for (var i=0 ; i<dataList.length-1 ; i++) {
		var data = dataList[i].split(",");
		listeCompos[data[0]] = data[1];
	}
	
	// ... puis insertion des infos dans le menu déroulant
	var optCompo = selectCompo.getElementsByTagName("option");
	selectCompo.style.maxWidth = "250px";
	for(var i=1 ; i<optCompo.length ; i++) {
		var opt = optCompo[i];
		if (listeCompos[opt.value]) {
			appendText(opt, " [-"+listeCompos[opt.value]+" %]");
		} else if (opt.value!=0) {
			opt.title = "??? (Ouvrez l'onglet Équipement)";
		}
	}
}

function addInfosPopos(selec) {
// Ajoute les infos de popo aux 2 menus déroulants lors d'un mélange
	if(!window.localStorage[numTroll+".MM_popos"]) {
		return;
	}
	
	var optPopo = selec.getElementsByTagName("option");
	for(var i=1 ; i<optPopo.length ; i++) {
		var opt = optPopo[i];
		if(!listePopos[opt.value]) {
			opt.title = "??? (Ouvrez l'onglet Équipement)";
		} else if(!listePopos[opt.value]["str"]) {
			opt.title = "Aucune carac."
		} else {
			if(listePopos[opt.value]["Niv"]!="NA" &&
				listePopos[opt.value]["Nom"].indexOf("Potion de Painture")!==0) {
				appendText(opt, " "+listePopos[opt.value]["Niv"]);
			}
			if(listePopos[opt.value]["Zone"]) {
				appendText(opt, " Zone", true);
			}
			opt.title = listePopos[opt.value]["str"];
		}
	}
}

function initRisqueExplo() {
// Pré-calcule les bonus/malus liés à chaque popo/compo
	
	// Récupération des effets des popos
	var dataList = window.localStorage[numTroll+".MM_popos"].split(";");
	for(var i=0 ; i<dataList.length ; i++) {
		var data = dataList[i].split(",");
		// Rappel : stocké comme "num,nom,lvl,durée,effet"
		var num = data[0];
		listePopos[num] = {
			"Nom": data[1], // String
			"Niv": data[2], // String
			"Duree": data[3]=="NA" ? "NA" : Number(data[3]), // Number ou "NA"
			"Risque": 0 // Number
		};
		
		// Calcul du risque associé aux effets d'une popo
		if(data[4]) {
			listePopos[num]["str"] = data[4];
			var effets = data[4].split(" | ");
			var risque = 0, magie = 0;
			for(var j=0 ; j<effets.length ; j++) {
				var nb = effets[j].match(/\d+/);
				if(nb) {
					var carac = effets[j].split(":")[0].trim();
					if(carac=="RM" || carac=="MM") {
						// Si MM/RM, on attrape le signe pour faire la somme algébrique
						// et on divise la carac par 10
						nb = effets[j].match(/-?\d+/);
						magie = magie ? magie+nb/10 : nb/10;
					} else if(carac=="TOUR") {
						// Si effet de durée, malus = nb de 1/2 h
						risque += nb/30;
					} else if(carac.indexOf("Painture")==0) {
						// Si Painture, malus = niv x 10
						risque += nb*10;
					} else {
						risque += Number(nb);
					}
				} else if(effets[j].indexOf("Zone")!=-1) {
					// Si popo de Zone, on enregistre pour malus Zone
					listePopos[num]["Zone"] = true;
				}
			}
			if(magie) {
				// Si MM/RM, on vire le signe final de la somme algébrique
				risque += Math.abs(magie);
			}
		listePopos[num]["Risque"] = Math.round(10*risque)/10;
		}
	}
	
	// On vire le message "Vous pouvez ajouter un composant stabilisateur:"
	var
		msg = document.evaluate(
			"../text()[contains(.,'stabilisateur')]",
			selectPopo1,
			null, 9, null
		).singleNodeValue,
		br = selectPopo1.parentNode.getElementsByTagName("br")[1];
	msg.parentNode.removeChild(msg);
	br.parentNode.removeChild(br);
	
	// Insertion des infos dans les menus déroulants
	addInfosCompos();
	window.console.debug("[mmassistant] addInfosCompos réussi");
	addInfosPopos(selectPopo1);
	window.console.debug("[mmassistant] addInfosPopos 1 réussi");
	addInfosPopos(selectPopo2);
	window.console.debug("[mmassistant] addInfosPopos 2 réussi");
	
	// Initialisation affichage Risques
	var divAction = document.getElementsByClassName("titre4")[1];
	// On vire le message "[Portée : sur la zone uniquement]";
	//divAction.textContent = divAction.textContent.replace("[Portée :  sur la zone uniquement]","");
	divAction.innerHTML = "[3 PA] "
	afficheRisque.innerHTML = "[Risque d'explosion : (nécessite 2 potions)]";
	divAction.appendChild(afficheRisque);
	selectPopo1.onchange = refreshRisqueExplo;
	selectPopo2.onchange = refreshRisqueExplo;
	selectCompo.onchange = refreshRisqueExplo;
	
	window.console.debug("[mmassistant] initRisqueExplo réussi");
}


//-------------------------- EventListener Mélange ---------------------------//

function refreshRisqueExplo() {
// Met à jour le risque d"explosion en fonction des popos/compos sélectionnés
	
	// On vérifie si on a bien 2 popos connues sélectionnées
	afficheRisque.title = "";
	if(selectPopo1.value=="" || selectPopo2.value=="") {
		afficheRisque.innerHTML = "[Risque d'explosion : (nécessite 2 potions)]";
		return;
	}
	var
		popo1 = listePopos[selectPopo1.value],
		popo2 = listePopos[selectPopo2.value];
	if(popo1==undefined || popo2==undefined) {
		afficheRisque.innerHTML = "[Potion inconnue : ouvrez l'onglet Équipement]";
		return;
	}
	
	// Risque de base
	var
		risque = 33,
		details = "Risque de base: +33";
	
	// Malus de caracs
	risque += popo1["Risque"];
	details += "\nEffet popo 1: +"+popo1["Risque"]+" ("+risque+")";
	risque += popo2["Risque"]
	details += "\nEffet popo 2: +"+popo2["Risque"]+" ("+risque+")";
	risque = Math.round(risque);
	
	// Malus de popo mélangée & Bonus popos de base identiques
	if(
		popo1["Nom"].indexOf("Melangees")!=-1 ||
		popo2["Nom"].indexOf("Melangees")!=-1
	) {
		risque += 15;
		details += "\nMalus mélange: +15 ("+risque+")";
	} else if(popo1["Nom"]==popo2["Nom"]) {
		risque -= 15;
		details += "\nBonus popo id.: -15 ("+risque+")";
	}
	
	// Malus de Zone
	if(popo1["Zone"] || popo2["Zone"]) {
		risque += 40;
		details += "\nMalus zone: +40 ("+risque+")";
	}
	
	// Malus mélange hétérogène GPT (Guérison/Painture/Toxine)
	var
		popoInconnue = popo1["Duree"]=="NA" || popo2["Duree"]=="NA",
		rismax = risque+5;
	if(
		popo1["Nom"].indexOf("Toxine Violente")+
		popo2["Nom"].indexOf("Toxine Violente")+
		popo1["Nom"].indexOf("Potion de Guerison")+
		popo2["Nom"].indexOf("Potion de Guerison")+
		popo1["Nom"].indexOf("Potion de Painture")+
		popo2["Nom"].indexOf("Potion de Painture")==-5
	) {
		risque += 40;
		rismax += 40;
		details += "\nMalus hétérogène GPT: +40 ("+risque+")";
	} else if(popoInconnue) {
		// En cas de popo inconnue, on envisage le pire
		rismax += 40;
		details += "\nMalus hétérogène GPT: +40 ??";
	}
	
	// Malus durée
	if(!popoInconnue) {
		// Si les deux popos sont connues RAS
		var sup = Math.max(popo1["Duree"], popo2["Duree"]);
		risque += sup;
		rismax = risque;
		details += "\nMalus de durée: +"+sup+" ("+risque+")";
	} else if(popo1["Duree"]!="NA") {
		// Sinon on fait au mieux
		risque += popo1["Duree"];
		if(popo1["Duree"]==5) {
			details += "\nMalus de durée: +5 ("+risque+")";
		} else {
			details += "\nMalus de durée: de +"+popo1["Duree"]+" à +5";
		}
	} else {
		risque += popo2["Duree"];
		if(popo2["Duree"]==5) {
			details += "\nMalus de durée: +5 ("+risque+")";
		} else {
			details += "\nMalus de durée: de +"+popo2["Duree"]+" à +5";
		}
	}
	
	// Bonus de compo
	if(selectCompo.value!=0) {
		if(listeCompos[selectCompo.value]) {
			risque -= listeCompos[selectCompo.value];
			rismax -= listeCompos[selectCompo.value];
			details += "\nBonus compo: -"+listeCompos[selectCompo.value]+" ("+risque+")";
		} else {
			afficheRisque.innerHTML = "[Composant inconnu : ouvrez l'onglet Équipement]";
			return;
		}
	}
	
	// Affichage
	if(risque==rismax) {
		afficheRisque.innerHTML =
			"[Risque d'explosion : "+Math.max(15, risque)+" %]";
	} else if(rismax<16) {
		afficheRisque.innerHTML =	
			"[Risque d'explosion : 15 %]";
	} else {
		afficheRisque.innerHTML =
			"[Risque d'explosion : de "+Math.max(15, risque)+" à "+rismax+" %]";
	}
	afficheRisque.title = details;
	
	window.console.debug("[mmassistant] refreshRisqueExplo réussi");
}


//------------------------------ Main Dispatch -------------------------------//

function isPage(url) {
	return window.self.location.toString().indexOf(url)!=-1;
}

if((isPage("MH_Taniere/TanierePJ_o_Stock") ||
	isPage("MH_Comptoirs/Comptoir_o_Stock")) &&
	window.location.href.indexOf("as_type=Compo")!=-1) {
	// Ajout du bouton Relaunch (utile si +500 compos)
	var
		numCompo = 0,
		footer = document.getElementById("footer1"),
		relaunchButton = document.createElement("input");
	relaunchButton.type = "button";
	relaunchButton.className = "mh_form_submit";
	relaunchButton.value = "Relancer MountyZilla";
	relaunchButton.onmouseover = function() {
		this.style.cursor="pointer";
	};
	relaunchButton.onclick = mmStockGT;
	footer.parentNode.insertBefore(relaunchButton, footer);
	document.getElementById("stock-ajax-append").addEventListener("click",
		function() {
			window.setTimeout(mmStockGT, 5000);
	});
	mmStockGT();
} else if(isPage("MH_Follower/FO_Equipement")) {
	mmEquipGowap();
} else if(isPage("MH_Play/Play_e_follo")) {
	mmListeGowap();
} else if(isPage("View/TaniereDescription")) {
	mmViewTaniere();
} else if(isPage("MH_Play/Play_equipement")) {
	getNumTroll();
	mmExtracteurMatos();
} else if(isPage("MH_Play/Actions/Competences/Play_a_CompetenceYY")) {
	if(document.body.id!="p_competencemlangemagique") {
		window.console.warn("[mmassistant] Compétence non reconnue - OFF");
		return;
	}
	getNumTroll();

// DEBUG: on déclenche même si rien en mémoire
//	&& window.localStorage[numTroll+".MM_popos"]) {
	try {
		var
			selectPopo1 = document.getElementById("potion1"),
			selectPopo2 = document.getElementById("potion2"),
			selectCompo = document.getElementById("cible");
	} catch(e) {
		window.console.error("[mmassistant] Structure de page inconnue - OFF", e);
		return;
	}
	
	window.console.debug("[mmassistant] calcul du risque ON!");
	var
		listeCompos = {},
		listePopos = {},
		afficheRisque = document.createElement("span");
	initRisqueExplo();
}

window.console.debug("[mmassistant] Script OFF sur : "+WHEREARTTHOU);

