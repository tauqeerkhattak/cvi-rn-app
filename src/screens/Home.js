import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { range } from "lodash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HorizontalSliders from "../components/HorizontalSliders";
import i18n from "../utils/i18n";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const headerRight = () => (
      <Icon
        as={<Ionicons name="notifications-outline" />}
        size={"lg"}
        color="black"
        style={{ marginHorizontal: 20, marginVertical: 10 }}
      />
    );
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleAlign: "center",
      headerLeft: () => null,
      headerTitle: "",
      headerRight: headerRight,
    });
  }, [navigation]);

  const gotoScan = () => {
    navigation.navigate("Scan");
  };

  const gotoNearby = () => {
    navigation.navigate("Stamps");
  };

  const entries = useMemo(
    () =>
      range(1, 6, 1).map(() => {
        return {
          title: i18n.t("HOME.HOME_SLIDER_TITLE"),
          text: i18n.t("HOME.HOME_SLIDER_TEXT"),
        };
      }),
    [i18n.locale]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef(null);

  const { height, width } = useWindowDimensions();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        extraHeight={350}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text>{i18n.t("HOME.WELCOME_TEXT", { username: "Jack" })}</Text>
        </View>
        <View style={styles.sliderView}>
          <Carousel
            ref={carousel}
            data={entries}
            renderItem={renderItem}
            sliderWidth={width - 40}
            itemWidth={width - 40}
            hasParallaxImages={true}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveIndex(index)}
          />

          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeIndex}
            containerStyle={styles.paginationContainer}
            dotColor={"rgba(255, 125, 0, 0.92)"}
            dotStyle={styles.paginationDot}
            inactiveDotColor={"#000"}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={carousel}
            tappableDots={!!carousel?.current}
          />
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10, padding: 10 }}>
          <TouchableOpacity style={styles.flexCenter} onPress={gotoScan}>
            <Icon
              as={<Ionicons name="scan-circle-outline" />}
              size={10}
              color="black"
            />
            <Text style={styles.mt5}>
              {i18n.t("HOME.SCAN_ICON_TEXT")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexCenter} onPress={gotoNearby}>
            <Icon as={<Ionicons name="location" />} size={10} color="black" />
            <Text style={styles.mt5}>
              {i18n.t("HOME.NEARBY_ICON_TEXT")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexCenter} onPress={gotoNearby}>
            <Icon as={<Ionicons name="search" />} size={10} color="black" />
            <Text style={styles.mt5}>
              {i18n.t("HOME.SEARCH_ICON_TEXT")}
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.firstIconRow}>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="restaurant" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.FOOD_ICON_TEXT")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="shirt-outline" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.FASHION_ICON_TEXT")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="rose-outline" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.BEAUTY_ICON_TEXT")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="tv-outline" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>
                {i18n.t("HOME.ELECTRONICS_ICON_TEXT")}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", marginVertical: 10, padding: 10 }}
          >
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="restaurant" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.FOOD_ICON_TEXT")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="shirt-outline" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.FASHION_ICON_TEXT")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="rose-outline" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.BEAUTY_ICON_TEXT")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexCenter}>
              <Icon
                as={<Ionicons name="ios-add-sharp" />}
                size={6}
                color="black"
              />
              <Text style={styles.mt5}>{i18n.t("HOME.MORE_ICON_TEXT")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <HorizontalSliders title={i18n.t("HOME.NEAR_YOU")} count={6} maxCount={6} />
          <HorizontalSliders
            point
            title={i18n.t("HOME.TOP_STAMPS")}
            count={6}
            maxCount={3}
          />
          <HorizontalSliders
            point
            title={i18n.t("HOME.TOP_VOUCHERS")}
            count={6}
            maxCount={3}
          />
          <HorizontalSliders
            title={i18n.t("HOME.RECOMMANDED_FOR_YOU")}
            count={10}
            maxCount={6}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  itemView: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    padding: 50,
  },
  itemText: {
    fontSize: 30,
  },
  sliderView: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    marginTop: 15,
    overflow: "visible",
  },
  sliderContentContainer: {
    paddingVertical: 10,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mt5: {
    marginTop: 5,
  },
  firstIconRow: { flexDirection: "row", marginVertical: 10, padding: 10 },
});

export default HomeScreen;
