import '@styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
 
 const queryClient = new QueryClient() 

function Application({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}> 
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default Application
