
import PostList from "./components/PostList";

export default function Home() {
  return (
    <main>
      <section className="page-top-section">
        <div className="page-top-header">
          <h1> Welcome to SnapPost </h1>
        </div>
        <div className="page-top-desc">
          <p>Place to post your snaps quickly</p>
        </div>
      </section>
      <PostList />
    </main>
  );
}
