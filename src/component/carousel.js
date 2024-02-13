import React from 'react';
import {
    View,
    Flatlist,
    Dimensions
} from 'react-native';

const Carousel = ({data}) => {

    return(
        <View>
            <Flatlist
                data = {data}
                keyExtractor = {
                    item => item.id
                } 
                renderItem={({item}) =>{
                    return(
                        <View>
                            <Text>
                                {item.title}
                            </Text>
                        </View>
                    );
                }
            
            }
            
            />
        </View>

    )
}

export default Carousel;