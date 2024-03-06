import React from "react";
import { useEffect, useState } from "react";
import {StyleSheet, Text, View} from 'react-native';


 const Progressbar = ({ value=0, max = 0}) =>{

    const[percent, setPercent]= useState(value);
    const [maxValue, setMaxValue] = useState(max);
    useEffect(()=>{
         //setPercent(value)
         const usedPercentage = (value / max) * 100;
         setPercent(usedPercentage)
    },[percent, value, max]);
    return(
        <React.Fragment>
            <View style={styles.progressbar}>
                <View  style={[styles.progressBarFill, { width: `${percent}%`}]}> 
                </View>
           </View>
        </React.Fragment>
    );
    
    
}

const styles = StyleSheet.create({
    progressbar: {
        marginTop: 10, marginBottom: 5,
        width: '100%',
        height: 5,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden'
        
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: 'green',
    }
})

export default Progressbar;