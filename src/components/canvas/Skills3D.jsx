import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Image, Billboard } from '@react-three/drei';

const SkillIcon = ({ index, textureUrl, name, color, subSkills, isPaused, gap, xStart, totalWidth }) => {
    const [hovered, setHover] = useState(false);
    const groupRef = useRef();
    
    // Balanced scale: large enough to read, small enough to not clump
    const baseScale = 1.4; 
    const finalScale = hovered ? baseScale * 1.2 : baseScale;

    // Initialize position
    const [position] = useState(() => {
        const x = xStart + (index * gap);
        return [x, 0, 0];
    });

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        
        // Move left to right
        if (!isPaused && !hovered) {
             groupRef.current.position.x += 1.8 * delta; 
        }

        // Boundary check for infinite scroll
        // Determine right boundary dynamically or roughly
        const rightBoundary = 16; 
        
        if (groupRef.current.position.x > rightBoundary) {
            // Reset to left side
            groupRef.current.position.x -= totalWidth;
        }
    });

    return (
        <group 
            ref={groupRef} 
            position={position} 
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => setHover(false)}
            scale={finalScale}
        >
            <Billboard>
                {/* Glowing Backlight */}
                <mesh position={[0, 0, -0.1]}>
                    <circleGeometry args={[1.75, 32]} />
                    <meshBasicMaterial color={color} transparent opacity={hovered ? 0.6 : 0.25} />
                </mesh>

                {/* The Logo Image */}
                <Image 
                    url={textureUrl}
                    transparent
                    scale={[2.4, 2.4, 1]} 
                    opacity={1}
                    color="#ffffff"
                    position={[0, 0, 0.01]} // Slight forward offset preventing z-fighting
                />
                
                <Text
                    position={[0, -1.8, 0.02]}
                    fontSize={0.45}
                    color={color}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.03}
                    outlineColor="#000000"
                >
                    {name}
                </Text>

                {/* Sub-skills List */}
                {hovered && subSkills && (
                    <group position={[0, -2.3, 0.02]}>
                        {subSkills.map((sub, idx) => (
                            <Text
                                key={idx}
                                position={[0, -idx * 0.3, 0]}
                                fontSize={0.28}
                                color="#ffffff"
                                anchorX="center"
                                anchorY="middle"
                                outlineWidth={0.02}
                                outlineColor="#000000"
                            >
                                {sub}
                            </Text>
                        ))}
                    </group>
                )}
            </Billboard>
        </group>
    );
};

const Skills3D = () => {
    const { viewport } = useThree();
    const isMobile = viewport.width < 10;
    const [paused, setPaused] = useState(false);

    const skills = [
        { 
            name: 'Python', 
            color: '#306998', 
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            subSkills: ['Numpy', 'Pandas', 'Requests']
        },
        { 
            name: 'Linux', 
            color: '#FCC624', 
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            subSkills: ['Bash', 'Kali', 'Cron']
        },
        { 
            name: 'Network', 
            color: '#00f3ff', 
            url: 'https://cdn-icons-png.flaticon.com/512/2620/2620735.png', 
            subSkills: ['TCP/IP', 'DNS', 'Firewalls'] 
        },
        { 
            name: 'React', 
            color: '#61DAFB', 
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            subSkills: ['Hooks', 'Redux', 'Three.js']
        },
        { 
            name: 'Hacking', 
            color: '#00ff41', 
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg',
            subSkills: ['Metasploit', 'Burp', 'Nmap']
        },
        { 
            name: 'Wireshark', 
            color: '#1679A7', 
            url: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg',
            subSkills: ['Packet Analysis', 'Filtering']
        },
        { 
            name: 'Docker', 
            color: '#2496ED', 
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            subSkills: ['Containers', 'Compose']
        },
        { 
            name: 'Git', 
            color: '#F05032', 
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            subSkills: ['GitHub', 'Versioning']
        }
    ];

    // Marquee Configuration
    const gap = isMobile ? 4.0 : 5.5; 
    const count = skills.length;
    const totalWidth = count * gap; 
    const xStart = -totalWidth / 3; 

    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            
            <group 
                onPointerOver={() => setPaused(true)} 
                onPointerOut={() => setPaused(false)}
            > 
                {skills.map((skill, index) => (
                    <SkillIcon 
                        key={index} 
                        index={index}
                        textureUrl={skill.url}
                        name={skill.name} 
                        color={skill.color}
                        subSkills={skill.subSkills}
                        isPaused={paused}
                        gap={gap}
                        xStart={xStart}
                        totalWidth={totalWidth}
                    />
                ))}
            </group>
        </>
    );
};

export default Skills3D;
