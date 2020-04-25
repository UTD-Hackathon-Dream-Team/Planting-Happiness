import React from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Row,
  Grid,
  Form,
  Item,
  Input,
  Col,
  Label,
  Text,
} from "native-base";
import {ImageBackground} from "react-native";
import CircleSlider from "../components/CircleSlider";

import gradientBkgd from '../assets/mainBkgd.png';

var styles = {
  bkgdImg: {
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignContent: 'space-around',
    width: '100%',
    height: '100%'
  }
}

const ProfileScreen = (props) => {
  // don't use content because it is a ScrollView
  return (
    <Container>
      <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
        <Header>
          <Body>
            <Title>Set Up Account</Title>
          </Body>
        </Header>
        <Form>
          <Item floatingLabel last>
            <Label>Username</Label>
            <Input />
          </Item>
          <Text>Set a daily point goal:</Text>
          <Item>
            <CircleSlider
              startGradient="#B5EAD7"
              endGradient="#C7CEEA"
              value={100}
              onValueChange={(value) => console.log(value)}
            />
          </Item>
        </Form>
        <Button
          onPress={() => props.navigation.navigate("Feed")}
          style={{ alignSelf: "flex-start" }}
        >
          <Text>Continue</Text>
        </Button>
      </ImageBackground>
    </Container>
  );
};

export default ProfileScreen;
