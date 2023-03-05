//characters//
let charpic = ["characterImages/amber.jpg","characterImages/kaeya.jpg","characterImages/lisa.jpg","characterImages/jean.jpg","characterImages/venti.jpg","characterImages/diluc.jpg",
"characterImages/barbara.jpg","characterImages/tartaglia.jpg","characterImages/zhongli.jpg","characterImages/ningguang.jpg","characterImages/keqing.jpg","characterImages/ganyu.jpg",
"characterImages/xiao.jpg","characterImages/qiqi.jpg","characterImages/beidou.jpg","characterImages/kazuha.jpg","characterImages/ayaka.jpg","characterImages/thoma.jpg","characterImages/yaemiko.jpg",
"characterImages/yoimiya.jpg","characterImages/sara.jpg","characterImages/shogun.jpg","characterImages/gorou.jpg","characterImages/kokomi.jpg"];

let characters = ["Amber is a Pyro character.", "Kaeya Alberich is a Cyro character.",
"Lisa Minci is an Electro character.","Jean Gunnhildr is an Anemo character.",
"Venti is an Anemo character.", "Diluc Ragnvindr is a pyro character.",
"Barbara Pegg is a Hydro character.", "Tartaglia, also known by his alias 'Childe', is a Hydro character.",
"Zhongli is a Geo character.", "Ningguang is a Geo character", "Keqing is an Electro character",
"Ganyu is a Cryo character.", "Xiao is an Anemo character.", "Qiqi is a Cryo character.",
"Beidou is an Electro character.", "Kaedehara Kazuha is an Anemo character.", "Kamisato Ayaka is a Cryo character.",
"Thoma is a Pyro character.", "Yae Miko, also known as Guuji Yae or the Guuji, is an Electro character.",
"Naganohara Yoimiya is a Pyro character.", "Kujou Sara is an Electro character.",
"The Raiden Shogun is an Electro character.", "Gorou is a Geo character.", "Sangonomiya Kokomi is a Hydro character."];

let details = ["As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more challenging task.",
"Kaeya is the Cavalry Captain of the Knights of Favonius. He is held in high regard by the people of Mondstadt — even with all his eccentricities and secrets.",
"A powerful mage recognized as Sumeru Academia's most distinguished graduate in 200 years, Lisa has since returned to Mondstadt to become the humble Librarian of the Knights of Favonius.",
"The daughter of Frederica Gunnhildr and Seamus Pegg, the older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and is tirelessly working to maintain the City of Freedom.",
"He is a free-spirited, wine-loving bard in Mondstadt and the current mortal vessel of Barbatos, the Anemo Archon.",
"Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt society. While a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way.",
"She is the deaconess of the Church of Favonius and a self-proclaimed 'idol' after learning about them from the intrepid adventurer Alice. She is also the daughter of Frederica Gunnhildr and Seamus Pegg, and the younger sister of Jean. Through Frederica, she is a descendant of the prestigious Gunnhildr Clan.",
"He is the Eleventh of the Fatui Harbingers. Following danger wherever he goes, Childe is always eager for a challenge, making him extremely dangerous despite being the youngest member.",
"He is a consultant of the Wangsheng Funeral Parlor. He is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal.",
"She is the Tianquan of the Liyue Qixing and owns the floating Jade Chamber in the skies of Liyue.", 
"As the Yuheng of the Liyue Qixing, she is someone who seeks her own answers instead of idly letting chaos run amok in Liyue. She chooses her own path with her own power and ability, instead of letting the gods determine her fate.",
"She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as the general secretary of the Liyue Qixing.",
"He is an adeptus, under the name Alatus, and the only known remaining member of the five foremost Yakshas dispatched by Morax to subdue the demonic spirits that plagued Liyue. He currently resides in Wangshu Inn and mostly secludes himself from crowds and human interactions.",
"Resurrected as a zombie by the adepti, she has ended up in Baizhu's care and now works at Bubu Pharmacy in Liyue Harbor.",
"She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang — a trait that the other appreciates, yet grows irritated by.",
"A wandering samurai of the once-famed Kaedehara Clan, Kazuha is a temporary crewmember of The Crux.",
"She is the oldest daughter of the Kamisato Clan and younger sister of Kamisato Ayato. Being beautiful, elegant, and graceful, the common folk have nothing to bad-mouth Ayaka about. Because of her social status as the eldest daughter of the Kamisato Clan of the Yashiro Commission and as the Shirasagi Himegimi, Ayaka is seen as a model of perfection.",
"Hailing from Mondstadt, he is the housekeeper for the Kamisato Clan, and also a well-known 'fixer' in Inazuma.",
"Miko oversees the Grand Narukami Shrine and is the owner of the Yae Publishing House.",
"She is the daughter of Naganohara Ryuunosuke and the current owner of Naganohara Fireworks. With her colorful fireworks and outgoing personality, Yoimiya is loved by everyone on Narukami Island, as they believe summer is not the same without her.",
"A tengu, Sara is the adopted daughter of the Kujou Clan of the Tenryou Commission. Loyal to both her clan and the Shogun, Sara carries out her orders by the Shogun's will.",
"She is the vessel of Beelzebul, the current Electro Archon of Inazuma.",
"He is the courageous and reliable general of the Watatsumi Army, a leader whose men can always place their trust in.",
"The young Divine Priestess of Watatsumi Island and a descendant of the Sangonomiya Clan, Kokomi is in charge of most of Watatsumi's affairs, shouldering heavy responsibilities alone in hopes for giving Watatsumi Island's people the hopes and happiness that they desire."];

let aboutchar = function() {

    let character = document.getElementsByName("characters")[0].selectedIndex;
    let para = document.getElementById("characterInfo");
    
    let images = document.getElementsByTagName("img");
    let image = images[1];

    image.src = charpic[character];
    image.style.width = 200;
    image.style.height = 200;

    para.innerHTML = characters[character];
    para.innerHTML += "\n";
    para.innerHTML += details[character];
}

//elements//

let elements = ["Elements/anemo.jpg","Elements/geo.jpg","Elements/electro.jpg",
"Elements/dendro.jpg","Elements/hydro.jpg","Elements/pyro.jpg","Elements/cryo.jpg"];

let desc = ["<b>Anemo</b>; The element of Mondsadt, bestowed upon vision holders by Anemo Archon Barbatos, the God of Freedom.","<b>Geo</b>; The element of Liyue, bestowed upon vision holders by Geo Archon Rex Lapis/Morax, the God of Contracts.","<b>Electro</b>; The element of Inazuma, bestowed upon vision holders by Electro Archon Beelzebul, the God of Eternity.","<b>Dendro</b>; The element of Sumeru, bestowed upon vision holders by Dendro Archon Kusanali, the God of Wisdom.","<b>Hydro</b>; The element of Fontaine, bestowed upon vision holders by the currently unnamed Hydro Archon; the Hydro Archon is the God of Justice.","<b>Pyro</b>; The element of Natlan, bestowed upon vision holders by the currently unnamed Pyro Archon; the Pyro Archon is the God of War.","<b>Cryo</b>; The element of Snezhnaya, bestowed upon vision holders by The Tsaritsa. Her ideal is unknown."];

let para1 = document.getElementById("archon");
let counter = 0;
let next = function(){
    let images1 = document.getElementsByTagName("img");
    let image1 = images1[1];
    counter++;
    if (counter > elements.length){
        counter = 0;
    }
    for(let i = 0; i < elements.length; i++){
        if (counter == i){
            image1.src = elements[i];
            image1.style.width = 200;
            image1.style.height = 200;
            para1.innerHTML = desc[i];
        }
    }
}
let previous = function(){
    let images1 = document.getElementsByTagName("img");
    let image1 = images1[1];
    counter--;
    if (counter < 0){
        counter = elements.length;
    }
    for(let i = 0; i < elements.length; i++){
        if (counter == i){
            image1.src = elements[i];
            image1.style.width = 200;
            image1.style.height = 200;
            para1.innerHTML = desc[i];
        }
    }
}


mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}