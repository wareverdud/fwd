<script lang="ts">
  const email: string = "ru.khakimov@innopolis.university"
  
  interface Comic {
    day: string;
    month: string;
    year: string;
    alt: string;
    img: string;
    title: string;
  }

  async function getId(): Promise<number> {
    const queryParams: URLSearchParams = new URLSearchParams({ email: email });
    const idResponse: Response = await fetch(
      "https://fwd.innopolis.app/api/hw2?" + queryParams.toString()
    );
    return await idResponse.json();
  }

  async function getComic(): Promise<Comic> {
    const id: number = await getId();
    const queryParams: URLSearchParams = new URLSearchParams({
      num: id.toString(),
    });
    const imageResponse: Response = await fetch(
      "https://getxkcd.vercel.app/api/comic?" + queryParams.toString()
    );
    return await imageResponse.json();
  }

  const img: Promise<Comic> = getComic();
</script>

<div>
  {#await img}
    <p>Loading...</p>
  {:then img} 
    <p>Title: {img.title}</p>
    <p>Date: {img.day}.{img.month}.{img.year}</p>
    <img src={img.img} alt={img.alt} title={img.title}>
  {/await}
</div>
 