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
import { PDFViewer } from "@react-pdf/renderer";
import data from "./utils/data.json";
import "./App.css";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/assets/Roboto/Roboto-Regular.ttf" },
    { src: "/assets/Roboto/Roboto-Thin.ttf", fontWeight: "light" },
    { src: "/assets/Roboto/Roboto-Bold.ttf", fontWeight: "bold" },
  ],
});

Font.register({
  family: "Roboto-thin",
  fonts: [{ src: "/assets/Roboto/Roboto-Thin.ttf" }],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Roboto",
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
});

function App() {
  return (
    <PDFViewer width="100%" height="100%">
      <Document title="Basem_Jawahri">
        <Page style={styles.body}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View style={styles.verticalBanner}>
              <View
                style={{
                  backgroundColor: "#bada55",
                  height: 20,
                  marginHorizontal: 20,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 20,
                  paddingTop: 30,
                  paddingBottom: 15,
                }}
              >
                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                  <Image
                    src="/assets/maps-icon.png"
                    style={{ height: 12, marginRight: 5 }}
                  />
                  <Text
                    style={{ fontSize: 10 }}
                  >{`${data.basics.location.address}, ${data.basics.location.city}`}</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                  <Image
                    src="/assets/phone-icon.png"
                    style={{ height: 12, marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 10 }}>{data.basics.phone}</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                  <Image
                    src="/assets/email_icon.png"
                    style={{ height: 12, marginRight: 5 }}
                  />
                  <Link
                    src={`mailto:${data.basics.email}`}
                    style={{ color: "#333333", fontSize: 10 }}
                  >
                    {data.basics.email}
                  </Link>
                </View>
                {data.basics.profiles.map((profile) => (
                  <View style={{ flexDirection: "row", marginBottom: 15 }}>
                    <Image
                      src={`/assets/${profile.logo}`}
                      style={{ height: 12, marginRight: 5 }}
                    />
                    <Link
                      src={profile.url}
                      style={{ color: "#333333", fontSize: 10 }}
                    >
                      {profile.display}
                    </Link>
                  </View>
                ))}
              </View>
              <View
                style={{
                  backgroundColor: "#bada55",
                  height: 10,
                  marginHorizontal: 20,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              ></View>
              <View style={{ paddingHorizontal: 20, paddingVertical: 25 }}>
                <Text style={{ marginBottom: 20 }}>OVERVIEW</Text>
                <Text style={{ lineHeight: 1.5 }}>{data.basics.summary}</Text>
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
                    src={`/assets/${data.basics.picture}`}
                    style={styles.profilePhoto}
                  />
                </View>
              </View>

              <View style={{ fontSize: 12 }}>
                <Text style={{ marginBottom: 20 }}>CERTIFICATIONS</Text>
                {data.awards.map((award) => (
                  <View
                    style={{ flexDirection: "row", marginBottom: 15, flex: 1 }}
                  >
                    <Image
                      src={`/assets/${award.logo}`}
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

          <Text style={{ marginBottom: 25, marginTop: 10 }}>EXPERIENCE</Text>

          {data.work.map((work) => (
            <View>
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
                    src={`/assets/${work.logo}`}
                    style={{ borderRadius: 5, padding: 2 }}
                  />
                </View>
                <View>
                  <Text>{work.company}</Text>
                  <Text
                    style={{ fontSize: 10, color: "#666666", marginTop: 3 }}
                  >
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
                  {work.tags.map((tag) => (
                    <Text
                      style={{
                        backgroundColor: "#aaaaaa",
                        color: "#ffffff",
                        borderRadius: 3,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        fontSize: 9,
                        marginRight: 5,
                        marginBottom: 7,
                      }}
                    >
                      {tag}
                    </Text>
                  ))}
                </View>
                <Text>{work.summary}</Text>
                {work.projects.map((project) => (
                  <View style={{ marginTop: 10, marginLeft: 35 }}>
                    <Text style={{ fontWeight: "bold" }}>{project.title}</Text>
                    <Text>{project.description}</Text>
                  </View>
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
    </PDFViewer>
  );
}

export default App;
