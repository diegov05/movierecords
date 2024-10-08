namespace backend.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string Rated { get; set; }
        public string Year { get; set; }
        public string Released { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string Writer { get; set; }
        public string Actors { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }
        public string Metascore { get; set; }
        public string ImdbRating { get; set; }
        public string ImdbVotes { get; set; }
        public string ImdbID { get; set; }
        public List<MovieRating> MovieRatings { get; set; } // A list to hold ratings
        public List<UserRating> UserRatings { get; set; } // A list to hold ratings

        public Movie()
        {
            MovieRatings = new List<MovieRating>(); // Initialize the list in the constructor
            UserRatings = new List<UserRating>(); // Initialize the list in the constructor
        }
    }


    public class MovieRating
    {
        public string Id { get; set; }
        public string Source { get; set; }
        public string Value { get; set; }
    }


    public class UserRating
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string MovieId { get; set; }
        public int Rating { get; set; }
    }
}
