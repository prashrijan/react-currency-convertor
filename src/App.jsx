
import { useState } from 'react';
import InputBox from './components/index';
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('AUD')
  const [to, setTo] = useState('NPR')


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  console.log(options);
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
      <div className='h-screen w-full flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600' id='container'>
        <div className='w-1/2 h-full flex items-center justify-center' id="text-container">
          <div className='w-3/4 text-white'>
            <h1 className='text-4xl font-bold leading-tight tracking-wide sm:text-5xl text-white'>Currency Converter</h1>

            <p className='text-lg leading-normal my-6 sm:text-xl'>
              Effortlessly convert currencies with real-time rates. Our user-friendly tool supports a wide range of global currencies, making it perfect for travelers, businesses, and anyone dealing with international finances. Stay informed and make smart financial decisions with our accurate and up-to-date currency converter.
            </p>

            <button className='border-2 border-white px-6 py-3 rounded-xl text-white font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:shadow-lg hover:scale-105'>
              Explore More
            </button>
          </div>
        </div>
        <div className='w-1/2 h-full flex items-center justify-center' id="form-container">
          <div className='w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <h2 className='text-3xl font-bold mb-6 text-center text-white shadow-text'>Currency Converter</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                  <InputBox 
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectedCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                    />
              </div>
              <div className="relative w-full h-0.5">
                <button 
                  onClick={swap}
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-3 py-1 text-base font-bold shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out'
                >
                  
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisable = {true}
                />
              </div>

              <button 
                type='submit' 
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default App
