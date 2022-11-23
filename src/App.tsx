import  {useState}  from 'react';
import styles from './App.module.css';
import PoweredImgage from './assets/powered.png';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalcular = () => {
    if(heightField && weightField) {

    } else {
      alert("Preencha os campos!!!")
    }
  };
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={PoweredImgage} alt="" width={150}  />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para índice de massa corpórea. parâmetro adotado pela organização mundial de saude para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Coloque a sua altura. Ex 1.55 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Coloque o seu peso. Ex 60 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalcular}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
};

export default App;