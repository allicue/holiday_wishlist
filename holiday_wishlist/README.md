# Holiday Wishlist

## Project Description

User should be able to create a wishlist for the holiday season. Once created and displayed, the user can send to family and friends who can anonymously cross items off the list if they purchased it. User can add on more items as they wish.

## Wireframes

Desktop Version:

Homepage: https://wireframe.cc/vA95Nu

Displays full navigation bar and countdown until Christmas / Hanukkah

View List: https://wireframe.cc/6roa8z

Displays actual wishlist items with item name, url, price and any additional info needed.

Tablet Version:

Homepage: https://wireframe.cc/r6lP0r

Layout will be the same but display will be a bit tighter.

View List: https://wireframe.cc/XPkQME

Items will be stacked instead of displayed side by side.

Mobile Version:

Homepage: https://wireframe.cc/I9XWk9

Header/navbar will be centered to take up as much space as possible.

View List: https://wireframe.cc/m8n2Vw

Items will be stacked instead of displayed side by side.

## Component Hierarchy

https://i.imgur.com/3Ywp6CR.jpg

## API and Data Sample

API Link: https://airtable.com/shrbX1r3bX6usJv4Z

API Snippet:

```
{
    "records": [
        {
            "id": "recO9gdC0cS2N6VHN",
            "fields": {
                "created-time": "2020-10-08T21:17:07.000Z",
                "item-url": "https://www.everlane.com/products/womens-day-boot-reknit-bone?locale=US&utm_medium=cpc&utm_source=pla-google&utm_campaign=838139507&utm_content=385748...",
                "price": 205,
                "title": "White Boots",
                "notes": "I'm a size 6.5 / 7!"
            },
            "createdTime": "2020-10-08T21:17:07.000Z"
        },
```

### MVP/PostMVP

#### MVP

- Create/Utlize Airtable Data
- Utlize React Router
- Create Pull Request
- Create Post Request
- Create Delete Request
- Add Feature that Crosses Out Items Once Someone Purchases An Item
- Utlize Flexbox

#### PostMVP

- Add Animation for Homepage Once Countdown Hits Zero Days
- Create Put Request for Editing Wishlist Items
- Add Functionality for More Than One User (Ie. Account Information, Login, Personalization, etc)

## Project Schedule

| Day    | Deliverable                                        | Status     |
| ------ | -------------------------------------------------- | ---------- |
| Oct 8  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Oct 9  | Project Approval                                   | Complete   |
| Oct 10 | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| Oct 13 | Actual code                                        | Complete   |
| Oct 14 | Initial Clickable Model                            | Complete   |
| Oct 14 | MVP                                                | Complete   |
| Oct 15 | Post-MVP                                           | Incomplete |
| Oct 16 | Presentations                                      | Incomplete |

## Timeframes

| Component                                         | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Database/Inputing Base Info              |    H     |     .5 hrs     |    .5 hrs     |    .5 hrs   |
| Build Out Foundation HTML/JS                      |    L     |      1 hr      |     .5 hrs    |    .5 hrs   |
| Build Out Routes for Navbar                       |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Create GET Request & Render to Page               |    H     |     2 hrs      |     3 hrs     |    3 hrs    |
| Create Form/Submit Button for Adding New Items    |    H     |     2 hrs      |     1 hr      |    1 hr     |
| Create POST Request to Add Items & Render to Page |    H     |     2 hrs      |     3 hrs     |    3 hrs    |
| Create DELETE Request to Delete Unwanted Items    |    M     |     3 hrs      |     3 hrs     |    3 hrs    |
| Basic CSS Styling                                 |    L     |     2 hrs      |     1.5 hrs   |    1.5 hrs  |
| Troubleshooting Flexbox                           |    H     |     3 hrs      |     1 hr      |    1 hr     |
| Create Countdown Component for Homepage           |    H     |     3 hrs      |     4 hrs     |    4 hrs    |
| Create Footer Component                           |    L     |     1 hrs      |     .5 hrs    |   .5 hrs    |
| Advance CSS Styling                               |    M     |     6 hrs      |     6 hrs     |    6 hrs    |
| Add Mobile & Table Breakpoints                    |    H     |     2 hrs      |     1.5 hrs   |   1.5 hrs   |
| Work on Post-MVP                                  |    H     |     4 hrs      |     0 hrs     |    0 hrs    |
| Lint Code / Organize File Structure               |    L     |      1 hr      |     .5 hrs    |     .5 hrs  |
| Total                                             |    NA    |    35.5 hrs    |    29 hrs     |    29 hrs   |

## SWOT Analysis

### Strengths:

Heading into project week, I know I have great time management skills, so I feel confident I'll meet my project deadlines on time. I also feel confident in styling.

### Weaknesses:

I'm still adjusting to the syntax when writing out components in React so I'm anticpiating a lot of time spent trying to debug code. I plan on overcoming this by referencing previous lectures & homeworks, asking a friend for assistance and/or leaning on my squad lead for help.

### Opportunities:

I think I can make a great base for an app that would be actually used by friends, family and others in real time once I learn how to implement user authentification.

### Threats:

I don't anticipate any threats arising, but worst case scenario would be my internet cutting out.
