import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Name,
  Description,
  Stats,
  Star,
  StartCount,
  Refresh,
  RefreshText
} from "./styles";

export default function Repository({ data, onRefresh }) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Star>
          <Icon name="star" size={16} color="#333" />
          <StartCount>{data.stars}</StartCount>
        </Star>
        <Star>
          <Icon name="code-fork" size={16} color="#333" />
          <StartCount>{data.forks}</StartCount>
        </Star>
      </Stats>
      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#0d47a1" size={16} />
        <RefreshText>Atualizar</RefreshText>
      </Refresh>
    </Container>
  );
}
