import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const topics = document.createElement("div");
  topics.classList.add("topics");

  konu.forEach((item) => {
    const tabs = document.createElement("div");
    topics.appendChild(tabs);
    tabs.classList.add("tab");
    tabs.textContent = item;
  });
  return topics;
};

const tabEkleyici = (secici) => {
  const tabsContainer = document.querySelector(secici);
  axios
    .get("http://localhost:5001/api/konular")
    .then(function (response) {
      const tab = Tablar(response.data.konular);
      tabsContainer.appendChild(tab);
      console.log(response.data);
    })
    .catch(function (error) {
      tabsContainer.textContent = "Not found";
      console.log(error);
    });
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Tablar, tabEkleyici };
