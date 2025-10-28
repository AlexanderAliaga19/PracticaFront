<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();

</script>

<template>
  <div class="align-content-start justify-content-start m-4">
    <h1>{{ t('registro-inspeccion.title')}}</h1>
    <img src="/acme-logo.svg" alt="ACME Logo" width="200" height="200"/>
    <p>{{ t('registro-inspeccion.content')}}</p> >
  </div>
</template>

<style scoped>

</style>