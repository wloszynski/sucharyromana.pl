let btnJoke = document.querySelector("#nextJoke");
let bntRom = document.querySelector("#btnRom");

let pQuestion = document.querySelector(".content__question");
let pAnswer = document.querySelector(".content__answer");

let question = [
  "jaki jest ulubiony horror frontendowców? ",
  "a wiecie o co prosi programista w sklepie z pościelą? ",
  "co robi komponent, który zmienia DOM? ",
  "a wiecie jaka jest ulubiona zupa google chrome'a? ",
  "a kto w zespole pamięta wszystkie wersje piosenek? ",
  "o co pyta react developer w domu swojej byłem żony? ",
  "dlaczego backend w javascripcie jest niestabilny? ",
  "co robi scrum master po sprincie? ",
  "kogo nigdy nie słychać na wideo konferencjach? ",
  "jakie polecenie w git'cie programiści kochaja najbardziej? ",
  "dlaczego frontendowcom najłatwiej zamówić jedzenie z mc donalda? ",
  "co robi nastoletni programista, gdy mama nie patrzy ",
  "dlaczego nowa składnia jsa została doceniona przez środowisko łuczników ",
  "co frontendowiec mówi do konia? ",
  "dlaczego developer jak odpala inspektor kodu, to puka w ekran? ",
  "dlaczego nauczyciele to kiepscy programiści? ",
  "dlaczego frontendowiec wchodzi do opery? ",
  "jak się nazywa stolica wszystkich błędów? ",
  "wiecie kim byłaby fava, gdyby pracowała w IT? ",
  "wiecie kto jest ulubionym królem frontendowców? ",
  "wiecie jaki jest ulubiony pies frontendowca? ",
  "jaki jest ulubiony język programowania płazów? ",
  "wiecie jaki jest zorientowany obiektowo sposób na zarabianie pieniędzy? ",
  "jaka jest ulubiona część lotniska dla programisty? ",
  "co frontendowcowi sterczy z nosa? ",
  "jak się nazywa błąd związany z wyświetlaniem elementów w przeglądarce microsoftu? ",
  "co informatyk ma długiego i mowią, że nie da się tego złamać? ",
  "co mówi ksiądz na ślubie informatyka? ",
  "co bierze informatyk na turniej rycerski? ",
  "jaki jest mój ulubiony element na stronach internetowych? ",
  "przy czym najczęściej programista pomaga w domu? ",
  "jaki jest ulubiony serial programistów? ",
  "wiecie co jest dla mnie najważniejsze w tworzeniu stron? ",
  "o której programista zaczyna pracę? ",
  "jaki nadmorski kurort web developerzy lubią najbardziej? ",
  "jaka jest ulubiona kolęda front-endowca? ",
  "co śpiewa developer, który szuka błędu? ",
  "jaka jest ulubiona rasa psa frontendowca? ",
  "jaka jest ulubiona ryba programisty? ",
  "ulubione zwierze pmów? ",
  "co najbardziej pociąga studentów architektury? ",
  "kto najlepiej zna się na AWSie? ",
  "jaka jest ulubiona baza Chingis Hana? ",
  "jak nazywa się zespół Seattle grający rocka kryptograficznego? ",
  "jaka jest ulubiona maść administratorów? ",
  "w jakim kraju są najbardziej doświadczenie developerzy? ",
  "jaka metoda HTTP jest najczęście używana przez Wielką Nocą? ",
  "najpopularniejsze zagadnienie informatyczne wśród drobiu? ",
  "widzicie to, zobaczcie ",
  "jaka jest ulubiona część ciała front-endowca? ",
  "jak się nazywa udawany buziak? ",
  "jaką chatę buduje front-endowiec? ",
  "jaki jest najmniej lubiany superbohater programistów? ",
  "co najbardziej przeraża front-endowców? ",
  "najbardziej pomocny bohater horrorów? ",
  "ulubiona muzyka glonojadów? ",
  "ulubiona piosenka rails-rowców? ",
  "ulubiony przebój servesslessowców? ",
  "dlaczego psychiatrzy się znają na internecie? ",
  "po czym poznać, że kod jest czysty? ",
  "ulubiony aktor front-endowców ",
  "zagadka. w internecie leje wodę. ",
  "jaki jest mój ulubiony hook w reactcie? ",
  "oglądam nowy serial ostatnio ",
  "ulubiony sport użytkownika gita? ",
  "jaki jest najgorszy rodzaj pecha? ",
  "wiecie jaki jest teraz problem na frontendzie, że każda aplikacja ma być spa, uparli się ",
  "ulubiona bajka node developerów? ",
  "co tańczy developer naprawiający błędy? ",
  "ulubiona biblioteka egzorcystów? ",
  "dlaczego backendowcy to leniuchy? ",
  "co programista ma wspólnego z małpą? ",
  "co robi pies programisty na spacerze? ",
  "co łączy typescript i siłownię? ",
  "gdzie programiści zbierają grzyby? ",
  "jak nazywałby się dzisiaj various manx? ",
  "jak się nazywa najlepszy JSON? ",
  "kto najczęściej korzysta z console loga? ",
  "co programiści gotują na obiad? ",
  "what do we get, when we add Heidi Klum to Mohammed Ali? ",
  "w którym kraju programują najgorzej? ",
  "co mówi osoba, która żegna się z węglodanami? ",
  "śniadaniowa impreza programistów? ",
  "w Australii ostatnio nowy framework zrobili, wiecie jak się nazywa? ",
  "jak się nazywa dziedzina data science dla leniwych ludzi? ",
  "jaki system operacyjny funkcjonuje w windach? ",
  "czego fani Apple'a jedzą w święta najwięcej? ",
  "co mówi właściciel sklepu z artylerią? ",
  "wymyśliłem ostatnio nowy sport, boks z elementami jogi",
  "jak psy coś potrafią to każdy wie, że to jest ich know-how ",
  "ulubiony reżyser kosmitów? ",
  "wkurzona dziewczyna pyta programisty, co wybierasz wyjście do kina czy edytor kodu? ",
  "ulubiona konstelacja Janusza i Grażyny? ",
  "ulubiony framework jaszczurek? ",
  "gdzie front-endowcy spędzają\xa0wczasy? ",
  "ostatnio mówiłem, że front-endowcy spędzają czasy w spa",
  "kto jest największym przeciwnikiem używania constów? ",
  "wiecie kto przetwarzał dane osobowe w Śródziemiu? ",
  "do jakiego dormitorium uczniowie hogwardu kierowani są na kwarantannę ",
  "wiecie jak się nazywa najśmieszniejsza aplikacja na świecie? ",
  "ulubiony film sys-adminów? ",
  "ulubiona bajka project managerów? ",
  "wiecie co łączy programistów i policjantów? ",
  "wiecie co developer ma po lewej stronie klatki piersiowej? ",
  "programista został skazany, trafił do więzenia i po paru dniach pobytu pisze do żony ",
  "wiecie jaką bajkę najbardziej lubiłem w dzieciństwie? ",
  "rodzice alergików zostali zapytani jak często dzieci mają katar? ",
  "wiecie co robią developerzy kiedy potrzebują czułości? ",
  "jak sie nazywa ruby developer na wczasach? ",
  "jakiego języka programowania uczą się fani reggae? ",
  "jak się nazywa błąd w norwerskiej przeglądarce? ",
  "ulubiona drużyna frontendowców ",
  "co śpiewają go developerzy przez pracą",
  "wiecie co piekarz robi na siłowni? ",
  "jakich cukierków nie lubią developerzy? ",
  "dlaczego warto na siłownię chodzić we dwójkę? ",
  "jak sie nazywa mid-developer z Zakopanego? ",
  "dlaczego pm znają się na napojach gazowanych? ",
  "co łączy zółwie ninja i wkurwionych ludzi na slacku? ",
  "jak się nazywa developer, który ciągle robi sobię bekę? ",
  "wiecie jakiego rodzaju wykresu nie lubię kodzić? ",
  "na jakiej stacji tankują devopsi? ",
  "ulubiona zupa Francuzów? ",
  "Mozzarella, mortadella, tarantella, ecco la per me ",
  "a ile trwało najkrótsze zlecenie dla designera? ",
  "jak się nazywa najstarszy człowiek stojący przy garach? ",
  "wiecie jakiej postaci z Mortal Combat najbardziej nie lubią YouTuberzy? ",
  "wiecie jak się nazywa najpopularniejszy web master na świecie? ",
  "dlaczego front-endowcy zawsze wyglądają tak młodo? ",
  "wiecie jaki jest ulubiony film kotów? ",
  "dlaczego devopsi kupują nabiał u Weroniki? ",
  "ulubiona piosenka front-endowców? ",
  "jak czesi mówią na niewielkie elementy w HTMLu? ",
  "jak ma na imię syn JavaScriptu? ",
  "jak nazywamy sytuację, w której ktoś bardzo źle ostylował diva ",
  "co devopsi kupują na odpuście w licheniu? ",
  "kanapka z dużą rybą i ogórkiem ",
  "ulubiony samochód qa'ów ",
  "jak wystraszyć react developera? ",
];
let answer = [
  " Freddy kontra JSON",
  " o code review",
  " remount",
  " RAMen",
  " GITarzysta",
  " J S X",
  " bo stoi na jednym nodzie",
  " myje jiry",
  " zmutowanych żółwi ninja",
  " git majonez",
  " bo mają hamburger menu",
  " pulluje mastera",
  " bo prowadziła arrow functions",
  " Wiśta vue",
  " bo wchodzi do DOMu",
  " bo korzystają tylko z tablic",
  " żeby pooglądać divy",
  " bugdat",
  " devopsem",
  " August III SASS",
  " <span>iel",
  " żabascript",
  " dziedziczenie",
  " terminal",
  " babel",
  " edge case",
  " hasło do kompa",
  " pobieranie zakończone",
  " kopię zapasową",
  " favicona",
  " przy parsowaniu",
  " opowieści, skrypty",
  " józef expierience",
  " od devontej",
  " Łeba",
  " li li li li laj",
  " chcę oglądać twoje logi, logi, logi, logi",
  " border color",
  " PSTRING",
  " JIRAffa",
  " Block chain",
  " Marian Krzaklewski",
  " Mongo DB",
  " Alice in blockchains",
  " sudocrem",
  " W meksyku, bo tam każdy to senior",
  " POST",
  " reKUREncja",
  " no to jest szczyt",
  " web",
  " cmockup",
  " HTML",
  " refactor",
  " nawiedzony dom",
  " debugiman",
  " algo-rytmy",
  " ruby ruby ruby rydz",
  " AWS lambada",
  " bo wiedzą jak działa łeb",
  " po tym że się myje",
  " jquery",
  " e-kran",
  " use-eff",
  " opowieści pamięci podręcznej",
  " squash",
  " PHP",
  " ale chyba znalazłem u Anii w szafce lekarstwo na to - NO SPA",
  " Nadjeżdża Noddy, klaksonem wita nas",
  " woogie boogie",
  " Nodemon, albo no demon",
  " Bo ciągle robią REST",
  " oboje pracują na branchach",
  " Fetchuje brancha",
  " Tu i tu są silne typy",
  " W serverlessie",
  " letious manx",
  " Jason Born",
  " Log Lady",
  " bURLial",
  " A box-mortadella",
  " we Włoszech, bo ciągle piszą spaghetti",
  " Carbonara",
  " Branch",
  " Kangular",
  " Data spokój",
  " Windows",
  " Mac'owca",
  " u mnie działa",
  " nazywa się flexbox",
  " ale mało kto wie, że koty mają swoje know-meow",
  " Woody Alien",
  " A on mówi: IDE",
  " Pas Oniona",
  " Gadsby",
  " W SPA",
  " To ci bogatsi, a ci biedniejsi w dormitorium",
  " Constantyn",
  " Rodo Baggins",
  " Do grypindoru",
  " Adobe XD",
  " terminal",
  " gdzie jest demo?",
  " komendy",
  " s r c",
  " nie jest tak źle, przynajmniej są klawisze",
  " Rumca.JS",
  " Matka odpowiada: córka ma sezonowo, a syn chronicznie",
  " zwiększają\xa0czułość myszki",
  " Ruby on Rejs",
  " Rusta",
  " Upiór w operze",
  " Ajax Amsterdam",
  " Wake me up before you go go",
  " Zakwasy",
  " Malaga",
  " Bo do sztanga trzeba dwojga",
  " regóral",
  " bo codziennie robią calle",
  " wychodzą z kanału",
  " Backendowiec",
  " Pie Chartów",
  " Na Shellu",
  " Bon Żurek",
  " Zuppa Romana",
  " A dobe",
  " Gary Oldman",
  " Sub Zero",
  " Peter Parker",
  " Bo robią dużo SPA",
  " W jak Wędeczka",
  " Bo lubią ser Wery",
  " Mój dom, w którym piszę od lat, mój dom, w którym płaczę nie raz, czy to znasz? to znasz?",
  " maledivy",
  " JSON",
  " diviacja",
  " devopsjonalja",
  " orka na ogórze",
  " buggati",
  " hookiem",
];
let count = 0;
let romanCounter = 0;

const writeText = (phrase, elementName) => {
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      // add next character to h1
      document.querySelector(elementName).innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    // check if dataText[i] exists
    if (i < phrase[i]?.length) {
      // text exists! start typewriter animation
      typeWriter(phrase[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation

  StartTextAnimation(0);
};

const printingJoke = () => {
  document.querySelector(".content__btn").style.pointerEvents = "none";
  const number = Math.floor(Math.random() * answer.length);

  pQuestion.textContent = pAnswer.textContent = "";
  // document.querySelector(".content__logo").style.visibility = "hidden";
  // document.querySelector(".content__logo").style.left = "0%";
  // document.querySelector(".content__logo").style.transform = "scaleX(1)";

  // setTimeout(() => {
  //   document.querySelector(".content__logo").style.visibility = "visible";
  //   document.querySelector(".content__logo").style.left = "50%";

  //   document.querySelector(".content__text").style.visibility = "visible";
  //   document.querySelector(".content__text").style.left = "60%";

  //   document.querySelector(".content__logo").style.transform = "scaleX(-1)";
  // }, 5000);

  writeText([question[number]], ".content__question");
  console.log([question[number]].length);
  console.log();

  setTimeout(
    writeText.bind(undefined, [answer[number]], ".content__answer"),
    question[number].length * 100 + 2000
  );

  setTimeout(() => {
    document.querySelector(".content__btn").style.pointerEvents = "auto";
  }, question[number].length * 100 + 2000);
};

btnJoke.addEventListener("click", printingJoke);

window.addEventListener("load", printingJoke);
