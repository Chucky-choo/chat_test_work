import React from 'react';
import {deleteMessage} from "../../../redux/chat-reducer";
import style from './message.module.css'
import {useDispatch} from "react-redux";

const Message = ({messageData, index}) => {
	const dispatch = useDispatch()

	const deleteMes = (index) => {
		dispatch(deleteMessage(index))
	}

	return (
		<div
			className={style.wrapper}
			onClick={() => deleteMes(index)}
		>
			<p>{messageData.message}</p>
			<div className={style.date}>
				{`${messageData.data.getHours()}.${messageData.data.getMinutes()}`}
			</div>
		</div>
	);
};

export default Message;
