/************************************ 
 * Red_Picture(Free)Recalltest Test *
 ************************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'RED_Picture(free)RecallTest';  // from the Builder filename that created this script
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
flowScheduler.add(Object_PresentationRoutineBegin());
flowScheduler.add(Object_PresentationRoutineEachFrame());
flowScheduler.add(Object_PresentationRoutineEnd());
flowScheduler.add(End_Session1RoutineBegin());
flowScheduler.add(End_Session1RoutineEachFrame());
flowScheduler.add(End_Session1RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Brain_Imaging/Behavioural study/Picture recall test_object images/Objects_Red(2).png', 'path': 'Brain_Imaging/Behavioural study/Picture recall test_object images/Objects_Red(2).png'},
    {'name': 'Brain_Imaging/Behavioural study/Picture recall test_object images/Objects_Red(1).png', 'path': 'Brain_Imaging/Behavioural study/Picture recall test_object images/Objects_Red(1).png'}
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
var key_resp;
var Object_PresentationClock;
var image01;
var BlankScreen;
var image02;
var BlankScreen2;
var End_Session1Clock;
var End;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'I will show a few pictures of familiar objects for a minute. Look carefully and try to remember the objects. Later, you will be asked to type out the names of objects as many as you can remember in any order. \n\nPress the space bar to continue.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Object_Presentation"
  Object_PresentationClock = new util.Clock();
  image01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image01', units : undefined, 
    image : 'Brain_Imaging/Behavioural study/Picture recall test_object images/Objects_Red(1).png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.5, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  BlankScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'BlankScreen',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  image02 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image02', units : undefined, 
    image : 'Brain_Imaging/Behavioural study/Picture recall test_object images/Objects_Red(2).png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.5, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  BlankScreen2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BlankScreen2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "End_Session1"
  End_Session1Clock = new util.Clock();
  End = new visual.TextStim({
    win: psychoJS.window,
    name: 'End',
    text: 'End of Session 1.\n\nThank you.',
    font: 'Times New Roman',
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
var _key_resp_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(key_resp);
    
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

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
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
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Object_PresentationComponents;
function Object_PresentationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Object_Presentation'-------
    t = 0;
    Object_PresentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(61.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Object_PresentationComponents = [];
    Object_PresentationComponents.push(image01);
    Object_PresentationComponents.push(BlankScreen);
    Object_PresentationComponents.push(image02);
    Object_PresentationComponents.push(BlankScreen2);
    
    Object_PresentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Object_PresentationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Object_Presentation'-------
    // get current time
    t = Object_PresentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image01* updates
    if (t >= 0.0 && image01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image01.tStart = t;  // (not accounting for frame time here)
      image01.frameNStart = frameN;  // exact frame index
      
      image01.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image01.status === PsychoJS.Status.STARTED || image01.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image01.setAutoDraw(false);
    }
    
    // *BlankScreen* updates
    if (t >= 30 && BlankScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BlankScreen.tStart = t;  // (not accounting for frame time here)
      BlankScreen.frameNStart = frameN;  // exact frame index
      
      BlankScreen.setAutoDraw(true);
    }

    frameRemains = 30 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((BlankScreen.status === PsychoJS.Status.STARTED || BlankScreen.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      BlankScreen.setAutoDraw(false);
    }
    
    // *image02* updates
    if (t >= 30.5 && image02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image02.tStart = t;  // (not accounting for frame time here)
      image02.frameNStart = frameN;  // exact frame index
      
      image02.setAutoDraw(true);
    }

    frameRemains = 30.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((image02.status === PsychoJS.Status.STARTED || image02.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      image02.setAutoDraw(false);
    }
    
    // *BlankScreen2* updates
    if (t >= 60.5 && BlankScreen2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BlankScreen2.tStart = t;  // (not accounting for frame time here)
      BlankScreen2.frameNStart = frameN;  // exact frame index
      
      BlankScreen2.setAutoDraw(true);
    }

    frameRemains = 60.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((BlankScreen2.status === PsychoJS.Status.STARTED || BlankScreen2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      BlankScreen2.setAutoDraw(false);
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
    Object_PresentationComponents.forEach( function(thisComponent) {
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


function Object_PresentationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Object_Presentation'-------
    Object_PresentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var End_Session1Components;
function End_Session1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'End_Session1'-------
    t = 0;
    End_Session1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    End_Session1Components = [];
    End_Session1Components.push(End);
    
    End_Session1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function End_Session1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'End_Session1'-------
    // get current time
    t = End_Session1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *End* updates
    if (t >= 0.0 && End.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End.tStart = t;  // (not accounting for frame time here)
      End.frameNStart = frameN;  // exact frame index
      
      End.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((End.status === PsychoJS.Status.STARTED || End.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      End.setAutoDraw(false);
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
    End_Session1Components.forEach( function(thisComponent) {
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


function End_Session1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'End_Session1'-------
    End_Session1Components.forEach( function(thisComponent) {
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
