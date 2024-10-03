function WebsTranslate() {
  return (
    <div className="flex justify-center items-center min-h-[170px] border rounded-sm focus:outline-none p-3">
      <label
        htmlFor="name"
        className="text-gray-700 font-semibold w-full flex justify-center gap-3"
      >
        <input
          id="name"
          placeholder="Trang Web"
          type="text"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2  ml-2"
        />
        <button className="rounded-full bg-blue-500 flex justify-center items-center w-10 h-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </label>
    </div>
  );
}

export default WebsTranslate;
