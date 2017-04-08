export const fetchTransactions = () => {
  fetch(`http://localhost:5001/api/transactions`).then(res => {
    res.json();
  });
};
