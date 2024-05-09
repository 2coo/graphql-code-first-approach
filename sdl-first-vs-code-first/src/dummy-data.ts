export const dummyUsers = [
  { id: 1, name: "Tuco Salamanca" },
  { id: 2, name: "Gustavo Fring" },
  { id: 3, name: "Walter White" },
];

export const dummyOrders = [
  {
    id: 1,
    items: [
      { id: 1, name: "Item 1", price: 10 },
      { id: 2, name: "Item 2", price: 20 },
    ],
    createdUserId: 1,
  },
  {
    id: 2,
    items: [
      { id: 3, name: "Item 3", price: 30 },
      { id: 4, name: "Item 4", price: 40 },
    ],
    createdUserId: 2,
  },
  {
    id: 3,
    items: [
      { id: 5, name: "Item 5", price: 50 },
      { id: 6, name: "Item 6", price: 60 },
    ],
    createdUserId: 3,
  },
];
