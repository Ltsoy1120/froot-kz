const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const config = require("./app/config");
const Payment = require("./app/models/Payment");
const User = require("./app/models/User");
const Room = require("./app/models/Room");

mongoose.connect(config.db.url + "/" + config.db.name, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once("open", async () => {
  try {
    await db.dropCollection("payments");
    await db.dropCollection("users");
    // await db.dropCollection('calendarEvents')
    await db.dropCollection("rooms");
    await db.dropCollection("contentlinks");
  } catch (e) {
    console.log("Collection were not present, skipping drop...");
  }
  const [user, accountant] = await User.create(
    {
      workEmail: "user@user.com",
      surname: "Иванов",
      name: "Иван",
      patronymic: "Иванович",
      position: "менеджер",
      telegramName: "@IvanIvanov",
      phone: "+7 777 77 77 77",
      password: "12345a",
      role: [
        "viewAllPayments",
        "stopRepeatabilityPayment",
        "addPayment",
        "editPayment",
        "cancelApprovedPayment",
        "cancelPayedPayment",
        "bookMeetingRoom",
        "editBookedMeetingRoom",
        "deleteBookedMeetingRoom",
        "viewBookingsMeetingRoom",
        "addContentlink",
        "viewOwnContentlinks"
      ],
      token: [nanoid(), nanoid()]
    },
    {
      workEmail: "accountant@accountant.com",
      surname: "Петрова",
      name: "Ольга",
      patronymic: "Петровна",
      position: "бухгалтер",
      telegramName: "@OlgaPetrova",
      phone: "+7 555 555 55 55",
      password: "12345a",
      role: [
        "viewAllPayments",
        "stopRepeatabilityPayment",
        "addPayment",
        "editPayment",
        "payPayment",
        "viewToBePaid",
        "viewTodayPayments",
        "cancelApprovedPayment",
        "cancelPayedPayment",
        "bookMeetingRoom",
        "editBookedMeetingRoom",
        "deleteBookedMeetingRoom",
        "viewBookingsMeetingRoom"
      ],
      token: [nanoid(), nanoid()]
    },
    {
      workEmail: "director@director.com",
      surname: "Директор",
      name: "Директор",
      patronymic: "Директор",
      position: "директор",
      telegramName: "@director",
      phone: "+7 555 555 55 55",
      password: "12345a",
      role: [
        "viewAllPayments",
        "addPayment",
        "editPayment",
        "approvePayment",
        "postponePayment",
        "viewTodayPayments",
        "cancelApprovedPayment",
        "cancelPayedPayment",
        "deletePayment",
        "stopRepeatabilityPayment",
        "authorizeUser",
        "editUser",
        "deleteUser",
        "viewUsers",
        "bookMeetingRoom",
        "editBookedMeetingRoom",
        "deleteBookedMeetingRoom",
        "viewBookingsMeetingRoom",
        "addNewMeetingRoom",
        "deleteMeetingRoom",
        "addContentlink",
        "viewOwnContentlinks",
        "viewAllContentlinks",
        "addNews",
        "viewAllNews",
        "changeStatusNews"
      ],
      token: [nanoid(), nanoid()]
    },
    {
      workEmail: "admin@admin.com",
      surname: "Admin",
      name: "Admin",
      patronymic: "Admin",
      position: "admin",
      telegramName: "@admin",
      phone: "+7 555 555 55 55",
      password: "12345a",
      role: [
        "viewAllPayments",
        "addPayment",
        "editPayment",
        "approvePayment",
        "payPayment",
        "postponePayment",
        "viewToBePaid",
        "viewTodayPayments",
        "cancelApprovedPayment",
        "cancelPayedPayment",
        "deletePayment",
        "stopRepeatabilityPayment",
        "authorizeUser",
        "editUser",
        "deleteUser",
        "viewUsers",
        "bookMeetingRoom",
        "editBookedMeetingRoom",
        "deleteBookedMeetingRoom",
        "viewBookingsMeetingRoom",
        "addNewMeetingRoom",
        "deleteMeetingRoom",
        "addContentlink",
        "viewOwnContentlinks",
        "viewAllContentlinks",
        "addNews",
        "viewAllNews",
        "changeStatusNews"
      ],
      token: [nanoid(), nanoid()]
    }
  );
  await Payment.create(
    {
      user: user,
      paided: false,
      approved: false,
      repeatability: false,
      purpose: "за товар",
      payer: "Froot_Middle_Asia",
      invoice: "1",
      sum: "200000",
      dateOfPayment: "2021-02-27",
      contractor: "P&G",
      priority: "важный",
      image: "invoice.jpg"
    },
    {
      user: accountant,
      paided: false,
      approved: false,
      repeatability: false,
      purpose: "за товар",
      payer: "Froot_Middle_Asia",
      invoice: "2",
      sum: "100000",
      dateOfPayment: "2021-03-01",
      contractor: "BAT",
      priority: "важный",
      image: "invoice.jpg"
    }
  );
  await Room.create(
    {
      room: "1"
    },
    {
      room: "new room"
    }
  );

  await db.close();
});
