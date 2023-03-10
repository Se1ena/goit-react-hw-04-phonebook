import { useState } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';

import { Form, Btn } from 'components/ContactForm/ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <Form onSubmit={handleSubmitForm}>
      <label>
        <div>Name</div>
        <input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <div>Number</div>
        <input
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
}

//export class ContactForm extends Component {
//static propTypes = {
//onSubmit: PropTypes.func.isRequired,
//};

//state = {
//name: '',
//number: '',
//};

//handleInputChange = (e) => {
//this.setState({
//[e.currentTarget.name]: e.currentTarget.value,
//});
//};

//handleSubmitForm = (e) => {
//e.preventDefault();
//this.props.onSubmit(this.state);
//this.setState({ name: '', number: '' });
//};

//render() {
//return (
//<Form onSubmit={this.handleSubmitForm}>
//<label>
//<div>Name</div>
//<input
//value={this.state.name}
//onChange={this.handleInputChange}
//type='text'
//name='name'
//pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
// />
// </label>
//<label>
//  <div>Number</div>
//  <input
//   value={this.state.number}
// onChange={this.handleInputChange}
// type='tel'
//name='number'
// pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//  title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//  required
// />
//  </label>
//   <Btn type='submit'>Add contact</Btn>
//  </Form>
//  );
// }
//}
