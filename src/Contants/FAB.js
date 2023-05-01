import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import colors from "./colors";

const FAB = (props) => {
	return (
		<Pressable style={styles.container}
			onPress={props.onPress}>
			<Text style={styles.title}>{props.title}</Text>
		</Pressable>
	);
};

export default FAB;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
        width:"30%",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: colors.BACKGROUND_COLOR,
		paddingVertical: 10,
	},
	title: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
	},
});
