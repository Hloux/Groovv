import { Dispatch, SetStateAction } from 'react'

type FileUploadProps = {
    imageUrl: string
    onFieldChange: (value: string) => void
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({ imageUrl, onFieldChange, setFiles }: FileUploadProps) => {
  return (
    <div>
      
    </div>
  )
}

export default FileUploader
