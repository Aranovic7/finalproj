/* 
* This file is my homepage which is the first thing the user will experience
* from here you can press start and then have the options to log in or register to continue
*/
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableHighlight, Alert, Image} from "react-native"
import { useNavigation } from "@react-navigation/native";
import {  useState } from "react";
import LoginScreen from "./LoginScreen";


const Home = () => {
    const [showModal, setShowModal] = useState(false) // modal default value = false
    const navigation = useNavigation(); // <- so that I can use navigation
    const alertMessage = () =>
    Alert.alert('Alert', 'This is a alert message', [ // My alert message
      {
        text: 'Cancel',
        
      } ,
      {text: 'OK'}
    ])
   
    return(
        <View style={styles.container}>
            <View>
            <Modal  //Here I create my modal
             animationType="slide"
             transparent={true}
             visible={showModal}
             onRequestClose = {() => {
                setShowModal(!showModal)
             }}>
       
            <View style={styles.modalForm}> 
              <TouchableOpacity style={{marginLeft: 260, top: -80}}
              onPress={() => setShowModal(!showModal)}> 
                <Image style={{height: 20, width: 20}}
                source={require("../icons/closetag.png")}> 
                </Image>
              </TouchableOpacity>
              <Text style={{textAlign: 'center', marginBottom: 80}}>Already have an account?</Text>
              <Text style={{textAlign: 'center', marginBottom: 230}}>New to QuizNow? Sign up</Text>
              <TouchableHighlight style={styles.logInButton} onPress={() => {navigation.navigate(LoginScreen); setShowModal(!showModal)}}>
                <Text style={styles.logInButtonText}>LOG IN</Text> {/* On press "LOG IN" navigate -> LoginScreen */}
                  </TouchableHighlight> 
                <TouchableOpacity style={styles.registerButton}
                onPress={alertMessage}>
                  <Text style={styles.registerButtonText}>REGISTER</Text> {/* On press "REGISTER" -> alert.message */}
                </TouchableOpacity>

                </View>
                </Modal>
                </View>

             <Text style={styles.myHeader}>QuizNow</Text>
             <Text style={styles.mySecondheader}>Start your quiz now!</Text>
             <Text style={styles.mySlogan}>Knowledge is a superpower!</Text>
      <TouchableOpacity style={styles.myButton} onPress={() => setShowModal(true)}>
             <Text style={{color: '#FE6915', textAlign: 'center', fontWeight: 'bold'}}>Start</Text> 
      </TouchableOpacity>
        </View>
);}

export default Home;

const styles = StyleSheet.create({
   
     container: {
        flex: 1,
        backgroundColor: '#FE6915',
        alignItems: 'center',
        justifyContent: 'center',

    } , myButton: {
        width: '70%',
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 10,
        marginBottom: 10,
        
    
      }, modalForm: {
        backgroundColor: 'white',
        height: 400,
        width: 300,
        borderRadius: 15,
        justifyContent: 'center',
        top: 245,
        left: 45
        

      }, logInButton: {
        backgroundColor: '#FE6915',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        borderWidth: 1,
        marginTop: -320


      }, logInButtonText: {
        color: 'white',
        fontWeight: 'bold'


      }, registerButton: {
        backgroundColor: '#FE6915',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        borderWidth: 1,
        marginTop: 40


      }, registerButtonText: {
        color: 'white',
        fontWeight: 'bold'


      }, myHeader : {
        top: -295, 
        left: -125,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'


      }, mySecondheader: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        top: -100


      }, mySlogan: {
        color: 'white',
        fontSize: 20,
        top: -75

        
      }, startButtonText: {
        color: '#FE6915',
         textAlign: 'center',
          fontWeight: 'bold'
      }
})