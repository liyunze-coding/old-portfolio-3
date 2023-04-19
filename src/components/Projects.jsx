import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./projectComponents/projectSection.css";

import slides from "./ProjectDetails.jsx";

export default () => {
	return (
		<div
			id="projects"
			className="w-full min-h-screen h-fit relative flex justify-center items-center bg-gray-900 pt-12 z-10"
		>
			<Swiper
				modules={[Navigation, Pagination, A11y, EffectFade]}
				loop={true}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				className="w-full lg:w-5/6 h-5/6 relative flex items-center justify-center"
			>
				{slides.map((slide) => {
					return (
						<SwiperSlide
							key={slide.name}
							className="w-full flex items-center justify-center"
						>
							<div className="w-full h-full flex flex-col justify-center items-center pb-12 px-5">
								<div className="text-center font-bold text-2xl mb-5">
									{slide.name}
								</div>
								<div className="flex items-center justify-center">
									<img
										className="w-3/4 md:w-1/2 mb-5 rounded-lg"
										src={slide.image.src}
										alt={slide.image.alt}
									/>
								</div>
								<div className="text-center w-4/5 lg:w-1/2 mb-5">
									{slide.description}
								</div>

								<div className="mb-1">
									{Object.keys(slide.links).map(
										(link) => {
											return (
												<a
													href={
														slide
															.links[
															link
														]
													}
													target="_blank"
													rel="noreferrer"
													key={link}
													className="bg-blue-600 text-white hover:bg-gray-200 hover:text-blue-600 mr-2 rounded-lg px-2 py-1 cursor-pointer z-10"
												>
													{link}
												</a>
											);
										}
									)}
								</div>

								<div className="flex justify-center items-center flex-wrap">
									{slide.tags.map((tag) => {
										return (
											<div
												key={tag}
												className="bg-gray-600 text-white hover:bg-gray-200 hover:text-gray-600 mr-2 rounded-lg mt-1 px-2 py-1 cursor-default"
											>
												{tag}
											</div>
										);
									})}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
