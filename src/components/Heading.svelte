<script>
  import RainbowText from "./RainbowText.svelte";
  import Tagline from "./Tagline.svelte";
</script>

<div class="h-[inherit] flex flex-col justify-center items-center text-start">
  <h1 class="text-white text-2xl sm:text-4xl">Hey there. I'm</h1>
  <div class="w-screen justify-center flex ">
    <!-- <span class="mt-6 sm:mt-12 text-purple shadow txt-stroke-black"
      >Tejas Agarwal</span
    >
    <span class="mt-5 sm:mt-10 text-blue shadow">Tejas Agarwal</span>
    <span class="mt-4 sm:mt-8 text-green shadow">Tejas Agarwal</span>
    <span class="mt-3 sm:mt-6 text-yellow shadow">Tejas Agarwal</span>
    <span class="mt-2 sm:mt-4 text-orange shadow">Tejas Agarwal</span>
    <span class="mt-1 sm:mt-2 text-red shadow">Tejas Agarwal</span>
    <span
      class="text-white no-select-border text-7xl sm:text-8xl z-50 text-center txt-stroke-black txt-stroke-1 "
    >
      Tejas Agarwal
    </span> -->

    <RainbowText text="Tejas Agarwal" size="lg" />
  </div>
  <Tagline />
</div>

<style>
  .txt-stroke-1 {
    -webkit-text-stroke-width: 2px;
  }

  @media screen and (max-width: 640px) {
    .txt-stroke-1 {
      -webkit-text-stroke-width: 1.25px;
    }
  }

  .txt-stroke-black {
    -webkit-text-stroke-color: black;
  }

  .no-select-border {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    box-shadow: none;
  }

  .shadow {
    @apply text-7xl sm:text-8xl absolute no-select-border text-center txt-stroke-black txt-stroke-1;
  }
</style>
