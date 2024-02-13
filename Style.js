import { StyleSheet } from "react-native"

const styleSheet = StyleSheet.create({
    container:{
      flex: 1,
      
    },
    content_wrapper:{
      flex: 1,
      width: '92%',
      marginLeft: '4%',
  
    },
  
    header_Container:{
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: 'green',
      flexDirection: 'row',
      alignItems: 'center',
      height: '10%',
      paddingHorizontal: 20
    },
   
    scrollView:{
      flex: 1,
      backgroundColor: '#ECEBEB'
    },
    btnGreenCenter:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    homepageBtn:{
      padding: 10,
      flexDirection: 'row',
  } ,
  });

  export { styleSheet }