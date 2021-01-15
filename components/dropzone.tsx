import { FC, Component } from 'react';
import * as React from 'react'
import Link from 'next/link';
import Dropzone, { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader'

const DropzoneUploader: FC = () => {
    
    const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'localhost:3000/about' })

    const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta, remove }, status) => {
        console.log(status, meta)
    }

    const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <React.Fragment>
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            onSubmit={handleSubmit}
            accept="video/*"
            inputContent={(files, extra) => (extra.reject ? 'Only Video File!' : 'Drop or Browse A Video File')}
            styles={{
                dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
            }}
        />
      </React.Fragment>
    )
};

export default DropzoneUploader;
