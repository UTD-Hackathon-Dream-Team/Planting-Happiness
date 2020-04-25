import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const List = () =>{
 
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }} />
              </Left>
              <Body>
                <Text>Plant Trees!</Text>
                <Text note numberOfLines={1}>You can name your very own tree</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>5,000</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/jpeg;base64,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' }} />
              </Left>
              <Body>
                <Text>A Generous Donation!</Text>
                <Text note numberOfLines={1}>The biggest gift is supporting others</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>10,000</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/9df78eab33525d08d6e5fb8d27136e95/r/o/rogue-dumbbells_2.jpg' }} />
              </Left>
              <Body>
                <Text>Free Workout classes!</Text>
                <Text note numberOfLines={1}>2 month subscription to the class of your choice!</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>20,000</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1569858/910/607/m1/fpnw/wm0/1-.jpg?1471572641&s=55bf485b3d6d6ae028ad4a3954e62d1b' }} />
              </Left>
              <Body>
                <Text>20% Discount</Text>
                <Text note numberOfLines={1}>ABC Restaurant (I know!)</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>100,000</Text>
                </Button>
              </Right>
            </ListItem>




          </List>
        </Content>
      </Container>
    );
  };

  export default List;