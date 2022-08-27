import "./App.css";
// import Counter from "./features/counter/Counter";
import PostList from "./features/post/PostList";
import AddPosts from "./features/post/AddPosts";
function App() {
  return (
    <div className="App">
      {/* <center>
        <Counter />
      </center> */}
      <AddPosts/>
      <PostList />
    </div>
  );
}

export default App;
