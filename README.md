# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) HW State

1. Create a new React App using npx create-react-app
2. The objective is to create a react Switcher app
3. You can either create a seperate component for this or work in App.js to create the component state handling.
4. Initialize a state as below
```
state = { toggle: false }
```
5. Load a variable named onOrOff with the current value of the state.
6. The variable gets returned in a `<React.Fragment> </React.Fragment>` tag. (Removes the dependency of wrapping the components in a div tag)
```   
<React.Fragment>
        <p><b>Switch is { onOrOff }</b></p>
        <button onClick={this.toggleButton}>{ onOrOff }</button>
 </React.Fragment>
 ```
 7. The above gets returned and rendered to the dom. Create an event named toggleButton to change the state and render it in the DOM.
 
 Display:
 
 
 
 
 Bonus:
 
 Create different styling for when the state changes:
 - The text displayed turns to green when the Switch is On.
 - The text displayed turns to red when the Switch is Off.
