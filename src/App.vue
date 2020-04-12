<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

html { 
  font-size: 62.25%;
}

@media screen and (max-width: 1000px) {
  html { 
    font-size: 52%;
  }
}


@media screen and (max-width: 600px) {
  html { 
    font-size: 46%;
  }
}

:root {
  //colors
  --blue: #388087;
  --light-blue: #6FB3B8;
  --pale-blue: #BADFE7;
  --green: #C2EDCE;
  --grey: #F6F6F2; 
  --red: #961823;
  --text: #343b35;

  //spacing
  --space-sm: 1.2rem;
  --space-md: 2rem;
  --space-lg: 3.4rem;

  //font-sizes
  --font-sm: 1.8rem;
  --font-md: 2.2rem;
  --font-lg: 3.6rem;

  //misc
  --border-rad: 1rem;
  --default-border: solid 1.2px var(--pale-blue);

}
</style>
