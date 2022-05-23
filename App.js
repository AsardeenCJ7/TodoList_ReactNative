import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
     {/*Today Task's*/}
     <View style={styles.taskWrapper}>
       <Text style={styles.sectionTitles}>Today's Tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go!*/}
              <Task text={'Learning React Native'}/>
              <Task text={'Making You Tube Videos'}/>
              <Task text={'Ready for Lab Test'}/>
              <Task text={'Watching a Movie'}/>
              <Task text={'Make a To DO List'}/>
          </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },

  sectionTitles:{
     fontSize:24,
     paddingBottom:20
  },

  

});
