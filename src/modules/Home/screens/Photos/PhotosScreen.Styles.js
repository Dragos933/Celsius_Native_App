const { StyleSheet } = require('react-native');

const photosStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F7C719',
    display: 'flex',
    padding: 20,
    height: '35%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBtn: {backgroundColor: '#f76c6c',},
  text: {
    fontSize: 16,
    color: '#222',
  },
  orLabel: {
    marginVertical: 10,
    fontSize: 15,
  },
  label: {
    marginTop: 20,
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
  searchByName: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    position: 'relative',
  },
  nameInput: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00A082',
    fontSize: 15,
    width: '50%',
  },
  itemsContainer: {
    marginTop: 20,
    width: '100%',
  },
  mainContainer: {backgroundColor: '#F7C719',},
});

export default photosStyles;
