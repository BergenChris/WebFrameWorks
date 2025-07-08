import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'


const Loading = () => {
  return(
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  )
}

function App() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      {loading ? <Loading /> :
      <button onClick={() => startLoading()} >
        {loading ? 'Stop Loading' : 'Start Loading'}
      </button>}
    </div>
  );
}

export default App
