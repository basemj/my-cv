import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import Tag from "./Tag";
import Project from "./Project";

const styles = StyleSheet.create({
  entryHeader: { flexDirection: "row", alignItems: "center" },
  imageWrapper: {
    height: 34,
    width: 34,
    marginRight: 10,
    borderRadius: 5,
    border: "2 solid #bada55",
  },
  image: { borderRadius: 5, padding: 2 },
  position: { fontSize: 10, color: "#666666", marginTop: 3 },
  date: {
    flex: 1,
    marginLeft: 10,
    textAlign: "right",
    color: "#666666",
    fontSize: 10,
  },
  entryBody: {
    borderLeft: "2 solid #bada55",
    marginLeft: 16,
    paddingLeft: 26,
    paddingTop: 15,
    paddingBottom: 20,
    lineHeight: 1.5,
  },
  tagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    lineHeight: 1.2,
    marginBottom: 10,
  },
});

interface IProject {
  title: string;
  description: string;
}

interface IWork {
  logo: string,
  company: string,
  position: string,
  startDate: string,
  endDate: string,
  summary: string,
  tags: Array<string>,
  projects: Array<IProject>,
}

interface IProps {
  work: IWork
}

const WorkEntry = ({ work }: IProps) => {
  return (
    <View>
      <View style={styles.entryHeader}>
        <View style={styles.imageWrapper}>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/images/${work.logo}`}
            style={styles.image}
          />
        </View>
        <View>
          <Text>{work.company}</Text>
          <Text style={styles.position}>
            {work.position}
          </Text>
        </View>
        <View style={styles.date}>
          <Text>
            {work.startDate === work.endDate
              ? work.startDate
              : `${work.startDate} - ${work.endDate}`}
          </Text>
        </View>
      </View>
      <View style={styles.entryBody}>
        <View style={styles.tagsWrap}>
          {work.tags.map((tagText, index) => (
            <Tag key={index} tagText={tagText} />
          ))}
        </View>
        <Text>{work.summary}</Text>
        {work.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </View>
    </View>
  );
};

export default WorkEntry;
