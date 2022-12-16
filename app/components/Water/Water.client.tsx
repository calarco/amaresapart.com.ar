import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

import { vertexShader, fragmentShader } from "./shaders";

const dpr = 0.2;

function Surface() {
    const matRef = useRef<THREE.ShaderMaterial>(null!);

    useEffect(() => {
        function resize() {
            if (matRef.current) {
                matRef.current.uniforms.iResolution = {
                    value: new THREE.Vector2(
                        window.innerWidth * dpr,
                        window.innerHeight * dpr
                    ),
                };
            }
        }
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    useFrame(({ clock }) => {
        if (matRef.current) {
            matRef.current.uniforms.iGlobalTime = {
                value: clock.getElapsedTime(),
            };
        }
    });

    return (
        <mesh>
            <primitive object={new THREE.AxesHelper(10)} />
            <planeGeometry
                args={[window.innerWidth * dpr, window.innerHeight * dpr]}
            />
            <shaderMaterial
                ref={matRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    iGlobalTime: {
                        value: 0.1,
                    },
                    iResolution: {
                        value: new THREE.Vector2(
                            window.innerWidth * dpr,
                            window.innerHeight * dpr
                        ),
                    },
                }}
            />
        </mesh>
    );
}

export default function Water() {
    return (
        <>
            <Canvas
                dpr={dpr}
                camera={{
                    position: [20, 10, 20],
                    fov: 30,
                    near: 1,
                    far: 10000,
                }}
                className="blur-md"
            >
                <Surface />
            </Canvas>
            <div className="absolute inset-0 shadow-[0_0_10vw_rgba(0,0,0,0.6)_inset]" />
        </>
    );
}
