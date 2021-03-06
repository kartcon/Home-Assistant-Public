# Home Assistant Config

## Project Information
<div align="center">
<a href="https://github.com/kartcon/Home-Assistant-Public/commits/master">
  <img src="https://img.shields.io/github/last-commit/kartcon/Home-Assistant-Public?style=plastic">
</a>
<a href="https://github.com/kartcon/Home-Assistant-Public/stargazers">
  <img src="https://img.shields.io/github/stars/kartcon/Home-Assistant-Public?style=plastic">
</a>
<a href="https://github.com/kartcon?tab=followers">
  <img src="https://img.shields.io/github/followers/kartcon?style=plastic">
</a>
<a href="https://github.com/kartcon/Home-Assistant-Public/watchers">
  <img src="https://img.shields.io/github/watchers/kartcon/Home-Assistant-Public?style=plastic">
</a>
<a href="https://github.com/kartcon/Home-Assistant-Public">
  <img src="https://img.shields.io/badge/Home%20Assistant-103.5-blue?style=plastic">
</a>
</div>

This is my current [Home Assistant](https://home-assistant.io) configuration. The primary goal of this project is to automate as much as possible, so that the homeowners can go about their daily activity and not have to think about the mundane things like turning lights on and off, searching for a front door key or closing and locking perimeter access points. The automation needs to work invisibly, with little or no prompting and should enhance everyday life, not encumber it technological challenges. This journey began in 2011 with just a few switches and outlets and has become an everyday part of our lives.

Although we use almost no voice command routines, we find ourselves talking to, and about, Vera, Alexa and Home Assistant (yet unnamed) as active participants in our home. Sort of like having a butler or personal assistant at our beck and call, lurking somewhere in the shadows; there when you need them but otherwise unseen. Its not uncommon to hear my wife say "Thank you" to no one in particular when the lights come on as we enter the room.

This configuration constantly evolves, so be sure to :star: this repository to keep abreast of the updates. It changes almost daily and becomes more efficient as the core systems continue to improve.

<div align="center">
<img src="https://img.shields.io/github/commit-activity/w/kartcon/Home-Assistant-Public?style=plastic">
<img src="https://img.shields.io/github/repo-size/kartcon/Home-Assistant-Public?style=plastic">
<img src="https://img.shields.io/github/languages/code-size/kartcon/Home-Assistant-Public?style=plastic">
<a href="https://github.com/kartcon/Home-Assistant-Public/issues">
  <img src="https://img.shields.io/github/issues/kartcon/Home-Assistant-Public?style=plastic">
</a>
</div>

## Hardware

The following is a list of hardware deployed in this home automation project. Z-Wave is the technology of choice unless there are no other alternatives.

### Computer
- Apple I-Mac, running macOS Mojave on a 2.7 GHz Intel Core i5 processor with 8 GB RAM and a 500 GB SSHD
- 6TB NAS Raid Array [LaCie](https://www.amazon.com/gp/product/B003YUEF0E/ref=ppx_yo_dt_b_asin_title_o00_s02?ie=UTF8&psc=1)

### Network
- Primary Z-wave hub: [Vera Secure](https://getvera.com/products/verasecure)
- Secondary Z-wave hub: [Vera 3](https://getvera.com/collections/controllers)
- Low Power RF Network: [433MHz](https://www.vesternet.com/pages/vera-controller-comparison)
- Wifi: Unifi USG Cloud Key, 2 AP's, 2 Switches (https://unifi-network.ui.com)
- Zone Controller [Leviton](https://www.amazon.com/gp/product/B004KN87OE/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)

### Mobile Devices
- Phones (2): [iPhone 8](https://www.apple.com)
- Tablet: [iPad](https://www.apple.com)
- Tablet: [iPad Mini](https://www.apple.com)

### Switches & Outlets
- On/Off Switches (22) [GE/Jasco](https://byjasco.com/products/category/home-automation/z-wave-home-automation)
- Dimmable Switches (11) [GE/Jasco](https://byjasco.com/products/category/home-automation/z-wave-home-automation)
- Z-Wave Outlets (11) [GE/Jasco](https://byjasco.com/products/category/home-automation/z-wave-home-automation)
- Exterior Outlets (2) [GE/Jasco](https://byjasco.com/products/category/home-automation/z-wave-home-automation)

### LED Lighting
- RGBW Bulbs (5) [LIFX](https://www.lifx.com/)
- LED Light Strip (1) [SuperNight WiFi](https://www.amazon.com/gp/product/B00DTOAWZ2/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

### Door Locks
- Z-Wave Deadbolts (2) [KwikSet](https://www.amazon.com/gp/product/B07BLJ38SJ/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)

### Window & Door Sensors
- 433Mhz Door/Window Sensors (9) [2-Gig](https://www.google.com/aclk?sa=l&ai=DChcSEwiTi4m9-rrkAhXR4MgKHYTBBvEYABATGgJxdQ&sig=AOD64_0hXetIPpfnUBeq_6YJUTobka1pCQ&ctype=5&q=&ved=0ahUKEwjAsoC9-rrkAhWhslkKHfJoBWoQ9aACCFk&adurl=)

### Multimedia Components
- Echo Dots (2) [Amazon](https://www.amazon.com/2nd-generation-amazon-echo-dot-black/s?k=2nd+generation+amazon+echo+dot+black)
- Sonos One Speakers (2) [Sonos](https://www.sonos.com/en-us/shop/one.html)
- LG Smart TV (1)
- Sony Smart TV (1)
- Roku TV

### Cameras
- Dahua 8 Port POE DVR [Dahua](https://www.cctvsecuritypros.com/video-recorders/8-channel-ip-camera-poe-network-video-recorder/)
- ONVIF Exterior POE Cameras (4) [SV3C Dome](https://www.amazon.com/gp/product/B07DXNDXZR/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1), [SV3C Bullet](https://www.amazon.com/gp/product/B0777PNBY4/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1)
- Foscam Indoor WiFi Cameras (8) [Foscam](https://www.foscam.com/) [Dome](https://www.amazon.com/gp/product/B006ZPWS4U/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1), [Bullet](https://www.amazon.com/gp/product/B003YUEF0E/ref=ppx_yo_dt_b_asin_title_o00_s02?ie=UTF8&psc=1)

### Other Components
- Z-Wave Thermostats (2) [Trane](https://www.amazon.com/TRANE-Thermostat-Z-Wave-Works-Alexa/dp/B00SYPSIRU/ref=sr_1_2?crid=2Y00O6RUFC4C9&keywords=trane+thermostat&qid=1567731360&s=gateway&sprefix=trane%2Caps%2C154&sr=8-2)
- Rachio 8 Zone Irrigation Controller (1) [Rachio](https://www.amazon.com/gp/product/B01D1NMLJU/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1)
- Sleep Number Smart Mattress (1)
- Aeon Z-Wave Siren (1) [AeoTec](https://www.amazon.com/Aeotec-Z-Wave-Strobe-alerts-Battery/dp/B00PKKM2HO/ref=sr_1_12?crid=3EQ7EBN33YDS4&keywords=aeon+zwave&qid=1567732324&s=gateway&sprefix=aeon+z%2Caps%2C149&sr=8-12)
- Aeon Z-Wave Door Bell (1) [AeoTec](https://www.amazon.com/Aeotec-Aeon-Labs-ZW056-Doorbell/dp/B0182XG27Q/ref=sr_1_9?keywords=aeotec+zwave+doorbell&qid=1567732437&s=gateway&sr=8-9)
- Z-Wave Garage Door Tilt Sensors (2) [Ecolink](https://www.amazon.com/Z-Wave-Plated-Reliability-Garage-TILT-ZWAVE2-5-ECO/dp/B01MRZB0NT/ref=sr_1_3?crid=3KL3WCYTKFVXU&keywords=zwave+tilt+sensor&qid=1567732491&s=gateway&sprefix=zwave+tilt%2Caps%2C149&sr=8-3)
- Z-Wave 4in1 Multi Sensors (4) [Zooz](http://www.getzooz.com/zooz-zse40-4-in-1-sensor.html)
- 5in1 Weather Station (1) [Acurite](https://www.amazon.com/gp/product/B00T0K8MN8/ref=ppx_yo_dt_b_asin_title_o03_s01?ie=UTF8&psc=1)

## Screenshots
Note that these screenshots are provided in a best-effort manner, and may not reflect the current state of the configuration.

![Home](/screen_shots/Home.png)
![Rooms](/screen_shots/Rooms.png)
![HVAC](/screen_shots/HVAC.png)
![Security](/screen_shots/Security.png)
![Floor One](/screen_shots/FloorOne.png)
![Floor Two](/screen_shots/FloorTwo.png)
![Users](/screen_shots/Users.png)
![Traffic](/screen_shots/Traffic.png)
![Radar](/screen_shots/Radar.png)
![Map](/screen_shots/Map.png)
![Media Players](/screen_shots/MediaPlayers.png)
![Battery](/screen_shots/Battery.png)
![Config](/screen_shots/Config.png)
![System](/screen_shots/System.png)

## By the Numbers
Everybody loves stats. Its how we relate to how big, bad or powerful things are. Its our chance to brag, just a little, about what we're proud of. So here's what makes this system Big, Bad Ass and Powerful.
- 186	Automations, 36	Binary Sensors, 15 Cameras, 2	Climate Sensors, 48 Input Booleans, 7 Input Dates, 39 Input Numbers, 11 Input Selects, 39 Lights, 4 Locks, 15 Media Players, 2 Persons, 79 Scripts, 186 Sensors, 26 Switches, 6 Device Trackers, 13 Zones and more than 17,000 lines of YAML code.

## Links
- [Home Assistant Homepage](<https://home-assistant.io/>)
- [Home Assistant Forums](<https://community.home-assistant.io/>)
- [Home Assistant Discord Chat](<https://discord.gg/c5DvZ4e>)
- [Other Featured Home Assistant Configurations](<https://home-assistant.io/cookbook/>)
- [Home Assistant GitHub Source Repository](<https://github.com/home-assistant/home-assistant>)
- [Official Home Assistant Demo](<https://home-assistant.io/demo/>)

## Special Thanks
Without the help and guidance of the countless folks who are way better at this than myself, this project would have never progressed to where it is today. Below are just some of the folks who have freely contributed their code to help others. There mere many others that simply motivated me. Thanks to all.

| [CCOSTAN](<https://github.com/CCOSTAN/Home-AssistantConfig>) | [SilvrrGIT](<https://github.com/SilvrrGIT/HomeAssistantg>)
| [arsaboo](<https://github.com/arsaboo/homeassistant-config>) | [geekofweek](<https://github.com/geekofweek/homeassistant>)
| [frenck](<https://github.com/frenck/home-assistant-config>) | [bruhautomation](<https://github.com/bruhautomation/BRUH3-Home-Assistant-Configuration>) 
| [stanvx](<https://github.com/stanvx/Home-Assistant-Configuration>) | [DubhAd](<https://github.com/DubhAd/Home-AssistantConfign>) |

## License
![GitHub](https://img.shields.io/github/license/kartcon/Home-Assistant-Public)
MIT License

Copyright (c) 2019 Art Davis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
