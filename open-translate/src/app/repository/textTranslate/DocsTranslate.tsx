function DocsTranslate() {
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
        <div className="mt-5">
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

        <p className="mt-10 text-base">
          Các loại tệp được hỗ trợ: .jpg, .jpeg, .png.
        </p>
      </div>
    </div>
  );
}
export default DocsTranslate;
