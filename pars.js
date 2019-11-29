// sessionStorage.setItem("myKey1257755", s); //запишем его в хранилище по ключу "myKey"	 


/* $.ajax({
    type: "POST",
    url: "https://wikirip.site/php-file.php",
    data: (s)
});	  */



// var returnObj1 = localStorage.getItem("myKey1257789y");
function time2(){
	return parseInt(new Date().getTime())
}
function time(){						 
	return parseInt(new Date().getTime() / 150000 + 3000)
}

// alert(time())//1300051970
//2147483647	
var product_id = time();
var product_id2 = time2();  
console.log(product_id);
console.log(product_id2); 
// 1568777863642

var s = ''; 
var name = '';
var names = ''; 
var lastView = ''; 
var t = ''; 
var str1imgsrc = ''; 
var cem = ''; 
var yearbirth = ''; 
var yeardeath = '';  
var word = '';    
var location1 = '';  
var latlon = ''; 
var latlonsum = '';  

Data = new Date();
years = Data.getFullYear();
months = Data.getMonth();
days = Data.getDate();
hour = Data.getHours();
minutes = Data.getMinutes();
seconds = Data.getSeconds();

// Вывод
date_id = years + "-" + months + "-" + days + " " + hour + ":" + minutes + ":" + seconds; 
date_ids = years + "-" + months + "-" + days; 

var count4 = $( "#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > div > table > tbody > tr > td:nth-child(4) > div:contains('198')" ).length; // узнаем количество слов Лопатин
console.log(count4);
obj1 = $("#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > div > input:nth-child(2)").val(); 
localStorage.setItem("myKey1", obj1);
console.log(obj1);
// obj2 = obj1.setDate(obj1 + 15);
// localStorage.setItem("myKey2", obj2);
//console.log(obj2);
for (let i = 1; i <= count4; i++) { // выведет 0, затем 1, затем 2  
	product_id++;
	$( "#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > div > table > tbody > tr:nth-child(" + i + ")" ).trigger( "click" );
	//	s += $(this).html(); 
	
	names = $( "#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > div" ).text(); 
	cem = $( "#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2) > div" ).text(); 
	yearbirth = $( "#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(3) > div" ).text();  
	yeardeath = $( "#htmlButtonWindowd9ca5618-2818-d1e0-cb4b-e15b9279feb6 > div.html-button-reveal-content.with-caption > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(4) > div" ).text(); 
	name = names + ', Новосибирск, ' + cem + ' кладбище, ' + yearbirth + ' - ' + yeardeath; 
	word = names + '-' + cem + '_' + yearbirth + '_' + yeardeath; 
	lastView =  sessionStorage.getItem("lastView:ritual");	
	//	var lastView =  '{"lat":54.94964258610843,"lng":82.82400673766261,"zoom":11}';
	
	var lastView = JSON.parse(lastView);
	var last1 = lastView.lat;  
	var last2 = lastView.lng;  
	var laststr1 = String(lastView.lat);  
	var laststr2 = String(lastView.lng);  
	var latlonsum = last1 + last2;
	var latlon = last1 + ', ' + last2;
	
	//	console.log(laststr1);
	//	console.log(laststr2);
	//	console.log(latlonsum);  
	//	console.log(product_id);
	console.log(count4 - i);  
	console.log(obj1); 
	//	lastView = transliterate(lastView);  	
	//	location1 = lastView;  
	
	//strip(s1); 
	//	name = cutTegs(name);
 	t = transliterate(word);  
	s += "INSERT INTO `oc2_product_description` (`product_id`, `language_id`, `name`, `description`, `tag`, `meta_title`, `meta_h1`, `meta_description`, `meta_keyword`) VALUES(('" + product_id + "'), 1, ('" + name + "'), ('" + name + "'), ('" + name + "'), ('" + name + "'), ('" + name + "'), ('" + name + "'), ('" + name + "'));\r\n";	 
	s += "INSERT INTO `oc2_product_image` (`product_id`, `image`, `image_remote_image`) VALUES(('" + product_id + "'), ('" + str1imgsrc + "'), ('" + str1imgsrc + "'));\r\n";
	s += "INSERT INTO `oc2_product_to_store` (`product_id`, `store_id`) VALUES(('" + product_id + "'), 0);\r\n"; 
	s += "INSERT INTO `oc2_url_alias` (`url_alias_id`, `query`, `keyword`) VALUES(('" + product_id + "'), 'product_id=" + product_id + "', ('" + t + "'));\r\n"; 	 
	s += "INSERT INTO `oc2_product` (`product_id`, `model`, `sku`, `upc`, `ean`, `jan`, `isbn`, `mpn`, `location`, `quantity`, `stock_status_id`, `image`, `image_remote1`, `image_remote2`, `manufacturer_id`, `shipping`, `price`, `points`, `tax_class_id`, `date_available`, `weight`, `weight_class_id`, `length`, `width`, `height`, `length_class_id`, `subtract`, `minimum`, `sort_order`, `status`, `viewed`, `date_added`, `date_modified`) VALUES(('" + product_id + "'), ('" + name + "'), ('" + t + "'), '', '', ('polakivpolakiv2@gmail.com'), ('" + latlonsum + "'), ('" + latlon + "'), ('" + location1 + "'), 939, 7, (''), (''), (''), 5, 1, 100.0000, 200, 9, ('" + date_ids + "'), 146.40, 2, 0.00, 0.00, 0.00, 1, 1, 1, 0, 1, 0, ('" + date_id + "'), ('" + date_id + "'));\r\n"; 	 
	
	product_id++;
}

function transliterate(word){
    var answer = ""
	, a = {};
	
	a["Ё"]="yo";a["Й"]="i";a["Ц"]="ts";a["У"]="u";a["К"]="k";a["Е"]="e";a["Н"]="n";a["Г"]="g";a["Ш"]="sh";a["Щ"]="sch";a["З"]="z";a["Х"]="h";a["Ъ"]="";
	a["ё"]="yo";a["й"]="i";a["ц"]="ts";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="";
	a["Ф"]="f";a["Ы"]="i";a["В"]="v";a["А"]="a";a["П"]="p";a["Р"]="r";a["О"]="o";a["Л"]="l";a["Д"]="d";a["Ж"]="zh";a["Э"]="e";
	a["ф"]="f";a["ы"]="i";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";a["д"]="d";a["ж"]="zh";a["э"]="e";
	a["Я"]="ya";a["Ч"]="ch";a["С"]="s";a["М"]="m";a["И"]="i";a["Т"]="t";a["Ь"]="";a["Б"]="b";a["Ю"]="yu";
	a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="";a["б"]="b";a["ю"]="yu";a[" "]="-";a["."]="-"; 
	
	for (i in word){
		if (word.hasOwnProperty(i)) {
			if (a[word[i]] === undefined){
				answer += word[i];
				} else {
				answer += a[word[i]];
			}
		}
	}
	return answer;
} 
document.write("<form id=auth method=post action=mysitephp-file.php><p> <textarea name=messageFF rows=5>" + s + "</textarea></p><p><input type=submit></p></form>");
console.log(s); 
setTimeout( '	$( "#auth > p:nth-child(2) > input[type=submit]" ).trigger( "click" );', 15000 );
//document.location.reload(true);
//setTimeout(function(){document.location.reload(true)}, 15000); 




