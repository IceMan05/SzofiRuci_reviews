// Vélemények listája (minta adat)
const reviews = [
    {
        text: "Többször vásároltam már és mindig tökéletes volt a méret és a minőség! Zsófi segítőkész és figyelmes. A ruhák pedig nagyon gyorsan megérkeznek🥰",
        name: "Katalin Kiss",
        date: "2024.11.28",
        image: "images/g9.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNQaWF5aVVnEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgICPiayiUg%7CCgwI7sGSugYQuIK06AI%7C"
    },
    {
        text: "Segítőkész eladó. A ruhák is szépek. Biztos törzsvásárló leszek 😊😊😊",
        name: "Nikoletta Kardos",
        date: "2024.12.06",
        image: "images/g10.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURQci03RTd3RRAB!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDPr-7E7wE%7CCgwIvqTMugYQoJiLiAE%7C"
    },
    {
        text: "Ha szereted az egyedit, a stílusosat, a minőséget,és kényeztetnéd magad egy csodás ruhadarabbal vagy kiegészítővel, és fontos a számodra, hogy egy mosolygós arc fogadjon, akkor ide mindenképp látogass el. Minden itt vásárolt ruhát imádok, és amerre járok dicséretek hadát kapom az emberektől. Itt még egy szomorúbb nap után is vidáman, és kellemes emlékekkel távozom minden alkalommal...Olvass tovább",
        name: "Móni Tenki",
        date: "2024.09.06",
        image: "images/f1.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/monika.tenki/posts/pfbid05APgzcRNifMj2caXhbRwnVPehHT8YmjaZkcW4b1vn5gVU1NK49pA52TCs79zRAsyl",
        fullReviewLink: "https://www.facebook.com/monika.tenki/posts/pfbid05APgzcRNifMj2caXhbRwnVPehHT8YmjaZkcW4b1vn5gVU1NK49pA52TCs79zRAsyl"
    },
    {
        text: "Online rendeltem, Zsófi nagyon aranyos, megbízható. Illatos csomagot küld és nincsenek túl árazva a termékek. 😊",
        name: "Dorina Márton",
        date: "2024.12.03",
        image: "images/g3.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURQa2M3TFhBEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDPkc7LXA%7CCgsIj8i6ugYQsK70Cg%7C"
    },
    {
        text: "Tökéletes méret, udvarias eladó, szép ruhák! Csak ajánlani tudom",
        name: "Ildikó Bódiné Potyi",
        date: "2024.03.14",
        image: "images/f4.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/ildiko.bodinepotyi/posts/pfbid0dnZgHrm4TAHzhuxTXKUeLiVqR4DW9Q9MNfSbHvzcLjDdwTAD6RHib1PFkvAHMdZRl"
    },
    {
        text: "A rendelt ruhák leírásnak megfelelőek. Kedves segítőkész eladó.",
        name: "Beáta Bodnár",
        date: "2024.03.14",
        image: "images/f5.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/beata.bodnar.5015/posts/pfbid021DbWYoMNMLPKzwYwF6nVMUKBWEtxxnNynSdUmv89HBnaCm9CVt6QW9fso5ntqa5el"
    },
    {
        text: "Minőségi ruhák, sok választék. Zsófi kedves lány, imádok tőle vásárolni. Mindenkinek jó szívvel ajánlom 😊🥰",
        name: "Kinga Nagyné",
        date: "2024.12.03",
        image: "images/g2.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/@47.5065731,19.1471263,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURQNFpDSEVnEAE!2m1!1s0x0:0x922769bf9fac6901?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        text: "Kedves,gyors,precíz. Nagyon jó minőségű termékeket kaptam. Nagyon meg vagyok elégedve. Segítőkész. Jól esik az embernek amikor csupa kedvességgel állnak hozzá és apró meglepetéseket,figyelmességet kap.",
        name: "Szeiboldné Kiss Renáta",
        date: "2024.03.09",
        image: "images/f9.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02tKSsJpuUB7qQUZHn8SL2Ta9Tk3XK8sGtmoc68RwctdHZq5DxVi8jWWAjs8PeF4sxl&id=100007749197763"

    },
    {
        text: "Hosszú ideje csak innen rendelek ruhát. Mindig elégedett vagyok a minőséggel, a méretezèsnèl Zsófi mindig nagyon segítőkész,mert elég pici vagyok 😂 A ruhák remekül bírják a mosást, tényleg minőségi anyaga van. Nyugodt szívvel ajánlom mindenkinek,bár függőséget okozhat 🫣😂 Ami Zsófit illeti, roppant kedves és rugalmas 💕",
        name: "Horváth Judit Netti",
        date: "2024.03.14",
        image: "images/f6.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/ditta.vond.9/posts/pfbid0rGWzuLu4cd8UDiBFAEyLNoJjWVeXNKPwAopNo3J8sZhgG2Esc8civ7C2iAtg4TA4l"
    },
    {
        text: "2 éve vásárolok rendszeresen Zsófitól. Nagyon rendes, segítőkész, a ruhái szépek, jó minőségűek, és megfizethető áron vannak. Ajánlom mindenkinek! 😊",
        name: "Ábrahám-Tóth Nelli",
        date: "2024.03.09",
        image: "images/f8.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/toth.nelli.9/posts/pfbid02z2F7phzpCz9mknxyRKLJT66qvFBfL4pYNRvg9WzNqR4Dt1HvxnMCLpnxDcfVgYXHlS"
    },
    {
        text: "Ha jó minőségű női ruhákat keresel, gyere el vagy nézd meg a kínálatot a webáruházban! Pénztárcabarát árak! Mindenkinek csak ajánlani tudom! Zsófi, a tulajdonos kedves és segítőkész! :)",
        name: "Erika Havancsák",
        date: "2024.11.02",
        image: "images/g4.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURucG9MOUpBEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDnpoL9JA%7CCgsI47aEuAYQ8KPpdw%7C"
    },
    {
        text: "Ha szereted a szép és jó minőségű ruhákat és ráadásul jó árban! Akkor keresd bátran a Szofi ruci kis üzletet.!!",
        name: "Gézáné Gáspár",
        date: "2024.11.02",
        image: "images/g7.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURYLW9xUkp3EAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDX-oqRJw%7CCgsIxdLzuAYQiOSvLw%7C"
    },
    {
        text: "Udvarias kedves figyelmes eladó aki mindent megtesz a vásárlóiért.Köszönjük Zsófi hogy vagy nekünk💐",
        name: "Bényi Csilla",
        date: "2024.12.03",
        image: "images/g5.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURQMFptYzhRRRAB!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDP0Zmc8QE%7CCgwIiYG7ugYQoM3mvwM%7C"
    },
    {
        text: "Óriási választék, kiváló vevőkezelés, nagyon kedves és rugalmas hozzáállás jellemzi SzofiRucit-Zsófit. Mindenkinek szívből ajánlom!",
        name: "Adrienn Tisza",
        date: "2024.12.04",
        image: "images/g1.png",
        platformLogo: "images/google-logo.png",
        link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURQdFlPVVJnEAE!2m1!1s0x0:0x922769bf9fac6901!3m1!1s2@1:CIHM0ogKEICAgIDPtYOURg%7CCgwIhZrBugYQwKbprQI%7C"
    },
    {
        text: "Precíz, megbízható kiszolgálás és ami elengedhetetlen, hogy mindig változatos a kínálat! ❤️Köszönöm",
        name: "Renáta Vágott",
        date: "2024.03.14",
        image: "images/f3.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/renata.vagott/posts/pfbid0ef8Rxvqp8CEapudDqnJ8VS3KMJwRYyJCzFWoba3ToPxipzecZPvgGbDbHZ7CGSwGl"
    },
    {
        text: "Nagyon gyors szállítás és jó minőségű termékek. Mindenkinek csak ajánlani tudom 🙂",
        name: "Somotiuc Adrienn",
        date: "2024.03.11",
        image: "images/f7.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/adrienn.gonczi.9/posts/pfbid02moFc6Du359uosBcU38dHtJJ8cqQ5HrBtxeo42YMPjdGK6bERpMYMoZXRWgnpJSRUl"
    },
    {
        text: "Szépek a ruhák jó minőségüek az eladó hölgy kedves segitőkész megbízható.Nagyon örömmel vásárolok mindig Tőle.Bátran ajánlom Őt és ruháit mindenkinek",
        name: "Csilla Kovácsné Bényi",
        date: "2024.03.08",
        image: "images/f10.jpg",
        platformLogo: "images/facebook-logo.png",
        link: "https://www.facebook.com/benyi.csilla/posts/pfbid02CewEXdQx58MgjenjVd2BkTrPsNDDz8P3p7C7RTxqFjEukqqtHACbN9VNFNHacEhAl"
    },

    
];

// Állapotkezelés
let currentIndex = 0;
let autoChangeInterval;

// Vélemények megjelenítése
function displayReview() {
    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    const review = reviews[currentIndex];
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review-item");

    // Ha a szöveg hosszabb, rövidítjük, és "Olvass tovább" gombot helyezünk el.
    const maxTextLength = 386; // A megjelenített szöveg maximális hossza
    const shortText = review.text.length > maxTextLength 
        ? review.text.substring(0, maxTextLength) + "..." 
        : review.text;

    const readMoreLink = review.text.length > maxTextLength 
        ? `<a href="${review.fullReviewLink}" target="_blank" class="read-more-link">Olvass tovább</a>` 
        : "";

    reviewElement.innerHTML = `
        <div class="reviewer">
            <a href="${review.link}" target="_blank">
                <img src="${review.image}" alt="${review.name}" />
            </a>
            <div class="name">
                <a href="${review.link}" target="_blank">
                    ${review.name}
                </a>
                <img class="verified-icon" src="images/check-icon.png" alt="Verified">
            </div>
            <div class="review-date">${review.date}</div>
        </div>
        <div class="review-text">
            <p>${shortText} ${readMoreLink}</p>
        </div>
        <div class="platform-logo">
            <img src="${review.platformLogo}" alt="Platform Logo" />
        </div>
    `;

    reviewContainer.appendChild(reviewElement);
}


// Következő vélemény
function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    displayReview();
}

// Előző vélemény
function previousReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    displayReview();
}

// Automatikus léptetés
function startAutoChange() {
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(nextReview, 4000);
}

// Automatikus léptetés újraindítása
function resetAutoChange() {
    clearInterval(autoChangeInterval);
    setTimeout(startAutoChange, 2000);
}

// Gombok eseménykezelése (asztali eszközök)
function addDesktopControls() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    prevBtn.addEventListener("click", () => {
        previousReview();
        resetAutoChange();
    });

    nextBtn.addEventListener("click", () => {
        nextReview();
        resetAutoChange();
    });
}

// Érintésérzékelés (mobil és tablet)
function addTouchListeners() {
    const reviewContainer = document.getElementById("review-container");

    let startX = 0;
    let endX = 0;

    reviewContainer.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    reviewContainer.addEventListener("touchend", (event) => {
        endX = event.changedTouches[0].clientX;
        const diff = endX - startX;

        if (diff > 50) {
            // Húzás jobbra (Előző)
            previousReview();
            resetAutoChange();
        } else if (diff < -50) {
            // Húzás balra (Következő)
            nextReview();
            resetAutoChange();
        }
    });
}

// Gombok elrejtése mobil eszközökön
function handleResponsiveControls() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (window.innerWidth <= 768) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    } else {
        prevBtn.style.display = "flex";
        nextBtn.style.display = "flex";
    }
}



function addReviewButtonClickEvent() {
    const reviewButton = document.getElementById("write-review-btn");

    reviewButton.addEventListener("click", () => {
        // Itt adhatod meg azt az URL-t, ahol az értékelést kérni szeretnéd
        window.open("https://g.page/r/CQFprJ-_aSeSEAE/review", "_blank"); // Cseréld le a saját URL-edre
    });
}
addReviewButtonClickEvent();
// Inicializálás
window.addEventListener("resize", handleResponsiveControls);
displayReview();
startAutoChange();
addDesktopControls();
addTouchListeners();
handleResponsiveControls();















