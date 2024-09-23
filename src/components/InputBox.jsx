function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false,
    selectedCurrency = "",
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    value={amount}
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                    disabled = {amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                    value={selectedCurrency}
                >

                    {
                        currencyOptions.map((currency) => 
                            (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            )
                        )
                    }                    
                        

                </select>
            </div>
        </div>
    );
}

export default InputBox;