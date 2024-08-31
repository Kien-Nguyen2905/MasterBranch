1>Propose a data structure to use for this screen. How the backend should return data
to you. Please explain why you choose this structure?
The backend should return data in the following format:
{
"events": [
{
"id": "1", => A unique identifier for each event.
"title": "Doctor Appointment", => The name of the event
"startTime": "2024-09-10T09:00:00Z", => date start
"endTime": "2024-09-10T10:00:00Z", => date end
"date": "2024-09-10", => The specific date of the event
"eventType": "appointment", => Differentiates between appointments and events
"isRecurring": false, => Boolean indicating whether the event repeats
},
]
}

4> Let us know what you have learned from this project?
Using dayjs library
Logic of the component division
Using Antd for UI

5> Let us know if you can continue to develop this project, and what will you work on.
These could be concepts that you’re still not completely done with or some features
that you think could make this layout better?
I will develop the recurring event function that I haven't completed in project
I will develop the feature of notification for user by gmail when approach their day was set up
