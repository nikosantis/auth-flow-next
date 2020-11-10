export default function Loader ({ children }) {
  return (
    <div className='loading-dots'>
      {children}
      <div className='dot' />
      <div className='dot' />
      <div className='dot' />

      <style jsx>
        {`
          @keyframes dot1 {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes dot2 {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(24px, 0);
            }
          }
          @keyframes dot3 {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(0);
            }
          }
          .loading-dots {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .dot {
            position: absolute;
            top: 33px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: tomato;
            animation-timing-function: cubic-bezier(0, 1, 1, 0)
          }
          .dot:nth-child(1) {
            left: 8px;
            animation: dot1 0.6s infinite;
          }
          .dot:nth-child(2) {
            left: 8px;
            animation: dot2 0.6s infinite;
          }
          .dot:nth-child(3) {
            left: 32px;
            animation: dot2 0.6s infinite;
          }
          .dot:nth-child(4) {
            left: 56px;
            animation: dot3 0.6s infinite;
          }
        `}
      </style>
    </div>
  )
}
