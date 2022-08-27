import classes from "./animeList.module.css";
import { useSelector } from "react-redux";
import React from "react";
import AnimeSearch from "./../animeSearch/animeSearch";
import Preloader from "../../decorative/preloader/preloader";
import AnimeItem from "./animeItem/animeItem";

let AnimeList = function() {
  let isFetching = useSelector((state) => state.anime.isFetching);
  let items = useSelector((state) => state.anime.items);

  return (
    <>
      <AnimeSearch />
      <div className={classes.items}>
        {items.length !== 0 && isFetching === false ? (
          items.map((item) => (
            <AnimeItem
              title={item.attributes.canonicalTitle}
              poster={item.attributes.posterImage.large}
              id={item.id}
              startDate={item.attributes.startDate}
              episodeCount={item.attributes.episodeCount}
              showType={item.attributes.showType}
              popularityRank={item.attributes.popularityRank}
              ageRating={item.attributes.ageRating}
              status={item.attributes.status}
            />
          ))
        ) : isFetching === true ? (
          <Preloader />
        ) : (
          <div className={classes.error}>
            <p>Nothing found or fill is empty</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AnimeList;
