<!--------*******************-------->

function from_brands()
{
	var a;
	a=document.getElementById('frombrand').value;
	document.getElementById('des1').style.visibility="hidden";
	document.getElementById('fromproduct').options.length = 0;

if(a=='Abid Jewellers')
	{
		document.getElementById('fromproduct').style.visibility="visible";
		document.getElementById('fromproduct').options[0]= new Option('Select Product of Jewellery');
		document.getElementById('fromproduct').options[1]= new Option('Semi Precious Necklace');
		document.getElementById('fromproduct').options[2]= new Option('Semi Precious Rings');
		document.getElementById('fromproduct').options[3]= new Option('Artificial Brecelets');
		
	}
 else if(a=='ARY Jewellers')
	{
		document.getElementById('fromproduct').style.visibility="visible";
		document.getElementById('fromproduct').options[0]= new Option('Select Product of Jewellery');
		document.getElementById('fromproduct').options[1]= new Option('Original Earrings');
		document.getElementById('fromproduct').options[2]= new Option('Original Bangeles');
		document.getElementById('fromproduct').options[3]= new Option('Artificial Pendent');
	}
	else if(a=='Deccan Jewellers')
	{
		document.getElementById('fromproduct').style.visibility="visible";
		document.getElementById('fromproduct').options[0]= new Option('Select Product of Jewellery');
		document.getElementById('fromproduct').options[1]= new Option('Original Rings');

		document.getElementById('fromproduct').options[2]= new Option('Artificial Earrings');
		document.getElementById('fromproduct').options[3]= new Option('Semi Precious Bangeles');
	}

}
<!------**************************----->
function from_products()
{
	var a;
	a=document.getElementById('fromproduct').value;
	if(a=='Semi Precious Necklace')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/nec_img/n3.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li>Eye-catching, unique and charming, this Wizard Feather Pendant Necklace from 100 Degreez is designed to complement your style conscious personality in a vibrant, exotic way. Though simple and minimal in design the quality, craftsmanship and detail ensure you make a splash wherever you go.<br><br></li><li><b>Color</b> : Blue</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : 10259AC20WEDPKFAS</li>";
	}
	else if(a=='Semi Precious Rings')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/ring_img/r1.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_image').height="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> : Bronze</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> : Steel</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> :Pakistan</li><li><b>SKU</b> : FA210AC47QVOPKFAS</li>";
	}
	else if(a=='Artificial Brecelets')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/brac_img/b7.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> : Blue</li><li><b>With Box</b> : No</li><li><b>Authentic</b> :100% Artificial Product</li><li><b>Main material</b> : Genuine Leather</li><li><b>Season</b> : Summer</li><li><b>Production country</b> :Hong Kong</li><li><b>SKU</b> : AC330AC41AHYPKFAS</li>";
	}
	
	else if(a=='Original Earrings')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/gold_img/g4.jpg";
	document.getElementById('des1_image').width="200";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> : Golden</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> :Antique Material</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : ER520AC33BQWPKFAS</li>";
	}
	else if(a=='Original Bangeles')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/ban_img/b1.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> :Golden</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> : GOLD PLATED - METAL ALLOYS</li><li><b>Season</b> :All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : FA210AC13QPEPKFAS</li>";
	}
	else if(a=='Artificial Pendent')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/pen_img/p1.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> :Silver</li><li><b>Authentic</b> : 100% Artificial Product</li><li><b>Main material</b> : Mixed metal</li><li><b>Season</b> :All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : CH462AC77TLQPKFAS</li>";
	}
	else if(a=='Original Rings')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/ring_img/r2.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> : Golden</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> :GOLD PLATED - METAL ALLOYS</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> :Pakistan</li><li><b>SKU</b> : RA461AC83CXOPKFAS</li>";
	}
	
	else if(a=='Artificial Earrings')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/ear_img/e5.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> : Silver</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> :Antique Material</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : ER520AC33BQWPKFAS</li>";
	}
	else if(a=='Semi Precious Bangeles')
	{
	document.getElementById('des1').style.visibility="visible";
	document.getElementById('des1_image').src="images/ban_img/b5.jpg";
	document.getElementById('des1_image').width="400";
	document.getElementById('des1_para').innerHTML="<li><b>Color</b> :Golden</li><li><b>Authentic</b> : 100% Semi Precious Product</li><li><b>Main material</b> : Gold Polished Copper</li><li><b>Season</b> :All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : FA210AC13QPEPKFAS</li>";
	}
}
<!--------***************************-------->
function to_brands()
{
	var a;
	a=document.getElementById('tobrand').value;
	document.getElementById('des2').style.visibility="hidden";
	document.getElementById('toproduct').options.length = 0;
	if(a=='Ennz Designer Jewellery')
	{
		document.getElementById('toproduct').style.visibility="visible";
		document.getElementById('toproduct').options[0]= new Option('Select Product of Jewellery');
		document.getElementById('toproduct').options[1]= new Option('Artificial Earrings');
		document.getElementById('toproduct').options[2]= new Option('Semi Precious Bangeles');
		document.getElementById('toproduct').options[3]= new Option('Original Rings');
	}
	else if(a=='Amber Gems & Jewellery')
	{
		document.getElementById('toproduct').style.visibility="visible";
		document.getElementById('toproduct').options[0]= new Option('Select Product of  Jewellery');
		document.getElementById('toproduct').options[1]= new Option('Artificial Pendent');
		document.getElementById('toproduct').options[2]= new Option('Original Bangeles');
		document.getElementById('toproduct').options[3]= new Option('Original Earrings');
}
	else if(a=='Chottani Jewellers')
	{
		document.getElementById('toproduct').style.visibility="visible";
		document.getElementById('toproduct').options[0]= new Option('Select Product of  Jewellery');
		document.getElementById('toproduct').options[1]= new Option('Semi Precious Rings');
		document.getElementById('toproduct').options[2]= new Option('Artificial Brecelets');
		document.getElementById('toproduct').options[3]= new Option('Semi Precious Necklace');
	}

}
<!------=========**********========------->
function to_products()
{
	var a;
	a=document.getElementById('toproduct').value;
	if(a=='Artificial Earrings')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/ear_img/e6.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> : Silver</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> :Antique Material</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : ER520AC33BQWPKFAS</li>";
	}
	else if(a=='Semi Precious Bangeles')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/ban_img/b7.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> :Golden</li><li><b>Authentic</b> : 100% Semi Precious Product</li><li><b>Main material</b> : Gold Polished Copper</li><li><b>Season</b> :All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : FA210AC13QPEPKFAS</li>";
	}
	else if(a=='Original Rings')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/gold_img/g5.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> : Golden</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> :GOLD PLATED - METAL ALLOYS</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> :Pakistan</li><li><b>SKU</b> : RA461AC83CXOPKFAS</li>";
	}
	else if(a=='Artificial Pendent')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/pen_img/p5.jpg";
	document.getElementById('des2_image').width="200";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> :Silver</li><li><b>Authentic</b> : 100% Artificial Product</li><li><b>Main material</b> : Mixed metal</li><li><b>Season</b> :All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : CH462AC77TLQPKFAS</li>";
	}
else if(a=='Original Bangeles')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/ban_img/b3.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_image').height="400";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> :Golden</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> : GOLD PLATED - METAL ALLOYS</li><li><b>Season</b> :All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : FA210AC13QPEPKFAS</li>";
	}
	else if(a=='Original Earrings')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/ary org/5.jpg";
	document.getElementById('des2_image').width="200";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> : Golden</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> :Antique Material</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : ER520AC33BQWPKFAS</li>";
	}
	else if(a=='Semi Precious Rings')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/ring_img/r4.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> : Bronze</li><li><b>With Box</b> : No</li><li><b>Authentic</b> : 100% Original Product</li><li><b>Main material</b> : Steel</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> :Pakistan</li><li><b>SKU</b> : FA210AC47QVOPKFAS</li>";
	}
	
	else if(a=='Semi Precious Necklace')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/nec_img/n4.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_para').innerHTML="<li>Eye-catching, unique and charming, this Wizard Feather Pendant Necklace from 100 Degreez is designed to complement your style conscious personality in a vibrant, exotic way. Though simple and minimal in design the quality, craftsmanship and detail ensure you make a splash wherever you go.<br><br></li><li><b>Color</b> : Blue</li><li><b>Season</b> : All Seasons</li><li><b>Production country</b> : Pakistan</li><li><b>SKU</b> : 10259AC20WEDPKFAS</li>";
	}
	
	else if(a=='Artificial Brecelets')
	{
	document.getElementById('des2').style.visibility="visible";
	document.getElementById('des2_image').src="images/brac_img/b4.jpg";
	document.getElementById('des2_image').width="400";
	document.getElementById('des2_para').innerHTML="<li><b>Color</b> : Blue</li><li><b>With Box</b> : No</li><li><b>Authentic</b> :100% Artificial Product</li><li><b>Main material</b> : Genuine Leather</li><li><b>Season</b> : Summer</li><li><b>Production country</b> :Hong Kong</li><li><b>SKU</b> : AC330AC41AHYPKFAS</li>";
	}

}