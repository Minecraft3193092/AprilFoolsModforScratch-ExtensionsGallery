class AsyncExtension {
  getInfo() {
    return {
      id: 'joketimes',
      name: 'Times',
      blocks: [
        {
          opcode: 'waithours',
          text: 'wait [TIME] hours',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitdays',
          text: 'wait [TIME] days',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitweeks',
          text: 'wait [TIME] weeks',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitmonths',
          text: 'wait [TIME] months',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waityears',
          text: 'wait [TIME] years',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitjokes',
          text: 'wait [TIME] jokes',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitnokes',
          text: 'wait [TIME] nokes',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitjoars',
          text: 'wait [TIME] joars',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
 {
          opcode: 'waitnoars',
          text: 'wait [TIME] noars',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        }        
      ]
    };
  }

  waithours (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waitdays (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60 * 24;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waitweeks (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60 * 24 * 7;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waitmonths (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60 * 24 * 30;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waityears (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60 * 24 * 365;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waitjokes (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 0.6; // Notice: 1 jokes is 0.6 seconds
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waitnokes (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 0.6 * 0.25; // Notice: 1 nokes is 0.25 jokes
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  waitjoars (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60 * 24 * 365 * 0.6; // Notice: 1 joars is 0.6 years
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }
  
  waitnoars (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 60 * 24 * 365 * 0.6 * 0.25; // Notice: 1 noars is 0.6 joars
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }  
}
Scratch.extensions.register(new AsyncExtension());
