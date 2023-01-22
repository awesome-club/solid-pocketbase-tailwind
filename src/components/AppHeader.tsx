export default function AppHeader() {
  return (
    <header class="bg-gray-100 py-6">
      <div class="container mx-auto flex items-center">
        <h2 class="text-indigo-300 font-bold text-lg">🎈 TODO Colab</h2>
        <nav class="ml-auto">
          <button class="rounded-md bg-indigo-600 py-3 px-6 text-sm font-medium text-white hover:bg-blue-500 hover:scale-110 transition ease-in">Share Project</button>
        </nav>
      </div>
    </header>
  );
}
