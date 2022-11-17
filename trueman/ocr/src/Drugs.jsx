import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import { DATA } from './Data'
import './module.css';

const Drugs = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [splitData, setSplitData] = useState([])



  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log('text ==>',result.data.text);
        let textdata = result.data.text
        let someText = textdata.replace(/(\r\n|\n|\r)/gm, " ");
        console.log('new text',someText)
        setSplitData(someText.split(' '))
        console.log('split data==>', someText.split(' '))
        setText(result.data.text);
        setIsLoading(false);
      });
  };


  useEffect(() => {
    console.log(DATA.filter(e => splitData.indexOf(e.name) !== -1))
  }, [])

  return (
    <div className="container" >
      <div className='gridz'>
        <div className='pe'>


          <div className='imgbox'>
            {image && <img src={image} alt="logo" className='img' />}
          </div>

          {!isLoading && !text && (
            <>
              <label className='lab' for="upload">
                 <div className='uploadbutt'>Upload</div>
              </label>
             
              <input
                id="upload"
                type="file"
                style={{display:'none'}}
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="input"
              />
              {image && (
                <input
                  type="button"
                  onClick={handleSubmit}
                  className="convert"
                  value="Convert"
                />

              )}

            </>
          )}

          {isLoading && (
            <>
              <progress className="progress" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="conv">Converting - {progress} %</p>
            </>
          )}
          {text && (
            <div className='text'>
              {text}
            </div>
          )}
        </div>
        <div className='pe'>
        <div className='bb'>
             {splitData.length > 0 ? "Near by stores":"Start by uploadiong a reciept"} 
            </div>
          <div className='textbox'>
           
            {!isLoading && text && (
              <>
                <div className='storebox'>
                  {DATA.filter(e => splitData.indexOf(e.name) !== -1).map((item, i) => (
                    <div key={i} className='bb'>
                      <div className='imgboxer'>
                        <img src={item.image} alt="logo" className='imm' />
                      </div>
                      <div className='namez'>{item.name}</div>
                      <div className='description'>
                        {item.desc}
                      </div>
                      <button className='buy'>Buy</button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drugs;
