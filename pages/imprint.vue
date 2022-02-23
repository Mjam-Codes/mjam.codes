<template>
  <div
    class="imprint container mx-auto px-6 pt-5 pb-10 text-center font-bold text-lg leading-tight md:mb-20"
  >
    <p class="mb-5">
      Moritz Pflüger<br />
      Wichheimerstraße 36<br />
      50678 Köln
    </p>
    <p class="mb-5">
      Milan Bargiel<br />
      Hauptstraße 36<br />
      10827 Berlin
    </p>
    <p class="mb-5">
      <a
        class="underline hover:text-custom-secondary-500"
        href="mailto:mail@mjam.codes"
        >mail@mjam.codes</a
      >
    </p>
    <p class="mb-5">
      Data Protection Policy (GDPR)<br />
      This website does not collect, store or process Personally Identifiable
      Information (PII).<br />
      This website does not require the use of cookies.
    </p>
    <p>
      Third Party Inclusion<br />
      This website is hosted by Github using Github Pages.<br />
      The Github Global Privacy Practices are available
      <a
        class="underline hover:text-custom-secondary-500"
        href="https://docs.github.com/en/github/site-policy/global-privacy-practices"
        target="_blank"
        >here</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ImprintPage',
}
</script>
