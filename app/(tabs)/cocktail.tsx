import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Drink } from "../../types/drinks";
import BackButton from "../../components/buttons/backButton";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function Page() {
  const cocktail = useLocalSearchParams() as Drink;

  const ingredientList = getIngredients(cocktail);
  return (
    <View
      style={{
        backgroundColor: "#232428",
        height: "100%",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          height: 50,
        }}
      >
        <BackButton />
        <Text
          style={{
            color: "#ffd28d",
            fontSize: 20,
          }}
        >
          {cocktail.strDrink}
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 50, gap: 20 }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: cocktail.strDrinkThumb,
          }}
        />
        <Text
          style={{
            color: "#ffd28d",
            fontSize: 14,
          }}
        >
          {cocktail.strInstructions}
        </Text>
        <View>
          {ingredientList.map((ingredient, key) => (
            <Text key={key} style={{ color: "#ffd28d" }}>
              {ingredient.ingredientName}: {ingredient.ingredientAmount}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

function getIngredients(cocktail: Drink) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const ingredientAmount = cocktail[`strMeasure${i}`];
    if (ingredient && ingredientAmount) {
      ingredients.push({
        ingredientName: ingredient,
        ingredientAmount: ingredientAmount,
      });
    }
  }
  console.log(ingredients);
  return ingredients;
}
