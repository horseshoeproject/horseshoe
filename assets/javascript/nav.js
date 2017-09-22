
this.dropdown = document.getElementById('dropdown')
this.dropdownMenu = document.getElementById('dropdown-menu')

this.toggleDropdown = function(event) {
    dropdownMenu.classList.toggle('Dropdown--Active')
}

this.dropdown.addEventListener('click', this.toggleDropdown)