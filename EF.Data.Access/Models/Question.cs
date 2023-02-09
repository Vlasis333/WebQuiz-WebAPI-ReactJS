using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF.Data.Access.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string QuestionText { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string? Image { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Option1 { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Option2 { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Option3 { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Option4 { get; set; }
        public int Answer { get; set; }
    }
}
