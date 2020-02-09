# STDIN Server

[![Build Status](https://travis-ci.org/kamataryo/stdin-server.svg?branch=master)](https://travis-ci.org/kamataryo/stdin-server)

A CLI to run a server from STDIN.

## Usage

```shell
$ echo 'hello' | npx stdin-server
$ pbpaste | npx stdin-server
```

## commands

```shell
$ npx stdin-server --help

  A CLI to run a server from STDIN.

  Usage
    $ stdin-server <input>

  Options
     --port, -p         port to be used
     --content-type, -c prefered MIME value for Content-Type response header
     --open, -o         open browser or not automatically

  Examples
     $ echo '<html>Hello!</html>' | stdin-server
     $ pbpaste | stdin-server # only with Mac
```
