import subject from '../client/reducers/marketsReducer';

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
      payload: {
        location: 'Azkaban',
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

  // The rest is functionality not included in the original MegaMarkets unit.
  // In short:
  //   1. SYNC_MARKETS is our action for writing markets to our "database." The
  //   only part of client state is affects is the "synced" property on
  //   markets, which activates/deactivates the button.
  //   2. LOAD_MARKETS only happens once, on page load, to load up markets from
  //   the database.
  describe('SYNC_MARKETS', () => {
    xit('sets synced to true', () => {
    });
  });

  describe('LOAD_MARKETS', () => {
    xit('replaces its marketList with the payload as-is', () => {
    });

    xit('sets the correct totalMarkets count', () => {
    });

    xit('sets the correct totalCards count', () => {
    });
  });

  /**
   * We've got a bug report from a user! They said that the Sync button
   * "doesn't light up." Unfortunately that's as much detail as they gave.
   * We could walk through all of the relevant components, actions, reducers,
   * server routing, and database operations to find the logical flaw, but
   * we've already written tests for the server and DB! Some better front-end
   * testing should isolate the error.
   */
  // TODO: Revisit the above tests, and add more to validate that the state
  // which controls that button is behaving correctly in all cases.
});
