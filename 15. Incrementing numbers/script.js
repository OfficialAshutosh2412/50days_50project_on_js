// const counters = document.querySelectorAll(".counter");
// counters.forEach((counter) => {
//   counter.innerText = "0";
//   const updateCounter = () => {
//     const targetValue = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = targetValue / 250;
//     let currentValue = 0;
//     if (c < targetValue) {
//       // counter.innerText = `${Math.ceil(c + increment)}`;
//       let newValue = Math.ceil(c + increment);
//       if (newValue >= 1000) {
//         newValue = (newValue / 1000).toFixed(1) + "K";
//       }
//       counter.innerText = newValue;
//       setTimeout(updateCounter, 1);
//     }
//   };
//   updateCounter();
// });

// const counters = document.querySelectorAll(".counter");
// counters.forEach((counter) => {
//   const targetValue = +counter.getAttribute("data-target");
//   const increment = targetValue / 250;
//   let currentValue = 0;

//   const updateCounter = () => {
//     if (currentValue < targetValue) {
//       currentValue += increment;
//       let displayValue;
//       if (currentValue >= 1000) {
//         displayValue = (currentValue / 1000).toFixed(1) + "k";
//       } else {
//         displayValue = Math.ceil(currentValue);
//       }
//       counter.innerText = displayValue;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = targetValue; // Ensure exact target value is displayed
//     }
//   };

//   updateCounter();
// });

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const targetValue = +counter.getAttribute("data-target");
  const increment = targetValue / 250;
  let currentValue = 0;

  const updateCounter = () => {
    if (currentValue < targetValue) {
      currentValue += increment;
      let displayValue;
      if (currentValue >= 1000) {
        displayValue = (currentValue / 1000).toFixed(1) + "K";
      } else {
        displayValue = currentValue.toFixed(0) + "+";
      }
      counter.innerText = displayValue;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText =
        targetValue >= 1000
          ? (targetValue / 1000).toFixed(1) + "K"
          : targetValue;
    }
  };

  updateCounter();
});
