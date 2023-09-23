import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  card.classList.add("card");
  const headLine = document.createElement("div");
  headLine.classList.add("headline");
  headLine.textContent = makale.anabaslik;
  const authorInfo = document.createElement("div");
  authorInfo.classList.add("author");

  card.append(headLine, authorInfo);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  authorInfo.appendChild(imgContainer);

  const authorImg = document.createElement("img");
  authorImg.setAttribute("src", makale.yazarFoto);

  const authorName = document.createElement("span");
  authorName.textContent = `${makale.yazarAdi} tarafından`;
  imgContainer.append(authorImg, authorName);

  card.setAttribute("id", makale.id);
  card.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });
  return card;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const makaleContainer = document.querySelector(secici);
  axios
    .get("http://localhost:5001/api/makaleler")
    .then(function (response) {
      console.log(response);
      const makalelerArray1 = response.data.makaleler.javascript;
      const makalelerArray2 = response.data.makaleler.bootstrap;
      const makalelerArray3 = response.data.makaleler.teknoloji;
      const makalelerArray4 = response.data.makaleler.jquery;
      const makalelerArray5 = response.data.makaleler["node.js"];

      makalelerArray1.forEach((makale) => {
        const card1 = Card(makale);
        makaleContainer.appendChild(card1);
      });
      makalelerArray2.forEach((makale) => {
        const card2 = Card(makale);
        makaleContainer.appendChild(card2);
      });
      makalelerArray3.forEach((makale) => {
        const card3 = Card(makale);
        makaleContainer.appendChild(card3);
      });
      makalelerArray4.forEach((makale) => {
        const card4 = Card(makale);
        makaleContainer.appendChild(card4);
      });
      makalelerArray5.forEach((makale) => {
        const card5 = Card(makale);
        makaleContainer.appendChild(card5);
      });
    })
    .catch(function (error) {
      makaleContainer.textContent = "Not found";
      console.log(error);
    });
};

export { Card, cardEkleyici };
