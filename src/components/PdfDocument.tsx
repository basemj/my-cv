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
import Footer from "./Footer";
import ContactItem from "./ContactItem";
import ProfileBanner from "./ProfileBanner";

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

  sectionHeader: { marginBottom: 20 },

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
              <ContactItem
                icon={`${process.env.PUBLIC_URL}/assets/images/maps-icon.png`}
                text={`${data.basics.location.address}, ${data.basics.location.city}`}
              />
              <ContactItem
                icon={`${process.env.PUBLIC_URL}/assets/images/phone-icon.png`}
                text={data.basics.phone}
              />
              <ContactItem
                icon={`${process.env.PUBLIC_URL}/assets/images/email_icon.png`}
                text={data.basics.email}
                link={`mailto:${data.basics.email}`}
              />
              {data.basics.profiles.map((profile) => (
                <ContactItem
                  icon={`${process.env.PUBLIC_URL}/assets/images/${profile.logo}`}
                  text={profile.display}
                  link={profile.url}
                />
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
            <ProfileBanner
              name={data.basics.name}
              label={data.basics.label}
              picture={`${process.env.PUBLIC_URL}/assets/images/${data.basics.picture}`}
            />

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

        <Footer name={data.basics.name} />
      </Page>
    </Document>
  );
}

export default PdfDocument;
