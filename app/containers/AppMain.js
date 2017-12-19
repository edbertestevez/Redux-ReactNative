import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Image,Alert, TextInput, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'

//Actions exported from action.js 
import { fetchPeopleFromAPI,clearPeopleList,getSelected,getFormInputs } from '../actions'
import { 
  getName,
  getGender,
  getHeight,
  getMass,
  getHairColor,
  getSkinColor,
  getEyeColor
} from '../actions'

import PopupDialog, {DialogTitle, ContainerStyle, SlideAnimation} from 'react-native-popup-dialog';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let styles

var radio_props = [
  {label: 'Male', value: "Male" },
  {label: 'Female', value: "Female" }
];

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles


  // const slideAnimation = new SlideAnimation({
  //   slideFrom: 'bottom',
  // });

  //props state inside people reducer
  const { people, isFetching, page, selected } = props.people;
  const { addForm } = props.forms;
  
  pageNum = page;
  peopleList = people;


  console.log("People: ", props.people)

  return (
    <View style={container}>
    <View style={styles.header}>
        <Text style={styles.head_text}>Redux Practice</Text>
        <TouchableOpacity 
          style={{flexDirection: 'row', position: 'absolute', right: 10}}
          onPress={() => {this.popupDialog.show();}}>
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
                onPress={() => {
                    props.getSelected(person);
                    {this.recordDialog.show();}
                  }
                }>
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
        isFetching && <Text style={{textAlign:'center', fontSize:20, marginTop: 30}}>Retrieving data</Text>
      }
      </ScrollView>

        {/*POPUP DIALOGS*/}
          <PopupDialog
              dialogStyle={{backgroundColor:'rgba(255,255,255,0.9)', top: -20, height:'auto'}}
              containerStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}
              position={"absolute"}
              width={0.9}
              left={20}
              style={styles.popup}
              dialogTitle={<DialogTitle title="New Person Record" />}
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
              
              <TextInput style={styles.phoneInput} placeholder='Name' onChangeText={(name)=>props.getName(name)} underlineColorAndroid='transparent'/>
              <Text style={{marginLeft: '7.5%', marginTop: 10, fontSize: 16}}>Gender</Text>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                style={{marginLeft: '7.5%', marginTop: 8}}
                formHorizontal={true}
                labelHorizontal={true}
                animation={true}
                //onPress={(value) => {this.setState({value:value})}}
              />
              <TextInput style={styles.phoneInput} placeholder='Height' onChangeText={(height)=>props.getHeight(height)} underlineColorAndroid='transparent'/>
              <TextInput style={styles.phoneInput} placeholder='Mass' onChangeText={(mass)=>props.getMass(mass)} underlineColorAndroid='transparent'/>
              <TextInput style={styles.phoneInput} placeholder='Hair Color' onChangeText={(hair)=>props.getHairColor(hair)} underlineColorAndroid='transparent'/>
              <TextInput style={styles.phoneInput} placeholder='Skin Color' onChangeText={(skin)=>props.getSkinColor(skin)} underlineColorAndroid='transparent'/>
              <TextInput style={styles.phoneInput} placeholder='Eye Color' onChangeText={(eye)=>props.getEyeColor(eye)} underlineColorAndroid='transparent'/>

              <TouchableOpacity 
                style={styles.btnSend} 
                onPress={() => validateInput(addForm,props)
                  //() => props.getFormInputs(addForm.gender)
                }>
                <View>
                  <Text style={styles.buttonText}>Save Record</Text>
                </View>
              </TouchableOpacity>
          </PopupDialog>

          <PopupDialog
              dialogStyle={{backgroundColor:'rgba(255,255,255,0.9)', top: -80}}
              containerStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}
              position={"absolute"}
              width={0.9}
              height={"auto"}
              left={20}
              style={styles.popup}
              dialogTitle={<DialogTitle title="Person Record" />}
              ref={(recordDialog) => { this.recordDialog = recordDialog; }}>

              <Text style={styles.popRecordText}>Name: {selected.name}</Text>
              <Text style={styles.popRecordText}>Gender: {selected.gender}</Text>
              <Text style={styles.popRecordText}>Height: {selected.height}</Text>
              <Text style={styles.popRecordText}>Mass: {selected.name}</Text>
              <Text style={styles.popRecordText}>Hair Color: {selected.hair_color}</Text>
              <Text style={styles.popRecordText}>Skin Color: {selected.skin_color}</Text>
              <Text style={styles.popRecordText}>Eye Color: {selected.eye_color}</Text>
              <TouchableOpacity 
                style={styles.btnSend}
                onPress={()=>{this.recordDialog.dismiss()}}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
          </PopupDialog>
    
    </View>


  )
}

function validateInput(addForm, props){
  console.log(addForm);
  if(addForm.name!="" && addForm.gender!="" && addForm.height!="" && addForm.mass!="" && addForm.hair_color!="" && addForm.skin_color!="" && addForm.eye_color!=""){
    ()=>props.getFormInputs(addForm)
    ToastAndroid.show("Chakto toy ah", ToastAndroid.SHORT);

  }else{
    ToastAndroid.show('Please fill up all fields', ToastAndroid.SHORT);
  }
}

function mapStateToProps (state) {
  return {
    //states
    people: state.people,
    forms: state.forms
  }
}

function mapDispatchToProps (dispatch) {
  return {
    //Define ACTIONS and Below relationship
    getPeople: () => dispatch(fetchPeopleFromAPI(pageNum, peopleList)),
    clearList: () => dispatch(clearPeopleList()),
    getSelected: (select) => dispatch(getSelected(select)),

    //forms
    getFormInputs:(inputs) => dispatch(getFormInputs(inputs)),
    getName:(val) => dispatch(getName(val)),
    getGender:(val) => dispatch(getGender(val)),
    getHeight:(val) => dispatch(getHeight(val)),
    getMass:(val) => dispatch(getMass(val)),
    getHairColor:(val) => dispatch(getHairColor(val)),
    getSkinColor:(val) => dispatch(getSkinColor(val)),
    getEyeColor:(val) => dispatch(getEyeColor(val)),


  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


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
  phoneInput:{
    marginLeft: '7.5%',
    width: '85%',
    height: 50,
    top: 10, 
    borderColor: '#cacaca', 
    borderWidth: 2,
    zIndex: 5,
    backgroundColor: '#fff',
    opacity: 0.9,
    fontSize: 16,
    padding: 10,
    marginBottom: 5
  },
  btnSend:{
    marginLeft: '25%',
    width: '50%',
    top: 25,
    backgroundColor: '#CC0000', 
    padding: 20, 
    zIndex: 200, 
    borderRadius: 5,
    opacity: 0.9,
    marginBottom: 40
  },
  buttonText:{
    textAlign:'center', 
    color:'#fff',
    fontSize: 16
  },
  popRecordText:{
    fontSize: 15,
    margin: 10,
  }
})