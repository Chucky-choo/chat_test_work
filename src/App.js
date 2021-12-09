import Field from "./components/field/field";
import Textarea from "./components/textarea/textarea";
import style from './app.module.css'

function App() {
	return (
		<div className={style.body}>
			<Textarea/>
			<Field/>
		</div>
	);
}

export default App;
