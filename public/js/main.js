const getID = (id) => {
    document.getElementById('delete').value= id
    
}

const editPost = (id)=>{
   let title =  document.getElementById(`postTitle${id}`).innerText
   let desc =  document.getElementById(`desc${id}`).innerText
   document.getElementById('edit').value = id
document.getElementById('post_title').value = title
document.getElementById('post_desc').value = desc
   

}

// $( document ).ready(function() {
//    $(".parent-spinner").fadeOut(1000)
// });