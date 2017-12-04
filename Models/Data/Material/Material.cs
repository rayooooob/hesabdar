using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using api.Models.Data.Account;

namespace api.Models.Data.Material
{
    public class Material: IEntityModel {
        [Key]
        public int Id {get; set;}
        public string Name {get; set;}
        public DateTime CreationTime { get ; set ; }
        [ForeignKey("Creator")]
        public int? CreatorId { get ; set ; }
        public User Creator { get ; set ; }
        public bool Deleted {get; set;}
    }
}