import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, ColorScheme } from '@/hooks/useTheme';

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const styles =createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Hi, welcome to my app.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      backgroundColor: colors.bg,
    },
    content: {
      fontSize: 22,
    },
  });
  return styles;
}