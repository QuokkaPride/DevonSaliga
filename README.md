nohttps://quokkapride.github.io/DevonSaliga

A website tracking the rapid progress I am making becoming the world's best engineer.
I am starting late in life, but that won't stop me. 

24.09.30 Deployed App on Internet Computer

24.10.01 Refactored Firestore backup script for Beepboop. Added save checkpoints, rest periods, and error logging and removed repetitive code. 

24.10.02 Using Motoko and Canister UI got deposit and withdrawal features working banking app on Internet Computer.

24.10.03 Motoko conditionals & orthogonal persistence 

24.10.04 Added compound interest calc to ICP app

24.10.05 firestore research

24.10.06 firestore youtube videos + ICP app

24.10.07 frontend work for ICP app

24.10.08 Using js in keeper app on ICP

24.10.09 Trying to get out of dependency hell with my google cloudfunctions. 

24.10.10 Motoko dapp to check balance 

24.10.11 Motoko dapp transfer function working for tokens.

24.10.12 Meeting with Lucas to get help on google cloud build and creating a dockerimage without a dockerfile that runs Firebase cloud functions. Goal is to get stage test env up and running and finally get out of dependency hell. 

24.10.13 Fireship videos on firebase functions. Need to get out of dependency hell. 

24.10.14 Using google buildpacks to build base image for firestore cloud functions

24.10.15 Finally out of dependency hell after over 1 month! Lesson learned: ask for help sooner. I also submited my changes to an open sourced project where the instructions were only for mac's and no windows. 

24.10.21 Silly python game https://replit.com/@devon17/PlayingAround#main.py

24.10.24 Made python caesar cipher. Also spent hours trying to get apis working between Teach and Speak app that calculates total drills taken and displays next to each student a class.   

24.10.25 Made python calculator. Got total drills calculating. Involved db queries, API calls, and lots of advanced react features!!!!!

24.10.27 React useState work 

24.10.28 Python prime number determiner. Python number guessing game. Made jenky place where anyone can play my games: https://replit.com/@devon17/PlayingAround#main.py

24.10.29 Python higher lower game. improved UI of my game database https://replit.com/@devon17/PlayingAround

24.10.30 Python os for coffee machine. https://replit.com/@devon17/PlayingAround

24.10.31 Python objets and classes work. JS Beepboop work trying to get student docs in firestore to update after lessons. 

24.11.01 JS Finally got studentLessons docs to update was wasPromoted and wasAttended in local. Payday today for Beepboop. 

24.11.02 Used OpenAI whisper in python to transcribe beepboop audio of me explaining how performance metrics are calculated and why they're important. Shared with team. 

24.11.03 Built Python turtle race 

24.11.04 Built half of Python snake game. Huge react dev milesetone: when legacy students log in and book  a class, script runs in background that updates how many total class and total promotiosn they've had and saves it to their student document in firestore. 

24.11.05 Finished Python snake game! 

24.11.06 Working on python pong game.

24.11.07 Traggic finished my python pong game but forgot to update git 

24.11.08 Making a turtle crossing road game

24.11.08 Got rendering working in TeachApp and deployed to stage.

24.11.09 TeachApp and Cloud Functions deployment at Beepboop went perfectly! NGL feel on top of the world.  

24.11.10 Figuring out file paths in Python to update files stored locally

24.11.11 Manipulating data in csv in python 

24.11.12 traveling to nyc. No progress made. 

24.11.13 Made guessing states game on map. Saved missing states to csv. 

24.11.14 Python *args *kwargs and using Tkinter for building GUI

24.11.15 Python tiny timer. First downloadabled app.

24.11.16 Python password creator

24.11.17 Tiny Timer app after two days of use, was prevented to be opened by windows virus protecter. Learned I likely need to do CA before I distribute software. Also updated Python Password creator to write to JSON files instead of text. Made python flashcard program. 

24.11.18 made Python STMP email automation to read CSV and send birthday emails out. Connected projected folder to git https://github.com/QuokkaPride/Python100

24.11.19 Python APIs and STMP 

24.11.20-21.11.24 Have been publishing projects directly to https://github.com/QuokkaPride/Python100

24.11.26 pausing python dev to launch AI stories with genkit for Blackfriday product launch and Beepboop sale. 

24.11.28 sale banner 

24.11.29 got google text to speech working for dialogs! 

24.12.03 massive issues with ES6 and CommonJS in cloud functions. Also fact that Genkit require v2 firebase fucntion and project is v1. Can't get front end to call genkit functions.

24.12.04 same issues as yestday. 

24.12.05 custom middleware post functions upgrade likely issue. This is painful. After 8 hours of straight troubleshooting I lose hope. I know I can overcome it tough!  

24.12.06 Still in a jam. Need to launch Beepboop Stories this week. Going to try to revert all pacakges back to when they wre working in harmony for basic functionality and then try something different with genkit. Is programming on a legacy codebase just dependency hell? Remind myself how much I'm learning and stay positive. 

24.12.07  Issue resolved last night! Valuable lesson learned: 1) If you launch a feature (no matter how small) do testing before doing anything like a package update. My issue was actually my feature change, not  my package upgrade (which I spent days trying to fix because I was convinced I needed to resolve the breaking changes inorder to launch my feature).   

24.12.09 Started implementing user feedback. Adding audio controls. 

24.12.12 Developed E-Notation prompt to Spanish dialogs can be created with different English level codings (E1, E2, E3 etc) representing the frequency of english translated words. Making a parser to send cleaned text approriate for the level of English translation desired by student. 

24.12.15 Backend migration for stories.

24.12.16 Backend migration for stories.

24.12.19 Beepboop Stories is looking amazing. Really proud of it so far. May rebrand to "adventures" as the AI comoponent will give students a greator control of how the stories play out. Check it out: https://speak.beepboop.us/stories. Yesterday I looked at all the feedbac I got from students on what I created and I was able to knock so many out one by one. It was my best programming day ever. It's so nice to improve thing in producion that you've build from scratch. THere is no mystery to uncover and just pure progress! What a thrill! 

24.12.20 Boring day of connecting backend to front so stories can be automatically added to db from genkit then edited without manually touching the db.  

24.12.21 Google is killing me. They sold their domains business to squarespace, who doesn't support wildcard subdomains and UTM forwarding (why are they even in this business without those!). Features critical for us to maintain the health of our marketing channels (track where clicks are and more importnly ARE NOT coming from so we can go see why. I'm stoping all dev work on fun things until I find a new provider and fix this. I wish the PM at google was more on their game and notified us of this risk so we could have prepared.  

24.12.24 Feel on on top of the world. The switch to cloudfare worked and caused zero distruption to classes). I stil can't figure out how to get the images from cloudstorage to laod with out a secuirty warning. Need an SSL cert. Cloudfare is amazing though. You can do all this advanced routing logic with js. Now all our UTMs are be tracked! We are blessed. 

24.12.25 Fireship data modeling course

24.12.26 Got stage test enviroement working on cloudfare. All DNS migration to cloudfare tests passed!

24.12.27 Working on auto assigning voices for characters with backup selection logic when there are conflicts. 

25.01.01 Updated macro to automate payment to team today. 

25.01.02 Worked on tech and AI goals for year. 

25.01.03 Exploring ML courses. Will give https://see.stanford.edu/course/cs229 3 lectures. Want to make sure I'm able to apply concepts immediately into projects. 

25.02.04 enotiation for stories. working on training data for E1 breakdown of sentences. 

25.02.05 finished story 3 E1 notation manual markup 

25.01.07 story 4 generated ans prompt updated. 

25.01.09 on vacation. just watched genkit rag video 

25.01.10 on vacation. reading text book on game design for stories inspiration 

25.01.15 vacation over. 250 pages of game design book worked through. 

25.01.16 set okrs for beepboop and personal 

convo with Kirsten about transition to dev world 

25.03.12-16 custom claims troubleshooting 

25.03.31-25.04-04 Troubleshooting RAG issues

25.04.05 Awarded six week engineering contract at Chariot! Thank you Muni Data Network codebase!!! 

25.04.06-25.04.10 Beepboop taxes

25.04.08-25.04.11 Chariot material review


