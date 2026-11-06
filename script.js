 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
}

body {
    background: #f5f5f5;
}

header {
    background: #123d2a;
    color: white;
    padding: 20px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h2 {
    color: #ffd166;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

nav a:hover {
    color: #ffd166;
}

.hero {
    height: 550px;
    background:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
    url("https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600")
    center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 15px;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 25px;
}

.btn {
    background: #e99b27;
    color: white;
    padding: 13px 25px;
    text-decoration: none;
    border-radius: 6px;
}

.places {
    padding: 60px 7%;
    text-align: center;
}

.places h1, .about h1 {
    color: #123d2a;
    margin-bottom: 25px;
}

#search {
    padding: 13px;
    width: 80%;
    max-width: 400px;
    margin-bottom: 30px;
    border: 1px solid #aaa;
    border-radius: 6px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
}

.card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 12px #0002;
    transition: transform .3s;
    padding-bottom: 20px;
}

.card:hover {
    transform: translateY(-8px);
}

.card img {
    width: 100%;
    height: 190px;
    object-fit: cover;
}

.card h2 {
    margin: 15px;
    color: #123d2a;
}

.card p {
    padding: 0 12px;
    margin-bottom: 18px;
}

.card button {
    background: #123d2a;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    cursor: pointer;
}

.card button:hover {
    background: #e99b27;
}

.about {
    background: #e5eee8;
    text-align: center;
    padding: 55px 10%;
    line-height: 1.8;
}

footer {
    background: #123d2a;
    color: white;
    text-align: center;
    padding: 20px;
}

@media(max-width: 850px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width: 550px) {
    header {
        flex-direction: column;
        gap: 15px;
    }

    nav a {
        margin: 0 7px;
    }

    .hero-content h1 {
        font-size: 32px;
    }

    .cards {
        grid-template-columns: 1fr;
    }
}