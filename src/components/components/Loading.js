
import React from "react";
import { StyleSheet ,View , Text ,ActivityIndicator , Pressable} from "react-native";

const Loading = ({changeisLoading})=>{
    return(
        <View style={styles.container}>
            <Pressable 
            onPress={()=>changeisLoading()}
            style={[{},styles.closeButtonContainer]}>
                <Text style={styles.closeButton}>X</Text>
            </Pressable>
            <ActivityIndicator  size={"large"} color={"blue"}/>
            <Text style={styles.textStyle}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor:"tomato",
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:16,
        color:"white",
        marginTop:20
    },
    closeButtonContainer:{
        backgroundColor:"black",
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
        position:"absolute",
        top:50,
        right:30
    },
    closeButton:{
        color:"white",
        fontWeight:"bold",
        fontSize:16

    }
})