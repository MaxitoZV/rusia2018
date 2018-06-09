
var config = {
  apiKey: "AIzaSyC9Defk0oP7ZQOu8wfrrlQIzE96pZbm1g0",
  authDomain: "polla2018v1.firebaseapp.com",
  databaseURL: "https://polla2018v1.firebaseio.com",
  projectId: "polla2018v1",
  storageBucket: "polla2018v1.appspot.com",
  messagingSenderId: "823725769579"
};
firebase.initializeApp(config);
var contGrupo;
var contTotSinGrupo;

var app = new Vue(
  {
    el:'#app',
    data:{
      mostrar:true,
      title:'Hola ',
      sinLog:true,
      username:'',
      errmsj:'',
      usuario:'',
      apuestas:[],
      partidos:[
      ],
      grupoSel:0,
      porcentaje:'',
      porcentajeMain:'',
      baseStyles: {
        background: 'red'
      },
      baseStylesMain: {
        background: 'gray'
        }
    },

    methods:{
      salir1:function(){
        salir();
      },
      verApuesta:function(id){
        app.apuestas=[];
        for (var i = 0; i < app.partidos.length; i++) {
          if(app.partidos[i].id==id){
            app.partidos[i].ver=true;
            var usrTempId
            app.apuestas=[];
            var apuestasTemp=[];
            firebase.database().ref("apuestasX/"+id)
            .on("child_added", function(s1){
              var apuesta= s1.val();
              if (usrTempId!=apuesta.iduser){
                apuestasTemp.push({iduser:apuesta.iduser,
                  usrName:apuesta.usrName,
                  gol1:apuesta.gol1,
                  gol2:apuesta.gol2,
                  usrFoto:apuesta.usrFoto
                });
                usrTempId=apuesta.iduser;
              }
            });
            app.apuestas=apuestasTemp;
          }else {
            app.partidos[i].ver=false;
          }
          //
        }

      },
      selGrupo:function(e){
        var partidosTem=[];
        var numComp=0;
        firebase.database().ref("grupos/"+ this.grupoSel+"/partidos")
         .on("child_added", function(s){
           var partido= s.val();
           partidosTem.push({id:partido.id,
                            grupo:partido.grupo,
                            equipo1:partido.equipo1,
                            equipo2:partido.equipo2,
                            fecha:partido.fecha,
                            estadio:partido.estadio,
                            ver:false,
                            gol1:'',
                            gol2:'',
                            flag1:"https://s3.eu-central-1.amazonaws.com/mundial2018-mzv/" + partido.flag1 + ".png",
                            flag2:"https://s3.eu-central-1.amazonaws.com/mundial2018-mzv/" + partido.flag2 + ".png"
                          });
         });

        firebase.database().ref("apuestas/"+app.usuario.id + "/" + this.grupoSel)
        .on("child_added", function(s1){
          var apuesta= s1.val();
          contGrupo++;
          numComp++;
          porc=Math.round(numComp/6*100);
          if (porc<80){
            app.baseStyles={background:'red'};
          }else if (porc<100) {
            app.baseStyles={background:'yellow'};
          }else {
            app.baseStyles={background:'#81FA17'};
          }
          app.porcentaje=numComp + " de 6 - " + porc + " %";
          for (var i = 0; i < partidosTem.length; i++) {
            if(partidosTem[i].id==apuesta.id){
              partidosTem[i].gol1=apuesta.gol1;
              partidosTem[i].gol2=apuesta.gol2;
            }
          }
        });
        if (numComp==0){
          porc=0;
          app.porcentaje="0 de 6 - 0 %";
          app.baseStyles={background:'red'};
        }
        this.partidos=partidosTem;
      },

      //Graba la apuesta
      golChange:function(obj){
        var vgol1=Number(obj.gol1);
        var vgol2=Number(obj.gol2);
        if(vgol1!='NaN' && vgol2!='Nan'){
          console.log(obj);
          if (vgol1>=0 && vgol1<99 &&  vgol2>=0 && vgol2<99){
            console.log(vgol1 + "-" + vgol2);
            firebase.database().ref("apuestas/"+app.usuario.id + "/" + obj.grupo+ "/"+ obj.id)
               .set({id:obj.id,gol1:vgol1,gol2:vgol2});
            firebase.database().ref("apuestasX/"+ obj.id+"/"+app.usuario.id)
                .set({iduser:app.usuario.id,
                  gol1:vgol1,
                  gol2:vgol2,
                  usrMail:app.usuario.mail,
                  usrFoto:app.usuario.foto,
                  usrName:app.usuario.nombre
                });
          }
        }
      }
      //
    }

  }
)

var vcontAppTot

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    app.usuario=user.displayName;
    app.sinLog=false;
    app.usuario={
      nombre:user.displayName,
      mail:user.email,
      foto:user.photoURL,
      id:user.uid};
    firebase.database().ref("usuarios/"+app.usuario.id)
       .set(app.usuario);

    app.porcentajeMain=0 + " %";
    contTotSinGrupo=0;
    contGrupo=0;

    vcontAppTot=0;
    app.baseStylesMain={background:'red'};
    app.baseStyles={background:'transparent'};
    /*
    firebase.database().ref("apuestas/"+app.usuario.id)
    .on("child_added", function(s){
      var a =s.val();
        firebase.database().ref("apuestas/"+app.usuario.id+"/"+s.key)
        .on("child_added", function(s){
          vcontAppTot++;
          contTotSinGrupo++;
          var porc=Math.round(vcontAppTot/48*100);
          if (porc<80){
            app.baseStylesMain={background:'red'};
          }else if (porc<100) {
            app.baseStylesMain={background:'yellow'};
          }else {
            app.baseStylesMain={background:'#81FA17'};
          }
          app.porcentajeMain=porc + " %";

        });

    });
    */
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
  document.getElementById("app").style.display = "block";
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      var token = result.credential.accessToken;
    }
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

  // ...
  });

}

function salir() {
  firebase.auth().signOut().then(function() {
    }, function(error) {
      console.log(error);
      // An error happened.
    });
}
