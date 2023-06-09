import styles from './PopularServices.module.css';
import LinkToPage from './LinkToPage';

function PopularServices({ popularServicesData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Популярные услуги по ремонту</div>
      <ul className={styles.services}>
        {
          // * Getting data
          popularServicesData &&
            popularServicesData.map(item => {
              return (
                <li className={styles.card}>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div className={styles.cardList}>{item.itemsList}</div>
                </li>
              );
            })
        }
      </ul>
      <div>
        <LinkToPage href="#"> Все услуги</LinkToPage>
      </div>
    </div>
  );
}

export default PopularServices;
