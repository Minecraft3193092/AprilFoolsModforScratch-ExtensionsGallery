class AsyncExtension {
  getInfo() {
    return {
      id: 'joke-times',
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
          opcode: 'fetch',
          text: 'fetch [URL]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/hello.txt'
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

  fetch (args) {
    return fetch(args.URL)
      .then((response) => {
        return response.text();
      })
      .catch((error) => {
        console.error(error);
        return 'Uh oh! Something went wrong.';
      });
  }
}
Scratch.extensions.register(new AsyncExtension());
