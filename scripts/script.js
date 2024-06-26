const items = [
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description for Item 1",
    "price": { "coin": "$", "value": 48.5 }
  },
  {
    "id": 2,
    "name": "Item 2",
    "description": "Description for Item 2",
    "price": { "coin": "R$", "value": 29.9 }
  },
  {
    "id": 3,
    "name": "Item 3",
    "descrption": "Description for Item 3"
  },
  {
    "id": 4,
    "name": "Item 4",
    "description": "Description for Item 4",
    "price": { "coin": "R$", "value": 99.9 }
  },
  {
    "id": 5,
    "name": "Item 5",
    "description": "Description for Item 5",
    "price": { "coin": "R$", "value": 59.9 }
  },
  {
    "id": 6,
    "name": "Item 6",
    "descrption": "Description for Item 6",
    "price": { "coin": "R$", "value": 49.9 }
  },
  {
    "id": 7,
    "name": "Item 7",
    "description": "Description for Item 7"
  },
  {
    "id": 8,
    "nome": "Item 8",
    "description": "Description for Item 8",
    "price": { "coin": "R$", "value": 69.9 }
  },
  {
    "id": 9,
    "name": "Item 9",
    "description": "Description for Item 9",
    "price": { "coin": "R$", "value": 89.9 }
  },
  {
    "id": 10,
    "name": "Item 10",
    "description": "Description for Item 10",
    "price": { "coin": "R$", "value": 79.9 }
  },
  {
    "id": 11,
    "name": "Item 11",
    "description": "Description for Item 11",
    "price": { "coin": "R$", "value": 99.9 }
  },
  {
    "id": 12,
    "name": "Item 12",
    "description": "Description for Item 12",
    "price": { "coin": "R$", "value": 59.9 }
  },
  {
    "id": 13,
    "name": "Item 13",
    "description": "Description for Item 13",
    "price": { "coin": "R$", "value": 49.9 }
  },
  {
    "id": 14,
    "name": "Item 14",
    "description": "Description for Item 14",
    "price": { "coin": "R$", "value": 39.9 }
  },
  {
    "id": 15,
    "name": "Item 15",
    "description": "Description for Item 15",
    "price": { "coin": "R$", "value": 69.9 }
  },
  {
    "id": 16,
    "name": "Item 16",
    "description": "Description for Item 16",
    "price": { "coin": "R$", "value": 89.9 }
  },
  {
    "id": 17,
    "name": "Item 17",
    "description": "Description for Item 17",
    "price": { "coin": "R$", "value": 79.9 }
  },
  {
    "id": 18,
    "name": "Item 18",
    "description": "Description for Item 18",
    "price": { "coin": "R$", "value": 99.9 }
  },
  {
    "id": 19,
    "name": "Item 19",
    "description": "Description for Item 19",
    "price": { "coin": "R$", "value": 59.9 }
  },
  {
    "id": 20,
    "name": "Item 20",
    "description": "Description for Item 20",
    "price": { "coin": "R$", "value": 49.9 }
  },
  {
    "id": 21,
    "name": "Item 21",
    "description": "Description for Item 21",
    "price": { "coin": "R$", "value": 39.9 }
  },
  {
    "id": 22,
    "name": "Item 22",
    "description": "Description for Item 22",
    "price": { "coin": "R$", "value": 69.9 }
  }
];

const updatedItems = items.map(item => {
  let status = "inactive";
  if (item.price) {
    if (item.price.coin === "R$") {
      status = item.price.value < 50 ? "inactive" : "active";
    }
  }
  return { ...item, status };
});

console.log(JSON.stringify(updatedItems, null, 2));
