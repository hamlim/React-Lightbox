import React from 'react'
import styled from 'react-emotion'

const ImageLink = styled('a')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Image = styled('img')`
  align-self: flex-start;
  max-width: 55vw;
  height: auto;
  margin: 0 auto;
  border: 0;
`

const WrapperLink = styled('a')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: #a8a8a8;
  }

  &:not(:target) {
    display: none;
  }
`

const Caption = styled('small')`
  text-align: center;
  margin: 0 0 1.5rem;
  display: block;
`

const ImageContainer = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  max-width: 90vw;
  max-height: 90vh;
  z-index: 2;
`

const TargetImage = styled('img')`
  align-self: flex-start;
  max-width: 90vw;
  max-height: 90vh;
`

const Lightbox = props => (
  <section>
    <h2>{props.title}</h2>
    {props.images.map((obj, index) => [
      <div key="image">
        <ImageLink href={'#LB_target_' + index}>
          <Image
            id={'LB_' + index}
            src={obj.img}
            alt={obj.caption}
          />
        </ImageLink>
        <Caption>{obj.caption}</Caption>
      </div>,
      <WrapperLink
        key="link"
        href={'#LB_' + index}
        id={'LB_target_' + index}
      >
        <ImageContainer>
          <TargetImage src={obj.img} alt={obj.caption} />
          <Caption>{obj.caption}</Caption>
        </ImageContainer>
      </WrapperLink>,
    ])}
  </section>
)
export default Lightbox
