var menu_lateral = document.getElementById("mySidenav");

function openNav() {
    menu_lateral.style.width = "15rem";
    menu_lateral.style.borderRight = "1px solid var(--ter)"
}

function closeNav() {
    menu_lateral.style.width = "0";
    menu_lateral.style.borderRight = "none"
}