# 41-bump-map
A react native app logging geolocation and accelerometer data

# Behavior

Data monitoring:
  - all times monitor speed data

Data acquisition:
  - only when conditions are met:
  - saved locally
  - consider thoughtfully removing junk data locally to reduce memory useage

Data upload:
  - when charging
  - when battery above 90%
  - when on wifi

Data deletion:
  - deletes local data when data sent to server
    - await confirmation?

Data-storage on server:
  - anonymize
  - place of residence could be guessed?
    - define trips and trim trip data by X minutes?
    - 

Data analysis on server:
  - extremely complicated
  - allow users to generate SQL queries of their own?
    - probably not


Accelerometer data:
  - when speed over a certain amount (~20 mph)
  - for X minutes after speed is over threshold
    - don't switch off when car slows down on slow roads

Location data:
  - at all times 

Questions:
  - biking
  - driving

Usability
  - documentation to explain data handling
  - open source, so people can see the code is trustworthy
  - security around server code ?
  - allow users to toggle permissions
  - give users a UI screen to view currently given permissions
  - 


Project roadmap:
- accelerometer data
- accelerometer data saved locally



