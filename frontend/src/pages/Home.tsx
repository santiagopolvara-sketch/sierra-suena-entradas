export default function Home() {
  return (
    <div className="min-h-screen bg-sierra-dark">
      <header className="bg-sierra-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-h1 font-headings">Sierra Suena</h1>
          <p className="text-lg mt-2">Plataforma de venta de entradas para eventos</p>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-h2 font-headings mb-6">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Events will be displayed here */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold mb-2">Evento Ejemplo</h3>
              <p className="text-gray-300">Cargando eventos...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
