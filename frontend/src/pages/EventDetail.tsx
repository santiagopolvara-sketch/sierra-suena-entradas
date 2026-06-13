import { useParams } from 'react-router-dom'

export default function EventDetail() {
  const { id } = useParams<{ id: string }>()
  
  return (
    <div className="min-h-screen bg-sierra-dark">
      <h1 className="text-h1 font-headings text-white">Detalle del Evento</h1>
      <p className="text-white">Evento ID: {id}</p>
    </div>
  )
}
