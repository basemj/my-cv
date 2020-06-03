import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  projectWrapper: { marginTop: 10, marginLeft: 35 },
  projectTitle: { fontWeight: "bold" },
});

interface Iproject {
  title: string;
  description: string;
}

interface IProps {
  project: Iproject;
}

const Project = ({ project }: IProps) => {
  return (
    <View style={styles.projectWrapper}>
      <Text style={styles.projectTitle}>{project.title}</Text>
      <Text>{project.description}</Text>
    </View>
  );
};

export default Project;
