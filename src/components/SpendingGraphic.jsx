const SpendingGraphic = ({ day, amount, maxAmount }) => {
  return (
    <section className="flex flex-col justify-end items-center gap-1">
      <div className="relative mx-auto w-full group mt-6" style={{ height: `calc(${amount} * 3.2px)` }}>
        <p className="absolute z-10 top-[-2.25rem] left-[-3px] bg-black text-xs text-very-pale-orange font-bold py-2 px-1 rounded-lg hidden group-hover:block xs:text-sm xs:px-2 xs:top-[-2.6rem] xs:left-[-6px]">
          ${amount}
        </p>

        <div className={`${amount === maxAmount ? "bg-cyan" : "bg-soft-red"} h-full px-5 mx-auto rounded-md cursor-pointer hover:opacity-80 xs:px-6`}></div>
      </div>
      
      <p className="text-medium-brown">{day}</p>
    </section>
  )
}

export default SpendingGraphic