import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,C14,C15,C16,D1,D2,D3,D4,D51,D52,D53,D6,D7,D8,Home,Info} from './pages'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path='/C1' element={<C1></C1>}></Route>
          <Route path='/C2' element={<C2></C2>}></Route>
          <Route path='/C3' element={<C3></C3>}></Route>
          <Route path='/C4' element={<C4></C4>}></Route>
          <Route path='/C5' element={<C5></C5>}></Route>
          <Route path='/C6' element={<C6></C6>}></Route>
          <Route path='/C7' element={<C7></C7>}></Route>
          <Route path='/C8' element={<C8></C8>}></Route>
          <Route path='/C9' element={<C9></C9>}></Route>
          <Route path='/C10' element={<C10></C10>}></Route>
          <Route path='/C11' element={<C11></C11>}></Route>
          <Route path='/C12' element={<C12></C12>}></Route>
          <Route path='/C13' element={<C13></C13>}></Route>
          <Route path='/C14' element={<C14></C14>}></Route>
          <Route path='/C15' element={<C15></C15>}></Route>
          <Route path='/C16' element={<C16></C16>}></Route>
          <Route path='/D1' element={<D1></D1>}></Route>
          <Route path='/D2' element={<D2></D2>}></Route>
          <Route path='/D3' element={<D3></D3>}></Route>
          <Route path='/D4' element={<D4></D4>}></Route>
          <Route path='/D51' element={<D51></D51>}></Route>
          <Route path='/D52' element={<D52></D52>}></Route>
          <Route path='/D53' element={<D53></D53>}></Route>
          <Route path='/D6' element={<D6></D6>}></Route>
          <Route path='/D7' element={<D7></D7>}></Route>
          <Route path='/D8' element={<D8></D8>}></Route>
          <Route path='/Info' element={<Info></Info>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App