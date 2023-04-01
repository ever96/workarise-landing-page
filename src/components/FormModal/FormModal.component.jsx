import { Dialog } from "@mui/material"
import Confetti from '@assets/images/confettiImage.png'
import Error from '@assets/images/errorForm.png'

export const FormModal = ({modal, setModal, error}) => {
  return (
    <Dialog 
      PaperProps={{
        sx: { borderRadius: '20px', padding: ['36px 25px','50px 100px'] },
      }}
      open={modal}
      onClose={() => setModal(false)}
    >
      <div className="flex flex-col items-center gap-4 text-primary-black">
        <picture>
          <img src={!error ? Confetti : Error} alt={!error ? "Confetti Image" : "Error Image"} />
        </picture>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-barlow font-bold lg:text-3xl">{!error ? 'Success!' : 'Error'}</p>
          <p className="text-lg font-barlow font-medium lg:text-xl">{!error ? 'Your message has been sent.' : 'Try again, please.'}</p>

        </div>
        <button onClick={() => setModal(false)} className="text-xl py-2 px-7 rounded-md font-bold bg-primary-black text-white lg:px-10">Okay</button>
      </div>
    </Dialog>
  )
}
