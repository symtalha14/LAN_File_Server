import { Button } from "../button/Button";
import { useState } from "react";

export default function Main() {
    const [uploading, setUpload] = useState(false);
    return (
        <>
    
            <div style={{padding:'10px'}}>
                <h2 className="text-center">
                    Upload file
                </h2>
                <hr></hr><br></br>
                <form action="http://192.168.0.155:3003/upload" method="post" encType="multipart/form-data">
                    <label htmlFor="upload-file">Click to upload a file</label><br></br>
                    <input name="uploadfile" id="upload-file" type="file" />

                    <Button stateFunc={() => { setUpload(true) }} text="Upload" icon="upload" type="submit" />
                </form>

                {uploading ? <p className="uploading">Uploading...</p> : ""}
            </div>
        </>
    )
}