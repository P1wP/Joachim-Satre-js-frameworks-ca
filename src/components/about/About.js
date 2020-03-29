import React from "react";


export function About(){

    return(
        
        
        <div className="Content-sc-1vcdt9x-0 goklBH">
            <h1>JavaScript Frameworks Course Assignment</h1>
            <h2>Instructions</h2>
            <p>You can use either React or Vue for the assignment, and you can use any React or Vue UI 
                library (such as React Boostrap, Material UI or Bootstrap Vue) or write your own styles.</p>
            <p>We will be using the <a href="https://rawg.io/apidocs">RAWG Video Games Database API</a> for the assignment.</p>
            <p>The base URL for the calls will be </p>
            
                <code>https<span className="token">:</span><span className="token" >/</span><span className="token">/</span>api<span className="token" >.</span><span className="token property-access">rawg</span><span className="token">.</span><span className="token property-access">io</span><span className="token">/</span>api<span className="token">/</span>games</code>
                <p><strong>Only Level 1 is required, 2 and 3 are optional</strong></p>
                <h2>Level 1</h2
                ><p>Create a menu with the following paths:</p>
                <ul>
                    <li><code>/</code> - home page</li>
                    <li><code>/contact</code></li>
                    </ul>
                    <p>You will need to create routes for these as well as a route for the details page. This route can be <code>/game/:id</code></p>
                    
                    <h3>Home page</h3><p>Make a call to the base URL and display the games returned.</p>
                    <p>Each game should display the following:</p>
                    <ul>
                        <li><code>Title</code></li>
                        <li><code>Image</code></li>
                        <li><code>Rating</code></li>
                        <li><code>Release date</code></li>
                        <li>A <code>button/link</code> that takes the user to the game details page with the game id in the path (URL).</li>
                    </ul>
                        <p>(Always remember to inspect the results of on API calling using console.log or console.dir to see what the API returns and what properties are available).</p>
                        <p>There should be a search box above the results that filters the games on their titles.</p>

                        <h2>Game details page</h2>
                        <p>Retrieve the id from the URL, add it to the base URL and make an API call with this new URL.</p>
                        <p>Display the following with the results of the call:</p>
                        <ul>
                            <li><code>Title</code></li>
                            <li><code>Image</code></li>
                            <li><code>Description</code></li>
                            <li><code>Website link</code></li>
                        </ul>
                
                <h2>Contact page</h2>
                <p>This page should contain the following inputs and validation rules:</p>
                <ul>
                    <li><code>First name</code> - required, minimum 2 characters</li>
                    <li><code>Last name</code> - required, minimum 2 characters</li>
                    <li><code>Email</code> - required, must be in a valid email format</li>
                    <li><code>Message</code> - required, minimum 10 characters.</li>
                    </ul>
                <p>Ideally the form should display a message above itself if validation passes.</p>

                <h2>Level 2</h2>
                <h2>Game details page</h2>
                <p>Add components that display the game's genres and platforms as lists. You can style them like tags.</p>
                
                <h2>Favourites</h2>
                <p>Add a <code>favourite</code> or <code>like</code> button to each game result on the home page. Clicking on a <code>favourite</code> 
                button should add the game's required info (id, title, image, rating and release date) as an object to an array in local storage. Clicking it again should remove it.</p>
                <p>Add a <code>/favourites</code> menu item and path. This page should retrieve the favourites from local storage and display them.</p>
                <p>If your game list component is tightly coupled to the API call, this would be a good time to refactor and pass in the array of games as a prop.</p>
                
                <h2>Level 3</h2>
                <p>Using a state management solution like <code>Redux</code>, the <code>useReducer</code> hook or <code>Vuex</code>, 
                store the results of the API call in global state. On the home and game details page the game(s) should be retrieved from the global state, not API calls.</p>
                <p>The favourites should also be added/removed from the state rather than local storage.</p>

                <h2>Submission</h2>
                <ul>
                    <li>Create a repository in your GitHub account called <code>your-name-js-frameworks-ca</code>, e.g. <code>mary-smith-js-frameworks-ca</code> and make sure it's public.</li>
                    <li>Add, commit and push all your code to this repo.</li>
                    <li>Submit the repo link.</li>
                </ul>
            </div>

      
        
    );
};

export default About;