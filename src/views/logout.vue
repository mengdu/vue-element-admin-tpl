<template>
    <div class="page-logout">
        <p style="padding: 15px;">Logout...</p>
    </div>
</template>
<script>
export default {
  mounted () {
    // do logout
    location.href = '/login'
  }
}
</script>
