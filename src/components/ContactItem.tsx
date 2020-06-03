import React from "react";
import { Text, StyleSheet, View, Image, Link } from "@react-pdf/renderer";
import { fontPrimaryColor } from "../colors";

const styles = StyleSheet.create({
  contactItem: { flexDirection: "row", marginBottom: 15 },
  contactIcon: { height: 12, marginRight: 5 },
  contactText: { color: fontPrimaryColor, fontSize: 10 },
});

interface IProps {
  icon: string;
  text: string;
  link?: string;
}

const ContactItem = ({ icon, text, link }: IProps) => {
  return (
    <View style={styles.contactItem}>
      <Image src={icon} style={styles.contactIcon} />
      {link ? (
        <Link src={link} style={styles.contactText}>
          {text}
        </Link>
      ) : (
        <Text style={styles.contactText}>{text}</Text>
      )}
    </View>
  );
};

export default ContactItem;
