import { useState } from 'react';
import Preview from './Preview';
import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheck from './InputGroupCheck';
const Form = (props) => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const payments = [
    {
      labelText: 'Tarjeta de crédito',
      name: 'paymentType',
      id: 'creditCard',
      value: 'creditCard',
    },
    {
      labelText: 'Efectivo',
      name: 'paymentType',
      id: 'cash',
      value: 'cash',
    },
    {
      labelText: 'Contra reembolso',
      name: 'paymentType',
      id: 'cashOnDelivery',
      value: 'cashOnDelivery',
    },
  ];
  return (
    <form className="form" onSubmit={handleForm}>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className="form">
        {/* name */}
        <InputGroupText
          labelText="Escribe un nombre:"
          type="text"
          name="name"
          id="name"
          placeholder="María García"
          value={name}
          handleChange={handleName}
        />

        {/* email */}
        <InputGroupText
          labelText="Escribe un email:"
          type="email"
          name="email"
          id="email"
          placeholder="mariagarcia@gmail.com"
          value={email}
          handleChange={handleEmail}
        />

        {/* region */}
        <InputGroupSelect
          labelText="Indica tu región:"
          name="region"
          id="region"
          value={region}
          handleChange={handleRegion}
        />

        {/* payment type */}
        <label className="label-text">Indica tu método de pago:</label>

        {payments.map((payment) => (
          <InputGroupRadio
            key={payment.id}
            labelText={payment.labelText}
            name={payment.name}
            id={payment.id}
            value={payment.value}
            checked={paymentType === payment.value}
            handleChange={handlePaymentType}
          />
        ))}

        {/* legal terms */}
        <InputGroupCheck
          labelText="Debes aceptar nuestros términos legales para completar la compra:"
          name="legalTerms"
          id="legalTerms"
          value={legalTerms}
          handleChange={handleLegalTerms}
        />
      </div>

      <Preview
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms}
      />

      {/* reset */}
      {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
      <input
        className="button"
        type="submit"
        value="Enviar"
        disabled={isValidForm() === false}
      />

      {/* send */}
      <button className="button reset" onClick={handleResetButton}>
        Limpiar el formulario
      </button>
    </form>
  );
};

export default Form;
