
# Drazox's Notify for FiveM

A simple notify for simple people!
I made this a long time ago for a server wich never opened!
that why it has mv_notify in events!

Using FontAwesome 6.4.2 and MDI 7.4.47

# Showcase

![Imgur](https://i.imgur.com/zhPg4XW.gif)
[Link if image not loading!](https://i.imgur.com/zhPg4XW.gif)

# Usage
```lua
TriggerEvent('mv_notify:success', 'Succesfully robbed the bank!', 5000)
TriggerEvent('mv_notify:info', 'Information', 6000)
TriggerEvent('mv_notify:error', 'Failed lockpicking', 7000)
TriggerEvent('mv_notify:warn', 'You have been given a ticket! \n You need to pay it in 30 days!', 8000)
```
And there is the custom one!
this uses
```lua
TriggerEvent('mv_notify:custom', icon, text, ms, hex-color)
```
# FAQ

### Why use events?  
I use it mostly on server side

### Why does the UI code look bad?  
Deal with it!

# License
GNU General Public License v3.0
