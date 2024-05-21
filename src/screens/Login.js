import {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {login, useMyContextController} from '../store';
import COLORS from '../assets/theme/COLOR';

const Login = ({navigation}) => {
  const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;
  const [email, setEmail] = useState('minhlong@gmail.com');
  const [password, setPassword] = useState('aloneking123');

  const handleLogin = () => {
    login(dispatch, email, password);
  };

  useEffect(() => {
    console.log(userLogin);
    if (userLogin != null) {
      if (userLogin.role === 'admin') {
        navigation.navigate('Admin');
      } else if (userLogin.role === 'customer') {
        navigation.navigate('Customer');
      }
    }
  }, [navigation, userLogin]);

  const onSubmit = () => {
    login(dispatch, email, password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./gaming.png')}
        style={{
          alignSelf: 'center',
          marginVertical: 50,
          height: 150,
          width: 150,
        }}
      />
      <View style={styles.logoContainer}></View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#9BA4B5"
          onChangeText={setEmail}
          value={email}></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#9BA4B5"
          onChangeText={setPassword}
          value={password}></TextInput>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.questions}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: COLORS.grey,
    marginBottom: 40,
  },
  inputView: {
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    padding: 2,
    width: '90%',
    elevation: 5,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  forgot: {
    color: '#003f5c',
    fontSize: 14,
    marginLeft: '60%',
  },
  loginBtn: {
    width: '90%',
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: 'black',
    fontSize: 20,
  },
  questions: {
    color: '#003f5c',
  },
  register: {
    color: 'fb5b5a',
  },
});
export default Login;
