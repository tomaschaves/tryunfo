import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;

// 4. Crie o preview da carta que está sendo criada pelo formulário
// Até o momento você criou dois componentes que recebem props , agora está na hora de criar o estado dos
// componentes. Os componentes Form e Card irão compartilhar o mesmo estado para exibir as mesmas
// informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?).
// Quando alguma informação é
// digitada em algum campo do formulário, o componente Card deve exibir a mesma informação em tempo real,
// criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos
// requisitos).

// Você deverá usar a prop onInputChange para passar uma callback para lidar com os eventos de onChange dos
// inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também
// devem ser salvos em um estado.
// Dica: o mesmo estado usado para controlar os inputs do formulário podem ser passados para o componente
// Card .
// Informações técnicas:
// Ao digitar algo no campo com o data-testid="name-input" do formulário, o mesmo valor deverá ser
// renderizado no componente Card , no elemento com o data-testid="name-card" .
// Ao digitar algo no campo com o data-testid="description-input" do formulário, o mesmo valor deverá ser
// renderizado no componente Card , no elemento com o data-testid="description-card" .
// Ao digitar algo no campo com o data-testid="image-input" do formulário, o mesmo valor deverá ser
// passado para o componente Card , e ser usado no atributo src do elemento com o data-testid="image-
// card" .
// Ao digitar algo no campo com o data-testid="attr1-input" do formulário, o mesmo valor deverá ser
// renderizado no componente Card , no elemento com o data-testid="attr1-card" .
// Ao digitar algo no campo com o data-testid="attr2-input" do formulário, o mesmo valor deverá ser
// renderizado no componente Card , no elemento com o data-testid="attr2-card" .
// Ao digitar algo no campo com o data-testid="attr3-input" do formulário, o mesmo valor deverá ser
// renderizado no componente Card , no elemento com o data-testid="attr3-card" .
// Ao selecionar algum valor no select com o data-testid="rare-input" do formulário, o mesmo valor deverá
// ser renderizado no componente Card , no elemento com o data-testid="rare-card" .
// Quando o campo do tipo checkbox que possui o data-testid="trunfo-input" estiver checked , deverá ser
// renderizado no componente Card o texto Super Trunfo dentro do elemento com o data-testid="trunfo-
// card" .
// Dica: para campos que precisem de um valor padrão (como o campo de raridade, por exemplo) você pode iniciar
// o estado já com esse valor.
