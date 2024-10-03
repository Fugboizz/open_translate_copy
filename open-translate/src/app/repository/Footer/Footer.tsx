const Footer = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="">
        <button className="border rounded-full p-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            className="TYVfy NMm5M"
          >
            <path d="M4 4v2.01C5.83 3.58 8.73 2 12.01 2 17.53 2 22 6.48 22 12s-4.47 10-9.99 10C6.48 22 2 17.52 2 12h2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C9.04 4 6.47 5.61 5.09 8H8v2H2V4h2z"></path>
            <path d="M13 12V6h-2v7l4.97 3.49 1.26-1.55z"></path>
          </svg>
        </button>
      </div>
      <div>
        <button className="border rounded-full p-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            className="TYVfy NMm5M"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Footer;
