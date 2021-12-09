import store from "../../redux/store";
import {useState} from "react";
import Message from "./message/message";
import style from './textarea.module.css'

const Textarea = () => {
	console.log('rerender')
	const [messageData, setMessageData] = useState(store.getState().message)

	store.subscribe(() => {
		console.log('subscribe')
			setMessageData(store.getState().message)})

	return (
		<div className={style.wrapper}>
			{messageData.map((messageData, index) => {
				return <Message key={index} messageData={messageData} index={index}/>
			})}
		</div>
	);
};

export default Textarea;
