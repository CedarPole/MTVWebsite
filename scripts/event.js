
//To Do
// 1-> Check new way for API
// 5->Look into google forms vs google spreadsheets
// 6->Make all inputs required before sending info


// Model

  let events = ["Spiritus Ramuh", "Sice Lost Chapter","Strago Heretics", "DET 13", "Kuja's Intersecting Wills", "Jessie's Event"]
  let theme = "dark"
  let units = []
  let used = []
  let bannedMonth = []
  bannedMonth.push("Minwu","Celes","Tifa","Hope","Machina","Enna Kros","Jack Garland") //This is the January bans to test

  const bannedUnits = []
let text
let obj
unitList()
switchmode()
function unitList() // All Done
{
  text = '{"units" : [' + 
      '{"name":"Ace","burst":true,"force":false},' + 
      '{"name":"Aerith","burst":false,"force":true},' + 
      '{"name":"Agrias","burst":false,"force":false},' +
      '{"name":"Alisaie","burst":false,"force":false},' + 
      '{"name":"Alphinaud","burst":false,"force":false},'  +
      '{"name":"Amidatelion","burst":false,"force":false},' + 
      '{"name":"Aphmau","burst":false,"force":false},' + 
      '{"name":"Aranea","burst":false,"force":true},' +
      '{"name":"Arciela","burst":false,"force":false},' +
      '{"name":"Ardyn","burst":true,"force":true},' + 
      '{"name":"Ashe","burst":true,"force":true},' +
      '{"name": "Auron", "burst": false,"force": false},' +
      '{"name": "Balthier","burst": false,"force": true},' +
      '{"name": "Barret","burst": false,"force": false},' +
      '{"name": "Bartz","burst": true,"force": false},' +
      '{"name": "Basch","burst": false,"force": false},' +
      '{"name": "Beatrix","burst": false,"force": true},' +
      '{"name": "Braska","burst": false,"force": true},' +
      '{"name": "Cait Sith","burst": false,"force": false},' +
      '{"name": "Caius","burst": true,"force": false},' +
      '{"name": "Cater","burst": false,"force": false},' +
      '{"name": "Cecil (DK)","burst": false,"force": false},' +
      '{"name": "Ceceil (PL)","burst": true,"force": true},' +
      '{"name": "Celes","burst": true,"force": true},' +
      '{"name": "Ceodore","burst": true,"force": true},' +
      '{"name": "Ciaran","burst": true,"force": true},' +
      '{"name": "Cid","burst": false,"force": false},' +
      '{"name": "Cinque","burst": false,"force": false},' +
      '{"name": "Cissnei","burst": false,"force": false},' +
      '{"name": "Cloud","burst": true,"force": false},' +
      '{"name": "Cloud of Darkness","burst": true,"force": true},' +
      '{"name": "Cor","burst": false,"force": true},' +
      '{"name": "Cyan","burst": false,"force": false},' +
      '{"name": "Desch","burst": false,"force": true}, ' +
      '{"name": "Deuce","burst": false,"force": false},' +
      '{"name": "Dorgann","burst": false,"force": true},' +
      '{"name": "Eal' + "'" + 'narche","burst": false,"force": false},' +
      '{"name": "Edgar","burst": false,"force": false},' +
      '{"name": "Edge","burst": false,"force": false},' +
      '{"name": "Edward","burst": false,"force": false},' +
      '{"name": "Eight","burst": false,"force": false},' +
      '{"name": "Eiko","burst": false,"force": false},' +
      '{"name": "Enna Kros","burst": false,"force": true},'+
      '{"name": "Fang","burst": false,"force": false},' +
      '{"name": "Faris","burst": false,"force": true},' +
      '{"name": "Firion","burst": true,"force": true},' +
      '{"name": "Fran","burst": false,"force": false},' +
      '{"name": "Freya","burst": false,"force": false},' +
      '{"name":"Fusoya","burst":false,"force":true},' +
      '{"name": "Fujin","burst": false,"force": true},' +
      '{"name": "Gabranth","burst": true,"force": true },' +
      '{"name": "Galuf","burst": false,"force": false},' +
      '{"name": "Garland","burst": true,"force": false},' +
      '{"name": "Garnet","burst": true,"force": true},' +
      '{"name": "Gau","burst": false,"force": false},' +
      '{"name": "Gilgamesh","burst": true,"force": true},' +
      '{"name": "Gladiolus","burst": false,"force": false},'+
      '{"name": "Golbez","burst": true,"force": false},' +
      '{"name": "Guy","burst": false,"force": false},' +
      '{"name": "Hope","burst": false,"force": true},' +
      '{"name": "Ignis","burst": false,"force": false},' +
      '{"name": "Iroha","burst": true, "force": true},' +
      '{"name": "Irvine","burst": false,"force": false},' +
      '{"name": "Jack","burst": false,"force": false},' +
      '{"name": "Jack Garland","burst": true,"force": true},' +
      '{"name": "Jecht","burst": true,"force": false},' +
      '{"name": "Jegran","burst": true,"force": false},' +
      '{"name": "Kadaj","burst": false,"force": false},' +
      '{"name": "Kain","burst": true,"force": true},' +
      '{"name": "Kam' + "'" + 'lanaut","burst": true,"force": true},' +
      '{"name": "Kefka","burst": true,"force": false},' +
      '{"name": "Keiss","burst": false,"force": false},' +
      '{"name": "Kimahri","burst": false,"force": false},' +
      '{"name": "King","burst": false,"force": false},' +
      '{"name": "Krile","burst": false,"force": true},' +
      '{"name": "Kuja","burst": true,"force": false},' +
      '{"name": "Kurasame","burst": false,"force": false},' +
      '{"name": "Laguna","burst": true,"force": false},' +
      '{"name": "Lann & Reynn","burst": true,"force": false},' +
      '{"name": "Layle","burst": true,"force": false},' +
      '{"name": "Leila","burst": false,"force": false},' +
      '{"name": "Lenna","burst": false,"force": false},' +
      '{"name": "Leo", "burst": false,"force": false},' +
      '{"name": "Leon","burst": false,"force": false},' +
      '{"name": "Lightning","burst": true,"force": false},' +
      '{"name": "Lilisette","burst": false,"force": true},' +
      '{"name": "Lion","burst": false,"force": false},' +
      '{"name": "Llyud","burst": false,"force": true},' +
      '{"name": "Locke","burst": true,"force": false},' +
      '{"name": "Lulu","burst": false,"force": false},' +
      '{"name": "Lunafreya","burst": true,"force": true},' +
      '{"name": "Lyse","burst": false,"force": false},' +
      '{"name": "Machina","burst": true,"force": true},' +
      '{"name": "Maria","burst": false,"force": true},' +
      '{"name": "Minwu","burst": true,"force": true},' +
      '{"name": "Mog","burst": false,"force": false},' +
      '{"name": "Nine", "burst": false,"force": false},' +
      '{"name": "Noctis","burst": true,"force": false},' +
      '{"name": "Noel","burst": true,"force": false},' +
      '{"name": "Onion Knight","burst": true,"force": true},' +
      '{"name": "Paine", "burst": false,"force": false},' +
      '{"name": "Palom", "burst": false,"force": false},' +
      '{"name": "Papalymo","burst": false,"force": false},'+
      '{"name": "Penelo","burst": false,"force": false},' +
      '{"name": "Porom","burst": false,"force": false},' +
      '{"name": "Prishe","burst": true,"force": false},' +
      '{"name": "Prompto","burst": false,"force": false},' +
      '{"name": "Queen","burst": false,"force": false},' +
      '{"name": "Quistis","burst": false,"force": false},' +
      '{"name": "Raijin","burst": false,"force": false},' +
      '{"name": "Raines","burst": true,"force": true},' +
      '{"name": "Ramza","burst": true,"force": false},' +
      '{"name": "Relm","burst": false,"force": false},' +
      '{"name": "Rem","burst": false,"force": false},' +
      '{"name": "Reno","burst": false,"force": true},' +
      '{"name": "Rinoa","burst": true,"force": true},' +
      '{"name": "Rosa","burst": false,"force": false},' +
      '{"name": "Rude","burst": false,"force": false},' +
      '{"name": "Rydia","burst": false,"force": true},' +
      '{"name": "Sabin","burst": false,"force": true},' +
      '{"name": "Sazh","burst": false,"force": false},' +
      '{"name": "Seifer","burst": false,"force": false},' +
      '{"name": "Selphie","burst": false,"force": false},' +
      '{"name": "Sephiroth","burst": true,"force": false},'+
      '{"name": "Serah","burst": false,"force": false},'+
      '{"name": "Setzer","burst": false,"force": false},' +
      '{"name": "Seven","burst": false,"force": false},' +
      '{"name": "Seymour","burst": true,"force": true},'  +
      '{"name": "Shadow","burst": false,"force": false},' +
      '{"name": "Shantotto","burst": true,"force": false},' +
      '{"name": "Shelke","burst": false,"force": false},' +
      '{"name": "Sherlotta","burst": true,"force": true},' +
      '{"name": "Sice","burst": false,"force": false},' +
      '{"name": "Snow","burst": true,"force": false},' +
      '{"name": "Squall","burst": true,"force": false},' +
      '{"name": "Steiner","burst": false,"force": false},' +
      '{"name": "Strago","burst": false,"force": false},' +
      '{"name": "Terra","burst": true,"force": true},' +
      '{"name": "Thancred","burst": false,"force": false},' +
      '{"name": "The Emperor","burst": true,"force": false},' +
      '{"name": "Tidus","burst": true,"force": true},' +
      '{"name": "Tifa","burst": true,"force": true}, ' +
      '{"name": "Trey","burst": false,"force": false},' +
      '{"name": "Ultimecia","burst": true,"force": false},' +
      '{"name": "Ursula","burst": false,"force": true},' +
      '{"name": "Vaan","burst": true,"force": true},' +
      '{"name": "Vanille","burst": false,"force": false},' +
      '{"name": "Vayne","burst": true,"force": true},' +
      '{"name": "Vincent","burst": true,"force": false},' +
      '{"name": "Vivi","burst": false,"force": false},' +
      '{"name": "Wakka","burst": false,"force": false},' +
      '{"name": "Warrior of Light","burst": true,"force": false},' +
      '{"name": "Xande","burst": false,"force": false},' +
      '{"name": "Y' + "'" + 'shtola","burst": true,"force": false},' +
      '{"name": "Yang","burst": false,"force": false},' +
      '{"name": "Yda","burst": false,"force": false},' +
      '{"name": "Yuffie","burst": false,"force": false},' +
      '{"name": "Yuna","burst": true,"force": true},' +
      '{"name": "Yuri","burst": true,"force": true},' +
      '{"name": "Zack","burst": true,"force": false},' +
      '{"name": "Zell","burst": false,"force": false},' +
      '{"name": "Zidane","burst": true,"force": false}]}'
  obj = JSON.parse(text)
}
  

  setEvents()
function setEvents() // All Done
{
  const ddevent = document.getElementById("ddEvents");
  for(let i = 0; i < events.length; i++)
  {
    let option = document.createElement('option')
    option.text = events[i]
    ddevent.add(option)
  }
}
function setbans(value) //All done
{
  let bannedlist = document.getElementById('banned')
  bannedlist.innerHTML = ''
  let path = 'styles/images/portraits/'
  bannedUnits.length = 0
  if(value == 'Spiritus Ramuh')
  {
    bannedUnits.push("Ashe", "Setzer", "Kimahri", "Laguna","Agrias","Rem")
  }
  else if(value == "Sice Lost Chapter")
  {
    bannedUnits.push("Ashe", "Lann & Reynn", "Eight", "Sice")
  }
  else if(value == "Strago Heretics")
  {
    bannedUnits.push("Ashe", "Y'shtola", "Amidatelion", "Strago")
  }
  else if(value == "DET 13")
  {
    bannedUnits.push("Cecil (DK)", "Leon", "Quistis", "Cloud","Auron","Cinque")
  }
  else if(value == "Kuja's Intersecting Wills")
  {
    bannedUnits.push("Cecil (DK)", "Kuja", "Lion", "Deuce")
  }
  else if(value == "Jessie's Event")
  {
    bannedUnits.push("Cecil (DK)", "Jessie", "Snow", "Barret") 
  }
  for(let i = 0; i < bannedMonth.length; i++)
  {
    let newimg = document.createElement('img')
    newimg.src = path + bannedMonth[i] + '.webp'
    bannedlist.appendChild(newimg);
  }
  var br = document.createElement("br");
  bannedlist.appendChild(br)
  for(let i = 0; i < bannedUnits.length; i++)
  {
    let match = false
    for(let y = 0; y < bannedMonth.length; y++)
    {
      if(bannedMonth[y] === bannedUnits[i] && match == false)
      {
        match = true
      }
    }
    if(match == false)
      {
        let newimg = document.createElement('img')
        newimg.src = path + bannedUnits[i] + '.webp'
        bannedlist.appendChild(newimg);
      }
  }
}
function setUsed() //All Done
{
  used.length = 0
  if(document.getElementById("ddUnit1").value != 'Select Your Unit')
  {
    used.push(document.getElementById("ddUnit1").value)
  }
  if(document.getElementById("ddUnit2").value != 'Select Your Unit')
  {
    used.push(document.getElementById("ddUnit2").value)
  }
  if(document.getElementById("ddUnit3").value != 'Select Your Unit')
  {
    used.push(document.getElementById("ddUnit3").value)
  }
  if(document.getElementById("ddCall1").value != 'Select Your Call')
  {
    used.push(document.getElementById("ddCall1").value)
  }
  if(document.getElementById("ddCall2").value != 'Select Your Call')
  {
    used.push(document.getElementById("ddCall2").value)
  }
  if(document.getElementById("ddCall3").value != 'Select Your Call')
  {
    used.push(document.getElementById("ddCall3").value)
  }
}

function setUnits() //All Done
{
  setUsed()
  let selectelements = [document.getElementById("ddUnit1"),document.getElementById("ddUnit2"),document.getElementById("ddUnit3"),document.getElementById("ddCall1"),document.getElementById("ddCall2"),document.getElementById("ddCall3")]
  let valueelements = [document.getElementById("ddUnit1").value ,document.getElementById("ddUnit2").value, document.getElementById("ddUnit3").value ,document.getElementById("ddCall1").value ,document.getElementById("ddCall2").value ,document.getElementById("ddCall3").value]
  let banned = bannedUnits.concat(bannedMonth)
  for(let i = 0;i < selectelements.length; i++)
  {
    if(selectelements[i].id.charAt(2) == 'U')
    {
      selectelements[i].innerHTML = "<option>Select Your Unit</option>"
    }
    else
    {
      selectelements[i].innerHTML = "<option>Select Your Call</option>"
    }
    for(let x = 0; x < obj.units.length ; x++)
    {
      let match = false
      
      for(let y = 0; y < used.length; y++)
      {
        if(obj.units[x].name === used[y])
        {
          match = true
        }
      }
      if(obj.units[x].name === valueelements[i])
      {
        match = false
      }
      for(let y = 0; y < banned.length; y++)
      {
        if(obj.units[x].name === banned[y])
        {
          match = true
        }
      }
      if(match == false)
      {
        let option = document.createElement('option')
        option.text = obj.units[x].name
        selectelements[i].add(option)
      }
    }
    for(let x = 0; selectelements[i].length > x; x++)
    {
      if(valueelements[i] == selectelements[i].options[x].value)
      {
        selectelements[i].options[x].selected = true
      }
    }
  }
}




// View

// This is the form to submit to google docs
function SubForm () // To Do -> Make API links for every tab
{
  let selectedEvent = documnet.getElementById("ddEvents").value
  if(selectedEvent === "Spiritus Ramuh")
  {
    $.ajax({
				url:"https://api.apispreadsheets.com/data/nHqhd3JBiMVDCV3g/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
  }
  else if("Sice Lost Chapter")
  {
    $.ajax({
				url:"https://www.apispreadsheets.com/table/YsKsEnLGLr3XtCQG/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
  }
  else if("Strago Heretics")
  {
    $.ajax({
				url:"https://www.apispreadsheets.com/table/JtSaOJqqNoHYopyf/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
  }
  else if("DET 13")
  {
    $.ajax({
				url:"https://api.apispreadsheets.com/data/nHqhd3JBiMVDCV3g/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
  }
  else if("Kuja's Intersecting Wills")
  {
    $.ajax({
				url:"https://api.apispreadsheets.com/data/nHqhd3JBiMVDCV3g/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
  }
  else if("Jessie's Event")
  {
    $.ajax({
				url:"https://api.apispreadsheets.com/data/nHqhd3JBiMVDCV3g/",
				type:"post",
				data:$("#myForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
  }
  
			
}
function revealStage() //All Done
{
  const value = document.getElementById("ddEvents").value
  const stage2 = document.getElementById("stage2")
  if(value != "Select your Event")
  {
    stage2.style.visibility = "visible";
    setbans(value);
    initilizeUnits();
    for(x = 1; x < 4; x++)
    {
      let path = "styles/images/unit/"
      document.getElementById("ddCall" + x).setAttribute('disabled', 'true');
      document.getElementById("cFR" + x).setAttribute('disabled', 'true')
      document.getElementById("cBT" + x).setAttribute('disabled', 'true')
      document.getElementById("cBT" + x).checked = false;
      document.getElementById("cFR" + x).checked = false;
      document.getElementById("imgunit" + x).src = ""
    }
  }
  else
  {
    stage2.style.visibility = "hidden";
  }
}

function initilizeUnits() //All Done
{

  document.getElementById("ddUnit1").innerHTML = '<option>Select Your Unit</option>'
  document.getElementById("ddUnit2").innerHTML = '<option>Select Your Unit</option>'
  document.getElementById("ddUnit3").innerHTML = '<option>Select Your Unit</option>'
  document.getElementById("ddCall1").innerHTML = '<option>Select Your Call</option>'
  document.getElementById("ddCall2").innerHTML = '<option>Select Your Call</option>'
  document.getElementById("ddCall3").innerHTML = '<option>Select Your Call</option>'
  setUsed()
  let banned = bannedUnits.concat(bannedMonth)

  for(let i = 0; i < obj.units.length; i++)
  {
    let match = false
    for(let x = 0; x < banned.length; x++)
    {
      while( obj.units[i].name === banned[x] &&  match == false)
      {
          match = true
      }
    }
    if(match == false)
    {
      populatelists(obj.units[i].name)
    }
  }
}
function populatelists(unit) //All Done
{
  let selectelements = [document.getElementById("ddUnit1"),document.getElementById("ddUnit2"),document.getElementById("ddUnit3"),document.getElementById("ddCall1"),document.getElementById("ddCall2"),document.getElementById("ddCall3")]
  for(let i = 0;i < selectelements.length;i++)
  {
    let option = document.createElement('option')
    option.text = unit
    selectelements[i].add(option)
  }
}

function updateForm(value) //All Done
{
  let path = "styles/images/unit/"
  let unitValue = document.getElementById("ddUnit" + value).value
  if(unitValue != "Select Your Unit")
  {
    document.getElementById("imgunit" + value).src = path + unitValue + ".png"
    document.getElementById("ddCall" + value).removeAttribute("disabled");

    let index = obj.units.map(function(o) { return o.name; }).indexOf(unitValue);
    if(obj.units[index].burst)
    {
      document.getElementById("cBT" + value).removeAttribute("disabled");
    }
    else
    {
      document.getElementById("cBT" + value).setAttribute('disabled', 'true')
      document.getElementById("cBT" + value).checked = false;
    }
    if(obj.units[index].force)
    {
      document.getElementById("cFR" + value).removeAttribute("disabled");
    }
    else
    {
      document.getElementById("cFR" + value).setAttribute('disabled', 'true')
      document.getElementById("cFR" + value).checked = false;
    }
    setUnits()
  }
  else
  {
    document.getElementById("ddCall" + value).setAttribute('disabled', 'true');
    document.getElementById("ddCall" + value).innerHTML = '<option>Select Your Unit</option>';
    document.getElementById("cFR" + value).setAttribute('disabled', 'true')
    document.getElementById("cBT" + value).setAttribute('disabled', 'true')
    document.getElementById("cBT" + value).checked = false;
    document.getElementById("cFR" + value).checked = false;
    document.getElementById("imgunit" + value).src = ""
  }  
}

function switchmode()
  {
    let theme = location.search.substring(1)
    console.log(theme)
    if(theme == "light")
    {
      document.documentElement.style.setProperty('--background','255,255,255');
      document.documentElement.style.setProperty('--textcolor','#000000');
      document.documentElement.style.setProperty('--bannedcolor', 'linear-gradient(162deg,rgba(165,238,252,1)  47%,rgba(66,105,137,1)  100%)')
      document.documentElement.style.setProperty('--maincolor','rgb(165, 238, 252)');
    }
    else
    {
      document.documentElement.style.setProperty('--background','#0A0A0A');
      document.documentElement.style.setProperty('--textcolor','#ffffff');
      document.documentElement.style.setProperty('--bannedcolor', 'linear-gradient(162deg, rgba(66,105,137,1) 47%, rgba(165,238,252,1) 100%)')
      document.documentElement.style.setProperty('--maincolor','rgb(66, 105, 137)');
    }
  }