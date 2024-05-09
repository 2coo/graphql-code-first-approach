export const dummyUsers = [
  {
    id: 1,
    name: "Tuco Salamanca",
    type: "Human",
    registrationNumber: "УБ-123",
  },
  { id: 2, name: "Gustavo Fring", type: "Human", registrationNumber: "УБ-456" },
  { id: 3, name: "Walter White", type: "Human", registrationNumber: "УБ-789" },
  {
    id: 4,
    name: "Wall-E",
    type: "Robot",
    modelNumber: "A-113",
  },
  {
    id: 5,
    name: "R2-D2",
    type: "Robot",
    modelNumber: "R2-D2",
  },
  {
    id: 6,
    name: "C-3PO",
    type: "Robot",
    modelNumber: "C-3PO",
  },
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
