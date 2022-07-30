var Materials=new Array;
var Materials_1=new Array;
var Materials_2=new Array;

var Indice=0;
var Indice1=0;
var Indice2=0;




// Création du matériau avec ses variables (variables dans le même ordre que dans le fichier Report Material.html)
function Material(u_Name,u_Desc,u_Costfactor,u_LengthM,u_Width,u_Thickness,u_Costtype, u_Surf, u_Vol, u_Qte, u_GQte, u_Cost) {
	var pMaterial = {Name: u_Name,Desc : u_Desc , Costfactor: u_Costfactor, LengthM : parseFloat(u_LengthM), Width: parseFloat(u_Width), Thickness: parseFloat(u_Thickness) , Costtype : u_Costtype, Surf : parseFloat(u_Surf), Vol : parseFloat(u_Vol), Qte: parseFloat(u_Qte), GQte: parseFloat(u_GQte), Cost:parseFloat(u_Cost) };
	return pMaterial;
}

// Material_1: Chants
function Material_1(u_Name,u_Desc,u_Costfactor,u_LengthM,u_Width,u_Thickness,u_Costtype, u_Surf, u_Vol, u_Qte, u_GQte, u_Cost) {
	var pMaterial_1 = {Name: u_Name,Desc : u_Desc , Costfactor: u_Costfactor, LengthM : parseFloat(u_LengthM), Width: parseFloat(u_Width), Thickness: parseFloat(u_Thickness) , Costtype : u_Costtype, Surf : parseFloat(u_Surf), Vol : parseFloat(u_Vol), Qte: parseFloat(u_Qte), GQte: parseFloat(u_GQte), Cost:parseFloat(u_Cost) };
	return pMaterial_1;
}

// Material_2
function Material_2(u_Name,u_Desc,u_Costfactor,u_LengthM,u_Width,u_Thickness,u_Costtype, u_Surf, u_Vol, u_Qte, u_GQte, u_Cost) {
	var pMaterial = {Name: u_Name,Desc : u_Desc , Costfactor: u_Costfactor, LengthM : parseFloat(u_LengthM), Width: parseFloat(u_Width), Thickness: parseFloat(u_Thickness) , Costtype : u_Costtype, Surf : parseFloat(u_Surf), Vol : parseFloat(u_Vol), Qte: parseFloat(u_Qte), GQte: parseFloat(u_GQte), Cost: parseFloat(u_Cost)};
	return pMaterial_2;
}

// Check les matériaux par leur nom, créée la variable pMat: regroupe les matériaux par leur nom: Panneaux
 function GetMaterialbyName(u_Name,u_Thickness) {
	for (var i = 0; i < Materials.length; i++) {
		var pMat = Materials[i];
		if (pMat.Name==u_Name)
		{	
			if (pMat.Thickness==u_Thickness)
			{
				return pMat;
			}
		}
	}
	return null;
}

// Check les matériaux par leur nom, créée la variable pMat: regroupe les matériaux par leur nom: Chants
 function GetMaterialbyName_1(u_Name,u_Width) {
	for (var i1 = 0; i1 < Materials_1.length; i1++) {
		var pMat_1 = Materials_1[i1];
		if (pMat_1.Name==u_Name)
		{	
			if (pMat_1.Width==u_Width)
			{
				return pMat_1;
			}
		}
	}
	return null;
}

// Material 2
 function GetMaterialbyName_2(u_Name) { 
	for (var i2 = 0; i2 < Materials_2.length; i2++) {
		var pMat_2 = Materials_2[i2];
		if (pMat_2.Name==u_Name)
		{
			return pMat_2;
		}
	}
	return null;
 }

// Rempli la ligne actuelle du tableau material
function WriteMaterial(pMat){
	document.write('<tr>');
//Nom
	document.write('<td><center>'+ pMat.Name +'<\center></td>');
//Ep Panneau
	document.write('<td><center>'+ pMat.Thickness +'<\center></td>');
//Description
	document.write('<td><center>'+ pMat.Desc +'<\center></td>');
//Si le type de cout est 1: Surfacique
	var resultMat=0;
	var unitMat="";
	if (pMat.Costtype==1){
		resultMat=Math.round(pMat.Surf*1000)/1000;
		unitMat="m2";
	}
//Sinon si le type de cout est 0: Volumique
	else if (pMat.Costtype==0)
	{
		resultMat=Math.round(pMat.Vol*1000)/1000;
		unitMat="m3";
	}
//Sinon il est linéaire
	else 
	{
		resultMat=Math.round(pMat.LengthM)/1000;
		unitMat="m";
	}

	document.write('<td><center>'+ resultMat + '<\center></td>');
	document.write('<td><center>'+ pMat.GQte + '<\center></td>');
	document.write('<td><center>'+ Math.round(pMat.GQte*resultMat*1000)/1000+'<\center></td>');
	document.write('<td><center>'+unitMat+'<\center></td>');
	document.write('<td><center>'+pMat.Cost+'<\center></td>');
	document.write('<td><center>'+Math.round(pMat.GQte*resultMat*pMat.Cost*1000)/1000+'<\center></td>');
	document.write('</tr>');													
}

// Rempli la ligne actuelle du tableau material_1: Chants
function WriteMaterial_1(pMat_1){
	document.write('<tr>');
//Nom
	document.write('<td><center>'+ pMat_1.Name +'<\center></td>');
//Ep Panneau
	document.write('<td><center>'+ pMat_1.Width +'<\center></td>');
//Description
	document.write('<td><center>'+ pMat_1.Desc +'<\center></td>');
//Sinon il est linéaire
	document.write('<td><center>'+ Math.round(pMat_1.LengthM)/1000 + '<\center></td>');
//On ecrit le facteur de coût
	document.write('<td><center>'+ pMat_1.GQte + '<\center></td>');
//On écrit le brut (net*costfactor): Sinon linéaire
	document.write('<td><center>'+ Math.round(pMat_1.GQte*pMat_1.LengthM)/1000+ '<\center></td>');
	document.write('<td><center>m<\center></td>');
	document.write('<td><center>'+ pMat_1.Cost + '<\center></td>');
	document.write('<td><center>'+ ((Math.round(pMat_1.GQte*pMat_1.LengthM)/1000)*pMat_1.Cost)+'<\center></td>');	
	document.write('</tr>');													
}

//Mise à jour du tableau Material: pMat,pSurf, pVol
function UpdateMaterial(u_Name, u_Desc, u_Costfactor, u_LengthM, u_Width, u_Thickness, u_Costtype, u_Qte, u_Gqte, u_Cost){
	var pMat=GetMaterialbyName(u_Name,u_Thickness);
	var pSurf=((u_LengthM*u_Width)/1000000);
	var pVol=((pSurf*u_Thickness)/1000);
	if (u_Gqte==0){u_Gqte=1;}
	if (u_Name=='&nbsp;'){
		return null;
	}
//Si pMat existe: ancienne valeur + nouvelle
	if (pMat){
		pMat.Surf=pMat.Surf+(pSurf*u_Qte);
		pMat.Vol=pMat.Vol+(pVol*u_Qte);
		pMat.LengthM=pMat.LengthM + (u_LengthM*u_Qte);
	}
//Sinon on crée pMat et on initialise pMat.X=pX*u_Qte
	else
	{
		pMat=Material(u_Name,u_Desc,u_Costfactor,u_LengthM,u_Width,u_Thickness,u_Costtype, pSurf, pVol, u_Qte, u_Gqte, u_Cost);
		pMat.Surf=pSurf*u_Qte;
		pMat.Vol=pVol*u_Qte;
		pMat.LengthM=u_LengthM*u_Qte;
		Materials[Indice]=pMat;
		Indice++;
	}													
}

//Mise à jour du tableau Material: pMat,pSurf, pVol: Chants
function UpdateMaterial_1(u_Name, u_Desc, u_Costfactor, u_LengthM, u_Width, u_Thickness, u_Costtype, u_Qte, u_Gqte, u_Cost){
	var pMat_1=GetMaterialbyName_1(u_Name,u_Width);
	var pSurf=((u_LengthM*u_Width)/1000000);
	var pVol=((pSurf*u_Thickness)/1000);
	if (u_Gqte==0){u_Gqte=1;}
	if (u_Name=='&nbsp;'){
		return null;
	}
//Si pMat_1 existe: ancienne valeur + nouvelle
	if (pMat_1){
		pMat_1.Surf=pMat_1.Surf+(pSurf*u_Qte);
		pMat_1.Vol=pMat_1.Vol+(pVol*u_Qte);
		pMat_1.LengthM=pMat_1.LengthM + (u_LengthM*u_Qte);
	}
//Sinon on crée pMat_1 et on initialise pMat_1.X=pX*u_Qte
	else
	{
		pMat_1=Material_1(u_Name,u_Desc,u_Costfactor,u_LengthM,u_Width,u_Thickness,u_Costtype, pSurf, pVol, u_Qte, u_Gqte, u_Cost);
		pMat_1.Surf=pSurf*u_Qte;
		pMat_1.Vol=pVol*u_Qte;
		pMat_1.LengthM=u_LengthM*u_Qte;
		Materials_1[Indice1]=pMat_1;
		Indice1++;
	}													
}

// Ecrit le tableau Material à la fin - Tableau panneaux
function WriteMaterialsArray(){
	
	for (var i = 0; i < Materials.length; i++) {
		var pMat = Materials[i];
		WriteMaterial(pMat);
	}
}

// Ecrit le tableau Material à la fin - Tableau chants
function WriteMaterialsArray_1(){
	
	for (var i1 = 0; i1 < Materials_1.length; i1++) {
		var pMat_1 = Materials_1[i1];
		WriteMaterial_1(pMat_1);
	}
}

// Vide le tableau Materials après l'avoir écrit, remet l'indice de la ligne du tableau à 0, sinon décalage entre la ligne et la taille du tableau!
function ClearArray(){
	Materials=new Array;
	Indice=0;
}

var MacCostArray=new Array;

function MacCost(u_MacName, u_Cost) {
	var pMacCost = {Name: u_MacName, Cost:parseFloat(u_Cost)};
	return pMacCost;
}

function UpdateMacCost(u_MacName, u_Cost){
	var pMacCost=GetMacCostbyName(u_MacName);
	if (u_MacName=='&nbsp;'){
		return null;
	}
	if (pMacCost){
	}
	else
	{
		pMacCost=MacCost(u_MacName,u_Cost);
		MacCostArray[MacCostArray.length]=pMacCost;
	}													
}

 function GetMacCostbyName(u_MacName) {
	for (var i = 0; i < MacCostArray.length; i++) {
		var pMacCost = MacCostArray[i];
		if (pMacCost.Name==u_MacName)
		{	
			return pMacCost;
		}
	}
	return null;
}

 function GetMacCostValuebyName(u_MacName) {
	for (var i = 0; i < MacCostArray.length; i++) {
		var pMacCost = MacCostArray[i];
		if (pMacCost.Name==u_MacName)
		{	
			return pMacCost.Cost;
		}
	}
	return 0;
}

	

