const email: string = "ru.khakimov@innopolis.university";
const right: HTMLDivElement = document.getElementById(
  "right"
) as HTMLDivElement;

async function getId(): Promise<number> {
  const queryParams: URLSearchParams = new URLSearchParams({ email: email });
  const idResponse: Response = await fetch(
    "https://fwd.innopolis.app/api/hw2?" + queryParams.toString()
  );
  return await idResponse.json();
}

interface Image {
  day: string;
  month: string;
  year: string;
  alt: string;
  img: string;
  title: string;
}

async function getImage(): Promise<Image> {
  const id: number = await getId();
  const queryParams: URLSearchParams = new URLSearchParams({
    num: id.toString(),
  });
  const imageResponse: Response = await fetch(
    "https://getxkcd.vercel.app/api/comic?" + queryParams.toString()
  );
  return await imageResponse.json();
}

async function appendImage() {
  const div: HTMLDivElement = document.createElement("div");
  right.appendChild(div);

  const imageJson: Image = await getImage();

  const titleParagraph: HTMLParagraphElement = document.createElement("p");
  titleParagraph.innerText = "Title: " + imageJson.title;
  div.appendChild(titleParagraph);

  const dateParagraph: HTMLParagraphElement = document.createElement("p");
  dateParagraph.innerText = `Date: ${imageJson.day}.${imageJson.month}.${imageJson.year}`;
  div.appendChild(dateParagraph);

  const image: HTMLImageElement = document.createElement("img");
  image.src = imageJson.img;
  image.alt = imageJson.alt;
  image.title = imageJson.title;
  image.className = "generated-images";
  div.appendChild(image);
}

window.addEventListener("load", appendImage);
