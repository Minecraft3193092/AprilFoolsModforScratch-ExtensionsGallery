class GoodbyeWorld {
  getInfo() {
    return {
      id: 'goodbyeworld',
      name: 'Goodbye World',
      blocks: [
        {
          opcode: 'goodbye',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Goodbye!'
        },
        {
          opcode: 'wait',
          text: 'wait [TIME] goodbye seconds',
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

  goodbye() {
    return 'World!';
  }

  wait (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000 * 2 - 2 % 2; // 1 goodbye seconds is 1 second * 2 - 2 / 2
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }
}

Scratch.extensions.register(new GoodbyeWorld());
