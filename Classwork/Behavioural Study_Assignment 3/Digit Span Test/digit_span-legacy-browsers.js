/******************* 
 * Digit_Span Test *
 *******************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), 1.0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'digit_span';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const three_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(three_digitsLoopBegin, three_digitsLoopScheduler);
flowScheduler.add(three_digitsLoopScheduler);
flowScheduler.add(three_digitsLoopEnd);
const four_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(four_digitsLoopBegin, four_digitsLoopScheduler);
flowScheduler.add(four_digitsLoopScheduler);
flowScheduler.add(four_digitsLoopEnd);
const five_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(five_digitsLoopBegin, five_digitsLoopScheduler);
flowScheduler.add(five_digitsLoopScheduler);
flowScheduler.add(five_digitsLoopEnd);
const six_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(six_digitsLoopBegin, six_digitsLoopScheduler);
flowScheduler.add(six_digitsLoopScheduler);
flowScheduler.add(six_digitsLoopEnd);
const seven_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(seven_digitsLoopBegin, seven_digitsLoopScheduler);
flowScheduler.add(seven_digitsLoopScheduler);
flowScheduler.add(seven_digitsLoopEnd);
const eight_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(eight_digitsLoopBegin, eight_digitsLoopScheduler);
flowScheduler.add(eight_digitsLoopScheduler);
flowScheduler.add(eight_digitsLoopEnd);
const nine_digitsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(nine_digitsLoopBegin, nine_digitsLoopScheduler);
flowScheduler.add(nine_digitsLoopScheduler);
flowScheduler.add(nine_digitsLoopEnd);
flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instructions;
var key_instructions;
var routine_3digitsClock;
var sequence01;
var sequence02;
var sequence03;
var key_resp_2;
var response_3;
var clickcontinue;
var key_resp;
var routine_4digitsClock;
var sequence1;
var sequence2;
var sequence3;
var sequence4;
var key_resp_3;
var response_4;
var cont;
var key_resp_4;
var routine_5digitsClock;
var s01;
var s02;
var s03;
var s04;
var s05;
var key_resp_5;
var Response_5;
var clickcont;
var key_resp_6;
var routine_6digitsClock;
var so1;
var so2;
var so3;
var so4;
var so5;
var so6;
var key_resp_7;
var Response_6;
var pressspace;
var key_resp_8;
var routine_7digitsClock;
var sequen1;
var sequen2;
var sequen3;
var sequen4;
var sequen5;
var sequen6;
var sequen7;
var key_resp_9;
var Response_7;
var clickspace;
var key_resp_10;
var routine_8digitsClock;
var seq1;
var seq2;
var seq3;
var seq4;
var seq5;
var seq6;
var seq7;
var seq8;
var key_resp_11;
var Response_8;
var contSpace;
var key_resp_12;
var routine_9digitsClock;
var sequenc1;
var sequenc2;
var sequenc3;
var sequenc4;
var sequenc5;
var sequenc6;
var sequenc7;
var sequenc8;
var sequenc9;
var key_resp_13;
var Response_9;
var pressSpace;
var key_resp_14;
var Thank_youClock;
var Thankyou;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'A series of numbers will appear, each number lasting for one second. Look carefully and try to remember the numbers that are presented to you. Type your response in the same order after each trial.\n\nPress the space bar to continue.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_3digits"
  routine_3digitsClock = new util.Clock();
  sequence01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence01',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  sequence02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence02',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  sequence03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence03',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  response_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'response_3',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  clickcontinue = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickcontinue',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_4digits"
  routine_4digitsClock = new util.Clock();
  sequence1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  sequence2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  sequence3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  sequence4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequence4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  response_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'response_4',
    text: 'Type here',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'cont',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 4)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_5digits"
  routine_5digitsClock = new util.Clock();
  s01 = new visual.TextStim({
    win: psychoJS.window,
    name: 's01',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  s02 = new visual.TextStim({
    win: psychoJS.window,
    name: 's02',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  s03 = new visual.TextStim({
    win: psychoJS.window,
    name: 's03',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  s04 = new visual.TextStim({
    win: psychoJS.window,
    name: 's04',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  s05 = new visual.TextStim({
    win: psychoJS.window,
    name: 's05',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Response_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Response_5',
    text: 'Type here',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  clickcont = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickcont',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_6digits"
  routine_6digitsClock = new util.Clock();
  so1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'so1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  so2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'so2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  so3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'so3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  so4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'so4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  so5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'so5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  so6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'so6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Response_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Response_6',
    text: 'Type here',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  pressspace = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressspace',
    text: 'Press space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_7digits"
  routine_7digitsClock = new util.Clock();
  sequen1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  sequen2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  sequen3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  sequen4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sequen5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  sequen6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  sequen7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequen7',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Response_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Response_7',
    text: 'Type here',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  clickspace = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickspace',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_8digits"
  routine_8digitsClock = new util.Clock();
  seq1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  seq2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  seq3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  seq4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  seq5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  seq6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  seq7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq7',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  seq8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'seq8',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Response_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Response_8',
    text: 'Type here',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  contSpace = new visual.TextStim({
    win: psychoJS.window,
    name: 'contSpace',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_9digits"
  routine_9digitsClock = new util.Clock();
  sequenc1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  sequenc2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  sequenc3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  sequenc4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  sequenc5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  sequenc6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  sequenc7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc7',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  sequenc8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc8',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  sequenc9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sequenc9',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Response_9 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Response_9',
    text: 'Type here',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: undefined,  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: 1,
    padding: undefined,
    editable: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  pressSpace = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpace',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Thank_you"
  Thank_youClock = new util.Clock();
  Thankyou = new visual.TextStim({
    win: psychoJS.window,
    name: 'Thankyou',
    text: 'Thank you for your participation.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_instructions_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_instructions.keys = undefined;
    key_instructions.rt = undefined;
    _key_instructions_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(key_instructions);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *key_instructions* updates
    if (t >= 0.0 && key_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instructions.tStart = t;  // (not accounting for frame time here)
      key_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instructions.clearEvents(); });
    }

    if (key_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_instructions_allKeys = _key_instructions_allKeys.concat(theseKeys);
      if (_key_instructions_allKeys.length > 0) {
        key_instructions.keys = _key_instructions_allKeys[_key_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_instructions.rt = _key_instructions_allKeys[_key_instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_instructions.keys', key_instructions.keys);
    if (typeof key_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instructions.rt', key_instructions.rt);
        routineTimer.reset();
        }
    
    key_instructions.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var three_digits;
var currentLoop;
function three_digitsLoopBegin(three_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  three_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_3digits.xlsx', '0:2'),
    seed: undefined, name: 'three_digits'
  });
  psychoJS.experiment.addLoop(three_digits); // add the loop to the experiment
  currentLoop = three_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  three_digits.forEach(function() {
    const snapshot = three_digits.getSnapshot();

    three_digitsLoopScheduler.add(importConditions(snapshot));
    three_digitsLoopScheduler.add(routine_3digitsRoutineBegin(snapshot));
    three_digitsLoopScheduler.add(routine_3digitsRoutineEachFrame(snapshot));
    three_digitsLoopScheduler.add(routine_3digitsRoutineEnd(snapshot));
    three_digitsLoopScheduler.add(endLoopIteration(three_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function three_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(three_digits);

  return Scheduler.Event.NEXT;
}


var four_digits;
function four_digitsLoopBegin(four_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  four_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_4digits.xlsx', '0:2'),
    seed: undefined, name: 'four_digits'
  });
  psychoJS.experiment.addLoop(four_digits); // add the loop to the experiment
  currentLoop = four_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  four_digits.forEach(function() {
    const snapshot = four_digits.getSnapshot();

    four_digitsLoopScheduler.add(importConditions(snapshot));
    four_digitsLoopScheduler.add(routine_4digitsRoutineBegin(snapshot));
    four_digitsLoopScheduler.add(routine_4digitsRoutineEachFrame(snapshot));
    four_digitsLoopScheduler.add(routine_4digitsRoutineEnd(snapshot));
    four_digitsLoopScheduler.add(endLoopIteration(four_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function four_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(four_digits);

  return Scheduler.Event.NEXT;
}


var five_digits;
function five_digitsLoopBegin(five_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  five_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_5digits.xlsx', '0:2'),
    seed: undefined, name: 'five_digits'
  });
  psychoJS.experiment.addLoop(five_digits); // add the loop to the experiment
  currentLoop = five_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  five_digits.forEach(function() {
    const snapshot = five_digits.getSnapshot();

    five_digitsLoopScheduler.add(importConditions(snapshot));
    five_digitsLoopScheduler.add(routine_5digitsRoutineBegin(snapshot));
    five_digitsLoopScheduler.add(routine_5digitsRoutineEachFrame(snapshot));
    five_digitsLoopScheduler.add(routine_5digitsRoutineEnd(snapshot));
    five_digitsLoopScheduler.add(endLoopIteration(five_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function five_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(five_digits);

  return Scheduler.Event.NEXT;
}


var six_digits;
function six_digitsLoopBegin(six_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  six_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_6digits.xlsx', '0:2'),
    seed: undefined, name: 'six_digits'
  });
  psychoJS.experiment.addLoop(six_digits); // add the loop to the experiment
  currentLoop = six_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  six_digits.forEach(function() {
    const snapshot = six_digits.getSnapshot();

    six_digitsLoopScheduler.add(importConditions(snapshot));
    six_digitsLoopScheduler.add(routine_6digitsRoutineBegin(snapshot));
    six_digitsLoopScheduler.add(routine_6digitsRoutineEachFrame(snapshot));
    six_digitsLoopScheduler.add(routine_6digitsRoutineEnd(snapshot));
    six_digitsLoopScheduler.add(endLoopIteration(six_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function six_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(six_digits);

  return Scheduler.Event.NEXT;
}


var seven_digits;
function seven_digitsLoopBegin(seven_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  seven_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_7digits.xlsx', '0:2'),
    seed: undefined, name: 'seven_digits'
  });
  psychoJS.experiment.addLoop(seven_digits); // add the loop to the experiment
  currentLoop = seven_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  seven_digits.forEach(function() {
    const snapshot = seven_digits.getSnapshot();

    seven_digitsLoopScheduler.add(importConditions(snapshot));
    seven_digitsLoopScheduler.add(routine_7digitsRoutineBegin(snapshot));
    seven_digitsLoopScheduler.add(routine_7digitsRoutineEachFrame(snapshot));
    seven_digitsLoopScheduler.add(routine_7digitsRoutineEnd(snapshot));
    seven_digitsLoopScheduler.add(endLoopIteration(seven_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function seven_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(seven_digits);

  return Scheduler.Event.NEXT;
}


var eight_digits;
function eight_digitsLoopBegin(eight_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  eight_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_8digits.xlsx', '0:2'),
    seed: undefined, name: 'eight_digits'
  });
  psychoJS.experiment.addLoop(eight_digits); // add the loop to the experiment
  currentLoop = eight_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  eight_digits.forEach(function() {
    const snapshot = eight_digits.getSnapshot();

    eight_digitsLoopScheduler.add(importConditions(snapshot));
    eight_digitsLoopScheduler.add(routine_8digitsRoutineBegin(snapshot));
    eight_digitsLoopScheduler.add(routine_8digitsRoutineEachFrame(snapshot));
    eight_digitsLoopScheduler.add(routine_8digitsRoutineEnd(snapshot));
    eight_digitsLoopScheduler.add(endLoopIteration(eight_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function eight_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(eight_digits);

  return Scheduler.Event.NEXT;
}


var nine_digits;
function nine_digitsLoopBegin(nine_digitsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  nine_digits = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '../Downloads/digitspan_9digits.xlsx', '0:2'),
    seed: undefined, name: 'nine_digits'
  });
  psychoJS.experiment.addLoop(nine_digits); // add the loop to the experiment
  currentLoop = nine_digits;  // we're now the current loop

  // Schedule all the trials in the trialList:
  nine_digits.forEach(function() {
    const snapshot = nine_digits.getSnapshot();

    nine_digitsLoopScheduler.add(importConditions(snapshot));
    nine_digitsLoopScheduler.add(routine_9digitsRoutineBegin(snapshot));
    nine_digitsLoopScheduler.add(routine_9digitsRoutineEachFrame(snapshot));
    nine_digitsLoopScheduler.add(routine_9digitsRoutineEnd(snapshot));
    nine_digitsLoopScheduler.add(endLoopIteration(nine_digitsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function nine_digitsLoopEnd() {
  psychoJS.experiment.removeLoop(nine_digits);

  return Scheduler.Event.NEXT;
}


var _key_resp_2_allKeys;
var _key_resp_allKeys;
var routine_3digitsComponents;
function routine_3digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_3digits'-------
    t = 0;
    routine_3digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sequence01.setText(s1);
    sequence02.setText(s2);
    sequence03.setText(s3);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    response_3.setText('Type here');
    clickcontinue.setText('Press the space bar to continue');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    routine_3digitsComponents = [];
    routine_3digitsComponents.push(sequence01);
    routine_3digitsComponents.push(sequence02);
    routine_3digitsComponents.push(sequence03);
    routine_3digitsComponents.push(key_resp_2);
    routine_3digitsComponents.push(response_3);
    routine_3digitsComponents.push(clickcontinue);
    routine_3digitsComponents.push(key_resp);
    
    routine_3digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function routine_3digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_3digits'-------
    // get current time
    t = routine_3digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sequence01* updates
    if (t >= 0.0 && sequence01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence01.tStart = t;  // (not accounting for frame time here)
      sequence01.frameNStart = frameN;  // exact frame index
      
      sequence01.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence01.status === PsychoJS.Status.STARTED || sequence01.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence01.setAutoDraw(false);
    }
    
    // *sequence02* updates
    if (t >= 1.0 && sequence02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence02.tStart = t;  // (not accounting for frame time here)
      sequence02.frameNStart = frameN;  // exact frame index
      
      sequence02.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence02.status === PsychoJS.Status.STARTED || sequence02.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence02.setAutoDraw(false);
    }
    
    // *sequence03* updates
    if (t >= 2.0 && sequence03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence03.tStart = t;  // (not accounting for frame time here)
      sequence03.frameNStart = frameN;  // exact frame index
      
      sequence03.setAutoDraw(true);
    }

    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence03.status === PsychoJS.Status.STARTED || sequence03.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence03.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_2.status === PsychoJS.Status.STARTED || key_resp_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_2.keys == CorrectAnswer) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *response_3* updates
    if (t >= 3.0 && response_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_3.tStart = t;  // (not accounting for frame time here)
      response_3.frameNStart = frameN;  // exact frame index
      
      response_3.setAutoDraw(true);
    }

    
    // *clickcontinue* updates
    if (t >= 3.0 && clickcontinue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickcontinue.tStart = t;  // (not accounting for frame time here)
      clickcontinue.frameNStart = frameN;  // exact frame index
      
      clickcontinue.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 3.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_3digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_3digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_3digits'-------
    routine_3digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    psychoJS.experiment.addData('response_3.text', response_3.text);
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "routine_3digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var _key_resp_4_allKeys;
var routine_4digitsComponents;
function routine_4digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_4digits'-------
    t = 0;
    routine_4digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sequence1.setText(s1);
    sequence2.setText(s2);
    sequence3.setText(s3);
    sequence4.setText(s4);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    routine_4digitsComponents = [];
    routine_4digitsComponents.push(sequence1);
    routine_4digitsComponents.push(sequence2);
    routine_4digitsComponents.push(sequence3);
    routine_4digitsComponents.push(sequence4);
    routine_4digitsComponents.push(key_resp_3);
    routine_4digitsComponents.push(response_4);
    routine_4digitsComponents.push(cont);
    routine_4digitsComponents.push(key_resp_4);
    
    routine_4digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_4digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_4digits'-------
    // get current time
    t = routine_4digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sequence1* updates
    if (t >= 0.0 && sequence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence1.tStart = t;  // (not accounting for frame time here)
      sequence1.frameNStart = frameN;  // exact frame index
      
      sequence1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence1.status === PsychoJS.Status.STARTED || sequence1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence1.setAutoDraw(false);
    }
    
    // *sequence2* updates
    if (t >= 1.0 && sequence2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence2.tStart = t;  // (not accounting for frame time here)
      sequence2.frameNStart = frameN;  // exact frame index
      
      sequence2.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence2.status === PsychoJS.Status.STARTED || sequence2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence2.setAutoDraw(false);
    }
    
    // *sequence3* updates
    if (t >= 2.0 && sequence3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence3.tStart = t;  // (not accounting for frame time here)
      sequence3.frameNStart = frameN;  // exact frame index
      
      sequence3.setAutoDraw(true);
    }

    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence3.status === PsychoJS.Status.STARTED || sequence3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence3.setAutoDraw(false);
    }
    
    // *sequence4* updates
    if (t >= 3.0 && sequence4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequence4.tStart = t;  // (not accounting for frame time here)
      sequence4.frameNStart = frameN;  // exact frame index
      
      sequence4.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequence4.status === PsychoJS.Status.STARTED || sequence4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequence4.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_3.status === PsychoJS.Status.STARTED || key_resp_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_3.keys == CorrectAnswer) {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *response_4* updates
    if (t >= 4.0 && response_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_4.tStart = t;  // (not accounting for frame time here)
      response_4.frameNStart = frameN;  // exact frame index
      
      response_4.setAutoDraw(true);
    }

    
    // *cont* updates
    if (t >= 4.0 && cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont.tStart = t;  // (not accounting for frame time here)
      cont.frameNStart = frameN;  // exact frame index
      
      cont.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 4.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_4digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_4digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_4digits'-------
    routine_4digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    psychoJS.experiment.addData('response_4.text', response_4.text);
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "routine_4digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var _key_resp_6_allKeys;
var routine_5digitsComponents;
function routine_5digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_5digits'-------
    t = 0;
    routine_5digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    s01.setText(s1);
    s02.setText(s2);
    s03.setText(s3);
    s04.setText(s4);
    s05.setText(s5);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    routine_5digitsComponents = [];
    routine_5digitsComponents.push(s01);
    routine_5digitsComponents.push(s02);
    routine_5digitsComponents.push(s03);
    routine_5digitsComponents.push(s04);
    routine_5digitsComponents.push(s05);
    routine_5digitsComponents.push(key_resp_5);
    routine_5digitsComponents.push(Response_5);
    routine_5digitsComponents.push(clickcont);
    routine_5digitsComponents.push(key_resp_6);
    
    routine_5digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_5digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_5digits'-------
    // get current time
    t = routine_5digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *s01* updates
    if (t >= 0.0 && s01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s01.tStart = t;  // (not accounting for frame time here)
      s01.frameNStart = frameN;  // exact frame index
      
      s01.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((s01.status === PsychoJS.Status.STARTED || s01.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      s01.setAutoDraw(false);
    }
    
    // *s02* updates
    if (t >= 1.0 && s02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s02.tStart = t;  // (not accounting for frame time here)
      s02.frameNStart = frameN;  // exact frame index
      
      s02.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((s02.status === PsychoJS.Status.STARTED || s02.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      s02.setAutoDraw(false);
    }
    
    // *s03* updates
    if (t >= 2.0 && s03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s03.tStart = t;  // (not accounting for frame time here)
      s03.frameNStart = frameN;  // exact frame index
      
      s03.setAutoDraw(true);
    }

    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((s03.status === PsychoJS.Status.STARTED || s03.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      s03.setAutoDraw(false);
    }
    
    // *s04* updates
    if (t >= 3.0 && s04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s04.tStart = t;  // (not accounting for frame time here)
      s04.frameNStart = frameN;  // exact frame index
      
      s04.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((s04.status === PsychoJS.Status.STARTED || s04.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      s04.setAutoDraw(false);
    }
    
    // *s05* updates
    if (t >= 4.0 && s05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s05.tStart = t;  // (not accounting for frame time here)
      s05.frameNStart = frameN;  // exact frame index
      
      s05.setAutoDraw(true);
    }

    frameRemains = 4.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((s05.status === PsychoJS.Status.STARTED || s05.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      s05.setAutoDraw(false);
    }
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_5.status === PsychoJS.Status.STARTED || key_resp_5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_5.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_5.keys == CorrectAnswer) {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Response_5* updates
    if (t >= 5.0 && Response_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response_5.tStart = t;  // (not accounting for frame time here)
      Response_5.frameNStart = frameN;  // exact frame index
      
      Response_5.setAutoDraw(true);
    }

    
    // *clickcont* updates
    if (t >= 5 && clickcont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickcont.tStart = t;  // (not accounting for frame time here)
      clickcont.frameNStart = frameN;  // exact frame index
      
      clickcont.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 5.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_5digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_5digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_5digits'-------
    routine_5digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    psychoJS.experiment.addData('Response_5.text', Response_5.text);
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "routine_5digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var _key_resp_8_allKeys;
var routine_6digitsComponents;
function routine_6digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_6digits'-------
    t = 0;
    routine_6digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    so1.setText(s1);
    so2.setText(s2);
    so3.setText('#s3');
    so4.setText(s4);
    so5.setText(s5);
    so6.setText(s6);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    routine_6digitsComponents = [];
    routine_6digitsComponents.push(so1);
    routine_6digitsComponents.push(so2);
    routine_6digitsComponents.push(so3);
    routine_6digitsComponents.push(so4);
    routine_6digitsComponents.push(so5);
    routine_6digitsComponents.push(so6);
    routine_6digitsComponents.push(key_resp_7);
    routine_6digitsComponents.push(Response_6);
    routine_6digitsComponents.push(pressspace);
    routine_6digitsComponents.push(key_resp_8);
    
    routine_6digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_6digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_6digits'-------
    // get current time
    t = routine_6digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *so1* updates
    if (t >= 0.0 && so1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      so1.tStart = t;  // (not accounting for frame time here)
      so1.frameNStart = frameN;  // exact frame index
      
      so1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((so1.status === PsychoJS.Status.STARTED || so1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      so1.setAutoDraw(false);
    }
    
    // *so2* updates
    if (t >= 1 && so2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      so2.tStart = t;  // (not accounting for frame time here)
      so2.frameNStart = frameN;  // exact frame index
      
      so2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((so2.status === PsychoJS.Status.STARTED || so2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      so2.setAutoDraw(false);
    }
    
    // *so3* updates
    if (t >= 2 && so3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      so3.tStart = t;  // (not accounting for frame time here)
      so3.frameNStart = frameN;  // exact frame index
      
      so3.setAutoDraw(true);
    }

    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((so3.status === PsychoJS.Status.STARTED || so3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      so3.setAutoDraw(false);
    }
    
    // *so4* updates
    if (t >= 3 && so4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      so4.tStart = t;  // (not accounting for frame time here)
      so4.frameNStart = frameN;  // exact frame index
      
      so4.setAutoDraw(true);
    }

    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((so4.status === PsychoJS.Status.STARTED || so4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      so4.setAutoDraw(false);
    }
    
    // *so5* updates
    if (t >= 4 && so5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      so5.tStart = t;  // (not accounting for frame time here)
      so5.frameNStart = frameN;  // exact frame index
      
      so5.setAutoDraw(true);
    }

    frameRemains = 4 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((so5.status === PsychoJS.Status.STARTED || so5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      so5.setAutoDraw(false);
    }
    
    // *so6* updates
    if (t >= 5 && so6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      so6.tStart = t;  // (not accounting for frame time here)
      so6.frameNStart = frameN;  // exact frame index
      
      so6.setAutoDraw(true);
    }

    frameRemains = 5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((so6.status === PsychoJS.Status.STARTED || so6.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      so6.setAutoDraw(false);
    }
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_7.status === PsychoJS.Status.STARTED || key_resp_7.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_7.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_7.keys == CorrectAnswer) {
            key_resp_7.corr = 1;
        } else {
            key_resp_7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Response_6* updates
    if (t >= 6 && Response_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response_6.tStart = t;  // (not accounting for frame time here)
      Response_6.frameNStart = frameN;  // exact frame index
      
      Response_6.setAutoDraw(true);
    }

    
    // *pressspace* updates
    if (t >= 6.0 && pressspace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressspace.tStart = t;  // (not accounting for frame time here)
      pressspace.frameNStart = frameN;  // exact frame index
      
      pressspace.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 6 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_6digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_6digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_6digits'-------
    routine_6digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_7.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_7.corr = 1;  // correct non-response
      } else {
         key_resp_7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    psychoJS.experiment.addData('key_resp_7.corr', key_resp_7.corr);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    psychoJS.experiment.addData('Response_6.text', Response_6.text);
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "routine_6digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var _key_resp_10_allKeys;
var routine_7digitsComponents;
function routine_7digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_7digits'-------
    t = 0;
    routine_7digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sequen1.setText(s1);
    sequen2.setText(s2);
    sequen3.setText(s3);
    sequen4.setText(s4);
    sequen5.setText(s5);
    sequen6.setText(s6);
    sequen7.setText(s7);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    clickspace.setText('Press the space bar to continue');
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    routine_7digitsComponents = [];
    routine_7digitsComponents.push(sequen1);
    routine_7digitsComponents.push(sequen2);
    routine_7digitsComponents.push(sequen3);
    routine_7digitsComponents.push(sequen4);
    routine_7digitsComponents.push(sequen5);
    routine_7digitsComponents.push(sequen6);
    routine_7digitsComponents.push(sequen7);
    routine_7digitsComponents.push(key_resp_9);
    routine_7digitsComponents.push(Response_7);
    routine_7digitsComponents.push(clickspace);
    routine_7digitsComponents.push(key_resp_10);
    
    routine_7digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_7digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_7digits'-------
    // get current time
    t = routine_7digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sequen1* updates
    if (t >= 0.0 && sequen1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen1.tStart = t;  // (not accounting for frame time here)
      sequen1.frameNStart = frameN;  // exact frame index
      
      sequen1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen1.status === PsychoJS.Status.STARTED || sequen1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen1.setAutoDraw(false);
    }
    
    // *sequen2* updates
    if (t >= 1 && sequen2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen2.tStart = t;  // (not accounting for frame time here)
      sequen2.frameNStart = frameN;  // exact frame index
      
      sequen2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen2.status === PsychoJS.Status.STARTED || sequen2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen2.setAutoDraw(false);
    }
    
    // *sequen3* updates
    if (t >= 2 && sequen3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen3.tStart = t;  // (not accounting for frame time here)
      sequen3.frameNStart = frameN;  // exact frame index
      
      sequen3.setAutoDraw(true);
    }

    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen3.status === PsychoJS.Status.STARTED || sequen3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen3.setAutoDraw(false);
    }
    
    // *sequen4* updates
    if (t >= 3 && sequen4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen4.tStart = t;  // (not accounting for frame time here)
      sequen4.frameNStart = frameN;  // exact frame index
      
      sequen4.setAutoDraw(true);
    }

    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen4.status === PsychoJS.Status.STARTED || sequen4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen4.setAutoDraw(false);
    }
    
    // *sequen5* updates
    if (t >= 4 && sequen5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen5.tStart = t;  // (not accounting for frame time here)
      sequen5.frameNStart = frameN;  // exact frame index
      
      sequen5.setAutoDraw(true);
    }

    frameRemains = 4 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen5.status === PsychoJS.Status.STARTED || sequen5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen5.setAutoDraw(false);
    }
    
    // *sequen6* updates
    if (t >= 5 && sequen6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen6.tStart = t;  // (not accounting for frame time here)
      sequen6.frameNStart = frameN;  // exact frame index
      
      sequen6.setAutoDraw(true);
    }

    frameRemains = 5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen6.status === PsychoJS.Status.STARTED || sequen6.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen6.setAutoDraw(false);
    }
    
    // *sequen7* updates
    if (t >= 6 && sequen7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequen7.tStart = t;  // (not accounting for frame time here)
      sequen7.frameNStart = frameN;  // exact frame index
      
      sequen7.setAutoDraw(true);
    }

    frameRemains = 6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequen7.status === PsychoJS.Status.STARTED || sequen7.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequen7.setAutoDraw(false);
    }
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_9.status === PsychoJS.Status.STARTED || key_resp_9.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_9.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys.map((key) => key.name);  // storing all keys
        key_resp_9.rt = _key_resp_9_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_9.keys == CorrectAnswer) {
            key_resp_9.corr = 1;
        } else {
            key_resp_9.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Response_7* updates
    if (t >= 7 && Response_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response_7.tStart = t;  // (not accounting for frame time here)
      Response_7.frameNStart = frameN;  // exact frame index
      
      Response_7.setAutoDraw(true);
    }

    
    // *clickspace* updates
    if (t >= 7 && clickspace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickspace.tStart = t;  // (not accounting for frame time here)
      clickspace.frameNStart = frameN;  // exact frame index
      
      clickspace.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 7 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_7digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_7digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_7digits'-------
    routine_7digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_9.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_9.corr = 1;  // correct non-response
      } else {
         key_resp_9.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    psychoJS.experiment.addData('key_resp_9.corr', key_resp_9.corr);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    psychoJS.experiment.addData('Response_7.text', Response_7.text);
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "routine_7digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var _key_resp_12_allKeys;
var routine_8digitsComponents;
function routine_8digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_8digits'-------
    t = 0;
    routine_8digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    seq1.setText(s1);
    seq2.setText(s2);
    seq3.setText(s3);
    seq4.setText(s4);
    seq5.setText(s5);
    seq6.setText(s6);
    seq7.setText(s7);
    seq8.setText(s8);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    routine_8digitsComponents = [];
    routine_8digitsComponents.push(seq1);
    routine_8digitsComponents.push(seq2);
    routine_8digitsComponents.push(seq3);
    routine_8digitsComponents.push(seq4);
    routine_8digitsComponents.push(seq5);
    routine_8digitsComponents.push(seq6);
    routine_8digitsComponents.push(seq7);
    routine_8digitsComponents.push(seq8);
    routine_8digitsComponents.push(key_resp_11);
    routine_8digitsComponents.push(Response_8);
    routine_8digitsComponents.push(contSpace);
    routine_8digitsComponents.push(key_resp_12);
    
    routine_8digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_8digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_8digits'-------
    // get current time
    t = routine_8digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *seq1* updates
    if (t >= 0.0 && seq1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq1.tStart = t;  // (not accounting for frame time here)
      seq1.frameNStart = frameN;  // exact frame index
      
      seq1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq1.status === PsychoJS.Status.STARTED || seq1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq1.setAutoDraw(false);
    }
    
    // *seq2* updates
    if (t >= 1 && seq2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq2.tStart = t;  // (not accounting for frame time here)
      seq2.frameNStart = frameN;  // exact frame index
      
      seq2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq2.status === PsychoJS.Status.STARTED || seq2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq2.setAutoDraw(false);
    }
    
    // *seq3* updates
    if (t >= 2 && seq3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq3.tStart = t;  // (not accounting for frame time here)
      seq3.frameNStart = frameN;  // exact frame index
      
      seq3.setAutoDraw(true);
    }

    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq3.status === PsychoJS.Status.STARTED || seq3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq3.setAutoDraw(false);
    }
    
    // *seq4* updates
    if (t >= 3 && seq4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq4.tStart = t;  // (not accounting for frame time here)
      seq4.frameNStart = frameN;  // exact frame index
      
      seq4.setAutoDraw(true);
    }

    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq4.status === PsychoJS.Status.STARTED || seq4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq4.setAutoDraw(false);
    }
    
    // *seq5* updates
    if (t >= 4 && seq5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq5.tStart = t;  // (not accounting for frame time here)
      seq5.frameNStart = frameN;  // exact frame index
      
      seq5.setAutoDraw(true);
    }

    frameRemains = 4 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq5.status === PsychoJS.Status.STARTED || seq5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq5.setAutoDraw(false);
    }
    
    // *seq6* updates
    if (t >= 5 && seq6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq6.tStart = t;  // (not accounting for frame time here)
      seq6.frameNStart = frameN;  // exact frame index
      
      seq6.setAutoDraw(true);
    }

    frameRemains = 5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq6.status === PsychoJS.Status.STARTED || seq6.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq6.setAutoDraw(false);
    }
    
    // *seq7* updates
    if (t >= 6 && seq7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq7.tStart = t;  // (not accounting for frame time here)
      seq7.frameNStart = frameN;  // exact frame index
      
      seq7.setAutoDraw(true);
    }

    frameRemains = 6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq7.status === PsychoJS.Status.STARTED || seq7.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq7.setAutoDraw(false);
    }
    
    // *seq8* updates
    if (t >= 7 && seq8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seq8.tStart = t;  // (not accounting for frame time here)
      seq8.frameNStart = frameN;  // exact frame index
      
      seq8.setAutoDraw(true);
    }

    frameRemains = 7 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((seq8.status === PsychoJS.Status.STARTED || seq8.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      seq8.setAutoDraw(false);
    }
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys.map((key) => key.name);  // storing all keys
        key_resp_11.rt = _key_resp_11_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_11.keys == CorrectAnswer) {
            key_resp_11.corr = 1;
        } else {
            key_resp_11.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Response_8* updates
    if (t >= 8 && Response_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response_8.tStart = t;  // (not accounting for frame time here)
      Response_8.frameNStart = frameN;  // exact frame index
      
      Response_8.setAutoDraw(true);
    }

    
    // *contSpace* updates
    if (t >= 8 && contSpace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contSpace.tStart = t;  // (not accounting for frame time here)
      contSpace.frameNStart = frameN;  // exact frame index
      
      contSpace.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 8 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_8digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_8digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_8digits'-------
    routine_8digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_11.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_11.corr = 1;  // correct non-response
      } else {
         key_resp_11.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    psychoJS.experiment.addData('key_resp_11.corr', key_resp_11.corr);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    psychoJS.experiment.addData('Response_8.text', Response_8.text);
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "routine_8digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var _key_resp_14_allKeys;
var routine_9digitsComponents;
function routine_9digitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'routine_9digits'-------
    t = 0;
    routine_9digitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sequenc1.setText(s1);
    sequenc2.setText(s2);
    sequenc3.setText(s3);
    sequenc4.setText(s4);
    sequenc5.setText(s5);
    sequenc6.setText(s6);
    sequenc7.setText(s7);
    sequenc8.setText(s8);
    sequenc9.setText(s9);
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    routine_9digitsComponents = [];
    routine_9digitsComponents.push(sequenc1);
    routine_9digitsComponents.push(sequenc2);
    routine_9digitsComponents.push(sequenc3);
    routine_9digitsComponents.push(sequenc4);
    routine_9digitsComponents.push(sequenc5);
    routine_9digitsComponents.push(sequenc6);
    routine_9digitsComponents.push(sequenc7);
    routine_9digitsComponents.push(sequenc8);
    routine_9digitsComponents.push(sequenc9);
    routine_9digitsComponents.push(key_resp_13);
    routine_9digitsComponents.push(Response_9);
    routine_9digitsComponents.push(pressSpace);
    routine_9digitsComponents.push(key_resp_14);
    
    routine_9digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_9digitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'routine_9digits'-------
    // get current time
    t = routine_9digitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sequenc1* updates
    if (t >= 0.0 && sequenc1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc1.tStart = t;  // (not accounting for frame time here)
      sequenc1.frameNStart = frameN;  // exact frame index
      
      sequenc1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc1.status === PsychoJS.Status.STARTED || sequenc1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc1.setAutoDraw(false);
    }
    
    // *sequenc2* updates
    if (t >= 1 && sequenc2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc2.tStart = t;  // (not accounting for frame time here)
      sequenc2.frameNStart = frameN;  // exact frame index
      
      sequenc2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc2.status === PsychoJS.Status.STARTED || sequenc2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc2.setAutoDraw(false);
    }
    
    // *sequenc3* updates
    if (t >= 2 && sequenc3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc3.tStart = t;  // (not accounting for frame time here)
      sequenc3.frameNStart = frameN;  // exact frame index
      
      sequenc3.setAutoDraw(true);
    }

    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc3.status === PsychoJS.Status.STARTED || sequenc3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc3.setAutoDraw(false);
    }
    
    // *sequenc4* updates
    if (t >= 3 && sequenc4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc4.tStart = t;  // (not accounting for frame time here)
      sequenc4.frameNStart = frameN;  // exact frame index
      
      sequenc4.setAutoDraw(true);
    }

    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc4.status === PsychoJS.Status.STARTED || sequenc4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc4.setAutoDraw(false);
    }
    
    // *sequenc5* updates
    if (t >= 4 && sequenc5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc5.tStart = t;  // (not accounting for frame time here)
      sequenc5.frameNStart = frameN;  // exact frame index
      
      sequenc5.setAutoDraw(true);
    }

    frameRemains = 4 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc5.status === PsychoJS.Status.STARTED || sequenc5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc5.setAutoDraw(false);
    }
    
    // *sequenc6* updates
    if (t >= 5 && sequenc6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc6.tStart = t;  // (not accounting for frame time here)
      sequenc6.frameNStart = frameN;  // exact frame index
      
      sequenc6.setAutoDraw(true);
    }

    frameRemains = 5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc6.status === PsychoJS.Status.STARTED || sequenc6.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc6.setAutoDraw(false);
    }
    
    // *sequenc7* updates
    if (t >= 6 && sequenc7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc7.tStart = t;  // (not accounting for frame time here)
      sequenc7.frameNStart = frameN;  // exact frame index
      
      sequenc7.setAutoDraw(true);
    }

    frameRemains = 6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc7.status === PsychoJS.Status.STARTED || sequenc7.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc7.setAutoDraw(false);
    }
    
    // *sequenc8* updates
    if (t >= 7 && sequenc8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc8.tStart = t;  // (not accounting for frame time here)
      sequenc8.frameNStart = frameN;  // exact frame index
      
      sequenc8.setAutoDraw(true);
    }

    frameRemains = 7 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc8.status === PsychoJS.Status.STARTED || sequenc8.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc8.setAutoDraw(false);
    }
    
    // *sequenc9* updates
    if (t >= 8 && sequenc9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sequenc9.tStart = t;  // (not accounting for frame time here)
      sequenc9.frameNStart = frameN;  // exact frame index
      
      sequenc9.setAutoDraw(true);
    }

    frameRemains = 8 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((sequenc9.status === PsychoJS.Status.STARTED || sequenc9.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      sequenc9.setAutoDraw(false);
    }
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    frameRemains = 0.0 + 9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_13.status === PsychoJS.Status.STARTED || key_resp_13.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_13.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys.map((key) => key.name);  // storing all keys
        key_resp_13.rt = _key_resp_13_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_13.keys == CorrectAnswer) {
            key_resp_13.corr = 1;
        } else {
            key_resp_13.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Response_9* updates
    if (t >= 9 && Response_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response_9.tStart = t;  // (not accounting for frame time here)
      Response_9.frameNStart = frameN;  // exact frame index
      
      Response_9.setAutoDraw(true);
    }

    
    // *pressSpace* updates
    if (t >= 9 && pressSpace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpace.tStart = t;  // (not accounting for frame time here)
      pressSpace.frameNStart = frameN;  // exact frame index
      
      pressSpace.setAutoDraw(true);
    }

    
    // *key_resp_14* updates
    if (t >= 9 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_9digitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_9digitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'routine_9digits'-------
    routine_9digitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_13.keys === undefined) {
      if (['None','none',undefined].includes(CorrectAnswer)) {
         key_resp_13.corr = 1;  // correct non-response
      } else {
         key_resp_13.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    psychoJS.experiment.addData('key_resp_13.corr', key_resp_13.corr);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    psychoJS.experiment.addData('Response_9.text', Response_9.text);
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // the Routine "routine_9digits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Thank_youComponents;
function Thank_youRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Thank_you'-------
    t = 0;
    Thank_youClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Thank_youComponents = [];
    Thank_youComponents.push(Thankyou);
    
    Thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Thank_youRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Thank_you'-------
    // get current time
    t = Thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Thankyou* updates
    if (t >= 0.5 && Thankyou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Thankyou.tStart = t;  // (not accounting for frame time here)
      Thankyou.frameNStart = frameN;  // exact frame index
      
      Thankyou.setAutoDraw(true);
    }

    frameRemains = 0.5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Thankyou.status === PsychoJS.Status.STARTED || Thankyou.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Thankyou.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Thank_youRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Thank_you'-------
    Thank_youComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
