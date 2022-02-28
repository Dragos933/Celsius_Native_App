import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBtn from '../../../../components/searchBtn';
import Photos from '../../components/Photos/Photos';
import Toast from 'react-native-toast-message';
import photosStyles from './PhotosScreen.Styles';
import ContactsModal from '../../components/ContactsModal/ContactsModal';
import useGetContacts from '../../customHooks/useGetContacts';
import useGetPhotos from '../../customHooks/useGetPhotos';

const PhotosScreen = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const [searchedName, setSearchedName] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [contactsSearch, setContactsSearch] = useState('');

  const [shouldSearch, setShouldSearch] = useState(false);

  const [
    photosRes,
    photosResError,
    isLoadingPhotos
  ] = useGetPhotos(currentPage, searchedName, shouldSearch);

  const [
    contactsRes,
    contactsResError,
    isLoadingContacts
  ] = useGetContacts(contactsSearch);

  useEffect(() => {
    if (photosResError) {
      showToastError('error', photosResError);
    }
  }, [photosRes, photosResError]);

  useEffect(() => {
    if (contactsResError) {
      showToastError('error', contactsResError);
    }
  }, [contactsRes, contactsResError]);

  const showToastError = (type, text1) => {
    Toast.show({
      type,
      text1,
    });
  };

  const searchByContact = (name) => {
    handleCloseModal();
    setSearchedName(name);
    shouldSearchPhotos();
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setContactsSearch('');
  };

  const searchForMorePhotos = () => {
    setCurrentPage(currentPage + 1);
  };

  const shouldSearchPhotos = () => {
    setCurrentPage(1);
    setShouldSearch(!shouldSearch);
  };

  return (
    <SafeAreaView style={photosStyles.mainContainer}>
      <View style={photosStyles.container}>
        <ContactsModal
          contactsList={contactsRes}
          searchByContact={searchByContact}
          isOpenModal={isOpenModal}
          closeModal={handleCloseModal}
          isLoadingContacts={isLoadingContacts}
          setContactsSearch={setContactsSearch}
          contactsSearch={contactsSearch}
        />
        <Text style={photosStyles.title}>Photos of this name</Text>
        <Text style={[photosStyles.text, photosStyles.label]}>Search by name</Text>
        <View style={photosStyles.searchByName}>
          <TextInput
            value={searchedName}
            placeholder='Name...'
            onChangeText={setSearchedName}
            style={photosStyles.nameInput}
          />
          <SearchBtn type='byName' btnTitle={'Search'} onPress={shouldSearchPhotos} />
        </View>
        <Text style={[photosStyles.text, photosStyles.orLabel]}>OR</Text>
        <SearchBtn type='byContact' btnTitle={'Pick a Contact'} onPress={() => setIsOpenModal(true)} />
      </View>
      <Photos
        isLoadingItems={isLoadingPhotos}
        photos={photosRes}
        showToastError={showToastError}
        searchForMorePhotos={searchForMorePhotos}
      />
      <Toast />
    </SafeAreaView>
  )
}

export default PhotosScreen;
