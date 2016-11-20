import React from 'react';

export const Lightbox = (props) => {
	let thumbnails = props.images.map((obj, index) => {
		return (
			<div className="LB-wrapper" key={index}>
				<a href={"#LB_target_" + index} className="escape">
					<img id={"LB_" + index} src={obj.img} alt={obj.caption} className="LB-image" />
				</a>
				<small className="LB-caption">{obj.caption}</small>
			</div>
		)
	});
	let fullRenders = props.images.map((obj, index) => {
		return (
			<a href={"#LB_" + index} className="LB-target-wrapper escape" id={"LB_target_" + index} key={index}>
				<div>
					<img src={obj.img} alt={obj.caption} className="LB-target-img" />
					<small className="LB-target-caption">{obj.caption}</small>
				</div>
			</a>
		)
	});
	return (
		<section className="LB-component">
			<h2 className="LB-title">{props.title}</h2>
			{thumbnails}
			{fullRenders}
		</section>
	)
};
