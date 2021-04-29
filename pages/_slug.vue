<template>
  <div class="home">
    <h1 class="headline center">
      {{ article.title }}
    </h1>
    <p class="center">
      {{ article.description }}
    </p>
    <div class="sections center">
      <div class="group center">
        <p>
          {{ article.body }}
        </p>
      </div>
      <NuxtLink to="/" class="back">
        back
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { singleArticleQuery } from '~/graphql/queries'

export default {
  data () {
    return {
      article: []
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: singleArticleQuery,
      variables () {
        return {
          id: this.$route.query.id
        }
      }
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}

.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}

.back {
  color: #42b833;
  text-decoration: underline;
}

img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: #35495e;
}

h3 {
  color: #42b833;
  margin-bottom: 0;
  cursor: pointer;
}

h3 > .subtitle {
  color: grey;
  font-size: 0.98rem;
  float: right;
  font-weight: normal;
}

h3:hover {
  text-decoration: underline;
}

p {
  margin-top: 0.4rem;
}

.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}

.section {
  margin-bottom: 3rem;
}

.group {
  margin-bottom: 4rem;
}
</style>
