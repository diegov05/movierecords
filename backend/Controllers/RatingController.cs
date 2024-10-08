using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public RatingController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        // Add a user rating
        [HttpPost("UserRating")]
        public async Task<IActionResult> AddUserRating(UserRating userRating)
        {
            _appDbContext.UserRatings.Add(userRating);
            await _appDbContext.SaveChangesAsync();
            return Ok(userRating);
        }

        // Get all user ratings
        [HttpGet("UserRatings")]
        public async Task<IActionResult> GetUserRatings()
        {
            var ratings = await _appDbContext.UserRatings.ToListAsync();
            return Ok(ratings);
        }

        // Get ratings by UserId
        [HttpGet("User/{userId}")]
        public async Task<IActionResult> GetUserRatingsByUserId(string userId)
        {
            var ratings = await _appDbContext.UserRatings
                .Where(r => r.UserId == userId)
                .ToListAsync();

            if (!ratings.Any())
            {
                return NotFound("No ratings found for this user.");
            }

            return Ok(ratings);
        }

        // Get rating by UserId and MovieId
        [HttpGet("User/{userId}/Movie/{movieId}")]
        public async Task<IActionResult> GetUserRatingForMovie(string userId, string movieId)
        {
            var rating = await _appDbContext.UserRatings
                .FirstOrDefaultAsync(r => r.UserId == userId && r.MovieId == movieId);

            if (rating == null)
            {
                return NotFound("Rating not found for this user and movie.");
            }

            return Ok(rating);
        }
    }
}
