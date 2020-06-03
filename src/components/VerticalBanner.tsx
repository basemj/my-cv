import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import ContactItem from "./ContactItem";

const styles = StyleSheet.create({
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
  sectionHeader: { marginBottom: 20 },
});

interface IProfile {
  url: string,
  logo: string,
  display: string,
}

interface IProps {
  address: string,
  city: string,
  phone: string,
  email: string,
  summary: string,
  profiles: Array<IProfile>,
}

const VerticalBanner = ({ address, city, phone, email, summary, profiles }: IProps) => {
  return (
    <View style={styles.verticalBanner}>
      <View style={styles.bannerHighlight}></View>
      <View style={styles.contactDetails}>
        <ContactItem
          icon={`${process.env.PUBLIC_URL}/assets/images/maps-icon.png`}
          text={`${address}, ${city}`}
        />
        <ContactItem
          icon={`${process.env.PUBLIC_URL}/assets/images/phone-icon.png`}
          text={phone}
        />
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
