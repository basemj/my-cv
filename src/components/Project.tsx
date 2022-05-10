import React, { FunctionComponent } from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { IProject } from "../types";

const styles = StyleSheet.create({
  projectWrapper: { marginTop: 10, marginLeft: 35 },
  projectTitle: { fontWeight: "bold", marginVertical: 5 },
});

interface IProps {
  project: IProject | null;
}

const Project: FunctionComponent<IProps> = ({ project }: IProps) => {
  return (
    project &&
    <View style={styles.projectWrapper}>
      <Text style={styles.projectTitle}>{project.title}</Text>
      <Text>{project.description}</Text>
    </View>
  );
};

export default Project;
