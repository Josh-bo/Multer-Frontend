import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [file, setFile] = useState() 
  const [image, setImage] = useState()

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append('file', file)
   axios.post('http://localhost:3001/upload', formdata)
   .then(res => console.log(res))
   .catch(err => console.log(err))
  }
  
  // useEffect(() => {
  //   axios.get('http://localhost:3001/getImage')
  //   .then(res => setImage(res.data[0].image))
  //   .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    axios.get('http://localhost:3001/getImage')
      .then(res => {
        const images = res.data.map(item => item.image);
        setImage(images);
      })
      .catch(err => console.log(err));
  }, []);
  



  return (
    <>
      <div>
        <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        {/* <img src={`http://localhost:3001/Images/` + image} alt="" /> */}

        {image && image.map((imageUrl, index) => (
  <img key={index} src={`http://localhost:3001/Images/${imageUrl}`} alt="" />
))}

      </div>
    </>
  )
}

export default App
