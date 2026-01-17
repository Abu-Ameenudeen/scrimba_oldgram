const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts-container")

postsContainer.innerHTML = ""

for (let post of posts) {
  postsContainer.innerHTML += `
    <section class="post">
      <div class="post-header">
        <img class="feed-avatar" src="${post.avatar}" alt="poster's avatar">
        <div class="name-location">
          <div>
            <span class="name text-bold">${post.name}</span>
          </div>
          <span class="location">${post.location}</span>
        </div>
      </div>

      <img class="feed-post" src="${post.post}" alt="post image">

      <div class="post-reaction-section">
        <img class="post-reaction-btn like-btn" src="images/icon-heart.png" alt="like button">
        <img class="post-reaction-btn cmt-btn" src="images/icon-comment.png" alt="comment button">
        <img class="post-reaction-btn dm-btn" src="images/icon-dm.png" alt="dm button">
      </div>

      <div>
        <h2 class="likes-count">
          <span class="text-bold">${post.likes}</span> likes
        </h2>
      </div>

      <div>
        <h3 class="feed-caption">
          <span class="text-bold">${post.username}</span>
          <span class="caption-text">${post.comment}</span>
        </h3>
      </div>
    </section>
  `
}
