import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./animeView.module.css";
import ReactPlayer from "react-player/lazy";
import AnimeSearch from "./../animeSearch/animeSearch";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import Preloader from "../../decorative/preloader/preloader";
import { fetchGenresThunk, searchAnimeThunk } from "../../../http";

const AnimeView = () => {
  let isFetching = useSelector((state) => state.anime.currentAnime.isFetching);
  const currentAnime = useSelector((state) => state.anime.currentAnime);
  let anime_id = useParams()["*"];
  let dispatch = useDispatch();
  let genres = useSelector((state) => state.anime.genres);

  useEffect(() => {
    dispatch(fetchGenresThunk(anime_id));
    dispatch(searchAnimeThunk(anime_id));
  }, [anime_id]);

  return (
    <div>
      {isFetching === true ? (
        <Preloader />
      ) : (
        <div>
          <AnimeSearch />

          <div className={classes.cover}>
            <img src={currentAnime.coverImage} alt={currentAnime.coverImage} />
          </div>
          <div className={classes.items}>
            <div className={`${classes.item} ${classes.poster}`}>
              <img
                src={currentAnime.posterImage}
                alt={currentAnime.posterImage}
              />
            </div>

            <div className={`${classes.item} ${classes.attrs}`}>
              <h1 className={classes.title}>
                {" "}
                <span>
                  {currentAnime.canonicalTitle} | {currentAnime.title_en || ""}{" "}
                  | {currentAnime.title_jp || ""}
                </span>
              </h1>
              <div className={classes.genres}>
                {genres.map((genre) => (
                  <button className={classes.genre}>
                    {genre.attributes.slug}
                  </button>
                ))}
              </div>
              <h1 className={classes.description}>
                <span>{currentAnime.description}</span>
              </h1>
              <h1 className={classes.dates}>
                Released: <span>{currentAnime.endDate || "ongoing"}</span>
              </h1>
              <h1 className={classes.rank}>
                Rank: <span>{currentAnime.popularityRank}</span>
              </h1>

              <h1 className={classes.rating}>
                Age rating: <span>{currentAnime.ageRating}</span>
              </h1>
              <h1 className={classes.type}>
                Show type: <span>{currentAnime.showType}</span>
              </h1>
              <h1 className={classes.episodes}>
                Episodes: <span>{currentAnime.episodeCount || "ongoing"}</span>
              </h1>
              <h1 className={classes.status}>
                Status: <span>{currentAnime.status}</span>
              </h1>
              <h1 className={classes.length}>
                Length:{" "}
                <span>{(currentAnime.totalLength / 60).toFixed(1)} hours</span>
              </h1>

              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${currentAnime.youtubeVideoId}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeView;
