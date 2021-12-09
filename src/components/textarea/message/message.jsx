import React from 'react';
import store from "../../redux/store";
import {deleteMessage} from "../../redux/chat-reducer";

const Message = ({messageData, index}) => {

	const deleteMes = (index) => {
		store.dispatch(deleteMessage(index))
	}

	return (
		<div onClick={() => deleteMes(index)} key={index}>
			<p>{messageData.message}</p>
			<p>{messageData.data.getHours()}</p>
		</div>
	);
};

export default Message;
