# Integrating With HubSpot I: Foundations Practicum

## Overview
This is my practicum project for the **Integrating With HubSpot I: Foundations** course.  
The application is a Node.js project that interacts with the HubSpot API to:

- Display a list of contacts with custom properties (`Genre` and `Rating`)
- Add new contacts via a form
- Persist data using a **Private App** token

---

## HubSpot CRM Records List
For this practicum, custom objects were not available, so the **Contact object** was used instead.  
Custom properties `Genre` and `Rating` were added to the Contact object, and sample records were created.  

You can view the records here:  
[HubSpot Contacts List](https://app-na3.hubspot.com/contacts/343026064/contacts/list/view/all)

---

## Features

- **Homepage (`/`)**: Shows all contacts in a table with Name, Email, Genre, and Rating
- **Add Contact Form (`/update-cobj`)**: Add a new contact with all required fields
- **API Integration**: Uses HubSpot Private App token and Axios for API calls
- **Pug Templates**: For rendering HTML
- **CSS**: Minimal styling in `public/css/style.css`

---

## Folder Structure

---

## Notes
- Private App token is used locally and **not included in the repository** for security.
- All records are managed through the HubSpot API using the Contact object.