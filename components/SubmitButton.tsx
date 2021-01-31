import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';

import { ISubmitButtonProps } from 'react-dropzone-uploader'
import axios from 'axios';


const SubmitButton = (props: ISubmitButtonProps) => {
  const { className, buttonClassName, style, buttonStyle, disabled, content, onSubmit, files } = props

  const _disabled =
    files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status)) ||
    !files.some(f => ['headers_received', 'done'].includes(f.meta.status))

  const handleSubmit = () => {
    onSubmit(files.filter(f => ['headers_received', 'done'].includes(f.meta.status)))
  }
  
  // useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
  // component 가 unmount 될 때(submit버튼 눌러서 페이지 이동할 때) 실행 - componentWillUnmount
  // 2번째 파라미터에 빈 배열을 넣으면 useEffect 에서 설정한 함수는 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    return () => {
      axios.get('http://localhost:3000/make').then((response) => {
        console.log(response);
      });
    }
  }, []);
  
  return (
    <div className={className} style={style}>
      <Link href="/views/make" as="/make">
        <button className={buttonClassName} style={buttonStyle} onClick={handleSubmit} disabled={disabled || _disabled}>
          {content}
        </button>
      </Link>
    </div>
  )
}

SubmitButton.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  content: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  extra: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    reject: PropTypes.bool.isRequired,
    dragged: PropTypes.arrayOf(PropTypes.any).isRequired,
    accept: PropTypes.string.isRequired,
    multiple: PropTypes.bool.isRequired,
    minSizeBytes: PropTypes.number.isRequired,
    maxSizeBytes: PropTypes.number.isRequired,
    maxFiles: PropTypes.number.isRequired,
  }).isRequired,
}

export default SubmitButton
