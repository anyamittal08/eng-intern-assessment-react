This PR is my implementation of a stopwatch for Shopify’s Summer 2024 Internship React Assessment.

https://github.com/Shopify/eng-intern-assessment-react/assets/94716660/026ccacb-cb0c-4abc-8fa8-5683a0f8d697

The app can be found at: https://anyamittal08.github.io/eng-intern-assessment-react/

To run the app locally, run `npm run start` after cloning the repo and installing packages.

### Features:
- Start, Pause, and Reset functionality
- Laps:
    - Display absolute (time elapsed since the beginning) and relative lap (time elapsed since last lap) times
    - Display current lap time
    - Highlight best (relative) lap time in green and worst in red

### Code Style and Structure:
Given the limited scope of this project, the code structure was kept simple and unnecessary abstractions were avoided. To ensure code readability and maintainability, particularly as the project scales, I followed some best practices:

- Clean code with meaningful variable names, newline breaks to group related blocks of logic within bigger components, and code comments where necessary
- Reusable modular components to keep the code DRY
- A utility library for helper functions
- Utilized Tailwind for a streamlined CSS approach

### File Structure
<img width="221" alt="Screenshot 2024-01-29 at 7 37 11 PM" src="https://github.com/Shopify/eng-intern-assessment-react/assets/94716660/1f9e8fb9-371f-444d-97d8-0a308005c710">

`StopWatchButton` and `Lap` components are stored in the `components` directory, while the larger `StopWatch` component is stored in a `views` directory. 

Since this project only required 4 components, one directory would have been sufficient. However, in my experience building larger React projects, I know that components can quickly get out of hand and a single `component` directory can get messy. So I preemptively set up the file structure to make it easier to expand the project in a more organized way in the future.

### Testing
<img width="309" alt="Screenshot 2024-01-29 at 7 54 05 PM" src="https://github.com/Shopify/eng-intern-assessment-react/assets/94716660/4f467f66-88c4-4b9d-bd70-a051627054b0">

To run tests locally, run `npm run test`

Tests were written using Jest and React Testing Library. Real-life user interactions are simulated using Testing Library’s `userEvent` API. 

Since the scope of testing for this project was limited to a few click events, the more simplistic `fireEvent` would have sufficed. However, in the future, new functionality might be added where testing more complex user interactions is required (for example, for alarms and timers, user interactions might include user inputs which might trigger more than one event in the DOM). In these scenarios, `fireEvent` will no longer be reliable. (See: https://testing-library.com/docs/user-event/intro/). 

Using a more reliable API ensures the integrity of the tests and helps maintain uniformity with potential future unit tests.

### Future Improvements
**Stopwatch Accuracy:**
This stopwatch was implemented by updating the stopwatch state every 10 ms using setInterval. However, browser-based timers might not provide the level of precision required for production applications. In some  cases, they can result in longer than specified delays (see: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified). 

To improve the accuracy of the application, alternate implementations might be explored.

**UI enhancements:**
- Adding hover and active states to the buttons
- Accessibility improvements (eg colour considerations and auditory feedback)
- Color themes (eg light and dark modes)
- A cool stretch goal could be adding an analog clock face and allowing the user to switch between the two views
