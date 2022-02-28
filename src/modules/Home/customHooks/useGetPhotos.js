import { useState, useEffect } from 'react';
import { searchPhotos as searchPhotosAPI} from '../services/homeServices';
import { ERRORS_DICTIONARY } from '../../../utils/constants';

export default function useGetPhotos(
  pageNumber,
  nameToSearchBy,
  shouldSearch,
) {
  const [photos, setPhotos] = useState([]);
  const [isPhotosLoading, setIsPhotosLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (pageNumber !== null) {
      searchPhotos()
    }
  }, [shouldSearch, pageNumber]);

  const handleErrorCase = (errorMessage) => {
    setPhotos([]);
    setError(errorMessage);
  };

  const searchPhotos = async () => {
    setIsPhotosLoading(true);

    try {
      setError(null);
      const { data } = await searchPhotosAPI(nameToSearchBy, pageNumber);
      if (data.stat === 'ok') {
        if (pageNumber > 1) {
          setPhotos([...photos, ...data.photos.photo]);
        } else {
          setPhotos(data.photos.photo);
        }
      } else {
        handleErrorCase(ERRORS_DICTIONARY['INPUT_EMPTY_ERROR']);
      }
    } catch (error) {
      handleErrorCase(ERRORS_DICTIONARY['LOADING_ITEMS_ERROR']);
    }

    setIsPhotosLoading(false);
  }

  return [photos, error, isPhotosLoading];
}
