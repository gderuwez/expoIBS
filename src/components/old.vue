<div class="w3-container">
  <!-- Moods -->
  <div class=" w3-half ">
    <div class="w3-deep-purple w3-border w3-center">
      <label v-scroll-to="'#humeurSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle')">Moods <i class="fas fa-chevron-down" v-show="!check.toggle"></i><i class="fas fa-chevron-up" v-show="check.toggle"></i></label>
      <label v-scroll-to="'#humeurMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle')">Moods <i class="fas fa-chevron-down" v-show="!check.toggle"></i><i class="fas fa-chevron-up" v-show="check.toggle"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(0)"></i>
    </div>
    <div class="empty">
      <span class="w3-text-red" v-show="errorHumor">Choose at least one mood</span>
    </div>
  </div>

  <transition-group id='humeurSmall' name="list" tag="ul" class=" w3-ul w3-row w3-hide-medium w3-hide-large">
    <li v-show="check.toggle" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, humeurs, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in humeursArray">{{item['text']}}</li>
  </transition-group>

  <hr class="w3-hide-medium w3-hide-large">

  <div class="w3-half">
    <div class=" w3-deep-purple w3-border w3-center">
      <label v-scroll-to="'#breakfastSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle2')">Breakfast <i class="fas fa-chevron-down" v-show="!check.toggle2"></i><i class="fas fa-chevron-up" v-show="check.toggle2"></i></label>
      <label v-scroll-to="'#breakfastMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle2')">Breakfast <i class="fas fa-chevron-down" v-show="!check.toggle2"></i><i class="fas fa-chevron-up" v-show="check.toggle2"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(1)"></i>
    </div>
    <div class="empty"></div>
  </div>

  <transition-group id='breakfastSmall' tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
    <li v-show="check.toggle2" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, breakfast, 'isActive1')" v-bind:class="{'w3-teal' : item.isActive1}" :key="'breakfast'+item.value" v-for="item in aliments">{{item.value}}</li>
  </transition-group>

  <transition-group id="humeurMed" name="list" tag="ul" class=" w3-ul w3-row w3-hide-small">
    <li v-show="check.toggle" class="w3-half w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, humeurs, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in humeursArray">{{item['text']}}</li>
  </transition-group>

  <transition-group id="breakfastMed" tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
    <li v-show="check.toggle2" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, breakfast, 'isActive1')" v-bind:class="{'w3-teal' : item.isActive1}" :key="'breakfast'+item.value" v-for="item in aliments">{{item.value}}</li>
  </transition-group>

  <!-- Lunch -->
  <div class="w3-half">
    <div class=" w3-deep-purple w3-border w3-center">
      <label v-scroll-to="'#lunchSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle3')">Lunch <i class="fas fa-chevron-down" v-show="!check.toggle3"></i><i class="fas fa-chevron-up" v-show="check.toggle3"></i></label>
      <label v-scroll-to="'#lunchMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle3')">Lunch <i class="fas fa-chevron-down" v-show="!check.toggle3"></i><i class="fas fa-chevron-up" v-show="check.toggle3"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(1)"></i>
    </div>
    <div class="empty"></div>
  </div>

  <transition-group id='lunchSmall' tag="ul" class=" w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
    <li v-show="check.toggle3" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, lunch, 'isActive2')" v-bind:class="{'w3-teal' : item.isActive2}" :key="'lunch'+item.value" v-for="item in aliments">{{item.value}}</li>
  </transition-group>

  <div class="w3-half">
    <div class="w3-center w3-deep-purple w3-border">
      <label v-scroll-to="'#DinnerSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle4')">Dinner <i class="fas fa-chevron-down" v-show="!check.toggle4"></i><i class="fas fa-chevron-up" v-show="check.toggle4"></i></label>
      <label v-scroll-to="'#DinnerMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle4')">Dinner <i class="fas fa-chevron-down" v-show="!check.toggle4"></i><i class="fas fa-chevron-up" v-show="check.toggle4"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(1)"></i>
    </div>
    <div class="empty"></div>
  </div>

  <transition-group id='DinnerSmall' tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
    <li v-show="check.toggle4" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, dinner, 'isActive3')" v-bind:class="{'w3-teal' : item.isActive3}" :key="'Dinner'+item.value" v-for="item in aliments">{{item.value}}</li>
  </transition-group>

  <transition-group id='lunchMed' tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
    <li v-show="check.toggle3" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, lunch, 'isActive2')" v-bind:class="{'w3-teal' : item.isActive2}" :key="'lunch'+item.value" v-for="item in aliments">{{item.value}}</li>
  </transition-group>

  <transition-group id="DinnerMed" tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
    <li v-show="check.toggle4" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, dinner, 'isActive3')" v-bind:class="{'w3-teal' : item.isActive3}" :key="'Dinner'+item.value" v-for="item in aliments">{{item.value}}</li>
  </transition-group>

  <hr>

  <div class=" w3-half">
    <div class="w3-center w3-deep-purple w3-border">
      <label v-scroll-to="'#Type'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle5')">Type <i class="fas fa-chevron-down" v-show="!check.toggle5"></i><i class="fas fa-chevron-up" v-show="check.toggle5"></i></label>
      <label v-scroll-to="'#TypeMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle5')">Type <i class="fas fa-chevron-down" v-show="!check.toggle5"></i><i class="fas fa-chevron-up" v-show="check.toggle5"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(2)"></i>
    </div>
    <div class="empty"><span class="w3-text-red" v-show="errorType">Choose a type</span></div>
  </div>

  <transition-group id="Type" tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
    <li v-show="check.toggle5" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, typesOfPoop, poopType, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in typesOfPoop">
      <div class="centering" style="width:9vh;">
        <img :src="require('../assets/'+item.value+'.png')" class="w3-image" alt="">
      </div>
    </li>
  </transition-group>

  <!-- Color -->
  <div class=" w3-half">
    <div v-scroll-to="'#Color'" class="w3-center w3-deep-purple w3-border">
      <label class="w3-xlarge" for="" @click="toggle('toggle6')">color <i class="fas fa-chevron-down" v-show="!check.toggle6"></i><i class="fas fa-chevron-up" v-show="check.toggle6"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(3)"></i>
    </div>
    <div class="empty"><span class="w3-text-red" v-show="errorColor">Choose a Color</span></div>
  </div>

  <transition-group id="TypeMed" tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
    <li v-show="check.toggle5" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, typesOfPoop, poopType, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in typesOfPoop">
      <div class="centering" style="width:9vh;">
        <img :src="require('../assets/'+item.value+'.png')" class="w3-image" alt="">
      </div>
    </li>
  </transition-group>

  <transition-group id="Color" tag="ul" class=" w3-ul w3-row" name="list">
    <li v-show="check.toggle6" class="w3-half w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, colorsofPoop, poopColor, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item['value']" v-for="item in colorsofPoop">{{item["text"]}}</li>
  </transition-group>

  <div class=" w3-half">
    <div class="w3-center w3-deep-purple w3-border">
      <label v-scroll-to="'#Time'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle7')">time <i class="fas fa-chevron-down" v-show="!check.toggle7"></i><i class="fas fa-chevron-up" v-show="check.toggle7"></i></label>
      <label v-scroll-to="'#TimeMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle7')">time <i class="fas fa-chevron-down" v-show="!check.toggle7"></i><i class="fas fa-chevron-up" v-show="check.toggle7"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(4)"></i>
    </div>
    <div class="empty"><span class="w3-text-red" v-show="errorTime">Choose a time</span></div>
  </div>

  <transition-group id="Time" tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
    <li v-show="check.toggle7" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, timesOfDay, time, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in timesOfDay">{{item.value}}</li>
  </transition-group>

  <div class="w3-half">
    <div class="w3-center w3-deep-purple w3-border">
      <label v-scroll-to="'#Date'" class="w3-xlarge" for="" @click="toggle('toggle8')">Date <i class="fas fa-chevron-down" v-show="!check.toggle8"></i><i class="fas fa-chevron-up" v-show="check.toggle8"></i></label>
      <i class="w3-large w3-right far fa-question-circle" @click="modal(5)"></i>
    </div>
    <div class="empty"></div>
  </div>

  <transition-group id="TimeMed" tag="ul" class="w3-ul w3-row w3-hide-small" name="list">
    <li v-show="check.toggle7" class="w3-half w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, timesOfDay, time, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in timesOfDay">{{item.value}}</li>
  </transition-group>

  <transition-group id="Date" tag="div" class="w3-row w3-margin-bottom" name="list">
    <input v-show="check.toggle8" :key="'dateInput'" class="w3-input w3-border-teal BorderCollapse" type="date" name="" value="">
  </transition-group>

  <div class="w3-display-container w3-padding">
    <div class="w3-display-middle">
      <button class="w3-btn w3-indigo" type="submit" name="button">New Poop</button>
      <span class="w3-text-red" v-if="allow">Please fill in the form</span>
    </div>
  </div>
</div>
