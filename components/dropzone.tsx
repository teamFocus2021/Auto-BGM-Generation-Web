import { FC } from 'react';
import * as React from 'react'
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader'

const DropzoneUploader: FC = () => {

    const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: '/upload' })

    const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta }) => {
        console.log(meta)
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
                dropzoneActive: { borderColor: 'blue', backgroundColor: '#D3BEEA' },
                inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
            }}
        />
      </React.Fragment>
    )
};

export default DropzoneUploader;