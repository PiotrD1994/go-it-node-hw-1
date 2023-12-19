import {invokeAction} from './cli.js'
import { Command } from 'commander'

const program = new Command()
program
.option("-a, --action <type>", "choose action")
.option("-i, --id <type>", "user id")
.option("-n, --name <type>", "user name")
.option("-e, --email <type>", "user email")
.option("-p, --phone <type>", "user phone")

program.parse(process.argv)

const args = program.opts();

invokeAction(args);