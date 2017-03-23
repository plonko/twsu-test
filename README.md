TWSU test
=====================

### Usage

```
npm install
npm start
open http://localhost:3000
```

### Notes on code

#### How it works
* The Node server serves the list of happy and sad words (thesauarus) as JSON. 
* App acts as the parent component, containing Input and Scale components (as well as a couple of Header tag components).
* When App loads it fetches thesauarus JSON from a URL, storing it in it's state object.
* Input passes it's 'value' state to App which passes it to Scale as a 'sentence' prop, and also passes the thesauarus as a 'thesauarus' prop.
* Scale now splits the 'sentence' prop value into an array of words.
* It calls functions which: 
	* Check these words against the words in thesauarus
	* Return an array with the number of happy 
	* Calculate the scale of happiness from these numbers
* The scale is given from 0-100, and then passed to style as props.

#### Thoughts and notes on decisions

* I did the classification on the front end because I wanted it to be done as the user typed, and I didn't want to keep sending data back and forth for a small operation as was required. Having now seen how it works I actually think it would be better to let the user type the sentence and submit it in one go, do the calculation server side and send it back. This would give the nice feeling that something is being calculated in a mysterious machine. Right now, although it's fast, it's a bit too all over the place. Doing it server side would've saved me from passing the thesauarus around too. I enjoyed doing it React though. 
* To isolate responibility I separated the Scale component out from the main App.
* I had a hard time deciding whether the list of happy and sad words (thesauarus) should be props or state. I actually wanted them only to exist on Scale, because that was only component which needed to know about it, and as it wasn't going to change, I thought it should be a prop. But due to the requirement that it be fetched from a server, I thought it would be more flexible to pull it in as state on the parent, and then pass it as a prop to Scale. 
* Normally it would show poor code organisation to fetch data in a UI component, and I would use a Flux architechture with Stores or similar to get the data, but as it was a small one-off fetch I think it's ok, and not worth implementing Flux for the sake of a small exercise. 
* Normally in this case of a small array I would probably just load it from a config or something, but understand the need to demo a fetch.
* I went with a polyfill for native JS Fetch, which returns a promise. I find that to be a nice syntax for handling requests and data loading. I tried SuperAgent wrapped in a native Promise but found the server error and JSON malformation handling better with this polyfill. I also considered Axios but was turned off by it's size, for this exercise at least.
* I could've added a loading icon or message while the JSON was being fetched.
* For some reason I was keen on keeping Scale as a stateless functional component. Much to my dismay I realised late last night that Scale absolutely should have state - for the 'scaleValue'! :( I tried converting it to a class and working with the scale as a value of state rather than props, but it was taking too long to get working. I think my original thinking was that the 'sentence' value was the state, and Scale didn't need to know about it as a state, just a prop, and from that it should just calculate the 'scaleValue', and use that to render the graphical scale.
* I considered whether to keep Scale's helper calulation functions in Scale, or externally. Externally meant better testing, but having them inside Scale meant not having to pass thesauarus around on every change of Input. I decided testability was more important. Of course had I done Scale as a class, this would have been avoided...
* I went with [Styled Components](https://github.com/styled-components/styled-components) for styling. It's slightly odd, but I've been meaning to try it, and it's actually very cool and powerful, and fun! I could've used a framework, but I figured as it's a small app there isn't much point in getting bogged down with loads of frameworky code.
* The visual design isn't very good! I like the SVGs but think of the UI as more of a wireframe. I spent far too long tweaking colours and fonts >_<
* I probably should've put in more media queries and explicit RWD, but it just sort of worked as it was, and I wasn't sure how I would visually make it better for mobile in the short amount of time I had.
* I would have liked to added some more functionality and better design. Such as: 
	* only triggering the Scale calulation funtions when the sentence value was >= the shortest thesauarus value
	* finding a better way to display the Sushi man joining the happy and sad faces.
* The 'countInstances' function returns a slightly complicated mapping. I don't think I needed to do it quite like that but it came about from refactoring a more explicit function to something DRYer, and as it is now you don't have to specify what the word categories are. It could be more readable though.
* I added some tests in Enzyme and Mocha/Chai. They're not exhaustive but they just demonstrate how I would do some unit tests of components.
* I added 'file-loader' as a plugin to Webpack to serve the SVG assets. 
* Doing so broke all my tests! That was painful to fix. 
* As the bundle.js came to 3mb with source maps, I considered writing production Webpack config to output a dist version, but as we still need a server for the JSON I didn't go too far with it. I made a 'start-min' script (npm run start-min) which runs a 'production' webpack config, which separates the source maps from the JS, and reduces the bundle size. 
* If you switch to the 'next' branch of [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) they have a more fleshed-out production config. You could ditch the separate Node server.js altogether then and just serve the JSON from the 'setup' method of 'webpack Dev Server'.
