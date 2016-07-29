<template>
    <div class="list-of-items">
        <div v-for="item in items" track-by="$index">
            <items :todo-item="item"></items>
        </div>
    </div>
</template>

<script>
import Items from './items.vue';
export default {
    props:{
        items: [String]
    },
    components:{
        Items
    },
    data () {
        return {

        }
    }
}
</script>
