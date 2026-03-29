import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.appName}>SecureChat</Text>
          <View style={styles.logoBox}>
            <Image 
              source={require('../assets/images/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>


        <View style={styles.formContainer}>
          <Text style={styles.title}>Hesap Oluşturun</Text>
          <Text style={styles.subtitle}>Kayıt olmak için e-mail adresinizi girin:</Text>

          <TextInput
            style={styles.input}
            placeholder="email@domain.com"
            placeholderTextColor="#A0A0A0"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Devam Et</Text>
          </TouchableOpacity>


          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>ya da</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Hesabım Var</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
     },
  headerContainer: {
    alignItems: 'center',
    marginTop: 70, 
  },
  appName: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20, 
  },
  logoBox: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    marginTop: 30, 
    alignItems: 'center',
  },
  title: {
    fontSize: 24, 
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15, 
    color: '#000000',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FAFAFA',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30, 
  },
  primaryButton: {
    backgroundColor: '#000000',
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, 
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0', 
  },
  orText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 14,
    paddingHorizontal: 10, 
  },
  secondaryButton: {
    backgroundColor: '#38B2AC',
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignUpScreen;