import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";


const Sports  = () => {
    const navigation = useNavigation;
return(
    <View style={styles.container}>
<Text style={{fontWeight: 'bold', left: 40, top: 40, fontSize: 20}}>Question 1</Text> 
        <View style={styles.myOptions}>
        <TouchableOpacity style={styles.optionA}>
            <Text style={{textAlign: 'center', color: 'white', top: 20}}>Option A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionB}>
            <Text style={{textAlign: 'center', color: 'white', top: 20}}>Option B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionC}>
            <Text style={{textAlign: 'center', color: 'white', top: 20}}>Option C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionD}>
            <Text style={{textAlign: 'center', color: 'white', top: 20}}>Option D</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.prevButton}>
        <Text style={{textAlign: 'center', color: 'white', top: 23}}>PREV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
            <Text style={{textAlign: 'center', color: 'white', top: 23}}>NEXT</Text>
        </TouchableOpacity>
    </View>
)
}
export default Sports;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }, myOptions: {
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 95
    }, prevButton: {
        width: '25%',
        height: '9%',
        borderRadius: 15,
        backgroundColor: '#FE6915',
        top: 120,
        left: 20
    }, nextButton: {
        width: '25%',
        height: '9%',
        borderRadius: 15,
        backgroundColor: '#FE6915',
        top: 55,
        left: 265
    }, optionA: {
        width: '60%',
        height: '16%',
        backgroundColor: '#FE6915',
        borderRadius: 15, 
        
   
    }, optionB: {
        width: '60%',
        backgroundColor: '#FE6915',
        height: '16%',
        borderRadius: 15,
        

    }, optionC: {
        width: '60%',
        backgroundColor: '#FE6915',
        height: '16%',
        borderRadius: 15,
       

    }, optionD: {
        width: '60%',
        backgroundColor: '#FE6915',
        height: '16%',
        borderRadius: 15,
        
    },
})