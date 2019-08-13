import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import Repositorio from "../../components/Repository";

import { Container, Title, Form, Input, Submit, List } from "./styles";

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar Repositório..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: "API do GitHub",
            start: 1231,
            forks: 1231313,
            description: "React Native + RealmDB + API do GitHub"
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Repositorio data={item} />}
      />
    </Container>
  );
}
