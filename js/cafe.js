(function() {
  const currency = 'EGP';

  const menuData = {
    cold: [
      { name: 'Iced Coffee', price: 60 },
      { name: 'Iced Caramel Macchiato', price: 75 },
      { name: 'Iced Americano', price: 55 },
      { name: 'Iced Latte', price: 65 },
      { name: 'Lemon Mint', price: 55 },
      { name: 'Strawberry Smoothie', price: 70 },
      { name: 'Mango Smoothie', price: 70 },
      { name: 'Oreo Shake', price: 80 },
      { name: 'Vanilla Milkshake', price: 75 },
      { name: 'Chocolate Milkshake', price: 75 },
      { name: 'Fresh Orange Juice', price: 60 },
      { name: 'Fresh Pomegranate Juice', price: 70 },
      { name: 'Coca-Cola', price: 25 },
      { name: 'Sprite', price: 25 },
      { name: 'Iced Tea - Peach', price: 50 },
      { name: 'Iced Tea - Lemon', price: 50 },
      { name: 'San Pellegrino', price: 45 },
      { name: 'Red Bull', price: 60 },
      { name: 'Club Soda', price: 20 },
      { name: 'Water', price: 15 },
    ],
    hot: [
      { name: 'Espresso', price: 40 },
      { name: 'Double Espresso', price: 50 },
      { name: 'Americano', price: 50 },
      { name: 'Cappuccino', price: 55 },
      { name: 'Latte', price: 60 },
      { name: 'Caramel Macchiato', price: 70 },
      { name: 'Flat White', price: 60 },
      { name: 'Mocha', price: 65 },
      { name: 'Turkish Coffee', price: 45 },
      { name: 'Hot Chocolate', price: 65 },
      { name: 'French Press', price: 55 },
      { name: 'Drip Coffee', price: 50 },
      { name: 'Green Tea', price: 35 },
      { name: 'Black Tea', price: 30 },
      { name: 'Peppermint Tea', price: 35 },
      { name: 'Chamomile Tea', price: 35 },
      { name: 'Ginger Tea with Honey', price: 40 },
      { name: 'Sahlab', price: 60 },
      { name: 'Cinnamon Drink', price: 50 },
      { name: 'Hot Lemon with Honey', price: 45 },
    ],
    food: [
      { name: 'Chicken Sandwich', price: 110 },
      { name: 'Beef Burger', price: 130 },
      { name: 'Vegetarian Sandwich', price: 95 },
      { name: 'Smoked Turkey & Cheese Croissant', price: 85 },
      { name: 'Tuna Sandwich', price: 90 },
      { name: 'Club Sandwich', price: 120 },
      { name: 'French Fries', price: 45 },
      { name: 'Onion Rings', price: 50 },
      { name: 'Chocolate Cake', price: 85 },
      { name: 'Red Velvet Cake', price: 90 },
      { name: 'Cheesecake', price: 95 },
      { name: 'Molten Cake', price: 100 },
      { name: 'Waffle with Nutella', price: 75 },
      { name: 'Pancakes with Maple Syrup', price: 70 },
      { name: 'Fruit Salad', price: 65 },
      { name: 'Caesar Salad', price: 80 },
      { name: 'Chicken Caesar Salad', price: 110 },
      { name: 'Mushroom Soup', price: 60 },
      { name: 'Pasta with White Sauce', price: 105 },
      { name: 'Nachos with Cheese', price: 80 },
    ],
  };

  function chunkIntoTwoColumns(items) {
    const midpoint = Math.ceil(items.length / 2);
    return [items.slice(0, midpoint), items.slice(midpoint)];
  }

  function createMenuItemElement(item) {
    const wrapper = document.createElement('div');
    wrapper.className = 'menu-item';

    const title = document.createElement('h5');
    title.textContent = item.name;

    const price = document.createElement('span');
    price.textContent = `${item.price} ${currency}`;

    wrapper.appendChild(title);
    wrapper.appendChild(price);
    return wrapper;
  }

  function renderCategory(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const [left, right] = chunkIntoTwoColumns(items);

    const leftCol = document.createElement('div');
    leftCol.className = 'col-lg-6';
    left.forEach((item) => leftCol.appendChild(createMenuItemElement(item)));

    const rightCol = document.createElement('div');
    rightCol.className = 'col-lg-6';
    right.forEach((item) => rightCol.appendChild(createMenuItemElement(item)));

    container.appendChild(leftCol);
    container.appendChild(rightCol);
  }

  function initialRender() {
    renderCategory('cold-drinks-container', menuData.cold);
    renderCategory('hot-drinks-container', menuData.hot);
    renderCategory('food-container', menuData.food);
  }

  // Filtering and sorting
  function getActiveCategoryKey() {
    if (document.getElementById('ex2-tabs-1')?.classList.contains('show')) return 'cold';
    if (document.getElementById('ex2-tabs-2')?.classList.contains('show')) return 'hot';
    if (document.getElementById('ex2-tabs-3')?.classList.contains('show')) return 'food';
    // Fallback to first tab
    return 'cold';
  }

  function getContainerIdByKey(key) {
    return key === 'cold' ? 'cold-drinks-container' : key === 'hot' ? 'hot-drinks-container' : 'food-container';
  }

  function applyFilters(items) {
    const searchValue = document.getElementById('menu-search')?.value?.trim().toLowerCase() || '';
    const minValueRaw = document.getElementById('price-min')?.value;
    const maxValueRaw = document.getElementById('price-max')?.value;
    const sortValue = document.getElementById('menu-sort')?.value || '';

    let filtered = items;

    if (searchValue) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(searchValue));
    }

    const min = minValueRaw === '' ? null : Number(minValueRaw);
    const max = maxValueRaw === '' ? null : Number(maxValueRaw);

    if (min !== null) {
      filtered = filtered.filter((item) => item.price >= min);
    }
    if (max !== null) {
      filtered = filtered.filter((item) => item.price <= max);
    }

    if (sortValue) {
      const [field, direction] = sortValue.split('-');
      filtered = filtered.slice().sort((a, b) => {
        let cmp = 0;
        if (field === 'name') {
          cmp = a.name.localeCompare(b.name);
        } else if (field === 'price') {
          cmp = a.price - b.price;
        }
        return direction === 'desc' ? -cmp : cmp;
      });
    }

    return filtered;
  }

  function updateActiveCategory() {
    const key = getActiveCategoryKey();
    const containerId = getContainerIdByKey(key);
    const source = menuData[key];
    const filtered = applyFilters(source);
    renderCategory(containerId, filtered);
  }

  function attachControlListeners() {
    const search = document.getElementById('menu-search');
    const minEl = document.getElementById('price-min');
    const maxEl = document.getElementById('price-max');
    const sortEl = document.getElementById('menu-sort');
    const resetBtn = document.getElementById('menu-reset');

    if (search) search.addEventListener('input', updateActiveCategory);
    if (minEl) minEl.addEventListener('input', updateActiveCategory);
    if (maxEl) maxEl.addEventListener('input', updateActiveCategory);
    if (sortEl) sortEl.addEventListener('change', updateActiveCategory);
    if (resetBtn) resetBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (search) search.value = '';
      if (minEl) minEl.value = '';
      if (maxEl) maxEl.value = '';
      if (sortEl) sortEl.value = '';
      updateActiveCategory();
    });

    // Tab change handling
    document.querySelectorAll('a[data-mdb-tab-init]')?.forEach((el) => {
      el.addEventListener('shown.mdb.tab', updateActiveCategory);
      el.addEventListener('click', function() {
        setTimeout(updateActiveCategory, 200);
      });
    });
  }

  function bootstrap() {
    initialRender();
    attachControlListeners();
    // Ensure first active tab respects filters on load
    updateActiveCategory();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();