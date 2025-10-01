'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // lat and long
    this.distance = distance; //km
    this.duration = duration; //minutes
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

// Test the Workout class
const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
console.log('Workout ID:', testWorkout.id);
console.log('Workout date:', testWorkout.date);

// Test the click method
testWorkout.click();
testWorkout.click();
console.log('Click count:', testWorkout.clicks);


class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        // call the parent constructor with super
        super(coords, distance, duration);
        // store the steps per minute
        this.cadence = cadence;
        // calculate the pace automatically
        this.calcPace();
        // generate the description now that we have the type
        this._setDescription();
    }

    calcPace (){
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}




class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        // store elevation in meters
        this.elevationGain = elevationGain;
        //calculate the speed automatically
        this.calcSpeed();
        // generate the description with the cycling type
        this._setDescription();
    }
    calcSpeed(){
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// Create a cycling workout
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

// Test inheritance - both have click method from Workout
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);
