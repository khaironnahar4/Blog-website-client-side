import { useNavigate } from "react-router-dom"

function ErrorPage() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <h1 className="text-9xl font-bold text-gray-500">404</h1>
    <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
    <p className="text-lg mt-2 text-gray-600">
      Sorry, but the page you were trying to view does not exist.
    </p>
    <button
      className="btn btn-error mt-6 text-white px-6 py-3 rounded shadow hover:bg-red-600"
      onClick={() => navigate("/")}
    >
      Go to Homepage
    </button>
  </div>
  )
}

export default ErrorPage