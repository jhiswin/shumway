function Stage() {
  this._transform = [];
  this._color = 0xFFFFFFFF;
}

Stage.prototype = Object.create(new DisplayObjectContainer, {
  accessibilityImplementation: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  accessibilityProperties: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  alpha: descAccessor(
    function () {
      return 1;
    }, function (val) {
      illegalOperation();
    }
  ),
  align: descAccessor(
    function () {
      return ''; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  allowsFullScreen: descAccessor(function () {
    return false; // TODO
  }),
  alpha: descAccessor(function () {
    return 1; // read-only/default
  }),
  blendMode: descAccessor(
    function () {
      // TODO BlendMode.NORMAL
      return 'normal';
    }, function (val) {
      illegalOperation();
    }
  ),
  cacheAsBitmap: descAccessor(
    function () {
      return false;
    }, function (val) {
      illegalOperation();
    }
  ),
  color: descAccessor(
    function () {
      return this._color;
    },
    function (val) {
      this._color = val;
    }
  ),
  colorCorrection: descAccessor(
    function () {
      return 'default'; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  colorCorrectionSupport: descAccessor(function () {
    return 'unsupported'; // TODO
  }),
  contextMenu: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  displayState: descAccessor(
    function () {
      return null; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  filters: descAccessor(
    function () {
      return [];
    }, function (val) {
      illegalOperation();
    }
  ),
  focus: descAccessor(
    function () {
      return null; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  focusRect: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  frameRate: descAccessor(
    function () {
      return this._frameRate;
    },
    function (val) {
      if (val < 0.01 || val > 1000)
        throw 'Invalid frame rate';
      this._frameRate = val;
    }
  ),
  fullScreenHeight: descAccessor(function () {
    notImplemented();
  }),
  fullScreenSourceRect: descAccessor(
    function () {
      return null; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  fullScreenWidth: descAccessor(function () {
    notImplemented();
  }),
  loaderInfo: descAccessor(
    function () {
      return this._loaderInfo;
    }, function (val) {
      illegalOperation();
    }
  ),
  mask: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  mouseEnabled: descAccessor(
    function () {
      return true;
    }, function (val) {
      illegalOperation();
    }
  ),
  name: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  nativeWindow: descAccessor(function () {
    return null; // TODO
  }),
  opaqueBackground: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  quality: descAccessor(
    function () {
      return 'HIGH'; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  rotation: descAccessor(
    function () {
      return 0;
    }, function (val) {
      illegalOperation();
    }
  ),
  scale9Grid: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  scaleMode: descAccessor(
    function () {
      return 'noScale'; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  scaleX: descAccessor(
    function () {
      return 1;
    }, function (val) {
      illegalOperation();
    }
  ),
  scaleY: descAccessor(
    function () {
      return 1;
    }, function (val) {
      illegalOperation();
    }
  ),
  scrollRect: descAccessor(
    function () {
      return null;
    }, function (val) {
      illegalOperation();
    }
  ),
  showDefaultContextMenu: descAccessor(
    function () {
      return true; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  softKeyboardRect: descAccessor(function () {
    notImplemented();
  }),
  stageFocusRect: descAccessor(
    function () {
      return false; // TODO
    },
    function (val) {
      notImplemented();
    }
  ),
  stageHeight: descAccessor(
    function () {
      return this._stageHeight;
    },
    function (val) {
      notImplemented();
    }
  ),
  stageWidth: descAccessor(
    function () {
      return this._stageWidth;
    },
    function (val) {
      notImplemented();
    }
  ),
  stageVideos: descAccessor(function () {
    notImplemented();
  }),
  tabEnabled: descAccessor(
    function () {
      return false;
    }, function (val) {
      illegalOperation();
    }
  ),
  tabIndex: descAccessor(
    function () {
      return -1;
    }, function (val) {
      illegalOperation();
    }
  ),
  transform: descAccessor(
    function () {
      return this._transform;
    }, function (val) {
      illegalOperation();
    }
  ),
  visible: descAccessor(
    function () {
      return true;
    }, function (val) {
      illegalOperation();
    }
  ),
  x: descAccessor(
    function () {
      return 0;
    }, function (val) {
      illegalOperation();
    }
  ),
  y: descAccessor(
    function () {
      return 0;
    }, function (val) {
      illegalOperation();
    }
  ),
  wmodeGPU: descAccessor(function () {
    return false; // TODO
  }),

  invalidate: descMethod(function() {
    notImplemented();
  }),
  isFocusInaccessible: descMethod(function() {
    notImplemented();
  }),
  _attachToCanvas: descMethod(function(parameters) {
    var canvas = parameters.canvas;
    var ctx = canvas.getContext('2d');
    var plays;
    var loader = new Loader();
    var stage = this;
	var attributes = parameters.attributes;
    loader._onStart = function(root, loaderInfo, as2Context) {
      stage._loaderInfo = loaderInfo;
      stage._stageWidth = loaderInfo.width;
      stage._stageHeight = loaderInfo.height;
      stage._frameRate = loaderInfo.frameRate;

      as2Context.stage = stage; // TODO make it better
	  as2Context.attributes = attributes;
      parameters.onstart(root, stage);
    };
    loader._onProgress = function(root, obj) {
      if (obj.bgcolor) {
        stage._color = obj.bgcolor; // TODO convert to numeric
        canvas.style.background = obj.bgcolor;
      }
      if (!plays) {
        renderMovieClip(root, stage, ctx);
        plays = true;
      }
    };
    loader._onComplete = function(root, result) {
      parameters.oncomplete(root, result);
    };
    loader.load(parameters.file);
  })
});
