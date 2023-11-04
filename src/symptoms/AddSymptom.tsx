import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Button
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../components/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, removeItem } from "../redux/promptSlice";
import type { PromptState } from '../redux/promptSlice'
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import Popup from "../components/popup";
import IButton from "../components/IButton";


const AddSymptom = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState("");

  const dispatch = useDispatch()

  var promptsList = useSelector((state: PromptState) => state.prompt.value)

  const inputRef = React.createRef<TextInput>();
  const updateInputRef = React.createRef<TextInput>();
  useEffect(() => { }, [promptsList]);


  const addItem = () => {
    if (text != "" && text.length >= 3) {
      dispatch(addNewItem(text))
      setText("")
    }
  };

  const updateItem = () => {
    if (text != "" && text.length >= 3) {
      console.log("sadsadsd")
      //dispatch(addNewItem(text))
      setUpdateText("")
    }
  };

  const closePopup = () => {
    setVisible(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ backgroundColor: COLORS.black, height: "100%" }}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="User Nickname"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            underlineColorAndroid="transparent"
            clearButtonMode="while-editing"
            keyboardType="default"
            returnKeyType="next"
            autoFocus={true}
            blurOnSubmit={false}
            value={text}
            ref={inputRef}
            onSubmitEditing={() => {
              inputRef.current.clear()
              addItem();
            }}
          />
          <Pressable
            onPress={() => {
              addItem();
            }}
          >
            <Ionicons
              name="add"
              size={24}
              style={styles.promptIcon}
              color={COLORS.white}
            />
          </Pressable>
        </View>
        <View style={styles.promptContainer}>
          {
            promptsList.map((prompt) => {
              return <PromptText setVisible={setVisible} key={prompt.id} text={prompt.input} id={prompt.id} subDispatch={dispatch} />
            })
          }
        </View>
        <Popup
          visible={visible}
          transparent={true}
          dismiss={closePopup}
          margin={"15%"}
        >
          <View style={styles.popupContent}
          >
            <Text style={{ fontSize: 18, color: COLORS.white }}>Popup opened!</Text>
            <View style={styles.popupInputContainer}>
              <TextInput editable
                multiline
                style={styles.popupInput}
                onChangeText={(newText) => setUpdateText(newText)}
                ref={updateInputRef}
                defaultValue={updateText}
                clearButtonMode="while-editing"
                keyboardType="default"
                returnKeyType="next"
                autoFocus={true}
                blurOnSubmit={false}
                value={updateText}
                onSubmitEditing={() => {
                  updateInputRef.current.clear()
                  updateItem();
                }}
                />
            </View>
            <View style={styles.popupButtonGroup}>
              <IButton onPress={updateItem()}  />
            </View>
          </View>
        </Popup>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const PromptText = ({ text, id, subDispatch, setVisible }) => {
  const removeItemFromList = () => {
    subDispatch(removeItem(id))
  };

  const updateItem = () => {
    setVisible(true)

  };
  return (
    <TouchableWithoutFeedback onLongPress={updateItem}>
      <View style={styles.promptWrap}>
        <Text style={styles.promptText}>{text}</Text>
        <TouchableWithoutFeedback onPress={removeItemFromList} >
          <AntDesign
            name="close"
            size={15}
            color={COLORS.white}
            style={styles.promptIcon}
          />
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default AddSymptom;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderWidth: 1,
    borderColor: COLORS.primalGrey,
    borderRadius: 15,
    textAlign: "center",
  },
  searchIcon: {
    padding: 10,
    flex: 1,
  },
  input: {
    flex: 11,
    marginLeft: 15,
    color: COLORS.white,
  },
  promptContainer: {
    alignSelf: "flex-start",
    flexWrap: "wrap",
    margin: 15,
    flexDirection: "row",
  },
  promptWrap: {
    backgroundColor: COLORS.primalGrey,
    alignItems: "center",
    flexDirection: "row",
    margin: 2,
    alignSelf: "center",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  promptText: {
    color: COLORS.white,
  },
  promptIcon: {
    padding: 15,
  },

  popupContent: {
    padding: 10,
    backgroundColor: COLORS.primalGrey,
    borderWidth: 1,
    borderRadius: 20,
    height: 300
  },
  popupInputContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    height: 150,
    borderColor: COLORS.white,
  },
  popupInput: {
    color: COLORS.white,
    height: '100%',
    padding:10,
    textAlignVertical:'top'

  },
  popupButtonGroup: {
    marginTop: 15,
    flexDirection: 'row-reverse',
  },


});
