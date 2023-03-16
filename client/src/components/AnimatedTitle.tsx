import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

const InteractiveText: React.FC = () => {
    const [isClicked, setClicked] = React.useState(false);
    const textRef = React.useRef<THREE.Object3D>(null);

    const { scale } = useSpring({
        scale: isClicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
    });

    useFrame(() => {
        if (textRef.current) {
            textRef.current.rotation.y += 0.01;
        }
    });

    const handleClick = () => {
        setClicked(!isClicked);
    };

    return (
        <a.group onClick={handleClick}>
            <Text
                ref={textRef}
                color="black"
                fontSize={.5}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                position={[-4, 0, 0]}
                depthOffset={2}
                anchorX="center"
                anchorY="middle"
            >
                Book your flight
            </Text>
        </a.group>
    );
};

const AnimatedTitle: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas
                style={{ width: '100%', height: '100%' }}
                orthographic
                camera={{ position: [0, 0, 5], zoom: 100 }}
            >
                <color attach="background" args={['white']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2.5, 8, 5]} intensity={1} />
                <InteractiveText />
            </Canvas>
        </div>
    );
};

export default AnimatedTitle;

