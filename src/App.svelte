<script lang="ts">
  import Footer from './lib/Footer.svelte'
  import Header from './lib/Header.svelte'
  import Bio from './lib/Bio.svelte'
  import Projects from './lib/Projects.svelte'
  import Comic from './lib/Comic.svelte'
</script>

<main>
  <Header />
  <Bio />
  <div class="container">
    <Projects />
    <Comic />
  </div>
  <Footer />
</main>

<style>
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>