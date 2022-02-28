const { StyleSheet } = require('react-native');

const photosStyles = StyleSheet.create({
  photos: {
    height: '65%',
    backgroundColor: '#F7C719',
  },
  searchedLabel: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  noItems: {
    textAlign: 'center',
    fontSize: 16,
  },
  loading: {fontSize: 24,},
  text: {
    fontSize: 20,
    color: '#222',
  },
  photosContainer: {
    display: 'flex',
    backgroundColor: '#F7C719',
  },
  photoItem: {
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 5,
    overflow: 'hidden',
    width: 250,
    marginBottom: 20,
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
  dateTaken: {
    marginTop: 10,
    fontSize: 12,
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  owner: {
    textAlign: 'right',
    fontSize: 13,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  photo: {resizeMode: 'contain',},
  error: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default photosStyles;
