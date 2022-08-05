import { range } from "lodash";
import { Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import i18n from "../utils/i18n";

const sampleItemCard = {
  title: "STARBUCKS",
  image: "",
  description: "coffee voucher",
  price: "$2.5",
  discountedPrice: "$4.7",
  travelTime: "10m",
};

const sampleItemPointCard = {
  title: "STARBUCKS",
  image: "",
  description: "point card",
  travelTime: "10m",
};

const HorizontalSliders = ({ title, count, maxCount, point }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.moreText}>{count > maxCount ? i18n.t("HOME.MORE_ICON_TEXT") : ""}</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {range(1, count + 1, 1).map((num, index) => {
          if (num > maxCount) {
            return null;
          }

          const cardObj = point ? sampleItemPointCard : sampleItemCard;
          return (
            <View
              key={`${title}_${num}_${index}`}
              style={[styles.itemSection, { width: width / 3 }]}
            >
              <View style={styles.itemCard}>
                <View style={styles.imageView}>
                  <View style={styles.imageIconView}>
                    <Icon
                      as={<Ionicons name="heart-outline" />}
                      color="#666"
                      size={5}
                    />
                  </View>
                </View>

                <View style={styles.cardBottom}>
                  <View style={styles.textRow}>
                    <Text style={styles.cardTitle}>{cardObj.title}</Text>
                  </View>

                  <View style={styles.textRow}>
                    <Text style={styles.cardDescription}>
                      {cardObj.description}
                    </Text>
                  </View>

                  {point ? (
                    <View style={styles.textRow}>
                      <Text style={styles.cardDescription}></Text>
                    </View>
                  ) : (
                    <View style={styles.cardPriceRow}>
                      <Text style={styles.priceText}>
                        {cardObj.discountedPrice}
                      </Text>
                      <Text style={styles.totalPrice}>{cardObj.price}</Text>
                    </View>
                  )}

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Icon
                      as={<Ionicons name="location" />}
                      color="#666"
                      size={3}
                      mr={1}
                    />
                    <Text style={styles.travelTimeText}>
                      {cardObj.travelTime}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titleRow: {
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  moreText: {
    fontSize: 12,
    color: "#00D",
  },
  imageView: {
    width: "100%",
    height: 80,
    borderRadius: 5,
    backgroundColor: "#c5c5c5",
  },
  imageIconView: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 11,
  },
  itemSection: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  itemCard: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC'
  },
  cardBottom: {
    padding: 5,
  },
  textRow: {
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
  },
  cardDescription: {
    fontSize: 12,
  },
  cardPriceRow: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  priceText: {
    fontSize: 12,
  },
  totalPrice: {
    fontSize: 8,
    opacity: 0.5,
    textDecorationLine: "line-through",
    marginTop: 3,
    marginLeft: 3,
  },
  travelTimeText: {
    fontSize: 10,
  },
});

export default HorizontalSliders;
