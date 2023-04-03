import { useSentForm } from "@hooks/useSentForm"
import { useRef } from "react"
import { FormModal } from "../FormModal/FormModal.component"

export const FormContact = () => {

  const form = useRef()

  const {
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
    } = useSentForm({form})

  return (
    <>
      <section 
        className="w-full flex flex-col items-center py-7 px-3 gap-3 text-center lg:py-10"
      >
        <h1 className="text-2xl font-extrabold md:text-3xl lg:text-6xl">We are Here to Help!</h1>
        <p className='text-lg font-medium lg:text-2xl'>Please reach out to us if you have any questions regarding sales, support, or general questions.</p>
        <form ref={form} onSubmit={e => onSubmit(e)} className='w-full max-w-[500px] mx-auto flex flex-col gap-4 px-2 py-4 mb-10 text-primary-black items-end'>
          <label htmlFor="from_name" className="w-full text-start font-medium lg:text-lg">Your Name *</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" id='from_name' name="from_name" className="shadow-sm  text-sm rounded-md w-full p-2.5 outline-2 outline-black  border-primary-black border" placeholder="Name" required />
          <label htmlFor="user_email" className="w-full text-start  font-medium lg:text-lg">Your Email *</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" id='user_email' name="user_email" className="shadow-sm  text-sm rounded-md w-full p-2.5 outline-2 outline-black  border-primary-black border" placeholder='example@gmail.com' required />
          <label htmlFor="message" className="w-full text-start  font-medium lg:text-lg">Message *</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" id="message" rows="4" className="shadow-sm text-sm rounded-md w-full p-2.5 outline-2 outline-black  border-primary-black border" placeholder="Hello!" required></textarea>
          <button disabled={loading} className="text-lg bg-primary-black rounded-md text-white font-bold py-1.5 px-5 lg:text-xl lg:px-8 hover:opacity-70 transition-opacity" type="submit">{!loading ? 'Send' : 'Sending'}</button>
        </form>
      </section>
      <FormModal error={error} modal={modal} setModal={setModal} />
    </>
  )
}
