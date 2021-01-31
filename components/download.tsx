import axios from 'axios';
import { FC, useEffect, useRef, useState } from 'react';

// component 가 mount 될 때 download : 0 으로 초기화
const Download: FC = () => {
    const [download, setDownload] = useState(0);
    const mounted = useRef(false);
    const onDownload = () => {
        if(!download){
            setDownload(download + 1);
        } 
    }
    // 컴포넌트가 업데이트될 때만 호출
    // 처음 mount 될 때는 if문에 걸리면서 아무것도 안하고 download 버튼을 눌러서 state 값이 바뀔 때만 실행
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
        } else{
            axios.get('http://localhost:3000/download').then((response) => {
                console.log(response);
                console.log("double check");
            });
        }
    }, [download]);

    return (
        <button className="download" onClick={onDownload}>download</button>
    )
}

export default Download;