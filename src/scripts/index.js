import { suggestUsers,posts,users } from './database.js'

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
    
    const divSecundaryProfile_office = document.createElement("p");
    divSecundaryProfile_office.innerText = posts[i].stack;
    
    const secundaryPostUser = document.createElement("div");
    secundaryPostUser.className = "secundary__post-user";
    
    const PostUserTitle = document.createElement("h2");
    PostUserTitle.textContent = posts[i].title;
    
    const PostUserText = document.createElement("p");
    PostUserText.textContent = posts[i].text;
    
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


function openPost(posts) {
  const openPosts = document.querySelectorAll(".btn__open-post");
  const openModal = document.querySelector(".dialog__container");

  openPosts.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

  
      openModal.innerHTML = "";

      const post = posts[index];

      const divContainer = document.createElement("div");
      divContainer.className = "div__container-model";

      const divClose = document.createElement("div");
      divClose.className = "div__close";

      const divModalPrimary = document.createElement("div");
      divModalPrimary.className = "div__modal-primary";

      const divModalSecundary = document.createElement("div");
      divModalSecundary.className = "div__modal-secundary";

      const btnClose = document.createElement("button");
      btnClose.className = "btn__close";
      btnClose.innerText = "X";
      
      btnClose.addEventListener("click", function(){
        openModal.close()
      })

      const imageModal = document.createElement("figure");
      imageModal.className = "image__modal";

      const divUser = document.createElement("div");
      divUser.className = "div__user";

      const imageProfile = document.createElement("img");
      imageProfile.src = post.img;

      const userName = document.createElement("h2");
      userName.textContent = post.user;
      userName.className = "user-name";

      const userOffice = document.createElement("p");
      userOffice.textContent = post.stack;
      userOffice.className = "user-office";

      const modalTitle = document.createElement("h1");
      modalTitle.textContent = post.title;
      modalTitle.className = "modal__title";

      const modalText = document.createElement("p");
      modalText.textContent = post.text;
      modalText.className = "modal__text";

      divModalSecundary.append(modalTitle, modalText);
      divUser.append(userName, userOffice);
      imageModal.append(imageProfile);
      divModalPrimary.append(imageModal, divUser);
      divClose.appendChild(btnClose);
      divContainer.append(divClose, divModalPrimary, divModalSecundary);
      openModal.appendChild(divContainer);

      openModal.showModal();
    });
  });
}
openPost(posts)

  

  
  



