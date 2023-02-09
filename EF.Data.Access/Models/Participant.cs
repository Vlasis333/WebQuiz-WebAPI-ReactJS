using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF.Data.Access.Models
{
    public class Participant
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(80)")]
        public string Name { get; set; }
        public int Score { get; set; }
        public int TimeTaken { get; set; }
    }
}
