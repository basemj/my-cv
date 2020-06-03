import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  profileBanner: {
    flexDirection: "row",
    paddingBottom: 25,
    marginBottom: 25,
    borderBottom: "2 solid #aaaaaa",
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
});

interface IProps {
  name: string,
  label: string,
  picture: string,
}

const ProfileBanner = ({name, label, picture}: IProps) => {
  return (
    <View
    style={styles.profileBanner}
  >
    <View style={{ flex: 2, textAlign: "right" }}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.author}>{label}</Text>
    </View>
    <View style={styles.profilePhotoWrap}>
      <Image
        src={picture}
        style={styles.profilePhoto}
      />
    </View>
  </View>
  );
}

export default ProfileBanner;
