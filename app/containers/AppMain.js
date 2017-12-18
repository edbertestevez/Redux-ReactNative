import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Image,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
//Actions exported from action.js
import { fetchPeopleFromAPI,clearPeopleList } from '../actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles

  //props state inside people reducer
  const { people, isFetching, page } = props.people;
  
  pageNum = page;
  peopleList = people;

  console.log("People: ", props.people)

  return (
    <View style={container}>
    <View style={styles.header}>
        <Text style={styles.head_text}>Redux Practice</Text>
        <TouchableOpacity style={{flexDirection: 'row', position: 'absolute', right: 10}}>
          <Icon name="md-add" style={{marginRight: 8, color: 'white'}} size={24}/>
          <Text style={{color: 'white', fontSize: 16  }}>Add Record</Text>
        </TouchableOpacity>      
    </View>
      <View style={{zIndex: 199, height: 130, width: '100%', position:'absolute',bottom: 0}}>
        <View style={{width:'100%', height: 60, flexDirection: 'row', position: 'absolute', bottom: 60}}>
          <TouchableOpacity style={styles.btnAdd} onPress={() => props.getPeople()}>
            <Text style={buttonText}>Fetch More Data</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnReset} onPress={() => props.clearList()}>
          <Text style={buttonText}>Clear Data</Text>
        </TouchableOpacity>
      </View>
      
      {/*Check if may content*/}
      <ScrollView style={styles.content}>
      {
        people.length ? (
          people.map((person, i) => {
            return (
              <TouchableOpacity 
                key={i} 
                style={styles.listItem}
                
                onLongPress={() => {Alert.alert('Delete Record')}}>
                <View style={{width: 140, height: 140}}>
                  <Image 
                    style={{width: 140, height: 140}}
                    source={require('../user.png')}
                  />
                </View>
                <View>
                  <Text style={{fontSize: 16, fontWeight:'bold'}}>{person.name}</Text>
                  <Text>Gender: {person.gender}</Text>
                  <Text>Height: {person.height}cm</Text>
                  <Text>Mass: {person.mass}</Text>
                  <Text>Hair Color: {person.hair_color}</Text>
                  <Text>Skin Color: {person.skin_color}</Text>
                  <Text>Eye Color: {person.eye_color}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : null
      }
      {/*Click para mag gwa ang loading*/}
      {
        isFetching && <Text>Loading</Text>
      }
      </ScrollView>

    
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  text: {
    textAlign: 'center'
  },
  btnReset: {
    width: '100%',
    height: 60,
    zIndex: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#681927'
  },
  btnNext: {
    width: '50%',
    height: 60,
    zIndex: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#07234f'
  },
  btnAdd: {
    width: '100%',
    height: 60,
    zIndex: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  listItem:{
    backgroundColor: '#fafafa',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    zIndex: 0,
    padding: 15,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 4,
    flexDirection: 'row',
  },
  content:{
    flex: 1,
    zIndex: 0,
    marginBottom: 125,
  },
  header:{
    flex:1,
    flexDirection: 'row',
    maxHeight: 60,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    paddingLeft: 20
  },
    head_text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    //Define ACTIONS and Below relationship
    getPeople: () => dispatch(fetchPeopleFromAPI(pageNum, peopleList)),
    clearList: () => dispatch(clearPeopleList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)