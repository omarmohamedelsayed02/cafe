(function () {
  'use strict';

  /**
   * Menu data: edit here to change items and prices
   */
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
      { name: 'Water', price: 15 }
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
      { name: 'Hot Lemon with Honey', price: 45 }
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
      { name: 'Nachos with Cheese', price: 80 }
    ]
  };

  function createMenuColumn(items) {
    const column = document.createElement('div');
    column.className = 'col-lg-6';

    items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'menu-item';

      const name = document.createElement('h5');
      name.textContent = item.name;

      const price = document.createElement('span');
      price.textContent = `${item.price} EGP`;

      row.appendChild(name);
      row.appendChild(price);
      column.appendChild(row);
    });

    return column;
  }

  function renderMenu(category, filterText) {
    const container = document.querySelector(`[data-menu-container="${category}"]`);
    if (!container) return;

    const allItems = menuData[category] || [];
    const normalizedFilter = (filterText || '').toLowerCase().trim();

    const filtered = normalizedFilter
      ? allItems.filter((i) => i.name.toLowerCase().includes(normalizedFilter))
      : allItems.slice();

    // Split into two nearly equal columns
    const mid = Math.ceil(filtered.length / 2);
    const left = filtered.slice(0, mid);
    const right = filtered.slice(mid);

    container.innerHTML = '';
    container.appendChild(createMenuColumn(left));
    container.appendChild(createMenuColumn(right));
  }

  function renderAllMenus(filterText) {
    renderMenu('cold', filterText);
    renderMenu('hot', filterText);
    renderMenu('food', filterText);
  }

  function initSearch() {
    const input = document.getElementById('menu-search');
    if (!input) return;

    const onInput = () => {
      const value = input.value;
      renderAllMenus(value);
    };

    input.addEventListener('input', onInput);
  }

  function initReservationForm() {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('res-name').value.trim();
      const phone = document.getElementById('res-phone').value.trim();
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      const guests = document.getElementById('res-guests').value;

      if (!name || !phone || !date || !time || !guests) {
        alert('Please fill in all fields.');
        return;
      }

      // Simulate success
      alert(`Thanks, ${name}! Your reservation for ${guests} on ${date} at ${time} is received.`);

      try {
        // Close modal if MDB is present
        const modalEl = document.getElementById('reservationModal');
        if (modalEl && window.mdb && window.mdb.Modal) {
          const instance = window.mdb.Modal.getInstance(modalEl) || new window.mdb.Modal(modalEl);
          instance.hide();
        }
      } catch (_) {}

      form.reset();
    });
  }

  function init() {
    renderAllMenus('');
    initSearch();
    initReservationForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();