// Example list of items (you should fetch it dynamically)
const items = [
  { Name: 'Sandalwood Raja (Top)', Item_ID: '203047001', Icon_URL: 'https://item-info-pied.vercel.app/akiru-item-info?item_id=203047001&key=FREE-FIRE' },
  { Name: 'Iron Sultan (Pants)', Item_ID: '203047002', Icon_URL: 'https://item-info-pied.vercel.app/akiru-item-info?item_id=203047002&key=FREE-FIRE' },
  // Add more items here...
];

function displayItems(itemsToDisplay) {
  const itemGrid = document.getElementById('item-grid');
  itemGrid.innerHTML = '';
  
  itemsToDisplay.forEach(item => {
    const imgElement = document.createElement('img');
    imgElement.src = item.Icon_URL;
    imgElement.alt = item.Name;
    imgElement.onclick = () => showItemDetail(item);
    
    itemGrid.appendChild(imgElement);
  });
}

function showItemDetail(item) {
  const itemDetail = document.getElementById('item-detail');
  itemDetail.innerHTML = `
    <h2>${item.Name}</h2>
    <img src="${item.Icon_URL}" alt="${item.Name}" style="width: 200px; height: 200px;" />
    <p>Item ID: ${item.Item_ID}</p>
  `;
  itemDetail.style.display = 'block';
}

function searchItems() {
  const searchTerm = document.getElementById('search-box').value.toLowerCase();
  const filteredItems = items.filter(item => 
    item.Name.toLowerCase().includes(searchTerm) ||
    item.Item_ID.toString().includes(searchTerm) ||
    item.Icon_URL.toLowerCase().includes(searchTerm)
  );
  displayItems(filteredItems);
}

// Initialize the page with all items
displayItems(items);
