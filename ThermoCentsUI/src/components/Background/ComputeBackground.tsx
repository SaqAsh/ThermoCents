import { useEffect, useRef, type RefObject } from "react";

const useBackground = (): RefObject<HTMLCanvasElement | null> => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Wave animation parameters
		let time = 0;
		const waves = [
			{ amplitude: 30, frequency: 0.01, speed: 0.02, offset: 0 },
			{
				amplitude: 20,
				frequency: 0.015,
				speed: 0.025,
				offset: Math.PI / 3,
			},
			{
				amplitude: 25,
				frequency: 0.008,
				speed: 0.018,
				offset: Math.PI / 2,
			},
		];

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Create gradient
			const gradient = ctx.createLinearGradient(
				0,
				0,
				canvas.width,
				canvas.height
			);
			gradient.addColorStop(0, "rgba(34, 197, 94, 0.1)"); // green-500 with opacity
			gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.05)");
			gradient.addColorStop(1, "rgba(34, 197, 94, 0.02)");

			// Draw waves
			waves.forEach((wave, index) => {
				ctx.beginPath();
				ctx.moveTo(0, canvas.height / 2);

				for (let x = 0; x <= canvas.width; x += 2) {
					const y =
						canvas.height / 2 +
						Math.sin(
							x * wave.frequency + time * wave.speed + wave.offset
						) *
							wave.amplitude +
						Math.sin(
							x * wave.frequency * 2 +
								time * wave.speed * 1.5 +
								wave.offset
						) *
							(wave.amplitude * 0.5);

					ctx.lineTo(x, y);
				}

				ctx.lineTo(canvas.width, canvas.height);
				ctx.lineTo(0, canvas.height);
				ctx.closePath();

				ctx.fillStyle = gradient;
				ctx.globalAlpha = 0.3 - index * 0.1;
				ctx.fill();
			});

			time += 1;
			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return canvasRef;
};
export default useBackground;
