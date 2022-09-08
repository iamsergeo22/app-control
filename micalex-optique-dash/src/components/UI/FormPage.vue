<template>
     <div class="container">
          <form action="">
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Nom de la Société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Addresse de la Soiciété</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Numéro de la société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Type de Société</span>
                    <select class="form-select" id="inputGroupSelect01">
                         <option selected>Choose...</option>
                         <option value="1">One</option>
                         <option value="2">Two</option>
                         <option value="3">Three</option>
                    </select>
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Note de la société</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Logo de la société</span>
                    <input type="file" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Photos de la société</span>
                    <input type="file" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Nom de votre Agence</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Photo de l'Agence</span>
                    <input type="file" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Localisation</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                         aria-describedby="inputGroup-sizing-lg">
               </div>
               <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Description</span>
                    <textarea class="form-control" aria-label="With textarea" rows="5"></textarea>
               </div>

               <div style="text-align: right">
                    <button type="button" class="btn btn-danger" to="/portal">Soumettre</button>
               </div>
          </form>
     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     form,
     .input-group {
          padding: 1rem;
     }

     .container {
          margin: 2rem auto;
          max-width: 75rem;
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     span {
          font-weight: bold;
          font-size: 45px;
          color: #006A4A;
     }
</style>