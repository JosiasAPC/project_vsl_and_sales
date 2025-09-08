/* -------------------------------------- START STOCK AND DATE SCRIPT -------------------------------------- */

let stock = 92;

function updateStock() {
  document.getElementById("stock").textContent = `${stock} bottles left`;

  let interval = stock > 27 ? 5000 : 30000;

  if (stock > 0) {
    stock--;
    setTimeout(updateStock, interval);
  }
}

function setNextBatchDate() {
  let today = new Date();
  let nextBatch = new Date(today.setDate(today.getDate() + 90)); // agora 90 dias
  let day = String(nextBatch.getDate()).padStart(2, "0");
  let month = String(nextBatch.getMonth() + 1).padStart(2, "0");
  let year = nextBatch.getFullYear();
  document.getElementById(
    "nextBatch"
  ).textContent = `Estimated next batch: ${month}/${day}/${year}`;
}

updateStock();
setNextBatchDate();

/* -------------------------------------- END STOCK AND DATE SCRIPT -------------------------------------- */
