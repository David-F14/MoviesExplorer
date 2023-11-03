<script setup>
defineProps(["id", "credit_id", "character", "name", "profile_path"]);
</script>

<template>
    <a href="">
        <li class="actorcard bg-white rounded-lg overflow-hidden m-4 px-2">            
            {{ name }}
        </li>
    </a>
</template>

<style scoped>
.actorcard{
    min-width: 138px;
    width: 138px;
    height: 175px;
    display: block;
    border: 1px solid rgba(var(--lightGrey),1);
}
</style>
