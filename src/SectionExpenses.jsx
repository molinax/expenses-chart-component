import Header from "./Header"
import Spending from "./Spending"

const SectionExpenses = () => {
  return (
    <section className="container w-[95%] max-w-md text-dark-brown flex flex-col gap-6 items-center ">
      <Header />
      
      <Spending />
    </section>
  )
}

export default SectionExpenses