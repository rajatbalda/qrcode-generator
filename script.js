function generateQR() {
    const input = document.getElementById('qr-input').value.trim();
    const qrCodeContainer = document.getElementById('qr-code');
    const downloadLink = document.getElementById('download-link');
  
    qrCodeContainer.innerHTML = '';
    downloadLink.style.display = 'none';
  
    if (!input) {
      alert("Please enter text or a URL.");
      return;
    }
  
    QRCode.toCanvas(input, { width: 200 }, (err, canvas) => {
      if (err) return console.error(err);
      qrCodeContainer.appendChild(canvas);
  
      // Create download link
      const dataUrl = canvas.toDataURL("image/png");
      downloadLink.href = dataUrl;
      downloadLink.style.display = 'inline-block';
    });
  }
  