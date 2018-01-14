import React from 'react'

const Lightbox = props => (
  <section className="LB-component">
    <h2 className="LB-title">{props.title}</h2>
    {props.images.map((obj, index) => [
      <div key="image" className="LB-wrapper">
        <a href={'#LB_target_' + index} className="escape">
          <img id={'LB_' + index} src={obj.img} alt={obj.caption} className="LB-image" />
        </a>
        <small className="LB-caption">{obj.caption}</small>
      </div>,
      <a key="link" href={'#LB_' + index} className="LB-target-wrapper escape" id={'LB_target_' + index}>
        <div>
          <img src={obj.img} alt={obj.caption} className="LB-target-img" />
          <small className="LB-target-caption">{obj.caption}</small>
        </div>
      </a>,
    ])}
  </section>
)
export default Lightbox
