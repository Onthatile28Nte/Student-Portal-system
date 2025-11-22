// Download Functionality

  const uploads = JSON.parse(localStorage.getItem("userUploads")) || [];
  const fileSelect1 = document.querySelector(".download-option-1 input");

  
  fileSelect1.outerHTML = `
    <select id="userFileSelect" class="download-select">
      <option value="">-- Select Uploaded File --</option>
      ${uploads
        .map((file, index) => `<option value="${index}">${file.fileName}</option>`)
        .join("")}
    </select>
  `;


  document.querySelector(".d-w-buttons:first-child").addEventListener("click", () => {
    const select = document.getElementById("userFileSelect");
    const selectedIndex = select.value;

    if (selectedIndex === "") {
      alert("Please select a file to download.");
      return;
    }

    const file = uploads[selectedIndex];

    const a = document.createElement("a");
    a.href = file.fileData;
    a.download = file.fileName;
    a.click();
  });


  document.querySelector(".d-w-buttons:last-child").addEventListener("click", () => {
    const select = document.getElementById("userFileSelect");
    const selectedIndex = select.value;

    if (selectedIndex === "") {
      alert("Please select a file to view.");
      return;
    }

    const file = uploads[selectedIndex];
    window.open(file.fileData, "_blank");
  });