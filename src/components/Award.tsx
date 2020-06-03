import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { fontSecondaryColor } from "../colors";

const styles = StyleSheet.create({
  awardWrap: { flexDirection: "row", marginBottom: 15, flex: 1 },
  image: { height: 26, marginRight: 10, borderRadius: 3 },
  awarder: { fontSize: 10, color: fontSecondaryColor, marginTop: 3 },
  date: {
    flex: 1,
    marginLeft: 10,
    textAlign: "right",
    color: fontSecondaryColor,
    fontSize: 10,
  },
});

interface IProps {
  title: string;
  awarder: string;
  date: string;
  logo: string;
}

const Award = ({ title, awarder, date, logo }: IProps) => {
  return (
    <View key={title} style={styles.awardWrap}>
      <Image src={logo} style={styles.image} />
      <View>
        <Text>{title}</Text>
        <Text style={styles.awarder}>{awarder}</Text>
      </View>
      <View style={styles.date}>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default Award;
