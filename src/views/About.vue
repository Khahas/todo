
<template>
  <div>
    <span>
      Todo-listan ska ha ett tydligt tema som ska genomsyra hela applikationen.
      Vilket tema du väljer är helt valfritt men det måste finnas ett och det
      betyder att ni måste ägna lite tid åt att styla er applikation på ett
      passande sätt. 
      Några exempel på teman kan vara Star Wars, Mario, Natur,
      Hav, Skog, Någon Film, Serie och så vidare. 
      
      All kommunikation mellan komponenter ska ske via Vuex, förutom när det kommer till loopar, där är
      det tillåtet att använda sig av props. 
      
      En tydlig navbar ska finnas för att
      hantera navigationen. Det får inte förekomma några hårda sidomladdningar.
      
      På startsidan ska man tydligt kunna se vilka todo items som är uppskrivna.
      
      Man ska även kunna se vem (author) som har skrivit varje todo, en text som
      beskriver vad som ska göras på varje todo (innehåll/content) samt en
      timestamp (med svensk tid och datum) kopplad till varje todo. 
      När applikationen startar ska fyra stycken olika todo redan vara uppskrivna.
      Varje Todo ska kunna raderas med hjälp av någon form av knapp som tar bort
      den todon som blivit klickad på. Kom ihåg, listan ska då uppdateras utan
      att en hård sidomladdning genomförs. En about-sida med text (räcker med
      lorem ipsum) ska finnas med en egen route. En sida där man kan skapa en ny
      todo ska finnas, denna ska också ha en egen route. När man “submittat” sin
      nya todo så ska man omdirigeras till startsidan där den nya todon direkt
      ska ha dykt upp, och den ska då ha hamnat högst upp.
    </span>
  </div>
</template>
<script>
export default {
  name: "todos",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
