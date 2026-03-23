import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // QueryClient,
  // QueryClientProvider,
} from '@tanstack/react-query'
import { getPosts } from './api/api'

function App() {
  
    const { data, isPending, isError } = useQuery({
    queryKey: ['getPost'],
    queryFn: getPosts,
  });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Something went wrong</div>;
  return (
  <div>
    <h1>Hello world</h1>
    {data.map((post)=>( <div key={post.id}>{post.title} - 
      {post.tags.map((tags) =>(
        <span>-{tags}</span>
      ))}
    </div>  ))}
  </div>
)
}

export default App