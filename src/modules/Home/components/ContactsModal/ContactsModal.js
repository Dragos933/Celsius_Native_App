import React from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import contactModalStyles from './ContactsModal.Styles';
import Modal from 'react-native-modal';

const ContactsModal = ({
  isOpenModal,
  closeModal,
  contactsList,
  searchByContact,
  isLoadingContacts,
  setContactsSearch,
  contactsSearch,
}) => {
  const renderContactItem = ({ item }) => (
    <TouchableOpacity onPress={() => searchByContact(item.displayName)}>
      <View style={contactModalStyles.contactItem}>
        <View style={contactModalStyles.identifierContainer}>
          <Text style={contactModalStyles.contactIdentifier}>{item.displayName.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={contactModalStyles.contactInfo}>
          <Text style={contactModalStyles.contactName}>{item.displayName}</Text>
          <Text style={contactModalStyles.contactPhone}>{item.phoneNumbers[0].number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <Modal
      isVisible={isOpenModal}
    >
      <View style={contactModalStyles.modalContent}>
        <TouchableHighlight style={contactModalStyles.iconContainer} onPress={closeModal}>
          <Image
            style={contactModalStyles.closeIcon}
            source={require('../../../../../images/close.png')}
          />
        </TouchableHighlight>
        <Text style={contactModalStyles.modalTitle}>Pick a contact</Text>
        <View style={contactModalStyles.modalInputs}>
          <Text style={contactModalStyles.searchLabel}>Search by name:</Text>
          <TextInput style={contactModalStyles.searchInput} placeholder='Search contact' value={contactsSearch} onChangeText={setContactsSearch} />
        </View>
        <FlatList
          data={contactsList}
          renderItem={renderContactItem}
          keyExtractor={(contactsItem) => contactsItem.recordID}
          style={contactModalStyles.contactsContainer}
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={isLoadingContacts}
            />
          }
          ListEmptyComponent={
            <Text style={contactModalStyles.noItems}>There are no items.</Text>
          }
        />
      </View>
    </Modal>
  )
};

export default ContactsModal
