import React from 'react';
import store from "../../../redux/store";
import {deleteMessage} from "../../../redux/chat-reducer";
import style from './message.module.css'

const Message = ({messageData, index}) => {

	const deleteMes = (index) => {
		store.dispatch(deleteMessage(index))
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
