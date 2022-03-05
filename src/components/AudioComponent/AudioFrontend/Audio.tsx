import React, {useEffect, useRef, useState, useContext} from 'react';
import Peer from 'simple-peer'
import io from "socket.io-client"
import styles from './audio.module.scss'
import ChatContext from '../../../context/ChatContext';
import {BsTelephone} from 'react-icons/bs'
import {TiMicrophone} from 'react-icons/ti'

const socket = io("http://localhost:3050",{
    withCredentials: true
})

type AudioProp = {};

const Audio:React.FC<AudioProp> = () => {
    const showAudioContext = useContext(ChatContext);
 

    const showAudioCall =  useContext(ChatContext)?.showAudio
    
    const [me, setMe] = useState("")
    const [stream, setStream] = useState<MediaStream>()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState("")
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState("")


    const myAudio:React.MutableRefObject<HTMLAudioElement|null> = useRef(null)
    const userAudio:React.MutableRefObject<HTMLAudioElement|null>  = useRef(null)
    const connectionRef:React.MutableRefObject<any|null> = useRef(null)


      
    useEffect(() => {
    //   navigator.mediaDevices.getUserMedia({video:false, audio:true}).then((stream)=>{
    //       setStream(stream)
    //       myAudio.current!.srcObject = stream
    //   })

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
      });

      socket.on('me', (id)=>{
          setMe(id)
          console.log(socket.id)
      })

      socket.on('callUser', (data)=>{
          setReceivingCall(true)
          setCaller(data.from)
          setName(data.name)
          setCallerSignal(data.signal)

      })

    }, [])


    const callUser = (id: any) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
 
        peer.on("signal", (data:any)=>{
            socket.emit("callUser",{
                userToCall: id,
                signalData:data,
                from:me,
                name:name
            })
        })

        peer.on("stream", (stream: MediaStream)=>{
            userAudio.current!.srcObject = stream
        })

        socket.on("callAccepted", (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer
    }
    

    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle:false,
            stream:stream
        })

        peer.on("signal", (data: any)=>{
            socket.emit("answerCall", {signal:data, to:caller})
        })

        peer.on("stream", (stream:any)=>{
            userAudio.current!.srcObject = stream
        })

        peer.signal(callerSignal)
        connectionRef.current = peer
    }

    const leaveCall = () => {
         setCallEnded(true)
         connectionRef.current!.destroy()
    }
    const closeAudio = () => {
        showAudioContext?.setShowAudio(false);  
      };

    if(callAccepted && !callEnded){
            return (
                <div className={`${styles.audio_tab} ${
                    showAudioCall ? "" : styles.audio_hide
                  }`}>
                    <h5 onClick={closeAudio}>&times;</h5>
                    <div className={"styles.audio_content"}>
                            <h3>Jane Cooper</h3>
                        <button className={`${styles.mic}`}>
                        <TiMicrophone/> 
                        </button>
                    </div>
                    {stream && <>
                    <audio playsInline style={{width: "250px"}} ref={myAudio} src="./static/music/foo.mp3"  autoPlay/>
                    <audio playsInline style={{width: "250px"}} ref={userAudio} src="./static/music/foo.mp3"  autoPlay/>
                    </>}
                    <button className={`${styles.green}`}>
                            <BsTelephone onClick={closeAudio}/>
                            <div></div>
                        </button>
                </div>
            )
        }
        console.log(me)
        if(receivingCall && !callEnded){
            return (<div className={`${styles.audio_tab} ${
                showAudioCall ? "" : styles.audio_hide
              }`}>
                <h5 onClick={closeAudio}>&times;</h5>
                <div className={"styles.audio_content"}>
                        <h3>Jane Cooper</h3>
                    <div className={"styles.whatsapp_audio"}>
                        <p>Whatsapp Audio Call <span>HD</span></p>
                    </div>
                    <h3>Incoming Call...</h3>  
                </div>
               <div className={styles.btn_choice}>
               <button className={`${styles.red_pick}`}>
                        <BsTelephone onClick={answerCall}/>
                    </button>
               <button className={`${styles.pick}`}>
                        <BsTelephone onClick={closeAudio}/>
                    </button>
               </div>
            </div>)
        }

  return (
    <div className={`${styles.audio_tab} ${
        showAudioCall ? "" : styles.audio_hide
      }`}>
        <h5 onClick={closeAudio}>&times;</h5>
        <div className={"styles.audio_content"}>
                <h3>Jane Cooper</h3>
            <div className={"styles.whatsapp_audio"}>
                <p>Whatsapp Audio Call <span>HD</span></p>
            </div>
            <h3>Dialing...</h3>  
        </div>
        <button className={`${styles.red}`}>
                <BsTelephone onClick={leaveCall}/>
            </button>
            
    </div>
  )
}

export default Audio