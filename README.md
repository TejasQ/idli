# 🥚 Idli: Your CLI AI Copilot

As developers, we sometimes need to use `ffmpeg` for something simple like converting a video to a gif, but we often can't quite remember the exact command to use. We end up searching the internet for the command, and then copy-pasting it into our terminal. This is where Idli comes in.

![Idli in action](demo.gif)

Idli is a CLI AI copilot that helps you with your day-to-day tasks. It is a command-line tool that uses AI to generate commands for you. You can ask Idli how to do something in natural language, and it will generate the command for you and offer to run it, copy it, or exit.

## Usage

Provided you've got Node.js installed, you can use Idli like this:

```sh
npx idli ask how do I convert ./video.mp4 here to a gif
```

This will generate the command for you. You can then choose to run it, copy it, or exit. For more of an API reference, here's what you can do with Idli.

### API Reference

| Command                   | Options | Description                                    |
| ------------------------- | ------- | ---------------------------------------------- |
| `npx idli ask [question]` |         | Ask Idli a question in natural language.       |
| `npx idli reset`          |         | Reset your OpenAI API key.                     |
| `npx idli help [command]` |         | Get help for any commands, or the main module. |

## Contributing

I made this by myself for myself. If there's some issue you face or use case it's not meeting, let's add it together. Start by [opening an issue](issues/new) and we'll take it from there.

## Why is the logo an egg and not an idli?

These are idlis:

![idlis](https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

There is no idli emoji unfortunately, so an egg looks close enough—especially if the idlis are misshapen like this:

![misshapen idlis](https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

If you'd like to help get an idli emoji, please [upvote this issue](issues/1) so we can get it added to Unicode. 🙏
