// Éléments 
const marque = document.querySelector('#marqueInput')
const nom = document.querySelector('#nomInput')
const prix = document.querySelector('#prixInput')
const date = document.querySelector('#dateInput')
date.max = new Date().toLocaleDateString('fr-ca')
const type = document.querySelector('#typeInput')
const promotionOui = document.querySelector('#promotionOui')
const promotionNon = document.querySelector('#promotionNon')
const valider = document.querySelector('#valider')
const produits = document.querySelector('#produits')
const save_edit = document.querySelector('#save_edit')
let i = 0

// Boutton ajouter un produit
document.querySelector('#ajouter').addEventListener('click', function () {
    clear()
    document.querySelector('#popup').style.display = 'flex'
    valider.style.display = 'block'
    if(document.querySelector('.enregistrer') != null)
    document.querySelector('.enregistrer').style.display = 'none'
})

// Boutton fermer le formulaire
document.querySelector('#closeButton').addEventListener('click', function () {
    document.querySelector('#popup').style.display = 'none'
    clear()
})

// Fonctions 
function isRegexValid(input, regEx) {
    let inputValue = input.value
    if (regEx.test(inputValue) === true) {
        document.querySelector(`#${input.id}Error`).style.display = 'none'
        return true
    }
    else {
        document.querySelector(`#${input.id}Error`).style.display = 'block'
        return false
    }
}
function isDateValid(date) {
    let dateValue = date.value
    if (dateValue === '') {
        document.querySelector(`#${date.id}Error`).style.display = 'block'
        return false
    }
    else {
        document.querySelector(`#${date.id}Error`).style.display = 'none'
        return true
    }
}
function isChecked() {
    if (promotionOui.checked || promotionNon.checked) {
        document.querySelector('#promotionError').style.display = 'none'
        return true
    }
    else {
        document.querySelector('#promotionError').style.display = 'block'
        return false
    }
}
function typeInsert() {
if(type.value === 'Hygiène et toilette' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/hygiene.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Hygiène et toilette' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/hygiene.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
if(type.value === 'Soins esthétiques' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/soins.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Soins esthétiques' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/soins.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
if(type.value === 'Produits solaires' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/solaire.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Produits solaires' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/solaire.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
if(type.value === 'Produits de maquillage' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/maquillage.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Produits de maquillage' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/maquillage.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
if(type.value === 'Beauté des mains et des pieds' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/main.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Beauté des mains et des pieds' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/main.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
if(type.value === 'Entretien capillaires' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/capillaire.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Entretien capillaires' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/capillaire.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
if(type.value === 'Parfums' && promotionOui.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/parfums.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" id="promotion${+i}">EN PROMOTION!</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
else if(type.value === 'Parfums' && promotionNon.checked){
        produits.innerHTML += `
        <figure id='produit${+i}'>
                <img id="img${+i}" src="img/parfums.png" alt="produit">
                <figcaption>
                    <ul>
                        <li class="marqueClass" id="marque${+i}">${(marque + i).innerHTML = marque.value}</li>
                        <li class="nomClass" id="nom${+i}">${(nom + i).innerHTML = nom.value}</li>
                        <li class="typeClass" id="type${+i}">${(type + i).innerHTML = type.value}</li>
                        <li class="prixClass" style="display:inline;"  id="prix${+i}">${(prix + i).innerHTML = prix.value}</li><span class="prixClass"> DH</span><br>
                        <span style="color : gray;">Produit le </span><li class="dateClass" style="display:inline;" id="date${+i}">${(date + i).innerHTML = date.value}</li>
                        <li class="promotionClass" style="color : gray;" id="promotion${+i}">SANS PROMOTION</li>
                    </ul>
                    <div id="buttons${+i}">
                        <button class="modifierClass" id="modifier${+i}" onclick="edit(${+i})" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="supprimerClass" onclick="deleteProduct(${+i})" id="supprimer${+i}" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </figcaption>
                <div id="delete_m${+i}" class="delete_m">
            <div class="delete_cont">
                <div class="delete_text">
                    Êtes-vous sûr de vouloir supprimer l'article?
                </div>
                <div class="delete_actions">
                    <button class="cancel" onclick="cancelConfirm(${+i})">
                        Annuler
                    </button>
                    <button class ="delete" id="delete${+i}" onclick="deleteConfirm(${+i})">
                        Oui
                    </button>
                </div>
            </div>
            </figure>
        </div>
        `;
    }
}
function clear() {
    marque.value = ''
    nom.value = ''
    prix.value = ''
    date.value = ''
    promotionOui.checked = false
    promotionNon.checked = false
}
function deleteProduct(i){
    document.querySelector('#delete_m'+i).style.display = 'flex'
}
function deleteConfirm(i){
    document.querySelector('#produit'+i).remove()
}
function cancelConfirm(i) {
    document.querySelector('#delete_m'+i).style.display = 'none'
}
function edit(i){
    document.querySelector('#popup').style.display = 'flex'
    valider.style.display = 'none'
    save_edit.innerHTML = `<button id="save${+i}" class="enregistrer" onclick="save(${i})" type="button">Enregistrer</button>`
    document.querySelector('.enregistrer').style.display = 'block'
    marque.value = document.querySelector('#marque'+i).innerHTML
    nom.value = document.querySelector('#nom'+i).innerHTML
    prix.value = document.querySelector('#prix'+i).innerHTML
    date.value = document.querySelector('#date'+i).innerHTML
    type.value  = document.querySelector('#type'+i).innerHTML
    if(document.querySelector('#promotion'+i).textContent === 'EN PROMOTION!'){
        promotionOui.checked = 'true'
    }else
    promotionNon.checked = 'true'
}
function save(i){
    if (isChecked() && isRegexValid(marque, /^[a-z A-Z]{2,30}$/) && isRegexValid(nom, /^[a-z A-Z]{2,30}$/) && isRegexValid(prix, /^[0-9]+(\.[0-9]{1,2})?$/) && isDateValid(date)) {
        document.querySelector('#marque'+i).innerHTML = marque.value
        document.querySelector('#nom'+i).innerHTML = nom.value
        document.querySelector('#prix'+i).innerHTML = prix.value
        document.querySelector('#date'+i).innerHTML = date.value
        document.querySelector('#type'+i).innerHTML = type.value
    if(type.value === 'Hygiène et toilette')
        document.querySelector('#img'+i).src = 'img/hygiene.png'
    if(type.value === 'Soins esthétiques')
        document.querySelector('#img'+i).src = 'img/soins.png'
    if(type.value === 'Produits solaires')
        document.querySelector('#img'+i).src = 'img/solaire.png'
    if(type.value === 'Produits de maquillage')
        document.querySelector('#img'+i).src = 'img/maquillage.png'
    if(type.value === 'Beauté des mains et des pieds')
        document.querySelector('#img'+i).src = 'img/main.png'
    if(type.value === 'Entretien capillaires')
        document.querySelector('#img'+i).src = 'img/capillaire.png'
    if(type.value === 'Parfums')
        document.querySelector('#img'+i).src = 'img/parfums.png'

    if(promotionOui.checked ){
        document.querySelector('#promotion'+i).innerHTML = 'EN PROMOTION!'
        document.querySelector('#promotion'+i).style.color = 'red'
    }
    else{
        document.querySelector('#promotion'+i).innerHTML = 'SANS PROMOTION'
        document.querySelector('#promotion'+i).style.color = 'gray'
    }

document.querySelector('#popup').style.display = 'none'
clear()
    }
}
// Actions
marque.addEventListener('input', function marqueValid() {
    isRegexValid(marque, /^[a-z A-Z]{2,30}$/)
})
nom.addEventListener('input', function () {
    isRegexValid(nom, /^[a-z A-Z]{2,30}$/)
})
prix.addEventListener('input', function () {
    isRegexValid(prix, /^[0-9]+(\.[0-9]{1,2})?$/)
})
date.addEventListener('input', function () {
    isDateValid(date)
})
promotionOui.addEventListener('input', function () {
    if (promotionOui.checked) {
        promotionNon.checked = false
        document.querySelector('#promotionError').style.display = 'none'
    }
})
promotionNon.addEventListener('input', function () {
    if (promotionNon.checked) {
        promotionOui.checked = false
        document.querySelector('#promotionError').style.display = 'none'
    }
})
valider.addEventListener('click', function () {
    i++
    isChecked()
    isRegexValid(marque, /^[a-z A-Z]{2,30}$/)
    isRegexValid(nom, /^[a-z A-Z]{2,30}$/)
    isRegexValid(prix, /^[0-9]+(\.[0-9]{1,2})?$/)
    isDateValid(date)

    if (isChecked() && isRegexValid(marque, /^[a-z A-Z]{2,30}$/) && isRegexValid(nom, /^[a-z A-Z]{2,30}$/) && isRegexValid(prix, /^[0-9]+(\.[0-9]{1,2})?$/) && isDateValid(date)) {
        typeInsert(i)
        clear()
    }
})