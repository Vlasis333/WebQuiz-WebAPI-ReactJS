using EF.Data.Access.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF.Data.Access.Data
{
    public class QuizDBContext : DbContext
    {
        public QuizDBContext(DbContextOptions<QuizDBContext> options) : base(options)
        {
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>().HasData(
                new Question {
                    Id = 1, 
                    QuestionText = "What does HTML stand for?", 
                    Image = null, 
                    Option1 = "Hyper Trainer Marking Language", 
                    Option2 = "Hyper Text Marketing Language",
                    Option3 = "Hyper Text Markup Language",
                    Option4 = "Hyper Text Markup Leveler",
                    Answer = 2
                },
                new Question { 
                    Id = 2, 
                    QuestionText = "The brain of any computer system is", 
                    Image = null, 
                    Option1 = "ALU", 
                    Option2 = "Memory",
                    Option3 = "CPU", 
                    Option4 = "Control unit", 
                    Answer = 2 
                },
                new Question { 
                    Id = 3, QuestionText = "Which of the following computer language is used for artificial intelligence?", 
                    Image = null, 
                    Option1 = "FORTRAN",
                    Option2 = "PROLOG",
                    Option3 = "C", 
                    Option4 = "COBOL", 
                    Answer = 1 },
                new Question { 
                    Id = 4, 
                    QuestionText = "What is the primary requisite of a good computer programmer?", 
                    Image = null, 
                    Option1 = "Mathematical Mind",
                    Option2 = "Artistic mind", 
                    Option3 = "Logical Mind", 
                    Option4 = "Scientific Knowledge", 
                    Answer = 2 },
                new Question { 
                    Id = 5, 
                    QuestionText = "Name the device.", 
                    Image = "mouse.png", 
                    Option1 = "Keyboard", 
                    Option2 = "Monitor", 
                    Option3 = "Mouse", 
                    Option4 = "Graphics Card", 
                    Answer = 2 },
                new Question { 
                    Id = 6,
                    QuestionText = "The first mechanical computer designed by Charles Babbage was called", 
                    Image = null, 
                    Option1 = "Analytical Engine", 
                    Option2 = "Calculator", 
                    Option3 = "Processor", 
                    Option4 = "Abacus", 
                    Answer = 0 },
                new Question { 
                    Id = 7, 
                    QuestionText = "One byte is equivalent to", 
                    Image = null, 
                    Option1 = "4 bits",
                    Option2 = "8 bits",
                    Option3 = "16 bits",
                    Option4 = "32 bits",
                    Answer = 1 },
                new Question { 
                    Id = 8, 
                    QuestionText = "Web pages are written using", 
                    Image = null, 
                    Option1 = "FTP", 
                    Option2 = "UML", 
                    Option3 = "HTML", 
                    Option4 = "URL", 
                    Answer = 2 },
                new Question { 
                    Id = 9, 
                    QuestionText = "Which of the following is NOT operating system", 
                    Image = null, 
                    Option1 = "Dos", 
                    Option2 = "Unix", 
                    Option3 = "Window NT", 
                    Option4 = "CSS", 
                    Answer = 3 },
                new Question { 
                    Id = 10, 
                    QuestionText = "What is the full form of IP", 
                    Image = null, 
                    Option1 = "Interface Program", 
                    Option2 = "Interface Protocol", 
                    Option3 = "Internet program", 
                    Option4 = "Internet Protocol", 
                    Answer = 3 }
            );
        }
    }
}
