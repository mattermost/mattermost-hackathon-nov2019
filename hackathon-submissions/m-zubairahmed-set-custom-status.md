<p align="center">
  <img src="https://user-images.githubusercontent.com/17708702/69645282-d6cd4080-105d-11ea-95e2-d70260345ae1.png" width="250" height="120" />
  <h3 align="center">Set custom status</h3>
  <h5 align="center"><i>A feature for web app</i></h5>
</p>

![blue-line](https://i.imgur.com/cETzBqq.png)

**Author** : [M Zubair Ahmed](https://github.com/M-ZubairAhmed)

**Submittions** : [Mattermost hackathon Nov 2019](https://github.com/mattermost/mattermost-hackathon-nov2019)

**Thanks to** : [Hossein Ahmadian-Yazdi](https://github.com/hahmadia), [Mattermost community](https://community.mattermost.com/login)

![blue-line](https://i.imgur.com/cETzBqq.png)

#### Description
The feature allows one to set a custom text based status in addition to their current status to the mattermost web app.

#### Project links
The feature can be found at **hackathon-nov2019** branch at the following repositories :
- Server : https://github.com/M-ZubairAhmed/mattermost-webapp/tree/hackathon-nov2019
- Web : https://github.com/M-ZubairAhmed/mattermost-webapp/tree/hackathon-nov2019
- Redux : https://github.com/M-ZubairAhmed/mattermost-redux/tree/hackathon-nov2019


#### Flow

<details><summary>1. Start the server and webapp</summary>
<p>
  
Server

```bash
make run-server
```
App

```bash
make run
```
</p>
</details>

<details><summary>2. Connect redux app to webapp.</summary>
<p>

```bash

npm run dev

```

</p>

</details>


<details><summary>3. Login with a user into the app and click on the status icon beside profile picture, This will open a new dialog that will ask user to set a custom text along with mark it as a status. Fill in the information and click save</summary>



<p>



  

  ![Peek 2019-11-26 21-03](https://user-images.githubusercontent.com/17708702/69648051-7db3db80-1062-11ea-8a88-6500fb018442.gif)



</p>







</details>

<details><summary>4. Open another incognito, login with another user, head to former user direct chat to see the status the user have written i.e in a meeting</summary>



<p>



  

![Peek 2019-11-26 21-11](https://user-images.githubusercontent.com/17708702/69648513-5f9aab00-1063-11ea-8378-1fd30f30baa1.gif)




</p>







</details>





