const SpendingMonth = () => {
  return (
    <section className="flex justify-between text-sm text-medium-brown">
      <div>
        <p>Total this month</p>

        <strong className="text-3xl text-dark-brown">$478.33</strong>
      </div>

      <div className="self-end">
        <strong className="block text-right text-dark-brown">+2.4%</strong>
        
        <p>form last month</p>
      </div>
    </section>
  )
}

export default SpendingMonth