import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    fontSize: 8,
    bottom: 20,
    left: 30,
    right: 30,
    color: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

interface IProps {
  name: string;
}

const Footer = ({ name }: IProps) => {
  return (
    <View style={styles.footer} fixed>
      <Text
        fixed
        render={({ pageNumber, totalPages }) =>
          `${name} - page ${pageNumber} of ${totalPages}`
        }
      />
      <Text>This CV is developed using react-pdf</Text>
    </View>
  );
};

export default Footer;
