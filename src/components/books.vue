<template>
    <tr>
        <td>{{book.name}}</td>
        <td>{{book.author}}</td>
        <td>{{book.nBooks}}</td>
        <td>{{book.category}}</td>
        <td>{{book.nIssuedBooks}}</td>
    </tr>
</template>

<script>
export default {
    props: {
        book: Object
    },
    data () {
        return {

        }
    },
    methods: {
        testClickEvent (){
            this.$dispatch('delete-todo',this.todoItem)
        }
    }
}
</script>
