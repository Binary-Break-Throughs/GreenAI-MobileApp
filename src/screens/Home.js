import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    return(
        <ScrollView style={{
            backgroundColor:"#FFF",
            flex:1,
            padding:10
        }}>
            <View style={{
                   flexDirection:"row",
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}> 
                    <Text style={{
                        fontSize:28,
                        color:"#585a61",
                        fontWeight:"bold",
                        paddingBottom:30,
                        paddingTop:30,
                    }}>Hello there👋</Text>
                    </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:10,
                            borderRadius:15
                        }}>
                            
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>Sign In</Text>
                        </View>
                   </View>
               </View>
            
            <View style={{
               backgroundColor:"#00a46c",
               height:220,
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               borderTopLeftRadius:20,
               borderTopRightRadius:20,
               paddingHorizontal:20
           }}>
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"70%"}}>
                        <Text style={{
                            fontSize:25,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Waste Sorting Assistance</Text>
                   </View>
                   <View style={{width:"30%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../images/g.png')}
                            style={{height:60,width:60}}
                        />
                   </View>
               </View>
               <Text style={{
                            fontSize:15,
                            color:"#FFF",
                            fontWeight:"bold",
                            marginTop:25}}
                            >Find out the most appropriate disposable method through the help of AI by taking a quick picture!</Text>
           </View>
           <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:80,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <Image
                    source={require('../images/camera-regular-24.png')}
                    style={{height:30,width:30}}
                   />
                   <Text style={{
                            fontSize:20,
                            color:"#00a46c",
                            fontWeight:"bold"}}> Open Camera</Text>
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:15,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"60%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Environmental Impact</Text>
                        

                   </View>
                   <View style={{width:"40%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:300}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:200,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:15,
                            marginTop:20,
                            borderRadius:15,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/4.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            GHANA
                        </Text>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/5.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>ANGELICA</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            ETHIOPIA
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/6.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>ADE</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            NIGERIA
                        </Text>
                    </View>

                </ScrollView>            

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
               }}>
                   <View style={{width:"70%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Waste Pickup Schedule</Text>
                   </View>
                   <View style={{width:"30%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>Order</Text>
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Image
                        source={require("../images/18.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <Image
                        source={require("../images/19.png")}
                        style={{marginTop:20,borderRadius:10}}
                    />
                </ScrollView>
        </ScrollView>
    )
}
export default Home;