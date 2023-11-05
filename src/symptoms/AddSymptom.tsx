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
import { addNewPrompt, removePrompt, updateSelectedPrompt } from "../redux/promptSlice";
import type { PromptState } from '../redux/promptSlice'
import Popup from "../components/popup";


const AddSymptom = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateLateText, setLateUpdateText] = useState("");
  const [updateTextId, setUpdateId] = useState(-5);


  const dispatch = useDispatch()

  var promptsList = useSelector((state: PromptState) => state.prompt.value)

  const inputRef = React.createRef<TextInput>();
  const updateInputRef = React.createRef<TextInput>();
  useEffect(() => { }, [promptsList]);


  const addItem = () => {
    if (text != "" && text.length >= 3) {
      dispatch(addNewPrompt(text))
      setText("")
    }
  };

  const updatePrompt = () => {
    if (updateText != "" && updateText.length >= 3 && updateText != text) {
      dispatch(updateSelectedPrompt([updateTextId, updateText]))
      setUpdateText("")
      setVisible(false)
      //TODO: Değişilik yok uyarısı ver
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
              return <PromptText setUpdateId={setUpdateId} setLateUpdateText={setLateUpdateText} setVisible={setVisible} key={prompt.id} text={prompt.input} id={prompt.id} subDispatch={dispatch} />
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
                defaultValue={updateLateText}
                clearButtonMode="while-editing"
                keyboardType="url"
                autoFocus={true}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  updateInputRef.current.clear()
                  updatePrompt();
                }}
              />
            </View>
            <View style={styles.popupButtonGroup}>
              <Pressable style={styles.button} onPress={() => { updatePrompt() }} >
                <Text style={styles.text}>Save</Text>
              </Pressable>
            </View>
          </View>
        </Popup>

        <View style={styles.floatingButtonContainer}>
          <Pressable style={styles.actionButton}  >
            <Text style={styles.text}>Next</Text>
            <AntDesign name="right" size={24} color='white' />
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const PromptText = ({ text, id, subDispatch, setVisible, setLateUpdateText, setUpdateId }) => {
  const removeItemFromList = () => {
    subDispatch(removePrompt(id))
  };

  const updateItem = () => {
    setLateUpdateText(text)
    setUpdateId(id)
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
    padding: 10,
    textAlignVertical: 'top'

  },
  popupButtonGroup: {
    marginTop: 15,
    flexDirection: 'row-reverse',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.black,
    borderWidth: 2,
    borderColor: COLORS.primalGrey
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: COLORS.white,

  },
  floatingButtonContainer: {
    height: 60,
    width: 90,
    position: 'absolute',
    right: 40,
    bottom: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primalGrey
  },
  actionButton: {
    flexDirection: 'row',
    gap: 5,

  },
});
