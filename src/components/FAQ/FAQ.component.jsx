import TraceOn from '@assets/icons/traceOnFAQ.png'
import TraceOff from '@assets/icons/traceOffFAQ.png'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const FAQ = () => {

  const faqs = [
    {
      question: "Does Workarise come with a free plan?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni."
    },
    {
      question: "How many accounts can you have on Workarise?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni."
    },
    {
      question: "How much does Workarise cost?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni.",
    },
    {
      question: "Can I cancel at any time?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni.",
    },
    {
      question: "Do you offer any discounts?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni."
    },
    {
      question: "What payment options do you accept?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam modi facere laboriosam ut sunt tempore exercitationem eligendi rerum delectus provident, perferendis sit beatae laborum officia iure facilis nobis magni."
    }
  ]

  return (
    <section className="w-full flex flex-col items-center py-12 px-2 gap-8 lg:w-[50%] lg:mx-auto">
      <div className='w-full flex gap-20 lg:gap-48'>
        <img className='w-24 lg:w-36 lg:h-12' src={TraceOn} alt="Trace On Icon" />
        <h2 className='text-2xl font-extrabold leading-9 md:text-3xl lg:text-6xl'>FAQ</h2>
      </div>
      <ul className='w-full flex flex-col'>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{boxShadow: "none", borderBottom: "1px solid #1d1c1d", py: "10px"}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p className='text-lg font-medium lg:text-xl'>{faq.question}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className='lg:text-lg'>{faq.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </ul>
      <div className='w-full flex justify-end'>
        <img className='w-24 lg:w-36 lg:h-12' src={TraceOff} alt="Trace Off Icon" />
      </div>
    </section>
  )
}
