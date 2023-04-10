import React, { useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from "@react-three/postprocessing"
import { useControls, folder } from "leva"



export default function Model({ ...props }) {
    const group = useRef()  
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL+'/assets/accessories.gltf')
      
    const config = useControls({
          parts: folder(
            {
                hornringsmall: { value: false },
                hornringbig: { value: false },
                neckringsmall: { value: false },
                neckringbig: { value: false },
                headring: { value: false },
                rope: { value: false },
                BurroHedring: { value: false },
                mat: { value: false },
            },
            { collapsed: false },
        ),
    })

    
    return (
        <group ref={group} {...props} dispose={null}>
            <Select visible={config['all parts']}>
                <Select name="headring" visible={config.headring}>
                    <mesh geometry={nodes.Headring.geometry} material={materials['Material.005']}  position={[0.03, -0.027, 0.012]}/>
                </Select>
                <Select name="rope" visible={config.rope}>
                    <mesh geometry={nodes.Rope.geometry} material={materials['Material.006']} position={[0.03, -0.027, 0.012]}/>
                </Select>
                <Select name="neckringbig" visible={config.neckringbig}>
                    <mesh geometry={nodes.NeckRingBig.geometry} material={materials['Material.004']} />
                </Select>
                <Select name="neckringsmall" visible={config.neckringsmall}>
                    <mesh geometry={nodes.NeckRingSmall.geometry} material={materials['Material']} />
                </Select>
                <Select name="hornringsmall" visible={config.hornringbig}>
                    <mesh geometry={nodes.HornRingSmall.geometry} material={materials['Material.001']} />
                </Select>
                <Select name="hornringbig" visible={config.hornringsmall}>
                    <mesh geometry={nodes.HornRingBig.geometry} material={materials['Material.005']} />
                </Select>
                <Select name="BurroHedring" visible={config.BurroHedring}>
                    <mesh geometry={nodes.BurroHedring.geometry} material={materials['Material.005']} position={[.22, -0.01, -0.007]} scale={[1.58,1.66,2]}/>
                </Select>
                <Select name="mat" visible={config.mat}>
                    <mesh geometry={nodes.mat.geometry} material={materials['Material.008']} position={[0, 0, 0]} rotation={[0, 3.14159, 0]} />
                </Select>
            </Select>
        </group >
    )
}

