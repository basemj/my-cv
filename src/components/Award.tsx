import React, { FunctionComponent } from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { fontSecondaryColor, accentColor } from "../colors";

const styles = StyleSheet.create({
  awardWrap: { flexDirection: "row", marginBottom: 15, flex: 1 },
  image: { height: 26, marginRight: 10, borderRadius: 3 },
  imageAlt: {
    backgroundColor: accentColor,
    height: 26,
    width: 26,
    marginRight: 10,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Roboto-thin",
    borderRadius: 3,
  },
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

const Award: FunctionComponent<IProps> = ({ title, awarder, date, logo }: IProps) => {
  return (
    <View key={title} style={styles.awardWrap}>
      {logo ? (
        <Image
          src={`${process.env.PUBLIC_URL}/assets/images/${logo}`}
          style={styles.image}
        />
      ) : (
        <Text style={styles.imageAlt}>{title.charAt(0)}</Text>
      )}
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
