using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public ReviewController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        // Add a new review
        [HttpPost]
        public async Task<IActionResult> AddReview(Review review)
        {
            _appDbContext.Reviews.Add(review);
            await _appDbContext.SaveChangesAsync();

            return Ok(review);
        }

        // Get all reviews
        [HttpGet]
        public async Task<IActionResult> GetReviews()
        {
            var reviews = await _appDbContext.Reviews.ToListAsync();
            return Ok(reviews);
        }

        // Get a specific review by review ID
        [HttpGet("{reviewId}")]
        public async Task<IActionResult> GetReview(int reviewId)
        {
            var review = await _appDbContext.Reviews
                .FirstOrDefaultAsync(r => r.Id == reviewId);

            if (review == null)
            {
                return NotFound("Review not found.");
            }

            return Ok(review);
        }

        // Get reviews by user ID
        [HttpGet("ByUser/{userId}")]
        public async Task<IActionResult> GetReviewsByUserId(string userId)
        {
            var reviews = await _appDbContext.Reviews
                .Where(r => r.UserId == userId)
                .ToListAsync();

            if (!reviews.Any())
            {
                return NotFound("No reviews found for this user.");
            }

            return Ok(reviews);
        }

        // Get reviews by movie ID
        [HttpGet("ByMovie/{movieId}")]
        public async Task<IActionResult> GetReviewsByMovieId(string movieId)
        {
            var reviews = await _appDbContext.Reviews
                .Where(r => r.MovieId == movieId)
                .ToListAsync();

            if (!reviews.Any())
            {
                return NotFound("No reviews found for this movie.");
            }

            return Ok(reviews);
        }

        // Update an existing review by review ID
        [HttpPut("{reviewId}")]
        public async Task<IActionResult> UpdateReview(int reviewId, Review updatedReview)
        {
            var review = await _appDbContext.Reviews.FindAsync(reviewId);

            if (review == null)
            {
                return NotFound("Review not found.");
            }

            // Update review fields
            review.Title = updatedReview.Title;
            review.Text = updatedReview.Text;
            review.Rating = updatedReview.Rating;
            review.UserId = updatedReview.UserId;
            review.MovieId = updatedReview.MovieId;
            review.Likes = updatedReview.Likes;
            review.Dislikes = updatedReview.Dislikes;

            await _appDbContext.SaveChangesAsync();

            return Ok(review);
        }

        // Delete a review by review ID
        [HttpDelete("{reviewId}")]
        public async Task<IActionResult> DeleteReview(int reviewId)
        {
            var review = await _appDbContext.Reviews.FindAsync(reviewId);

            if (review == null)
            {
                return NotFound("Review not found.");
            }

            _appDbContext.Reviews.Remove(review);
            await _appDbContext.SaveChangesAsync();

            return Ok("Review deleted successfully.");
        }
    }
}
