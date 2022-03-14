import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 container: { 
   flex:1,
   backgroundColor:'#fff'
 },
 label:{
   width:"90%",
   marginTop: 20,
   fontSize:16,
   marginLeft: 20,
   color:"#F92E6A"
 },
 textoInput:{
  width:"90%",
  marginTop:10,
  padding:10,
  height:50,
  borderBottomWidth: 1,
  borderBottomColor:"#F92E6A",
  marginLeft:"auto",
  marginRight:"auto"
 },
 botaoSalvar:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,
  left:20,
  backgroundColor:"#F92e6a",
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconeSalvar:{
  color:"#ffffff",
  fontSize:12,
  fontWeight:"bold",
 }
 
});
 
export default styles