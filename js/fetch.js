// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ekans'; //URL de la API para obtener datos

    // solicitud HTTP para obtener datos
    fetch(apiUrl)
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(data => {
            // Actualiza el contenido del elemento con ID 'nombre-pokemon' con el nombre del Pokémon
            document.getElementById('nombre-pokemon').textContent = data.name;

            document.getElementById('pokemon-img').src = data.sprites.front_default;

            document.querySelector('#logo img').src = data.sprites.back_default;

            // Obtiene los tipos del Pokémon y los une en una cadena separada por comas
            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            document.getElementById('tipos-pokemon').textContent = types;
            
            const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
            document.getElementById('habilidades-pokemon').textContent = abilities;
            
            const moves = data.moves.map(moveInfo => moveInfo.move.name).join(', ');
            document.getElementById('movimientos-pokemon').textContent = moves;
            
            // Actualiza el contenido de los elementos con las estadísticas del Pokémon
            document.getElementById('hp-pokemon').textContent = data.stats[0].base_stat;
            document.getElementById('ataque-pokemon').textContent = data.stats[1].base_stat;
            document.getElementById('defensa-pokemon').textContent = data.stats[2].base_stat;
            document.getElementById('ataque-especial-pokemon').textContent = data.stats[3].base_stat;
            document.getElementById('defesa-especial-pokemon').textContent = data.stats[4].base_stat;
            document.getElementById('velocidad-pokemon').textContent = data.stats[5].base_stat;
        })
        .catch(error => console.error('Error fetching data:', error)); //da error en caso de que la solicitud falle
});
