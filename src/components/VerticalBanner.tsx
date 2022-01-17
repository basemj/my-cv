import React, { FunctionComponent } from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import ContactItem from "./ContactItem";
import { IProfile } from "../types";
import { accentColor, fontPrimaryColor, primaryColor, white } from "../colors";

const styles = StyleSheet.create({
  verticalBanner: {
    backgroundColor: accentColor,
    marginTop: -35,
    marginBottom: 35,
    width: 190,
    fontSize: 12,
    color: fontPrimaryColor,
  },
  bannerHighlight: {
    backgroundColor: primaryColor,
    height: 20,
    marginHorizontal: 20,
  },
  contactDetails: {
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
  },
  bannerContent: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    lineHeight: 1.5,
  },
  sectionHeader: { marginBottom: 20 },
});

interface IProps {
  address: string;
  city: string;
  phone: string;
  email: string;
  summary: string;
  profiles: Array<IProfile>;
}

const VerticalBanner: FunctionComponent<IProps> = ({
  address,
  city,
  phone,
  email,
  summary,
  profiles,
}: IProps) => {
  return (
    <View style={styles.verticalBanner}>
      <View style={styles.bannerHighlight}></View>
      <View style={styles.contactDetails}>
        <ContactItem
          icon={`${process.env.PUBLIC_URL}/assets/images/maps-icon.png`}
          text={`${address}, ${city}`}
        />
        {/* <ContactItem
          icon={`${process.env.PUBLIC_URL}/assets/images/phone-icon.png`}
          text={phone}
        /> */}
        <ContactItem
          icon={`${process.env.PUBLIC_URL}/assets/images/email_icon.png`}
          text={email}
          link={`mailto:${email}`}
        />
        {profiles.map((profile) => (
          <ContactItem
            key={profile.url}
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
        <Text>{summary}</Text>
      </View>
    </View>
  );
};

export default VerticalBanner;
