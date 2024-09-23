
import { useState } from 'react';
import InputBox from './components/index';
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('USD')
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
      <div className='h-screen w-full flex justify-center items-center bg-slate-700' id='container'>
        <div className='w-1/2 h-full flex items-center justify-center' id="text-container">
          <div className='w-3/4 text-white'>
            <h1 className='text-4xl leading-tight mb-4 sm:text-5xl'>Instant Currency Conversion at Your Fingertips</h1>

            <p className='text-lg leading-snug mb-4 sm:text-xl'>Stay ahead with real-time exchange rates and seamless conversions. Whether you're traveling, trading, or shopping globally, our currency converter ensures you're always getting the most accurate rates in just a few clicks. Fast, easy, and reliable.</p>

            <button className='border border-white px-4 py-2 rounded-3xl'>Explore More</button>
          </div>
        </div>
        <div className='w-1/2 h-full flex items-center justify-center' id="form-container">
          <div className='w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          
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
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 botrder-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                >
                  
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label="From"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisable = {true}
                />
              </div>

              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default App
