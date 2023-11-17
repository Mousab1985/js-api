let url = "https://random.dog/woof.json";

async function getData() {
  let res = await fetch(url);
  let data = await res.json();

  let imgEl = document.createElement("img");
  imgEl.src = data.url;
  imgEl.classList.add("dog-img");
  document.body.append(imgEl);
}

getData();