namespace HotelBookingBackend.Models
{
    public class Room
    {
        public int RoomId { get; set; }
        public int HotelId { get; set; }
        public string RoomType { get; set; }
        public float Price { get; set; }
        public bool Availability { get; set; }
        public string ImgUrl { get; set; }

    }
}
