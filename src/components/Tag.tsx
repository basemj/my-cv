import React from "react";
import {
  Text,
  StyleSheet,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#aaaaaa",
    color: "#ffffff",
    borderRadius: 3,
    paddingHorizontal: 7,
    paddingVertical: 2,
    fontSize: 9,
    marginRight: 5,
    marginBottom: 7,
  }
});

interface IProps {
  key: number,
  tagText: string
}

const Tag = ({key, tagText}: IProps) => {
  return (
    <Text
      key={key}
      style={styles.tag}
    >
      {tagText}
    </Text>
  );
}

export default Tag;
