# jquery.fadeMeIn
This plugin makes your homepage very attractive, such as fade in your boxes with different duration.
## Install
```javascript
<script src="jquery.min.js"></script>
<script src="../jquery.fadeMeIn.min.js"></script>
```
or 
```javascript
bower install fademein
```
## Usage
```javascript
$(selector).fadeMeIn();
```
## Configuration
#### duration
set fadein duration for all elements
```javascript
default: 400
options: number
```
#### easing
set easing animation effect
```javascript
default: "swing"
options: string
```
#### random
has random fadein duration
```javascript
default: true
options: boolean / true or false
```
#### min
set min random duration
note: only used when random: true
```javascript
default: 100
options: number
```
#### max
set max random duration
note: only used when random: true
```javascript
default: 1000
options: number
```
## Demo
<a href="http://codepen.io/mel/full/GJqKrK" target="_blank">codepen.io/mel/full/GJqKrK</a>
## License
@author Mario Vidov <br />
@url <a href="http://vidov.it" target="_blank">www.vidov.it</a> <br />
@twitter  <a href="http://twitter.com/MarioVidov" target="_blank">MarioVidov</a> <br />
MIT license
