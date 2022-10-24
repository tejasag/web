<script>
  export let text;
  export let size;

  const sizes = {
    lg: "text-7xl sm:text-8xl",
    md: "text-5xl sm:text-6xl",
    sm: "text-3xl sm:text-4xl",
  };

  const baseStyle = `${sizes[size]} no-select-border text-center txt-stroke-black txt-stroke-1`;
  const style = `${baseStyle} absolute`;
</script>

<span class={`mt-6 sm:mt-12 text-purple ${style}`}>{text}</span>
<span class={`mt-5 sm:mt-10 text-blue ${style}`}>{text}</span>
<span class={`mt-4 sm:mt-8 text-green ${style}`}>{text}</span>
<span class={`mt-3 sm:mt-6 text-yellow ${style}`}>{text}</span>
<span class={`mt-2 sm:mt-4 text-orange ${style}`}>{text}</span>
<span class={`mt-1 sm:mt-2 text-red ${style}`}>{text}</span>
<span class={`text-white z-50 ${baseStyle}`}>{text}</span>

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
</style>
