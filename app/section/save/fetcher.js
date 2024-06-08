// utils/fetcher.js
const url = 'https://magento1-demo.inter.scot/agent.php?save';

export const fetcher = async (url, options) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.body),
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the data.');

      error.info = await response.json();

      error.status = response.status;
      throw error;
    }
  
    return response.json();
  };
  