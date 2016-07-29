<template>
    <div>
        <h1 class="ui center aligned header">{{listName}}</h1>
        <list-of-books :books="books"></list-of-books>
        <add-new-book></add-new-book>
    </div>

</template>

<script>
import AddNewBook from './add-new-book.vue';
import ListOfBooks from './list-of-books.vue';

export default {
    components: {
        AddNewBook,
        ListOfBooks
    },
    props: ["listName"],
    data () {
        return {
            // Note: modifying `msg` below will not cause changes to occur with
            // hot-reload. As reloaded components preserve their initial state,
            books: [
                {   name: "Watts", author: "Rios", nBooks: 151, category: "green", nIssuedBooks: 20         },
                {   name: "Cote", author: "Bowers", nBooks: 943, category: "green", nIssuedBooks: 20        },
                {   name: "Dyer", author: "Clayton", nBooks: 104, category: "blue", nIssuedBooks: 24        },
                {   name: "Allison", author: "Dillard", nBooks: 228, category: "brown", nIssuedBooks: 40    },
                {   name: "Whitehead", author: "Johnnie", nBooks: 331, category: "blue", nIssuedBooks: 24   }
            ]
            // modifying these values will have no effect.
        }
    },

    events: {
        'delete-todo': function(item){
            var indexToDelete = this.items.indexOf(item);
            this.items.splice(indexToDelete,1);
        },
        'add-item': function(item){
            this.items.push(item);
        }
    }
}
</script>
