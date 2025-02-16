# Rock Paper Scissors Lizard Spock

## Project Description [UPDATE REQUIRED]
Rock Paper Scissors Lizard Spock is an extension of the classic game, "Rock Paper Scissors" - the addition of two new symbols, Lizard and Spock, and their respective rules, make winning outcomes more likely! This application will allow the user to play against the computer which will pick one of the five symbols randomly to play against you. Reckon you can beat it?

![Website Mockup Screenshot](assets/screenshots/screenshot-mockup.png) 

## Project Principles [UPDATE REQUIRED]
1. **Mobile-first development:** The website has been designed with responsiveness in mind. All elements and structures were first created to fit mobile screens, with additional styling and classes to ensure responsiveness on larger screens. This is particularly important with a small and simple application such as this, as it is well suited for mobile interaction. 
2. **Accessibility:** Code used within the project is compliant with best practice for accessibility. The application is also intentionally designed not to utilise images which will ensure rapid loading.


## Wireframes [UPDATE REQUIRED]
Balsamiq Wireframes software was used during the planning process to establish a general structure the game page. 

Significant changes between the structure indicated in the wireframes versus the end product include:
- Navigation bar items were changed to align to the right side of the bar rather than the left.
- Additional items were added to the navigation bar to help users navigate to lessons and clinics sections, and a link to the Testimonials page was also added after this had been developed.
- A single hero image spanning the full width of the header was implemented, rather than a carousel of different images.
- Additional lead text was included above the lessons and clinics sections on the homepage to provide context about each, and how they differ, helping the user decide which is better for them. 
- The details in the footer were compressed (e.g. social media links changed from list to icons and put within the contact details list, same with address) to make the footer less cramped, particularly on smaller screens.
- Split the date fields in the forms into arrival and departure dates since this would be more informative for both booking and hiring applications.
- Final product uses drop-down select menus rather than checkboxes, where possible, in booking and hiring forms to better utilise space.
- Differently styled border established around booking and hiring forms to distinguish these areas from the rest of the site.

**Homepage** <br>
![Balsamiq Homepage Screenshot](assets/screenshots/screenshot-balsamiq-homepage.png)

**Booking page** <br>
![Balsamiq Booking Screenshot](assets/screenshots/screenshot-balsamiq-booking.png)

**Hiring page** <br>
![Balsamiq Hiring Screenshot](assets/screenshots/screenshot-balsamiq-hiring.png)

**Form success page** <br>
![Balsamiq Success Screenshot](assets/screenshots/screenshot-balsamiq-success.png)

**Testimonials page** <br>
![Balsamiq Testimonials Screenshot](assets/screenshots/screenshot-balsamiq-testimonials.png)

## Features

### Existing Features
#### 1. Header [UPDATE REQUIRED]
Simple header section containing the title of the project and laying out the primary font and colour scheme for the rest of the page.

#### 2. Information section - game description and rules [UPDATE REQUIRED]
Drop-down sections contain information about the game and the associated rules, including new rules for new gestures (Lizard & Spock). 

Directly below the navigation bar at the home page, a header and hero image area has been created. This area is covered by a responsive, high-quality hero image that stretches to fit the screen size. This image was used as a source for selecting a colour scheme for the website as a whole. The area also contains a title, subtitle and lead text intoducing the school at a glance, and this is superimposed over a semi-transparent colour block to make it readable against the image in the background. The font size of the lead text decreases below 768px screen size in order to prevent overflow.

![Hero Area Screenshot](assets/screenshots/screenshot-hero-area.png)

#### 3. Game outcome area [UPDATE REQUIRED]
The first element within the main area of the home page is the "Reasons" section, which provide users with several benefits of booking with this ski school. The reasons are kept punchy and concise, one short sentence each, with icons for visual guidance. The reasons section is responsive - on screens below 1200px the items appear stacked vertically, while on larger screens they split into two columns to better utilise space. 

**Up to 1200px** <br>
![Reasons Area Screenshot - small screens](assets/screenshots/screenshot-reasons-small.png)

**Over 1200px** <br>
![Reasons Area Screenshot - large screens ](assets/screenshots/screenshot-reasons-large.png)

#### 4. Game area [UPDATE REQUIRED]
Information about the instruction products on offer from the ski school are featured prominently on the main page. Bootstrap cards have been used to structure these sections, with custom styling applied to ensure they fit with the colour scheme and layout of the site. The cards are displayed responsively, taking up the full width of the screen on mobile, and splitting into two or four columns for medium (768px+) and large (1200+) screens. All cards contain a header image which is relevant to the type of instruction, as well as key information such as pricing, skill level requirement, group size and appropriate age.

Screenshots below are of the Lessons section - the same structure and styling is applied to the Clinics section.

**Up to 768px** <br>
![Lessons Area Screenshot - small screens](assets/screenshots/screenshot-lessons-small.png)

**768px to 1200px** <br>
![Lessons Area Screenshot - medium screens](assets/screenshots/screenshot-lessons-medium.png)

**Over 1200px** <br>
![Lessons Area Screenshot - large screens](assets/screenshots/screenshot-lessons-large.png)


#### 6. Stats Area [UPDATE REQUIRED]
The contact information for the ski school appears in a separate footer section, and this is applied consistently across all pages. The footer contains key contact information including the school's address, email address, phone number, and social media links. A table containing the school's opening times has also been included in this section. Icons have been included beside contact fields for visual guidance, as well clickable icons for the social media accounts. The footer is responsive, with the contact details and opening times stacking vertically on small screens, and horizontally on larger screens for the best utilisation of screen space.

**Up to 992px** <br>
![Contact Area Screenshot - small screens](assets/screenshots/screenshot-contact-small.png)

**Over 992px** <br>
![Contact Area Screenshot - large screens](assets/screenshots/screenshot-contact-large.png)


### Features to implement [UPDATE REQUIRED]
1. **"Our staff" page:** One of the "could-have" features identified during project planning was to include a dedicated page to introducing staff at the ski school. Bootstrap cards and grid could be used to create cards for each staff member and instructor, although I would need to consider how to differentiate these from the cards in the Lessons and Clinics areas. The cards would contain details about the staff member including name, short background description, and (importantly) any qualifications the individual has, in particular any which would allow them to instruct physically impaired clients. 

2. **Social events page:** Another "could-have" feature identified during conception was for a page of social events/sessions run by the ski school, to address needs of users who may be coming to the organisation not only for instruction but for the opportunity to connect with others with similar interests. 

3. **Testimonials carousel:** While the current Testimonials page is functionally sound, after implementation and review I am not completely happy with the appearance - I feel it looks blocky and uninteresting as it stands. One option to liven this element up would be to have a single carousel for testimonials, with controls to move between different testimonials. If I were to implement this, I would probably change the site structure by removing the separate Testimonials page and instead have this as another section on the main page, most likely underneath the Clinics section. 

4. **Key information page:** While this was not established as a potential feature during design, after implementing and reviewing the site, and from comments made by those I have asked to review the site, a dedicated area or page for key information pertaining to the school would be helpful. This would include information that is too wordy/specific to include in the contact/footer area, such as: FAQ on what equipment people should bring vs what they can hire; meeting points for ski school and other classes; emergency contact details; helpful information e.g. where to get lift passes, best restaurants in resort.


## Testing [UPDATE REQUIRED]
Testing was conducted throughout the development cycle of the project, using the deployed version of the website as this was deployed at a very early stage. DevTools was utilised extensively to facilitate the testing of the site's responsiveness on different screen sizes (phone, tablet, laptop, desktop) in accordance with industry standard breakpoints (https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints).

Both manual testing and validator testing were used to identify potential bugs and inefficiencies in the project code.
 
### Manual Testing [UPDATE REQUIRED]
I confirmed through manual testing that the website is responsive on all screen sizes and operates correctly on different browsers such as Chrome, Edge and Safari.
The navigation bar works correctly, taking the user to the appropriate section or page wherever they are on the site, and ensuring that the current page is highlighted on the bar.
The booking and hiring forms work correctly, requiring the user to input appropriate data for different fields (i.e. email must contain `@`, phone must contain number, etc.) and upon submitting, the user is brought to the form success page as intended.

Bugs resolved during manual testing:
- Testimonials page did not appear active on navigation bar when on the page. Simple fix by changing the element with the `active` class.
- I noticed that on smaller screens, the label for textareas in the hiring and booking form was extending beyond the edge of the text box. This was particularly pronounced on phone size screens. I used DevTools to inspect the label element and was able to identify a `white-space: nowrap` attribute, inherited from a bootstrap class which had been applied to the label, which was causing the issue. I looked this attribute up since I wasn't familiar with it and was able to find an alternative, `white-space: normal`, which fixed the issue. The textarea labels now word wrap appropriately onto multiple smaller screens. 

### Automated Testing [UPDATE REQUIRED]
During lighthouse testing of the booking form page, an accessibility issue was identified - specifically, the contrast between the labels and background was not high enough for normal text. This was resolved by lightening the secondary colour, creating greater contrast. Upon retesting with lighthouse in the same section, the issue was seen to be resolved. 

**Lighthouse testing results** 

Homepage <br>
![Homepage lighthouse test screenshot](assets/screenshots/screenshot-homepage-lighthouse-test.png)

### Validator Testing [UPDATE REQUIRED]

#### HTML
Homepage: No errors.

#### CSS
No bugs reported.
5 warnings were reported.<br>
![CSS Warnings Screenshot](assets/screenshots/screenshot-css-warnings.png) <br>
10 - Highlights Google Fonts library as external so cannot be checked, can be safely ignored <br>
24 - Pertains to use of CSS variables, can be safely ignored <br>
29 - Pertains to use of CSS variables, can be safely ignored <br>
102 - Result from autoprefixer, can be safely ignored <br>
103 - Result from autoprefixer, can be safely ignored <br>

Since none of the warnings were unexpected or any cause for concern, no action was taken to resolve these. 

#### JS

### Unfixed Bugs
- All bugs found were resolved.

### Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab.
- From the source section drop-down menu, select the Master Branch.
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The direct link to the deployed page can be found here - https://dtt2411.github.io/CI-Portfolio-Project-2/.

## Credits [UPDATE REQUIRED]

### Code
- Reference to Love Running and Boardwalk Games modules from CI full stack course were used for guidance on general structure and layout.
    - Love Running: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LRFX101+5/courseware/e805068059af42af87681032aa64053f/1da6ad13213740f1855a51d30a2375b1/
    - Boardwalk Games: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+BG+1/courseware/21d4dc3fa8f0407a8359ceb1d6fc0c51/c113d413c91d4d789399ce5b1303f2fa/

### Content
- Bootstrap structures (e.g. table, collapsible) and classes (e.g. text-center, text-md-start) were used to improve efficiency of html and css respectively. One bootstrap JS script was also used to provide functionality for the collapsible text content in the game information area. https://getbootstrap.com/docs/5.3/getting-started/introduction/.
- Google Fonts for custom fonts used throughout site. Link to embed code used: https://fonts.googleapis.com/css2?family=Jockey+One&family=Orbitron:wght@400..900&display=swap.
- Browser favicons were identified and downloaded from https://www.flaticon.com/. A Favicon converter (https://favicon.io/favicon-converter/) was used to create appropriately sized icons for different screen sizes.
- Icolour pallete (https://icolorpalette.com/palette-by-themes/ski) and Coolors (https://coolors.co/) were used for inspiration for colour schemes. 
- Amiresponsive (https://ui.dev/amiresponsive) was used to generate the mock-up image for the readme. 
- Balsamiq Wireframes (https://balsamiq.com/) was used extensively during planning to guide the structure and layout of the website. 
- W3C HTML Validator (https://validator.w3.org/#validate_by_input) was utilised extensively during testing.
- W3C CSS Validator (https://jigsaw.w3.org/css-validator/#validate_by_input) was also used during testing.
- Autoprefixer (https://autoprefixer.github.io/) was used to ensure portability of styles across different browsers. 
- Used contrast checker (https://webaim.org/resources/contrastchecker/) to check the viability of the colour scheme. 

### Media
- Font Awesome for iconography, link to personal kit: https://kit.fontawesome.com/3af9805755.js 