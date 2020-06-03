import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { tagColor, tagFontColor } from "../colors";

const styles = StyleSheet.create({
  tag: {
    backgroundColor: tagColor,
    color: tagFontColor,
    borderRadius: 3,
    paddingHorizontal: 7,
    paddingVertical: 2,
    fontSize: 9,
    marginRight: 5,
    marginBottom: 7,
  },
});

interface IProps {
  tagText: string;
}

const Tag = ({ tagText }: IProps) => {
  return <Text style={styles.tag}>{tagText}</Text>;
};

export default Tag;
