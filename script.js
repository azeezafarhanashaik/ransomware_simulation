
document.addEventListener('DOMContentLoaded', () => {
  renderHomePage();
});

function renderHomePage() {
  document.querySelector('#app').innerHTML = `
    <div class="home-container">
      <div class="header-section">
        <h1>Ransomware Attack Simulation</h1>
        <p class="subtitle">A Safe Educational Demonstration</p>
      </div>

      <div class="disclaimer">
        <h2>⚠️ Educational Purpose Only ⚠️</h2>
        <p>This is a <strong>safe simulation</strong> designed to demonstrate how ransomware appears to victims. No actual encryption or malicious activity occurs.</p>
        <p>Understanding how ransomware works is crucial for cybersecurity awareness and prevention.</p>
      </div>
      
      <div class="features">
        <h2>Interactive Features</h2>
        <ul>
          <li>Interactive Windows-style ransomware interface</li>
          <li>Real-time file encryption visualization</li>
          <li>Dynamic countdown timer simulation</li>
          <li>Secure payment system demonstration</li>
          <li>Educational insights into cybersecurity</li>
        </ul>
      </div>

      <div class="info-section">
        <h2>Why This Simulation?</h2>
        <p>Ransomware attacks have become increasingly common, targeting individuals, businesses, and organizations worldwide. This simulation helps you understand:</p>
        <ul>
          <li>How ransomware attacks appear to victims</li>
          <li>Common tactics used by attackers</li>
          <li>The importance of regular backups</li>
          <li>Best practices for prevention</li>
        </ul>
      </div>
      
      <button class="start-button" onclick="startSimulation()">Launch Simulation</button>
    </div>
    
    <div class="taskbar">
      <div class="taskbar-icon">🏠</div>
      <div class="taskbar-icon">🔍</div>
      <div class="taskbar-icon">📁</div>
      <div class="taskbar-icon">🌐</div>
      <div class="taskbar-icon">⚙️</div>
    </div>
  `;
}

function startSimulation() {
  renderRansomwareInterface();
  initTimer();
  initFileSystem();
  initEncryptionAnimation();
}

function renderRansomwareInterface() {
  document.querySelector('#app').innerHTML = `
    <div class="ransomware-container">
      <header class="ransomware-header">
        <div class="warning-icon">⚠️</div>
        <h1 class="glitch-text">ATTENTION! YOUR FILES HAVE BEEN ENCRYPTED</h1>
        <div class="warning-icon">⚠️</div>
      </header>
      
      <div class="ransomware-content">
        <div class="main-message">
          <p>All your important files have been encrypted with military-grade encryption algorithm.</p>
          <p>Your personal ID: <span class="highlight-text">ABC123XYZ987-45D3F</span></p>
          <p>To recover your files, you need to pay a ransom of <span class="highlight-text">$500</span> in Bitcoin.</p>
        </div>
        
        <div class="timer-section">
          <h2>TIME REMAINING TO PAY:</h2>
          <div class="countdown-timer" id="countdown-timer">
            <div class="time-unit">
              <span class="time-value" id="hours">23</span>
              <span class="time-label">HOURS</span>
            </div>
            <div class="time-separator">:</div>
            <div class="time-unit">
              <span class="time-value" id="minutes">59</span>
              <span class="time-label">MINUTES</span>
            </div>
            <div class="time-separator">:</div>
            <div class="time-unit">
              <span class="time-value" id="seconds">59</span>
              <span class="time-label">SECONDS</span>
            </div>
          </div>
          <p class="warning-text">AFTER TIME EXPIRES, THE PRICE WILL BE DOUBLED</p>
        </div>
        
        <div class="payment-section">
          <h2>PAYMENT INFORMATION</h2>
          <div class="crypto-address">
            <p>Bitcoin Address:</p>
            <div class="address-box">
              <span id="btc-address">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</span>
              <button id="copy-address" class="copy-btn" onclick="copyBitcoinAddress()">COPY</button>
            </div>
          </div>
          
          <div class="instructions">
            <h3>HOW TO BUY BITCOIN:</h3>
            <ol>
              <li>Register at a Bitcoin exchange</li>
              <li>Buy required amount of Bitcoin</li>
              <li>Send payment to the address above</li>
              <li>Click the "I PAID" button below</li>
            </ol>
            <button id="paid-button" class="action-button" onclick="handlePaidButton()">I PAID</button>
          </div>
        </div>
        
        <div class="file-section">
          <h2>YOUR ENCRYPTED FILES:</h2>
          <div class="file-list" id="file-list"></div>
        </div>
        
        <div class="console-section">
          <div class="console" id="console">
            <div class="console-line">> Encryption process completed.</div>
            <div class="console-line">> 1,248 files have been encrypted.</div>
            <div class="console-line">> RSA-2048 encryption algorithm used.</div>
            <div class="console-line">> Personal decryption key generated.</div>
            <div class="console-line">> Waiting for payment confirmation...</div>
            <div class="console-line blink-cursor">> _</div>
          </div>
        </div>
        
        <div class="warning-footer">
          <p>DO NOT ATTEMPT TO DECRYPT YOUR FILES WITH ANY SOFTWARE AS IT WILL CAUSE PERMANENT DATA LOSS</p>
          <p>DO NOT RENAME THE ENCRYPTED FILES</p>
          <p>DO NOT CONTACT LAW ENFORCEMENT</p>
        </div>
      </div>
    </div>
  `;
}

function initTimer() {
  let hours = 23;
  let minutes = 59;
  let seconds = 59;
  
  const timerInterval = setInterval(() => {
    seconds--;
    
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      
      if (minutes < 0) {
        minutes = 59;
        hours--;
        
        if (hours < 0) {
          clearInterval(timerInterval);
          handleTimerExpired();
          return;
        }
      }
    }
    
    updateTimerDisplay(hours, minutes, seconds);
  }, 1000);
}

function updateTimerDisplay(hours, minutes, seconds) {
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function handleTimerExpired() {
  const mainMessage = document.querySelector('.main-message');
  if (mainMessage) {
    const paragraphs = mainMessage.querySelectorAll('p');
    if (paragraphs.length >= 3) {
      paragraphs[2].innerHTML = 'To recover your files, you need to pay a ransom of <span class="highlight-text">$1,000</span> in Bitcoin.';
    }
  }
  
  const warningText = document.querySelector('.warning-text');
  if (warningText) {
    warningText.textContent = 'TIME EXPIRED! PRICE DOUBLED!';
    warningText.style.color = 'var(--error)';
    warningText.style.fontSize = '1.2rem';
  }
  
  addConsoleMessage('> Timer expired. Ransom amount doubled to $1,000.');
}

function initFileSystem() {
  const fileList = document.getElementById('file-list');
  const files = [
    'C:/Users/Documents/Financial/tax_return_2024.xlsx.locked',
    'C:/Users/Documents/Personal/family_photos.zip.locked',
    'C:/Users/Documents/Work/project_presentation.pptx.locked',
    'C:/Users/Pictures/vacation_2023/IMG001.jpg.locked',
    'C:/Users/Documents/important_passwords.txt.locked',
    'C:/Users/Downloads/bank_statement_august.pdf.locked',
    'C:/Users/Documents/Work/client_database.xlsx.locked',
    'C:/Users/Documents/Personal/medical_records.pdf.locked'
  ];
  
  fileList.innerHTML = files.map(file => `
    <div class="file-item">
      ${file.replace('.locked', '')} <span class="encrypted-extension">.locked</span>
    </div>
  `).join('');
  
  setInterval(addNewEncryptedFile, 12000);
}

function addNewEncryptedFile() {
  const fileList = document.getElementById('file-list');
  const fileTypes = ['docx', 'pdf', 'jpg', 'xlsx', 'txt'];
  const type = fileTypes[Math.floor(Math.random() * fileTypes.length)];
  const fileName = `file_${Math.floor(Math.random() * 1000)}.${type}.locked`;
  
  const fileItem = document.createElement('div');
  fileItem.className = 'file-item';
  fileItem.innerHTML = `C:/Users/Documents/${fileName.replace('.locked', '')} <span class="encrypted-extension">.locked</span>`;
  
  fileList.insertBefore(fileItem, fileList.firstChild);
  
  if (fileList.children.length > 10) {
    fileList.removeChild(fileList.lastChild);
  }
  
  addConsoleMessage(`> New file encrypted: ${fileName}`);
}

function initEncryptionAnimation() {
  setInterval(() => {
    const fileItems = document.querySelectorAll('.file-item');
    if (fileItems.length > 0) {
      const randomFile = fileItems[Math.floor(Math.random() * fileItems.length)];
      randomFile.style.backgroundColor = 'var(--primary-dark)';
      setTimeout(() => {
        randomFile.style.backgroundColor = '';
      }, 1000);
    }
  }, 5000);
}

function copyBitcoinAddress() {
  const btcAddress = document.getElementById('btc-address');
  navigator.clipboard.writeText(btcAddress.textContent).then(() => {
    const copyBtn = document.getElementById('copy-address');
    copyBtn.textContent = 'COPIED!';
    copyBtn.style.backgroundColor = 'var(--success)';
    setTimeout(() => {
      copyBtn.textContent = 'COPY';
      copyBtn.style.backgroundColor = '';
    }, 2000);
  });
}

function handlePaidButton() {
  const paidButton = document.getElementById('paid-button');
  paidButton.textContent = 'VERIFYING PAYMENT...';
  paidButton.disabled = true;
  
  setTimeout(() => {
    addConsoleMessage('> Payment verified! Starting decryption process...');
    setTimeout(() => {
      addConsoleMessage('> Downloading decryption key...');
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 10;
        addConsoleMessage(`> Decrypting files... ${progress}%`);
        if (progress >= 100) {
          clearInterval(progressInterval);
          showSuccessMessage();
        }
      }, 500);
    }, 2000);
  }, 3000);
}

function showSuccessMessage() {
  document.querySelector('.ransomware-container').innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <h1 style="color: var(--success); margin-bottom: 2rem;">✓ SYSTEM RESTORED SUCCESSFULLY</h1>
      <div style="background-color: var(--background-light); padding: 2rem; border-radius: var(--border-radius); margin-bottom: 2rem;">
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">All your files have been successfully decrypted!</p>
        <p style="color: var(--text-secondary);">Thank you for participating in this ransomware simulation demonstration.</p>
      </div>
      <button onclick="location.reload()" class="start-button" style="background-color: var(--success);">
        Return to Home
      </button>
    </div>
  `;
}

function addConsoleMessage(message) {
  const console = document.getElementById('console');
  const newLine = document.createElement('div');
  newLine.className = 'console-line';
  newLine.textContent = message;
  console.insertBefore(newLine, console.lastElementChild);
  console.scrollTop = console.scrollHeight;
}