function deleteUserRow(id) {
    document.getElementById(id).remove();
  }
function cancelUpdate() {
    document.querySelector(".create-btn").classList.remove("hidden");
    document.querySelector(".cancel-btn").classList.add("hidden");
    document.querySelector(".update-btn").classList.add("hidden");
}
  
function editButtonClick(id) {
    let oldUserName = document.querySelector("#" + id + " .user-row-name");
    let oldUserEmail = document.querySelector("#" + id + " .user-row-email");
    document.querySelector("#name-input").value = oldUserName.innerText;
    document.querySelector("#email-input").value = oldUserEmail.innerText;
    //_____________________________________________________________
    document.querySelector(".create-btn").classList.add("hidden");
}
  
  function updateExistingItem() {
    let newUserData = {
      name: document.querySelector("#name-input").value,
      email: document.querySelector("#email-input").value
    };
    let itemId = document.querySelector("#user-form").getAttribute("user-id");
    document.querySelector("#" + itemId + " .user-row-name").innerText =
      newUserData.name;
    document.querySelector("#" + itemId + " .user-row-email").innerText =
      newUserData.email;
    document.querySelector("#user-form").removeAttribute("user-id");
    document.querySelector("#name-input").value = "";
    document.querySelector("#email-input").value = "";
  }
  function createNewItem() {
    let randomID = String("userID-" + Math.random() * 100000).split(".")[0];
    let userForm = document.querySelector("#user-form");
    let userName = document.querySelector("#user-form #name-input");
    let userEmail = document.querySelector("#user-form #email-input");
    if (userName.value.trim().length < 1 || userEmail.value.trim().length < 1) {
      return;
    }
    //_______________________________________________________________
    let userDataList = document.querySelector("#user-data-list");
    let userRow = document.createElement("tr");
    //_______________________________________________________________
    let userRowName = document.createElement("td");
    let userRowEmail = document.createElement("td");
    //_______________________________________________________________
    let userRowButtonContainer = document.createElement("td");
  
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
  
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";
    editButton.addEventListener("click", function() {
      editButtonClick(randomID);
      document.querySelector("#user-form").setAttribute("user-id", randomID);
    });
    deleteButton.addEventListener("click", function() {
      deleteUserRow(randomID);
    });
  
    userRowButtonContainer.appendChild(editButton);
    userRowButtonContainer.appendChild(deleteButton);
  
    userRow.setAttribute("id", randomID);
    userRowName.classList.add("user-row-name");
    userRowEmail.classList.add("user-row-email");
    userRowName.innerText = userName.value;
    userRowEmail.innerText = userEmail.value;
  
    userRow.appendChild(userRowName);
    userRow.appendChild(userRowEmail);
    userRow.appendChild(userRowButtonContainer);
    userDataList.appendChild(userRow);
    //____
  
    userName.value = "";
    userEmail.value = "";
  }
  function editButtonClick(id) {
    let oldUserName = document.querySelector("#" + id + " .user-row-name");
    let oldUserEmail = document.querySelector("#" + id + " .user-row-email");
  
    document.querySelector("#name-input").value = oldUserName.innerText;
    document.querySelector("#email-input").value = oldUserEmail.innerText;
  }