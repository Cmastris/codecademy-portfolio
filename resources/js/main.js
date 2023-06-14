function toggleTileExpansion(event) {
    /* Change tile class (CSS) and toggle text */
    const tile = event.target.parentNode;

    if (tile.classList.contains('collapsed')) {
        tile.classList.add('expanded');
        tile.classList.remove('collapsed');
        event.target.innerHTML = '- Show Less';
    } else {
        tile.classList.add('collapsed');
        tile.classList.remove('expanded');
        event.target.innerHTML = '+ Show More';
    }
}


const tileToggles = document.getElementsByClassName('expand-toggle');
for (let toggle of tileToggles) {
    toggle.addEventListener('click', toggleTileExpansion);
}