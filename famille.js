/**
 * 1.lister tous les membres de la fammille
 * afficher le nom complet
 * presentation avec l'age
 * dire s'il est marié ou celibataire
 * Dire si il est adulte
 * */
// > <
/**
 * selection des elements html
 * */
const nameInput = document.getElementById("name");
const postNomInput = document.getElementById("postnom");
const ageInput = document.getElementById("age");
const formFamily = document.getElementById("familyForm");
console.log(nameInput.value, postNomInput);

const famille = [];

const creerMembreDeFamille = () => {
  return {
    nom: "",
    postNom: "",
    age: 0,
    creerMembre: function (nom, postNom, age) {
      if (nom && postNom && parseInt(age) >= 0) {
        this.nom = nom;
        this.postNom = postNom;
        this.age = age;
      } else {
        alert("Veuillez remplir le nom, postnom et le prénom");
      }
    },
  };
};
formFamily.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nameInput.value, postNomInput.value, age.value);

  // console.log("test");
  if (nameInput.value == "" || postNomInput.value == "" || age.value == "") {
    alert("impossible d'insert les elements");
  } else {
    const objetMembre = creerMembreDeFamille();
    objetMembre.creerMembre(nameInput.value, postNomInput.value, age.value);
    famille.push(objetMembre);
    console.log(famille);
  }
});
// const rodrick = creerMembreDeFamille();
// rodrick.creerMembre("rodick", "kudiatu", 30);
