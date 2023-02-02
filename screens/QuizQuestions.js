/*
* Here the quiz starts and all questions will be rendered
*/

import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Category from "./Category";

const QuizQuestions  = ({ answers }) => {
    const questions = [
          
{ 
    question: "", 
    answers: [""],
    correctAnswer: ""
},        
{
    question: "Which boxer fought against Muhammad Ali and won?", 
    answers: ["Mike Tyson", "Tyson Fury", "Aran Ali", "Joe Frazier"],
    correctAnswer: "Joe Frazier"
},
{
    question: "Which one of these football players has never won the ballon'dor?",
    answers: ["Neymar JR", "Modric", "Ronaldinho", "Benzema"],
    correctAnswer: "Neymar JR"
},
{
    question: "Where was the 2020 Olympics held?",
    answers: ["Oslo", "Paris", "Baghdad", "Tokyo"],
    correctAnswer: "Tokyo"
},
{
    question: "Which of these UFC fighters is unbeaten?",
    answers: ["Jon Jones", "Conor McGregor", "Khabib Nurmagomedov", "Nick Diaz"],
    correctAnswer: "Khabib Nurmagomedov"
},
{
    question: "Who is the greatest football player of all time?",
    answers: ["Zlatan Ibrahimovic", "Cristiano Ronaldo", "Diego Maradona", "Lionel Messi"],
    correctAnswer: "Cristiano Ronaldo"
}
];
    const [currentQuestion, setCurrentQuestion] = useState(1); //Question starts from index 1 because index 0 is empty
    const [userAnswers, setUserAnswers] = useState([]) //State variable to update user answer
    const [score, setScore] = useState(0) //State variable to update the score
    const navigation = useNavigation();
    const handleAnswer = (answer) => {
        const currentQ = questions[currentQuestion];
        if (currentQ.correctAnswer === answer) { //If answer is correct -> +1 point
            setScore(score + 1);
        }
        setUserAnswers([...userAnswers, answer]);
        setCurrentQuestion(currentQuestion + 1); //gets the next index in array of questions
    }
     
    const renderQuestion = () => { //This component renders the question and answer options
        const currentQ = questions[currentQuestion];
        return (
            <View style={styles.myOptions}>
                <Text style={styles.styleQuestions}>{currentQ.question}</Text>
                {currentQ.answers.map((answer, index) => (
                    <TouchableOpacity
                    style={styles.answerButton}
                    key={index}
                    onPress={() => handleAnswer(answer)}>
                     <Text style={{textAlign: 'center'}}>{answer}</Text>   
                    </TouchableOpacity>                                      
                ))}
            </View>
        );
    } 

    const renderResults = () => { // This component renders the result
        return (
            <View style={styles.userResult}>
                <Text style={styles.userScore}>You scored {score}/5 points!</Text>
                <Text style={styles.askingUser}>Wanna try again?</Text>
            <TouchableOpacity 
                 onPress={() => navigation.navigate(Category)}>
                 <Text style={styles.pressMe}>Press me</Text>   
            </TouchableOpacity>
            </View>
        )  
    }

    return(
        <View style={styles.container}>
            <Text style={styles.currentQuestionStyle}>Question {currentQuestion} of 5</Text> 
            {answers && answers?.map((answer, index) => (
        <TouchableOpacity
        key={index}
        onPress={() => setSelectedAnswer(index)}
        style={
            selectedAnswer === index
            ? { backgroundColor: 'lightblue' }
           : { backgroundColor: 'white' }
        }
        >
            <Text>{answer}</Text>
        </TouchableOpacity>
    ))}
          {currentQuestion < questions.length ? renderQuestion() : renderResults()} 
        </View>
    )
}




export default QuizQuestions;

const styles = StyleSheet.create({ 

    container: {
        flex: 1,
        backgroundColor: '#FE6915',


    }, myOptions: {
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 95
        

    }, styleQuestions: {
        left: 10,
        fontSize: 20,
        color: 'white'


    }, answerButton: {
        padding: 10,
        marginTop: 30,
        borderRadius: 5,
        height: 40,
        width: 250,
        backgroundColor: 'white',


    }, userResult: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1


    }, userScore: {
        fontSize: 20, 
        color: '#FE6915',
        fontWeight: 'bold'


    }, askingUser: {
        fontSize: 18, 
        color: "#FE6915",
         fontWeight: 'bold'


    }, pressMe: {
        fontSize: 17,
         color: '#FE6915',
          marginTop: 21


    }, currentQuestionStyle: {
        left: 10,
         fontSize: 15,
          fontWeight:'bold',
           marginTop: 50,
            color: 'white'
    }
})