import React, { useCallback, useState } from 'react';
import {useDropzone} from "react-dropzone";
import {StyledDragDrop} from "../styled/StyledDragDrop";
import {Image} from "cloudinary-react";

function DragDrop(props) {
    const [uploadedFiles, setUploadedFiles] = useState()
    let cloudName = "dck9jx6qr"
    let uploadPreset = "ertujyux"
    let photoId = ""
    const onDrop = useCallback(acceptedFiles => {
       const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

       acceptedFiles.forEach(async (acceptedFile) => {
           const formData = new FormData();
           formData.append('file', acceptedFile)
           formData.append('upload_preset', uploadPreset)

           const response = await fetch(url, {method: 'post', body: formData})
           const data = await response.json();
           photoId = data.public_id;
           setUploadedFiles(data);
           props.assignImageId(photoId)
       })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
    accepts: "image/*", multiple: false,
    })

    return (
        <StyledDragDrop>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                Image Drop Zone</div>
            <Image cloudName={cloudName} publicId={photoId} width={"300"} crop={"scale"}/>
        </StyledDragDrop>
    );
}
export default DragDrop;
