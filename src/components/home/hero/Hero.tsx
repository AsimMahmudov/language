"use client";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Image from "next/image";
import img from "@/assets/images/2971712_1000.jpg";

const Hero = () => {
	const { t } = useLanguageStore();
	return (
		<div className="hero">
			<div className="container">
				<div className="block">
					<div className="image">
						<Image
							style={{ width: "100%", height: "100%" }}
							src={img}
							alt="img"
						/>
					</div>
					<div className="text">
						<h1>{t("Hero.title")}</h1>
						<p>{t("Hero.desc")} </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
