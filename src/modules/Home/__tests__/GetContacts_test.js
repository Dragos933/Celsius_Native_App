import 'react-native';
import useGetContacts from '../customHooks/useGetContacts';
import { renderHook } from '@testing-library/react-hooks'

describe('Test Get Contacts',() => {
  it('Should get user`s contacts', () => {
    const { result } = renderHook(() => useGetContacts(''));

    const [filteredContacts, error, isLoadingContacts] = result.current;
  
    expect(filteredContacts).toHaveLength(4);
    expect(error).toBe(null);
    expect(isLoadingContacts).toBe(false);
  });
});
