import useBackground from "./ComputeBackground";

const RenderBackground = () => {
	const background = useBackground();
	return <canvas ref={background} />;
};
export default RenderBackground;
