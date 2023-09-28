import { useEffect, useState } from "react"
import { data, getMaxAmount } from "../data"
import SpendingMonth from "./SpendingMonth"
import SpendingGraphic from "./components/SpendingGraphic"

const Spending = () => {
  const [spendings, setSpendings] = useState(null)
  const [maxSpendingAmount, setMaxSpendingAmount] = useState(null)
  

  useEffect(() => {
    setSpendings(data)
    setMaxSpendingAmount(getMaxAmount(data))
  }, [])
  
  return (
    <article className="bg-white w-full rounded-xl flex flex-col gap-6 py-6 px-3 drop-shadow-md xs:px-4">
      <h2 className="text-2xl font-bold">Spending - Last 7 days</h2>
      
      <div className="flex flex-wrap justify-between">
        { spendings &&
            spendings.map((spending, i) => {
              return <SpendingGraphic
                key={i}
                day={spending.day}
                amount={spending.amount}
                maxAmount={maxSpendingAmount}
              />
            })
        }
      </div>
      
      <hr />

      <SpendingMonth />
    </article>
  )
}

export default Spending