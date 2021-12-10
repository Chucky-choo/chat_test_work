import Message from "./message/message";
import style from './textarea.module.css'
import {useSelector} from "react-redux";

const Textarea = () => {
	const messageData = useSelector(store => store.message)

	return (
		<div className={style.wrapper}>
			{messageData.map((messageData, index) => {
				return <Message key={index} messageData={messageData} index={index}/>
			})}
		</div>
	);
};

export default Textarea;
