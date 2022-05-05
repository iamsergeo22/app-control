const app = Vue.createApp({
     // Data
     data() {
          return {
               playerHealth:  100,
               monsterHealth: 100,
               currentRound: 0,
               winner: null,
               LogMessages: []

          };
     },

     watch: {
          playerHealth(value) {
               if (value <= 0 && this.monsterHealth <= 0) {
                    // It is a Draw
                    this.winner = 'draw';
               } else if (value <= 0) {
                    // PLAYER LOST
                    this.winner = 'monster';
               }
          },

          monsterHealth(value) {
               if (value <= 0 && this.playerHealth <= 0) {
                    // It is a Draw
                    this.winner = 'draw';
               } else if (value <= 0) {
                    // Monster LOST
                    this.winner = 'player';
               }
          },


     },

     computed: {
          monsterBarStyles() { if (this.monsterHealth <= 0) {
               return {width: '0%' };
          }
               return {width: this.monsterHealth + '%' };
          },

          playerBarStyles() {
               if (this.playerHealth <= 0) {
                    return {width: '0%' };
               }
               return {width: this.playerHealth + '%' };
          },

          mayUseSpecialAttack() {
               return this.currentRound % 3 !== 0;
          }


     },

     // METHODS
     methods: {

          startGame() {
               this.playerHealth = 100;
               this.monsterHealth = 100;
               this.currentRound = 0;
               this.winner = null;
               this. LogMessages = [];
          },
          attackMonster() {
               this.currentRound++;
               const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
               this.monsterHealth -= attackValue;
               this.addLogMessage('player', 'attack', attackValue);
               this.attackPlayer();
          },

          attackPlayer() {
               const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
               this.playerHealth -= attackValue;
               this.addLogMessage('monster', 'attack', attackValue);
          },

          specialAttackMonster() {
               this.currentRound++;
               const attackValue = Math.floor(Math.random() * (25 - 10)) + 15;
               this.monsterHealth -= attackValue;
               this.addLogMessage('player', 'attack', attackValue);
               this.attackPlayer();
          },

          healPlayer() {
               this.currentRound++;
               const healValue = Math.floor(Math.random() * (20 - 8)) + 8;
               if (this.playerHealth + healValue > 100) {
                    this.playerHealth = 100;
               } else {
                    this.playerHealth += healValue;
               }

               this.addLogMessage('player', 'heal', healValue);
         
               this.attackPlayer();

          },

          surrender() {
               this.winner = 'monster';
          },

          addLogMessage(who, what, value) {
               this.LogMessages.unshift(
                    {
                         actionBy: who,
                         actionType: what,
                         actionValue: value
                    }
               );
          },


     },

});

app.mount('#game');