The app is called "Districtr" 🗺️
It allows users to add districts with descriptions what's interesting in them. The created districts can be later listed and displayed one-by-one.

Unfortunately the client set a Deadline for 2hours, so you have to do your best to implement at least Basic features

🎯 Basic features 🎯
Create a page with Region form
On /regions/new path create page with form with:

input for name
textarea for description
react-leaflet map for defining region points
Users should be able to define the borders by clicking on the map. Submitting the form should navigate to the /regions path.

Create a page with list of Region names
On /regions path create page displaying list of all created regions.

📚 Libraries to use
react-leaflet

@reach/router or any routing package you are familiar with

for UI and styling use a tool that you are comfortable with


🏅 Additional features 🏅
Create a Region view page
On /regions/:regionId path create page for displaying specific region. This page should display all region information with the area marked on the map.

After clicking a Region name in Regions list, navigate user to Region view.

Region form improvements
Add validation and error messages to fields.

name required, have at least 3 characters and at most 30
description required, have at least 10 characters, and at most 500
borders required, have at least 3 points (to make a triangle)
Add reset button to reset the borders.

Add undo button to revert last border point. It should work multiple times in a row to remove more than one border point.

Edit a Region form
Display edit button in Region view. Edit Region form should be properly initialized with Region data.

📚 Libraries to use
yup for validation


✨🏆✨ Super features ✨🏆✨
If implemented successfully before Deadline they show you are really experienced and effective developer.

Tests
Add tests for Regions display and forms.

Typescript
Make the app in Typescript without using any keyword.

📚 Libraries to use
@testing-library/react
