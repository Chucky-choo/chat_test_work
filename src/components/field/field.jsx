import {useState} from 'react';
import store from "../../redux/store";
import {addMessage} from "../../redux/chat-reducer";
import style from './field.module.css'

const Field = () => {
	const [text, setText] = useState(`Okay I'm waiting  👍`)

	const onChange = (e) => {
		setText(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		store.dispatch(addMessage(text))
		setText('')
	}

	const submit = () => {
		document.getElementById('btn').click()
	}


	return (
		<form onSubmit={onSubmit} className={style.wrapper}>
			<input
				value={text}
				onChange={onChange}
				type="text"/>
			<button id='btn' style={{display: 'none'}}>submit</button>
			<svg onClick={submit} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M21 1L14 21L10 12L1 8L21 1Z" stroke="url(#paint0_linear_4_445)" strokeWidth="2"
							strokeLinecap="round" strokeLinejoin="round"/>
				<defs>
					<linearGradient id="paint0_linear_4_445" x1="1" y1="-0.22807" x2="24.0881" y2="3.34909"
													gradientUnits="userSpaceOnUse">
						<stop stopColor="#53E88B"/>
						<stop offset="1" stopColor="#15BE77"/>
					</linearGradient>
				</defs>
			</svg>
		</form>
	);
};

export default Field;
