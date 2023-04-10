import { useGLTF } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import MaterialMenu from './MaterialMenu'
import { useControls, button } from 'leva'

const BODYMODELS = {
    burro: process.env.PUBLIC_URL+'/assets/Burro.gltf',
    horse: process.env.PUBLIC_URL+'/assets/Horse.gltf',
}

const BoolTexture = {
    red: process.env.PUBLIC_URL+'/assets/trib1.jpg',
    blue: process.env.PUBLIC_URL+'/assets/trib2.jpg',
    green: process.env.PUBLIC_URL+'/assets/trib3.jpg',
    indigo: process.env.PUBLIC_URL+'/assets/trib4.jpg',
}
export default function ArmChair() {
    const ref = useRef()
    const [selected, setSelected] = useState(0)
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL+'/assets/Ox.gltf')

    const materialOverrides = useMemo(() => {
        return {
            0: materials.Material_red,
            1: materials.Material_blue,
            2: materials.Material_green,
            3: materials.Material_indigo
        }
    }, [materials])

    const { model } = useControls({
        model: {
            value: 'horse',
            options: Object.keys(BODYMODELS)
        },
        texture: {
            value: 'red',
            options: Object.keys(BoolTexture)
        }
    })

    return (
        <>
            <group dispose={null} >
                <group scale={1}>
                    <BodyModel position={[0, 0, 0]} url={BODYMODELS[model]} />
                    <mesh ref={ref} geometry={nodes.TriblaBool.geometry} material={materialOverrides[selected]} castShadow receiveShadow position={[0, -0.2, 1]} />
                </group>
            </group>
            <MaterialMenu setSelected={setSelected} />
        </>
    )
}
function BodyModel({ url, ...props }) {
    const { scene } = useGLTF(url)
    // <primitive object={...} mounts an already existing object
    return <primitive object={scene} {...props} rotation={[0, 3.14159, 0]} />

}

useGLTF.preload(process.env.PUBLIC_URL+'/assets/Ox.gltf')
