import { useState, useEffect, useMemo } from 'react';
import Contacts from 'react-native-contacts';
import { ERRORS_DICTIONARY } from '../../../utils/constants';

export default function useGetContacts(contactsSearch) {
  const [contactsList, setContactsList] = useState([]);
  const [isLoadingContacts, setIsLoadinContacts] = useState(false);

  const [error, setError] = useState(null);

  const sortContacts = (contacts) => {
    return contacts.sort((a, b) => a.displayName > b.displayName ? 1 : -1);
  }

  const getContactsList = async () => {
    setIsLoadinContacts(true);
    
    try {
      const contacts = await Contacts.getAll();
      const sortedContacts = sortContacts(contacts);

      setContactsList(sortedContacts);
    } catch (error) {
      setError(ERRORS_DICTIONARY['LOADING_CONTACTS_ERROR']);
    }

    setIsLoadinContacts(false);
  };

  const filteredContacts = useMemo(() => {
    if (contactsSearch.length === 0) {
      return contactsList;
    }
    const lowerCaseSearch = contactsSearch.toLowerCase();
    return contactsList.filter(contact =>
      contact.displayName.toLowerCase().includes(lowerCaseSearch))
  }, [contactsSearch, contactsList]);

  useEffect(() => {
    getContactsList();
  }, []);

  return [filteredContacts, error, isLoadingContacts];
}
