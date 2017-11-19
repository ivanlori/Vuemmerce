import HeaderTabs from '../HeaderTabs';

export default {
  name: 'search-menu',
  components: {
    'header-tabs': HeaderTabs,
  },
  data() {
    return {
      selected: 1,
      lists: [
        {
          id: 1,
          category: 'all',
        },
        {
          id: 2,
          category: 'Cat 1',
        },
        {
          id: 3,
          category: 'Cat 2',
        },
      ],
    };
  },
};
