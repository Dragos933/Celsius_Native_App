import axios from 'axios';
import { FLICKR_API_KEY } from '@env';

const FLICKR_URL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';

const FLICKR_REST_PARAMS = 'extras=description%2Cdate_upload%2Cdate_taken%2Cowner_name&per_page=5&format=json&nojsoncallback=1';

const constructURL = (searchText, pageNumber) => (
  `${FLICKR_URL}&api_key=${FLICKR_API_KEY}&text=${searchText}&page=${pageNumber}&${FLICKR_REST_PARAMS}`
)

export const searchPhotos = async (searchText, pageNumber) => (
  await axios({
    method: 'GET',
    url: constructURL(searchText, pageNumber),
    headers: {'Content-Type': 'application/json',},
  })
);
