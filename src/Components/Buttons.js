import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

const Buttons = ({on_press, btn_text,style}) => {
  return (
    <TouchableOpacity
    style={style}
      onPress={on_press}>
      <Text
        style={{
          textAlign: 'center',
          color: '#FFF',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {btn_text}
        
      </Text>
    </TouchableOpacity>
  );
};

export default Buttons;