import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../components/Colors";

const ResultScreen = () => {
  return (
    <View
      style={{ backgroundColor: COLORS.black, height: "100%", width: "100%" }}
    >
      <View style={styles.mainHeader}>
        <Text style={styles.headerTitle}>Mevcut Hastalık</Text>
      </View>

      <ScrollView>
        <View style={styles.horizontalContainer}>
        {/* Hastalık tanısı */}
          <View
            style={{
              ...styles.resultGridContainer,
              backgroundColor: "#DF4241",
            }}
          >
            <View style={styles.resultHeader}>
              <Text style={{ ...styles.title }}>Healt</Text>
              <AntDesign name="hearto" size={24} color="green" />
            </View>
          </View>

{/* Hastalık belirtileri */}
          <View
            style={{
              ...styles.resultGridContainer,
              backgroundColor: "#FDB454",
            }}
          >
            <View style={styles.resultHeader}>
              <Text style={styles.title}>Healt</Text>
              <AntDesign name="hearto" size={24} color="orange" />
            </View>
          </View>
        </View>
            {/* Hastalık Evde tadavi yötemi ve doğal çözümler */}
        <View style={{ ...styles.resultContainer, backgroundColor: "#4FAAFD" }}>
          <View style={styles.resultHeader}>
            <Text style={styles.title}>Healt</Text>
            <AntDesign name="hearto" size={24} color="orange" />
          </View>
        </View>

        <View style={{ ...styles.resultContainer, backgroundColor: "#36AD90" }}>
          <View style={styles.resultHeader}>
            <Text style={styles.title}>Healt</Text>
            <AntDesign name="hearto" size={24} color="orange" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultScreen;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {},
  horizontalContainer: {
    flexDirection: "row",
  },
  mainHeader: {
    marginHorizontal: 15,
    marginTop: 50,
    marginBottom: 15,
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
  },
  resultGridContainer: {
    padding: 10,
    flexWrap: "wrap",
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    width: windowWidth / 2 - 10,
    height: 200,
  },
  resultContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    width: windowWidth - 10,
    height: 200,
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
  },
});
