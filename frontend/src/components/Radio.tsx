import { IoInformationCircle } from 'react-icons/io5'
import InfoViewer from './InfoViewer'
import { useState } from 'react'
interface RadioProps {
    name: string,
    information: string,
    fillForm: (e: React.ChangeEvent<HTMLInputElement>) => void,
    selected: number,
    value: number,
}
const Radio = ({ name, value, information,fillForm,selected }: RadioProps) => {
    const handleMouseEnter = () => {
        setShowInfo(true)
    }   
    const handleMouseLeave = () => {
        setShowInfo(false)
    }
    const [showInfo, setShowInfo] = useState<boolean>(false)
    return (
        <div className='flex items-center mr-2 relative'>
            <input type="radio" name="level" id={"level"+value} required checked = {value == selected} value={value} onChange={fillForm}/>{name} <span onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} ><IoInformationCircle /></span>
            {
                showInfo && <InfoViewer info={information} />
            }
        </div>
    )
}

export default Radio