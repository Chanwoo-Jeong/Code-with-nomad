import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function MovieApp () {
    return <>
            <BrowserRouter>
            <nav>
                <Link to="/"><div>홈</div></Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Detail />} />
                </Routes>
            </main>
            </BrowserRouter>
            </>
}
export default MovieApp