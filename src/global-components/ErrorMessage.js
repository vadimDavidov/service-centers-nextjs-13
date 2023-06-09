import styles from './ErrorMessage.module.css';
import LinkToPage from '@/special-components/main/LinkToPage';
import Header from './Header';

function ErrorMessage(props) {
  return (
    <div className={styles.message}>
      <div className="container">
        <Header>Извините, что-то пошло не так. 😔</Header>
        <button onClick={props.reset}>Попробуйте ещё раз</button>
        <h2>⬆️ Чтобы перейти на страницу вашего города - выберите город. </h2>
        <LinkToPage href={props.href}>Перейти на стартовую страницу</LinkToPage>
      </div>
    </div>
  );
}

export default ErrorMessage;
