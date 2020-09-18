var app = new Vue({
el: '#userProfile',
data: {
userName:'',
userLast:'',
userEmail:'',
userCountry:'',
userDob:'',
userAge:'',
userImage:'',
userImgThumb:''
},
created(){
this.fetchUser();
},

methods:{
fetchUser:function(){
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
var userData = data.results[0];
console.log(userData);
this.userName = userData.name.first;
this.userLast = userData.name.last;
this.userDob = userData.dob.date;
this.userAge = userData.dob.age;
this.userEmail = 'mailto:' +userData.email;
this.userCountry = userData.nat;
this.userImage = userData.picture.large;
this.userImgThumg = userData.picture.thumbnail;
})
}
}})
