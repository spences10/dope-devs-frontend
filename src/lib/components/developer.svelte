<script>
  export let name, bio, image
</script>

<div class="card card-side bordered compact">
  <div class="card-body flex">
    <h2 class="card-title">{name}</h2>
    <div>{@html bio}</div>
  </div>
  <figure>
    <img class="w-full h-full" src={image} alt={name} />
  </figure>
</div>
