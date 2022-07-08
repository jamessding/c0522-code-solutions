select "genres"."name",
       count("genres"."genreId") as "genreCount"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
 where "firstName" = 'Lisa'
   and "lastName" = 'Monroe'
 group by "genres"."name";
