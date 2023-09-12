import styled from 'styled-components';

const shouldForwardProp = (prop) => !['imageUrl'].includes(prop);

// FIXME: fix image size
export const BackgroundCardImg = styled.div`
  height: 25vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.imageUrl});
`;

BackgroundCardImg.shouldForwardProp = shouldForwardProp;
