function load(){

  var object = {name : "Bruno", counter : 0, observers:[] };


// creating and adding a listener to the object list
  object.addListener = function addListener(n){

    var listener = function (){
      return console.log("listener " + n + " at contador:" + object.counter);
    };
    object.observers.push(listener);
    return console.log("Listener added!");
  };

// event handler

  function count(){
    return object.counter += 1;
  }

  object.execute = function(){
    count();
    for (var i = 0 ; i <  object.observers.length; i++){
      console.log(object.observers[i]());
    }
  }

  object.addListener("1");
  object.addListener("2");
  object.addListener("3");
  object.execute();
  object.execute();

  return object;

};
