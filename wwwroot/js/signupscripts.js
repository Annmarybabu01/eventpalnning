document.getElementById('dateOfBirth').addEventListener('change', function () {
    var selectedDate = this.value; // Gets the date in YYYY-MM-DD format
    if (selectedDate) {
        // Log the selected date (which is already in YYYY-MM-DD format)
        console.log('Selected date (YYYY-MM-DD):', selectedDate);
        // Convert to Date object to check validity
        var date = new Date(selectedDate);
        if (isNaN(date.getTime())) {
            console.error('Invalid date:', selectedDate);
            return;
        }
        // Reformatting date to YYYY-MM-DD (the format expected by the input)
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2); // Ensure two digits for month
        var day = ('0' + date.getDate()).slice(-2); // Ensure two digits for day
        var formattedInputDate = `${year}-${month}-${day}`;
        // Log the formatted date for input field
        console.log('Formatted date for input field:', formattedInputDate);
        // Optionally, set the formatted date back to the input field (not needed if unchanged)
        this.value = formattedInputDate;
    } else {
        console.log('No date selected.');
    }
});