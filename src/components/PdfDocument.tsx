import React, { FunctionComponent } from "react";
import data from "../utils/contracts_combined.json";
import Footer from "./Footer";
import ProfileBanner from "./ProfileBanner";
import WorkEntry from "./WorkEntry";
import Awards from "./Awards";
import VerticalBanner from "./VerticalBanner";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import { fontPrimaryColor } from "../colors";

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
    color: fontPrimaryColor,
  },
  topSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  sectionHeader: { marginBottom: 20 },
  rightSection: { flex: 1, marginLeft: 35 },
});

const PdfDocument: FunctionComponent = () => {
  return (
    <Document title={data.basics.name}>
      <Page style={styles.body}>
        <View style={styles.topSectionWrapper}>
          <VerticalBanner
            address={data.basics.location.address}
            city={data.basics.location.city}
            phone={data.basics.phone}
            email={data.basics.email}
            summary={data.basics.summary}
            profiles={data.basics.profiles}
          />

          <View style={styles.rightSection}>
            <ProfileBanner
              name={data.basics.name}
              label={data.basics.label}
              picture={data.basics.picture}
            />

            <Awards awards={data.awards} />
          </View>
        </View>

        <Text style={styles.sectionHeader}>EXPERIENCE</Text>

        {data.work.map((work, index) => (
          <WorkEntry key={index} work={work} />
        ))}

        <Footer name={data.basics.name} />
      </Page>
    </Document>
  );
};

export default PdfDocument;
