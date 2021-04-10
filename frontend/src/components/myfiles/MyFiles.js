import { useEffect, useState } from "react";

export const MyFiles = () => {
    const [my_files, setMyFiles] = useState([]);
    const [isLoading, setLoader] = useState(true);
    const myfiles = () => {
        var files = fetch("http://192.168.0.155:3003/files");
        files.then(data => {
            data.json()
                .then(items => {
                    setMyFiles(items);
                    setLoader(false);
                })
                .catch(err => console.log(err));
        })
            .catch(err => console.log(err));

    }
    useEffect(() => {
        myfiles();
    })

    var ind =1;
    return (
        <>
            <h1 className="text-center">My Files</h1>
            {isLoading && <img alt="loader" className="loading" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />}
            <ul className="files_list">
                
                {
                    
                    my_files.map(fl => {
                        return (
                            
                        <li className="file-tile" key={ind++}>
                            <i className="fa fa-file"></i> &nbsp;
                          <p>
                          {fl}
                          </p>
                        </li>
                        )
                    })
                }
            </ul>
        </>
    );
}