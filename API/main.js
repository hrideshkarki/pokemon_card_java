console.log('POKEMON API!')

const container = document.querySelector(".container")

const getFormData = async (e) => { 
    e.preventDefault();

    const pokemonName = document.querySelector('#pokemonname').value.toLowerCase(); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    const response = await fetch(url); 
    const data = await response.json(); 

    render(data); 
};

const render = (data) => { 
    const name = document.querySelector('#name');
    const image = document.querySelector('#image');
    const baseExperience = document.querySelector('#base-experience');
    const abilities = document.querySelector('#abilities');
    
    name.textContent = data.name;
    image.src = data.sprites.front_default;
    baseExperience.textContent = `Base experience: ${data.base_experience}`;
    abilities.innerHTML = '';
    
    data.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability.ability.name;
        abilities.appendChild(li);
    });

};

const form = document.getElementById('pokemon-form');
form.addEventListener('submit', getFormData);
