<template>
    <table class="ui blue selectable table">
        <thead>
            <tr class="center aligned">
                <th>Name</th>
                <th>Author</th>
                <th># of Books</th>
                <th>Category</th>
                <th>Books Issued</th>
            </tr>
        </thead>
        <tbody  class="center aligned" v-for="book in books">
            <tr is = "books" :book="book"></tr>
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <button class="ui button primary">Add new book</button>
                    <button class="ui button yellow">Edit book</button>
                    <button class="ui button red">Delete book</button>
                </td>
                <td>
                    <div class="ui right floated pagination menu">
                        <a class="icon item">
                            <i class="left chevron icon"></i>
                        </a>
                        <a class="item">1</a>
                        <a class="item">2</a>
                        <a class="item">3</a>
                        <a class="item">4</a>
                        <a class="icon item">
                            <i class="right chevron icon"></i>
                        </a>
                    </td>
                </tr>
            </tfoot>
        </table>
    </template>

    <script>
    import Books from './books.vue';
    export default {
        props:{
            books: [Object]
        },
        components:{
            Books
        },
        data () {
            return {

            }
        },

    }
    </script>
