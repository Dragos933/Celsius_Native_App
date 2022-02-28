const { StyleSheet } = require('react-native');

const contactModalStyles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: '75%',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
    zIndex: 10,
  },
  closeIcon: {
    width: 14,
    resizeMode: 'contain',
  },
  modalInputs: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    paddingBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: '50%',
  },
  searchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  contactsContainer: {
    width: '100%',
    display: 'flex',
    borderRadius: 10,
  },
  error: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    color: '#222',
  },
  contactsList: {width: '100%',},
  contactsLoading: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
  },
  noItems: {
    textAlign: 'center',
    fontSize: 20,
  },
  contactItem: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    width: '100%',
  },

  identifierContainer: {
    width: 40,
    padding: 10,
    borderRadius: 1000,
    backgroundColor: '#E3E3E3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  contactIdentifier: {
    fontSize: 20,
    lineHeight: 20,
    color: '#fff',
  },
  contactInfo: {},
  contactName: {color: '#222',},
  contactPhone: {color: '#8D8D8D',},
});

export default contactModalStyles;
