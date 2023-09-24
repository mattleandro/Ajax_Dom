const loadData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users/mattleandro");
  xhr.send(null);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const res = JSON.parse(xhr.responseText);

      const name = res.login;
      const avatarUrl = res.avatar_url;
      const followers = res.followers;
      const blogUrl = res.blog;

      document.getElementById("name").innerText = name;
      document.getElementById("avatar").src = avatarUrl;
      document.getElementById(
        "followers"
      ).innerText = `Followers: ${followers}`;
      document.getElementById("blog").href = `https://${blogUrl}`;
      document.getElementById("blog").innerText = blogUrl;
    }
  };
};

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", loadData);
