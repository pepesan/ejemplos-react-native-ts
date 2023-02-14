/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme, View} from "react-native";

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Views from './components/basic/Views';
import Texts from './components/basic/Texts';
import Images from './components/basic/Images';
import TextInputs from './components/basic/TextInputs';
import ScrollViews from './components/basic/ScrollViews';
import StyleSheets from './components/basic/StyleSheets';
import Botones from './components/ui/Botones';
import Switches from './components/ui/Switches';
import FlatLists from './components/lists/FlatLists';
import SectionLists from './components/lists/SectionLists';
import Flexbox01Column from './components/flexbox/Flexbox01Column';
import Flexbox02Row from "./components/flexbox/Flexbox02Row";
import Flexbox03 from "./components/flexbox/Flexbox03";
import ApiClient from "./components/httprequest/ApiClient";
import MyApiClient from "./components/httprequest/MyApiClient";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    /*
    <SafeAreaView>
      <ScrollView>
        <Views></Views>
        <Texts></Texts>
        <Images></Images>
        <TextInputs></TextInputs>
        <StyleSheets></StyleSheets>
        <View>
          <Botones></Botones>
          <Switches></Switches>
        </View>
      </ScrollView>
    </SafeAreaView>

     */
    //<ApiClient></ApiClient>
    <MyApiClient></MyApiClient>
    //<Flexbox03></Flexbox03>
  );
}

export default App;
