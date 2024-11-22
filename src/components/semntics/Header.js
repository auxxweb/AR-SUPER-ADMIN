import React from 'react'

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between p-4" style={{ background: "linear-gradient(135deg, rgb(0 0 0), rgb(196 195 191))" }}>
      <button
        className="text-gray-200 focus:outline-none lg:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8461 0.0775834C21.8461 0.0775834 11.8913 -1.40491 4.03832 8.59101C4.03832 8.59101 0.191035 13.7159 0.111811 19.7725C0.111811 19.7725 -1.03823 26.888 4.03832 34.1307C4.03832 34.1307 10.0671 43.4487 21.4894 42.9831C21.4894 42.9831 28.3508 42.8985 34.2605 37.2229C34.2605 37.2229 39.8528 32.098 40.3287 25.3635C40.3287 25.3635 36.5606 32.2672 30.8099 33.7923C30.8099 33.7923 24.3052 36.7147 17.8803 32.9878C17.8803 32.9878 14.6678 31.336 12.5655 27.8203C12.5655 27.8203 15.5797 30.192 18.5146 30.4463C18.5146 30.4463 25.376 31.6324 30.175 26.5922C30.175 26.5922 33.3083 24.3471 35.0139 18.3331C35.0139 18.3331 35.4504 16.9352 35.4105 15.2835C35.4105 15.2835 32.4358 21.9335 25.9316 22.1452C25.9316 22.1452 20.2202 22.8652 16.6904 17.8249C16.6904 17.8249 15.9763 17.3588 14.8661 13.6318C14.8661 13.6318 13.5178 7.32085 17.9201 2.70416C17.9201 2.70416 20.3792 0.374525 21.8467 0.0781363L21.8461 0.0775834Z" fill="white"/>
      </svg> */}
      {/* <img style={()}/> */}
      <img style={{width:"43px",height:"43px"}} src="/speed-dinning-logo-removebg-preview.png" alt='logo' />

      <div className="flex items-center">
      <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-l-md border border-[#F39B00] focus:outline-none bg-[#F7CA7C] text-white placeholder-white"
        />

        <button className="flex items-center p-3 bg-[#F39B00] text-white rounded-r-md">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.975 13.8438C16.2563 14.1562 16.2563 14.625 15.9438 14.9062L15.0688 15.7812C14.7875 16.0938 14.3188 16.0938 14.0063 15.7812L10.9125 12.6875C10.7563 12.5312 10.6938 12.3438 10.6938 12.1562V11.625C9.56875 12.5 8.19375 13 6.69375 13C3.1 13 0.19375 10.0938 0.19375 6.5C0.19375 2.9375 3.1 0 6.69375 0C10.2563 0 13.1938 2.9375 13.1938 6.5C13.1938 8.03125 12.6625 9.40625 11.8188 10.5H12.3188C12.5063 10.5 12.6938 10.5938 12.85 10.7188L15.975 13.8438ZM6.69375 10.5C8.88125 10.5 10.6938 8.71875 10.6938 6.5C10.6938 4.3125 8.88125 2.5 6.69375 2.5C4.475 2.5 2.69375 4.3125 2.69375 6.5C2.69375 8.71875 4.475 10.5 6.69375 10.5Z" fill="white"/>
          </svg>
        </button>

        <button className="flex bg-[#F39B00] text-white rounded-md items-center p-2 ml-4">
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.66667 19.6667V21C7.66667 22.0609 8.08809 23.0783 8.83824 23.8284C9.58839 24.5786 10.6058 25 11.6667 25C12.7275 25 13.745 24.5786 14.4951 23.8284C15.2452 23.0783 15.6667 22.0609 15.6667 21V19.6667M9 3.66667C9 2.95942 9.28095 2.28115 9.78105 1.78105C10.2811 1.28095 10.9594 1 11.6667 1C12.3739 1 13.0522 1.28095 13.5523 1.78105C14.0524 2.28115 14.3333 2.95942 14.3333 3.66667C15.8645 4.3907 17.1699 5.51777 18.1094 6.92707C19.0489 8.33636 19.5873 9.97476 19.6667 11.6667V15.6667C19.767 16.4956 20.0606 17.2894 20.5238 17.9842C20.9869 18.6789 21.6068 19.2552 22.3333 19.6667H1C1.72658 19.2552 2.34641 18.6789 2.80958 17.9842C3.27275 17.2894 3.56633 16.4956 3.66667 15.6667V11.6667C3.74608 9.97476 4.2844 8.33636 5.22393 6.92707C6.16347 5.51777 7.46879 4.3907 9 3.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
