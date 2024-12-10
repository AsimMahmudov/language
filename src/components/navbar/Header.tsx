"use client";
 
import { useLanguageStore } from "@/stores/useLanguageStore";
 
const Header = () => {
	const { language, setLanguage } = useLanguageStore();
 
	const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = e.target.value as "ru" | "en";
		setLanguage(selectedLanguage);
	};
	 
	return (
		<div className="header">
			<div className="container">
				<div className="content">
					<div className="box">
						<select onChange={handleChangeLanguage} value={language}>
							<option value="ru">ru</option>
							<option value="ky">en</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
