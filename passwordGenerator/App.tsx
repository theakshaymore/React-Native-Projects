import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

// Form Validation
import * as Yup from "yup";

const passwordScheme = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be min of 4 characters")
    .max(16, "Should be max of 16 characters")
    .required("This is required field"),
});

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerase, useLowerCase] = useState(true);
  const [upperCase, useUpperCase] = useState(false);
  const [symbol, useSymbol] = useState(false);

  const generatedPassString = (passwordLength: number) => {
    //
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Aaaapp</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
