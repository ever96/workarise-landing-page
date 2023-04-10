import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useSentForm = ({form}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //Reseting loading and error by default
      setError(false);
      setLoading(true);

      //start sending email
      const send = await emailjs.sendForm(
        "service_9k7jyef", //service id
        "template_9neho7a", //template id
        form.current,
        "pdcyddoaTYDtgYOt8" // public key
      );

      // Email sent and stop loading
      setLoading(false);
      setModal(true)

      //Clean the form inputs
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setModal(true)
      setError(true);
      setLoading(false);
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    onSubmit,

    loading,
    error,

    modal,
    setModal
  };
};