import { StyleSheet } from 'react-native';

import { WelcomeScreen } from '@/components/screens';

export default function HomeScreen() {
  return (
      <WelcomeScreen isOnline={true} setCurrentScreen={function (screen: string): void {
      throw new Error('Function not implemented.');
    } } />
     );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
