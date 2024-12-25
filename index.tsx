import {StatusBar} from "expo-status-bar";
import React,{ useState } from "react";
import { StyleSheet ,
    View , 
    Text ,
    TextInput,
    Pressable,
    Image
    } 
    from "react-native";

export default function App(){
    const [name,setName] = useState("");
    const [lastName,setLastName]=useState("");
    const [ResaultName,setResaultName]=useState("");

    return(

        <View style={styles.container}>

            <Image 
                source={require("C:\\Users\\ilyas\\Desktop\\mobilProje\\assets\\images\\loginicon.png")}
                style={styles.image}
            />


            <Text style={styles.welcome}>Welcome {ResaultName}</Text>

            <Text >E-MAİL:</Text>

            <TextInput 
            style={styles.TextInputStyle} 
            inputMode="email"
            placeholder="Enter Your E-MAİL:"
            value={name}
            onChangeText={setName}
            />

            <Text>PASSWORD:</Text>

            <TextInput 
            secureTextEntry={true}
            placeholder="Enter Your PASSWORD:"
            keyboardType="numeric"
            style={styles.TextInputStyle}
            value={lastName}
            onChangeText={setLastName} 
            />

            <Pressable
            onPress={()=>setResaultName(name+" "+lastName)}
            style={ ({pressed}) =>[{

                backgroundColor: pressed ? "gray":"blue"

            },styles.button]}>
                <Text style={styles.buttonText}>SAVE</Text>
            </Pressable>

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
    TextInputStyle:{
        borderWidth:1,
        width:"80%",
        height:40,
        borderRadius:30,
        marginVertical:10,
        textAlign:"center",
        color:"blue",
        fontWeight:"bold"

    },
    button:{
        width:200,
        height:40,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText:{
        fontWeight:"bold",
        color:"white"
    },
    image:{
        width:150,
        height:150,
    },
    welcome:{
        fontSize:25,
        fontWeight:"bold"

    }
})

