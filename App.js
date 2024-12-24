import {StatusBar} from "expo-status-bar";
import { StyleSheet ,View , Text } from "react-native";

export default function App(){
    return(

        <View style={styles.container}>
            <Text>OPEN APP JS</Text>
            <StatusBar style="auto"></StatusBar>

            <View style={styles.subContainer}>
                <Text>TEST MESAJI</Text>
            </View>
            <View>
                <Text>LOGİN EKRANI</Text>
            </View>
        </View>


    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",    
    },
    subContainer:{
        backgroundColor:"black",
        width:100,
        height:200,
    }

})