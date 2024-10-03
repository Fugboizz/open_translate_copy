import React, { ChangeEvent, useRef } from "react";

function ImageTranslate() {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("File uploaded:", files);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const items = event.clipboardData.items;
    for (const item of items) {
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file) {
          console.log("File pasted:", file);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-2 min-h-[170px] border rounded-sm focus:outline-none p-3">
      <div className="">
        <div className="flex justify-center p-5">
          <img
            src="//ssl.gstatic.com/translate/drag_and_drop.png"
            alt="drag and drop"
            className="w-[280px]"
          />
        </div>
        <p className="text-center text-2xl p-3">Kéo và thả</p>
      </div>
      <div className="text-center p-5">
        <p className="p-4">Hoặc chọn một tệp</p>
        <div>
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block bg-blue-500 text-white py-2 px-20 rounded"
          >
            Duyệt qua các tệp
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        <div
          onPaste={handlePaste}
          className=" cursor-pointer inline-block bg-white text-blue-500 py-2 px-11 rounded border mt-5"
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
            Dán tệp từ bảng nhớ tạm
          </div>
        </div>
        <p className="mt-10 text-base">
          Các loại tệp được hỗ trợ: .jpg, .jpeg, .png.
        </p>
      </div>
    </div>
  );
}

export default ImageTranslate;
