import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { PropsRef } from 'react-native-gesture-handler/lib/typescript/web/interfaces';
import { RootStackParamList } from './LoginScreen';

export default function HomeScreen({ route}) {
    const { username } = route.params.name;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.greeting}>Hello, {username}</Text>
                <Text style={styles.subTitle}>What do you want to eat?</Text>
                
                <TextInput style={styles.searchInput} placeholder="Search" />
                
                <View style={styles.categories}>
                    <Category icon="pizza" label="Lunch" />
                    <Category icon="food" label="Dinner" />
                    <Category icon="croissant" label="Breakfast" />
                    <Category icon="ice-cream" label="Dessert" />
                </View>

                <View style={styles.specialSection}>
                    <Text style={styles.specialTitle}>Today's Special</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.items}>
                    <FoodCard
                        title="Vegan Chickpea Curry"
                        price="150"
                        description="Loaded with protein"
                        remaining={5}
                    />
                    <FoodCard
                        title="Carrot Chicken"
                        price="250"
                        description="Carrots lend an extra flavor"
                        remaining={2}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const Category = ({ icon, label }) => (
    <View style={styles.category}>
        <Icon name={icon} size={32} color="#555" />
        <Text style={styles.categoryLabel}>{label}</Text>
    </View>
);

const FoodCard = ({ title, price, description, remaining }) => (
    <View style={styles.foodCard}>
        <Text style={styles.foodTitle}>{title}</Text>
        <Text style={styles.foodDescription}>{description}</Text>
        <Text style={styles.foodPrice}>Rs {price}</Text>
        <Text style={styles.foodRemaining}>{remaining} left</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9' },
    scrollContainer: { padding: 16 },
    greeting: { fontSize: 24, fontWeight: 'bold' },
    subTitle: { fontSize: 18, marginVertical: 8 },
    searchInput: {
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    categories: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
    category: { alignItems: 'center' },
    categoryLabel: { marginTop: 4, fontSize: 14, color: '#555' },
    specialSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    specialTitle: { fontSize: 18, fontWeight: 'bold' },
    seeAll: { color: '#007bff' },
    items: { flexDirection: 'row', justifyContent: 'space-between' },
    foodCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    foodTitle: { fontSize: 16, fontWeight: 'bold' },
    foodDescription: { fontSize: 12, color: '#666', marginVertical: 4 },
    foodPrice: { fontSize: 14, fontWeight: 'bold', color: '#007bff' },
    foodRemaining: { fontSize: 12, color: '#ff0000' },
});
