import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Image,
  Link,
  Font,
} from "@react-pdf/renderer";
import data from "../utils/data.json";
import Tag from "./Tag";
import Project from "./Project";

Font.register({
  family: "Roboto",
  fonts: [
    { src: `${process.env.PUBLIC_URL}/assets/fonts/Roboto-Regular.ttf` },
    {
      src: `${process.env.PUBLIC_URL}/assets/fonts/Roboto-Bold.ttf`,
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "Roboto-thin",
  fonts: [{ src: `${process.env.PUBLIC_URL}/assets/fonts/Roboto-Thin.ttf` }],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Roboto",
  },
  topSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    marginBottom: 2,
    textTransform: "uppercase",
    fontFamily: "Roboto-thin",
  },
  author: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 10,
  },
  sectionHeader: { marginBottom: 20 },
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
  profilePhotoWrap: {
    marginLeft: 25,
    flex: 1,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eeeeee",
  },
  verticalBanner: {
    backgroundColor: "#eeeeee",
    marginTop: -35,
    marginBottom: 35,
    width: 190,
    fontSize: 12,
    color: "#333333",
  },
  bannerHighlight: {
    backgroundColor: "#bada55",
    height: 20,
    marginHorizontal: 20,
  },
  contactDetails: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
  },
  contactItem: { flexDirection: "row", marginBottom: 15 },
  contactIcon: { height: 12, marginRight: 5 },
  contactText: { color: "#333333", fontSize: 10 },
  bannerContent: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    lineHeight: 1.5,
  },
});

function PdfDocument() {
  return (
    <Document title="Basem_Jawahri">
      <Page style={styles.body}>
        <View style={styles.topSectionWrapper}>
          <View style={styles.verticalBanner}>
            <View style={styles.bannerHighlight}></View>
            <View style={styles.contactDetails}>
              <View style={styles.contactItem}>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/maps-icon.png`}
                  style={styles.contactIcon}
                />
                <Text
                  style={styles.contactText}
                >{`${data.basics.location.address}, ${data.basics.location.city}`}</Text>
              </View>
              <View style={styles.contactItem}>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/phone-icon.png`}
                  style={styles.contactIcon}
                />
                <Text style={styles.contactText}>{data.basics.phone}</Text>
              </View>
              <View style={styles.contactItem}>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/email_icon.png`}
                  style={styles.contactIcon}
                />
                <Link
                  src={`mailto:${data.basics.email}`}
                  style={styles.contactText}
                >
                  {data.basics.email}
                </Link>
              </View>
              {data.basics.profiles.map((profile) => (
                <View key={profile.url} style={styles.contactItem}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/images/${profile.logo}`}
                    style={styles.contactIcon}
                  />
                  <Link src={profile.url} style={styles.contactText}>
                    {profile.display}
                  </Link>
                </View>
              ))}
            </View>
            <View
              style={{
                ...styles.bannerHighlight,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            ></View>
            <View style={styles.bannerContent}>
              <Text style={styles.sectionHeader}>OVERVIEW</Text>
              <Text>{data.basics.summary}</Text>
            </View>
          </View>

          <View style={{ flex: 1, marginLeft: 35 }}>
            <View
              style={{
                flexDirection: "row",
                paddingBottom: 25,
                marginBottom: 25,
                borderBottom: "2 solid #aaaaaa",
              }}
            >
              <View style={{ flex: 2, textAlign: "right" }}>
                <Text style={styles.title}>{data.basics.name}</Text>
                <Text style={styles.author}>{data.basics.label}</Text>
              </View>
              <View style={styles.profilePhotoWrap}>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/${data.basics.picture}`}
                  style={styles.profilePhoto}
                />
              </View>
            </View>

            <View style={{ fontSize: 12 }}>
              <Text style={styles.sectionHeader}>CERTIFICATIONS</Text>
              {data.awards.map((award) => (
                <View
                  key={award.title}
                  style={{ flexDirection: "row", marginBottom: 15, flex: 1 }}
                >
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/images/${award.logo}`}
                    style={{ height: 26, marginRight: 10, borderRadius: 3 }}
                  />
                  <View>
                    <Text>{award.title}</Text>
                    <Text
                      style={{ fontSize: 10, color: "#666666", marginTop: 3 }}
                    >
                      {award.awarder}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      textAlign: "right",
                      color: "#666666",
                      fontSize: 10,
                    }}
                  >
                    <Text>{award.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.sectionHeader}>EXPERIENCE</Text>

        {data.work.map((work, index) => (
          <View key={index}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 34,
                  width: 34,
                  marginRight: 10,
                  borderRadius: 5,
                  border: "2 solid #bada55",
                }}
              >
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/images/${work.logo}`}
                  style={{ borderRadius: 5, padding: 2 }}
                />
              </View>
              <View>
                <Text>{work.company}</Text>
                <Text style={{ fontSize: 10, color: "#666666", marginTop: 3 }}>
                  {work.position}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  textAlign: "right",
                  color: "#666666",
                  fontSize: 10,
                }}
              >
                <Text>
                  {work.startDate === work.endDate
                    ? work.startDate
                    : `${work.startDate} - ${work.endDate}`}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderLeft: "2 solid #bada55",
                marginLeft: 16,
                paddingLeft: 26,
                paddingTop: 15,
                paddingBottom: 20,
                lineHeight: 1.5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
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
        ))}

        <View style={styles.footer} fixed>
          <Text
            fixed
            render={({ pageNumber, totalPages }) =>
              `${data.basics.name} - page ${pageNumber} of ${totalPages}`
            }
          />
          <Text>This CV is developed using react-pdf</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;
