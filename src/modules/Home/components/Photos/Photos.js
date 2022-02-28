import React from 'react';
import { Image, Text, TouchableOpacity, View, FlatList, RefreshControl} from 'react-native';
import moment from 'moment';
import { FLICKR_URL } from '../../../../utils/constants';
import photosStyles from './Photos.Styles';
import { Linking } from 'react-native';
import { ERRORS_DICTIONARY } from '../../../../utils/constants';

const Photos = ({ isLoadingItems, photos, showToastError, searchForMorePhotos }) => {

  const getFlickrImageURL = (photoItem, size) => {
    return `${FLICKR_URL}/${photoItem.server}/${photoItem.id}_${photoItem.secret}_${size}.jpg`;
  }

  const openImageInBrowser = async (photoItem) => {
    try {
      const constructedURL = getFlickrImageURL(photoItem, 'c');
      const canOpen = await Linking.canOpenURL(constructedURL);
        
      if (canOpen) {
        await Linking.openURL(constructedURL);
      } else {
        showToastError('error', ERRORS_DICTIONARY['OPEN_LINK_ERROR']);
      }
    } catch (error) {
      showToastError('error', ERRORS_DICTIONARY['REQUEST_ERROR']);
    }
  };

  const renderPhotoItem = ({ item }) => (
    <View style={photosStyles.photoItem}>
      <TouchableOpacity onPress={() => openImageInBrowser(item)}>
        <Image
          source={{ uri: getFlickrImageURL(item, 'm') }}
          style={{
            width: 250,
            height: 200
          }}
        />
      </TouchableOpacity>
      <View style={photosStyles.content}>
        <Text style={photosStyles.title}>{item.title}</Text>
        <Text style={photosStyles.owner}>(by {item.ownername})</Text>
        <Text style={photosStyles.description}>{item.description._content}</Text>
        <Text style={photosStyles.dateTaken}>{moment(item.datetaken).format('DD/MM/YYYY')}</Text>
      </View>
    </View>
  )

  return (
    <View style={photosStyles.photos}>
      <Text style={photosStyles.searchedLabel}>Searched Items</Text>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onEndReached={searchForMorePhotos}
        onEndReachedThreshold={0.5}
        data={photos}
        renderItem={renderPhotoItem}
        keyExtractor={(photosItem, index) => `${photosItem.id}-${index}`}
        style={photosStyles.photosContainer}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={isLoadingItems}
          />
        }
        ListEmptyComponent={
          <Text style={photosStyles.noItems}>There are no items.</Text>
        }
      />
    </View>
  );
}

export default Photos;
