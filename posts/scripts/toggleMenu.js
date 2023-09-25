function toggleMenu() {
  const menu = document.getElementById('menu');
  
  menu.addEventListener('click', function (_) {
    const menuItems = document.getElementById('menu-items');

    if(menuItems.style.display === 'flex') {
      menuItems.style.display = 'none';
    } else {
      menuItems.style.display = 'flex';
    }
  });
}

export default toggleMenu();
