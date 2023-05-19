    function megatonsToJoules() {
      var megatons = parseFloat(document.getElementById("megatonsInput").value);

      if (!isNaN(megatons)) {
        var joules = megatons * 4.184 * Math.pow(10, 15);
        var returnMass = document.getElementById("returnMass").checked;

        if (returnMass) {
          var mass = joules / (8.988 * Math.pow(10, 13));
          var massInTons = mass / 1000;;
          document.getElementById("massOutputkg").innerHTML = mass.toFixed(2) + " kg";
          document.getElementById("massOutputTonnes").innerHTML = massInTons.toFixed(2) + " Tonnes";
        } else {
          document.getElementById("massOutput").innerHTML = "";
        }

        document.getElementById("joulesOutput").innerHTML = joules.toFixed(2) + " joules";
      } else {
        document.getElementById("joulesOutput").innerHTML = "";
        document.getElementById("massOutput").innerHTML = "";
      }
    }

    function joulesToMegatons() {
      var joules = parseFloat(document.getElementById("joulesInput").value);

      if (!isNaN(joules)) {
        var megatons = joules / (4.184 * Math.pow(10, 15));
        var returnMass = document.getElementById("returnMass").checked;

        if (returnMass) {
          var mass = joules / (8.988 * Math.pow(10, 13));
          var massInTons = mass / 1000;;
          document.getElementById("massOutputkg").innerHTML = mass.toFixed(2) + " kg";
          document.getElementById("massOutputTonnes").innerHTML = massInTons.toFixed(2) + " Tonnes";
        } else {
          document.getElementById("massOutput").innerHTML = "";
        }

        document.getElementById("megatonsOutput").innerHTML = megatons.toFixed(2) + " megatons";
      } else {
        document.getElementById("megatonsOutput").innerHTML = "";
        document.getElementById("massOutput").innerHTML = "";
      }
    }

    function copyToClipboard(elementId) {
      var element = document.getElementById(elementId);
      var range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }

    function convertMass() {
      var uraniumMass = parseFloat(document.getElementById("uraniumMass").value);

      if (!isNaN(uraniumMass)) {
        var joules = uraniumMass * 8.988 * Math.pow(10, 13);
        var megatons = joules / (4.184 * Math.pow(10, 15));

        document.getElementById("megatonsOutputMass").innerHTML = megatons.toFixed(2) + " megatons";
        document.getElementById("joulesOutputMass").innerHTML = joules.toFixed(2) + " joules";
      } else {
        document.getElementById("megatonsOutput").innerHTML = "";
        document.getElementById("joulesOutput").innerHTML = "";
      }
    }