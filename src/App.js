import logo from "./logo.svg";
import "./App.css";

function App() {
  const questionHandler = (e) => {
    console.dir(e.target.parentElement.nextSibling.className);
    if (e.target.parentElement.nextSibling.className === "false") {
      e.target.parentElement.nextSibling.className = "true";
      e.target.className = "fas fa-chevron-up";
    } else {
      e.target.parentElement.nextSibling.className = "false";
      e.target.className = "fas fa-chevron-down";
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="header-title">
        <h1> ROJAN ON AXIE INFINTY</h1>
        <p>Preguntas frecuentes que rojan ya no quiere contestar</p>
      </div>

      <div className="faq-container">
        <h1> Frequently Asked Questions </h1>
        <ul className="faq-questions-container">
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 1</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj sajaifnasf safk asj fsaj sajaifnasf
              safk asj fsaj sajaifnasf safk asj fsaj sajaifnasf safk asj fsaj
              sajaifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 2</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj sajaifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 3</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj sajaifnasf safk asj fsaj sajaifnasf
              safk asj fsaj sajaifnasf safk asj fsaj sajaifnasf safk asj fsaj
              sajaifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 4</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 5</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifiaifnasf safk asj fsaj
              sajaifnasf safk asj fsaj sajaifnasf safk asj fsaj sajca que algo
              singidifca que algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 6</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 7</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 8</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 9</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 10</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 11</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question bor-bott">
            <div className="faq-question-close">
              <p>pregunta numero: 12</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
          <li className="faq-question">
            <div className="faq-question-close">
              <p>pregunta numero: 13</p>
              <i onClick={questionHandler} class="fas fa-chevron-down"></i>
            </div>
            <p className="false">
              respuesta para la pregunta que singifica que algo singidifca que
              algo saifnasf safk asj fsaj saj
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
