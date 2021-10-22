import './App.css';

function App() {
  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>

      <button>
      Add Recipe
      </button>

      <form>
        <label>
          recipe-name:
          <input type="text" name="recipe-name" />
          recipe-instructions:
          <input type="text" name="recipe-instructions" />
        </label>
        <input type="submit" value="Submit" />
      </form>






    </div>
  );
}

export default App;
