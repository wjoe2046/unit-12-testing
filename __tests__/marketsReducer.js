import subject from '../client/reducers/marketsReducer';
/* eslint-disable */

/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */
describe('MegaMarkets reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      totalMarkets: 0,
      totalCards: 0,
      marketList: [],
      newLocation: '',
      synced: true,
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
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
      payload: 'Azkaban',
    };

    it('adds a market', () => {
      const { marketList } = subject(state, action);
      expect(marketList[0]).toEqual({
        location: 'Azkaban',
        cards: 0,
      });
    });

    it('increases total market count by 1', () => {
      const { totalMarkets } = subject(state, action);
      expect(totalMarkets).toEqual(1);
    });

    // Remember that in Redux we never mutate. If something changes, we copy
    // the data structure! Hint: `.toBe` or `.not.toBe` are your questions.
    it('returns a state object not strictly equal to the original', () => {
      // compare changed object with original object... if NOT like original, do something
      const { ...state } = subject(state, action);
      expect({ ...state }).not.toBe(state); //if we expect that they are not alike, fail test
    });

    it('includes a marketList not strictly equal to the original', () => {
      const { ...state } = subject(state, action);
      const { marketList } = subject(state, action);
      expect({ ...state.marketList }).not.toBe(marketList); //this should fail for '.toBe'
    });

    it('clears the newLocation field', () => {
      const { newLocation } = subject(state, action);
      expect(newLocation).toEqual('');
    });
  });

  describe('UPDATE_LOCATION', () => {
    const action = {
      type: 'UPDATE_LOCATION',
      payload: 'Azkaban',
    };

    it('updates location with the action payload', () => {
      const { newLocation } = subject(state, action); //same as subject(state, action).newLocation
      expect(action.payload).toEqual(newLocation); //if azkaban is azkaban... pass
    });

    it('returns a state object not strictly equal to the original', () => {
      const { ...state } = subject(state, action);
      expect({ ...state }).not.toBe(state); //this should
    });

    it("doesn't touch the marketList array", () => {
      const { marketList } = subject(state, action); //same as subject(state, action).marketList
      expect(marketList).toBe(state.marketList); //this should
      // ASK DURING THE APPROACH!!!
      // console.log('marketList from destructuring : ', marketList);
      // console.log('state.market : ', state.marketList)
    });
  });
  /*
   * Note: the rest of these tests are an EXTENSION. You should move on
   * to Enzyme testing, and come back to these later. Optionally, you may
   * just do ADD_CARD now, and come back to the rest of these redux tests later.
   */
  describe('ADD_CARD', () => {
    xit('increases card count of market specified by payload', () => {});

    xit('increases total card count by 1', () => {});

    xit('includes a marketList not strictly equal to the original', () => {});

    xit('does not mutate or duplicate other markets in marketList', () => {});
  });

  describe('DELETE_CARD', () => {
    xit('decreases card count of market specified by payload', () => {});

    xit('decreases total card count by 1', () => {});

    xit('includes a marketList not strictly equal to the original', () => {});

    xit('does not mutate or duplicate other markets in marketList', () => {});
  });

  // The rest is functionality not included in the original MegaMarkets unit.
  // In short:
  //   1. SYNC_MARKETS is our action for writing markets to our "database." The
  //   only part of client state it affects is the "synced" property on
  //   markets, which activates/deactivates the button.
  //   2. LOAD_MARKETS only happens once, on page load, to load up markets from
  //   the database.
  describe('SYNC_MARKETS', () => {
    xit('sets synced to true', () => {});
  });

  describe('LOAD_MARKETS', () => {
    xit('replaces its marketList with the payload as-is', () => {});

    xit('sets the correct totalMarkets count', () => {});

    xit('sets the correct totalCards count', () => {});
  });
});
