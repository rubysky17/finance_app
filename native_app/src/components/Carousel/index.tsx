import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Carousel, Colors, Text } from 'react-native-ui-lib';

import { Ionicons } from '@expo/vector-icons';

interface IPages {
    id: number | string,
    container: React.ReactElement,
    label: string
};

interface IProps {
    showArrow: boolean;
    pages: Array<IPages>;
    containerStyle?: any;
    height: number;
    labelStyle?: any
}

const CarouselContainer = (props: IProps) => {
    const { showArrow = true, pages, containerStyle, height, labelStyle, ...restProps } = props;
    const [currentPage, setCurrentPage] = useState(0);
    const carouselRef = useRef(null);

    const onPageChange = (index) => {
        setCurrentPage(index);
    };

    const goToPreviousPage = () => {
        if (currentPage === 0) return;
        const previousPage = currentPage > 0 && currentPage - 1;

        carouselRef.current?.goToPage(previousPage, true);
    };

    const goToNextPage = () => {
        if (currentPage === pages.length - 1) return;
        const nextPage = currentPage < pages.length - 1 && currentPage + 1;

        carouselRef.current?.goToPage(nextPage, true);
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                containerStyle={{
                    ...styles.carousel,
                    ...containerStyle,
                    height
                }}
                loop={false}
                pageControlPosition={'under'}
                onChangePage={onPageChange}
                {...restProps}
            >
                {pages?.map((page) => (
                    <View key={page.id}>
                        {page.container}
                    </View>
                ))}
            </Carousel>

            {showArrow && <View style={styles.navigation}>
                <TouchableOpacity
                    onPress={goToPreviousPage}
                    style={styles.arrowButton}
                >
                    <Ionicons name="arrow-back" size={16} color={Colors.neutral} />
                </TouchableOpacity>

                <Text
                    style={{
                        ...styles.pageIndicator,
                        ...labelStyle
                    }}
                >
                    {pages[currentPage]?.label || ""}
                </Text>

                <TouchableOpacity
                    onPress={goToNextPage}
                    style={styles.arrowButton}
                >
                    <Ionicons name="arrow-forward" size={16} color={Colors.neutral} />
                </TouchableOpacity>
            </View>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    carousel: {
        height: 200,
        width: '100%',
    },
    text: {
        fontSize: 20,
        color: Colors.dark10,
    },
    pageIndicator: {
        fontSize: 12,
        color: Colors.dark10,
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowButton: {
        marginHorizontal: 15,
    },
});

export default CarouselContainer;
