import styled from "styled-components";
import img1 from '../../assets/1d.png';
import img2 from '../../assets/2d.png';
import {useEffect, useState} from "react";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
  @media (max-width: 900px){
    flex-direction: column;
  }
`;

const smallSize = () => {
    return window.innerWidth < 426
}


const InProgress = () => {
    const [size, setSize] = useState<number>(500);
    const [small, setSmall] = useState<boolean>(smallSize());


    useEffect(()=>{

        const event = () => {
            const _resolution = smallSize();
            if (_resolution !== small) {
                setSmall(_resolution)
            }

        }

        window.addEventListener('resize', event);

    },[small])

    return (
        <Box>
            <img src={img1} width={`${small ? 250 : 500}px`} alt='vionso software'/>
            <img src={img2} width={`${small ? 250 : 500}px`} alt='vionso info'/>
        </Box>
    )
}

export default InProgress