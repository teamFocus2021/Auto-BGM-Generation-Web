import { FC } from 'react';
import * as React from 'react'
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader'
import SubmitButton from './SubmitButton'

const DropzoneUploader: FC = () => {

    const getUploadParams: IDropzoneProps['getUploadParams'] = ({ meta }) => { 
        const url = '/handle'
        const fileUrl = `${url}/${encodeURIComponent(meta.name)}`
        return { url, meta: { fileUrl } } 
    }

    const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta }) => {
        console.log("meta: " + meta)
    }

    const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
        console.log("param: " + getUploadParams)
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <React.Fragment>
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            SubmitButtonComponent={SubmitButton}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            onSubmit={handleSubmit}
            accept="video/*"
            inputContent={(files, extra) => (extra.reject ? 'Only Video File!' : 'Drop or Browse A Video File')}
            styles={{
                dropzoneReject: { borderColor: 'red', backgroundColor: 'hsl(0, 34%, 72%, 0.8)' },
                dropzoneActive: { borderColor: 'blue', backgroundColor: 'hsl(269, 51%, 83%, 0.8)' },
                inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
            }}
        />
      </React.Fragment>
    )
};

export default DropzoneUploader;