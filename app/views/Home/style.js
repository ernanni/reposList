import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  Component: {
    height: '100%',
    width: '100%'
  },
  Form: {
    alignContent: 'center',
    height: '100%',
    paddingTop: 50,
    width: '100%'
  },
  FormRow: {
    flexDirection: 'row',
  },
  Title: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 25,
    width: '100%'
  },
  Label: {
    color: '#a0a0a0'
  },
  Input: {
    borderColor: '#a0a0a0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderWidth: 1,
    height: '50%',
    paddingBottom: 0.5,
    paddingTop: 0,
    marginTop: 4,
    width: '70%'
  },
  Button: {
    backgroundColor: '#afafaf',
    alignSelf: 'center',
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    width: '20%'
  }
})