import loader from "./mode-change.js";
async function getData(url) {
  if (url) {
    loader(true);
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("Xatolik mavjud :(");
    }
    loader(false);
    const data = await req.json();
    return data;
  } else {
    throw new Error("Wrong url");
  }
}

export default getData;
