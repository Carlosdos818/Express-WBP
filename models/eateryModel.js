const eateries = [
    {
      id: 3226,
      name: 'Burger Queen',
      genre: 'American',
      address: '5 Pine St, Toronto',
      price: '$',
      latitude: 43.6544,
      longitude: -79.3832
    },
    {
      id: 5475,
      name: 'Sushi King',
      genre: 'Japanese',
      address: '11 Maple Blvd, Toronto',
      price: '$$$',
      latitude: 43.60317,
      longitude: -79.49919
    },
    {
      id: 9567,
      name: 'West Side Marios',
      genre: 'Italian',
      address: '43 Elm Ave, Toronto',
      price: '$$$',
      latitude: 43.67545,
      longitude: -79.37692
    }
  ];

  function getAll() {
    return eateries;
  }

  function getOne(id) {
    return eateries.find(eatery => eatery.id === id);
  }


  module.exports = {
    getAll,
    getOne
  };