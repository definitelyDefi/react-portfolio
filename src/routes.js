import Welcome from "./components/home/home";
import React from "react";
import Counter from "./components/counter/counter";
import Rule34 from "./components/rule34/rule34";
import NotesList from "./components/notes/notesList";
import WeatherView from "./components/weather/weatherView/weatherView";
import WeatherSearch from "./components/weather/weatherSearch/weatherSearch";
import animeSearch from "./components/animeSearch/animeSearch/animeSearch";
import AnimeList from "./components/animeSearch/animeList/animeList";
import AnimeView from "./components/animeSearch/animeView/animeView";
import ProfilePage from "./components/profile/profile";
import Calculator from "./components/calculator/calculator";
import Rule34Search from "./components/rule34/search/Rule34search";

export const routes = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/react-training/",
    component: Welcome,
  },
  {
    path: "/react-training/counter",
    component: Counter,
  },
  {
    path: "/react-training/calculator",
    component: Calculator,
  },
  {
    path: "/react-training/rule34/search",
    component: Rule34Search,
  },
  {
    path: "/react-training/rule34/pics",
    component: Rule34,
  },
  {
    path: "/react-training/notes",
    component: NotesList,
  },
  {
    path: "/react-training/weather/view/*",
    component: WeatherView,
  },
  {
    path: "/react-training/weather/search",
    component: WeatherSearch,
  },
  {
    path: "/react-training/anime/search",
    component: animeSearch,
  },
  {
    path: "/react-training/anime/list",
    component: AnimeList,
  },
  {
    path: "/react-training/anime/view/*",
    component: AnimeView,
  },
  {
    path: "/react-training/profile",
    component: ProfilePage,
  },
];

export default function withComponent(Component) {
  return function() {
    return <Component />;
  };
}

// <Route path={"/react-training/" } element={ <HomePage /> } />
//             <Route path={'/'} element={ <HomePage /> } />

//             <Route path="/react-training/counter" element={ <Counter countStart={0} /> } />

//             <Route path="/react-training/calculator" element={ <Calculator /> } />

//             <Route path="/react-training/rule34/search" element={ <Rule34Search /> } />
//             <Route path="/react-training/rule34/pics" element= { <Rule34 /> } />

//             <Route path="/react-training/notes" element= { <NotesList /> }/>

//             <Route path="/react-training/weather/view/*" element= { <WeatherView /> }/>
//             <Route path="/react-training/weather/search" element= { <WeatherSearch /> }/>

//             <Route path="/react-training/anime/search" element= { <AnimeSearch /> }/>
//             <Route path='/react-training/anime/list' element={ <AnimeList />} />
//             <Route path='/react-training/anime/view/*' element={ <AnimeView />} />
//             <Route path='/react-training/profile' element={ <ProfilePage />} />
// </Routes>
