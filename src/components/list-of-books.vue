<template>
    <table class="ui blue selectable striped table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th># of Books</th>
                <th>Category</th>
                <th>Books Issued</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr is = "books" :book="book"></tr> -->
            <tr v-for="book in books" @click="selectBook(books, book)" :class="{'active': book.isSelected}">
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.nBooks}}</td>
                <td>{{book.category}}</td>
                <td>{{book.nIssuedBooks}}</td>
            </tr>
        </tbody>

    </table>
    <div>

        <a class="ui button primary" v-link="{path: '/books/add'}">Add new book</a>
        <a class="ui button yellow">Edit book</a>
        <a class="ui button red" @click="deleteBook()">Delete book</a>
        <div class="ui right floated pagination menu">
            <a class="icon item active">
                <i class="left chevron icon"></i>
            </a>
            <a class="item active">1</a>
            <a class="item">2</a>
            <a class="item">3</a>
            <a class="item">4</a>
            <a class="icon item">
                <i class="right chevron icon"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        books: [Object]
    },
    data () {
        return {
            bookSelected : {}

        }
    },
    methods: {
        selectBook (books, book){
            for(var i=0;i<books.length;i++){
                if(books[i] === book){
                    book.isSelected = !book.isSelected;
                    this.bookSelected = book.isSelected ? book : {};
                }else{
                    books[i].isSelected=false;
                }
            }
        },
        deleteBook (){
            console.log(this.bookSelected._id.$oid)
            this.$http.delete('https://api.mlab.com/api/1/databases/library-project/collections/books/'+ this.bookSelected._id.$oid +'?apiKey=QxnCpZ0YRbFTOVuTy0aosuh_o4oqCbjP')
            .then( (response) => {
                console.log(response);
                console.log("book deleted");
                this.$dispatch('load-books');
            }, (error) => {
                console.log(error);
            })
        }
    }

}
</script>
