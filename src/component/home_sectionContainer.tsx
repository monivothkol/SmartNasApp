import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

// const homepage_section = ({button1, button2}) =>{

// }

interface MyComponentProps {
  sectionName?: string;
  backgroundImg: string;
  btnAmount: number;
  buttonNames?: {label: string; backgroundColor: string; textColor: string}[];
}
const image = {};

const SectionContainer: React.FC<MyComponentProps> = ({
  sectionName = 'Default Section',
  backgroundImg,
  btnAmount,
  buttonNames,
}) => {
  return (
  <View>
    <View>
      <Text style={styles.sectionName}>{sectionName}</Text>
    </View>
    <ImageBackground
      source={{uri: backgroundImg}}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.btnContainer}>
        {Array.from({length: btnAmount}, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              {backgroundColor: buttonNames[index].backgroundColor},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: buttonNames[index].textColor},
              ]}>
              {buttonNames[index].label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  </View>
  );
};
const styles = StyleSheet.create({
  sectionName:{
    fontSize: 17, 
    marginTop: 30,
    marginBottom: 15,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20
  },
  btnContainer: {
    bottom: 10,
    flexDirection: 'row',
    width: '96%',
    height: 60,
  },
});
export default SectionContainer;
