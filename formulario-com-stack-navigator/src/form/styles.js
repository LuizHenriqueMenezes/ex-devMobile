import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FEFEFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003262',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#89CFF0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#003262',
    backgroundColor: '#89CFF0'
  },
  slider: {
    marginTop: 10

  },
  valor: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    color: '#0066FF',
  },
  nacionalidadeBrasileiro: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: '#009900',
  },
  nacionalidadeEstrangeiro: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: '#FF3300',
  },
  confirmar: {
    marginBottom: 20,
    backgroundColor: '#3399FF',
    borderRadius: 5,
    paddingVertical: 10,
  },
  exibirDadosContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#89CFF0',
  },
  exibirDados: {
    fontSize: 16,
    color: '#003262',
  },
});

export {styles}