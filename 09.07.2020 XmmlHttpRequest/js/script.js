let getPost = document.getElementById("getPost");
let posts=document.getElementById("posts");

// getPost.onclick = function () {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let allPost = JSON.parse(this.responseText);
            for (const post of allPost) {
                let str=`<div class="col-lg-6 mt-3">
                <div class="jumbotron jumbotron-fluid" style="height:300px;overflow:auto">
                    <div class="container">
                      <h1 class="display-4">${post.title}</h1>
                      <p class="lead">${post.body}</p>
                    </div>
                    </div>
                </div>`
                posts.innerHTML+=str;
            }
        }
    }
    http.open("Get", "https://jsonplaceholder.typicode.com/posts");
    http.send();
// }
