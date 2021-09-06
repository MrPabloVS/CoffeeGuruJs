for (const recipe of brewPad) {
    $("#namedR").append(`<div class="col">
    <div class="card" style="width: 18rem;">
    <img src=${recipe.img} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${recipe.name}</h5>
    <p class="card-text">${recipe.txt}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Base: ${recipe.base}</li>
    <li class="list-group-item">Primary: ${recipe.primary}</li>
    <li class="list-group-item">Secondary: ${recipe.secondary}</li>
    </ul>
    </div>
    </div>`);
        
}