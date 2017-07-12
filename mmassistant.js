/*
 * This file is part of MountyZilla (http://mountyzilla.tilk.info/),
 * published under GNU License.
 *
 * Script MountyZilla : Affichage Stabilisation des compos + Assistant Mélange Magique
 * 2013-12-30 - v1.0 by Dabihul (79738)
 * TODO
 * - Gestion des popos de Sorts
 */

if(!isPage('MH_Taniere/TanierePJ_o_Stock')
	&& !isPage('MH_Comptoirs/Comptoir_o_Stock')
	&& !isPage('MH_Play/Play_e_follo')
	&& !isPage('MH_Follower/FO_Equipement')
	&& !isPage('View/TaniereDescription')
	&& !isPage('MH_Play/Play_equipement')
	&& !isPage('MH_Play/Actions/Competences/Play_a_Competence25')) return;

// url icone Mélange Magique
var urlImg = 'http://mountyzilla.tilk.info/scripts_1.1/images/Competences/melangeMagique.png';

var nival = {
	'Abishaii Bleu':19,
	'Abishaii Noir':10,
	'Abishaii Rouge':23,
	'Abishaii Vert':15,
	'Ame-en-peine':8,
	'Amibe Geante':9,
	'Anaconda des Catacombes':8,
	'Ankheg':10,
	'Anoploure Purpurin':36,
	'Araignee Geante':2,
	'Ashashin':35,
	'Balrog':50,
	'Banshee':16,
	'Barghest':36,
	'Basilisk':11,
	'Behemoth':34,
	'Behir':14,
	'Beholder':50,
	'Boggart':3,
	'Bondin':9,
	"Bouj'Dla Placide":37,
	"Bouj'Dla":19,
	'Bulette':19,
	'Caillouteux':1,
	'Capitan':35,
	'Carnosaure':25,
	'Champi-Glouton':3,
	'Chauve-Souris Geante':4,
	'Cheval a Dents de Sabre':23,
	'Chevalier du Chaos':20,
	'Chimere':13,
	'Chonchon':24,
	'Coccicruelle':22,
	'Cockatrice':5,
	'Crasc Medius':17,
	'Crasc Maexus':25,
	'Crasc':10,
	'Croquemitaine':6,
	'Cube Gelatineux':32,
	'Daemonite':27,
	'Diablotin':5,
	'Dindon du Chaos':1,
	'Djinn':29,
	'Ectoplasme':18,
	'Effrit':27,
	"Elementaire d'Air":23,
	"Elementaire d'Eau":17,
	'Elementaire de Feu':21,
	'Elementaire de Terre':21,
	'Elementaire du Chaos':26,
	'Erinyes':7,
	'Esprit-Follet':16,
	'Essaim Craterien':30,
	'Essaim Sanguinaire':25,
	'Ettin':8,
	'Familier':1,
	'Fantome':24,
	'Feu Follet':20,
	'Flagelleur Mental':33,
	'Foudroyeur':38,
	'Fumeux':22,
	'Fungus Geant':9,
	'Fungus Violet':4,
	'Furgolin':10,
	'Gargouille':3,
	'Geant de Pierre':13,
	'Geant des Gouffres':22,
	"Geck'oo Majestueux":40,
	"Geck'oo":15,
	'Glouton':20,
	'Gnoll':5,
	'Gnu Domestique':1,
	'Gnu Sauvage':1,
	'Goblin':4,
	'Goblours':4,
	"Golem d'Argile":15,
	'Golem de cuir':1,
	'Golem de Chair':8,
	'Golem de Fer':31,
	'Golem de mithril':1,
	'Golem de metal':1,
	'Golem de papier':1,
	'Golem de Pierre':23,
	'Gorgone':11,
	'Goule':4,
	'Gowap Apprivoise':1,
	'Gowap Sauvage':1,
	'Gremlins':3,
	'Gritche':39,
	'Grouilleux':4,
	'Grylle':31,
	'Harpie':4,
	'Hellrot':18,
	'Homme-Lezard':4,
	'Hurleur':8,
	'Hydre':50,
	'Incube':13,
	'Kobold':2,
	'Labeilleux':26,
	'Lezard Geant':5,
	'Liche':50,
	'Limace Geante':10,
	'Loup-Garou':8,
	'Lutin':4,
	'Mante Fulcreuse':30,
	'Manticore':9,
	'Marilith':33,
	'Meduse':6,
	'Megacephale':38,
	'Mille-Pattes Geant':14,
	'Mimique':6,
	'Minotaure':7,
	'Molosse Satanique':8,
	'Momie':4,
	'Monstre Rouilleur':3,
	"Mouch'oo Domestique":14,
	"Mouch'oo Majestueux Sauvage":33,
	"Mouch'oo Sauvage":14,
	'Na-Haniym-Heee':0,
	'Necrochore':37,
	'Necromant':39,
	'Necrophage':8,
	'Naga':10,
	'Nuee de Vermine':13,
	"Nuage d'Insectes":7,
	'Ogre':7,
	'Ombre de Roches':13,
	'Ombre':2,
	'Orque':3,
	'Ours-Garou':18,
	'Palefroi Infernal':29,
	'Phoenix':32,
	'Pititabeille':0,
	'Plante Carnivore':4,
	'Pseudo-Dragon':5,
	'Rat Geant':2,
	'Rat-Garou':3,
	'Rocketeux':5,
	'Sagouin':3,
	'Scarabee Geant':4,
	'Scorpion Geant':10,
	'Shai':28,
	'Sirene':8,
	'Slaad':5,
	'Sorciere':17,
	'Spectre':14,
	'Sphinx':30,
	'Squelette':1,
	'Strige':2,
	'Succube':13,
	'Tertre Errant':20,
	'Thri-kreen':10,
	'Tigre-Garou':12,
	'Titan':26,
	'Trancheur':35,
	'Tubercule Tueur':14,
	'Tutoki':4,
	'Vampire':29,
	'Ver Carnivore Geant':12,
	'Ver Carnivore':11,
	'Veskan Du Chaos':14,
	'Vouivre':33,
	'Worg':5,
	'Xorn':14,
	'Yeti':8,
	'Yuan-ti':15,
	'Zombie':2
	}

var effetQual = {
	'Tres Bonne':20,
	'Bonne':16,
	'Moyenne':12,
	'Mauvaise':8,
	'Tres Mauvaise':4
	}


/*                 Fonctions d'affichage des % de Stabilisation                 */

function createMMImage(url) {
	var img = document.createElement('img');
	img.src = url;
	img.align = 'absmiddle';
	img.alt = 'MM';
	return img;
	}

function addInfo(node,mob,niv,qualite,effet) {
	appendText(node,' ');
	var span = document.createElement('span');
	span.appendChild(createMMImage(urlImg));
	appendText(span,' [-'+(niv+effet)+' %]');
	var str = '';
	switch(mob[0]) {
		case 'A':
		case 'E':
		case 'I':
		case 'O':
		case 'U':
			str = "Compo d'";
			break;
		default:
			str = 'Compo de ';
		}
	span.title = str+mob+' : -'+niv+'\nQualité '+qualite+' : -'+effet;
	node.appendChild(span);
	}

function getSetInfo(snap) {
	if(isNaN(snap.childNodes[1].getElementsByTagName('img')[0].alt[0])) return;
	var node = snap.childNodes[5];
	var mob = node.firstChild.textContent;
	mob = trim(mob.slice(mob.indexOf("d'un")+5));
	var niv = nival[epure(mob)];
	var qualite = snap.childNodes[7].textContent;
	qualite = trim(qualite.slice(qualite.indexOf('Qualit')+9));
	var effet = effetQual[epure(qualite)];
	if(niv && effet) addInfo(node,mob,niv,qualite,effet);
	}

function mmListeGowap() {
	try {
	var gogoList = document.evaluate(
					".//form/table/descendant::table/tbody/tr/td[@class='mh_titre3']/a",
					document, null, 7, null);
	var gogoNumbers = [];
	for(var i=0 ; i<gogoList.snapshotLength ; i++)
		gogoNumbers.push( parseInt(gogoList.snapshotItem(i).textContent) );
	}
	catch(e) {return;}
	
	for(var j=0 ; j<gogoNumbers.length ; j++) {
		var div = document.getElementById('mh_'+gogoNumbers[j]+'_hidden_Composant');
		if(!div) continue;
		var trList = document.evaluate('./table/tbody/tr', div, null, 7, null);
		if(!(trList.snapshotLength>0)) continue;
		
		for(var i=0 ; i<trList.snapshotLength ; i++)
			getSetInfo(trList.snapshotItem(i));
		}
	}

function mmEquipGowap() {
	try {
	var trList = document.evaluate(
					".//p/table/tbody/tr/td[contains(table/tbody/tr/td/b/text(),'Composant')]"
					+"/div/table/tbody/tr", document, null, 7, null);
	}
	catch(e) {return;}
	
	for(var i=0 ; i<trList.snapshotLength ; i++)
		getSetInfo(trList.snapshotItem(i));
	}

function mmStockGT() {
	try {
	var mainTab = document.getElementById('stock');
	var trList = document.evaluate('./tbody[2]/tr',mainTab, null, 7, null);
	}
	catch(e) {return;}
	
	for(var i=numCompo ; i<trList.snapshotLength ; i++) {
		getSetInfo(trList.snapshotItem(i));
		numCompo++;
		}
	}

function mmViewTaniere() {
	try {
	var mainTab = document.getElementsByClassName('listeEquipement')[0]
							.getElementsByTagName('table')[0];
	var trstart = document.evaluate(
						"./tbody/tr[@class='mh_tdtitre' and contains(td/b/text(),'Composant')]",
						mainTab, null, 9, null).singleNodeValue;
	}
	catch(e) {return;}
	
	var tr = trstart.nextSibling.nextSibling;
	while(tr && tr.className=='mh_tdpage') {
		var node = tr.getElementsByTagName('td')[2];
		var txt = node.textContent;
		var indQ = txt.indexOf('de Qualit');
		var mob = trim(txt.slice(txt.indexOf("d'un")+5,indQ-1));
		var niv = nival[epure(mob)];
		var qualite = trim(txt.slice(indQ+11,txt.indexOf('[')-1));
		var effet = effetQual[epure(qualite)];
		if(niv && effet && node.lastChild.textContent.indexOf('MM')==-1)
			addInfo(node,mob,niv,qualite,effet);
		tr = tr.nextSibling.nextSibling;
		}
	}

function mmExtracteurMatos() {
	try {
	var tr = document.getElementById('mh_objet_hidden_Composant');
	var trCompos = document.evaluate("./td/table/tbody/tr[not(starts-with(td[2]/img/@alt,'Pas'))]",
									tr, null, 7, null);
	tr = document.getElementById('mh_objet_hidden_Potion');
	var trPopos = document.evaluate("./td/table/tbody/tr[not(starts-with(td[2]/img/@alt,'Pas'))]",
									tr, null, 7, null);
	}
	catch(e) {return;}
	
	var strCompos = '';
	for(var i=0 ; i<trCompos.snapshotLength ; i++) {
		var node = trCompos.snapshotItem(i).childNodes[7];
		var mob = node.firstChild.textContent;
		mob = trim(mob.slice(mob.indexOf("d'un")+5));
		var niv = nival[epure(mob)];
		var qualite = trCompos.snapshotItem(i).childNodes[9].textContent;
		qualite = trim(qualite.slice(qualite.indexOf('Qualit')+9));
		var effet = effetQual[epure(qualite)];
		if(niv && effet) {
			addInfo(node,mob,niv,qualite,effet);
			var num = trCompos.snapshotItem(i).childNodes[5].textContent.match(/\d+/);
			strCompos += num+','+(niv+effet)+';';
			}
		}
	MZ_setValue(numTroll+'.MM_compos',strCompos);
	
	var strPopos = '';
	for(var i=0 ; i<trPopos.snapshotLength ; i++) {
		var num = trPopos.snapshotItem(i).childNodes[5].textContent.match(/\d+/);
		var nom = epure(trim(trPopos.snapshotItem(i).childNodes[7].textContent));
		if(nom.indexOf(' Melangees')!=-1)
			var racine = nom.slice(0,nom.indexOf(' Melangees'));
		else
			var racine = nom;
		var effet = trPopos.snapshotItem(i).childNodes[9].textContent;
		var effets = effet.split(' | ');
		var duree;
		var lvl = effet.match(/\d+/);
		switch(racine) {
			case 'Potion de Guerison':
			case 'Potion de Painture':
			case 'Toxine Violente':
				duree = 0;
				break;
			case 'Dover Powa':
			case 'Sinne Khole':
				lvl = effet.match(/\d+/g).join('/');
			case "Voi'Pu'Rin":
				duree = 2;
				break;
			case 'Metomol':
				lvl = effets[1].match(/\d+/);
				duree = 2;
				break;
			case 'Zet Crakdedand':
				lvl = effets[effets.length-1].match(/\d+/);
			case 'Elixir de Longue-Vue':
			case 'Grippe en Conserve':
			case 'Jus de Chronometre':
			case 'Pneumonie en Conserve':
			case 'Rhume en Conserve':
				duree = 3;
				break;
			case 'PufPuff':
				lvl = effets[effets.length-2].match(/\d+/);
				duree = 3;
				break;
			case 'Essence de KouleMann':
			case 'Extrait de DjhinTonik':
			case 'Sang de Toh Reroh':
				duree = 4;
				break;
			case 'Elixir de Corruption':
				lvl += ' ('+effets[6].match(/\d+/)+'/'+effets[7].match(/\d+/)+')';
			case 'Elixir de Bonne Bouffe':
			case 'Elixir de Fertilite':
			case 'Elixir de Feu':
			case 'Extrait du Glacier':
				duree = 5;
				break;
			default:
				lvl = 'NA';
				duree = 'NA';
			}
		strPopos += num+','+nom+','+lvl+','+duree+','+effet+';';
		}
	MZ_setValue(numTroll+'.MM_popos',epure(strPopos));
	}


/*                      Initialisation Compétence Mélange                       */

function addInfosCompos() {
	if(!MZ_getValue(numTroll+'.MM_compos')) return;
	/* Récupération des % de stabilisation (précalculés sur le profil) */
	var dataList = MZ_getValue(numTroll+'.MM_compos').split(';');
	for(var i=0 ; i<dataList.length ; i++) {
		var data = dataList[i].split(',');
		listeCompos[data[0]] = data[1];
		}
	/* ... puis insertion des infos dans le menu déroulant */
	var optCompo = selectCompo.getElementsByTagName('option');
	for(var i=1 ; i<optCompo.length ; i++) {
		var opt = optCompo[i];
		if(listeCompos[opt.value]==undefined) continue;
		appendText(opt,' ');
		opt.appendChild(createMMImage(urlImg));
		appendText(opt,' [-'+listeCompos[opt.value]+' %]');
		}	
	}

function addInfosPopos(selec) {
	var optPopo = selec.getElementsByTagName('option');
	for(var i=1 ; i<optPopo.length ; i++) {
		var opt = optPopo[i];
		if(!listePopos[opt.value])
			opt.title = '??? (Ouvrez l\'onglet équipement)';
		else if(!listePopos[opt.value]['str'])
			opt.title = 'Aucune carac.'
		else {
			var lvl = listePopos[opt.value]['lvl'];
			if(lvl) appendText(opt,lvl);
			if(listePopos[opt.value]['Zone']) appendText(opt, ' Zone', true);
			opt.title = listePopos[opt.value]['str'];
			}
		}
	}

function initRisqueExplo() {
	/* Récupération des effets des popos */
	var dataList = MZ_getValue(numTroll+'.MM_popos').split(';');
	for(var i=0 ; i<dataList.length ; i++) {
		var data = dataList[i].split(',');
		var num = data[0];
		listePopos[num] = [];
		listePopos[num]['Nom'] = data[1];
		if(data[2]!='NA') listePopos[num]['lvl'] = data[2];
		if(data[3]!='NA') listePopos[num]['Duree'] = data[3];
		listePopos[num]['Effets'] = [];
		if(data[4]) {
			listePopos[num]['str'] = data[4];
			var effets = data[4].split(' | ');
			for(var j=0 ; j<effets.length ; j++) {
				var nb = effets[j].match(/\d+/);
				if(nb) {
					var carac = trim(effets[j].split(':')[0]);
					if(carac=='RM' || carac=='MM') {
						nb = effets[j].match(/-?\d+/);
						listePopos[num]['Effets']['Magie'] =
							listePopos[num]['Effets']['Magie'] ?
							nb/10+listePopos[num]['Effets']['Magie'] : nb/10;
						}
					else if(carac=='TOUR')
						listePopos[num]['Effets'][carac] = nb/30;
					else if(carac.indexOf('Painture')==0)
						listePopos[num]['Effets'][carac] = nb*10;
					else
						listePopos[num]['Effets'][carac] = parseInt(nb);
					}
				else if(effets[j].indexOf('Zone')!=-1)
					listePopos[num]['Zone'] = true;
				}
			if(listePopos[num]['Effets']['Magie']) {
				listePopos[num]['Effets']['Magie'] =
					Math.abs(listePopos[num]['Effets']['Magie']);
				}
			}
		}
	/* Insertion des infos dans le menu déroulant */
	addInfosCompos();
	addInfosPopos(selectPopo1);
	addInfosPopos(selectPopo2);
	
	/* Initialisation affichage Risques */
	var divAction = document.getElementsByClassName('Action')[0];
	afficheRisque.innerHTML = "Risque d'Explosion : (nécessite 2 potions)";
	appendBr(divAction);
	divAction.appendChild(afficheRisque);
	selectPopo1.onchange = refreshRisqueExplo;
	selectPopo2.onchange = refreshRisqueExplo;
	selectCompo.onchange = refreshRisqueExplo;
	}


/*                            EventListeners Mélange                            */

function risqueEffet(effet) {
	var risque = 0;
	for(var carac in effet)
			risque += effet[carac];
	return risque;
	}

function refreshRisqueExplo() {
	if(selectPopo1.value=='' || selectPopo2.value=='') {
		afficheRisque.innerHTML = "Risque d'Explosion : (nécessite 2 potions)";
		return;
		}
	var popo1 = listePopos[selectPopo1.value];
	var popo2 = listePopos[selectPopo2.value];
	if(popo1==undefined || popo2==undefined) {
		afficheRisque.innerHTML = "Potion inconnue : ouvrez l'onglet équipement";
		return;
		}

	var risque = 33;
	if(selectCompo.value!=0) {
		if(listeCompos[selectCompo.value])
			risque -= listeCompos[selectCompo.value];
		else {
			afficheRisque.innerHTML = "Composant inconnu : ouvrez l'onglet équipement";
			return;
			}
		}
	
	/* Malus de popo mélangée & Bonus popos de base identiques */
	if(popo1['Nom'].indexOf('Melangees')!=-1 || popo2['Nom'].indexOf('Melangees')!=-1)
		risque += 15;
	else if(popo1['Nom']==popo2['Nom'])
		risque -= 15;
	/* Malus de Zone */
	if(popo1['Zone'] || popo2['Zone'])
		risque += 40;
	/* Malus mélange hétérogène PV/Painture */
	if(popo1['Nom'].indexOf('Toxine Violente')+
		popo2['Nom'].indexOf('Toxine Violente')+
		popo1['Nom'].indexOf('Potion de Guerison')+
		popo2['Nom'].indexOf('Potion de Guerison')+
		popo1['Nom'].indexOf('Potion de Painture')+
		popo2['Nom'].indexOf('Potion de Painture')==-5)
		risque += 40;
	/* Malus de caracs */
	risque += risqueEffet(popo1['Effets']);
	risque += risqueEffet(popo2['Effets']);
	risque = Math.round(risque);
	
	/* Malus durée (ou estim) */
	var rismax = risque+5;
	if(popo1['Duree']!='NA' && popo2['Duree']!='NA') {
		risque += Math.max(popo1['Duree'],popo2['Duree']);
		rismax=risque;
		}
	else if(popo1['Duree']!='NA')
		risque += popo1['Duree'];
	else if(popo2['Duree']!='NA')
		risque += popo2['Duree'];
	
	/* Affichage */
	if(risque==rismax)
		afficheRisque.innerHTML = "Risque d'Explosion : "+Math.max(15,risque)+' %';
	else if(rismax<16)
		afficheRisque.innerHTML = "Risque d'Explosion : 15 %";
	else
		afficheRisque.innerHTML = "Risque d'Explosion : de "+Math.max(15,risque)+' à '+rismax+' %';
	}


/*                                Main Dispatch                                 */

if((isPage('MH_Taniere/TanierePJ_o_Stock') || isPage('MH_Comptoirs/Comptoir_o_Stock'))
	&& currentURL.indexOf('as_type=Compo')!=-1) {
	var numCompo = 0;
	/* Ajout du bouton Relaunch (utile si +500 compos) */
	var footer = document.getElementById('footer1');
	var relaunchButton = document.createElement('input');
	relaunchButton.type = 'button';
	relaunchButton.className = 'mh_form_submit';
	relaunchButton.value = 'Relancer MountyZilla';
	relaunchButton.onmouseover = function(){this.style.cursor='pointer';};
	relaunchButton.onclick = mmStockGT;
	insertBefore(footer,relaunchButton);
	mmStockGT();
	}
else if(isPage('MH_Follower/FO_Equipement'))
	mmEquipGowap();
else if(isPage('MH_Play/Play_e_follo')) 
	mmListeGowap();
else if(isPage('View/TaniereDescription'))
	mmViewTaniere();
else if(isPage('MH_Play/Play_equipement'))
	mmExtracteurMatos();
else if(isPage('MH_Play/Actions/Competences/Play_a_Competence25')
		&& MZ_getValue(numTroll+'.MM_popos')) {
	try {
	var selectPopo1 = document.getElementsByName('ai_IDPotion1')[0];
	var selectPopo2 = document.getElementsByName('ai_IDPotion2')[0];
	var selectCompo = document.getElementsByName('ai_IDCompo')[0];
	}
	catch(e) {return;}
	var listeCompos = [];
	var listePopos = [];
	var afficheRisque = document.createElement('span');
	initRisqueExplo();
	}


