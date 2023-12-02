import { Provider } from 'react-redux'
import {CounterStore} from '../store/store';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return(
    <Provider store={CounterStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
