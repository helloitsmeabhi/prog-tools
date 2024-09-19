document.addEventListener('DOMContentLoaded', () => {
    const runjavaButton = document.getElementById('java');
  
    runjavaButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/java.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runpythButton = document.getElementById('python');
  
    runpythButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/pyth.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runcppcButton = document.getElementById('cppc');
  
    runcppcButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/cppc.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runnodeButton = document.getElementById('node');
  
    runnodeButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/nodejs.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runcsButton = document.getElementById('cs');
  
    runcsButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/csharp.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const rungoButton = document.getElementById('go');
  
    rungoButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/golang.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runvscButton = document.getElementById('vsc');
  
    runvscButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/vscode.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runecButton = document.getElementById('eclipse');
  
    runecButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/eclipse.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runpycharmButton = document.getElementById('pycharm');
  
    runpycharmButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/pycharm.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runarduinoButton = document.getElementById('arduino');
  
    runarduinoButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/arduino.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runvsButton = document.getElementById('vs');
  
    runvsButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/vs.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runandroidButton = document.getElementById('android');
  
    runandroidButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/android.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runmysqlButton = document.getElementById('mysql');
  
    runmysqlButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/mysqldb.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runmongoButton = document.getElementById('mongo');
  
    runmongoButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/mongo.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runpostgreButton = document.getElementById('postgre');
  
    runpostgreButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/postgresql.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runmariaButton = document.getElementById('maria');
  
    runmariaButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/mariadb.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runfireButton = document.getElementById('fire');
  
    runfireButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/firebase.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const runnosqlButton = document.getElementById('nosql');
  
    runnosqlButton.addEventListener('click', () => {
      window.electron.runPowerShellScript('./src/assets/Scripts/nosql.py')
        .then(output => {
          console.log('Script Output:', output);
        })
        .catch(error => {
          console.error('Script Error:', error);
        });
    });
  });
