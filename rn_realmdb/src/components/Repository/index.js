import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Name,
  Description,
  Stats,
  Star,
  StartCount
} from "./styles";

export default function Repository({ data }) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Star>
          <Icon name="star" size={16} color="#333" />
          <StartCount>{data.start}</StartCount>
        </Star>
        <Star>
          <Icon name="code-fork" size={16} color="#333" />
          <StartCount>{data.forks}</StartCount>
        </Star>
      </Stats>
    </Container>
  );
}
