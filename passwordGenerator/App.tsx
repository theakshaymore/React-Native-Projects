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

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword("");
    setIsPassGenerated(false);
    setLowerCase(true);
    setupperCase(false);
    setNumbers(false);
    setSymbols(false);
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
