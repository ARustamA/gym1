import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 12.0384C35.5 11.7069 35.3683 11.389 35.1339 11.1546C34.8995 10.9201 34.5816 10.7884 34.25 10.7884H4.76754L12.635 2.92344C12.7513 2.80722 12.8434 2.66925 12.9063 2.5174C12.9692 2.36555 13.0016 2.2028 13.0016 2.03844C13.0016 1.87408 12.9692 1.71133 12.9063 1.55949C12.8434 1.40764 12.7513 1.26966 12.635 1.15344C12.5188 1.03722 12.3808 0.945034 12.229 0.882136C12.0771 0.819238 11.9144 0.786865 11.75 0.786865C11.5857 0.786865 11.4229 0.819238 11.2711 0.882136C11.1192 0.945034 10.9813 1.03722 10.865 1.15344L0.865037 11.1534C0.748629 11.2696 0.656272 11.4075 0.593256 11.5594C0.53024 11.7112 0.497803 11.874 0.497803 12.0384C0.497803 12.2029 0.53024 12.3657 0.593256 12.5175C0.656272 12.6694 0.748629 12.8073 0.865037 12.9234L10.865 22.9234C10.9813 23.0397 11.1192 23.1319 11.2711 23.1948C11.4229 23.2577 11.5857 23.29 11.75 23.29C11.9144 23.29 12.0771 23.2577 12.229 23.1948C12.3808 23.1319 12.5188 23.0397 12.635 22.9234C12.7513 22.8072 12.8434 22.6693 12.9063 22.5174C12.9692 22.3656 13.0016 22.2028 13.0016 22.0384C13.0016 21.8741 12.9692 21.7113 12.9063 21.5595C12.8434 21.4076 12.7513 21.2697 12.635 21.1534L4.76754 13.2884H34.25C34.5816 13.2884 34.8995 13.1567 35.1339 12.9223C35.3683 12.6879 35.5 12.37 35.5 12.0384Z" fill="white" />
        </svg>

      </span>
      <span className="next" onClick={nextSlide}>
        <svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499966 11.5C0.499966 11.8315 0.63166 12.1495 0.866081 12.3839C1.1005 12.6183 1.41845 12.75 1.74997 12.75L31.2325 12.75L23.365 20.615C23.2487 20.7312 23.1566 20.8692 23.0937 21.021C23.0308 21.1729 22.9984 21.3356 22.9984 21.5C22.9984 21.6644 23.0308 21.8271 23.0937 21.979C23.1566 22.1308 23.2487 22.2688 23.365 22.385C23.4812 22.5012 23.6192 22.5934 23.771 22.6563C23.9229 22.7192 24.0856 22.7516 24.25 22.7516C24.4143 22.7516 24.5771 22.7192 24.7289 22.6563C24.8808 22.5934 25.0187 22.5012 25.135 22.385L35.135 12.385C35.2514 12.2689 35.3437 12.131 35.4067 11.9791C35.4698 11.8272 35.5022 11.6644 35.5022 11.5C35.5022 11.3356 35.4698 11.1728 35.4067 11.0209C35.3437 10.8691 35.2514 10.7311 35.135 10.615L25.135 0.615004C25.0187 0.498785 24.8808 0.406593 24.7289 0.343697C24.5771 0.280798 24.4143 0.248426 24.25 0.248426C24.0856 0.248426 23.9229 0.280798 23.771 0.343697C23.6192 0.406593 23.4812 0.498785 23.365 0.615004C23.2487 0.731224 23.1566 0.869196 23.0937 1.02105C23.0308 1.17289 22.9984 1.33565 22.9984 1.5C22.9984 1.66436 23.0308 1.82712 23.0937 1.97896C23.1566 2.13081 23.2487 2.26879 23.365 2.385L31.2325 10.25L1.74997 10.25C1.41845 10.25 1.1005 10.3817 0.866081 10.6161C0.63166 10.8505 0.499966 11.1685 0.499966 11.5Z" fill="#F7931E" />
        </svg>

      </span>
    </div>
  );
}

export default Arrows;
