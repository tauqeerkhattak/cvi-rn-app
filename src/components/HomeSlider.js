import React, {Component, useMemo, useRef, useState} from 'react';
import {range} from 'lodash';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import i18n from '../utils/i18n';

const HomeSlider = () => {
  const entries = useMemo(
    () =>
      range(1, 6, 1).map(() => {
        return {
          title: i18n.t('HOME.HOME_SLIDER_TITLE'),
          text: i18n.t('HOME.HOME_SLIDER_TEXT'),
        };
      }),
    [i18n.locale],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef(null);

  const {height, width} = useWindowDimensions();

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };
  return (
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
        onSnapToItem={index => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotColor={'rgba(255, 125, 0, 0.92)'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'#000'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={carousel}
        tappableDots={!!carousel?.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    padding: 50,
  },
  itemText: {
    fontSize: 30,
  },
  sliderView: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    marginTop: 15,
    overflow: 'visible',
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
});

export default HomeSlider;
