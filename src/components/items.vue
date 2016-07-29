<template>
    <div class="items">
        <p>{{todoItem}}</p>
    </div>
</template>

<script>
export default {
    props: {
        todoItem: String
    },
    data () {
        return {

            // item: "hello"
        }
    }
}
</script>
