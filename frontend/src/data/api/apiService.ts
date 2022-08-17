export const mockApi = {
  getArticles() {
    const mockArticles = [
      {
        meta: {
          id: 1,
          title: 'A title',
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
          lastUpdated: new Date(),
          author: 'JP',
        },
      },
      {
        meta: {
          id: 2,
          title: 'Another title',
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
          lastUpdated: new Date(),
          author: 'JP',
        },
      },
      {
        meta: {
          id: 3,
          title: 'And another title title',
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
          lastUpdated: new Date(),
          author: 'JP',
        },
      },
    ];

    return mockArticles as unknown;
  },
};
