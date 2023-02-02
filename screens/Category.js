/*
* This file will allow the user to choose a category for the quiz
* User can choose between six different categories
* For now only sports work 
*/

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Home from "./Home";
import QuizQuestions from "./QuizQuestions";


const Category = () => {
    const navigation = useNavigation();
    const [backgroundColor, setBackgroundColor] = useState('white') 

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'column', flex: 0.2, }}> 
                <Text style={styles.greeting}>Hello Guest!</Text>
                <Text style={styles.declarativeSentence}>Choose a category to start your quiz </Text>
            </View>

          <View style={styles.myCategories}>           
                <ScrollView>
                <View style={styles.cateMargin}>
                 <TouchableOpacity style={[styles.eachCategory,{backgroundColor: backgroundColor}]} 
                    onPress={() => {setBackgroundColor('#2aff00'); navigation.navigate(QuizQuestions)}}> {/* Change backgroundcolor on press, also navigate -> QuizQuestions.js file */}
                    <Text style={styles.categoryHeader}>Sports</Text>
                 </TouchableOpacity>
                </View>
                <View style={styles.cateMargin}>
                <TouchableOpacity style={styles.eachCategory}>
                    <Text style={styles.categoryHeader}>History</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.cateMargin}>
                <TouchableOpacity style={styles.eachCategory}>
                    <Text style={styles.categoryHeader}>Religion</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.cateMargin}>
                <TouchableOpacity style={styles.eachCategory}>
                    <Text style={styles.categoryHeader}>Geography</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.cateMargin}>
                    <TouchableOpacity style={styles.eachCategory}>
                        <Text style={styles.categoryHeader}>Politics</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cateMargin}>
                    <TouchableOpacity style={styles.eachCategory}>
                        <Text style={styles.categoryHeader}>Influencers</Text>
                    </TouchableOpacity>
                </View>                               
                </ScrollView>

                <TouchableOpacity style={{alignItems:'center', marginBottom: -35}}
                    onPress={() => navigation.navigate(Home)}> {/* Home button to navigate -> Home.js */}
                    <Image style={{height: 30, width: 30}} source={require("../icons/homeiconwhite.png")}/>
                </TouchableOpacity>

        </View>
        </View>
    )
}

export default Category;

const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#FE6915',

}, myCategories: {
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 140,
    flex: 0.8,
    marginBottom: 220


}, cateMargin: {
    margin: 20


}, eachCategory: {
    height: 70,
    width: 290,
    borderRadius: 15,
    backgroundColor: 'white'


}, greeting: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 100,
    marginLeft: 10


}, declarativeSentence: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 40,
    marginLeft: 10


}, categoryHeader: {
    textAlign: 'center',
     marginTop: 20, 
     fontWeight: 'bold'
}
})