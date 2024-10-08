namespace backend.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string UserId { get; set; }
        public int Rating { get; set; }
        public string Text { get; set; }
        public string MovieId { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }

    }
}
