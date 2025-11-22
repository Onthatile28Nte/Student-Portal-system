document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const spanLogin = document.getElementById('spanLogin');
  const spanPassword = document.getElementById('spanPassword');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('usersDB')) || [];

  
    spanLogin.innerText = '';
    spanPassword.innerText = '';

    if (username.value.trim() === '') {
      spanLogin.innerText = 'You have not filled in this field';
      return;
    }

    if (password.value.trim() === '') {
      spanPassword.innerText = 'Please enter your password';
      return;
    }


    const user = users.find(
      (u) => u.username === username.value && u.password === password.value
    );

    if (user) {
      localStorage.setItem("loggedInUserName", user.username);

      alert('Login successful!');
      
      
      window.location.href = "/Admin/dashboard.html";
    } else {
      spanPassword.innerText = 'Invalid username or password';
    }
  });
});

// Upload Functionality
const uploadBtn = document.querySelector(".upload-button");
  const fileInput = document.querySelector(".file-selction-input");
  const typeInput = document.querySelector(".file-type-input");

  const progressContainer = document.querySelector(".progress-container");
  const progressBar = document.querySelector(".progress-bar");
  const uploadStatus = document.getElementById("uploadStatus");

  uploadBtn.addEventListener("click", () => {
    if (!fileInput.files.length) {
      alert("Please select a file.");
      return;
    }

    const file = fileInput.files[0];
    const fileType = typeInput.value.trim() || "Unknown";

    progressContainer.style.display = "block";
    progressBar.style.width = "0%";
    uploadStatus.textContent = "Starting upload...";

  
    const fakeUpload = setInterval(() => {
      let currentWidth = parseFloat(progressBar.style.width);

      if (currentWidth >= 100) {
        clearInterval(fakeUpload);
        uploadStatus.textContent = "Saving file...";

        
        const reader = new FileReader();
        reader.onload = function (event) {
          let uploads = JSON.parse(localStorage.getItem("userUploads")) || [];

          uploads.push({
            fileName: file.name,
            fileType: fileType,
            fileData: event.target.result
          });

          localStorage.setItem("userUploads", JSON.stringify(uploads));

          uploadStatus.textContent = "Upload complete!";
          alert("File uploaded successfully!");

          
          fileInput.value = "";
          typeInput.value = "";
        };

        reader.readAsDataURL(file);
      } else {
        progressBar.style.width = currentWidth + 20 + "%";
        uploadStatus.textContent = `Uploading... ${currentWidth + 20}%`;
      }
    }, 400);
  });

  // Resources Functionality

const cards = document.querySelectorAll(".download-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#e8e8e8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "#f5f5f5";
  });
});

const downloadLinks = document.querySelectorAll(".download-card a");

downloadLinks.forEach(link => {
  link.addEventListener("click", () => {
    alert("Your download will begin shortly.");
  });
});


let counter = 0;


const counterButton = document.createElement("button");
counterButton.textContent = "Count Resources Viewed";
counterButton.style.margin = "20px";
counterButton.style.padding = "10px 15px";
counterButton.style.border = "none";
counterButton.style.background = "#0d6efd";
counterButton.style.color = "white";
counterButton.style.borderRadius = "6px";
counterButton.style.cursor = "pointer";


document.body.appendChild(counterButton);


counterButton.addEventListener("click", () => {
  counter++;
  alert("Resources viewed: " + counter);
});

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