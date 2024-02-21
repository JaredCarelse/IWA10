console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

// Deep copy Christmas object and modify name and date
let copied = Object.assign({}, holidays[christmas]); // Deep copy Christmas object
copied.name = 'X-mas Day'; // Change name to X-mas Day
let correctDate = new Date(copied.date); // Create a new date object
correctDate.setHours(0, 0, 0, 0); // Set hours and minutes to midnight
let isEarlier = correctDate.getTime() < holidays[6].date.getTime(); // Check if new date is earlier
console.log('New date is earlier:', isEarlier); // Log if the new date is earlier
if (isEarlier) {
    copied.date = correctDate; // Apply the corrected date if it's earlier
}

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id); // Log if there's a change in ID
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name); // Log if there's a change in name
console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime() || copied.date); // Log if there's a change in date

// Get first and last holiday
const holidayTimestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(...holidayTimestamps); // Find the minimum timestamp
const lastHolidayTimestamp = Math.max(...holidayTimestamps); // Find the maximum timestamp

const firstHolidayDate = new Date(firstHolidayTimestamp); // Convert the timestamp to date
const lastHolidayDate = new Date(lastHolidayTimestamp); // Convert the timestamp to date

console.log(`${String(firstHolidayDate.getDate()).padStart(2, '0')}/${String(firstHolidayDate.getMonth() + 1).padStart(2, '0')}/${firstHolidayDate.getFullYear()}`); // Log the first holiday date
console.log(`${String(lastHolidayDate.getDate()).padStart(2, '0')}/${String(lastHolidayDate.getMonth() + 1).padStart(2, '0')}/${lastHolidayDate.getFullYear()}`); // Log the last holiday date

// Select a random holiday
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length); // Generate a random index
const randomHoliday = holidays[randomIndex]; // Get the holiday object at the random index
const randomHolidayDate = randomHoliday.date; // Get the date of the random holiday
console.log(`${String(randomHolidayDate.getDate()).padStart(2, '0')}/${String(randomHolidayDate.getMonth() + 1).padStart(2, '0')}/${randomHolidayDate.getFullYear()}`); // Log the random holiday date

