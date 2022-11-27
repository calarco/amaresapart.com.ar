import { useRef, useEffect } from "react";
import { createNoise3D } from "simplex-noise";

const lerp = (x: number, x1: number, x2: number, y1: number, y2: number) =>
    y1 + (x - x1) * ((y2 - y1) / (x2 - x1));

const getPixel = (noise, palette) => {
    let rgb = [];

    for (let i = 0; i < 3; i++) {
        rgb.push(lerp(Math.abs(noise), 0, 1, palette[0][i], palette[1][i]));
    }
    return rgb;
};

const palette = [
    [48, 78, 93],
    [8, 26, 30],
];

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const simplex = createNoise3D();
    const tRef = useRef(0);
    const rafRef = useRef();

    useEffect(() => {
        const frame = () => {
            const ctx = canvasRef.current?.getContext("2d");
            const imageData = ctx?.createImageData(100, 100);

            for (let x = 0; x < 100; x++) {
                for (let y = 0; y < 100; y++) {
                    const index = (x + y * 100) * 4;
                    const noise = simplex(x / 100, y / 100, tRef.current / 450);
                    const pixel = getPixel(noise, palette);
                    imageData.data[index] = pixel[0];
                    imageData.data[index + 1] = pixel[1];
                    imageData.data[index + 2] = pixel[2];
                    imageData.data[index + 3] = 255;
                }
            }

            ctx.putImageData(imageData, 0, 0);
            tRef.current++;
            rafRef.current = requestAnimationFrame(frame);
        };

        rafRef.current = requestAnimationFrame(frame);

        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width="100"
            height="100"
            className="absolute w-screen h-screen"
        />
    );
}
