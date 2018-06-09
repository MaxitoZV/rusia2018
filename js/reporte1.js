var app = new Vue(
  {
    el:'#app',
    data:{
      sinLog:true,
      usuario:'',
      datos:[],
      err:{flag:false,code:0,mesj:''}
    },
    methods:{
    }
  }
)
var cont=0;
var usrId="XXX";
var sec=0;
firebase.database().ref("usuarios")
.on("child_added", function(s1){
  var usr=s1.val();
  sec++;
  app.datos.push({id:usr.id,nombre:usr.nombre,contador:0,sec:sec});
  firebase.database().ref("apuestas/"+ usr.id)
  .on("child_added", function(s1){
    if(usrId!=usr.id){
      cont=0;
      usrId=usr.id;
    }
    s1.forEach(function(s2) {
      cont++;
      });
    for (var i = 0; i < app.datos.length; i++) {
      if(app.datos[i].id==usr.id){
        app.datos[i].contador=cont;
      }
    }
  });
});
