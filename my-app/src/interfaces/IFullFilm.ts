
export interface IFullFilm{
   ageRating: number;
   alternativeName: string;
   audience: Array<Object>
   backdrop: Object;
   budget: Object;
   countries: {name: string}[];
   deletedAt: null;
   description: string;
   distributors: Object;
   enName: null | string;
   externalID: Object;
   facts: Array<Object>
   fees: {russia:{value: number, currency: string}, usa:{value: number, currency: string}, world: {value: number, currency: string}};
   genres: {name: string}[]
   id: number;
   images: Object;
   imagesInfo: Object;
   isSeries: boolean;
   lists: Array<string>;
   logo: Object;
   movieLength: number;
   name: string;
   names: Array<Object>
   persons: {description: string, enName: string, enProfession: string, id: number, name: string, photo: string, profession: string}[];
   poster:{url: string};
   premiere: {russia: string, world: string};
   productionCompanies: {name: string, url: string}[];
   rating: {await: null, filmCritics: number, imdb: number, kp: number, russianFilmCritics: number};
   ratingMpaa: string;
   seasonsInfo: Array<string>;
   sequelsAndRequels: Array<Object>;
   seriesLength: null | number;
   shortDescription: string;
   similarMovies: {alternativeName: string, enName: null, id: number, name: string, poster:{previewUrl: string, url: string}, type: string}[];
   slogan: string;
   spokenLanguages: Array<Object>;
   status: null | string;
   technology: Object;
   ticketsOnSale: boolean;
   top10: null | number;
   top250: null| number;
   totalSeriesLength: null | number;
   type: string;
   typeNumber: number;
   updateDates: Array<string>;
   updatedAt: string;
   videos: {trailers: {url: string}[]};
   votes: Object;
   watchability: Object;
   year: number
   isFavorite: boolean;
}

