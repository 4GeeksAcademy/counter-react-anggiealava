import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./seconds_counter";

//create your first component
const Home = () => {
	return (
		<SecondsCounter seconds={0} />
	)

};

export default Home;
