import React, { FunctionComponent } from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { fontSecondaryColor, accentColor } from "../colors";

const styles = StyleSheet.create({
  profileBanner: {
    flexDirection: "row",
    paddingBottom: 25,
    marginBottom: 25,
    borderBottom: `2 solid ${accentColor}`,
  },
  title: {
    fontSize: 40,
    marginBottom: 2,
    textTransform: "uppercase",
    fontFamily: "Roboto-thin",
  },
  author: {
    fontSize: 12,
    color: fontSecondaryColor,
    marginBottom: 10,
  },
  profilePhotoWrap: {
    marginLeft: 25,
    flex: 1,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: accentColor,
  },
});

interface IProps {
  name: string;
  label: string;
  picture: string;
}

const ProfileBanner: FunctionComponent<IProps> = ({ name, label, picture }: IProps) => {
  return (
    <View style={styles.profileBanner}>
      <View style={{ flex: 2, textAlign: "right" }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.author}>{label}</Text>
      </View>
      {picture ? 
        <View style={styles.profilePhotoWrap}>
          <Image src={`${process.env.PUBLIC_URL}/assets/images/${picture}`} style={styles.profilePhoto} />
        </View> : null
      }
    </View>
  );
};

export default ProfileBanner;
