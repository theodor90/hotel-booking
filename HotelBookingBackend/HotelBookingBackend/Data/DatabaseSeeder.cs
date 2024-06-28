using HotelBookingBackend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelBookingBackend.Data
{
    public static class DatabaseSeeder
    {
        public static async Task SeedAsync(ApplicationDbContext context)
        {
            if (!context.Users.Any())
            {
                context.Users.AddRange(new List<User>
                {
                    new User { UserName = "admin", Email = "admin@admin.com", Password = "Admin123!" }
                });
            }

            if (!context.Hotels.Any())
            {
                if (context.Database.IsSqlServer())
                {
                    await context.Database.ExecuteSqlRawAsync("DBCC CHECKIDENT ('Hotels', RESEED, 0)");
                }

                context.Hotels.AddRange(new List<Hotel>
                {
                    new Hotel {
                        HotelName = "The Grand Oasis",
                        Location = "Cancun, Mexico",
                        Description = "A luxurious beachfront resort offering stunning views, world-class amenities, and vibrant nightlife.",
                        ImgUrl = "https://images.unsplash.com/photo-1535205148555-bcbbc2a78913?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

                    new Hotel {
                        HotelName = "Royal Continental",
                        Location = "Naples, Italy",
                        Description = "An elegant hotel overlooking the Bay of Naples, featuring refined rooms and a rooftop pool.",
                        ImgUrl = "https://images.unsplash.com/photo-1447722939828-559fee94b1f5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Sunset Retreat",
                        Location = "Bali, Indonesia",
                        Description = "A tranquil retreat nestled in the heart of Bali, surrounded by lush greenery and serene beaches.",
                        ImgUrl = "https://images.unsplash.com/photo-1682181221957-7c2d6a28bed3?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Skyline Suites",
                        Location = "New York, USA",
                        Description = "A modern hotel located in the heart of Manhattan, offering breathtaking city views and top-notch facilities.",
                        ImgUrl = "https://images.unsplash.com/photo-1661951933976-a0d4d156a67a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Mountain Escape",
                        Location = "Aspen, USA",
                        Description = "A cozy lodge in Aspen, perfect for skiing enthusiasts and nature lovers, with stunning mountain views.",
                        ImgUrl = "https://images.unsplash.com/photo-1674534627228-ebd30de6dc40?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Ocean Breeze",
                        Location = "Sydney, Australia",
                        Description = "A chic hotel situated near Bondi Beach, known for its stylish decor and close proximity to surfing spots.",
                        ImgUrl = "https://images.unsplash.com/photo-1648701182966-8373dc943e23?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Desert Mirage",
                        Location = "Dubai, UAE",
                        Description = "An opulent hotel in the heart of Dubai, offering luxurious accommodations and breathtaking desert views.",
                        ImgUrl = "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Lakeside Haven",
                        Location = "Lucerne, Switzerland",
                        Description = "A charming hotel by Lake Lucerne, offering picturesque views, relaxing ambiance, and excellent service.",
                        ImgUrl = "https://images.unsplash.com/photo-1609920867498-6ea87de68553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Urban Oasis",
                        Location = "Tokyo, Japan",
                        Description = "A contemporary hotel in the bustling Shibuya district, featuring modern amenities and convenient access to city attractions.",
                        ImgUrl = "https://images.unsplash.com/photo-1669711671802-7efa7074bd3f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    },

                    new Hotel {
                        HotelName = "Historic Charm",
                        Location = "Edinburgh, Scotland",
                        Description = "A beautifully restored hotel in Edinburgh's Old Town, combining historic charm with modern comforts.",
                        ImgUrl = "https://images.unsplash.com/photo-1711888752828-41644f87f4ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }

                });
            }

            if (!context.Rooms.Any())
            {
                context.Rooms.AddRange(new List<Room>
                {
                    // The Grand Oasis, Cancun, Mexico
                    new Room { HotelId = 1, RoomType = "Standard Room", Price = 150.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 1, RoomType = "Deluxe Suite", Price = 300.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 1, RoomType = "Ocean View Suite", Price = 450.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Royal Continental, Naples, Italy
                    new Room { HotelId = 2, RoomType = "Standard Room", Price = 200.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 2, RoomType = "Superior Room", Price = 250.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Sunset Retreat, Bali, Indonesia
                    new Room { HotelId = 3, RoomType = "Garden Villa", Price = 180.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1630404916223-9ffb5b5d51e2?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 3, RoomType = "Beachfront Villa", Price = 350.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1602693680203-a01c07f9dfae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 3, RoomType = "Pool Villa", Price = 400.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Skyline Suites, New York, USA
                    new Room { HotelId = 4, RoomType = "Standard Room", Price = 250.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 4, RoomType = "Executive Suite", Price = 500.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 4, RoomType = "Penthouse Suite", Price = 1000.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1660731513683-4cb0c9ac09b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Mountain Escape, Aspen, USA
                    new Room { HotelId = 5, RoomType = "Lodge Room", Price = 200.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1718359759373-1b2670b7478b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 5, RoomType = "Mountain View Suite", Price = 400.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Ocean Breeze, Sydney, Australia
                    new Room { HotelId = 6, RoomType = "Standard Room", Price = 180.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 6, RoomType = "Beach View Suite", Price = 320.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 6, RoomType = "Deluxe Suite", Price = 450.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1602693680203-a01c07f9dfae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Desert Mirage, Dubai, UAE
                    new Room { HotelId = 7, RoomType = "Standard Room", Price = 220.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 7, RoomType = "Desert View Suite", Price = 380.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 7, RoomType = "Royal Suite", Price = 750.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1615880325185-c794f749b92c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Lakeside Haven, Lucerne, Switzerland
                    new Room { HotelId = 8, RoomType = "Standard Room", Price = 210.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 8, RoomType = "Lakeside Suite", Price = 390.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 8, RoomType = "Penthouse Suite", Price = 600.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1718359759373-1b2670b7478b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Urban Oasis, Tokyo, Japan
                    new Room { HotelId = 9, RoomType = "Standard Room", Price = 200.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 9, RoomType = "Shibuya View Suite", Price = 350.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    // Historic Charm, Edinburgh, Scotland
                    new Room { HotelId = 10, RoomType = "Standard Room", Price = 180.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 10, RoomType = "Historic Suite", Price = 280.0f, Availability = false, ImgUrl = "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    new Room { HotelId = 10, RoomType = "Royal Suite", Price = 400.0f, Availability = true, ImgUrl = "https://images.unsplash.com/photo-1711899875738-3fc26f7adf1d?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }

                });
            }

            if (!context.Bookings.Any())
            {
                context.Bookings.AddRange(new List<Booking>
                {
                    new Booking {
                        GuestName = "Alice Smith",
                        GuestEmail = "alice.smith@example.com",
                        GuestPhone = "2345678901",
                        RoomId = 3,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(5)),
                        Status = "Confirmed"
                    },

                    new Booking {
                        GuestName = "Bob Johnson",
                        GuestEmail = "bob.johnson@example.com",
                        GuestPhone = "3456789012",
                        RoomId = 5,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(1)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(4)),
                        Status = "Pending"
                    },

                    new Booking {
                        GuestName = "Carol White",
                        GuestEmail = "carol.white@example.com",
                        GuestPhone = "4567890123",
                        RoomId = 8,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(2)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)),
                        Status = "Confirmed"
                    },

                    new Booking {
                        GuestName = "David Black",
                        GuestEmail = "david.black@example.com",
                        GuestPhone = "5678901234",
                        RoomId = 10,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(3)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(6)),
                        Status = "Cancelled"
                    },

                    new Booking {
                        GuestName = "Eva Green",
                        GuestEmail = "eva.green@example.com",
                        GuestPhone = "6789012345",
                        RoomId = 12,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(4)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(8)),
                        Status = "Confirmed"
                    },

                    new Booking {
                        GuestName = "Frank Brown",
                        GuestEmail = "frank.brown@example.com",
                        GuestPhone = "7890123456",
                        RoomId = 15,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(5)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(10)),
                        Status = "Pending"
                    },

                    new Booking {
                        GuestName = "Grace Wilson",
                        GuestEmail = "grace.wilson@example.com",
                        GuestPhone = "8901234567",
                        RoomId = 18,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(6)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(9)),
                        Status = "Confirmed"
                    },

                    new Booking {
                        GuestName = "Henry Taylor",
                        GuestEmail = "henry.taylor@example.com",
                        GuestPhone = "9012345678",
                        RoomId = 21,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(12)),
                        Status = "Confirmed"
                    },

                    new Booking {
                        GuestName = "Isla Harris",
                        GuestEmail = "isla.harris@example.com",
                        GuestPhone = "0123456789",
                        RoomId = 25,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(8)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(13)),
                        Status = "Pending"
                    },

                    new Booking {
                        GuestName = "Jack Martinez",
                        GuestEmail = "jack.martinez@example.com",
                        GuestPhone = "1230987654",
                        RoomId = 28,
                        CheckInDate = DateOnly.FromDateTime(DateTime.Now.AddDays(9)),
                        CheckOutDate = DateOnly.FromDateTime(DateTime.Now.AddDays(14)),
                        Status = "Confirmed"
                    }
                });
            }

            await context.SaveChangesAsync();
        }
    }
}
