// import { suggestUsers } from './database'

{/* <article class="article__posts">
<div class="div__secundary">
  <img src="./src/assets/img/user2.svg" alt="">
  <div class="div__secundary-profile">
    <h3>Samuel Persuhn</h3>
    <p>Front end Engineer</p>
  </div>
</div>
<div class="secundary__post-user">
  <h2>Empresa de tecnologia de informção abre vagas para programa de estágio</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, rerum autem? Consequatur non, blanditiis quis ea dolorem in, rem dignissimos magni</p>
</div>
<div class="secundary__buttons">
  <button class="btn__open-post">Abrir Post</button>
  <div class="btn__like__container">
    <button class="btn__like"><img src="./src/assets/img/logo.svg" alt=""></button>
    <p>25</p>
  </div>
</div>
</article> */}

function addCardPaint(posts) {
  const sectionContainerSecundary = document.querySelector(".section__container-secundary");

  for (let i = 0; i < posts.length; i++) {
    const articlePosts = document.createElement("article");
    articlePosts.className = "article__posts";

    const divSecundary = document.createElement("div");
    divSecundary.className = "div__secundary";

    const imageSecundary = document.createElement("img");
    imageSecundary.src = posts[i].img;
    
    const divSecundaryProfile = document.createElement("div");
    divSecundaryProfile.className = "div__secundary-profile";
    
    const divSecundaryProfile_name = document.createElement("h3");
    divSecundaryProfile_name.innerText = posts[i].user;
    // divSecundaryProfile_name.className = "profile__container";
    
    const divSecundaryProfile_office = document.createElement("p");
    divSecundaryProfile_office.innerText = posts[i].stack;
    // divSecundaryProfile_office.className = "div__suggestion-profile";
    
    const secundaryPostUser = document.createElement("div");
    secundaryPostUser.className = "secundary__post-user";
    
    const PostUserTitle = document.createElement("h2");
    PostUserTitle.textContent = posts[i].title;
    // PostUserTitle.className = "profile__name";
    
    const PostUserText = document.createElement("p");
    PostUserText.textContent = posts[i].text;
    // PostUserText.className = "profile__office";
    
    const secundaryButtons = document.createElement("div");
    secundaryButtons.className = "secundary__buttons";
    
    const btnOpenPost = document.createElement("button");
    btnOpenPost.className = "btn__open-post";
    btnOpenPost.innerText = "Abrir Post"

    const btnLikeContainer = document.createElement("div");
    btnLikeContainer.className = "btn__like__container";

    const btnLike = document.createElement("button");
    btnLike.className = "btn__like";


    const btnLikeNumber = document.createElement("p");
    btnLikeNumber.textContent = posts[i].likes;
    
    btnLikeContainer.append(btnLike,btnLikeNumber)
    secundaryButtons.append(btnOpenPost,btnLikeContainer);
    secundaryPostUser.append(PostUserTitle,PostUserText); 
    divSecundaryProfile.append(divSecundaryProfile_name,divSecundaryProfile_office);
    divSecundary.append(imageSecundary,divSecundaryProfile);
    articlePosts.append(divSecundary,secundaryPostUser,secundaryButtons);
    sectionContainerSecundary.appendChild(articlePosts); 
  }
}
addCardPaint(posts)

function followPeople(suggestUsers) {
  const sectionSeggestion = document.querySelector("#suggestionContent");

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
    btnProfile.innerText = "Seguir"

    divSuggestionProfile.append(profileName, profileOffice);
    profileContainer.append(divSuggestionProfile, btnProfile); 
    divContainerSugestion.append(suggestionFigure, profileContainer);
    suggestionFigure.appendChild(imageSuggestion);
    divSugestion.appendChild(divContainerSugestion);
    sectionSeggestion.appendChild(divSugestion); 
  }
}

followPeople(suggestUsers)


function followButton() {
  const buttonsFollow = document.querySelectorAll(".btn__profile");

  buttonsFollow.forEach(function(button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      button.classList.toggle("btn__profile");
      button.classList.toggle("btn__profile--actived");
      button.classList.toggle("no-hover")
   
      if (button.classList.contains("btn__profile")) {
        button.innerText = "Seguir";
      } else {
        button.innerText = "Seguindo";
      }
    });
  });
}

followButton();


function likeButton() {
  const buttonLike = document.querySelectorAll(".btn__like");

  buttonLike.forEach(function(button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      button.classList.toggle("btn__like");
      button.classList.toggle("btn__like--actived");
    });
  });
}

likeButton()