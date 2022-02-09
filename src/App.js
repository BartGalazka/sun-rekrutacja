import logo from './logo.svg';
import './App.css';
import BulletPoint from './BulletPoint';
import Spec from './Spec'
import React from 'react';
import {SpecsArr, BulletPointsArr} from './Data';

function App() {
  
  const BulletPoints = BulletPointsArr.map((item, pos) => {
    return(
      <BulletPoint key={pos} header={item.header} text={item.text} />
    )
  })
  const Specs = SpecsArr.map((item, pos) => {
    return(
      <Spec key={pos} header={item.header} text={item.text} />
    )
  })
  return (
    <div className="App">
      <div className="lenovoBackground">
        <img className="lenovoLogo" src='/svg/lenovoLogo.svg' width='4%' float="left"/>
        <div className="lenovoWhite">
          <h2>Yoga S740 (14)</h2>
          <h3>Wyróżniająca inteligencja</h3>
        <p>Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.
</p>
        </div>
        <img className='whitePic' src='/png/lenovo1.png'/>
      </div>
      <div className='column lenovoBlack'>
      <img src='/png/lenovo2.png' className="picCenter"/>
      {BulletPoints[0]}
      {BulletPoints[1]}
      <img src='/png/promo1.png' className="promoPicCenter"/>
      {BulletPoints[2]}
      {BulletPoints[3]}
      <img src='/png/promo2.png' className="promoPicCenter"/>
      {BulletPoints[4]}
      {BulletPoints[5]}
      <img src='/png/promo3.png' className="promoPicCenter"/>
      {BulletPoints[6]}
      {BulletPoints[7]}
      <img src='/png/lenovo3.png' className="promoPicCenter"/>
      {BulletPoints[8]}
      {BulletPoints[9]}
      <h3 className="lenovoBlack">Specyfikacja</h3>
      <table>
        {Specs}
      </table>
      <p className='disclaimer'>Dane techniczne mogą zależeć od regionu</p>
      <h3 className="lenovoBlack">Specyfikacja</h3>
      <img src='/png/lenovo4.png' className="promoPicCenter"/>
      <p>1. Zasilanie <br/>2. USB 3.1 (Gen 2, zawsze aktywny) <br/>3. USB-C (USB + DisplayPort + zasilanie + Thunderbolt™ 3) <br/>4. Gniazdo słuchawek/mikrofonu <br/>5. USB 3.1 (Gen 2)</p>
      </div>
    </div>
  );
  
}

export default App;
