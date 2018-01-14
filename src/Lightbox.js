import React from 'react'

const Fragment = React.Fragment || ({children}) => children

const Lightbox = props => {
  return (
    <section className="LB-component">
      <h2 className="LB-title">{props.title}</h2>
      {props.images.map((obj, index) => (
        <Fragment>
          <div className="LB-wrapper" key={index}>
            <a href={'#LB_target_' + index} className="escape">
              <img id={'LB_' + index} src={obj.img} alt={obj.caption} className="LB-image" />
            </a>
            <small className="LB-caption">{obj.caption}</small>
          </div>
          <a href={'#LB_' + index} className="LB-target-wrapper escape" id={'LB_target_' + index} key={index}>
            <div>
              <img src={obj.img} alt={obj.caption} className="LB-target-img" />
              <small className="LB-target-caption">{obj.caption}</small>
            </div>
          </a>
        </Fragment>
      ))}
    </section>
  )
}
export default Lightbox
