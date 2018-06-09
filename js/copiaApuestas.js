var config = {
  apiKey: "AIzaSyC9Defk0oP7ZQOu8wfrrlQIzE96pZbm1g0",
  authDomain: "polla2018v1.firebaseapp.com",
  databaseURL: "https://polla2018v1.firebaseio.com",
  projectId: "polla2018v1",
  storageBucket: "polla2018v1.appspot.com",
  messagingSenderId: "823725769579"
};
firebase.initializeApp(config);

var app = new Vue(
  {
    el:'#app',
    data:{
      titulo:'Copia Apuestas',
      usuario:'',
      sinLog:true,
      errmsj:''
    },
    methods:{
      creaGrupo:function(){
        firebase.database().ref('grupos/a/partidos/1').set({grupo:'a',id:1,equipo1:'Rusia',equipo2:'Arabia Saudí ',fecha:'Jueves 14 de junio',hora:'15.00',estadio:'Luzhniki Stadium Moscú',flag1:'rus',flag2:'ara'});
        firebase.database().ref('grupos/a/partidos/2').set({grupo:'a',id:2,equipo1:'Egipto',equipo2:'Uruguay',fecha:'Viernes 15 de junio',hora:'12.00',estadio:'Ekaterinburgo Arena',flag1:'egi',flag2:'uru'});
        firebase.database().ref('grupos/a/partidos/3').set({grupo:'a',id:3,equipo1:'Rusia',equipo2:'Egipto',fecha:'Martes 19 junio',hora:'18.00',estadio:'Zenit Arena San Petersburgo',flag1:'rus',flag2:'egi'});
        firebase.database().ref('grupos/a/partidos/4').set({grupo:'a',id:4,equipo1:'Uruguay',equipo2:'Arabia Saudí ',fecha:'Miércoles 20 junio',hora:'15.00',estadio:'Rostov Arena',flag1:'uru',flag2:'ara'});
        firebase.database().ref('grupos/a/partidos/5').set({grupo:'a',id:5,equipo1:'Arabia Saudí',equipo2:'Egipto',fecha:'Lunes 25 junio',hora:'12.00',estadio:'Volgogrado Arena',flag1:'ara',flag2:'egi'});
        firebase.database().ref('grupos/a/partidos/6').set({grupo:'a',id:6,equipo1:'Uruguay',equipo2:'Rusia',fecha:'Lunes 25 junio',hora:'14.00',estadio:'Samara Arena',flag1:'uru',flag2:'rus'});
        firebase.database().ref('grupos/b/partidos/1').set({grupo:'b',id:7,equipo1:'Marruecos',equipo2:'Irán',fecha:'Viernes 15 de junio',hora:'15.00',estadio:'Zenit Arena San Petersburgo',flag1:'mar',flag2:'ira'});
        firebase.database().ref('grupos/b/partidos/2').set({grupo:'b',id:8,equipo1:'Portugal',equipo2:'España',fecha:'Viernes 15 de junio',hora:'18.00',estadio:'Fisht Stadium Sochi',flag1:'por',flag2:'esp'});
        firebase.database().ref('grupos/b/partidos/3').set({grupo:'b',id:9,equipo1:'Portugal',equipo2:'Marruecos',fecha:'Miércoles 20 junio',hora:'12.00',estadio:'Luzhniki Stadium',flag1:'por',flag2:'mar'});
        firebase.database().ref('grupos/b/partidos/4').set({grupo:'b',id:10,equipo1:'Irán',equipo2:'España',fecha:'Miércoles 20 junio',hora:'18.00',estadio:'Kazan Arena',flag1:'ira',flag2:'esp'});
        firebase.database().ref('grupos/b/partidos/5').set({grupo:'b',id:11,equipo1:'España',equipo2:'Marruecos',fecha:'Lunes 25 junio',hora:'18.00',estadio:'Kaliningrado Stadium',flag1:'esp',flag2:'mar'});
        firebase.database().ref('grupos/b/partidos/6').set({grupo:'b',id:12,equipo1:'Irán',equipo2:'Portugal',fecha:'Lunes 25 junio',hora:'18.00',estadio:'Mordovia Arena Saransk',flag1:'ira',flag2:'por'});
        firebase.database().ref('grupos/c/partidos/1').set({grupo:'c',id:13,equipo1:'Francia',equipo2:'Australia',fecha:'Sábado 16 junio',hora:'10.00',estadio:'Kazan Arena',flag1:'fra',flag2:'aus'});
        firebase.database().ref('grupos/c/partidos/2').set({grupo:'c',id:14,equipo1:'Perú',equipo2:'Dinamarca',fecha:'Sábado 16 junio',hora:'16.00',estadio:'Mordovia Arena Saransk',flag1:'per',flag2:'din'});
        firebase.database().ref('grupos/c/partidos/3').set({grupo:'c',id:15,equipo1:'Francia',equipo2:'Perú',fecha:'Jueves 21 junio',hora:'12.00',estadio:'Ekaterinburgo Arena',flag1:'fra',flag2:'per'});
        firebase.database().ref('grupos/c/partidos/4').set({grupo:'c',id:16,equipo1:'Dinamarca',equipo2:'Australia',fecha:'Jueves 21 junio',hora:'15.00',estadio:'Samara Arena',flag1:'din',flag2:'aus'});
        firebase.database().ref('grupos/c/partidos/5').set({grupo:'c',id:17,equipo1:'Dinamarca',equipo2:'Francia',fecha:'Martes 26 junio',hora:'14.00',estadio:'Luzhniki Stadium Moscú',flag1:'din',flag2:'fra'});
        firebase.database().ref('grupos/c/partidos/6').set({grupo:'c',id:18,equipo1:'Australia',equipo2:'Perú',fecha:'Martes 26 junio',hora:'14.00',estadio:'Fisht Stadium Sochi',flag1:'aus',flag2:'per'});
        firebase.database().ref('grupos/d/partidos/1').set({grupo:'d',id:19,equipo1:'Argentina',equipo2:'Islandia',fecha:'Sábado 16 junio',hora:'13.00',estadio:'Spartak Stadium Moscú',flag1:'arg',flag2:'isl'});
        firebase.database().ref('grupos/d/partidos/2').set({grupo:'d',id:20,equipo1:'Croacia',equipo2:'Nigeria',fecha:'Sábado 16 junio',hora:'19.00',estadio:'Kaliningrado Stadium',flag1:'cro',flag2:'nig'});
        firebase.database().ref('grupos/d/partidos/3').set({grupo:'d',id:21,equipo1:'Argentina',equipo2:'Croacia',fecha:'Jueves 21 junio',hora:'18.00',estadio:'Nizhny Novgorod Stadium',flag1:'arg',flag2:'cro'});
        firebase.database().ref('grupos/d/partidos/4').set({grupo:'d',id:22,equipo1:'Nigeria',equipo2:'Islandia',fecha:'Viernes 22 junio',hora:'15.00',estadio:'Volgogrado Arena',flag1:'nig',flag2:'isl'});
        firebase.database().ref('grupos/d/partidos/5').set({grupo:'d',id:23,equipo1:'Islandia',equipo2:'Croacia',fecha:'Martes 26 junio',hora:'18.00',estadio:'Rostov Arena',flag1:'isl',flag2:'cro'});
        firebase.database().ref('grupos/d/partidos/6').set({grupo:'d',id:24,equipo1:'Nigeria',equipo2:'Argentina',fecha:'Martes 26 junio',hora:'18.00',estadio:'Zenit Arena San Petersburgo',flag1:'nig',flag2:'arg'});
        firebase.database().ref('grupos/e/partidos/1').set({grupo:'e',id:25,equipo1:'Costa Rica',equipo2:'Serbia',fecha:'Domingo 17 junio',hora:'12.00',estadio:'Samara Arena',flag1:'cri',flag2:'ser'});
        firebase.database().ref('grupos/e/partidos/2').set({grupo:'e',id:26,equipo1:'Brasil',equipo2:'Suiza',fecha:'Domingo 17 junio',hora:'18.00',estadio:'Rostov Arena',flag1:'bra',flag2:'sui'});
        firebase.database().ref('grupos/e/partidos/3').set({grupo:'e',id:27,equipo1:'Brasil',equipo2:'Costa Rica',fecha:'Viernes 22 junio',hora:'12.00',estadio:'Zenit Arena San Petersburgo',flag1:'bra',flag2:'cri'});
        firebase.database().ref('grupos/e/partidos/4').set({grupo:'e',id:28,equipo1:'Serbia',equipo2:'Suiza',fecha:'Viernes 22 junio',hora:'18.00',estadio:'Kaliningrado Stadium',flag1:'ser',flag2:'sui'});
        firebase.database().ref('grupos/e/partidos/5').set({grupo:'e',id:29,equipo1:'Serbia',equipo2:'Brasil',fecha:'Miércoles 27 junio',hora:'18.00',estadio:'Spartak Stadium Moscú',flag1:'ser',flag2:'bra'});
        firebase.database().ref('grupos/e/partidos/6').set({grupo:'e',id:30,equipo1:'Suiza',equipo2:'Costa Rica',fecha:'Miércoles 27 junio',hora:'18.00',estadio:'Nizhny Novgorod Stadium',flag1:'sui',flag2:'cri'});
        firebase.database().ref('grupos/f/partidos/1').set({grupo:'f',id:31,equipo1:'Alemania',equipo2:'México',fecha:'Domingo 17 junio',hora:'15.00',estadio:'Luzhniki Stadium Moscú',flag1:'ale',flag2:'mex'});
        firebase.database().ref('grupos/f/partidos/2').set({grupo:'f',id:32,equipo1:'Suecia',equipo2:'Corea Sur',fecha:'Lunes 18 junio',hora:'12.00',estadio:'Nizhny Novgorod Stadium',flag1:'sue',flag2:'csr'});
        firebase.database().ref('grupos/f/partidos/3').set({grupo:'f',id:33,equipo1:'Alemania',equipo2:'Suecia',fecha:'Sábado 23 junio',hora:'15.00',estadio:'Fisht Stadium Sochi',flag1:'ale',flag2:'sue'});
        firebase.database().ref('grupos/f/partidos/4').set({grupo:'f',id:34,equipo1:'Corea Sur',equipo2:'México',fecha:'Sábado 23 junio',hora:'18.00',estadio:'Rostov Arena',flag1:'csr',flag2:'mex'});
        firebase.database().ref('grupos/f/partidos/5').set({grupo:'f',id:35,equipo1:'Corea Sur',equipo2:'Alemania',fecha:'Miércoles 27 junio',hora:'14.00',estadio:'Kazan Arena',flag1:'csr',flag2:'ale'});
        firebase.database().ref('grupos/f/partidos/6').set({grupo:'f',id:36,equipo1:'México',equipo2:'Suecia',fecha:'Miércoles 27 junio',hora:'14.00',estadio:'Ekaterimburgo Arena',flag1:'mex',flag2:'sue'});
        firebase.database().ref('grupos/g/partidos/1').set({grupo:'g',id:37,equipo1:'Bélgica',equipo2:'Panamá',fecha:'Lunes 18 junio',hora:'15.00',estadio:'Fisht Stadium Sochi',flag1:'bel',flag2:'pan'});
        firebase.database().ref('grupos/g/partidos/2').set({grupo:'g',id:38,equipo1:'Túnez',equipo2:'Inglaterra',fecha:'Lunes 18 junio',hora:'18.00',estadio:'Volgogrado Arena',flag1:'tun',flag2:'ing'});
        firebase.database().ref('grupos/g/partidos/3').set({grupo:'g',id:39,equipo1:'Bélgica',equipo2:'Túnez',fecha:'Sábado 23 junio',hora:'12.00',estadio:'Spartak Stadium Moscú',flag1:'bel',flag2:'tun'});
        firebase.database().ref('grupos/g/partidos/4').set({grupo:'g',id:40,equipo1:'Inglaterra',equipo2:'Panamá',fecha:'Domingo 24 junio',hora:'12.00',estadio:'Nizhny Novgorod Stadium',flag1:'ing',flag2:'pan'});
        firebase.database().ref('grupos/g/partidos/5').set({grupo:'g',id:41,equipo1:'Inglaterra',equipo2:'Bélgica',fecha:'Jueves 28 junio',hora:'18.00',estadio:'Kaliningrado Stadium',flag1:'ing',flag2:'bel'});
        firebase.database().ref('grupos/g/partidos/6').set({grupo:'g',id:42,equipo1:'Panamá',equipo2:'Túnez',fecha:'Jueves 28 junio',hora:'18.00',estadio:'Mordovia Arena Saransk',flag1:'pan',flag2:'tun'});
        firebase.database().ref('grupos/h/partidos/1').set({grupo:'h',id:43,equipo1:'Polonia',equipo2:'Senegal',fecha:'Martes 19 junio',hora:'12.00',estadio:'Spartak Stadium Moscú',flag1:'pol',flag2:'sen'});
        firebase.database().ref('grupos/h/partidos/2').set({grupo:'h',id:44,equipo1:'Colombia',equipo2:'Japón',fecha:'Martes 19 junio',hora:'15.00',estadio:'Mordovia Arena Saransk',flag1:'col',flag2:'jap'});
        firebase.database().ref('grupos/h/partidos/3').set({grupo:'h',id:45,equipo1:'Japón',equipo2:'Senegal',fecha:'Domingo 24 junio',hora:'15.00',estadio:'Ekaterinburgo Arena',flag1:'jap',flag2:'sen'});
        firebase.database().ref('grupos/h/partidos/4').set({grupo:'h',id:46,equipo1:'Polonia',equipo2:'Colombia',fecha:'Domingo 24 junio',hora:'18.00',estadio:'Kazan Arena',flag1:'pol',flag2:'col'});
        firebase.database().ref('grupos/h/partidos/5').set({grupo:'h',id:47,equipo1:'Senegal',equipo2:'Colombia',fecha:'Jueves 28 junio',hora:'14.00',estadio:'Samara Arena',flag1:'sen',flag2:'col'});
        firebase.database().ref('grupos/h/partidos/6').set({grupo:'h',id:48,equipo1:'Japón',equipo2:'Polonia',fecha:'Jueves 28 junio',hora:'14.00',estadio:'Volgogrado Arena',flag1:'jap',flag2:'pol'});

      },

      copiar:function(){

        firebase.database().ref("usuarios")
        .on("child_added", function(s1){
          var usr=s1.val();

          console.log(usr.id);
          //
          firebase.database().ref("apuestas/"+ usr.id)
          .on("child_added", function(s1){
            s1.forEach(function(s2) {
              //console.log(s2.key);
              var apta=s2.val();
              firebase.database().ref("apuestasX/"+  s2.key + "/"+ usr.id).set(
                {
                  gol1:apta.gol1,
                  gol2:apta.gol2,
                  iduser:usr.id,
                  usrFoto:usr.foto,
                  usrName:usr.nombre,
                  usrMail:usr.mail
                }
              ) ;
                //console.log("apuestasX"+ "/"+ s2.key + "/"+ usr.id);
                //console.log(usr.id +"-" + usr.nombre+ "\\"+ s1.key + "\\"+ s2.key);

              });

          });

          //
        });


      }
    }
  }
)

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    app.usuario=user.displayName;
    app.sinLog=false;
    app.usuario={
      nombre:user.displayName,
      mail:user.email,
      foto:user.photoURL,
      id:user.uid};
  } else {
    app.sinLog=true;
  }
});

function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  try {
    firebase.auth().signInWithRedirect(provider);
  } catch (e) {
      console.log("Erroooooor");
  } finally {

  }
}

function onLoad() {
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      var token = result.credential.accessToken;
    }
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}
