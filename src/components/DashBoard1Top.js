import React from "react";

const DashBoard1Top = () => {
  return (
    <>
      <div className="flex space-x-8 my-4 overflow-x-scroll justify-center scrollbar-hide">
        <div
          style={{ width: "20rem" }}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between space-x-3">
            <h2 className="text-2xl font-bold">250</h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path d="M12 2L2 7h3v13h4V14h6v6h4V7h3L12 2z" fill="#F39B00" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-black font-semibold">Total Vendors</p>
          <p className="text-custom-orange flex items-center mt-4"></p>
        </div>

        <div
          style={{ width: "20rem" }}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between space-x-3">
            <h2 className="text-2xl font-bold">250</h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path
                  d="M3 3h7v7H3zm0 11h7v7H3zm11-11h7v7h-7zm0 11h7v7h-7z"
                  fill="#F39B00"
                />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-black font-semibold">Total Categories</p>
          <p className="text-custom-orange flex items-center mt-4"></p>
        </div>

        <div
          style={{ width: "20rem" }}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between space-x-3">
            <h2 className="text-2xl font-bold">250</h2>
            <div>
              <svg
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.25 29.25C16.5208 29.25 15.0471 28.5795 13.8288 27.2384C12.6104 25.8973 12.0008 24.2762 12 22.375C11.9992 20.4738 12.6088 18.8527 13.8288 17.5116C15.0487 16.1705 16.5225 15.5 18.25 15.5C19.9775 15.5 21.4517 16.1705 22.6725 17.5116C23.8933 18.8527 24.5025 20.4738 24.5 22.375C24.4975 24.2762 23.8879 25.8978 22.6713 27.2397C21.4546 28.5818 19.9808 29.2518 18.25 29.25ZM20.3438 25.6406L21.2188 24.6781L18.875 22.1V18.25H17.625V22.65L20.3438 25.6406ZM3.25 27.875C2.5625 27.875 1.97417 27.606 1.485 27.0679C0.995833 26.5298 0.750833 25.8822 0.75 25.125V5.875C0.75 5.11875 0.995 4.47158 1.485 3.9335C1.975 3.39542 2.56333 3.12592 3.25 3.125H8.46875C8.69792 2.32292 9.14583 1.66429 9.8125 1.14912C10.4792 0.633958 11.2083 0.375917 12 0.375C12.8333 0.375 13.5783 0.633042 14.235 1.14912C14.8917 1.66521 15.3342 2.32383 15.5625 3.125H20.75C21.4375 3.125 22.0263 3.3945 22.5163 3.9335C23.0063 4.4725 23.2508 5.11967 23.25 5.875V14.4688C22.875 14.1708 22.4792 13.9187 22.0625 13.7125C21.6458 13.5062 21.2083 13.3229 20.75 13.1625V5.875H18.25V10H5.75V5.875H3.25V25.125H9.875C10.0208 25.6292 10.1875 26.1104 10.375 26.5687C10.5625 27.0271 10.7917 27.4625 11.0625 27.875H3.25ZM12 5.875C12.3542 5.875 12.6513 5.743 12.8913 5.479C13.1313 5.215 13.2508 4.88867 13.25 4.5C13.2492 4.11133 13.1292 3.785 12.89 3.521C12.6508 3.257 12.3542 3.125 12 3.125C11.6458 3.125 11.3492 3.257 11.11 3.521C10.8708 3.785 10.7508 4.11133 10.75 4.5C10.7492 4.88867 10.8692 5.21546 11.11 5.48037C11.3508 5.74529 11.6475 5.87683 12 5.875Z"
                  fill="#F39B00"
                />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-black font-semibold">Total Plans</p>
          <p className="text-custom-orange flex items-center mt-4"></p>
        </div>

        <div
          style={{ width: "20rem" }}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between space-x-3">
            <h2 className="text-2xl font-bold">250</h2>
            <div>
              <svg
                width="25"
                height="34"
                viewBox="0 0 30 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.3065 28.5905C21.4034 28.6345 21.5004 28.65 21.597 28.65C21.8729 28.65 22.1337 28.5008 22.2604 28.24C23.7216 25.2955 24.072 22.686 23.304 20.4795C22.6553 18.6233 21.373 17.5713 20.6647 17.1173C20.2996 20.1144 19.39 23.4244 17.9362 26.9805C17.9137 27.04 17.884 27.0999 17.8542 27.1521L21.3065 28.5905Z"
                  fill="#F39B00"
                />
                <path
                  d="M0.395907 20.4788C-0.371803 22.6854 -0.0217598 25.2948 1.43219 28.2394C1.56626 28.5002 1.82744 28.6493 2.10253 28.6493C2.20028 28.6493 2.29726 28.6335 2.39385 28.5898L5.84561 27.151C5.81586 27.0988 5.78611 27.0393 5.7637 26.9794C4.30982 23.4079 3.39293 20.106 3.02785 17.1089C2.31191 17.5791 1.04461 18.6292 0.395955 20.4787L0.395907 20.4788Z"
                  fill="#F39B00"
                />
                <path
                  d="M16.8695 5.09347C14.8878 1.82904 12.4216 0.222547 12.2489 0.111274C12.0028 -0.0370912 11.6972 -0.0370912 11.451 0.111274C11.2787 0.222547 8.81064 1.82825 6.82739 5.09268C8.35783 5.91718 10.0748 6.36654 11.844 6.36654C13.6179 6.36692 15.3375 5.91757 16.8695 5.09347H16.8695Z"
                  fill="#F39B00"
                />
                <path
                  d="M11.8499 16.0497C12.8572 16.0497 13.6762 15.2306 13.6762 14.2233C13.6762 13.216 12.8568 12.3961 11.8499 12.3961C10.8426 12.3961 10.0227 13.2164 10.0227 14.2233C10.0227 15.2306 10.8426 16.0497 11.8499 16.0497Z"
                  fill="#F39B00"
                />
                <path
                  d="M4.33179 14.2169C4.33179 17.7433 5.27839 21.8434 7.14221 26.4205C7.2531 26.6963 7.52974 26.8826 7.82725 26.8826H15.8645C16.1693 26.8826 16.446 26.6963 16.5568 26.4205C18.4207 21.8432 19.3607 17.7353 19.3607 14.2169C19.3607 11.0522 18.6011 8.46622 17.5842 6.40039C15.8344 7.34351 13.8686 7.85773 11.8432 7.85773C9.82137 7.85773 7.8586 7.3427 6.11027 6.3988C5.09219 8.46474 4.33187 11.0518 4.33187 14.2169H4.33179ZM11.8501 10.9054C13.6796 10.9054 15.1675 12.3933 15.1675 14.2228C15.1675 16.0522 13.6796 17.5409 11.8501 17.5409C10.0207 17.5409 8.532 16.0522 8.532 14.2228C8.532 12.3937 10.0207 10.9054 11.8501 10.9054Z"
                  fill="#F39B00"
                />
                <path
                  d="M7.82794 28.3739C7.78313 28.3739 7.74604 28.3739 7.70122 28.3666C7.50727 29.0377 7.38054 29.895 7.44777 30.9236C7.46283 31.1322 7.56715 31.3189 7.73097 31.4305C7.90252 31.5572 8.11116 31.5947 8.31245 31.5422L9.16981 31.3185C9.1474 32.8542 9.40085 35.7617 11.4587 37.1557C11.5781 37.2303 11.7121 37.2759 11.8462 37.2759C11.988 37.2759 12.1221 37.2303 12.2337 37.1557C14.2989 35.7617 14.5523 32.8543 14.5299 31.3185L15.3873 31.5422C15.5886 31.5943 15.7972 31.5572 15.9688 31.4305C16.133 31.3189 16.2373 31.1322 16.252 30.9236C16.3192 29.8947 16.1925 29.0374 15.9985 28.3666C15.9537 28.3739 15.9089 28.3739 15.8644 28.3739H7.82794Z"
                  fill="#F39B00"
                />
                <path
                  d="M23.106 12.7729C23.4696 13.1214 23.8939 13.379 24.3485 13.5457C24.8182 13.7123 25.2728 13.8032 25.7121 13.8032C25.8182 13.8032 25.9242 13.7881 26.0304 13.7729C26.1365 13.7578 26.2425 13.7123 26.3486 13.6668C26.4395 13.6062 26.5153 13.5456 26.5758 13.4547C26.6364 13.3638 26.6667 13.2577 26.6667 13.1213C26.6667 12.8789 26.5304 12.6971 26.2425 12.5607C25.9546 12.4244 25.6212 12.288 25.2273 12.1516C24.8788 12.0304 24.5302 11.894 24.1514 11.7577C23.7878 11.6061 23.4544 11.4243 23.1363 11.1819C22.8332 10.9546 22.5757 10.6667 22.3787 10.3334C22.1817 10 22.0757 9.59091 22.0757 9.1061C22.0757 8.68185 22.1514 8.30305 22.2878 7.96971C22.4241 7.63636 22.6211 7.34845 22.8636 7.12122C23.106 6.87877 23.3485 6.69697 23.6666 6.54542C23.9849 6.39386 24.3484 6.28785 24.6515 6.21208L24.6513 5H26.4696V6.18185C26.9241 6.24242 27.3484 6.36365 27.7575 6.53032C28.1667 6.697 28.5455 6.93945 28.8939 7.25759L27.5605 9.01525C27.303 8.80312 26.9999 8.62132 26.6666 8.50011C26.3332 8.37889 26.0151 8.31832 25.712 8.31832C25.5908 8.31832 25.4695 8.31832 25.3332 8.33343C25.1968 8.34854 25.0756 8.37888 24.9544 8.42432C24.8332 8.46977 24.7423 8.54555 24.6665 8.63645C24.5907 8.72734 24.5452 8.84857 24.5452 9.01525C24.5452 9.15159 24.5907 9.2577 24.6665 9.34859C24.7423 9.43948 24.8483 9.51527 24.9998 9.59105C25.1362 9.66683 25.3028 9.72739 25.4695 9.80317C25.6513 9.86373 25.8332 9.9244 26.0301 9.98496C26.3634 10.0911 26.7119 10.2274 27.0907 10.3638C27.4544 10.5001 27.7878 10.6971 28.1059 10.9244C28.4089 11.1516 28.6665 11.4395 28.8635 11.7881C29.0605 12.1365 29.1665 12.5608 29.1665 13.076C29.1665 13.47 29.0907 13.8185 28.9393 14.1367C28.7877 14.4549 28.5908 14.7276 28.3483 14.9548C28.1059 15.182 27.818 15.3791 27.4846 15.5457C27.1513 15.6973 26.7574 15.8184 26.4543 15.8942L26.4544 17.2732H24.6817V15.9398C24.2271 15.8792 23.6058 15.7428 23.0756 15.5306C22.5452 15.3185 22.0908 15.0155 21.6665 14.6064L23.106 12.7729Z"
                  fill="#F39B00"
                />
                <path
                  d="M2.4662 35.9849C2.66825 36.1785 2.90394 36.3216 3.15649 36.4142C3.41743 36.5068 3.66997 36.5573 3.91406 36.5573C3.97301 36.5573 4.03191 36.5489 4.09086 36.5405C4.14982 36.5321 4.20871 36.5068 4.26767 36.4815C4.31816 36.4479 4.36026 36.4142 4.39391 36.3637C4.42755 36.3132 4.44441 36.2542 4.44441 36.1785C4.44441 36.0438 4.36866 35.9428 4.20871 35.867C4.04876 35.7913 3.86356 35.7155 3.64472 35.6397C3.45112 35.5724 3.25747 35.4966 3.04703 35.4209C2.84499 35.3367 2.65978 35.2357 2.48304 35.101C2.3147 34.9748 2.17159 34.8148 2.06215 34.6296C1.9527 34.4444 1.89381 34.2171 1.89381 33.9478C1.89381 33.7121 1.93591 33.5017 2.01165 33.3165C2.0874 33.1313 2.19684 32.9713 2.33154 32.8451C2.46624 32.7104 2.60094 32.6094 2.77769 32.5252C2.95449 32.441 3.15647 32.3821 3.32481 32.34L3.32475 31.6666H4.33487V32.3232C4.58742 32.3569 4.8231 32.4242 5.05041 32.5168C5.2777 32.6094 5.48815 32.7441 5.68174 32.9208L4.94096 33.8973C4.79787 33.7795 4.62952 33.6785 4.44433 33.6111C4.25914 33.5438 4.08239 33.5101 3.91399 33.5101C3.84664 33.5101 3.7793 33.5101 3.70355 33.5185C3.6278 33.5269 3.56046 33.5438 3.49311 33.569C3.42576 33.5943 3.37526 33.6364 3.33315 33.6869C3.29105 33.7374 3.2658 33.8047 3.2658 33.8973C3.2658 33.9731 3.29105 34.032 3.33315 34.0825C3.37525 34.133 3.43415 34.1751 3.51834 34.2172C3.59409 34.2593 3.68669 34.293 3.77928 34.3351C3.88028 34.3687 3.98132 34.4024 4.09072 34.436C4.27591 34.495 4.46951 34.5707 4.67995 34.6465C4.88199 34.7222 5.0672 34.8317 5.24394 34.9579C5.41228 35.0842 5.55538 35.2441 5.66483 35.4378C5.77428 35.6314 5.83317 35.8671 5.83317 36.1533C5.83317 36.3722 5.79107 36.5658 5.70693 36.7425C5.62273 36.9193 5.51333 37.0708 5.37863 37.1971C5.24394 37.3233 5.08398 37.4328 4.89879 37.5254C4.7136 37.6096 4.49475 37.6769 4.32641 37.719L4.32647 38.4851H3.34159V37.7443C3.08905 37.7106 2.7439 37.6348 2.44933 37.517C2.15467 37.3991 1.9022 37.2308 1.6665 37.0035L2.4662 35.9849Z"
                  fill="#F39B00"
                />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-black font-semibold">Total Payments</p>
          <p className="text-custom-orange flex items-center mt-4"></p>
        </div>
      </div>
    </>
  );
};

export default DashBoard1Top;
