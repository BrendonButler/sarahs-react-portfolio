import React from 'react';

type FormData = {
  email: string,
  message: string
}

const initialFormData: FormData = {
  email: '',
  message: ''
};

function Contact() {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your submission');
    setFormData(initialFormData);
  };

  return (
      <form onSubmit={handleSubmit}>
        <h2>Contact me!</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input
              required
              name='email'
              id='email'
              type='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
              required
              name='message'
              id='message'
              placeholder='I would love a sick photo of my cat (Matt Watson) wearing a suit with a monocle -- he is one of the funny brothers after all!'
              value={formData.message}
              onChange={handleChange}
          />
        </div>
        <button type='submit'>
          Submit
        </button>
      </form>
  );
}

export default Contact;