import Loader from './loader'

export default function WideLoader ({ children }) {
  return (
    <div className='wide-loader'>
      <Loader>{children}</Loader>
      <style jsx>
        {`
          .wide-loader {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  )
}
