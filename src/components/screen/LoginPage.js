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

import Loading from "C:\\Users\\ilyas\\Desktop\\mobilProje\\src\\components\\components\\Loading.js"

const LoginPage =()=>{
    const [name,setName] = useState("");
    const [lastName,setLastName]=useState("");
    const [ResaultName,setResaultName]=useState("");
    const [isLoading , setIsLoading] =useState(false);

    return(

        <View style={styles.container}>

            <Image 
                source={require("C:\\Users\\ilyas\\Desktop\\mobilProje\\assets\\images\\loginicon.png")}
                style={styles.image}
            />


            <Text style={styles.welcome}>WelcomEEEEEEEEE {ResaultName}</Text>

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
            onPress={()=>setIsLoading(true)}
            style={ ({pressed}) =>[{

                backgroundColor: pressed ? "gray":"blue"

            },styles.button]}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable
            onPress={()=>setIsLoading(true)}
            style={ ({pressed}) =>[{

                backgroundColor: pressed ? "gray":"blue"

            },styles.button]}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>


            {isLoading 
            ? <Loading changeisLoading= {()=>setIsLoading(false)}/>
            :null}

        </View>
    );
}



export default LoginPage;


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

