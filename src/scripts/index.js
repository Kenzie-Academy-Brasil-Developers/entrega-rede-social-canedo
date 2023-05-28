import { suggestUsers } from './database'



function addCardPaint(suggestUsers) {
  const sectionSeggestion = document.querySelector(".section__suggestion");

  for (let i = 0; i < suggestUsers.length; i++) {
    const divSugestion = document.createElement("div");
    divSugestion.className = "div__suggestion";

    const divContainerSugestion = document.createElement("div");
    divContainerSugestion.className = "div__container-sugestion";

    const suggestionFigure = document.createElement("figure");
    suggestionFigure.className = "suggestion__figure";

    const imageSuggestion = document.createElement("img");
    imageSuggestion.src = suggestUsers[i].img;

    const profileContainer = document.createElement("form");
    profileContainer.className = "profile__container";

    const divSuggestionProfile = document.createElement("div");
    divSuggestionProfile.className = "div__suggestion-profile";

    const profileName = document.createElement("h2");
    profileName.textContent = suggestUsers[i].user;
    profileName.className = "profile__name";

    const profileOffice = document.createElement("p");
    profileOffice.textContent = suggestUsers[i].stack;
    profileOffice.className = "profile__office";

    const btnProfile = document.createElement("button");
    btnProfile.className = "btn__profile";

    divSuggestionProfile.append(profileName, profileOffice);
    profileContainer.append(divSuggestionProfile, btnProfile); 
    divContainerSugestion.append(suggestionFigure, profileContainer);
    suggestionFigure.appendChild(imageSuggestion);
    divSugestion.appendChild(divContainerSugestion);
    sectionSeggestion.appendChild(divSugestion); 
  }
}

addCardPaint(suggestUsers)

{/* <aside class="aside__container">
<section class="section__suggestion">          
  <h2 class="suggestion__title">Sugestões para você seguir</h2>
   <div class="div__suggestion">
    <div class="div__container-sugestion">
      <figure class="suggestion__figure">
        <img src="./src/assets/img/user2.svg" alt="prfl">
      </figure>
      <form class="profile__container">
        <div class="div__suggestion-profile">
          <h2 class="profile__name">Carlos Lima</h2>
          <p class="profile__office">UX e UI Desgner</p>
        </div>
        <button class="btn__profile">Seguir</button>
      </form>
    </div> 
  </div>
</section> 
</aside> */}