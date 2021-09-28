<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>Buy-in</h1>
        <button>
            <nuxt-link to="/products">
                See Products
            </nuxt-link>
        
        </button>
</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .masthead {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    background-size: cover !important;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 25%, rgba(98,98,111,0.65) 100%), url(assets/bluebag.jpg) no-repeat center center scroll;
    }

    h1 {
    font-style: normal;
    font-weight: bold;
    color: #eee;
    font-size: 11vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 134px;
    }
        
        
    button {
    background: #D7BB98;
    transition: background ease .25s;
    border-radius: 4px;
    display: inline-block;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0;
    text-decoration: none;
    color: #ffff;
    font-size: 1.2rem;
    font-style: normal;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    }
    button:hover {
    background: #214553;
    outline: 1px solid #fff;
    outline-offset: -4px;
    }
    button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
    }
</style>

      

    