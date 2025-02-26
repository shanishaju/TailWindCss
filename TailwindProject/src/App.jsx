import './App.css'

function App() {

  return (
    <>
      <div className='w-100 h-100 p-5 rounded-full shadow-inner bg-gray-200 text-center md:bg-blue-500 lg:bg-green-500'>
        <h1 className='text-red-500 text-xl'> TailWind Css</h1>
        <button className='bg-red-700 text-white px-2 py-2 mt-5 rounded hover:bg-yellow-500 '>View more</button>
      </div>
      <h1 className='text-center text-red-600 text-xl font-bold sm:text-red-500 md:text-red-900 lg:text-red-200 drop-shadow'>Grid Examples</h1>
      <div class="grid grid-cols-3 gap-4 p-4">
        <div class="bg-blue-500 text-white p-6">Column 1</div>
        <div class="bg-red-500 text-white p-6">Column 2</div>
        <div class="bg-red-500 text-white p-6">Column 2</div>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div class="bg-green-500 text-white p-4">Item 1</div>
        <div class="bg-purple-500 text-white p-4">Item 2</div>
        <div class="bg-yellow-500 text-white p-4">Item 3</div>
      </div>
      <div class="grid grid-cols-3 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="bg-blue-400 text-white p-6 col-span-2">Spanning 2 Columns</div>
        <div class="bg-red-400 text-white p-6">Item 2</div>
        <div class="bg-green-400 text-white p-6">Item 3</div>
        <div class="bg-yellow-400 text-white p-6 col-span-3">Spanning Full Width</div>
      </div>
      <div class="grid grid-cols-auto gap-4 p-4">
        <div class="bg-blue-500 text-white p-4">Auto Item 1</div>
        <div class="bg-red-500 text-white p-4">Auto Item 2</div>
        <div class="bg-green-500 text-white p-4">Auto Item 3</div>
        <div class="bg-yellow-500 text-white p-4">Auto Item 4</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <aside class="bg-gray-200 p-4 md:col-span-1">Sidebar</aside>
        <main class="bg-white p-4 md:col-span-2">Main Content</main>
      </div>

      <h1 className='text-red-600 font-bold bg-black rounded-lg'>Button Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <button className="bg-blue-500 text-white mt-5 px-4 py-2 rounded hover:bg-blue-700">
          Hover Me
        </button>

        <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded">
          Small
        </button>

        <button className="bg-blue-500 text-white px-4 py-2 text-base rounded">
          Medium
        </button>

        <button className="bg-blue-500 text-white px-6 py-3 text-lg rounded">
          Large
        </button>

        <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-50" disabled>
          Disabled
        </button>

        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2"></span>
          Loading...
        </button>
      </div>



    </>
  )
}

export default App
