var app = new Vue({
  el: '#Commentsjs',
  data: {
    Comments: [],
    newComment: {
    }
  },
methods:{
  fetchUser:function(){
    fetch('api/comments/')
    .then(response => response.json())
    .then(json => {
      this.Comments=json;
      console.log(this.Comments);
    });
  },
  createComment(){
      fetch('api/comments/create.php',{
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.Comments.push(json[0]);
        this.newComment = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
    },
    newCommentData(){
      return{
        commentText:""
      }
    }
},
created(){
  this.fetchUser();
}
});
