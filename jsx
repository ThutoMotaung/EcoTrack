// App.js (React Native)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CarbonFootprintCalculator = () => {
  const [transportation, setTransportation] = useState('');
  const [electricity, setElectricity] = useState('');
  const [food, setFood] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const calculateFootprint = () => {
    // Simple example of carbon footprint calculation
    const transportCO2 = Number(transportation) * 0.21; // e.g. 0.21 kg CO2 per km for car
    const electricityCO2 = Number(electricity) * 0.5; // e.g. 0.5 kg CO2 per kWh
    const foodCO2 = Number(food) * 2.5; // e.g. 2.5 kg CO2 per meal
    const totalCO2 = transportCO2 + electricityCO2 + foodCO2;
    setCarbonFootprint(totalCO2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Carbon Footprint Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Distance traveled (km)"
        keyboardType="numeric"
        value={transportation}
        onChangeText={setTransportation}
      />
      <TextInput
        style={styles.input}
        placeholder="Electricity used (kWh)"
        keyboardType="numeric"
        value={electricity}
        onChangeText={setElectricity}
      />
      <TextInput
        style={styles.input}
        placeholder="Meals consumed"
        keyboardType="numeric"
        value={food}
        onChangeText={setFood}
      />
      <Button title="Calculate" onPress={calculateFootprint} />
      <Text style={styles.result}>Your Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e0f7fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarbonFootprintCalculator;

