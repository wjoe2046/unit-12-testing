import subject from '../client/reducers/marketsReducer';

describe('MegaMarkets reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      totalMarkets: 0,
      totalCards: 0,
      marketList: [],
      newLocation: '',
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toMatchObject(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(subject(state, action)).toBe(state);
    });
  });

  describe('ADD_MARKET', () => {
    const action = {
      type: 'ADD_MARKET',
      payload: {
        location: 'Azkaban',
        id: 97,
        cards: 10,
      },
    };

    it('adds a market', () => {
      const { marketList } = subject(state, action);
      expect(marketList[0]).toEqual(action.payload);
    });

    xit('increases total market count by 1', () => {
    });

    // Remember that in Redux we never mutate. If something changes, we copy
    // the data structure! Hint: `toBe` or `not.toBe` are your questions.
    xit('makes a new marketList', () => {
    });

    xit('clears the newLocation field', () => {
    });
  });

  describe('UPDATE_LOCATION', () => {
    xit('updates location with the action payload', () => {
    });

    xit('returns a new state', () => {
    });

    xit('doesn\'t touch the marketList array', () => {
    });
  });

  describe('ADD_CARD', () => {
    xit('increases card count of market specified by payload', () => {
    });

    xit('increases total card count by 1', () => {
    });

    xit('makes a new marketList without modifying the other markets', () => {
    });
  });

  describe('DELETE_CARD', () => {
    xit('decreases card count of market specified by payload', () => {
    });

    xit('decreases total card count by 1', () => {
    });

    xit('makes a new marketList without modifying the other markets', () => {
    });
  });
});
