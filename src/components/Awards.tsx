import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import Award from "./Award";

const styles = StyleSheet.create({
  sectionHeader: { marginBottom: 20 },
});

interface Iaward {
  title: string,
  logo: string,
  awarder: string,
  date: string,
}

interface IProps {
  awards: Array<Iaward>
}

const Awards = ({ awards }: IProps) => {
  return (
    <View style={{ fontSize: 12 }}>
      <Text style={styles.sectionHeader}>CERTIFICATIONS</Text>
      {awards.map((award, index) => (
        <Award
          key={index}
          title={award.title}
          logo={`${process.env.PUBLIC_URL}/assets/images/${award.logo}`}
          awarder={award.awarder}
          date={award.date}
        />
      ))}
    </View>
  );
};

export default Awards;
