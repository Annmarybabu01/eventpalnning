using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace eventpanning.Models
{
    public class Signin
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        [DisplayName("Firstname")]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [DisplayName("Lastname")]
        [StringLength(50)]
        public string LastName { get; set; }
        [Required]
        [DisplayName("Date of birth")]
        public int MyProperty { get; set; }
    }
}
