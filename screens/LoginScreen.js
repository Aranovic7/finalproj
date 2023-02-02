/*
* My LoginScreen
* User needs to log in with email and password before play
*/

import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Category from "./Category";

const LoginScreen = () => {
    const navigation = useNavigation();
    return(
        <KeyboardAvoidingView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image style={styles.imagePilåtVänster}
                   source={require("../icons/pilåtvänster.png")}/>
                </TouchableOpacity>
            <View style={{flex: 0.3}}>
                <Text style={styles.myHeader}>QuizNow</Text>
                </View>
                <View style={{flex: 1.9}}>
            <Text style={styles.mySecondHeader}>Welcome</Text>
            <Text style={{marginLeft: 34, marginTop: 30, fontSize: 16}}>You're only a few steps away from QuizNow.</Text>
           
            
            <Text style={{marginLeft: 34, marginTop: 45}}>Email</Text>
            <TextInput style={styles.textInputStyle}></TextInput> 
            <Text style={{marginLeft: 34, marginTop: 30}}>Password</Text>
            <TextInput style={styles.textInputStyle} 
            secureTextEntry>
            </TextInput>
            <TouchableOpacity style={styles.SignUpBottom}
            onPress={() => navigation.navigate(Category)}> 
                <Text style={{textAlign: 'center', color: 'white'}}>Sign up</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        
    )
}

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',


    }, SignUpBottom: {
        width: '70%',
        backgroundColor: '#FE6915',
        padding: 18,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 55


    }, imagePilåtVänster: {
        height: 30,
        width: 30,
        marginTop: 70,
        marginLeft: 12


    }, myHeader: {
        color: '#FE6915', 
        textAlign: 'center', 
        marginTop: -30,
        fontSize: 22, 
        fontWeight: 'bold'


    }, mySecondHeader: {
        color: '#FE6915', 
        marginTop: 0,
        marginLeft: 34,
        fontSize: 20


    }, textInputStyle: {
        borderBottomWidth: 1,
        marginLeft: 33,
        marginRight: 33,
        marginTop: 10
    }
})