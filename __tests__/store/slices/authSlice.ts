import { authReducer } from '@store/slices/authSlice';

describe('authSlice tests', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: '' })).toEqual({
      user: null,
    });
  });
});
