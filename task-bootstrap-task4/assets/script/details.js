

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      arrayEvents: [],
    }
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(data => data.json())
    .then(res => {
      dataEvents = res;
      const params = new URLSearchParams(location.search);
      const paramsId = params.get('id');
      const event = dataEvents.events.find(e => e._id == paramsId);
      console.log(event);
    })
    .catch(error => console.log(error));

  },



})
app.mount('#app');
