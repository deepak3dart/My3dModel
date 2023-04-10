import { Hud, OrthographicCamera, Environment } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Button from '../Button'

export default function MaterialMenu({ setSelected }) {
  const texture = useLoader(TextureLoader, [
    process.env.PUBLIC_URL+'/assets/trib1.jpg',
    process.env.PUBLIC_URL+'/assets/trib2.jpg',
    process.env.PUBLIC_URL+'/assets/trib3.jpg',
    process.env.PUBLIC_URL+'/assets/trib4.jpg',
  ])

  return (
    <Hud>
      <OrthographicCamera makeDefault position={[0, 3, 2]} zoom={50} />
      <Environment preset="forest" />
      <Button id={0} texture={texture[0]} position={[-5, -4.5, 0]} roughness={0.2}  setSelected={setSelected} />
      <Button id={1} texture={texture[1]} position={[-2.5, -4.5, 0]} roughness={0.2} setSelected={setSelected} />
      <Button id={2} texture={texture[2]} position={[-0, -4.5, 0]} roughness={0.2} setSelected={setSelected} />
      <Button id={3} texture={texture[3]} position={[2.5, -4.5, 0]} roughness={0.5} setSelected={setSelected} />
      
    </Hud>
  )
}