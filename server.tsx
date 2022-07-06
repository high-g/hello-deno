/** @jsx h */
import { serve } from 'https://deno.land/std@0.139.0/http/server.ts'
import { h, ssr } from 'https://crux.land/api/get/7GrKMy.ts'

const App = () => {
  return (
    <div className="px-8 py-4">
      <h1 className="font-semibold text-2xl">Hello Deno</h1>
      <p className="mt-2 text-gray-500">Welcome to example page!</p>
    </div>
  )
}

serve(() => ssr(() => <App />))
