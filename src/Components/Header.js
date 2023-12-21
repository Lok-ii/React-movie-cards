import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div class="logo">CineSphere</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" className="movie">Movies</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
        </ul>
        <input type="text" placeholder="I'm looking for..." />
      </nav>
    </header>
  );
}
