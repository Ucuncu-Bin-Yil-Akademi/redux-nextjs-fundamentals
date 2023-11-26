function ContactForm({ formTitle, formDescription }) {
  return (
    <>
      <div className="p-5 m-5 border flex flex-col">
        <h2 className="text-red-500">{formTitle}</h2>
        <p></p>
        <input type="text" placeholder="Adınız" />
        <input type="text" placeholder="Soyadınız" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Konu" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Mesajınız"
        ></textarea>
        <button>Gönder</button>
      </div>
    </>
  );
}

export default ContactForm;
