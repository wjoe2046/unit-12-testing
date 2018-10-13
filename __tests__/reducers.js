import marketsReducer from '../client/reducers/marketsReducer';

describe('MegaMarkets reducer', () => {
  let state;

  beforeEach(() => {
    state = marketsReducer(undefined, { type: undefined });
  });

  describe('default state', () => {
    it('should have all necessary properties, and reasonable defaults', () => {
      expect(state).toHaveProperty('totalMarkets', 0);
      expect(state).toHaveProperty('totalCards', 0);
      expect(state).toHaveProperty('marketList', []);
      expect(state).toHaveProperty('newLocation', '');
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(marketsReducer(state, action)).toBe(state);
    });
  });

  describe('ADD_MARKET', () => {
    const sampleAction = {
      type: 'ADD_MARKET',
      payload: {
        location: 'Azkaban',
        id: 420,
        cards: 10,
      },
    };

    it('should increase total market count by 1', () => {
      const oldCount = state.totalMarkets;
      const { totalMarkets } = marketsReducer(state, sampleAction);
      expect(totalMarkets - 1).toEqual(oldCount);
    });

    xit('should make a new marketList', () => {
    });

    xit('should clear the location field', () => {
    });
  });

  xdescribe('UPDATE_LOCATION', () => {
    it('should replace the old location with a new one', () => {
    });

    it('should not modify the marketList', () => {
    });
  });

  xdescribe('ADD_CARD', () => {
    it('should increase card count of specified market', () => {
    });

    it('should increase total card count by 1', () => {
    });

    it('SHOULD make a new marketList', () => {
    });
  });

  xdescribe('DELETE_CARD', () => {
    it('should decrease card count of specified market', () => {
    });

    it('should decrease total card count by 1', () => {
    });

    it('SHOULD make a new marketList', () => {
    });
  });
});
