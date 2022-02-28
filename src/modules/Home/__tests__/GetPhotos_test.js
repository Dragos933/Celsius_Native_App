import 'react-native';
import { searchPhotos } from '../services/homeServices';
import useGetPhotos from '../customHooks/useGetPhotos';
import { renderHook } from '@testing-library/react-hooks';

describe('Test Get Photos', () => {
  it('CALL - Should work properly', async () => {
    const { data } = await searchPhotos('dragos', 1);

    expect(data.photos.page).toBe(1);
    expect(data.photos.perpage).toBe(5);
  });

  it('CALL - Should throw error', async () => {
    const { data } = await searchPhotos('', 1);

    expect(data.stat).toBe('fail');
    expect(data.message).toBe('Parameterless searches have been disabled. Please use flickr.photos.getRecent instead.')
  });

  it('HOOK - Should work properly', () => {
    const { result } = renderHook(() => useGetPhotos(1, 'drago', false));

    const [photos, error, isPhotosLoading] = result.current;

    expect(photos).toHaveLength(5);
    expect(error).toBe(null);
    expect(isPhotosLoading).toBe(false);
  });

  it('HOOK - Should work properly, but list should be empty', () => {
    const { result } = renderHook(() => useGetPhotos(1, 'Dragos Cornean', false));

    const [photos, error, isPhotosLoading] = result.current;

    expect(photos).toHaveLength(0);
    expect(error).toBe(null);
    expect(isPhotosLoading).toBe(false);
  });

  it('HOOK - should fail cause of invalid searchText', () => {
    const { result } = renderHook(() => useGetPhotos(-1, '', false));

    const [photos, error, isPhotosLoading] = result.current;

    expect(photos).toHaveLength(0);
    expect(error).toBe('Parameterless searches have been disabled. Please use flickr.photos.getRecent instead.')
    expect(isPhotosLoading).toBe(false);
  });
});
