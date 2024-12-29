document.getElementById('apiForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const phonenumber = document.getElementById('phonenumber').value;

  try {
    const response = await fetch('https://chimpu.online/api/post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `phonenumber=${encodeURIComponent(phonenumber)}`,
    });

    const headers = response.headers;
    const headersObj = {};
    for (let [key, value] of headers.entries()) {
      headersObj[key] = value;
    }

    document.getElementById('responseHeaders').textContent = JSON.stringify(
      headersObj,
      null,
      2
    );
  } catch (error) {
    console.error('Error posting data:', error);
    document.getElementById(
      'responseHeaders'
    ).textContent = `Error: ${error.message}`;
  }
});
