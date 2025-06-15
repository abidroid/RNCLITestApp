import {useState} from 'react';
import {View, Text} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const RadioButtonExampleScreen = () => {
  const [gender, setGender] = useState(0);

  const genderOptions = [
    {label: 'Male', value: '0'},
    {label: 'Female', value: '1'},
    {label: 'Other', value: '2'},
  ];

  return (
    <View>
      <Text>Radio Example</Text>
      <Text>Gender</Text>

      <RadioForm
        radio_props={genderOptions}
        initial={gender}
        onPress={value => setGender(value)}
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor={'#2196f3'}
        selectedButtonColor={'#2196f3'}
        labelStyle={{fontSize: 16, marginRight: 24}}
        animation={true}
      />

      <Text>
        Selected Gender: {genderOptions[gender].label}
      </Text>
    </View>
  );
};

export default RadioButtonExampleScreen;
